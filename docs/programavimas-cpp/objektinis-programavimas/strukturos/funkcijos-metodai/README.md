# Struktūros: metodai (funkcijos)

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

struct preke
{
    string pavadinimas;
    double kaina;
    double savikaina;
    int kiekis;

    void ivedimas(string pavadinimas, double kaina, double savikaina, int kiekis)
    {
        this->pavadinimas = pavadinimas;
        this->kaina = kaina;
        this->savikaina = savikaina;
        this->kiekis = kiekis;
    }

    void isvedimas()
    {
        cout << "PREKES DUOMENYS\n";
        cout << "Pavadinimas: " << pavadinimas << endl
            << "Kaina / savikaina, eur: " << kaina << " / " << savikaina << endl
            << "Kiekis, vnt.: " << kiekis << endl
            << "Galimas pelnas, eur: " << galimas_pelnas() << "\n\n";
    }

    double galimas_pelnas()
    {
        return kiekis * (kaina - savikaina);
    }
};

int main()
{
    preke p1;
    p1.ivedimas("Piestukas", 0.99, 0.5, 100);
    p1.isvedimas();

    preke p2;
    p2.ivedimas("Sasiuvinys", 1.48, 0.78, 245);
    p2.isvedimas();

    cout << "Galimas pelnas, iskviestas atskirai: ";
    cout << p1.galimas_pelnas() << endl;

    return 0;
}
```

Rezultatai:

```
PREKES DUOMENYS
Pavadinimas: Piestukas
Kaina / savikaina, eur: 0.99 / 0.5
Kiekis, vnt.: 100
Galimas pelnas, eur: 49

PREKES DUOMENYS
Pavadinimas: Sasiuvinys
Kaina / savikaina, eur: 1.48 / 0.78
Kiekis, vnt.: 245
Galimas pelnas, eur: 171.5

Galimas pelnas, iskviestas atskirai: 49
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

struct studentas
{
    string vardas;
    int pazymiai[100];
    int pazymiu_kiekis;

    void isvedimas()
    {
        cout << "Studento " << vardas << " pazymiai: ";
        
        for (int i = 0; i < pazymiu_kiekis; i++)
        {
            cout << pazymiai[i] << " ";
        }
        
        cout << endl;
    }

    int suma()
    {
        int sum = 0;

        for (int i = 0; i < pazymiu_kiekis; i++)
        {
            sum += pazymiai[i];
        }

        return sum;
    }

    double vidurkis()
    {
        return (double)suma() / pazymiu_kiekis;
    }

    bool ar_visi_teigiami()
    {
        for (int i = 0; i < pazymiu_kiekis; i++)
        {
            if (pazymiai[i] < 4)
            {
                return false;
            }
        }

        return true;
    }
};

void sugeneruoti_studenta(studentas & stud)
{
    stud.vardas = "Giedrius";

    for (int i = 0; i < 10; i++)
    {
        stud.pazymiai[i] = rand() % 10 + 1;
    }

    stud.pazymiu_kiekis = 10;
}

int main()
{
    srand(time(NULL));

    studentas stud;
    sugeneruoti_studenta(stud);
    stud.isvedimas();

    cout << "Suma: " << stud.suma() << endl;
    cout << "Vidurkis: " << stud.vidurkis() << endl;
    cout << "Ar visi teigiami: " << stud.ar_visi_teigiami() << endl;

    return 0;
}
```

Rezultatai 1:

```
Studento Giedrius pazymiai: 4 2 9 2 1 10 5 1 10 10
Suma: 54
Vidurkis: 5.4
Ar visi teigiami: 0
```

Rezultatai 2:

```
Studento Giedrius pazymiai: 9 9 5 7 7 7 8 6 9 8
Suma: 75
Vidurkis: 7.5
Ar visi teigiami: 1
```

<!-- ### Pavyzdys 3

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

### Pavyzdys 8

Kodas:

```cpp

```

Rezultatai:

```

``` -->

## Užduotys

Informacija ruošiama.
