# Vienmačiai masyvai: keitimas (reikšmių įterpimas, šalinimas, ...)

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/2ItzEXHQQx4?start=4232&end=6866" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pavyzdžiai

### Pavyzdys 1

Skaičių, kurie atitinka tam tikrą sąlygą, keitimas kitais.

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys
    int skaiciai[] = { 8, 9, 8, 5, 3, 5, 4, 2, 3 };
    int kiekis = 9;

    // Ėjimas per pradinius duomenis
    for (int i = 0; i < kiekis; i++)
    {
        // Ar skaičius tenkina sąlygą?
        if (skaiciai[i] % 2 == 0)
        {
            // Skaičiaus keitimas kitu
            skaiciai[i] = 0;
        }
    }

    // Atnaujintų duomenų išvedimas
    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    return 0;
}
```

Rezultatai:

```
0 9 0 5 3 5 0 0 3
```

### Pavyzdys 2

Naujo skaičiaus įterpimas nurodytoje vietoje.

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys
    int skaiciai[10] = { 4, 5, 6, 7 };
    int kiek = 4;

    // Pradinių duomenų išvedimas

    cout << "Pradiniai duomenys: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Turėsim vienu elementu masyve daugiau, todėl padidinam kiekį vienu
    kiek++;

    // Kur įterpti naują elementą ir kokį elementą įterpti
    int kelintoj_vietoj = 2;
    int naujas_skaicius = 30;

    // Visų elementų iki nurodyto pastūmimas vienu atgal
    for (int i = kiek - 1; i > kelintoj_vietoj - 1; i--)
    {
        skaiciai[i + 1] = skaiciai[i];
    }

    // Naujo elemento įterpimas į nurodytą vietą
    skaiciai[kelintoj_vietoj] = naujas_skaicius;

    // Atnaujinto masyvo išvedimas

    cout << "\nSu iterptu skaiciumi: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    return 0;
}
```

Rezultatai:

```
Pradiniai duomenys: 4 5 6 7
Su iterptu skaiciumi: 4 5 30 6 7
```

### Pavyzdys 3

Dviejų narių sukeitimas vietomis (šiuo atveju: didžiausio ir mažiausių skaičių).

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys
    int skaiciai[] = { 5, 8, 2, 3, 1, 4 };
    int kiek = 6;

    // Pradinių duomenų išvedimas

    cout << "Pradiniai duomenys: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Kintamieji ieškomų didž. ir maž. skaičių indeksų saugojimui
    int didziausio_indeksas = 0,
        maziausio_indeksas = 0;

    // Ėjimas per pradinius duomenys
    for (int i = 0; i < kiek; i++)
    {
        // Ar skaičius didesnis už didžiausią?
        if (skaiciai[i] > skaiciai[didziausio_indeksas])
        {
            // Įsimenamas naujas didžiausio skaičiaus indeksas
            didziausio_indeksas = i;
        }

        // Ar skaičius mažesnis už mažiausią?
        if (skaiciai[i] < skaiciai[maziausio_indeksas])
        {
            // Įsimenamas naujas mažiausio skaičiaus indeksas
            maziausio_indeksas = i;
        }
    }

    // Dviejų skaičių apkeitimas vietomis
    int laikinas = skaiciai[didziausio_indeksas];
    skaiciai[didziausio_indeksas] = skaiciai[maziausio_indeksas];
    skaiciai[maziausio_indeksas] = laikinas;

    // arba:
    // swap(skaiciai[didziausio_indeksas], skaiciai[maziausio_indeksas]);

    // Atnaujinto masyvo išvedimas

    cout << "\nApkeisti skaiciai:  ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    return 0;
}
```

Rezultatai:

```
Pradiniai duomenys: 5 8 2 3 1 4
Apkeisti skaiciai:  5 1 2 3 8 4
```

### Pavyzdys 4

Elemento šalinimas žinant to elemento indeksą.

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys
    int skaiciai[] = { 8, 5, 6, 5, 4, 2 };
    int kiek = 6;

    // Skaičiaus, kuris bus šalinamas, indeksas
    int kuri_salinti_ind = 2;

    // Pradinių duomenų išvedimas

    cout << "Skaiciai:  ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Skaičiai perkeliami vienu į priekį iki šalinamo

    for (int i = kuri_salinti_ind; i < kiek - 1; i++)
    {
        skaiciai[i] = skaiciai[i + 1];
    }

    // Kiekis mažinamas vienu
    kiek--;

    // Atnaujinto masyvo išvedimas

    cout << "\nPasalinta: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    return 0;
}
```

