# Vienmačiai masyvai: informacijos įvedimas ir gavimas (išvedimas)

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas
    int pazymiai[] = {8, 7, 9, 10, 6, 8};

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 6;

    // Masyvo išvedimas
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << endl;
    }

    return 0;
}
```

Rezultatai:

```
8
7
9
10
6
8

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int pazymiai[5];

    // Masyvo užpildymas reikšmėmis
    pazymiai[0] = 8;
    pazymiai[1] = 7;
    pazymiai[2] = 9;
    pazymiai[3] = 10;
    pazymiai[4] = 6;

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 5;

    // Masyvo išvedimas
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Rezultatai:

```
8 7 9 10 6

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int pazymiai[5];

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 5;

    // Masyvo užpildymas reikšmėmis
    cout << "Iveskite 5 pazymius: ";
    cin >> pazymiai[0] >> pazymiai[1] >> pazymiai[2]
        >> pazymiai[3] >> pazymiai[4];

    // Masyvo išvedimas
    cout << "Ivesti pazymiai: ";
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << ", ";
    }
    cout << endl;

    return 0;
}
```

Rezultatas 1:

```
Iveskite 5 pazymius: 7 8 9 6 10
Ivesti pazymiai: 7, 8, 9, 6, 10,

```

Rezultatas 2:

```
Iveskite 5 pazymius: 8 7 5 1 4
Ivesti pazymiai: 8, 7, 5, 1, 4,

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int pazymiai[5];

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 5;

    // Masyvo užpildymas reikšmėmis
    cout << "Iveskite 5 pazymius: ";
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cin >> pazymiai[i];
    }

    // Masyvo išvedimas
    cout << "Ivesti pazymiai: ";
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << ", ";
    }
    cout << endl;

    return 0;
}
```

Rezultatas 1:

```
Iveskite 5 pazymius: 8 7 5 6 3
Ivesti pazymiai: 8, 7, 5, 6, 3,

```

Rezultatas 2:

```
Iveskite 5 pazymius: 10 10 9 8 10
Ivesti pazymiai: 10, 10, 9, 8, 10,

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int skaiciai[] = { 7, 8, 9, 7, 4, 5, 6, 8, 7, 5, 2, 3 };

    // Kiek masyve yra elementų
    int skaiciu_kiekis = 12;

    // Pirmas narys masyve
    cout << "Pirmas narys masyve: " << skaiciai[0] << endl;

    // Antras narys masyve
    cout << "Antras narys masyve: " << skaiciai[1] << endl;

    // Paskutinis narys masyve
    cout << "Paskutinis narys masyve: " << skaiciai[skaiciu_kiekis - 1] << endl;

    // Prieš paskutinis narys masyve
    cout << "Pries paskutinis narys masyve: " << skaiciai[skaiciu_kiekis - 2] << endl;

    return 0;
}
```

Rezultatai:

```
Pirmas narys masyve: 7
Antras narys masyve: 8
Paskutinis narys masyve: 3
Pries paskutinis narys masyve: 2

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pirmo skaičių masyvo sukūrimas
    int skaiciai1[] = { 7, 8, 9, 6, 5 };
    int skaiciai1_kiekis = 5;

    // Antro skaičių masyvo sukūrimas
    int skaiciai2[] = { 8, 5, 2, 3, 6, 4, 4 };
    int skaiciai2_kiekis = 7;

    // Pirmo skaičių masyvo išvedimas
    cout << "Pirmi skaiciai (" << skaiciai1_kiekis << "): ";

    for (int i = 0; i < skaiciai1_kiekis; i++)
    {
        cout << "[" << skaiciai1[i] << "]";
    }

    cout << endl;

    // Antro skaičių masyvo išvedimas
    cout << "Antri skaiciai (" << skaiciai2_kiekis << "): ";

    for (int i = 0; i < skaiciai2_kiekis; i++)
    {
        cout << "[" << skaiciai2[i] << "]";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Pirmi skaiciai (5): [7][8][9][6][5]
Antri skaiciai (7): [8][5][2][3][6][4][4]

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Skaičių masyvo sukūrimas
    int skaiciai[100];
    int skaiciai_kiekis = 0;

    // Klausiama kiek žmogus nori įvesti skaičių
    cout << "Kiek skaiciu norite ivesti? ";
    cin >> skaiciai_kiekis;

    // Žmogus įveda skaičius
    for (int i = 0; i < skaiciai_kiekis; i++)
    {
        cout << i + 1 << "-asis skaicius: ";
        cin >> skaiciai[i];
    }

    // Skaičiai išvedami į konsolę
    cout << "\nJusu ivesti skaiciai: ";

    for (int i = 0; i < skaiciai_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite ivesti? 4
1-asis skaicius: 8
2-asis skaicius: 9
3-asis skaicius: 6
4-asis skaicius: 5

Jusu ivesti skaiciai: [8][9][6][5]
```

