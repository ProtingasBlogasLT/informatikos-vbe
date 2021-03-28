# Funkcijos su grąžinimo tipu

## Vaizdo pamoka

Informacija ruošiama.

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

### Pavyzdys 

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
    int sk = 5;
    return sk;
}
```

Rezultatai:

```
5

```

### Pavyzdys 

Kodas:

```cpp
#include <iostream>
using namespace std;

int skaicius()
{
    return 10;
}

int main()
{
    cout << skaicius();
    return 0;
}
```

Rezultatai:

```
10
```

### Pavyzdys 

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

### Pavyzdys 

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

int main()
{
    srand(time(NULL));

    cout << skaicius() << endl;
    cout << skaicius() << endl;
    cout << skaicius() << endl;

    return 0;
}
```

Rezultatas 1:

```
31
95
5

```

Rezultatas 2:

```
61
95
43

```

### Pavyzdys 

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int skaicius()
{
    return rand() % 100 + 1;
}

int main()
{
    srand(time(NULL));

    int sugeneruotas_skaicius = skaicius();
    cout << sugeneruotas_skaicius;

    return 0;
}
```

Rezultatas 1:

```
87
```

Rezultatas 2:

```
54
```

### Pavyzdys 

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int skaicius(int nuo, int iki)
{
    int max = iki - nuo;
    return rand() % max + nuo;
}

int main()
{
    srand(time(NULL));

    cout << "atsitiktiniai skaiciai:\n";
    cout << "nuo 1 iki 10: " << skaicius(1, 10) << endl;
    cout << "nuo 5 iki 10: " << skaicius(5, 10) << endl;
    cout << "nuo 100 iki 1000: " << skaicius(100, 1000) << endl;

    return 0;
}
```

Rezultatas 1:

```
atsitiktiniai skaiciai:
nuo 1 iki 10: 4
nuo 5 iki 10: 9
nuo 100 iki 1000: 953

```

Rezultatas 2:

```
atsitiktiniai skaiciai:
nuo 1 iki 10: 5
nuo 5 iki 10: 7
nuo 100 iki 1000: 992

```

### Pavyzdys 

Kodas:

```cpp
#include <iostream>
using namespace std;

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int main()
{
    int skaicius1, skaicius2;

    cout << "Iveskite du skaicius: ";
    cin >> skaicius1 >> skaicius2;

    cout << skaicius1 << " + " << skaicius2 << " = " << suma(skaicius1, skaicius2);

    return 0;
}
```

Rezultatas 1:

```
Iveskite du skaicius: 6 8
6 + 8 = 14
```

Rezultatas 2:

```
Iveskite du skaicius: 14 52
14 + 52 = 66
```

### Pavyzdys 

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
    int skaicius1 = 8, skaicius2 = 7;

    cout << skaicius1 << " + " << skaicius2 << " = "
        << suma(skaicius1, skaicius2) << endl;

    cout << skaicius1 << " - " << skaicius2 << " = "
        << skirtumas(skaicius1, skaicius2) << endl;

    return 0;
}
```

Rezultatai:

```
8 + 7 = 15
8 - 7 = 1

```

### Pavyzdys 

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

### Pavyzdys 

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

### Pavyzdys 

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

### Pavyzdys 

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

### Pavyzdys 

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

### Pavyzdys 

Kodas:

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

// FUNKCIJŲ PROTOTIPAI -------------------------------

void duomenu_ivedimas(string vardai[], int amziai[], int & kiekis);
void duomenu_isvedimas(string vardai[], int amziai[], int kiekis, int & didz_amzius);
string ilgiausias_vardas(string vardai[], int kiekis);
int didziausias_amzius(int amziai[], int kiekis);

// PAGRINDINĖ PROGRAMOS FUNKCIJA ---------------------

int main()
{
    string vardai1[10], vardai2[10];
    int amziai1[10], amziai2[10];
    int kiekis1 = 0, kiekis2 = 0;

    duomenu_ivedimas(vardai1, amziai1, kiekis1);
    duomenu_ivedimas(vardai2, amziai2, kiekis2);

    int pirmo_didz_amzius = 0, antro_didz_amzius = 0;

    duomenu_isvedimas(vardai1, amziai1, kiekis1, pirmo_didz_amzius);
    duomenu_isvedimas(vardai2, amziai2, kiekis2, antro_didz_amzius);

    cout << "Is didziausiu rastu amziu, pats didziausias yra: ";

    if (pirmo_didz_amzius > antro_didz_amzius)
    {
        cout << pirmo_didz_amzius;
    }
    else if (antro_didz_amzius > pirmo_didz_amzius)
    {
        cout << antro_didz_amzius;
    }
    else
    {
        cout << "abu vienodi";
    }

    cout << endl;

    return 0;
}

// VISOS KITOS FUNKCIJOS -----------------------------

void duomenu_ivedimas(string vardai[], int amziai[], int & kiekis)
{
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
}

void duomenu_isvedimas(string vardai[], int amziai[], int kiekis, int & didz_amzius)
{
    didz_amzius = didziausias_amzius(amziai, kiekis);

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
    cout << "Didziausias amzius: " << didz_amzius << endl;
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
Amzius: 18

2-asis zmogus
Vardas: Gabriele
Amzius: 23

3-asis zmogus
Vardas: Giedrius
Amzius: 20

Kiek duomenu norite suvesti? 5

1-asis zmogus
Vardas: Povilas
Amzius: 19

2-asis zmogus
Vardas: Indre
Amzius: 25

3-asis zmogus
Vardas: Zygimantas
Amzius: 24

4-asis zmogus
Vardas: Paulius
Amzius: 17

5-asis zmogus
Vardas: Greta
Amzius: 21

+--------------------+--------+
| Vardas             | Amzius |
+--------------------+--------+
| Tomas              | 18     |
| Gabriele           | 23     |
| Giedrius           | 20     |
+--------------------+--------+

Ilgiausias vardas: Gabriele
Didziausias amzius: 23


+--------------------+--------+
| Vardas             | Amzius |
+--------------------+--------+
| Povilas            | 19     |
| Indre              | 25     |
| Zygimantas         | 24     |
| Paulius            | 17     |
| Greta              | 21     |
+--------------------+--------+

Ilgiausias vardas: Zygimantas
Didziausias amzius: 25


Is didziausiu rastu amziu, pats didziausias yra: 25

```

## Užduotys

Informacija ruošiama.
