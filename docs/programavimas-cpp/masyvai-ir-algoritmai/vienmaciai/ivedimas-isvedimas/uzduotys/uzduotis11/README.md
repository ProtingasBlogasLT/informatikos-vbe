---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 11

## Užduoties sąlyga

- Leiskite vartotojui suvesti kiek nori skaičių.
- Leiskite jam pamatyti norimą (kelintąjį) skaičių konsolėje. Pavyzdžiui:

```
Skaičiai: 7 8 9 5 4
Kelintą skaičių norite pamatyti? 2
2-asis skaičius: 8
```

- Papildomai: padarykite, kad vartotojas galėtų pasižiūrėti kiek norėtų skaičių, nurodant kelintas tai skaičius.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int skaiciai[100] = {0};
    int kiekis;

    cout << "Kiek skaiciu norite suvesti: ";
    cin >> kiekis;

    cout << "Suveskite skaicius:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cin >> skaiciai[i];
    }

    cout << "\nSkaiciai: ";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }
    
    cout << "\nKelinta skaiciu norite pamatyti? ";
    int kelinta;
    cin >> kelinta;

    cout << kelinta << "-asis skaicius: " << skaiciai[kelinta - 1] << endl;
   
    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite suvesti: 6
Suveskite skaicius:
4
7
1
2
3
5

Skaiciai: 4 7 1 2 3 5
Kelinta skaiciu norite pamatyti? 2
2-asis skaicius: 7
```

Rezultatas 2:

```
Kiek skaiciu norite suvesti: 5
Suveskite skaicius:
4
7
2
3
5

Skaiciai: 4 7 2 3 5
Kelinta skaiciu norite pamatyti? 4
4-asis skaicius: 3

```