Rezultatas 2:

```
Kiek skaiciu norite ivesti? 9
1-asis skaicius: 8
2-asis skaicius: 5
3-asis skaicius: 6
4-asis skaicius: 8
5-asis skaicius: 7
6-asis skaicius: 5
7-asis skaicius: 2
8-asis skaicius: 3
9-asis skaicius: 4

Jusu ivesti skaiciai: [8][5][6][8][7][5][2][3][4]
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main()
{
    // Sukuriami vardų ir amžių masyvai
    string vardai[10];
    int amziai[10];

    // Nurodomas įrašytų elementų kiekis šiuos masyvuose
    int kiekis = 0;

    // Užklausiama kiek bus įvedimų
    cout << "Kiek duomenu norite ivesti? ";
    cin >> kiekis;

    // Įvedinėjami duomenys
    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis zmogus\n";
        cout << "Vardas: ";
        cin >> vardai[i];
        cout << "Amzius: ";
        cin >> amziai[i];
    }

    // Duomenys išvedami iš šių dviejų masyvų

    cout << "\nIvesti duomenys\n\n";
    cout << "+----------------------+--------+\n";
    cout << "| Vardas               | Amzius |\n";
    cout << "+----------------------+--------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << "| " << setw(20) << left << vardai[i]
            << " | " << setw(6) << amziai[i] << " |" << endl;
    }

    cout << "+----------------------+--------+\n";

    return 0;
}
```

Rezultatas 1:

```
Kiek duomenu norite ivesti? 3
1-asis zmogus
Vardas: Jonas
Amzius: 74
2-asis zmogus
Vardas: Petras
Amzius: 15
3-asis zmogus
Vardas: Gintas
Amzius: 32

Ivesti duomenys

+----------------------+--------+
| Vardas               | Amzius |
+----------------------+--------+
| Jonas                | 74     |
| Petras               | 15     |
| Gintas               | 32     |
+----------------------+--------+

```

Rezultatas 2:

```
Kiek duomenu norite ivesti? 5
1-asis zmogus
Vardas: Greta
Amzius: 19
2-asis zmogus
Vardas: Gintare
Amzius: 20
3-asis zmogus
Vardas: Povilas
Amzius: 21
4-asis zmogus
Vardas: Gintas
Amzius: 36
5-asis zmogus
Vardas: Inga
Amzius: 23

Ivesti duomenys

+----------------------+--------+
| Vardas               | Amzius |
+----------------------+--------+
| Greta                | 19     |
| Gintare              | 20     |
| Povilas              | 21     |
| Gintas               | 36     |
| Inga                 | 23     |
+----------------------+--------+

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas
    int skaiciai[10];
    int kiek = 0;

    // Kiek žmogus nori įvesti skaičių?
    cout << "Kiek skaiciu norite ivesti? ";
    cin >> kiek;

    // Patikrinimas ar neviršija sukurto masyvo dydžio
    if (kiek >= 10)
    {
        cout << "Negalite ivesti tiek skaiciu, rinkite iki 10" << endl;
    }
    else
    {
        // Skaičių įvedimas
        cout << "Iveskite visus norimus skaicius: ";

        for (int i = 0; i < kiek; i++)
        {
            cin >> skaiciai[i];
        }

        // Skaičių išvedimas
        cout << "Visi ivesti skaiciai: ";

        for (int i = 0; i < kiek; i++)
        {
            cout << skaiciai[i] << " ";
        }
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite ivesti? 5
Iveskite visus norimus skaicius: 8 9 7 5 3
Visi ivesti skaiciai: 8 9 7 5 3
```

Rezultatas 2:

```
Kiek skaiciu norite ivesti? 8
Iveskite visus norimus skaicius: 2 5 4 8 4 3
1 4
Visi ivesti skaiciai: 2 5 4 8 4 3 1 4
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias skaičių masyvas
    int skaiciai[5];
    int skaiciu_kiekis = 5;

    // Bandoma gauti reikšmės iš neužpildyto masyvo
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Kiekvienas masyvo elementas užpildomas su 'default' reikšme
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        skaiciai[i] = 0;
    }

    // Per naują išvedamas sutvarkytas masyvas
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    return 0;
}
```

