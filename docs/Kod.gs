/**
 * „Niepodległość do zbudowania” – zaplecze do głosowania telefonami.
 *
 * Działa bez arkusza: głosy trzyma przez 6 godzin w pamięci podręcznej
 * Google (CacheService) i potem same znikają. Nie zbiera imion ani
 * żadnych danych osobowych. Każda klasa dostaje losowy kod sesji.
 *
 * Jak uruchomić (jednorazowo, ok. 3 minuty):
 *  1. Wejdź na https://script.google.com i kliknij „Nowy projekt”.
 *  2. Usuń zawartość pliku Kod.gs i wklej cały ten plik. Zapisz (Ctrl+S).
 *  3. Wdróż → Nowe wdrożenie → (koło zębate) Aplikacja internetowa.
 *     Wykonaj jako: Ja. Kto ma dostęp: Każdy. Kliknij „Wdróż”
 *     i zezwól na dostęp (Zaawansowane → Przejdź do projektu).
 *  4. Skopiuj adres aplikacji internetowej (kończy się na /exec)
 *     i wpisz go w pliku docs/ustawienia.js w miejsce ADRES: "".
 *
 * Jedno wdrożenie wystarczy dla wszystkich wychowawców w szkole:
 * każda lekcja ma własny kod sesji, więc klasy sobie nie przeszkadzają.
 */

const CZAS = 21600;           // 6 godzin (maksimum CacheService)
const MAX_TEKST = 90;         // długość odpowiedzi tekstowej

function doGet(e) {
  const p = (e && e.parameter) || {};
  const s = kod(p.s);
  if (!s) return wyslij({ ok: true, info: "Zaplecze lekcji „Niepodległość do zbudowania” działa." });
  const c = CacheService.getScriptCache();

  if (p.co === "stan") {
    return wyslij({ ok: true, cur: czytaj(c, s + ":cur", null) });
  }
  if (p.co === "wyniki") {
    const q = ident(p.q);
    const m = czytaj(c, s + ":q:" + q, {});
    const v = Object.keys(m).map(function (k) { return m[k]; });
    tasuj(v);                  // kolejność bez związku z kolejnością głosowania
    return wyslij({ ok: true, n: v.length, v: v });
  }
  return wyslij({ ok: false, blad: "nieznane" });
}

function doPost(e) {
  let d;
  try { d = JSON.parse(e.postData.contents); } catch (err) { return wyslij({ ok: false, blad: "format" }); }
  const s = kod(d.s);
  if (!s) return wyslij({ ok: false, blad: "kod" });
  const c = CacheService.getScriptCache();
  const lock = LockService.getScriptLock();
  try { lock.waitLock(8000); } catch (err) { return wyslij({ ok: false, blad: "zajete" }); }
  try {
    if (d.akcja === "pytanie" || d.akcja === "reset") {
      // tylko ekran nauczyciela, który pierwszy użył kodu (token)
      const tok = c.get(s + ":tok");
      if (tok && tok !== String(d.tok)) return wyslij({ ok: false, blad: "token" });
      if (!tok) c.put(s + ":tok", String(d.tok).slice(0, 40), CZAS);
      if (d.akcja === "reset") {
        c.remove(s + ":q:" + ident(d.q));
      } else {
        const cur = d.p ? {
          id: ident(d.p.id), typ: String(d.p.typ || "czekaj").slice(0, 12),
          tresc: String(d.p.tresc || "").slice(0, 300),
          opcje: (d.p.opcje || []).slice(0, 12).map(function (x) { return String(x).slice(0, 160); }),
          lewo: String(d.p.lewo || "").slice(0, 60), prawo: String(d.p.prawo || "").slice(0, 60),
          t: Date.now()
        } : null;
        c.put(s + ":cur", JSON.stringify(cur), CZAS);
      }
      return wyslij({ ok: true });
    }

    if (d.akcja === "glos") {
      const cur = czytaj(c, s + ":cur", null);
      const q = ident(d.q);
      if (!cur || cur.id !== q) return wyslij({ ok: false, blad: "zamkniete" });
      const u = String(d.u || "").slice(0, 24);
      if (!u) return wyslij({ ok: false, blad: "u" });
      let v = d.v;
      if (cur.typ === "tekst") v = String(v || "").replace(/\s+/g, " ").trim().slice(0, MAX_TEKST);
      else if (cur.typ === "linia") v = Math.max(0, Math.min(100, Math.round(Number(v) || 0)));
      else { v = Math.round(Number(v)); if (!(v >= 0 && v < cur.opcje.length)) return wyslij({ ok: false, blad: "v" }); }
      if (v === "") return wyslij({ ok: false, blad: "pusty" });
      const klucz = s + ":q:" + q;
      const m = czytaj(c, klucz, {});
      if (Object.keys(m).length >= 80 && !(u in m)) return wyslij({ ok: false, blad: "limit" });
      m[u] = v;
      c.put(klucz, JSON.stringify(m), CZAS);
      return wyslij({ ok: true });
    }
    return wyslij({ ok: false, blad: "akcja" });
  } finally {
    lock.releaseLock();
  }
}

function czytaj(c, k, dom) {
  const x = c.get(k);
  if (!x) return dom;
  try { return JSON.parse(x); } catch (err) { return dom; }
}
function kod(x) { x = String(x || "").toUpperCase().replace(/[^A-Z0-9]/g, ""); return x.length >= 4 && x.length <= 8 ? x : ""; }
function ident(x) { return String(x || "").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 30); }
function tasuj(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; } }
function wyslij(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
