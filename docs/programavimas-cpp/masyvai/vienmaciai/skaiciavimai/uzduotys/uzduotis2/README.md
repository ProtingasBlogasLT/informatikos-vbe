---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo skaičiavimų užduotis nr. 2

## Užduoties sąlyga

- Susikurkite skaičių masyvą, kurį reikšmėmis galite užpildyti tiesiai programoje arba leisti suvesti vartotojui.
- Iš šių skaičių raskite sumą tų skaičių, kurie yra lyginiai ir yra didesnių nei bendras turimų skaičių vidurkis.
- Išveskite visus pradinius skaičius ir atsakymus.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int skaiciai[100];
    int kiek;

    cout << "Kiek skaiciu suvesti: ";
    cin >> kiek;

    cout << "\nSuveskite skaicius:\n";

    for (int i = 0; i < kiek; i++)
    {
        cin >> skaiciai[i];
    }

    int suma = 0;

    for (int i = 0; i < kiek; i++)
    {
        suma += skaiciai[i];
    }

    double vidurkis = (double)suma / kiek;

    int atrinktu_suma = 0;

    for (int i = 0; i < kiek; i++)
    {
        if (skaiciai[i] % 2 == 0 && skaiciai[i] > vidurkis)
        {
            atrinktu_suma += skaiciai[i];
        }
    }

    cout << "\n---\n\n";

    cout << "Skaiciai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;
    cout << "Vidurkis: " << vidurkis << endl;
    cout << "Lyginiu ir didesniu uz vidurki suma: "
        << atrinktu_suma << endl;

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu suvesti: 5

Suveskite skaicius:
4
7
5
8
3

---

Skaiciai: 4 7 5 8 3
Vidurkis: 5.4
Lyginiu ir didesniu uz vidurki suma: 8
```

Rezultatas 2:

```
Kiek skaiciu suvesti: 7

Suveskite skaicius:
4
5
8
7
4
2
3

---

Skaiciai: 4 5 8 7 4 2 3
Vidurkis: 4.71429
Lyginiu ir didesniu uz vidurki suma: 8
```
