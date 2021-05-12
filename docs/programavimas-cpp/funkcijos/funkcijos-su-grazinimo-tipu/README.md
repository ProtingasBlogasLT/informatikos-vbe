# Funkcijos su grąžinimo tipu

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/1-Wr7RLCFzE?start=402&end=5098" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apie funkcijas su grąžinimo tipu

- Po atliktų skaičiavimų funkcijos gali grąžinti kokį nors atsakymą, kuris gali būti bet kokio kintamojo ar objekto tipo.
- Kuriant funkciją, kuri turėtų grąžinti kokį nors atsakymą (skaičių, žodį, sąrašą, objektą ar dar ką), būtina nurodyti grąžinimo tipą prieš pat funkcijos pavadinimą, o gale funkcijos būtina aprašyti `return` su grąžinamu atsakymu. `Return type` prieš funkcijos pavadinimą ir `return` gale funkcijos yra tiesiogiai susiję vienas su kitu - funkcija privalo grąžinti būtent tokio tipo atsakymą koks ir buvo nurodytas funkcijos aprašyme.

## Funkcijų su grąžinimo tipu sintaksė

```cpp
<tipas> <pavadinimas>(<argumentai / parametrai>)
{
    // funkcijos kodas...
    return <reiksme>;
}
```

- **tipas** - kokio tipo (`string`, `int`, ...) funkcija grąžins.
- **reiksme** - grąžinamas atsakymas, kurio tipas sutampa su nurodytu prieš funkcijos pavadinimą.

## Funkcijos iškvietimas ir atsakymų gavimas / panaudojimas

Jeigu tik kviečiam (problema ta, kad nematysim jokio rezultato):

```cpp
// toks iškvietimas:
suma();

// bus tas pats kas:
5; // užrašom reikšmę, bet jos niekaip nepanaudojam
```

Jei išsaugom atsakymą į kintamąjį:

```cpp
int kintamasis = suma();
```

Jeigu iškart išvedam atsakymą:

```cpp
cout << suma();
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int skaicius();

int main()
{
    cout << skaicius() << endl;
    return 0;
}

int skaicius()
{
    return 5 + 3;
}
```

Rezultatai:

```
8

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int skaicius()
{
    int a = 9;
    int b = 10;
    return a + b;
}

int main()
{
    int skaicius_is_funkcijos = skaicius();
    cout << skaicius_is_funkcijos;

    return 0;
}
```

Rezultatai:

```
19
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int skaicius()
{
    int atsitiktinis = rand() % 100 + 1;
    return atsitiktinis;
}

int skaicius_reziuose(int nuo, int iki)
{
    int max = iki - nuo;
    return rand() % max + nuo;
}

int main()
{
    srand(time(NULL));

    cout << skaicius() << endl;
    cout << skaicius() << endl;
    cout << skaicius() << endl;

    cout << "nuo 1 iki 10: " << skaicius_reziuose(1, 10) << endl;
    cout << "nuo 5 iki 10: " << skaicius_reziuose(5, 10) << endl;
    cout << "nuo 100 iki 1000: " << skaicius_reziuose(100, 1000) << endl;

    return 0;
}
```

Rezultatas 1:

```
83
69
31
nuo 1 iki 10: 8
nuo 5 iki 10: 9
nuo 100 iki 1000: 756
```

Rezultatas 2:

```
5
4
8
nuo 1 iki 10: 4
nuo 5 iki 10: 7
nuo 100 iki 1000: 875
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int skirtumas(int sk1, int sk2)
{
    return sk1 - sk2;
}

int main()
{
    int skaicius1, skaicius2;

    cout << "Iveskite du skaicius: ";
    cin >> skaicius1 >> skaicius2;

    cout << skaicius1 << " + " << skaicius2 << " = "
        << suma(skaicius1, skaicius2) << endl;

    cout << skaicius1 << " - " << skaicius2 << " = "
        << skirtumas(skaicius1, skaicius2) << endl;

    return 0;
}
```

Rezultatas 1:

```
Iveskite du skaicius: 8 7
8 + 7 = 15
8 - 7 = 1
```

Rezultatas 2:

```
Iveskite du skaicius: 14 9
14 + 9 = 23
14 - 9 = 5
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int skirtumas(int sk1, int sk2)
{
    return sk1 - sk2;
}

void isvedimas(int pirmas, int antras)
{
    cout << pirmas << " + " << antras << " = "
        << suma(pirmas, antras) << endl;

    cout << pirmas << " - " << antras << " = "
        << skirtumas(pirmas, antras) << endl;
}

int main()
{
    int skaicius1 = 14, skaicius2 = 3;
    isvedimas(skaicius1, skaicius2);

    return 0;
}
```

Rezultatai:

