---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo paieškos užduotis nr. 2

## Užduoties sąlyga

- Turite informaciją apie kepyklos iškeptus duonos kepalus kiekvieną dieną (kepalų kiekis per dieną).
- Raskite kiek daugiausiai kepalų per dieną yra iškepus kepykla, bei kuri (kelinta) diena tai buvo?
- Raskite kiek mažiausiai kepalų per dieną yra iškepus kepykla, bei kuri (kelinta) diena tai buvo?
- Koks kepalų skirtumas tarp mažiausiai ir daugiausiai iškeptų duonos kepalų?
- Raskite kada pirmą kartą kepykla iškepė daugiau nei 10 duonos kepalų per dieną.
- Išveskite pradinius duomenis ir visus rastus atsakymus.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int kepalai[] = { 20, 30, 25, 24, 32, 27 };
    int kiekis = 6;

    cout << "Kepalu per diena: ";

    for (int i = 0; i < kiekis; i++)
    {
        cout << kepalai[i] << " ";
    }

    cout << endl;

    int daugiausiai = kepalai[0];
    int daugiausiai_indeksas = 0;

    int maziausiai = kepalai[0];
    int maziausiai_indeksas = 0;

    for (int i = 0; i < kiekis; i++)
    {
        if (kepalai[i] > daugiausiai)
        {
            daugiausiai = kepalai[i];
            daugiausiai_indeksas = i;
        }

        if (kepalai[i] < maziausiai)
        {
            maziausiai = kepalai[i];
            maziausiai_indeksas = i;
        }
    }

    cout << "Daugiausiai kepalu buvo " << daugiausiai_indeksas + 1
        << "-aja diena, kai buvo iskepta " << daugiausiai << endl;

    cout << "Maziausiai kepalu buvo " << maziausiai_indeksas + 1
        << "-aja diena, kai buvo iskepta " << maziausiai << endl;

    cout << "Skirtumas tarp daugiausiai ir maziausiai: "
        << daugiausiai - maziausiai << endl;

    int pirma_karta_daugiau;

    for (int i = 0; i < kiekis; i++)
    {
        if (kepalai[i] > 10)
        {
            pirma_karta_daugiau = i;
            break;
        }
    }

    cout << "Pirma karta iskepa daugiau nei 10 kepalu per diena "
        << pirma_karta_daugiau + 1 << "-aja diena" << endl;

    return 0;
}
```

Rezultatai:

```
Kepalu per diena: 20 30 25 24 32 27
Daugiausiai kepalu buvo 5-aja diena, kai buvo iskepta 32
Maziausiai kepalu buvo 1-aja diena, kai buvo iskepta 20
Skirtumas tarp daugiausiai ir maziausiai: 12
Pirma karta iskepa daugiau nei 10 kepalu per diena 1-aja diena
```
