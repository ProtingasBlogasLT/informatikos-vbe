---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo atrinkimo / filtravimo užduotis nr. 1

## Užduoties sąlyga

- Susikurkite skaičių masyvą.
- Išveskite šiuos skaičius.
- Išveskite visus lyginius skaičius iš šio masyvo.
- Išveskite visus nelyginius skaičius iš šio masyvo.

Pavyzdžiui:

```
Skaičiai: 5 8 7 6 5 4 7
Lyginiai: 8 6 4
Nelygiai: 5 7 5 7
```

- Raskite lyginių skaičių sumą.
- Raskite nelyginių skaičių sumą.
- Raskite lyginių ar nelyginių skaičių suma yra didesnė ir koks skirtumas tarp jų.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int skaiciai[] = { 7, 5, 8, 9, 5, 4, 2, 3, 5, 4, 6, 5 };
    int kiekis = 12;

    cout << "Skaiciai: ";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    int lyginiu_suma = 0, nelyginiu_suma = 0;

    cout << "\nLyginiai: ";

    for (int i = 0; i < kiekis; i++)
    {
        if (skaiciai[i] % 2 == 0)
        {
            cout << skaiciai[i] << " ";
            lyginiu_suma += skaiciai[i];
        }
    }

    cout << "\nNelyginiai: ";

    for (int i = 0; i < kiekis; i++)
    {
        if (skaiciai[i] % 2 != 0)
        {
            cout << skaiciai[i] << " ";
            nelyginiu_suma += skaiciai[i];
        }
    }

    cout << "\n\nLyginiu suma: " << lyginiu_suma << endl;
    cout << "Nelyginiu suma: " << nelyginiu_suma << endl;

    if (lyginiu_suma > nelyginiu_suma)
    {
        cout << "Lyginiu skaiciu suma didesne per "
            << lyginiu_suma - nelyginiu_suma << endl;
    }
    else if (lyginiu_suma < nelyginiu_suma)
    {
        cout << "Nelyginiu skaiciu suma didesne per "
            << nelyginiu_suma - lyginiu_suma << endl;
    }

    return 0;
}
```

Rezultatai:

```
Skaiciai: 7 5 8 9 5 4 2 3 5 4 6 5
Lyginiai: 8 4 2 4 6
Nelyginiai: 7 5 9 5 3 5 5

Lyginiu suma: 24
Nelyginiu suma: 39
Nelyginiu skaiciu suma didesne per 15
```
