# Struktūros: objektų masyvai (informacijas įvedimas ir gavimas / išvedimas)

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
    int amzius;
    double ugis;
};

int main()
{
    // duomenys

    zmogus zmones[10];
    int kiek;

    // ivedimas

    cout << "Kiek zmoniu duomenu norite suvesti? ";
    cin >> kiek;
    cout << endl;

    for (int i = 0; i < kiek; i++)
    {
        cout << i + 1 << "-asis zmogus" << endl;
        cout << "Vardas: ";
        cin >> zmones[i].vardas;
        cout << "Amzius: ";
        cin >> zmones[i].amzius;
        cout << "Ugis: ";
        cin >> zmones[i].ugis;
        cout << endl;
    }

    // isvedimas

    cout << "+-----------------+--------+---------+\n";
    cout << "| Vardas          | Amzius | Ugis, m |\n";
    cout << "+-----------------+--------+---------+\n";

    for (int i = 0; i < kiek; i++)
    {
        cout << "| " << setw(15) << left << zmones[i].vardas << " | "
            << setw(6) << left << zmones[i].amzius << " | "
            << setw(7) << left << zmones[i].ugis << " |\n";
    }

    cout << "+-----------------+--------+---------+\n";

    return 0;
}
```

Rezultatai:

```
Kiek zmoniu duomenu norite suvesti? 4

1-asis zmogus
Vardas: Indre
Amzius: 25
Ugis: 1.65

2-asis zmogus
Vardas: Paulius
Amzius: 24
Ugis: 1.78

3-asis zmogus
Vardas: Julija
Amzius: 30
Ugis: 1.72

4-asis zmogus
Vardas: Ignas
Amzius: 22
Ugis: 1.8

+-----------------+--------+---------+
| Vardas          | Amzius | Ugis, m |
+-----------------+--------+---------+
| Indre           | 25     | 1.65    |
| Paulius         | 24     | 1.78    |
| Julija          | 30     | 1.72    |
| Ignas           | 22     | 1.8     |
+-----------------+--------+---------+
```

### Pavyzdys 2

Praeito pavyzdžio kodas išskaidytas į funkcijas.

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct zmogus
{
    string vardas;
    int amzius;
    double ugis;
};

void ivedimas(zmogus zmones[], int & kiekis)
{
    cout << "Kiek zmoniu duomenu norite suvesti? ";
    cin >> kiekis;
    cout << endl;

    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis zmogus" << endl;
        cout << "Vardas: ";
        cin >> zmones[i].vardas;
        cout << "Amzius: ";
        cin >> zmones[i].amzius;
        cout << "Ugis: ";
        cin >> zmones[i].ugis;
        cout << endl;
    }
}

void isvedimas(zmogus zmones[], int kiekis)
{
    cout << "+-----------------+--------+---------+\n";
    cout << "| Vardas          | Amzius | Ugis, m |\n";
    cout << "+-----------------+--------+---------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << "| " << setw(15) << left << zmones[i].vardas << " | "
            << setw(6) << left << zmones[i].amzius << " | "
            << setw(7) << left << zmones[i].ugis << " |\n";
    }

    cout << "+-----------------+--------+---------+\n";
}

int main()
{
    zmogus zmones[10];
    int kiek = 0;

    ivedimas(zmones, kiek);
    isvedimas(zmones, kiek);

    return 0;
}
```

Rezultatai:

