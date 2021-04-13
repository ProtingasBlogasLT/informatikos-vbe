---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo skaičiavimų užduotis nr. 4

## Užduoties sąlyga

- Turite viso mėnesio, kiekvienos dienos temperatūras.
- Raskite kiek dienų siekė 20 laipsnių ar buvo  šiltesnės nei 20 laispsnių ir koks tokių dienų vidurkis.
- Raskite kiek dienų buvo mažiau nei 20 laipsnių ir koks tokių dienų vidurkis.
- Raskite koks skirtumas tarp šiltų ir vėsesnių dienų vidurkių.
- Kurių dienų (šiltesnių ar vėsesnių) buvo daugiau?
- Išveskite pradinius duomenis, bei gautus atsakymus.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    double temperaturos[] = { 25, 26, 25.5, 25.2, 28, 30.1, 32.3, 24,
                            22.5, 20, 18, 17.5, 17.7, 18, 15, 14.5 };
    int temp_kiekis = 16;

    int siltu_suma = 0, siltu_kiekis = 0;
    double siltu_vidurkis;

    int vesiu_suma = 0, vesiu_kiekis = 0;
    double vesiu_vidurkis;

    for (int i = 0; i < temp_kiekis; i++)
    {
        if (temperaturos[i] >= 20)
        {
            siltu_suma += temperaturos[i];
            siltu_kiekis++;
        }

        if (temperaturos[i] < 20)
        {
            vesiu_suma += temperaturos[i];
            vesiu_kiekis++;
        }
    }

    siltu_vidurkis = (double)siltu_suma / siltu_kiekis;
    vesiu_vidurkis = (double)vesiu_suma / vesiu_kiekis;

    double vidurkiu_skirtumas = siltu_vidurkis - vesiu_vidurkis;

    cout << "Turimos temperaturos:\n";

    for (int i = 0; i < temp_kiekis; i++)
    {
        cout << "[" << temperaturos[i] << "]";
    }

    cout << "\n\n";
    cout << "Dienu kurios sieke 20 laipsniu ar buvo siltesnis kiekis: "
        << siltu_kiekis << endl;
    cout << "Tokiu dienu vidurkis: " << siltu_vidurkis << "\n\n";

    cout << "Dienu kurios buvo maziau nei 20 laipsniu: "
        << vesiu_kiekis << endl;
    cout << "Tokiu dienu vidurkis: " << vesiu_vidurkis << "\n\n";

    cout << "Skirtumas tarp tokiu dienu vidurkiu: "
        << vidurkiu_skirtumas << "\n\n";

    if (siltu_kiekis > vesiu_kiekis)
    {
        cout << "Siltu dienu buvo daugiau" << endl;
    }
    else if (siltu_kiekis < vesiu_kiekis)
    {
        cout << "Vesiu dienu buvo daugiau" << endl;
    }

    return 0;
}
```

Rezultatai:

```
Turimos temperaturos:
[25][26][25.5][25.2][28][30.1][32.3][24][22.5][20][18][17.5][17.7][18][15][14.5]

Dienu kurios sieke 20 laipsniu ar buvo siltesnis kiekis: 10
Tokiu dienu vidurkis: 25.7

Dienu kurios buvo maziau nei 20 laipsniu: 6
Tokiu dienu vidurkis: 16.5

Skirtumas tarp tokiu dienu vidurkiu: 9.2

Siltu dienu buvo daugiau
```