```
14 + 3 = 17
14 - 3 = 11

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

// FUNKCIJŲ PROTOTIPAI -------------------------------

int suma(int pirmas, int antras);
int skirtumas(int sk1, int sk2);
void isvedimas(int pirmas, int antras);

// PAGRINDINĖ FUNKCIJA -------------------------------

int main()
{
    int skaicius1 = 14, skaicius2 = 3;

    isvedimas(skaicius1, skaicius2);
    isvedimas(16, skaicius2);
    isvedimas(skaicius1, 53);
    isvedimas(98, 12);

    return 0;
}

// KITOS FUNKCIJOS -----------------------------------

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int skirtumas(int sk1, int sk2)
{
    return sk1 - sk2;
}

void isvedimas(int pirmas, int antras)
{
    cout << pirmas << " + " << antras << " = "
        << suma(pirmas, antras) << endl;

    cout << pirmas << " - " << antras << " = "
        << skirtumas(pirmas, antras) << endl;

    cout << endl;
}
```

Rezultatai:

```
14 + 3 = 17
14 - 3 = 11

16 + 3 = 19
16 - 3 = 13

14 + 53 = 67
14 - 53 = -39

98 + 12 = 110
98 - 12 = 86


```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int skaiciu_suma(int skaiciai[], int kiekis)
{
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        suma += skaiciai[i];
    }

    return suma;
}

void isvedimas(string komentaras, int masyvas[], int kiekis)
{
    cout << komentaras << endl;
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << masyvas[i] << " ";
    }

    cout << endl;
}

int main()
{
    int skaiciai1[] = { 4, 7, 4, 2, 3, 6, 5, 4, 8 };
    int skaiciai1_kiekis = 9;

    int skaiciai2[] = { 8, 5, 2, 3, 5, 4, 7 };
    int skaiciai2_kiekis = 7;

    isvedimas("Pirmas skaiciu masyvas", skaiciai1, skaiciai1_kiekis);
    cout << "Skaiciu suma: " << skaiciu_suma(skaiciai1, skaiciai1_kiekis) << endl;
    cout << endl;

    isvedimas("Antras skaiciu masyvas", skaiciai2, skaiciai2_kiekis);
    cout << "Skaiciu suma: " << skaiciu_suma(skaiciai2, skaiciai2_kiekis);

    return 0;
}
```

Rezultatai:

```
Pirmas skaiciu masyvas
4 7 4 2 3 6 5 4 8
Skaiciu suma: 43

Antras skaiciu masyvas
8 5 2 3 5 4 7
Skaiciu suma: 34
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int skaiciu_suma(int skaiciai[], int kiekis)
{
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        suma += skaiciai[i];
    }

    return suma;
}

double skaiciu_vidurkis(int suma, int kiekis)
{
    return (double)suma / kiekis;
}

void isvedimas(string komentaras, int masyvas[], int kiekis)
{
    cout << "-----------------------------\n";
    cout << komentaras << endl;
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << masyvas[i] << " ";
    }

    int suma = skaiciu_suma(masyvas, kiekis);
    cout << "\n\nSkaiciu suma\n" << suma << "\n\n";
    cout << "Skaiciu vidurkis\n" << skaiciu_vidurkis(suma, kiekis) << "\n";
    cout << "-----------------------------\n\n";
}

int main()
{
    int skaiciai1[] = { 4, 7, 4, 2, 3, 6, 5, 4, 8 };
    int skaiciai1_kiekis = 9;

    int skaiciai2[] = { 8, 5, 2, 3, 5, 4, 7 };
    int skaiciai2_kiekis = 7;

    isvedimas("Pirmas skaiciu masyvas", skaiciai1, skaiciai1_kiekis);
    isvedimas("Antras skaiciu masyvas", skaiciai2, skaiciai2_kiekis);

    return 0;
}
```

Rezultatai:

```
-----------------------------
Pirmas skaiciu masyvas
4 7 4 2 3 6 5 4 8

Skaiciu suma
43

Skaiciu vidurkis
4.77778
-----------------------------

-----------------------------
Antras skaiciu masyvas
8 5 2 3 5 4 7

Skaiciu suma
34

Skaiciu vidurkis
4.85714
-----------------------------

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

// FUNKCIJŲ PROTOTIPAI -------------------------------

void duomenu_isvedimas(string vardai[], int amziai[], int kiekis);
string ilgiausias_vardas(string vardai[], int kiekis);
int didziausias_amzius(int amziai[], int kiekis);

// PAGRINDINĖ PROGRAMOS FUNKCIJA ---------------------

int main()
{
    string vardai[10];
    int amziai[10];
    int kiekis = 0;

    cout << "Kiek duomenu norite suvesti? ";
    cin >> kiekis;
    cout << endl;

    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis zmogus\n";
        cout << "Vardas: ";
        cin >> vardai[i];
        cout << "Amzius: ";
        cin >> amziai[i];
        cout << endl;
    }

    duomenu_isvedimas(vardai, amziai, kiekis);

    return 0;
}

// VISOS KITOS FUNKCIJOS -----------------------------

void duomenu_isvedimas(string vardai[], int amziai[], int kiekis)
{
    cout << "+--------------------+--------+\n";
    cout << "| Vardas             | Amzius |\n";
    cout << "+--------------------+--------+\n";
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << "| " << setw(18) << left << vardai[i]
            << " | " << setw(6) << amziai[i] << " |\n";
    }

    cout << "+--------------------+--------+\n\n";
    cout << "Ilgiausias vardas: " << ilgiausias_vardas(vardai, kiekis) << endl;
    cout << "Didziausias amzius: " << didziausias_amzius(amziai, kiekis) << endl;
    cout << "\n\n";
}

