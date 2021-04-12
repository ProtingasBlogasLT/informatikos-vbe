---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 8

## Užduoties sąlyga

- Susikurkite skaičių masyvą ir leiskite vartotojui jį užpildyti norimu kiekiu skaičių.
- Leiskite vartotojui įvesti norimą laipsnį (skaičių, kuriuo bus pakelti suvesti skaičiai).
- Sukurkite naują masyvą į kurį paskaičiuokite ir sudėkite suvestų skaičių kvadratų reikšmes.
- Sukurkite naują masyvą į kurį paskaičiuokite ir sudėkite suvestų skaičių, pakeltų nurodytu laipsniu, reikšmes.
- Visus atsakymus išveskite atskirose eilutėse. Pavyzdžiui:

```
Suvesti skaičiai:
2 4 9 3

Šių skaičių kvadratai:
4 16 81 9

Šie skaičiai pakelti 5-u laipsniu:
32 1024 59049 243
```

- Papildomai: visus atsakymus išveskite lentelės pavidalu. Pavyzdžiui:

```
+----------+-----------+---------------+
| Skaičius | Kvadratas | 5-as laipsnis |
+----------+-----------+---------------+
| 2        | 4         | 32            |
| 4        | 16        | 1024          |
| 9        | 81        | 59049         |
| 3        | 9         | 243           |
+----------+-----------+---------------+
```

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main()
{
    int skaiciai[100], kvadratai[100], laipsniu[100];
    int kiek, laipsnis;

    cout << "Kiek skaiciu suvesti: ";
    cin >> kiek;

    cout << endl;

    for (int i = 0; i < kiek; i++)
    {
        cout << i + 1 << "-asis skaicius: ";
        cin >> skaiciai[i];
    }

    cout << "\nPasirinkite laipsni: ";
    cin >> laipsnis;

    for (int i = 0; i < kiek; i++)
    {
        kvadratai[i] = skaiciai[i] * skaiciai[i];
        laipsniu[i] = pow(skaiciai[i], laipsnis);
    }

    cout << "\nSuvesti skaiciai:\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << "\n\nSiu skaiciu kvadratai:\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << kvadratai[i] << " ";
    }

    cout << "\n\nSie skaiciai pakelti " << laipsnis << "-u laipsniu:\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << laipsniu[i] << " ";
    }

    cout << "\n\n";
    cout << "+----------+-----------+---------------+\n";
    cout << "| Skaicius | Kvadratas | " << laipsnis << "-as laipsnis |\n";
    cout << "+----------+-----------+---------------+\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << "| " << setw(8) << left << skaiciai[i] << " | "
            << setw(9) << kvadratai[i] << " | "
            << setw(13) << laipsniu[i] << " |\n";
    }

    cout << "+----------+-----------+---------------+\n";

    return 0;
}
```

Rezultatai:

```
Kiek skaiciu suvesti: 4

1-asis skaicius: 2
2-asis skaicius: 4
3-asis skaicius: 9
4-asis skaicius: 3

Pasirinkite laipsni: 5

Suvesti skaiciai:
2 4 9 3

Siu skaiciu kvadratai:
4 16 81 9

Sie skaiciai pakelti 5-u laipsniu:
32 1024 59049 243

+----------+-----------+---------------+
| Skaicius | Kvadratas | 5-as laipsnis |
+----------+-----------+---------------+
| 2        | 4         | 32            |
| 4        | 16        | 1024          |
| 9        | 81        | 59049         |
| 3        | 9         | 243           |
+----------+-----------+---------------+

```
