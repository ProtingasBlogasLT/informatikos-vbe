---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 1

## Užduoties sąlyga

Sukurkite norimo dydžio skaičių masyvą, kuris iškart būtų užpildytas skaičiais.

Šiuos skaičius išveskite tris kartus:

- Pirmąjį kartą - išvedant visus skaičius toje pačioje eilutėje, atskiriant kableliu ir tarpu.
- Antrąjį kartą - išvedant visus skaičius atskirose eilutėse, prieš kiekvieną skaičių parašant kelintasis tai skaičius, pavyzdžiui, "1-asis skaičius yra ...", tada "2-asis skaičius yra...".
- Trečiąjį kartą - išvedant tik kas antrą skaičių iš masyvo, skaičius išvedant toje pačioje eilutėje, atskiriant tarpu.

Taip pat, atlikite šiuos veiksmus:

- Išveskite pirmąjį skaičių iš masyvo.
- Išveskite antrąjį skaičių iš masyvo.
- Išveskite paskutinį skaičių iš masyvo.
- Papildomai: išveskite bet kurį, atsitiktinai parinktą skaičių iš masyvo.

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main()
{
    int skaiciai[] = {4, 7, 8, 5, 2, 3, 5, 1};
    int kiek = 8;

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << ", ";
    }

    cout << "\n\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << i + 1 << "-asis skaicius yra: " << skaiciai[i] << endl;
    }

    cout << endl;

    for (int i = 0; i < kiek; i += 2)
    {
        cout << skaiciai[i] << " ";
    }

    cout << "\n\n";

    cout << "Pirmas skaicius: " << skaiciai[0] << endl;
    cout << "Antras skaicius: " << skaiciai[1] << endl;
    cout << "Paskutinis skaicius: " << skaiciai[kiek - 1] << endl;

    srand(time(NULL));
    int atsitiktinio_indeksas = rand() % kiek;
    cout << "Atsitiktinai parinktas skaicius: "
        << skaiciai[atsitiktinio_indeksas] << endl;

    return 0;
}
```

Rezultatai:

```
4, 7, 8, 5, 2, 3, 5, 1,

1-asis skaicius yra: 4
2-asis skaicius yra: 7
3-asis skaicius yra: 8
4-asis skaicius yra: 5
5-asis skaicius yra: 2
6-asis skaicius yra: 3
7-asis skaicius yra: 5
8-asis skaicius yra: 1

4 8 2 5

Pirmas skaicius: 4
Antras skaicius: 7
Paskutinis skaicius: 1
Atsitiktinai parinktas skaicius: 2
```
