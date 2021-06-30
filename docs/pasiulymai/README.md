# Pasiūlymai IT VBE susitarimams 2021/22 mokslo metams

Susitarimai turi skatinti mokinių algoritminį mąstymą, kadangi pasiruošimas VBE yra svarbi mokymo dalis. Šiuo metu de facto yra nusistovėję susitarimai ankstesnių VBE pagrindu, dalis jų yra pagrįsti mokymo efektyvumo prasme, pvz. duomenyse nenaudojami lietuviški simboliai su nosinėmis ir varnelėmis ir tai gali toliau likti mokymo ir VBE metu. Kiti jau tampa neaktualūs   ir nėra efektyvūs mokymo eigoje.

Aptariant VBE užduotis yra remiamasi NŠA pateikiama informacija [https://www.nsa.smm.lt/stebesenos-ir-vertinimo-departamentas/pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/](https://www.nsa.smm.lt/stebesenos-ir-vertinimo-departamentas/pasiekimu-patikrinimai/brandos-egzaminai/egzaminu-uzduotys/).

**1. Tekstinius duomenis VBE užduotyse rekomenduojama pateikti skyriklių pagalba, atsisakant vyravusio pozicinio pateikimo.**

Siūlymo argumentai: naudotas pozicinis teksto pateikimas yra neaktualus duomenų pasikeitimo sistemose, jo programavimui mokiniai turi naudoti senosios C kalbos stiliumi tarpinį `char` masyvą. Mokymo eigoje veltui gaištamas laikas specifinio šablono įsiminimui. Dar papildomai reikėtų nukirpti baigiamuosius tarpus.

Metodiniai sprendimai: paieškos uždaviniuose reikia naudoti vieną žodį, tuo atveju skyriklis bus tarpas `cin >> vardas;`. Norint sujungti kelis vardus naudojami taškai, brūkšneliai. Uždaviniuose, kur naudojamos frazės, (pvz. knygos pavadinimas) naudojama `getline(cin, pavadinimas, ';')` tiesiogiai nurodant skyriklį.

Argumentai prieš: ...

**2. Sąrašo tipo duomenis rekomenduojama pateikti be perteklinio sąrašo elementų skaičiaus.**

Siūlymo argumentai: sąrašo pateikimas be pertekliaus yra natūralus, lengviau suprantama užduoties sąlyga. Elementų skaičiaus pateikimas prieš elementus prieštarauja sprendimo logikai, todėl mokiniams turi kilti klausimas kodėl tą daryti ruošiant duomenis.

Metodiniai sprendimai: kai duomenys pateikiami eilutėmis, naudojamas ciklas `while(!cin.eof()) { … }`. Kai sąrašo elementai pateikiami vienoje eilutėje, naudojamas `while()` ciklas, įvertinantis konkrečius skyriklius, tame tarpe ir eilutės pabaigos simbolį `'\n'.`. Apibendrinti atvejai yra pateikiami plačiau.

Argumentai prieš: ...

**3. VBE užduotyse reikalavimuose rekomenduojama vector traktuoti kaip masyvo sinonimą.**

Siūlymo argumentai: C++ `vector` tipas faktiškai atitinka dabartinėse programavimo kalbose naudojamą sąrašo sąvoką. Lig šiol mokyklose praktikuojamas masyvas poroje su elementų skaičiumi yra senosios C kalbos palikimas ir metodiškai nenaudotinas, kadangi reikia iš anksto rezervuoti atmintį. Jau daug metų pažangesni mokiniai kelia šį klausimą, neformaliai lyg tai leidžiama `vector` naudoti, bet gali būti mažinami balai dėl VBE reikalavimų. Naudojant masyvus mokiniai praranda galimybę naudoti `foreach` tipo ciklus. Pats uždavinių su sąrašais mokymas masyvų pagalba yra nerekomenduojamas programavimo edukologijos specialistų. C++ standartizavimo komitetas rekomenduoja naudoti vektorius vietoj masyvų. Taip pat, rekomenduojama vietoj vektoriaus `operator[]` naudoti `at()` metodą, nes jis tikrina ar argumentas yra tinkamame rėžyje. Žiūr.: [http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p1231r0.pdf](http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2018/p1231r0.pdf).

Metodiniai sprendimai: perėjimo metodika nuo masyvų prie `vector` jau buvo pristata FB mokytojų grupėje pavyzdžių pagalba ir dar bus pateikiama atskirai.  

Argumentai prieš: `vector` nenaudojamas oficialiuose LT vadovėliuose.

**4. Programavimo vardų susitarimai (Naming conventions)**

Siūlymo argumentai: lig šiol mokyklose nebuvo aiškaus vieningo stiliaus kaip konstruoti įvairių tipų kintamųjų, masyvų, struktūrų funkcijų vardus, todėl kai kurie vertinimo kriterijai yra abstraktūs, kaip "Prasmingai pavadinti kintamieji. Komentuojamos programos dalys, laikomasi rašybos taisyklių". Susitarimas palengvins mokytojų darbą aiškinant apie programavimo rašymo stilių.

Metodiniai sprendimai: yra pakankamai įvairių susitarimų pavyzdžių, reikėtų unifikuoti jau esamus stilius ir pritaikyti prie mūsų mokyklų poreikių.

Argumentai prieš: ...

<!-- **5. Apie tai dar nebuvo :)**

Siūlymo argumentai: naudotas pozicinis teksto.

Metodiniai sprendimai: paieškos uždaviniuose.

Argumentai prieš: ...

**6. Apie tai dar nebuvo :)**

Siūlymo argumentai: naudotas pozicinis teksto.

Metodiniai sprendimai: paieškos uždaviniuose.

Argumentai prieš: ...

**7. Apie tai dar nebuvo :)**

Siūlymo argumentai: naudotas pozicinis teksto.

Metodiniai sprendimai: paieškos uždaviniuose.

Argumentai prieš: ... -->
