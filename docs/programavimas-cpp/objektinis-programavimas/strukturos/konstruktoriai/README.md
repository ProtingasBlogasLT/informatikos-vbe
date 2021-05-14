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

### Užduotis 1

Papildykite žemiau nurodytą struktūrą su konstruktoriumi, kuris leistų į objektą sukelti visus reikiamus duomenis:

```cpp
struct autobusas
{
    string modelis;
    int vietu_skaicius;
    int didziausias_greitis;
    double darbinis_turis;

    void isvedimas()
    {
        cout << "--------------------\n";
        cout << "Autobuso duomenys:\n"
            << "Modelis: " << modelis << endl
            << "Vietu skaicius: " << vietu_skaicius << endl
            << "Didziausias greitis: " << didziausias_greitis << " km/h\n"
            << "Darbinis turis: " << darbinis_turis << " l\n";
        cout << "--------------------\n\n";
    }
};
```

Susikurkite kelis objektus, kurie panaudotų aprašytą konstruktorių.

Išveskite šių sukurtų objektų informaciją, tam galite panaudoti jau aprašytą išvedimo funkciją.

### Užduotis 2

Papildykite žemiau nurodytą struktūrą šiais konstruktoriais:

- Tuščias konstruktorius, kuris negauna jokių duomenų, tačiau nustato numatytąsias reikšmes kintamiesiems.
- Konstruktorių, kuris gauna tik pavadinimą ir kainą.
- Konstruktorių, kuris gauna visus struktūroje esančius duomenis (pavadinimas kaina, kiekiai sandėliuose, sandėlių kiekis).

```cpp
struct preke
{
    string pavadinimas;
    double kaina;
    int kiekiai_sandeliuose[100] = { 0 };
    int sandeliu_kiekis;

    void isvedimas()
    {
        cout << "----------------------------\n";

        cout << "PREKES DUOMENYS\n";

        cout << "Preke " << pavadinimas << " kainuoja " << kaina << " eur./vnt.\n";
        cout << "Prekes likuciai sandeliuose: ";

        for (int i = 0; i < sandeliu_kiekis; i++)
        {
            cout << kiekiai_sandeliuose[i] << " vnt, ";
        }

        cout << "\n----------------------------\n";
    }
};
```

Susikurkite kelis objektus, su kuriais panaudotumėte visus aprašytus konstruktorius.

Išveskite šių sukurtų objektų informaciją, tam galite panaudoti jau aprašytą išvedimo funkciją.

### Užduotis 3

Papildykite žemiau nurodytą struktūrą bent 3 savo nuožiūra aprašytais konstruktoriais.

```cpp
struct knyga
{
    string pavadinimas;
    string autorius;
    int puslapiu_sk;
    double kaina;
    int metai;

    void isvedimas()
    {
        cout << "KNYGOS INFORMACIJA\n";
        cout << "Knyga: " << pavadinimas << endl;
        cout << "Autorius: " << autorius << endl;
        cout << "Puslapiu skaicius: " << puslapiu_sk << endl;
        cout << "Kaina: " << kaina << " eur." << endl;
        cout << "Metai: " << metai << "\n\n";
    }
};
```

Susikurkite kelis objektus, su kuriais panaudotumėte visus aprašytus konstruktorius.

Išveskite šių sukurtų objektų informaciją, tam galite panaudoti jau aprašytą išvedimo funkciją.
