/* =====================================================================
   Niepodległość do zbudowania – TREŚĆ LEKCJI
   Ten plik zawiera wszystkie teksty aplikacji. Możesz je poprawiać
   bez dotykania reszty kodu (zachowaj cudzysłowy i przecinki).
   W tekstach nie używamy długich myślników.
   ===================================================================== */
window.TRESC = {

  tytul: "Niepodległość do zbudowania",
  podtytul: "Lekcja wychowawcza z okazji Narodowego Święta Niepodległości",

  /* Warianty zależne od terminu lekcji */
  warianty: {
    przed: {
      nazwa: "Lekcja przed 11 listopada",
      otwarcie: "Za kilka dni mamy wolne z okazji Święta Niepodległości. Zanim z niego skorzystamy, sprawdźmy, co właściwie świętujemy.",
      zamkniecie: "Kiedy 11 listopada zobaczycie flagi na ulicach, pomyślcie nie o jednym dniu, ale o latach pracy tysięcy ludzi. I o tym, co wy możecie zbudować."
    },
    po: {
      nazwa: "Lekcja po 11 listopada",
      otwarcie: "Kilka dni temu mieliśmy wolne z okazji Święta Niepodległości. Sprawdźmy, co właściwie świętowaliśmy.",
      zamkniecie: "Święto minęło, ale niepodległość nie jest jednym dniem w kalendarzu. Trzeba ją budować i podtrzymywać także dziś, na co dzień."
    }
  },

  /* Etap 1 – pytania wejściowe */
  pytanie1: {
    tresc: "Co wydarzyło się 11 listopada 1918 roku?",
    opcje: [
      "Sejm ogłosił niepodległość Polski.",
      "Rada Regencyjna przekazała Józefowi Piłsudskiemu naczelne dowództwo nad wojskiem.",
      "Podpisano traktat wersalski, który przywrócił Polskę na mapę.",
      "Uchwalono pierwszą konstytucję odrodzonej Polski."
    ],
    poprawna: 1,
    wyjasnienie: "11 listopada nikt nie ogłosił niepodległości. Rada Regencyjna oddała Piłsudskiemu dowództwo nad wojskiem. Tego samego dnia w Compiègne podpisano rozejm kończący walki I wojny światowej na froncie zachodnim, a w Warszawie rozbrajano żołnierzy niemieckich.",
    sciaga: [
      "A: Sejm jeszcze nie istniał. Wybory odbyły się dopiero 26 stycznia 1919 r.",
      "C: traktat wersalski podpisano 28 czerwca 1919 r.",
      "D: Mała Konstytucja to luty 1919 r., konstytucja marcowa to 1921 r.",
      "Większość klasy zwykle wybiera A. To dobrze: zaskoczenie otwiera ciekawość. Nie komentuj wyników, zanim nie odsłonisz odpowiedzi."
    ]
  },

  pytanie2: {
    tresc: "Ile walut było w obiegu na ziemiach polskich pod koniec 1918 roku?",
    opcje: ["Jedna", "Dwie", "Cztery lub więcej"],
    poprawna: 2,
    wyjasnienie: "Co najmniej cztery: marka polska, marka niemiecka, korona austro-węgierska i rubel rosyjski (w kilku emisjach), a lokalnie także waluty okupacyjne.",
    przejscie: "Okazuje się, że 11 listopada nikt nie ogłosił niepodległości, a nowe państwo miało więcej walut niż ministerstw. Sprawdźmy, jak to właściwie wyglądało.",
    sciaga: [
      "Pytanie jest mostem do symulacji w etapie 3 (karta „Pieniądz”).",
      "Po odsłonie przeczytaj na głos zdanie przejścia widoczne na ekranie."
    ]
  },

  /* Etap 2 – oś czasu */
  os: [
    { data: "7 X 1918", krotko: "7 października", wyd: "Rada Regencyjna (organ powołany przez Niemcy i Austro-Węgry) ogłasza orędzie o niepodległości Polski.", arg: "Pierwsza formalna deklaracja niepodległości." },
    { data: "7 XI 1918", krotko: "7 listopada", wyd: "W Lublinie powstaje Tymczasowy Rząd Ludowy Republiki Polskiej z Ignacym Daszyńskim na czele.", arg: "Pierwszy rząd niezależny od zaborców." },
    { data: "10 XI 1918", krotko: "10 listopada", wyd: "Józef Piłsudski, zwolniony z więzienia w Magdeburgu, przyjeżdża do Warszawy.", arg: "Powrót postaci, wokół której mogła skupić się władza." },
    { data: "11 XI 1918", krotko: "11 listopada", wyd: "Rada Regencyjna przekazuje Piłsudskiemu dowództwo wojska. Rozejm w Compiègne. Rozbrajanie Niemców w Warszawie.", arg: "Polska zyskuje własną siłę zbrojną, a zaborcy przegrywają wojnę." },
    { data: "14 XI 1918", krotko: "14 listopada", wyd: "Rada Regencyjna rozwiązuje się i przekazuje Piłsudskiemu całą władzę.", arg: "Pełnia władzy w rękach polskich." },
    { data: "22 XI 1918", krotko: "22 listopada", wyd: "Dekret ustanawia Piłsudskiego Tymczasowym Naczelnikiem Państwa.", arg: "Formalny ustrój tymczasowy." },
    { data: "28 XI 1918", krotko: "28 listopada", wyd: "Dekret o ordynacji wyborczej: prawa wyborcze także dla kobiet.", arg: "Narodziny demokracji, jedne z pierwszych w Europie praw wyborczych kobiet." }
  ],
  zadanieData: "Gdybyście w 1937 roku ustanawiali święto, którą datę byście wybrali?",
  dlaczego11: "Data łączy dwa symbole naraz: koniec wojny i upadek zaborców (rozejm) oraz przejęcie przez Polaków własnego wojska. Jest też związana z Piłsudskim, którego obóz rządził w 1937 roku, kiedy ustanowiono święto ustawowo. Nie ma jednej „prawdziwej” daty. Każdy wybór ma sens, jeśli potrafimy go uzasadnić.",
  wniosek2: "Niepodległość nie spadła z nieba jednego dnia. Była procesem, a 11 listopada to symbol tego procesu. A po ogłoszeniu niepodległości zaczęła się najtrudniejsza część: zbudowanie państwa.",

  /* Etap 3 – karty problemów */
  karty: [
    { nr: 1, nazwa: "Pieniądz",
      problem: "W obiegu są co najmniej cztery waluty. Nikt nie wie, ile co jest warte. Kupcy nie chcą przyjmować „obcych” pieniędzy.",
      zrobiono: "Marka polska stała się tymczasową walutą, inne stopniowo wycofywano. Wojna i deficyt doprowadziły do hiperinflacji. Stabilny złoty wprowadzono dopiero w 1924 r. (reforma Władysława Grabskiego).",
      grozilo: "Bez wspólnego pieniądza państwo nie zbierze podatków, nie wypłaci pensji urzędnikom i żołnierzom, a handel między dzielnicami stanie." },
    { nr: 2, nazwa: "Prawo",
      problem: "Na ziemiach polskich obowiązuje kilka różnych systemów prawnych. Ta sama sprawa w Krakowie, Poznaniu i Warszawie kończy się inaczej.",
      zrobiono: "W 1919 r. powołano Komisję Kodyfikacyjną. Ujednolicanie prawa trwało latami: kodeks karny uchwalono w 1932 r., kodeks zobowiązań w 1933 r., a część przepisów zaborczych przetrwała do czasów powojennych.",
      grozilo: "Bez wspólnego prawa obywatele nie są równi wobec państwa, a sądy i urzędy w każdej dzielnicy działają po swojemu." },
    { nr: 3, nazwa: "Wojsko",
      problem: "Żołnierze służyli w trzech armiach zaborczych, które walczyły przeciwko sobie. Mają różne mundury, regulaminy, a nawet języki komend.",
      zrobiono: "Z legionistów, żołnierzy armii zaborczych, ochotników i (w 1919 r.) Armii Hallera z Francji tworzono jednolite Wojsko Polskie. Było niezbędne, bo granice trzeba było wywalczyć.",
      grozilo: "Bez wspólnej armii nie da się obronić granic ani nawet rozbroić obcych wojsk, które wciąż stoją w kraju." },
    { nr: 4, nazwa: "Granice",
      problem: "Państwo nie ma ustalonych granic. Na wschodzie i zachodzie spory z sąsiadami, we Lwowie już trwają walki.",
      zrobiono: "Granice kształtowały się do lat 1921–1922: walki o Lwów, powstanie wielkopolskie, wojna polsko-bolszewicka, plebiscyty, powstania śląskie. Granicę wschodnią uznała Rada Ambasadorów w 1923 r.",
      grozilo: "Bez granic nie wiadomo, kto jest obywatelem, gdzie zbierać podatki i gdzie przeprowadzić wybory. Sąsiedzi mogą zająć sporne ziemie." },
    { nr: 5, nazwa: "Głód i choroby",
      problem: "Kraj jest zniszczony przez cztery lata wojny. Brakuje żywności, szerzą się tyfus i grypa „hiszpanka”. Najbardziej cierpią dzieci.",
      zrobiono: "Pomocy udzieliły m.in. organizacje amerykańskie (American Relief Administration Herberta Hoovera), które dożywiały setki tysięcy dzieci. Państwo organizowało walkę z epidemiami.",
      grozilo: "Głód i epidemie mogą zabić więcej ludzi niż wojna i odebrać obywatelom zaufanie do nowego państwa." },
    { nr: 6, nazwa: "Władza i wybory",
      problem: "Kto właściwie rządzi? Nie ma parlamentu ani konstytucji. Różne ośrodki władzy (Lublin, Kraków, Warszawa, Poznań) działają osobno.",
      zrobiono: "Dekret z 28 XI 1918 r. ogłosił wybory z prawem głosu dla kobiet. Sejm Ustawodawczy wybrano 26 I 1919 r., w lutym uchwalił Małą Konstytucję, w 1921 r. konstytucję marcową.",
      grozilo: "Bez uznanej władzy ośrodki zaczną ze sobą rywalizować, a inne państwa nie będą wiedziały, z kim rozmawiać." },
    { nr: 7, nazwa: "Komunikacja",
      problem: "Koleje zaborców budowano tak, by łączyły ziemie polskie z Berlinem, Wiedniem i Petersburgiem, nie ze sobą. Na wschodzie tory mają inny rozstaw.",
      zrobiono: "Budowano brakujące połączenia, przekuwano tory na rozstaw normalny, a w latach 20. podjęto budowę portu w Gdyni i magistrali węglowej łączącej Śląsk z morzem.",
      grozilo: "Bez połączeń nie przewiezie się żywności, wojska ani poczty. Kraj zostaje zlepkiem trzech osobnych części." }
  ],
  puentaSymulacji: "W rzeczywistości trzeba było zająć się wszystkimi siedmioma naraz. Dlatego państwa nie zbudował jeden człowiek.",
  pytaniaOmowienie: [
    "Który wybór był w waszej grupie najtrudniejszy?",
    "Czy któraś grupa pominęła problem, bez którego reszta się rozpada?",
    "Czy dało się to zrobić po kolei?",
    "Kto musiał się zaangażować, żeby to się udało?"
  ],
  puentaWychowawcza: "Państwo budowali ministrowie i generałowie, ale też urzędnicy, nauczyciele, kolejarze, lekarze i żołnierze. Wielu z nich miało zupełnie różne poglądy polityczne, a mimo to pracowało dla wspólnej sprawy. To łączy rok 1918 z dniem dzisiejszym.",

  /* Etap 4 – linia wartości (tezy do wyboru przez wychowawcę) */
  linia: {
    lewo: "Zdecydowanie się nie zgadzam",
    prawo: "Zdecydowanie się zgadzam",
    tezy: [
      "Ludzie o bardzo różnych poglądach mogą razem budować jedno państwo.",
      "Patriotyzm to bardziej codzienne obowiązki niż wielkie gesty.",
      "Już teraz, w moim wieku, mam wpływ na to, jak wygląda moja okolica.",
      "Można kochać swój kraj i jednocześnie go krytykować.",
      "Udział w wyborach to obowiązek, a nie tylko prawo.",
      "Niepodległość jest dziś czymś oczywistym i nie trzeba o nią dbać."
    ],
    zasady: [
      "Ustawienie jest anonimowe. Nikt nie musi tłumaczyć, gdzie stanął.",
      "Pytamy nie „kto ma rację”, tylko „dlaczego ktoś mógłby myśleć inaczej?”.",
      "Nie ma złych odpowiedzi. Nie oceniamy i nie przekonujemy."
    ]
  },

  /* Etap 4 – pytanie refleksyjne (wychowawca wybiera jedno) */
  refleksja: [
    "Co dziś wymaga budowania, żeby wspólnota, w której żyjesz, działała?",
    "Co osoba w twoim wieku może zrobić dla innych ludzi w swojej okolicy?",
    "Niepodległość to dla mnie…"
  ],

  /* Moduł A – biogramy */
  postacie: [
    { imie: "Józef Piłsudski", lata: "1867–1935", watek: "Czyn zbrojny, Legiony, Naczelnik Państwa",
      bio: "W młodości socjalista, za działalność przeciw caratowi zesłany na Syberię. W 1914 r. stworzył Legiony Polskie, które walczyły u boku Austro-Węgier przeciw Rosji. Gdy w 1917 r. odmówił współpracy z Niemcami, został uwięziony w Magdeburgu. 10 listopada 1918 r. wrócił do Warszawy, dzień później przejął dowództwo wojska, a 22 listopada został Tymczasowym Naczelnikiem Państwa. Dowodził w wojnie polsko-bolszewickiej. Ostro spierał się z Romanem Dmowskim o to, jakie ma być nowe państwo.",
      pytanie: "Dlaczego wojsko było dla niego najważniejsze?" },
    { imie: "Roman Dmowski", lata: "1864–1939", watek: "Dyplomacja, Komitet Narodowy Polski, Wersal",
      bio: "Przywódca narodowej demokracji (endecji). Za głównego wroga Polski uważał Niemcy, dlatego szukał porozumienia z Rosją, a potem z państwami ententy. W 1917 r. w Paryżu stanął na czele Komitetu Narodowego Polskiego, który zachodnie mocarstwa uznały za przedstawiciela Polaków. Na konferencji pokojowej w Paryżu walczył o granice Polski, zwłaszcza zachodnią. 28 czerwca 1919 r. podpisał traktat wersalski. Chciał państwa narodowego i był politycznym przeciwnikiem Piłsudskiego.",
      pytanie: "Dlaczego bez dyplomacji Polska mogłaby nie mieć granic?" },
    { imie: "Ignacy Jan Paderewski", lata: "1860–1941", watek: "Światowa sława artysty w służbie sprawy polskiej",
      bio: "Jeden z najsłynniejszych pianistów świata. Swoją popularność w Stanach Zjednoczonych wykorzystał, by zbierać pieniądze dla ofiar wojny i przekonywać polityków, w tym prezydenta Wilsona, do sprawy polskiej. Jego przyjazd do Poznania w grudniu 1918 r. wywołał wielkie manifestacje, po których wybuchło powstanie wielkopolskie. W styczniu 1919 r. został premierem i ministrem spraw zagranicznych. Jego rząd był kompromisem między obozem Piłsudskiego i Dmowskiego. Razem z Dmowskim podpisał traktat wersalski.",
      pytanie: "Jak sława i talent mogą służyć wspólnej sprawie?" },
    { imie: "Wincenty Witos", lata: "1874–1945", watek: "Chłopi jako część narodu politycznego",
      bio: "Syn chłopa z Wierzchosławic, sam przez całe życie gospodarował na roli i uczył się samodzielnie. Przywódca Polskiego Stronnictwa Ludowego „Piast”. W październiku 1918 r. stanął na czele Polskiej Komisji Likwidacyjnej w Krakowie, która przejmowała władzę od Austriaków w Galicji. W 1920 r., w czasie wojny z bolszewikami, został premierem Rządu Obrony Narodowej. Uważał, że bez chłopów, czyli większości mieszkańców, nie da się zbudować silnego państwa. Trzy razy był premierem.",
      pytanie: "Dlaczego udział chłopów w polityce był tak ważny?" },
    { imie: "Ignacy Daszyński", lata: "1866–1936", watek: "Socjaliści, rząd lubelski, reformy społeczne",
      bio: "Przywódca socjalistów (PPS) w Galicji i poseł do parlamentu w Wiedniu. 7 listopada 1918 r. stanął na czele Tymczasowego Rządu Ludowego w Lublinie. Rząd zapowiedział ośmiogodzinny dzień pracy, reformę rolną i równe prawa dla wszystkich obywateli. Po kilku dniach Daszyński podporządkował się Piłsudskiemu, by nie dzielić kraju. W 1920 r. był wicepremierem Rządu Obrony Narodowej, a później marszałkiem Sejmu.",
      pytanie: "Dlaczego oddał władzę, zamiast o nią walczyć?" },
    { imie: "Wojciech Korfanty", lata: "1873–1939", watek: "Śląsk, walka o granicę zachodnią",
      bio: "Syn górnika z Górnego Śląska. Jako poseł do parlamentu niemieckiego bronił praw Polaków. Po wojnie walczył o przyłączenie Śląska do Polski: kierował akcją przed plebiscytem w 1921 r., a potem stanął na czele III powstania śląskiego. Dzięki temu część Górnego Śląska z kopalniami i hutami trafiła do Polski. Był politykiem chrześcijańskiej demokracji i ostrym krytykiem Piłsudskiego, za co później go uwięziono.",
      pytanie: "Czym była dla Polski granica wywalczona na Śląsku?" },
    { imie: "Pierwsze posłanki", lata: "Sejm Ustawodawczy 1919", watek: "Kobiety w Sejmie Ustawodawczym",
      bio: "Dzięki dekretowi z 28 listopada 1918 r. kobiety mogły głosować i kandydować. W Sejmie Ustawodawczym zasiadło osiem posłanek, m.in. Gabriela Balicka (botaniczka, narodowa demokracja), Zofia Moraczewska (socjalistka) i Irena Kosmowska (ruch ludowy, wcześniej członkini rządu lubelskiego). Pochodziły z różnych, często zwaśnionych ugrupowań. Mimo to współpracowały w sprawach oświaty, opieki nad dziećmi i praw kobiet. Polska przyznała kobietom prawa wyborcze wcześniej niż np. Francja (1944).",
      pytanie: "Co zmieniło się, gdy kobiety zaczęły współdecydować o państwie?" }
  ],
  pytanieModuluA: "Co ich różniło, a co mimo to połączyło?",

  /* Etap 5 – zwrot akcji: współcześni politycy (kolejność celowo wymieszana, różne ugrupowania) */
  zwrot: {
    tytul: "Wtedy potrafili. A my?",
    tekst: "W 1918 roku Piłsudski i Dmowski, socjaliści i ludowcy, Ślązacy i pierwsze posłanki ostro się ze sobą spierali. A mimo to zbudowali jedno państwo.",
    pytanie: "Czy dziś, mimo różnic, potrafimy połączyć się w imię niepodległości i wspólnego państwa?",
    osoby: [
      { imie: "Karol Nawrocki", foto: "nawrocki" },
      { imie: "Donald Tusk", foto: "tusk" },
      { imie: "Jarosław Kaczyński", foto: "kaczynski" },
      { imie: "Władysław Kosiniak-Kamysz", foto: "kosiniak" },
      { imie: "Adrian Zandberg", foto: "zandberg" },
      { imie: "Krzysztof Bosak", foto: "bosak" },
      { imie: "Barbara Nowacka", foto: "nowacka" },
      { imie: "Mateusz Morawiecki", foto: "morawiecki" },
      { imie: "Szymon Hołownia", foto: "holownia" },
      { imie: "Sławomir Mentzen", foto: "mentzen" },
      { imie: "Włodzimierz Czarzasty", foto: "czarzasty" },
      { imie: "Rafał Trzaskowski", foto: "trzaskowski" }
    ],
    tlo: "protest2020"
  },

  /* Ściąga: trudne pytania uczniów */
  trudne: [
    { p: "Czemu Polska odzyskała niepodległość akurat w 1918 roku?",
      o: "Wszyscy trzej zaborcy przegrali lub rozpadli się w I wojnie światowej: Rosja pogrążyła się w rewolucji, Niemcy i Austro-Węgry przegrały wojnę. Do tego państwa zwycięskie poparły odbudowę Polski (13. punkt prezydenta USA Wilsona ze stycznia 1918 r.), a Polacy przez lata wojny organizowali się politycznie i wojskowo. Złożyło się wiele czynników naraz." },
    { p: "Czy niepodległość wywalczył Piłsudski?",
      o: "Miał ogromny udział, ale nie był jedyny. Roman Dmowski i Ignacy Paderewski zabiegali o sprawę polską u zwycięskich mocarstw, Wincenty Witos reprezentował chłopów, Ignacy Daszyński socjalistów, Wojciech Korfanty Ślązaków. Często się ze sobą ostro spierali. Dziś nazywa się ich wspólnie „ojcami niepodległości”." },
    { p: "To dlaczego świętujemy 11, a nie 7 listopada albo 7 października?",
      o: "Każda z tych dat miała znaczenie. 11 listopada wybrano, bo symbolicznie łączy koniec wojny i przejęcie przez Polaków wojska. Ustawowo ustanowiono święto w 1937 r., za rządów obozu Piłsudskiego, co też wpłynęło na wybór." },
    { p: "Czy w PRL obchodzono 11 listopada?",
      o: "Nie oficjalnie. Po wojnie święto zniesiono, a głównym świętem państwowym był 22 lipca (rocznica ogłoszenia manifestu PKWN z 1944 r.). 11 listopada obchodzono nieoficjalnie, a w latach 70. i 80. bywał dniem demonstracji opozycji. Święto przywrócono ustawą w lutym 1989 r." },
    { p: "Po co świętować coś, co było ponad sto lat temu?",
      o: "Dobre pytanie, warto je oddać klasie. Możliwa odpowiedź: przez 123 lata nie było polskiego państwa i ludzie nie mogli sami o sobie decydować. Święto przypomina, że to, co dziś wydaje się oczywiste, wcale takie nie jest i wymaga dbania." },
    { p: "A co pan / pani sądzi o marszach 11 listopada? Która partia jest bardziej patriotyczna?",
      o: "Nie oceniamy na lekcji ugrupowań ani bieżących sporów politycznych. Można powiedzieć: „Ludzie świętują ten dzień na różne sposoby i mają do tego prawo. Na tej lekcji zajmujemy się tym, co nas łączy.” Następnie wracamy do pytania lekcji." },
    { p: "Czy kobiety rzeczywiście dostały prawa wyborcze tak wcześnie?",
      o: "Tak, dekretem z 28 listopada 1918 r. Polska była pod tym względem przed wieloma państwami Zachodu (np. Francja dopiero w 1944 r.). W pierwszym Sejmie zasiadło osiem posłanek." }
  ]
};
