---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo paieškos užduotis nr. 3

## Užduoties sąlyga

- Leiskite vartotojui suvesti norimą kiekį žodžių.
- Raskite trumpiausią ir ilgiausią žodžius. Jeigu yra keli vienodo ilgio trumpiausi ar ilgiausi, tai rasti pirmus tokius žodžius.
- Raskite iš kiek vidutiniškai raidžių susidaro visi žodžiai. Šį skaičių apvalinkite į norimą pusę.
- Raskite pirmą žodį, kuris yra sudarytas iš būtent tokio raidžių kiekio, koks yra rastas (suapvalintas) vidurkis.
- Leiskite vartotojui pasirinkti kokio žodžio ieškoti tarp visų turimų žodžių. Raskite kiek kartų kartojasi (kiek kartų galima rasti) vartotojo nurodytas žodis.

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string zodziai[10];
    int kiekis;

    cout << "Kiek zodziu suvesti: ";
    cin >> kiekis;

    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis zodis: ";
        cin >> zodziai[i];
    }

    string ilgiausias = zodziai[0],
        trumpiausias = zodziai[0];

    for (int i = 0; i < kiekis; i++)
    {
        if (zodziai[i].length() > ilgiausias.length())
        {
            ilgiausias = zodziai[i];
        }

        if (zodziai[i].length() < trumpiausias.length())
        {
            trumpiausias = zodziai[i];
        }
    }

    cout << "Ilgiausias zodis: " << ilgiausias << endl;
    cout << "Trumpiausias zodis: " << trumpiausias << endl;

    int raidziu_suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        raidziu_suma += zodziai[i].length();
    }

    int raidziu_vidurkis = raidziu_suma / kiekis;

    cout << "Vidutiniskai raidziu zodyje: " << raidziu_vidurkis << endl;

    string rastas_zodis = "";

    for (int i = 0; i < kiekis; i++)
    {
        if (zodziai[i].length() == raidziu_vidurkis)
        {
            rastas_zodis = zodziai[i];
            break;
        }
    }

    cout << "Pirmas zodis, kuris sudarytas is raidziu koks yra vidurkis: "
        << rastas_zodis << endl;

    string ieskomas;
    int ieskomo_kiekis = 0;

    cout << "Kokio zodzio ieskoti: ";
    cin >> ieskomas;

    for (int i = 0; i < kiekis; i++)
    {
        if (zodziai[i] == ieskomas)
        {
            ieskomo_kiekis++;
        }
    }

    cout << "Ieskomas zodis rastas " << ieskomo_kiekis << "-is kartus" << endl;

    return 0;
}
```

Rezultatas 1:

```
Kiek zodziu suvesti: 5
1-asis zodis: Obelis
2-asis zodis: Medis
3-asis zodis: Kriause
4-asis zodis: Medis
5-asis zodis: Medis
Ilgiausias zodis: Kriause
Trumpiausias zodis: Medis
Vidutiniskai raidziu zodyje: 5
Pirmas zodis, kuris sudarytas is raidziu koks yra vidurkis: Medis
Kokio zodzio ieskoti: Medis
Ieskomas zodis rastas 3-is kartus
```

Rezultatas 2:

```
Kiek zodziu suvesti: 6
1-asis zodis: medis
2-asis zodis: berzelis
3-asis zodis: liepa
4-asis zodis: kriause
5-asis zodis: medis
6-asis zodis: aa
Ilgiausias zodis: berzelis
Trumpiausias zodis: aa
Vidutiniskai raidziu zodyje: 5
Pirmas zodis, kuris sudarytas is raidziu koks yra vidurkis: medis
Kokio zodzio ieskoti: medis
Ieskomas zodis rastas 2-is kartus
```
