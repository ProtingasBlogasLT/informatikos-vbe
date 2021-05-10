# Struktūros: struktūros kūrimas, informacijos įvedimas ir gavimas (išvedimas) iš objekto

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

// Sukuriama struktūra

struct zmogus
{
    string vardas;
    string pavarde;
    int amzius;
    double ugis;
};

int main()
{
    // Sukuriamas objektas
    zmogus petras;

    // Objektas užpildomas duomenimis
    petras.vardas = "Petras";
    petras.pavarde = "Petrauskas";
    petras.amzius = 70;
    petras.ugis = 1.74;

    // Objekto duomenys išvedami į ekraną
    cout << petras.vardas << " " << petras.pavarde << " ("
        << petras.amzius << " m.), jo ugis " << petras.ugis
        << "m." << endl;

    return 0;
}
```

Rezultatai:

```
Petras Petrauskas (70 m.), jo ugis 1.74m.
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

struct medis
{
    string pavadinimas;
    int aukstis; // mm
};

int main()
{
    medis m1, m2;

    cout << "Iveskite pirmo medzio pavadinima ir auksti (mm): ";
    cin >> m1.pavadinimas >> m1.aukstis;

    cout << "Iveskite antro medzio pavadinima ir auksti (mm): ";
    cin >> m2.pavadinimas >> m2.aukstis;

    cout << endl;

    cout << "Pavadinimas          Aukstis" << endl;
    cout << setw(20) << left << m1.pavadinimas << " " << m1.aukstis << endl;
    cout << setw(20) << left << m2.pavadinimas << " " << m2.aukstis << endl;

    return 0;
}
```

Rezultatai:

```
Iveskite pirmo medzio pavadinima ir auksti (mm): Liepa 147
Iveskite antro medzio pavadinima ir auksti (mm): Obelis 178

Pavadinimas          Aukstis
Liepa                147
Obelis               178
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

struct preke
{
    string pavadinimas;
    double kaina;
    int kiekis;

    void isvedimas()
    {
        cout << "PREKES INFORMACIJA" << endl;
        cout << "Pavadinimas: " << pavadinimas << endl;
        cout << "Kaina: " << kaina << " eur." << endl;
        cout << "Kiekis: " << kiekis << " vnt." << endl;
        cout << endl;
    }
};

int main()
{
    preke piestukas;

    piestukas.pavadinimas = "Piestukas ABC, raudonas";
    piestukas.kaina = 0.99;
    piestukas.kiekis = 94;

    piestukas.isvedimas();

    return 0;
}
```

Rezultatai:

```
PREKES INFORMACIJA
Pavadinimas: Piestukas ABC, raudonas
Kaina: 0.99 eur.
Kiekis: 94 vnt.
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

struct automobilis
{
    string marke;
    string modelis;
    int metai;
    double darbinis_turis;
    int rida;

    void ivedimas()
    {
        cout << "Iveskite marke: ";
        cin >> marke;
        cout << "Iveskite modeli: ";
        cin >> modelis;
        cout << "Iveskite metus: ";
        cin >> metai;
        cout << "Iveskite darbini turi: ";
        cin >> darbinis_turis;
        cout << "Iveskite rida: ";
        cin >> rida;
    }

    void isvedimas()
    {
        cout << "Marke: " << marke << endl;
        cout << "Modelis: " << modelis << endl;
        cout << "Metai: " << metai << endl;
        cout << "Darbinis turis: " << darbinis_turis << endl;
        cout << "Rida: " << rida << endl;
        cout << endl;
    }
};

int main()
{
    automobilis auto1, auto2;

    cout << "Iveskite pirmo automobilio duomenis." << endl;
    auto1.ivedimas();

    cout << "\nIveskite antro automobilio duomenis." << endl;
    auto2.ivedimas();

    cout << "\nIvesti pirmo automobilio duomenys." << endl;
    auto1.isvedimas();

    cout << "Ivesti antro automobilio duomenys." << endl;
    auto2.isvedimas();

    return 0;
}
```

Rezultatai:

```
Iveskite pirmo automobilio duomenis.
Iveskite marke: Audi
Iveskite modeli: A4
Iveskite metus: 2018
Iveskite darbini turi: 1.8
Iveskite rida: 148873

Iveskite antro automobilio duomenis.
Iveskite marke: Tesla
Iveskite modeli: S
Iveskite metus: 2019
Iveskite darbini turi: 1.8
Iveskite rida: 14877

Ivesti pirmo automobilio duomenys.
Marke: Audi
Modelis: A4
Metai: 2018
Darbinis turis: 1.8
Rida: 148873

Ivesti antro automobilio duomenys.
Marke: Tesla
Modelis: S
Metai: 2019
Darbinis turis: 1.8
Rida: 14877
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

struct darbuotojas
{
    string vardas;
    string pavarde;
    double etatas;
    double atlyginimas;
    string pareigos;

    void sudeti_duomenis(string vardas, string pavarde, double etatas,
        double atlyginimas, string kuo_dirba)
    {
        this->vardas = vardas;
        this->pavarde = pavarde;
        this->etatas = etatas;
        this->atlyginimas = atlyginimas;
        pareigos = kuo_dirba;
    }

    void isvesti_duomenis()
    {
        cout << "Zmogaus duomenys" << endl;
        cout << vardas << " " << pavarde << " dirba "
            << etatas << " etatu, uzdirba " << atlyginimas
            << " eur, jis(-i) dirba " << pareigos << "\n\n";
    }
};

