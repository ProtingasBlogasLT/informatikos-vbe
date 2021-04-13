---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo skaičiavimų užduotis nr. 1

## Užduoties sąlyga

- Susikurkite skaičių masyvą, kurį reikšmėmis galite užpildyti tiesiai programoje arba leisti suvesti vartotojui.
- Raskite šių skaičių sumą, vidurkį.
- Raskite skaičių, didesnių už vidurkį, kiekį.
- Išveskite turimus skaičius, bei visus gautus atsakymus.

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

    int didesniu_uz_vid_kiekis = 0;

    for (int i = 0; i < kiek; i++)
    {
        if (skaiciai[i] > vidurkis)
        {
            didesniu_uz_vid_kiekis++;
        }
    }

    cout << "\n---\n\n";

    cout << "Suvesti skaiciai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;
    cout << "Suma: " << suma << endl;
    cout << "Vidurkis: " << vidurkis << endl;
    cout << "Didesniu uz vidurki kiekis: "
        << didesniu_uz_vid_kiekis << endl;
   
    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu suvesti: 5

Suveskite skaicius:
7
4
5
6
2

---

Suvesti skaiciai: 7 4 5 6 2
Suma: 24
Vidurkis: 4.8
Didesniu uz vidurki kiekis: 3
```

Rezultatas 2:

```
Kiek skaiciu suvesti: 4

Suveskite skaicius:
4
5
6
4

---

Suvesti skaiciai: 4 5 6 4
Suma: 19
Vidurkis: 4.75
Didesniu uz vidurki kiekis: 2
```
