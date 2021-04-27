# Informacijos nuskaitymas iš failo

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/QpBZFGF49J4?start=774&end=7035" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apie informacijos nuskaitymą iš failo

- Norint nuskaityti informaciją iš failo, reikės susikurti nuskaitymo srauto operatorių, atsidaryti failą, atlikti nuskaitymo veiksmus ir uždaryti failą.
- Nuskaitymui naudosite susikurtą srauto operatorių ir jį galėsite naudoti taip pat kaip naudojot `cin`. Taip pat, nuskaitymui bus galima naudoti `getline()` bei `.get()` komandas.

## Nuskaitymo būdai

Nuskaitymas iš failo yra labai panašus nuskaitymo iš konsolės atveju. Todėl siūlome platesnės informacijos apie nuskaitymo būdus ir kitus niuansus paieškoti skyriuje [Informacijos nuskaitymas iš konsolės](https://informatikosvbe.lt/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/).

## Sintaksė

Nuskaitymo iš failo srauto operatoriaus kūrimas:

```cpp
ifstream operatorius;
```

- **ifstream** - komanda, parodanti, kad kuriate nuskaitymo iš failo operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint nuskaityti duomenis iš failo.

Failo atsidarymas:

```cpp
operatorius.open("failo_pavadinimas.txt");
```

Taip pat, galima susikurti norimą nuskaitymo operatorių ir atsidaryti failą nuskaitymui vienoje eilutėje:

```cpp
ifstream operatorius("failo_pavadinimas.txt");
```

- **ifstream** - komanda, parodanti, kad kuriate nuskaitymo iš failo operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint nuskaityti duomenis iš failo.
- `failo_pavadinimas.txt` - failas, kurį atidarote nuskaitymui.

Duomenų nuskaitymas iš failo, analogiškas `cin` nuskaitymui iš konsolės:

```cpp
int kintamasis;
operatorius >> kintamasis;
```

Duomenų nuskaitymas iš failo, pasinaudojant `getline()`:

```cpp
string tekstas;

// eilutės nuskaitymas
getline(operatorius, kintamasis);

// eilutės nuskaitymas iki simbolio (šiuo atveju - kablelio)
getline(operatorius, kintamasis, ',');
```

Duomenų nuskaitymas iš failo, pasinaudojant `cin.get()`:

```cpp
char simboliai[20];

// Nuskaitoma 20 simbolių į char masyvą
operatorius.get(simboliai, 20);
```

Patikrinimas ar jau failo pabaiga buvo pasiekta (grąžina `true` jei jau pasiekta failo pabaiga ir `false` - jei dar ne failo pabaiga):

```cpp
operatorius.eof(); // end of file
```

Failo uždarymas:

```cpp
operatorius.close();
```

## Pavyzdžiai 1 (paprastas nuskaitymas)

### Pavyzdys 1

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    int skaicius1, skaicius2, skaicius3;

    // nuskaitymo pasiruošimas
    ifstream nuskaitymas;

    // failo atsidarymas
    nuskaitymas.open("duomenys.txt");

    // nuskaitymas
    nuskaitymas >> skaicius1 >> skaicius2 >> skaicius3;

    // failo uždarymas
    nuskaitymas.close();

    // veiksmai su nuskaitytais duomenimis
    cout << "Faile esantys skaiciai:" << endl << skaicius1 << endl
        << skaicius2 << endl << skaicius3 << endl;
    cout << "Siu skaiciu suma: " << skaicius1 + skaicius2 + skaicius3 << endl;

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
5 4 8
```
</code-block>
</code-group>

Rezultatai:

```
Faile esantys skaiciai:
5
4
8
Siu skaiciu suma: 17
```

### Pavyzdys 2

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims
    string vardas, pavarde;
    int amzius;
    double ugis;

    // srauto operatoriaus sukūrimas ir failo atidarymas
    ifstream failas("duomenys.txt");

    // failo nuskaitymas
    failas >> vardas >> pavarde >> amzius >> ugis;

    // išvedimas į konsolę
    cout << vardas << " " << pavarde << " (" << amzius
        << " m.), jo ugis " << ugis << " m." << endl;

    // failo uždarymas
    failas.close();

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas Tomauskas 25 1.8
```
</code-block>
</code-group>

Rezultatai:

```
Tomas Tomauskas (25 m.), jo ugis 1.8 m.
```

### Pavyzdys 3

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string pavadinimas1, pavadinimas2;
    int metai1, metai2, puslapiai1, puslapiai2;
    double kaina1, kaina2;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas

    getline(duomenys, pavadinimas1);
    duomenys >> metai1 >> puslapiai1 >> kaina1;

    duomenys >> ws;
    
    getline(duomenys, pavadinimas2);
    duomenys >> metai2 >> puslapiai2 >> kaina2;

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "PIRMA KNYGA" << endl;
    cout << "Pavadinimas: " << pavadinimas1 << endl;
    cout << "Metai: " << metai1 << endl;
    cout << "Puslapiai: " << puslapiai1 << endl;
    cout << "Kaina: " << kaina1 << " eur.\n\n";

    cout << "ANTRA KNYGA" << endl;
    cout << "Pavadinimas: " << pavadinimas2 << endl;
    cout << "Metai: " << metai2 << endl;
    cout << "Puslapiai: " << puslapiai2 << endl;
    cout << "Kaina: " << kaina2 << " eur.\n";

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Haris Poteris ir Azkabano kalinys
2005 200 19.99
7 efektyviai veikianciu zmoniu iprociai
2018 180 12.99
```
</code-block>
</code-group>

Rezultatai:

```
PIRMA KNYGA
Pavadinimas: Haris Poteris ir Azkabano kalinys
Metai: 2005
Puslapiai: 200
Kaina: 19.99 eur.

ANTRA KNYGA
Pavadinimas: 7 efektyviai veikianciu zmoniu iprociai
Metai: 2018
Puslapiai: 180
Kaina: 12.99 eur.
```

### Pavyzdys 4

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    int skaiciai[5];
    int kiekis = 5;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas
    duomenys >> skaiciai[0] >> skaiciai[1]
        >> skaiciai[2] >> skaiciai[3] >> skaiciai[4];

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Nuskaityti skaiciai: ";
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
        suma += skaiciai[i];
    }

    cout << endl;
    cout << "Skaiciu suma: " << suma << endl;

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
8
9
5
7
4
```
</code-block>
</code-group>

Rezultatai:

```
Nuskaityti skaiciai: 8 9 5 7 4
Skaiciu suma: 33
```

### Pavyzdys 5

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[4];
    int amziai[4];
    int kiekis = 4;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream fin("duomenys.txt");

    // failo nuskaitymas
    for (int i = 0; i < kiekis; i++)
    {
        fin >> vardai[i] >> amziai[i];
    }

    // failo uždarymas
    fin.close();

    // kiti veiksmai

    cout << "Vardai       Amziai\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(12) << left << vardai[i]
            << " " << setw(6) << amziai[i] << endl;
    }
    
    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas 23
