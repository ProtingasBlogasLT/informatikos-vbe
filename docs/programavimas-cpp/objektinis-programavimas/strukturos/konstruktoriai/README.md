# Struktūros: konstruktoriai

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

struct automobilis
{
    string marke;
    string modelis;
    int metai;
    int rida;
    double darbinis_turis;

    automobilis(string marke, string modelis, int metai,
        int rida, double darbinis_turis)
    {
        this->marke = marke;
        this->modelis = modelis;
        this->metai = metai;
        this->rida = rida;
        this->darbinis_turis = darbinis_turis;
    }

    void isvedimas()
    {
        cout << "Automobilio " << marke << " " << modelis << " duomenys\n";
        cout << "Metai: " << metai << endl;
        cout << "Rida: " << rida << endl;
        cout << "Darbinis turis, l: " << darbinis_turis << "\n\n";
    }
};

int main()
{
    automobilis pirmas = automobilis("Toyota", "Prius", 2015, 201457, 1.2);
    automobilis antras = automobilis("Tesla", "S", 2020, 1254, 1.6);

    pirmas.isvedimas();
    antras.isvedimas();

    return 0;
}
```

Rezultatai:

```
Automobilio Toyota Prius duomenys
Metai: 2015
Rida: 201457
Darbinis turis, l: 1.2

Automobilio Tesla S duomenys
Metai: 2020
Rida: 1254
Darbinis turis, l: 1.6
```

### Pavyzdys 2

Nuo praeito pavyzdžio skiriasi tik per konstruktorių.

Kodas:

```cpp
#include <iostream>
using namespace std;

struct automobilis
{
    string marke;
    string modelis;
    int metai;
    int rida;
    double darbinis_turis;

    automobilis(string mark, string mod, int met, int rid, double darb_turis)
    {
        marke = mark;
        modelis = mod;
        metai = met;
        rida = rid;
        darbinis_turis = darb_turis;
    }

    void isvedimas()
    {
        cout << "Automobilio " << marke << " " << modelis << " duomenys\n";
        cout << "Metai: " << metai << endl;
        cout << "Rida: " << rida << endl;
        cout << "Darbinis turis, l: " << darbinis_turis << "\n\n";
    }
};

int main()
{
    automobilis pirmas = automobilis("Toyota", "Prius", 2015, 201457, 1.2);
    automobilis antras = automobilis("Tesla", "S", 2020, 1254, 1.6);

    pirmas.isvedimas();
    antras.isvedimas();

    return 0;
}
```

Rezultatai:

```
Automobilio Toyota Prius duomenys
Metai: 2015
Rida: 201457
Darbinis turis, l: 1.2

Automobilio Tesla S duomenys
Metai: 2020
Rida: 1254
Darbinis turis, l: 1.6

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

struct studentas
{
    string vardas;
    string pavarde;
    int amzius;
    int pazymiai[100] = { 0 };
    int paz_kiekis;

    studentas()
    {
        vardas = "";
        pavarde = "";
        amzius = 0;
        paz_kiekis = 0;
    }

    studentas(string vardas, string pavarde, int amzius)
    {
        this->vardas = vardas;
        this->pavarde = pavarde;
        this->amzius = amzius;
        this->paz_kiekis = 0;
    }

    studentas(string vardas, string pavarde, int amzius,
        int pazymiai[], int paz_kiekis)
    {
        this->vardas = vardas;
        this->pavarde = pavarde;
        this->amzius = amzius;
        for (int i = 0; i < paz_kiekis; i++)
        {
            this->pazymiai[i] = pazymiai[i];
        }
        this->paz_kiekis = paz_kiekis;
    }

    void isvedimas()
    {
        cout << "--------------------------------" << endl;
        cout << "STUDENTO DUOMENYS" << endl;
        cout << "Studentas(-e): " << vardas << " " << pavarde << endl;
        cout << "Amzius: " << amzius << endl;
        cout << "Pazymiai: ";
        for (int i = 0; i < paz_kiekis; i++)
        {
            cout << pazymiai[i] << " ";
        }
        cout << "\n--------------------------------\n\n";
    }
};

int main()
{
    studentas pirmas = studentas();
    pirmas.isvedimas();

    studentas antras = studentas("Tomas", "Tomauskas", 19);
    antras.isvedimas();

    studentas trecias = studentas("Petras", "Petrauskas", 20,
        new int[] {7, 8, 6, 5}, 4);
    trecias.isvedimas();

    return 0;
}
```

Rezultatai:

```
--------------------------------
STUDENTO DUOMENYS
Studentas(-e):
Amzius: 0
Pazymiai:
--------------------------------

--------------------------------
STUDENTO DUOMENYS
Studentas(-e): Tomas Tomauskas
Amzius: 19
Pazymiai:
--------------------------------

--------------------------------
STUDENTO DUOMENYS
Studentas(-e): Petras Petrauskas
Amzius: 20
Pazymiai: 7 8 6 5
--------------------------------

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

struct zmogus
{
    string vardas;
    string pavarde;
    double etatas;

    zmogus()
    {
        vardas = "";
        pavarde = "";
        etatas = 0;
    }

    zmogus(string vard, string pav, double etat)
    {
        vardas = vard;
        pavarde = pav;
        etatas = etat;
    }

    void isvedimas()
    {
        cout << vardas << " " << pavarde << ", dirba "
            << etatas << " etatu" << endl;
    }
};

struct projektas
{
    string pavadinimas;
    zmogus atsakingas_zmogus;
    int biudzetas;

    projektas(string pavadinimas, zmogus atsakingas, int biudzetas)
    {
        this->pavadinimas = pavadinimas;
        this->atsakingas_zmogus = atsakingas;
        this->biudzetas = biudzetas;
    }

    void isvedimas()
    {
        cout << "Projektas " << pavadinimas << ", kurio biudzetas "
            << biudzetas << " eur., turi atsakinga asmeni:\n";
        atsakingas_zmogus.isvedimas();
        cout << endl;
    }
};

int main()
{
    projektas laivas = projektas(
        "Laivas laivelis",
        zmogus("Ignas", "Ignavicius", 1),
        20000);
    laivas.isvedimas();

    return 0;
}
```

Rezultatai:

```
Projektas Laivas laivelis, kurio biudzetas 20000 eur., turi atsakinga asmeni:
Ignas Ignavicius, dirba 1 etatu
```

## Užduotys

Informacija ruošiama.
