---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 7

## Užduoties sąlyga

- Susikurkite vardų ir vardų ilgių masyvus.
- Leiskite vartotojui suvesti norimą kiekį vardų.
- Paskaičiuokite vardų ilgius ir sudėkite atsakymus į vardų ilgių masyvą.
- Išveskite vardus ir jų ilgius sąrašo pavidalu. Pavyzdžiui:

```
- Vardo "Jonas" ilgis 5 simboliai.
- Vardo "Gintarė" ilgis 7 simboliai.
- ...
```

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string vardai[10];
    int vardu_ilgiai[10];
    int kiek;

    cout << "Kiek vardu norite suvesti? ";
    cin >> kiek;

    cout << "\nSuveskite vardus (atskirose eilutese):\n";

    for (int i = 0; i < kiek; i++)
    {
        cin >> vardai[i];
        vardu_ilgiai[i] = vardai[i].length();
    }

    cout << endl;

    for (int i = 0; i < kiek; i++)
    {
        cout << "- Vardo '" << vardai[i] << "' ilgis "
            << vardu_ilgiai[i] << " simboliai.\n";
    }

    return 0;
}
```

Rezultatai:

```
Kiek vardu norite suvesti? 4

Suveskite vardus (atskirose eilutese):
Jonas
Petras
Gintaras
Povilas

- Vardo 'Jonas' ilgis 5 simboliai.
- Vardo 'Petras' ilgis 6 simboliai.
- Vardo 'Gintaras' ilgis 8 simboliai.
- Vardo 'Povilas' ilgis 7 simboliai.

```
