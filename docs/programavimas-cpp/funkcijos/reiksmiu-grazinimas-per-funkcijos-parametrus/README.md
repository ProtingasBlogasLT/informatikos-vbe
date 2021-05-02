# Reikšmių grąžinimas per funkcijos parametrus

## Vaizdo pamoka

Informacija ruošiama.

## Sintaksė

Funkcijose parametruose galima rašyti kintamuosius, kuriuos funkcija naudos, pavyzdžiui:

```cpp
string vardas
```

Tačiau tokiu atveju, kintamieji funkcijai perduodami darant šių kintamųjų kopijas, kas reiškia, kad funkcijos viduje pasikeitus kintamojo reikšmei, originalaus kintamojo reikšmė nebus pakeista.

Jeigu reikia, kad kintamojo reikšmę būtų galima pakeisti, jį funkcijai galima perduoti kaip nuorodą (angl. *reference*), tarp kintamojo tipo ir pavadinimo įstačius simbolį `&`:

```cpp
string & vardas
```

To daryti nereikia su masyvais ir kitais panašiais tipais, kurie funkcijoms ir taip yra perduodami kaip nuorodos, kadangi jų kopijavimas atmintyje gali būti brangus.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

void ivedimas(string & vardas, int & amzius)
{
    cout << "Iveskite varda: ";
    cin >> vardas;
    cout << "Iveskite amziu: ";
    cin >> amzius;
}

int main()
{
    string vardas;
    int amzius;

    ivedimas(vardas, amzius);

    cout << "\nIvesti duomenys" << endl;
    cout << "Vardas: " << vardas << endl;
    cout << "Amzius: " << amzius << endl;

    return 0;
}
```

Rezultatai:

```
Iveskite varda: Ieva
Iveskite amziu: 90

Ivesti duomenys
Vardas: Ieva
Amzius: 90
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciu_ivedimas(int & pirmas, int & antras)
{
    cout << "Iveskite du skaicius: ";
    cin >> pirmas >> antras;
}

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int main()
{
    int sk1, sk2;
    skaiciu_ivedimas(sk1, sk2);
    cout << "Ivestu skaiciu suma: " << suma(sk1, sk2) << endl;

    return 0;
}
```

Rezultatai:

```
Iveskite du skaicius: 5 3
Ivestu skaiciu suma: 8
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

void ivedimas(int skaiciai[], int & kiekis)
{
    cout << "Kiek skaiciu norite ivesti? ";
    cin >> kiekis;

    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis skaicius: ";
        cin >> skaiciai[i];
    }
}

void isvedimas(int skaiciai[], int kiekis)
{
    cout << "Ivesti skaiciai:\n";
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;
}

int main()
{
    int skaiciai[100];
    int kiek;

    ivedimas(skaiciai, kiek);
    isvedimas(skaiciai, kiek);

    return 0;
}
```

Rezultatai:

```
Kiek skaiciu norite ivesti? 5
1-asis skaicius: 8
2-asis skaicius: 9
3-asis skaicius: 5
4-asis skaicius: 4
5-asis skaicius: 2
Ivesti skaiciai:
8 9 5 4 2
```

### Pavyzdys 4

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

void ivedimas(int masyvas[], int & kiekis)
{
    ifstream fin("duomenys.txt");

    fin >> kiekis;

    for (int i = 0; i < kiekis; i++)
    {
        fin >> masyvas[i];
    }

    fin.close();
}

void isvedimas(int mas[], int kiekis)
{
    cout << "Nuskaityti skaiciai:\n";
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << mas[i] << " ";
    }

    cout << endl;
}

int main()
{
    int skaiciai[100];
    int kiek;

    ivedimas(skaiciai, kiek);
    isvedimas(skaiciai, kiek);

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
5
6
4
5
2
4
```
</code-block>
</code-group>

Konsolė:

```
Nuskaityti skaiciai:
6 4 5 2 4
```

## Užduotys

Informacija ruošiama.