string ilgiausias_vardas(string vardai[], int kiekis)
{
    string ilgiausias = "";

    for (int i = 0; i < kiekis; i++)
    {
        if (vardai[i].length() > ilgiausias.length())
        {
            ilgiausias = vardai[i];
        }
    }

    return ilgiausias;
}

int didziausias_amzius(int amziai[], int kiekis)
{
    int didz_amzius = 0;

    for (int i = 0; i < kiekis; i++)
    {
        if (amziai[i] > didz_amzius)
        {
            didz_amzius = amziai[i];
        }
    }

    return didz_amzius;
}
```

Rezultatai:

```
Kiek duomenu norite suvesti? 3

1-asis zmogus
Vardas: Tomas
Amzius: 23

2-asis zmogus
Vardas: Inga
Amzius: 19

3-asis zmogus
Vardas: Gintare
Amzius: 20

+--------------------+--------+
| Vardas             | Amzius |
+--------------------+--------+
| Tomas              | 23     |
| Inga               | 19     |
| Gintare            | 20     |
+--------------------+--------+

Ilgiausias vardas: Gintare
Didziausias amzius: 23
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

bool ar_tiesa()
{
    int skaicius = 8;

    if (skaicius > 5)
    {
        return true;
    }

    return false;
}

int main()
{
    if (ar_tiesa())
    {
        cout << "funkcija grazino true rezultata";
    }

    return 0;
}
```

Rezultatai:

```
funkcija grazino true rezultata
```

## Užduotys

### Užduotis 1

Parašykite šias dvi funkcijas:

- Funkciją, kuri priimtų du skaičius ir grąžintų tą kuris yra didesnis iš jų, o jei skaičiai lygūs - grąžintų bet kurį iš jų.
- Funkciją, kuri grąžintų mažiausią skaičių iš trijų. Funkcija per argumentus priima tris skaičius, o grąžina mažiausią iš jų.

### Užduotis 2

Sukurkite funkciją, kurioje vartotojas galėtų suvesti savo vardą. Ši funkcija turėtų grąžinti įvesto vardo ilgį (simbolių kiekį) kaip atsakymą.

### Užduotis 3

Leiskite vartotojui suvesti du skaičius.

Sukurkite šias funkcijas:

- Sumos skaičiavimo, kuri priimtų du skaičius ir grąžintų gautą sumą kaip atsakymą.
- Skirtumo skaičiavimo, kuri priimtų du skaičius ir grąžintų gautą skirtumą kaip atsakymą.
- Sandaugos skaičiavimo, kuri priimtų du skaičius ir grąžintų gautą sandaugą kaip atsakymą.
- Dalmens skaičiavimo, kuri priimtų du skaičius ir grąžintų gautą dalmenį kaip atsakymą.

Iškvieskite šias funkcijas, perduodant vartotojo suvestus skaičius.

Šių funkcijų rezultatus galite saugoti naujuose kintamuosiuose arba galite iškart išvesti, išvedant atsakymus.

### Užduotis 4

Sukurkite funkciją, kuri leistų vartotojui suvesti savo paskutinį pažymį. Ši funkcija turi grąžinti `true` jeigu pažymys yra teigiamas (4 ir daugiau) arba `false` jeigu pažymys yra mažesnis.

Papildomai: padarykite išvedimą suprantamesnį programos naudotojui (jeigu funkcijos rezultatas `true` tuomet išvesti vienokį tekstą, o jei `false` - kitokį).

### Užduotis 5

Sukurkite funkciją, kuri patikrintų ar skaičius yra pirminis ar ne, ši funkcija grąžina `bool` tipo atsakymą, kur `true` reikšmė reiškia - skaičius pirminis ir `false` - skaičius ne pirminis.

Leiskite vartotojui suvesti norimą kiekį skaičių. Šią funkciją iškvieskite su kiekvienu skaičiumi.

### Užduotis 6

Susikurkite skaičių masyvą.

Parašykite šias funkcijas:

- Priimtų skaičių masyvą ir kiekį, grąžintų mažiausią rastą skaičių.
- Priimtų skaičių masyvą ir kiekį, grąžintų didžiausią rastą skaičių.
- Priimtų skaičių masyvą ir kiekį, grąžintų sumą.
- Priimtų sumą ir kiekį, grąžintų vidurkį.
- Priimtų skaičių masyvą ir kiekį, iškviestų visas ankstesnes funkcijas, išvedant visus papildomus tekstus, kurie apibūdintų atliktus skaičiavimus ir gautus rezultatus.

Iškvieskite paskutinę funkciją (kuri kviečia visas kitas funkcijas), perduodant turimą skaičių masyvą ir elementų kiekį.

### Užduotis 7 (sudėtingesnė)

Sukurkite funkciją, kuri per argumentus priimtų žmogaus vardą, paskaičiuočių kiek balsių yra gautame varde ir grąžintų balsių kiekį kaip atsakymą.
