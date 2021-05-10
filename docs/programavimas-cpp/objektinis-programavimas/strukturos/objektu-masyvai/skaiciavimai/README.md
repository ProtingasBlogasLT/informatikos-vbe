# Struktūros: objektų masyvai (skaičiavimai)

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct zmogus
{
    string vardas;
    string pavarde;
    int amzius;
    double ugis;

    zmogus(string vardas, string pavarde, int amzius, double ugis)
    {
        this->vardas = vardas;
        this->pavarde = pavarde;
        this->amzius = amzius;
        this->ugis = ugis;
    }

    void isvedimas(string komentaras)
    {
        cout << komentaras << endl;
        cout << vardas << " " << pavarde
            << " (" << amzius << " m.) yra "
            << ugis << " m. ugio.\n\n";
    }
};

void isvedimas(string komentaras, zmogus zmones[], int kiekis)
{
    cout << komentaras << endl;
    cout << "-----------------------------------------\n";
    cout << "Vardas, pavarde        Amzius     Ugis, m\n";
    cout << "-----------------------------------------\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(22) << left << zmones[i].vardas << " "
            << setw(10) << zmones[i].amzius << " "
            << zmones[i].ugis << endl;
    }

    cout << "-----------------------------------------\n\n";
}

zmogus vyriausias_zmogus(zmogus zmones[], int kiek)
{
    zmogus vyriausias = zmones[0];

    for (int i = 0; i < kiek; i++)
    {
        if (zmones[i].amzius > vyriausias.amzius)
        {
            vyriausias = zmones[i];
        }
    }

    return vyriausias;
}

zmogus zemiausias_zmogus(zmogus zmones[], int kiek)
{
    zmogus zemiausias = zmones[0];

    for (int i = 0; i < kiek; i++)
    {
        if (zmones[i].ugis < zemiausias.ugis)
        {
            zemiausias = zmones[i];
        }
    }

    return zemiausias;
}

double ugiu_suma(zmogus zmones[], int kiek)
{
    double suma = 0;

    for (int i = 0; i < kiek; i++)
    {
        suma += zmones[i].ugis;
    }

    return suma;
}

double ugiu_vidurkis(zmogus zmones[], int kiekis)
{
    return ugiu_suma(zmones, kiekis) / kiekis;
}

int main()
{
    zmogus zmones[] = {
        zmogus("Tomas", "Tomauskas", 23, 1.8),
        zmogus("Giedrius", "Giedriauskas", 25, 1.75),
        zmogus("Inga", "Ingauskiene", 24, 1.67),
        zmogus("Paulina", "Povilaityte", 20, 1.7),
        zmogus("Ignas", "Ignauskas", 19, 1.9)
    };

    int kiekis = 5;

    isvedimas("Pradiniai duomenys", zmones, kiekis);

    zmogus vyriausias = vyriausias_zmogus(zmones, kiekis);
    vyriausias.isvedimas("Vyriausias(-ia) zmogus");

    zemiausias_zmogus(zmones, kiekis).isvedimas("Zemiausias(-ia) zmogus");

    cout << "Ugiu suma: " << ugiu_suma(zmones, kiekis) << " m.\n\n";

    cout << "Ugiu vidurkis: " << ugiu_vidurkis(zmones, kiekis) << " m.\n\n";

    return 0;
}
```

Rezultatai:

```
Pradiniai duomenys
-----------------------------------------
Vardas, pavarde        Amzius     Ugis, m
-----------------------------------------
Tomas                  23         1.8
Giedrius               25         1.75
Inga                   24         1.67
Paulina                20         1.7
Ignas                  19         1.9
-----------------------------------------

Vyriausias(-ia) zmogus
Giedrius Giedriauskas (25 m.) yra 1.75 m. ugio.

Zemiausias(-ia) zmogus
Inga Ingauskiene (24 m.) yra 1.67 m. ugio.

Ugiu suma: 8.82 m.

Ugiu vidurkis: 1.764 m.
```

### Pavyzdys 2

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 3

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 4

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 5

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 6

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 7

Kodas:

```cpp

```

Rezultatai:

```

```

## Užduotys

Informacija ruošiama.