int main()
{
    darbuotojas pirmas, antras, trecias;

    pirmas.sudeti_duomenis("Jonas", "Jonaitis", 1, 800, "pencininku");
    antras.sudeti_duomenis("Petras", "Petraitis", 1.5, 1500, "programuotoju");
    trecias.sudeti_duomenis("Ona", "Onauskiene", 0.75, 700, "namu seimininke");

    pirmas.isvesti_duomenis();
    antras.isvesti_duomenis();
    trecias.isvesti_duomenis();

    if (pirmas.atlyginimas > antras.atlyginimas)
    {
        cout << pirmas.vardas << " " << pirmas.pavarde << " uzdirba daugiau nei "
            << antras.vardas << " " << antras.pavarde << endl;
    }

    if (antras.atlyginimas > trecias.atlyginimas)
    {
        cout << antras.vardas << " " << antras.pavarde << " uzdirba daugiau nei "
            << trecias.vardas << " " << trecias.pavarde << endl;
    }

    if (trecias.atlyginimas > pirmas.atlyginimas)
    {
        cout << trecias.vardas << " " << trecias.pavarde << " uzdirba daugiau nei "
            << pirmas.vardas << " " << pirmas.pavarde << endl;
    }

    return 0;
}
```

Rezultatai:

```
Zmogaus duomenys
Jonas Jonaitis dirba 1 etatu, uzdirba 800 eur, jis(-i) dirba pencininku

Zmogaus duomenys
Petras Petraitis dirba 1.5 etatu, uzdirba 1500 eur, jis(-i) dirba programuotoju

Zmogaus duomenys
Ona Onauskiene dirba 0.75 etatu, uzdirba 700 eur, jis(-i) dirba namu seimininke

Petras Petraitis uzdirba daugiau nei Ona Onauskiene
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

struct studentas
{
    string vardas;
    string grupe;
    int pazymiai[50];
    int pazymiu_kiekis;
};

double studento_paz_vidurkis(studentas studentas)
{
    int suma = 0;

    for (int i = 0; i < studentas.pazymiu_kiekis; i++)
    {
        suma += studentas.pazymiai[i];
    }

    return (double)suma / studentas.pazymiu_kiekis;
}

double skaiciu_vidurkis(int skaiciai[], int kiekis)
{
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        suma += skaiciai[i];
    }

    return (double)suma / kiekis;
}

int main()
{
    studentas stud;

    stud.vardas = "Povilas";
    stud.grupe = "IF-9/2";
    stud.pazymiai[0] = 8;
    stud.pazymiai[1] = 9;
    stud.pazymiai[2] = 7;
    stud.pazymiai[3] = 10;
    stud.pazymiu_kiekis = 4;

    cout << "Studento duomenys" << endl;
    cout << "Vardas: " << stud.vardas << endl;
    cout << "Mokosi grupeje: " << stud.grupe << endl;
    cout << "Studento pazymiai: ";

    for (int i = 0; i < stud.pazymiu_kiekis; i++)
    {
        cout << stud.pazymiai[i] << " ";
    }

    cout << endl;

    double vidurkis1 = studento_paz_vidurkis(stud);
    double vidurkis2 = skaiciu_vidurkis(stud.pazymiai, stud.pazymiu_kiekis);

    cout << "Vidurkis 1: " << vidurkis1 << endl;
    cout << "Vidurkis 2: " << vidurkis2 << endl;

    return 0;
}
```

Rezultatai:

```
Studento duomenys
Vardas: Povilas
Mokosi grupeje: IF-9/2
Studento pazymiai: 8 9 7 10
Vidurkis 1: 8.5
Vidurkis 2: 8.5
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

struct variklis
{
    string gamintojas;
    double darbinis_turis;
};

struct automobilis
{
    string marke;
    string modelis;
    int metai;
    variklis variklis;

    void isvedimas()
    {
        cout << marke << " " << modelis
            << " pagamintas " << metai << " metais"
            << ", jame yra toks variklis: " << endl
            << "gamino: " << variklis.gamintojas
            << ", jo darbinis turis " << variklis.darbinis_turis << " l"
            << endl;
    }
};

int main()
{
    automobilis masina;

    masina.marke = "Moskvicius";
    masina.modelis = "800";
    masina.metai = 1984;
    masina.variklis.gamintojas = "rusai";
    masina.variklis.darbinis_turis = 3.2;

    masina.isvedimas();

    return 0;
}
```

Rezultatai:

```
Moskvicius 800 pagamintas 1984 metais, jame yra toks variklis:
gamino: rusai, jo darbinis turis 3.2 l
```

## Užduotys
### Užduotis 1

Susikurkite struktūrą saugoti šiems aukštosios mokyklos duomenims:

- Pavadinimas.
- Įsteigimo metai.
- Miestas.
- Studentų skaičius.
- Darbuotojų skaičius.

Susikurkite objektą ir leiskite vartotojui suvesti šiuos duomenis konsolės pagalba.

Suvestus duomenis išveskite pasirinkta forma.

### Užduotis 2

Susikurkite struktūrą saugoti šiems kepyklos duomenims:

- Pavadinimas.
- Adresas.
- Darbuotojų kiekis.
- Vidutiniškai per dieną iškepamų kepalų kiekis.
- Vidutinė vieno kepalo kaina.

Susikurkite objektą ir užpildykite jį informacija bet kuria norima forma.

Suvestus duomenis išveskite pasirinkta forma.

### Užduotis 3

Susikurkite struktūrą saugoti šiems knygos duomenims:

- Autorius.
- Pavadinimas.
- Kaina.
- Leidykla.
- Puslapių skaičius.

Susikurkite tris knygos struktūros objektus, juos užpildykite norima forma.

Suvestus duomenis išveskite lentelės pavidalu.

### Užduotis 4 (laisva forma)

- Susikurkite savo susigalvotą struktūrą.
- Susikurkite kelis objektus, juos užpildykite duomenimis.
- Išveskite visus duomenis lentelės pavidalu.
- Išveskite kai kuriuos pasirinktus duomenis.
