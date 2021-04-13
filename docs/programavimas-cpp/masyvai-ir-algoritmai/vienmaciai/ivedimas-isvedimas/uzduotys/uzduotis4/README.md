---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 4

## Užduoties sąlyga

- Susikurkite du skaičių masyvus, kurie iškart būtų užpildyti duomenimis.
- Vartotojui leiskite pasirinkti kurį skaičių masyvą (pirmą ar antrą) parodyti ekrane.
- Vartotojui pasirinkus, kurį masyvą parodyti, visus jo skaičius išveskite toje pačioje eilutėje, kiekvieną skaičių apskliaudžiant laužtiniais (`[ ]`) skliaustais.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int pirmas[] = { 7, 4, 5, 8, 7, 5, 2, 3, 1, 5 };
    int pirmo_kiekis = 10;

    int antras[] = { 4, 7, 5, 2, 5, 4, 1 };
    int antro_kiekis = 7;

    int kuris;
    cout << "Kuri skaiciu masyva norite pamatyti? (1/2) ";
    cin >> kuris;

    if (kuris == 1)
    {
        for (int i = 0; i < pirmo_kiekis; i++)
        {
            cout << "[" << pirmas[i] << "]";
        }
    }
    else if (kuris == 2)
    {
        for (int i = 0; i < antro_kiekis; i++)
        {
            cout << "[" << antras[i] << "]";
        }
    }

    return 0;
}
```

Rezultatas 1:

```
Kuri skaiciu masyva norite pamatyti? (1/2) 1
[7][4][5][8][7][5][2][3][1][5]
```

Rezultatas 2:

```
Kuri skaiciu masyva norite pamatyti? (1/2) 2
[4][7][5][2][5][4][1]
```

Rezultatas 3:

```
Kuri skaiciu masyva norite pamatyti? (1/2) 3

```