Gintaras 24
Greta 26
Gintare 23
```
</code-block>
</code-group>

Rezultatai:

```
Vardai       Amziai

Tomas        23
Gintaras     24
Greta        26
Gintare      23
```

### Pavyzdys 6

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[4];
    int amziai[4];
    int kiekis = 4;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream fin("duomenys.txt");

    // failo nuskaitymas
    for (int i = 0; i < kiekis; i++)
    {
        char laikinas[16];
        fin.get(laikinas, 16);
        vardai[i] = laikinas;
        fin >> amziai[i];
        fin >> ws;
    }

    // failo uždarymas
    fin.close();

    // kiti veiksmai

    cout << "Vardai           Amziai\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(16) << left << vardai[i]
            << " " << setw(6) << amziai[i] << endl;
    }
    
    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas Tomauskas 23
Gintaras        24
Greta           26
Gintare         23
```
</code-block>
</code-group>

Rezultatai:

```
Vardai           Amziai

Tomas Tomauskas  23
Gintaras         24
Greta            26
Gintare          23
```

### Pavyzdys 7

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    int skaiciai[5];
    int kiek = 5;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream fin("duomenys.txt");

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        fin >> skaiciai[i];
    }

    // failo uždarymas
    fin.close();

    cout << "Skaiciai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }
    
    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