Rezultatai:

```
[-858993460][-858993460][-858993460][-858993460][-858993460]
[0][0][0][0][0]
```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias skaičių masyvas
    int skaiciai[10];
    int skaiciu_kiekis = 0;

    // Vartotojas įveda kiek skaičių nori suvesti
    cout << "Kiek skaiciu norite suvesti? ";
    cin >> skaiciu_kiekis;

    // Apibūdinami apribojimai skaičių įvedime
    cout << "Iveskite " << skaiciu_kiekis << " skaiciu, kurie butu tarp reziu [1-10]\n";

    // Skaičių įvedimas
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Pasakoma kuris skaičius yra įvedinėjamas
        cout << "Iveskite " << i + 1 << "-aji skaiciu: ";
        int skaicius;

        do
        {
            // Įvedamas skaičius
            cin >> skaicius;

            // Jeigu skaičius tinka - įkeliama į masyvą
            if (skaicius >= 1 && skaicius <= 10)
            {
                skaiciai[i] = skaicius;
            }
            else
            {
                // Jeigu skaičius netinka - išvedamas klaidos pranešimas
                cout << "Blogas ivedimas, bandykite is naujo\n";
            }
        } while (skaicius < 1 || skaicius > 10); // kartojama kol įvestas skaičius tinka
    }

    // Skaičių išvedimas
    cout << "Ivesti skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite suvesti? 3
Iveskite 3 skaiciu, kurie butu tarp reziu [1-10]
Iveskite 1-aji skaiciu: 1
Iveskite 2-aji skaiciu: 55
Blogas ivedimas, bandykite is naujo
14
Blogas ivedimas, bandykite is naujo
5
Iveskite 3-aji skaiciu: 9
Ivesti skaiciai: [1][5][9]
```

Rezultatas 2:

```
Kiek skaiciu norite suvesti? 4
Iveskite 4 skaiciu, kurie butu tarp reziu [1-10]
Iveskite 1-aji skaiciu: 5
Iveskite 2-aji skaiciu: 9
Iveskite 3-aji skaiciu: 787
Blogas ivedimas, bandykite is naujo
455
Blogas ivedimas, bandykite is naujo
3
Iveskite 4-aji skaiciu: 1
Ivesti skaiciai: [5][9][3][1]
```

## Užduotys

### Užduotis 1

Sukurkite norimo dydžio skaičių masyvą, kuris iškart būtų užpildytas skaičiais.

Šiuos skaičius išveskite du kartus:

- Pirmąjį kartą - išvedant visus skaičius toje pačioje eilutėje, atskiriant kableliu ir tarpu.
- Antrąjį kartą - išvedant visus skaičius atskirose eilutėse, prieš kiekvieną skaičių parašant kelintasis tai skaičius, pavyzdžiui, "1-asis skaičius yra ...", tada "2-asis skaičius yra...".

Taip pat, atlikite šiuos dalykus:

- Išveskite pirmąjį skaičių iš masyvo.
- Išveskite antrąjį skaičių iš masyvo.
- Išveskite paskutinį skaičių iš masyvo.
- (sunkesnė) Išveskite bet kurį, atsitiktinai parinktą skaičių iš masyvo.

### Užduotis 2

- Susikurkite du skaičių masyvus, kurie iškart būtų užpildyti duomenimis.
- Vartotojui leiskite pasirinkti kurį skaičių masyvą parodyti ekrane.
- Vartotojui pasirinkus, kurį masyvą parodyti, visus skaičius iš jo išveskite toje pačioje eilutėje, kiekvieną skaičių apskliaudžiant `[]` skliaustais.

### Užduotis 3

- Sukurkite norimo dydžio skaičių masyvą, kuriame nebūtų duomenų.
- Leiskite vartotojui pasirinkti kiek duomenų jis nori įvesti, bei leiskite jam tuos duomenis įvesti, kiekvienoje įvedimo eilutėje nurodant kelintą skaičių jis įvedinėja.
- Galiausiai visus skaičius išveskite gražiai, lentelės pavidalu, kur pirmas stulpelis parodytų kelintas tai skaičius, o antrame stulpelyje būtų skaičius iš masyvo. Pavyzdžiui:

```
+-----+----------+
| #   | Skaicius |
+-----+----------+
| 1   | 8        |
| 2   | 15       |
| 3   | 32       |
| 4   | 5        |
| 5   | 1        |
+-----+----------+
```

- Po lentele išveskite kiek skaičių šiame masyve yra iš viso. Pavyzdžiui, "Skaičių lentelėje: 5".
