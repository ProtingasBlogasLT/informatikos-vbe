---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 10

## Užduoties sąlyga

- Susikurkite du skaičių masyvus į kuriuos leiskite vartotojui suvesti po kiek nori skaičių.
- Išveskite tik tą masyvą, kuris turi daugiau skaičių.
- Nurodykite per kiek skaičių skiriasi skaičių kiekis. Pavyzdžiui: "Išvestas masyvas didesnis per 3 skaičius".

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int pirmas[100], antras[100];
    int pirmo_kiekis, antro_kiekis;

    cout << "Kiek skaiciu suvesti pirmam: ";
    cin >> pirmo_kiekis;

    cout << "Suveskite skaicius:\n";

    for (int i = 0; i < pirmo_kiekis; i++)
    {
        cin >> pirmas[i];
    }

    cout << "Kiek skaiciu suvesti antram: ";
    cin >> antro_kiekis;

    cout << "Suveskite skaicius:\n";

    for (int i = 0; i < antro_kiekis; i++)
    {
        cin >> antras[i];
    }

    cout << endl;

    if (pirmo_kiekis > antro_kiekis)
    {
        cout << "Pirmo masyvo skaiciai:\n";

        for (int i = 0; i < pirmo_kiekis; i++)
        {
            cout << pirmas[i] << " ";
        }

        cout << "\nIsvestas masyvas didesnis per "
            << pirmo_kiekis - antro_kiekis << " skaicius" << endl;
    }
    else if (pirmo_kiekis < antro_kiekis)
    {
        cout << "Antro masyvo skaiciai:\n";

        for (int i = 0; i < antro_kiekis; i++)
        {
            cout << antras[i] << " ";
        }

        cout << "\nIsvestas masyvas didesnis per "
            << antro_kiekis - pirmo_kiekis << " skaicius" << endl;
    }
   
    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu suvesti pirmam: 2
Suveskite skaicius:
4
7
Kiek skaiciu suvesti antram: 5
Suveskite skaicius:
4
7
8
6
5

Antro masyvo skaiciai:
4 7 8 6 5
Isvestas masyvas didesnis per 3 skaicius
```

Rezultatas 2:

```
Kiek skaiciu suvesti pirmam: 7
Suveskite skaicius:
5
6
5
4
7
8
5
Kiek skaiciu suvesti antram: 2
Suveskite skaicius:
1
2

Pirmo masyvo skaiciai:
5 6 5 4 7 8 5
Isvestas masyvas didesnis per 5 skaicius
```