8
9
5
4
5
3
1
5
8
7
```
</code-block>
</code-group>

Rezultatai:

```
Skaiciai: 8 9 5 4 5
```

## Užduotys 1 (paprastas nuskaitymas)

### Užduotis 1

Duomenų failo turinys:

```
Tomas 19 KTU 8
```

Šiame faile esanti informacija:

- Pirmas žodis ("Tomas") - studento vardas.
- Antras skaičius ("19") - studento amžius.
- Trečias žodis ("KTU") - aukštosios mokyklos, kurioje mokosi studentas trumpinys.
- Ketvirtas skaičius ("8") - studento vidurkis.

Nuskaitykite šią informaciją, bei ją išveskite į ekraną norimo sakinio forma, pavyzdžiui:

```
Studentas Tomas (19 m.) mokosi KTU, jo vidurkis - 8.
```

Taip pat išveskite ar studento vidurkis yra teigiamas ar neigiamas skaičius.

Pamėginkite pakeitinėti duomenų failą, ištestuokite ar programa veikia korektiškai su kitokiais duomenimis (kurie iš formato atitinka dabar nurodytus).

### Užduotis 2

Duomenų failo turinys:

```
Tomas 1.9 19
Ugnius 2.0 20
Giedrius 1.8 21
```

Kiekvienoje failo eilutėje pateikiami duomenys apie tris krepšininkus:

- Vardas.
- Ūgis, metrais.
- Amžius.

Nuskaitykite šiuos duomenis iš failo.

Nuskaitytus duomenis išveskite konsolėje lentelės pavidalu.

Raskite, kuris krepšininkas yra vyriausias, bei kuris krepšininkas yra aukščiausias.

### Užduotis 3

Faile esantis turinys:

```
3 5 8 7 9 6
```

Nuskaitykite šiuos duomenis iš failo.

Išveskite nuskaitytą informaciją norima forma į konsolę.

Raskite, skaičių sumą, vidurkį, bei didžiausią ir mažiausią skaičius.

### Užduotis 4

Faile esantis turinys:

```
Liepa         5.2 12
Obelis        2.9 10
Berželis      7.8 8
```

Kiekvienoje failo eilutėje saugoma tokia informacija apie medžius:

- Pavadinimas.
- Aukštis, metrais.
- Amžius, metais.

Atkreipkite dėmesį, kad pavadinimas užima atitinkamą kiekį simbolių.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją lentelės pavidalu į konsolę.

Raskite kiek yra medžių, kurių amžius yra lygus daugiau nei 10 metų.

### Užduotis 5

Faile esantis turinys:

```
Audi, A4, 2005 1.6 321021
```

Faile esanti informacija apie automobilį:

- Automobilio markė.
- Automobilio modelis.
- Gamybos metai.
- Darbinis tūris, l.
- Rida, km.

Atkreipkite dėmesį, kad po markės ir modelio yra dedamas kablelis, kadangi markę ir / ar modelį gali sudaryti keli žodžiai, todėl nuskaitymas turi būti atliktas iki kablelio.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją apie automobilį į konsolę.

Vartotojui leiskite konsolės pagalba suvesti dabartinius metus.

Paskaičiuokite:

- Automobilio amžių (dabartiniai metai - gamybos metai).
- Kiek vidutiniškai kilometrų automobilis nuvažiavęs kiekvienais metais?

## Pavyzdžiai 2 (kai žinoma kiek duomenų)

### Pavyzdys 8

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    int skaiciai[5];
    int kiek;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");
    
    // kiekio nuskaitymas
    duomenys >> kiek;

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        duomenys >> skaiciai[i];
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Skaiciu faile: " << kiek << endl;

    cout << "Skaiciai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << ", ";
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
3
45
89
56
```
</code-block>
</code-group>

Rezultatai:

```
Skaiciu faile: 3
Skaiciai: 45, 89, 56,
```

