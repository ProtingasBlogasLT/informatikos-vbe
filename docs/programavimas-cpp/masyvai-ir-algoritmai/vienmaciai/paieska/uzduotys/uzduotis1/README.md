---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo paieškos užduotis nr. 1

## Užduoties sąlyga

- Turite informaciją apie taksisto nuvažiuotus kilometrus kiekvieną dieną.
- Raskite kiek mažiausiai ir kiek daugiausiai kilometrų per dieną yra nuvažiavęs taksistas.
- Raskite ar taksistas kada nors yra nuvažiavęs virš 100 km per dieną.
- Raskite ar taksistas kada nors yra nuvažiavęs lygiai 50 km per dieną.
- Išveskite pradinę turimą informaciją apie nuvažiuotus kilometrus ir visus rastus atsakymus.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int kilometrai[] = { 30, 45, 125, 32, 54, 27, 75, 65, 130 };
    int kiekis = 9;

    int maziausiai = kilometrai[0],
        daugiausiai = kilometrai[0];

    bool ar_daugiau_nei_100 = false,
        ar_lygiai_50 = false;

    for (int i = 0; i < kiekis; i++)
    {
        if (kilometrai[i] < maziausiai)
        {
            maziausiai = kilometrai[i];
        }

        if (kilometrai[i] > daugiausiai)
        {
            daugiausiai = kilometrai[i];
        }

        if (kilometrai[i] > 100)
        {
            ar_daugiau_nei_100 = true;
        }

        if (kilometrai[i] == 50)
        {
            ar_lygiai_50 = true;
        }
    }

    cout << "Nuvaziuoti kilometrai: ";

    for (int i = 0; i < kiekis; i++)
    {
        cout << kilometrai[i] << " ";
    }

    cout << "\nMaziausiai nuvaziuota: " << maziausiai << endl;
    cout << "Daugiausiai nuvaziuota: " << daugiausiai << endl;

    if (ar_daugiau_nei_100)
    {
        cout << "Vairuotas yra nuvaziaves bent karta daugiau nei 100 km per diena"
            << endl;
    }
    else
    {
        cout << "Vairuotas nera nuvaziaves nei karto daugiau nei 100 km per diena"
            << endl;
    }

    if (ar_lygiai_50)
    {
        cout << "Vairuotas yra nuvaziaves bent karta lygiai 50 km per diena" << endl;
    }
    else
    {
        cout << "Vairuotas nera nuvaziaves nei karto lygiai 50 km per diena" << endl;
    }

    return 0;
}
```

Rezultatai:

```
Nuvaziuoti kilometrai: 30 45 125 32 54 27 75 65 130
Maziausiai nuvaziuota: 27
Daugiausiai nuvaziuota: 130
Vairuotas yra nuvaziaves bent karta daugiau nei 100 km per diena
Vairuotas nera nuvaziaves nei karto lygiai 50 km per diena
```