Rezultatai:

```
Skaiciai:  8 5 6 5 4 2
Pasalinta: 8 5 5 4 2
```

### Pavyzdys 5

Visų elementų šalinimas, kurie atitinka tam tikrą sąlygą.

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys
    int skaiciai[] = { 8, 5, 6, 5, 4, 2 };
    int kiek = 6;

    // Kokį skaičių reikės šalinti (įskaitant visus jo atsikartojimus)
    int kuri_salinti = 5;

    // Išvedami pradiniai duomenys

    cout << "Skaiciai:  ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Einama per visus masyvo elementus
    for (int i = 0; i < kiek; i++)
    {
        // Jei skaičius sutampa su norimu pašalinti
        if (skaiciai[i] == kuri_salinti)
        {
            // Šalinimas skaičius iš masyvo
            for (int j = i; j < kiek - 1; j++)
            {
                skaiciai[j] = skaiciai[j + 1];
            }

            // Masyve esančių elementų kiekis mažinamas vienu
            kiek--;

            // Grįžtama pirmame cikle vienu atgal, kad vėl tikrintų toje pačioje
            // vietoje esantį skaičių, nes jeigu negrįš ir iš eilės bus du tokie
            // elementai, kurie atitiktų sąlygą - tai antrasis nebūtų pašalintas
            i--;
        }
    }

    // Išvedamas atnaujintas masyvas

    cout << "\nPasalinta: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    return 0;
}
```

Rezultatai:

```
Skaiciai:  8 5 6 5 4 2
Pasalinta: 8 6 4 2
```

## Užduotys

### Užduotis 1

- Susikurkite skaičių masyvą.
- Kiekvieną nelyginį skaičių pakelkite vienu. Pavyzdžiui, jeigu turite `skaiciai = { 7, 4, 5, 6 }` tai jis turėtų pasiversti į `skaiciai = { 8, 4, 6, 6 }`.

### Užduotis 2

- Susikurkite masyvą žodžiams saugoti.
- Kiekvieną žodį, kuris yra ilgesnis nei 5 simboliai pakeisti į tuščią `string`. Pavyzdžiui: `"dviratis"` taps `""`.

### Užduotis 3

- Susikurkite skaičių masyvą.
- Raskite mažiausio ir didžiausio skaičių indeksus / pozicijas masyve.
- Po mažiausio skaičiaus įterpkite šių dviejų rastų skaičių sumą. Pavyzdžiui, jeigu turite masyvą `skaiciai = { 7, 2, 4, 9, 3 }`, kuriame didžiausias skaičius yra `9`, o mažiausias yra `2`, tai masyve už skaičiaus `2` reikia įterpti skaičių `11`, nes `2 + 9`, dėl ko bus pakeista: `skaiciai = { 7, 2, 11, 4, 9, 3 }`.

### Užduotis 4

- Susikurkite skaičių masyvą.
- Iš šio masyvo pašalinkite pirmą lyginį skaičių.
- Iš šio masyvo pašalinkite didžiausią skaičių.
- Į šį masyvą, į vidurį įterpkite jūsų pasirinktą skaičių.

### Užduotis 5 (sudėtingesnė)

- Susikurkite skaičių masyvą
- Raskite didžiausią masyvo skaičių.
- Didžiausią masyvo skaičių įterpkite prieš kiekvieną lyginį skaičių. Pavyzdžiui, turint `skaiciai = { 7, 4, 9, 2, 3 }`, didžiausias skaičius yra `9`, todėl masyvas bus pakeistas: `skaiciai = { 7, 4, 9, 9, 2, 9, 3 }`.

### Užduotis 6 (sudėtingesnė)

- Susikurkite žodžių masyvą.
- Iš šio masyvo pašalinkite visus žodžius, ilgesnius nei 5 simboliai.
- Į šį masyvą, pačioje pradžioje, įterpkite bent 2 pasirinktus žodžius.
- Papildomai: programą pakeiskite taip, kad šalinami žodžiai taip pat būtų įrašomi į kitą masyvą. Konsolėje išveskite iš pradinio masyvo pašalintus žodžius.