### Pavyzdys 9

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[10];
    int kiek;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // kiekio nuskaitymas
    duomenys >> kiek;

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        duomenys >> vardai[i];
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << ", ";
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
4
Tomas
Greta
Paulius
Inga
```
</code-block>
</code-group>

Rezultatai:

```
Tomas, Greta, Paulius, Inga,
```

### Pavyzdys 10

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[10];
    int amziai[10];
    int kiek;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // kiekio nuskaitymas
    duomenys >> kiek;

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        duomenys >> vardai[i] >> amziai[i] >> ws;
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << " (" << amziai[i] << " m.)" << endl;
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
4
Tomas 23
Greta 24
Paulius 22
Inga 22
```
</code-block>
</code-group>

Rezultatai:

```
Tomas (23 m.)
Greta (24 m.)
Paulius (22 m.)
Inga (22 m.)
```

## Užduotys 2 (kai žinoma kiek duomenų)

### Užduotis 6

Faile esantis turinys:

```
4
Kaunas
Vilnius
Klaipeda
Panevezys
```

Pirmoje failo eilutėje yra skaičius, kiek miestų yra šiame faile. Sekančioje failo eilutėje yra miestų pavadinimai.

Nuskaitykite šiuos duomenis iš failo.

Išveskite nuskaitytus duomenis konsolėje, norima forma.

Prie kiekvieno miesto nurodykite iš kiek raidžių yra sudarytas jo pavadinimas.

### Užduotis 7

Faile esantis turinys:

```
8
5 8 7 4 3 5 4 8
```

Failo pirmoje eilutėje yra nurodytas pažymių kiekis. Sekančioje eilutėje yra nurodytas atitinkamas kiekis pažymių.

Nuskaitykite šią informaciją iš failo.

Paskaičiuokite nuskaitytų pažymių vidurkį.

Išveskite nuskaitytus pažymius ir gautą vidurkį į konsolę.

### Užduotis 8

Faile esantis turinys:

```
4
Frontend programuotojas, 3
Backend programuotojas, 4
Dizaineris, 2
Projektu vadovas, 1
```

Failo pirmoje eilutėje yra nurodyta kiek įrašų apie komandos narius yra šiame faile.

Sekančioje eilutėse yra saugoma informacija apie komandą:

- Pareigų pavadinimas.
- Kiek yra žmonių, užimančių nurodytas pareigas.

Atkreipkite dėmesį, kad pareigų pavadinimas tęsiasi iki kablelio, nes pavadinimas gali būti sudarytas iš kelių žodžių.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją į konsolę lentelės pavidalu.

### Užduotis 9

Faile esantis turinys:

```
4
Frontend programuotojas  3
Backend programuotojas   4
Dizaineris               2
Projektu vadovas         1
```

Failo pirmoje eilutėje yra nurodyta kiek įrašų apie komandos narius yra šiame faile.

Sekančioje eilutėse yra saugoma informacija apie komandą:

- Pareigų pavadinimas.
- Kiek yra žmonių, užimančių nurodytas pareigas.

Atkreipkite dėmesį, kad pareigų pavadinimui yra naudojamas atitinkamas kiekis simbolių, todėl nuskaityme reikės nuskaityti atitinkamą kiekį simbolių.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją į konsolę lentelės pavidalu.

### Užduotis 10 (sudėtingesnė)

Faile esantis turinys:

```
Tomas 5 8 6 9 8 4
Gintare 3 8 4 9
```

Kiekvienoje failo eilutėje yra informacija apie studentus:

- Pirmoje vietoje - studento(-ės) vardas.
- Antro vietoje - kiek pažymių turi studentas(-ė).
- Trečioje vietoje ir toliau - studento(-ės) pažymiai.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją į konsolę norima forma.

Raskite, kurio studento(-ės) pažymių vidurkis didesnis.

## Pavyzdžiai 3 (kai nežinoma kiek duomenų)

### Pavyzdys 11

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    int skaiciai[10];
    int kiek = 0;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas
    while (!duomenys.eof())
    {
        duomenys >> skaiciai[kiek];
        kiek++;
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Nuskaityti skaiciai: ";
    int suma = 0;

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
        suma += skaiciai[i];
    }

    cout << "\nSiu skaiciu suma: " << suma << endl;
    cout << "Vidurkis: " << (double)suma / kiek << endl;

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
2
5
6
5
4
2
3
1
5
```
</code-block>
</code-group>

Rezultatai:

```
Nuskaityti skaiciai: 2 5 6 5 4 2 3 1 5
Siu skaiciu suma: 33
Vidurkis: 3.66667
```

### Pavyzdys 12

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[10];
    int kiek = 0;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas
    while (!duomenys.eof())
    {
        duomenys >> vardai[kiek];
        kiek++;
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Nuskaityti vardai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << ", ";
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Ignas
Tomas
Giedrius
```
</code-block>
</code-group>

