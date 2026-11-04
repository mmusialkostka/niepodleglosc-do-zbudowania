# Niepodległość do zbudowania

Interaktywna lekcja wychowawcza na 11 listopada dla liceum (klasy I–IV, 45 minut).
Prowadzi wychowawca, który nie musi być historykiem: aplikacja niesie treść, a nauczyciel moderuje rozmowę.

**Aplikacja:** https://mmusialkostka.github.io/niepodleglosc-do-zbudowania/
**Materiały do druku:** https://mmusialkostka.github.io/niepodleglosc-do-zbudowania/druk.html

## Przebieg

| Czas | Etap | Co się dzieje |
|---|---|---|
| 0–5′ | 1. Wejście | Dwa pytania z zaskoczeniem, głosowanie telefonami |
| 5–13′ | 2. Śledztwo | Oś wydarzeń jesieni 1918, klasa wybiera „swoją” datę święta |
| 13–28′ | 3. Państwo od zera | Symulacja w grupach: 7 problemów, 3 żetony, potem odsłona |
| 28–33′ | 4. Zamknięcie | Linia wartości i anonimowa refleksja (ściana karteczek lub chmura) |
| 33–43′ | 5. Wiele twarzy | Postacie z 1918 r., potem zwrot akcji: współcześni politycy i pytanie o porozumienie |
| 43–45′ | Puenta | Jedno zdanie na ekranie końcowym |

## Jak użyć (wychowawca)

1. Wydrukuj z `druk.html`: karty problemów (1 komplet na grupę) i kartę notatek.
2. Otwórz aplikację na komputerze z projektorem, wybierz termin (przed / po 11 listopada) i kliknij „Rozpocznij lekcję”.
3. Przyciski sterowania pojawiają się po najechaniu na dół ekranu. Klawisze: `→` dalej, `N` ściąga dla wychowawcy, `T` trudne pytania, `Q` kod QR, `F` pełny ekran.

Bez internetu i bez telefonów lekcja działa w trybie ręcznym (głosy wpisuje się przyciskami + i −).

## Pliki

- `docs/index.html` – ekran projektora z trybem nauczyciela
- `docs/glos.html` – strona dla telefonów uczniów (otwierana z kodu QR)
- `docs/druk.html` – materiały do druku (instrukcja, scenariusz, karty, karta notatek, biogramy); gotowe PDF-y w `docs/pdf/`
- `docs/tresc.js` – **wszystkie teksty lekcji** w jednym miejscu (do poprawiania)
- `docs/ustawienia.js` – adres zaplecza do głosowania
- `docs/img/` – zdjęcia z 1918–1921 i ich opisy (`zrodla.js`)
- `docs/Kod.gs` – zaplecze do głosowania telefonami (Google Apps Script, bez arkusza i bez danych osobowych)

## Własna kopia (inna szkoła)

1. Zrób fork repozytorium i włącz GitHub Pages (gałąź `main`, folder `/docs`).
2. Wdróż `docs/Kod.gs` jako aplikację internetową Google Apps Script (instrukcja na początku pliku).
3. Wpisz adres `/exec` w `docs/ustawienia.js` (pole `ADRES`) oraz adres swojej strony w polu `STRONA`.

## Test lokalny

`python serwer_testowy.py docs 8810` uruchamia stronę z atrapą zaplecza pod `/mock`
(do testów wpisz tymczasowo `ADRES: "/mock"` w `ustawienia.js`).

Materiał uniwersalny, bez odniesień do konkretnej szkoły. Kod QR: biblioteka qrcode-generator (Kazuhiko Arase, licencja MIT). Kroje: Oswald, Inter i Lora (SIL Open Font License). Zdjęcia: Wikimedia Commons (z epoki: domena publiczna i CC0; współczesne: CC BY / CC BY-SA z podaniem autora) (lista w `docs/img/zrodla.js` i w scenariuszu).
