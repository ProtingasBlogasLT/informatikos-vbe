---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 5

## Užduoties sąlyga

- Sukurkite trijų studentų pažymių masyvus (tris atskirus masyvus) su duomenimis, kuriuose pažymiai gali būti rašomi per kablelį, o pažymių kiekis kiekviename masyve gali būti skirtingas.
- Išveskite kiekvieną masyvą atskirose eilutėse, prieš kiekvieną masyvą parašant kas yra išvedama. O taip pat, pažymius rašyti toje pačioje eilutėje ir atskiriant vertikaliu brūkšniu. Pavyzdžiui:

```
1-o moksleivio pažymiai: 7.4 | 8 | 9.6 | 8 | 6.8
2-o moksleivio pažymiai: 10 | 9.5 | 9.4 | 9.8 | 8.6 | 10 | 9.7
3-o moksleivio pažymiai: 8 | 7 | 6.8
```

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    double pirmas[] = { 9.5, 8, 7.9, 10, 9.9 };
    int pirmo_kiekis = 5;

    double antras[] = { 8.5, 9.8, 9.7, 9.5, 8 };
    int antro_kiekis = 5;

    double trecias[] = { 8.5, 9.8, 8.9, 6.5, 7.2, 7.5 };
    int trecio_kiekis = 6;

    cout << "1-o moksleivio pazymiai: ";

    for (int i = 0; i < pirmo_kiekis; i++)
    {
        cout << pirmas[i];

        if (i + 1 < pirmo_kiekis)
        {
            cout << " | ";
        }
    }

    cout << endl << "2-o moksleivio pazymiai: ";

    for (int i = 0; i < antro_kiekis; i++)
    {
        cout << antras[i];

        if (i + 1 < antro_kiekis)
        {
            cout << " | ";
        }
    }

    cout << endl << "3-o moksleivio pazymiai: ";

    for (int i = 0; i < trecio_kiekis; i++)
    {
        cout << trecias[i];

        if (i + 1 < trecio_kiekis)
        {
            cout << " | ";
        }
    }

    return 0;
}
```

Rezultatai:

```
1-o moksleivio pazymiai: 9.5 | 8 | 7.9 | 10 | 9.9
2-o moksleivio pazymiai: 8.5 | 9.8 | 9.7 | 9.5 | 8
3-o moksleivio pazymiai: 8.5 | 9.8 | 8.9 | 6.5 | 7.2 | 7.5
```
