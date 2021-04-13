---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo atrinkimo / filtravimo užduotis nr. 2

## Užduoties sąlyga

- Susikurkite skaičių masyvą. Raskite skaičių vidurkį.
- Atrinkite į kitą masyvą skaičius, kurie yra didesni už vidurkį.
- Išveskite pradinius ir atrinktus duomenis.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int skaiciai[] = { 7, 4, 5, 8, 5, 7, 4, 2, 3, 6, 1, 2 };
    int kiekis = 12;
    int skaiciu_suma = 0;
    double skaiciu_vidurkis;

    for (int i = 0; i < kiekis; i++)
    {
        skaiciu_suma += skaiciai[i];
    }

    skaiciu_vidurkis = (double)skaiciu_suma / kiekis;

    int atrinkti[20];
    int atrinktu_kiekis = 0;

    for (int i = 0; i < kiekis; i++)
    {
        if (skaiciai[i] > skaiciu_vidurkis)
        {
            atrinkti[atrinktu_kiekis] = skaiciai[i];
            atrinktu_kiekis++;
        }
    }

    cout << "Skaiciai: ";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << "\nSiu skaiciu vidurkis: " << skaiciu_vidurkis << endl;

    cout << "Atrinkti skaiciai: ";

    for (int i = 0; i < atrinktu_kiekis; i++)
    {
        cout << atrinkti[i] << " ";
    }

    return 0;
}
```

Rezultatai:

```
Skaiciai: 7 4 5 8 5 7 4 2 3 6 1 2
Siu skaiciu vidurkis: 4.5
Atrinkti skaiciai: 7 5 8 5 7 6
```
