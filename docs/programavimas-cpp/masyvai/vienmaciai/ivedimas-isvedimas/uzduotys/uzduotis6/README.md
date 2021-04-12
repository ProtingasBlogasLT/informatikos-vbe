---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 6

## Užduoties sąlyga

- Sukurkite skaičių masyvą, kuriame iš pradžių nebūtų duomenų.
- Leiskite vartotojui pasirinkti kiek duomenų jis nori įvesti, bei leiskite jam tuos duomenis įvesti, kiekvienoje įvedimo eilutėje nurodant kelintą skaičių jis įvedinėja. Pavyzdžiui:

```
1-asis skaičius: ...
2-asis skaičius: ...
...
```

- Galiausiai visus skaičius išveskite gražiai, lentelės pavidalu, kur pirmas stulpelis parodytų kelintas tai skaičius, o antrame stulpelyje būtų skaičius iš masyvo. Pavyzdžiui:

```
+-----+----------+
| #   | Skaičius |
+-----+----------+
| 1   | 8        |
| 2   | 15       |
| 3   | 32       |
| 4   | 5        |
| 5   | 1        |
+-----+----------+
```

- Po lentele išveskite kiek skaičių šiame masyve yra iš viso. Pavyzdžiui: "Lentelėje yra 5 skaičiai".

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int skaiciai[10];
    int kiek;

    cout << "Kiek skaiciu norite suvesti? ";
    cin >> kiek;

    cout << "\nIveskite skaicius\n\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << i + 1 << "-asis skaicius: ";
        cin >> skaiciai[i];
    }

    cout << endl;
    cout << "+-----+----------+\n";
    cout << "| #   | Skaicius |\n";
    cout << "+-----+----------+\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << "| " << setw(3) << left << i + 1
            << " | " << setw(8) << left << skaiciai[i] << " |\n";
    }

    cout << "+-----+----------+\n";

    return 0;
}
```

Rezultatai:

```
Kiek skaiciu norite suvesti? 5

Iveskite skaicius

1-asis skaicius: 5
2-asis skaicius: 8
3-asis skaicius: 7
4-asis skaicius: 4
5-asis skaicius: 1

+-----+----------+
| #   | Skaicius |
+-----+----------+
| 1   | 5        |
| 2   | 8        |
| 3   | 7        |
| 4   | 4        |
| 5   | 1        |
+-----+----------+

```