```
Kiek zmoniu duomenu norite suvesti? 3

1-asis zmogus
Vardas: Gintaras
Amzius: 22
Ugis: 1.8

2-asis zmogus
Vardas: Paulina
Amzius: 21
Ugis: 1.75

3-asis zmogus
Vardas: Ignas
Amzius: 23
Ugis: 1.9

+-----------------+--------+---------+
| Vardas          | Amzius | Ugis, m |
+-----------------+--------+---------+
| Gintaras        | 22     | 1.8     |
| Paulina         | 21     | 1.75    |
| Ignas           | 23     | 1.9     |
+-----------------+--------+---------+
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct automobilis
{
    string marke;
    string modelis;
    int rida;
    int metai;
    double darbinis_turis;

    automobilis(string marke, string modelis, int rida,
        int metai, double darbinis_turis)
    {
        this->marke = marke;
        this->modelis = modelis;
        this->rida = rida;
        this->metai = metai;
        this->darbinis_turis = darbinis_turis;
    }
};

int main()
{
    automobilis automobiliai[] = {
        automobilis("Tesla", "S", 20145, 2017, 1.8),
        automobilis("Audi", "A4", 35488, 2019, 1.6),
        automobilis("BWM", "Emke", 64554, 2002, 2.2),
        automobilis("Opel", "Astra", 320719, 2008, 1.8)
    };

    int kiek = 4;

    cout << setw(15) << left << "Marke" << " "
        << setw(15) << "Modelis" << " "
        << setw(8) << "Metai" << " "
        << setw(8) << "Rida" << " "
        << "Darbinis turis, l" << endl;

    for (int i = 0; i < kiek; i++)
    {
        cout << setw(15) << left << automobiliai[i].marke << " "
            << setw(15) << automobiliai[i].modelis << " "
            << setw(8) << automobiliai[i].metai << " "
            << setw(8) << automobiliai[i].rida << " "
            << automobiliai[i].darbinis_turis << endl;
    }

    return 0;
}
```

Rezultatai:

```
Marke           Modelis         Metai    Rida     Darbinis turis, l
Tesla           S               2017     20145    1.8
Audi            A4              2019     35488    1.6
BWM             Emke            2002     64554    2.2
Opel            Astra           2008     320719   1.8
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct preke
{
    string pavadinimas;
    double kaina;
    int kiekis;

    preke()
    {
        pavadinimas = "";
        kaina = 0;
        kiekis = 0;
    }

    preke(string pavadinimas, double kaina, int kiekis)
    {
        this->pavadinimas = pavadinimas;
        this->kaina = kaina;
        this->kiekis = kiekis;
    }

    void isvesti()
    {
        cout << setw(20) << left << pavadinimas << " "
            << kaina << " eur.    "
            << kiekis << " vnt." << endl;
    }
};

struct parduotuve
{
    string pavadinimas;
    preke prekes[100];
    int prekiu_kiekis;

    parduotuve(string pavadinimas, preke prekes[], int prekiu_kiekis)
    {
        this->pavadinimas = pavadinimas;
        for (int i = 0; i < prekiu_kiekis; i++)
        {
            this->prekes[i] = prekes[i];
        }
        this->prekiu_kiekis = prekiu_kiekis;
    }

    void isvedimas()
    {
        cout << "Parduotuves " << pavadinimas << " prekes:" << endl;
        for (int i = 0; i < prekiu_kiekis; i++)
        {
            prekes[i].isvesti();
        }
    }
};

int main()
{
    parduotuve maxima(
        "Maxima",
        new preke[]{
            preke("Piestukas", 1.49, 158),
            preke("Flomasteriai", 1.49, 24),
            preke("Sasiuvinys", 1.99, 487),
            preke("Trintukas", 0.49, 24),
        },
        4);

    maxima.isvedimas();

    return 0;
}
```

Rezultatai:

```
Parduotuves Maxima prekes:
Piestukas            1.49 eur.    158 vnt.
Flomasteriai         1.49 eur.    24 vnt.
Sasiuvinys           1.99 eur.    487 vnt.
Trintukas            0.49 eur.    24 vnt.
```

### Pavyzdys 5

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <fstream>
using namespace std;

struct studentas
{
    string vardas;
    string pavarde;
    int amzius;
    int pazymiai[50];
    int paz_kiekis;
    bool ar_visi_teigiami;
};

void nuskaitymas(studentas studentai[], int & kiekis)
{
    ifstream failas("duomenys.txt");

    kiekis = 0;

    while (!failas.eof())
    {
        failas >> studentai[kiekis].vardas
            >> studentai[kiekis].pavarde
            >> studentai[kiekis].amzius;

        failas >> studentai[kiekis].paz_kiekis;
        studentai[kiekis].ar_visi_teigiami = true;

        for (int i = 0; i < studentai[kiekis].paz_kiekis; i++)
        {
            failas >> studentai[kiekis].pazymiai[i];

            if (studentai[kiekis].pazymiai[i] < 5)
            {
                studentai[kiekis].ar_visi_teigiami = false;
            }
        }

        kiekis++;
    }

    failas.close();
}

