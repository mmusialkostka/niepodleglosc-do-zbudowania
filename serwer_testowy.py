"""Static server for docs/ + mock of Kod.gs at /mock (same API). Test only."""
import json, sys, random, os
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from urllib.parse import urlparse, parse_qs
from functools import partial

ROOT = sys.argv[1]
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 8810
C = {}

def kod(x):
    x = ''.join(ch for ch in str(x or '').upper() if ch.isalnum())
    return x if 4 <= len(x) <= 8 else ''

class H(SimpleHTTPRequestHandler):
    def js(self, o):
        b = json.dumps(o).encode()
        self.send_response(200); self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*'); self.send_header('Content-Length', str(len(b)))
        self.end_headers(); self.wfile.write(b)
    def do_GET(self):
        u = urlparse(self.path)
        if u.path != '/mock':
            return super().do_GET()
        p = {k: v[0] for k, v in parse_qs(u.query).items()}
        s = kod(p.get('s'))
        if not s: return self.js({'ok': True, 'info': 'mock'})
        if p.get('co') == 'stan': return self.js({'ok': True, 'cur': C.get(s + ':cur')})
        if p.get('co') == 'wyniki':
            m = C.get(s + ':q:' + p.get('q', ''), {}); v = list(m.values()); random.shuffle(v)
            return self.js({'ok': True, 'n': len(v), 'v': v})
        return self.js({'ok': False})
    def do_POST(self):
        if urlparse(self.path).path != '/mock': return self.send_error(404)
        d = json.loads(self.rfile.read(int(self.headers['Content-Length'])))
        s = kod(d.get('s'))
        if not s: return self.js({'ok': False, 'blad': 'kod'})
        a = d.get('akcja')
        if a in ('pytanie', 'reset'):
            tok = C.get(s + ':tok')
            if tok and tok != str(d.get('tok')): return self.js({'ok': False, 'blad': 'token'})
            C[s + ':tok'] = str(d.get('tok'))
            if a == 'reset': C.pop(s + ':q:' + d.get('q', ''), None)
            else:
                pp = d.get('p'); C[s + ':cur'] = pp
            return self.js({'ok': True})
        if a == 'glos':
            cur = C.get(s + ':cur')
            if not cur or cur.get('id') != d.get('q'): return self.js({'ok': False, 'blad': 'zamkniete'})
            C.setdefault(s + ':q:' + d['q'], {})[d['u']] = d['v']
            return self.js({'ok': True})
        return self.js({'ok': False})
    def log_message(self, *a): pass

ThreadingHTTPServer(('127.0.0.1', PORT), partial(H, directory=ROOT)).serve_forever()