Rezultatai:

```
Nuskaityti vardai: Ignas, Tomas, Giedrius,
```

### Pavyzdys 13

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[10];
    int amziai[10];
    int kiek = 0;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream failas("duomenys.txt");

    // failo nuskaitymas
    while (!failas.eof())
    {
        failas >> vardai[kiek];
        failas >> amziai[kiek];
        kiek++;
    }

    // failo uždarymas
    failas.close();

    // kiti veiksmai

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << " (" << amziai[i]
            << " m.)" << endl;
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Ignas 20
Tomas 23
Giedrius 22
```
</code-block>
</code-group>

Rezultatai:

```
Ignas (20 m.)
Tomas (23 m.)
Giedrius (22 m.)
```

## Užduotys 3 (kai nežinoma kiek duomenų)

### Užduotis 11

Faile esanti informacija:

```
8 9 7 4 5 3 1 2 5 4 8 7 4 5 3 2 1 5
```

Nuskaitykite šią informaciją iš failo.

Raskite šių skaičių sumą, vidurkį, mažiausią skaičių, didžiausią skaičių.

Nuskaitytus duomenis ir gautus atsakymus išveskite į konsolę.

Papildomai: pamėginkite skaičius surikiuoti didėjimo tvarka ir išveskite į konsolę.

### Užduotis 12

Faile esanti informacija:

```
Kate
Suo
Gyvate
Dramblys
Zirafa
Vilkas
```

Faile saugoma informacija apie gyvūnus.

Nuskaitykite šią informaciją.

Norima forma išveskite konsolės ekrane nuskaitytus duomenis, šalia kiekvieno gyvūno nurodant eilės numerį, kelintas tai gyvūnas (`1-as`, `2-as`, ...).

### Užduotis 13

Faile esanti informacija:

```
Piestukas, 0.99
Kreideles crayon, 1.99
Sasiuvinys 50 psl., 1.49
```

Kiekvienoje failo eilutėje yra ši informacija apie prekes:

- Prekės pavadinimas.
- Kaina, eurais.

Atkreipkite dėmesį į tai kad prekės pavadinimas yra nurodomas iki kablelio, kadangi pavadinimą gali sudaryti ne vienas žodis.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją į konsolę lentelės pavidalu.

Raskite kuri prekė yra pigiausia ir kuri brangiausia.

### Užduotis 14

Faile esanti informacija:

```
Piestukas            0.99
Kreideles crayon     1.99
Sasiuvinys 50 psl.   1.49
```

Kiekvienoje failo eilutėje yra ši informacija apie prekes:

- Prekės pavadinimas.
- Kaina, eurais.

Atkreipkite dėmesį į tai kad prekės pavadinimas užima atitinkamą kiekį simbolių, kadangi pavadinimą gali sudaryti ne vienas žodis.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją į konsolę lentelės pavidalu.

Raskite kuri prekė yra pigiausia ir kuri brangiausia.

### Užduotis 15 (sudėtingesnė)

Faile esanti informacija:

```
Giedrius 6 5 4 8 9 4 7
Paulina 5 7 8 9 6 8
Inga 6 8 7 9 6 5 4
Tomas 5 6 5 8 7 9
```

Kiekvienoje failo eilutėje saugoma ši informacija apie studentus(-es):

- Pirmoje vietoje - studento(-ės) vardas.
- Antro vietoje - kiek pažymių studentas(-ė) turi.
- Trečioje vietoje ir sekančiose - studento(-ės) pažymiai.

Nuskaitykite šią informaciją iš failo.

Paskaičiuokite kiekvieno studento(-ės) pažymių vidurkį.

Į konsolę išveskite studento(-ės) vardą ir pažymių vidurkį.
