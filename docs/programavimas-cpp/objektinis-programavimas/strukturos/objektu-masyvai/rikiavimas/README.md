# Struktūros: objektų masyvai (rikiavimas)

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Rikiavimas pagal vieną savybę.

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

void rikiavimas(zmogus zmones[], int kiekis)
{
    bool rikiuoti = true;

    while (rikiuoti)
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            if (zmones[i].amzius > zmones[i + 1].amzius)
            {
                swap(zmones[i], zmones[i + 1]);
                rikiuoti = true;
            }
        }
    }
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
    rikiavimas(zmones, kiekis);
    isvedimas("Surikiuoti pagal amziu duomenys", zmones, kiekis);

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

Surikiuoti pagal amziu duomenys
-----------------------------------------
Vardas, pavarde        Amzius     Ugis, m
-----------------------------------------
Ignas                  19         1.9
Paulina                20         1.7
Tomas                  23         1.8
Inga                   24         1.67
Giedrius               25         1.75
-----------------------------------------
```

### Pavyzdys 2

Rikiavimas pagal dvi savybes (kai pirmas sutampa, tada pagal antrą).

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

void rikiavimas(zmogus zmones[], int kiekis)
{
    bool rikiuoti = true;

    while (rikiuoti)
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            if (zmones[i].amzius > zmones[i + 1].amzius
                || (zmones[i].amzius == zmones[i + 1].amzius &&
                    zmones[i].vardas > zmones[i + 1].vardas))
            {
                swap(zmones[i], zmones[i + 1]);
                rikiuoti = true;
            }
        }
    }
}

int main()
{
    zmogus zmones[] = {
        zmogus("Tomas", "Tomauskas", 23, 1.8),
        zmogus("Giedrius", "Giedriauskas", 25, 1.75),
        zmogus("Inga", "Ingauskiene", 25, 1.67),
        zmogus("Paulina", "Povilaityte", 20, 1.7),
        zmogus("Adomas", "Adomaitis", 25, 1.9)
    };

    int kiekis = 5;

    isvedimas("Pradiniai duomenys", zmones, kiekis);
    rikiavimas(zmones, kiekis);
    isvedimas("Surikiuoti pagal amziu ir varda duomenys", zmones, kiekis);

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
Inga                   25         1.67
Paulina                20         1.7
Adomas                 25         1.9
-----------------------------------------

Surikiuoti pagal amziu ir varda duomenys
-----------------------------------------
Vardas, pavarde        Amzius     Ugis, m
-----------------------------------------
Paulina                20         1.7
Tomas                  23         1.8
Adomas                 25         1.9
Giedrius               25         1.75
Inga                   25         1.67
-----------------------------------------
```

## Užduotys

Informacija ruošiama.