void isvedimas(studentas studentai[], int kiekis)
{
    ofstream rez("rezultatai.txt");

    for (int i = 0; i < kiekis; i++)
    {
        rez << i + 1 << "-asis studentas(-e)" << endl;
        rez << "Vardas ir pavarde: " << studentai[i].vardas
            << " " << studentai[i].pavarde << endl;
        rez << "Azmius: " << studentai[i].amzius << endl;
        rez << "Pazymiai: ";

        for (int j = 0; j < studentai[i].paz_kiekis; j++)
        {
            rez << studentai[i].pazymiai[j] << " ";
        }

        rez << endl;
        rez << "Ar visi pazymiai teigiami? "
            << (studentai[i].ar_visi_teigiami ? "taip" : "ne");
        rez << "\n\n";
    }

    rez.close();
}

int main()
{
    studentas studentai[20];
    int kiekis;

    nuskaitymas(studentai, kiekis);
    isvedimas(studentai, kiekis);

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas Tomauskas 20 3 8 7 9
Greta Gretuskyte 19 4 9 7 9 8
Povilas Povilauskas 21 3 8 7 8
Inga Ignauskyte 21 5 8 7 4 7 6
```
</code-block>

<code-block title="rezultatai.txt">
```
1-asis studentas(-e)
Vardas ir pavarde: Tomas Tomauskas
Azmius: 20
Pazymiai: 8 7 9 
Ar visi pazymiai teigiami? taip

2-asis studentas(-e)
Vardas ir pavarde: Greta Gretuskyte
Azmius: 19
Pazymiai: 9 7 9 8 
Ar visi pazymiai teigiami? taip

3-asis studentas(-e)
Vardas ir pavarde: Povilas Povilauskas
Azmius: 21
Pazymiai: 8 7 8 
Ar visi pazymiai teigiami? taip

4-asis studentas(-e)
Vardas ir pavarde: Inga Ignauskyte
Azmius: 21
Pazymiai: 8 7 4 7 6 
Ar visi pazymiai teigiami? ne


```
</code-block>
</code-group>

## Užduotys

### Užduotis 1

Sukurkite struktūrą knygos duomenims saugoti, kurioje būtų saugoma ši informacija:

- Pavadinimas.
- Autorius.
- Kaina.
- Puslapių skaičius.
- Žanras.

Šioje struktūroje sukurkite konstruktorių, kuris leistų į objektą sukelti norimus duomenis.

Susikurkite šios struktūros objektų masyvą ir jį užpildykite duomenimis, pasinaudojant struktūros konstruktoriumi.

### Užduotis 2

Sukurkite struktūrą darbuotojo duomenims saugoti, kurioje būtų saugoma ši informacija:

- Vardas.
- Pavardė.
- Atlyginimas.
- Etatas.
- Pareigos.

Sukurkite dvi funkcijas ne struktūroje:

- Įvedimo funkcija, kurios pagalba vartotojas galėtų suvesti norimą kiekį darbuotojų ir informacijos apie juos.
- Išvedimo funkcija, kuri išvestų visų turimų darbuotojų duomenis lentelės pavidalu.

Susikurkite šios struktūros objektų masyvą. Iškvieskite turimas įvedimo ir išvedimo funkcijas, perduodant turimą objektų masyvą ir kiekio kintamąjį.

### Užduotis 3

Antroje užduotyje parašytą programą pritaikykite darbui su failais.

### Užduotis 4 (sudėtingesnė)

Sukurkite struktūrą šiems studento duomenims saugoti:

- Vardas.
- Pavardė.
- Amžius.
- Pažymiai.

Sukurkite struktūrą šiems grupės duomenims saugoti:

- Grupės kodas.
- Aukštoji mokykla.
- Studijų programa.
- Studentai (studentų objektų masyvas).

Sukurkite šias dvi atskiras ir ne struktūrose esančias funkcijas:

- Duomenų įvedimas ar nuskaitymas (pasirinktinai: suveda vartotojas konsolės pagalba arba nuskaitymas iš failo).
- Duomenų išvedimas (pasirinktai: išvedama į konsolę norima forma arba išvedama į failą).

Sukurkite dviejų grupių objektus. Juos užpildykite duomenimis, bei išveskite (pasinaudojant turimomis įvedimo ir išvedimo funkcijomis).
