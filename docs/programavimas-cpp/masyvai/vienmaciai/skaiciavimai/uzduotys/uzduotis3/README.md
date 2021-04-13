---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo skaičiavimų užduotis nr. 3

## Užduoties sąlyga

- Vartotojui leiskite suvesti dviejų studentų pažymius (į du skirtingus masyvus).
- Paskaičiuokite kiekvieno studento pažymių vidurkius.
- Išveskite kiekvieno studento pažymius ir gautus vidurkius.
- Nurodykite, kurio studento vidurkis yra didesnis, bei per kokią dalį vidurkis skiriasi.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int pazymiai1[10], pazymiai2[10];
    int pazymiai1_kiekis, pazymiai2_kiekis;

    cout << "Kiek pazymiu norite suvesti apie pirma studenta? ";
    cin >> pazymiai1_kiekis;

    for (int i = 0; i < pazymiai1_kiekis; i++)
    {
        cout << i + 1 << "-asis pazymys: ";
        cin >> pazymiai1[i];
    }

    cout << "Kiek pazymiu norite suvesti apie antra studenta? ";
    cin >> pazymiai2_kiekis;

    for (int i = 0; i < pazymiai2_kiekis; i++)
    {
        cout << i + 1 << "-asis pazymys: ";
        cin >> pazymiai2[i];
    }

    int pirmo_suma = 0, antro_suma = 0;

    for (int i = 0; i < pazymiai1_kiekis; i++)
    {
        pirmo_suma += pazymiai1[i];
    }

    for (int i = 0; i < pazymiai2_kiekis; i++)
    {
        antro_suma += pazymiai2[i];
    }

    double pirmo_vidurkis = (double)pirmo_suma / pazymiai1_kiekis;
    double antro_vidurkis = (double)antro_suma / pazymiai2_kiekis;

    cout << "\nPirmas studentas:\n";
    cout << "Pazymiai: ";

    for (int i = 0; i < pazymiai1_kiekis; i++)
    {
        cout << pazymiai1[i] << " ";
    }

    cout << "\nVidurkis: " << pirmo_vidurkis;

    cout << "\n\nAntras studentas:\n";
    cout << "Pazymiai: ";

    for (int i = 0; i < pazymiai2_kiekis; i++)
    {
        cout << pazymiai2[i] << " ";
    }

    cout << "\nVidurkis: " << antro_vidurkis << "\n\n";

    if (pirmo_vidurkis > antro_vidurkis)
    {
        cout << "Pirmo studento vidurkis didesnis. Skirtumas: "
            << pirmo_vidurkis - antro_vidurkis << endl;
    }
    else if (pirmo_vidurkis < antro_vidurkis)
    {
        cout << "Antro studento vidurkis didesnis. Skirtumas: "
            << antro_vidurkis - pirmo_vidurkis << endl;
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek pazymiu norite suvesti apie pirma studenta? 3
1-asis pazymys: 7
2-asis pazymys: 8
3-asis pazymys: 9
Kiek pazymiu norite suvesti apie antra studenta? 5
1-asis pazymys: 4
2-asis pazymys: 7
3-asis pazymys: 4
4-asis pazymys: 5
5-asis pazymys: 6

Pirmas studentas:
Pazymiai: 7 8 9
Vidurkis: 8

Antras studentas:
Pazymiai: 4 7 4 5 6
Vidurkis: 5.2

Pirmo studento vidurkis didesnis. Skirtumas: 2.8
```

Rezultatas 2:

```
Kiek pazymiu norite suvesti apie pirma studenta? 4
1-asis pazymys: 5
2-asis pazymys: 7
3-asis pazymys: 4
4-asis pazymys: 5
Kiek pazymiu norite suvesti apie antra studenta? 2
1-asis pazymys: 8
2-asis pazymys: 9

Pirmas studentas:
Pazymiai: 5 7 4 5
Vidurkis: 5.25

Antras studentas:
Pazymiai: 8 9
Vidurkis: 8.5

Antro studento vidurkis didesnis. Skirtumas: 3.25
```
