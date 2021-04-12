---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 2

## Užduoties sąlyga

- Susikurkite vardų masyvą, kuris jau būtų užpildytas vardais.
- Išveskite vardus sąrašo pavidalu, išvedant kelintas tai vardas, kad tai vardas ir išvedant patį vardą. Pavyzdžiui:

```
- 1-as vardas: Tomas.
- 2-as vardas: Greta.
- ...
```

- Papildomai: leiskite vartotojui pakeisti bet kurį vardą, įvedant vardo numerį, o po pakeitimo visas sąrašas turi atsivaizduoti dar kartą.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    string vardai[] = { "Jonas", "Petras", "Inga",
                        "Gintare", "Povilas", "Jolita" };
    int kiek = 6;

    for (int i = 0; i < kiek; i++)
    {
        cout << "- " << i + 1 << "-as vardas: " << vardai[i] << ".\n";
    }

    cout << "\nKuri varda norite pakeisti? ";
    int kelintas;
    cin >> kelintas;

    cout << "Iveskite nauja varda: ";
    cin >> vardai[kelintas - 1];
    cout << endl;

    for (int i = 0; i < kiek; i++)
    {
        cout << "- " << i + 1 << "-as vardas: " << vardai[i] << ".\n";
    }

    return 0;
}
```

Rezultatai:

```
- 1-as vardas: Jonas.
- 2-as vardas: Petras.
- 3-as vardas: Inga.
- 4-as vardas: Gintare.
- 5-as vardas: Povilas.
- 6-as vardas: Jolita.

Kuri varda norite pakeisti? 3
Iveskite nauja varda: Igneta

- 1-as vardas: Jonas.
- 2-as vardas: Petras.
- 3-as vardas: Igneta.
- 4-as vardas: Gintare.
- 5-as vardas: Povilas.
- 6-as vardas: Jolita.
```
