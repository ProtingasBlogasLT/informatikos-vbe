---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo atrinkimo / filtravimo užduotis nr. 3

## Užduoties sąlyga

- Leiskite vartotojui suvesti norimą kiekį vardų.
- Leiskite vartotojui pasirinkti raidę, pagal kurią vyks vardų atrinkimas.
- Atrinkite vardus, kurie prasideda pasirinkta raide. Norint pasirinkti tik pirmąją raidę, galima naudoti `vardai[i][0]` arba `vardai[i].at(0)`. Norint transformuoti konkrečią raidę į mažąją, galima naudoti `char(tolower('T'))`.
- Atrinkite vardus, kurie turi nurodytą raidę, bet kurioje vardo vietoje.
- Išveskite suvestus duomenis, bei atrinktus pagal kažkurį kriterijų.

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string vardai[10];
    int kiekis;

    cout << "Kiek vardu norite suvesti? ";
    cin >> kiekis;

    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis vardas: ";
        cin >> vardai[i];
    }

    char raide;
    cout << "Pagal kuria raide daryti atrinkima? ";
    cin >> raide;

    cout << "\nVardai, prasidedantys nurodyta raide:\n";

    for (int i = 0; i < kiekis; i++)
    {
        if (char(tolower(vardai[i][0])) == char(tolower(raide)))
        {
            cout << vardai[i] << endl;
        }
    }

    cout << "\nVardai, turintys tokia raide bet kurioje vietoje:\n";

    for (int i = 0; i < kiekis; i++)
    {
        for (int j = 0; j < vardai[i].length(); j++)
        {
            if (char(tolower(vardai[i].at(j))) == char(tolower(raide)))
            {
                cout << vardai[i] << endl;
                break;
            }
        }
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek vardu norite suvesti? 4
1-asis vardas: Inga
2-asis vardas: Jonas
3-asis vardas: Petras
4-asis vardas: Grinta
Pagal kuria raide daryti atrinkima? i

Vardai, prasidedantys nurodyta raide:
Inga

Vardai, turintys tokia raide bet kurioje vietoje:
Inga
Grinta
```

Rezultatas 2:

```
Kiek vardu norite suvesti? 3
1-asis vardas: Tomas
2-asis vardas: Ugnius
3-asis vardas: Petras
Pagal kuria raide daryti atrinkima? u

Vardai, prasidedantys nurodyta raide:
Ugnius

Vardai, turintys tokia raide bet kurioje vietoje:
Ugnius
```
