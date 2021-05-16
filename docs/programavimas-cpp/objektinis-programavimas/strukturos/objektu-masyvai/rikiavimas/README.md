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

### Užduotis 1

Žemiau nurodytoje programoje aprašykite rikiavimo funkciją, kuri duomenis surikiuotų pagal pavardę didėjimo tvarka.

Išveskite pradinius ir surikiuotus duomenis.

Papildomai: taip pat, pamėginkite išrikiuoti kiekvieno studento pažymius didėjimo tvarka.

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct studentas
{
    string vardas;
    string pavarde;
    int pazymiai[20];
    int paz_kiekis;

    studentas(string vardas, string pavarde, int pazymiai[], int paz_kiekis)
    {
        this->vardas = vardas;
        this->pavarde = pavarde;
        for (int i = 0; i < paz_kiekis; i++)
        {
            this->pazymiai[i] = pazymiai[i];
        }
        this->paz_kiekis = paz_kiekis;
    }
};

void isvedimas(string komentaras, studentas studentai[], int kiekis)
{
    cout << komentaras << endl;

    cout << "---------------------------------------------------\n";
    cout << "Vardas          Pavarde         Pazymiai\n";
    cout << "---------------------------------------------------\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(15) << left << studentai[i].vardas << " "
            << setw(15) << studentai[i].pavarde << " ";
        for (int j = 0; j < studentai[i].paz_kiekis; j++)
        {
            cout << studentai[i].pazymiai[j] << " ";
        }
        cout << endl;
    }

    cout << "---------------------------------------------------\n\n";
}

int main()
{
    studentas studentai[] = {
        studentas("Petras", "Petraitis", new int [] {7, 8, 6, 5, 4}, 5),
        studentas("Ignas", "Ignauskas", new int [] {8, 8, 9, 7, 5}, 5),
        studentas("Gintare", "Gintaryte", new int [] {9, 8, 9}, 3),
        studentas("Indre", "Indrute", new int [] {8, 7, 4, 8, 9, 6, 8}, 7),
        studentas("Jolanta", "Jolantyte", new int [] {7, 8, 7, 8, 9}, 5),
        studentas("Paulius", "Paulinskas", new int [] {9, 9, 8, 7, 9}, 5)
    };

    int kiekis = 6;

    isvedimas("PRADINIAI DUOMENYS", studentai, kiekis);

    return 0;
}
```

### Užduotis 2

Žemiau nurodytą programą papildykite taip, kad knygas būtų galima rikiuoti tokiais būdais:

- Pagal puslapių skaičių mažėjimo tvarka.
- Pagal kainą didėjimo tvarka.

Abiejais atvejais, kai skaičius (puslapiai ar kaina) sutampa - antras rikiavimo kriterijus yra pagal pavadinimą didėjimo tvarka.

Išveskite pradinius ir surikiuotus duomenis.

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct knyga
{
    string pavadinimas;
    string autorius;
    int puslapiu_sk;
    double kaina;
    int metai;

    knyga(string pavadinimas, string autorius, int puslapiai, double kaina, int metai)
    {
        this->pavadinimas = pavadinimas;
        this->autorius = autorius;
        this->puslapiu_sk = puslapiai;
        this->kaina = kaina;
        this->metai = metai;
    }
};

void isvedimas(string komentaras, knyga knygos[], int kiekis)
{
    cout << komentaras << endl;

    cout << "------------------------------------------------------------------------------------------------\n";
    cout << "Knygos pavadinimas                            Autorius           Psl. sk.   Kaina, eur  Metai\n";
    cout << "------------------------------------------------------------------------------------------------\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(45) << left << knygos[i].pavadinimas << " "
            << setw(18) << knygos[i].autorius << " "
            << setw(10) << knygos[i].puslapiu_sk << " "
            << setw(11) << setprecision(2) << fixed << knygos[i].kaina << " "
            << knygos[i].metai << endl;
    }

    cout << "------------------------------------------------------------------------------------------------\n\n";
}

int main()
{
    knyga knygos[] = {
        knyga("Haris Poteris ir Azkabano kalinys", "Rowling", 250, 19.99, 2005),
        knyga("7 efektyviai veikianciu zmoniu iprociai", "P. Petraitis", 200, 15.49, 2018),
        knyga("Lietuvos istorija", "Istorikas Jonas", 320, 19.99, 2010),
        knyga("Knyga apie automobilius", "Meistras M", 145, 10, 2008),
        knyga("Programavimo ABC", "P. Progr", 149, 15.99, 2016),
        knyga("Bibliografija apie A", "Albertas B.", 246, 18.45, 2017)
    };

    int kiekis = 6;

    isvedimas("PRADINIAI DUOMENYS", knygos, kiekis);

    return 0;
}
```

### Užduotis 3 (laisva forma)

Pasirinkite vieną iš anksčiau parašytų programų, kurioje būtų objektų masyvai ir išrikiuokite duomenis norima tvarka.

Papildomai: naudokite du kriterijus rikiavimui.
