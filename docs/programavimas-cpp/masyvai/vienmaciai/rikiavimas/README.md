# Vienmačiai masyvai: rikiavimas

## Vaizdo pamoka

Informacija ruošiama.

## Algoritmų veikimo vizualizacijos

Šių algoritmų vizualizacijų galima rasti [čia](https://visualgo.net/bn/sorting).

## Rikiavimas Burbuliuko metodu (angl. *Bubble sort*)

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    int skaiciai[] = { 47, 125, 23, 35, 49, 254, 354, 15, 28 };
    int kiekis = 9;

    // Skaičių išvedimas

    cout << "Skaiciai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Rikiavimas burbuliuko metodu (bubble sort)

    for (int i = 0; i < kiekis - 1; i++)
    {
        for (int j = 0; j < kiekis - i - 1; j++)
        {
            // Tikrinimas ar reikia apkeisti
            // Ženklas gali būti ir į kitą pusę, jei reikia pakeisti rikiavimo pusę
            if (skaiciai[j] > skaiciai[j + 1])
            {
                // Skaičių apkeitimas vietomis
                // temp turi būti to paties tipo kaip masyvo narių tipas
                int temp = skaiciai[j];
                skaiciai[j] = skaiciai[j + 1];
                skaiciai[j + 1] = temp;
            }
        }
    }

    // Surikiuotų skaičių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai:
47 125 23 35 49 254 354 15 28

Surikiuoti:
15 23 28 35 47 49 125 254 354
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    int skaiciai[] = { 47, 125, 23, 35, 49, 254, 354, 15, 28 };
    int kiekis = 9;

    // Skaičių išvedimas

    cout << "Skaiciai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Rikiavimas burbuliuko metodu (bubble sort)

    bool rikiuoti = true;

    while (rikiuoti)
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            // Tikrinimas ar reikia apkeisti
            // Ženklas gali būti ir į kitą pusę, jei reikia pakeisti rikiavimo pusę
            if (skaiciai[i] > skaiciai[i + 1])
            {
                // Skaičių apkeitimas vietomis
                swap(skaiciai[i], skaiciai[i + 1]);
                rikiuoti = true;
            }
        }
    }

    // Surikiuotų skaičių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai:
47 125 23 35 49 254 354 15 28

Surikiuoti:
15 23 28 35 47 49 125 254 354
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    int skaiciai[] = { 47, 125, 23, 35, 49, 254, 354, 15, 28 };
    int kiekis = 9;

    // Skaičių išvedimas

    cout << "Skaiciai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Rikiavimas burbuliuko metodu (bubble sort)

    bool rikiuoti;

    do
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            // Tikrinimas ar reikia apkeisti
            // Ženklas gali būti ir į kitą pusę, jei reikia pakeisti rikiavimo pusę
            if (skaiciai[i] > skaiciai[i + 1])
            {
                // Skaičių apkeitimas vietomis
                swap(skaiciai[i], skaiciai[i + 1]);
                rikiuoti = true;
            }
        }
    } while (rikiuoti);

    // Surikiuotų skaičių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai:
47 125 23 35 49 254 354 15 28

Surikiuoti:
15 23 28 35 47 49 125 254 354
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    string zodziai[] = { "Jonas", "Petras", "Gintas", "Adomas", "Povilas",
                        "Gabriele", "Gintare", "Julija", "Ona" };
    int kiekis = 8;

    // Žodžių išvedimas

    cout << "Zodziai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << zodziai[i] << " ";
    }

    cout << endl;

    // Rikiavimas burbuliuko metodu (bubble sort)

    bool rikiuoti;

    do
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            // Tikrinimas ar reikia apkeisti
            // Ženklas gali būti ir į kitą pusę, jei reikia pakeisti rikiavimo pusę
            if (zodziai[i] > zodziai[i + 1])
            {
                // Žodžių apkeitimas vietomis
                swap(zodziai[i], zodziai[i + 1]);
                rikiuoti = true;
            }
        }
    } while (rikiuoti);

    // Surikiuotų žodžių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << zodziai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Zodziai:
Jonas Petras Gintas Adomas Povilas Gabriele Gintare Julija

Surikiuoti:
Adomas Gabriele Gintare Gintas Jonas Julija Petras Povilas
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    // Pradiniai duomenys

    string vardai[] = { "Jonas", "Petras", "Inga", "Elina" };
    int amziai[] = { 58, 30, 35, 32 };
    int kiekis = 4;

    // Duomenų išvedimas

    cout << "Vardas ir amzius\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(10) << left << vardai[i] << " " << amziai[i] << endl;
    }

    cout << endl;

    // Rikiavimas burbuliuko metodu (bubble sort)

    bool rikiuoti;

    do
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            // Tikrinimas ar reikia apkeisti
            // Ženklas gali būti ir į kitą pusę, jei reikia pakeisti rikiavimo pusę
            if (amziai[i] > amziai[i + 1])
            {
                // Apkeitimas vietomis, ne tik amžiai bet ir vardai
                swap(amziai[i], amziai[i + 1]);
                swap(vardai[i], vardai[i + 1]);
                rikiuoti = true;
            }
        }
    } while (rikiuoti);

    // Surikiuotų duomenų išvedimas

    cout << "Surikiuoti\n";
    cout << "Vardas ir amzius\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(10) << left << vardai[i] << " " << amziai[i] << endl;
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Vardas ir amzius

Jonas      58
Petras     30
Inga       35
Elina      32

Surikiuoti
Vardas ir amzius

Petras     30
Elina      32
Inga       35
Jonas      58
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    // Pradiniai duomenys

    string vardai[] = { "Jonas", "Petras", "Inga", "Aina" };
    int amziai[] = { 58, 30, 35, 30 };
    int kiekis = 4;

    // Duomenų išvedimas

    cout << "Vardas ir amzius\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(10) << left << vardai[i] << " " << amziai[i] << endl;
    }

    cout << endl;

    // Rikiavimas burbuliuko metodu (bubble sort)

    bool rikiuoti;

    do
    {
        rikiuoti = false;

        for (int i = 0; i < kiekis - 1; i++)
        {
            // Pagal amžių didėjimo tvarka,
            // o jei amžius sutampa tai pagal vardą abėcėliškai
            if (amziai[i] > amziai[i + 1] || 
                (amziai[i] == amziai[i + 1] && vardai[i] > vardai[i + 1]))
            {
                // Apkeitimas vietomis, ne tik amžiai bet ir vardai
                swap(amziai[i], amziai[i + 1]);
                swap(vardai[i], vardai[i + 1]);
                rikiuoti = true;
            }
        }
    } while (rikiuoti);

    // Surikiuotų duomenų išvedimas

    cout << "Surikiuoti\n";
    cout << "Vardas ir amzius\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(10) << left << vardai[i] << " " << amziai[i] << endl;
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Vardas ir amzius

Jonas      58
Petras     30
Inga       35
Aina       30

Surikiuoti
Vardas ir amzius

Aina       30
Petras     30
Inga       35
Jonas      58
```

## Rikiavimas Įterpimo metodu (angl. *Insertion sort*)

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    int skaiciai[] = { 47, 125, 23, 35, 49, 254, 354, 15, 28 };
    int kiekis = 9;

    // Skaičių išvedimas

    cout << "Skaiciai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Rikiavimas įterpimo metodu (insertion sort)

    int j;

    for (int i = 1; i < kiekis; i++)
    {
        j = i;

        // Norint apkeisti rikiavimo pusę, prie skaičių
        // skaiciai[j] < skaiciai[j - 1]
        // galima keisti ženklą į kitą pusę
        while (j > 0 && skaiciai[j] < skaiciai[j - 1])
        {
            // Skaičių apkeitimas
            swap(skaiciai[j], skaiciai[j - 1]);

            j--;
        }
    }

    // Surikiuotų skaičių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai:
47 125 23 35 49 254 354 15 28

Surikiuoti:
15 23 28 35 47 49 125 254 354
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    int skaiciai[] = { 47, 125, 23, 35, 49, 254, 354, 15, 28 };
    int kiekis = 9;

    // Skaičių išvedimas

    cout << "Skaiciai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Rikiavimas įterpimo metodu (insertion sort)

    int j;

    for (int i = 1; i < kiekis; i++)
    {
        j = i;

        // Norint apkeisti rikiavimo pusę, prie skaičių
        // skaiciai[j] > skaiciai[j - 1]
        // galima keisti ženklą į kitą pusę
        while (j > 0 && skaiciai[j] > skaiciai[j - 1])
        {
            // Skaičių apkeitimas
            int temp = skaiciai[j];
            skaiciai[j] = skaiciai[j - 1];
            skaiciai[j - 1] = temp;

            j--;
        }
    }

    // Surikiuotų skaičių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai:
47 125 23 35 49 254 354 15 28

Surikiuoti:
354 254 125 49 47 35 28 23 15
```

## Rikiavimas Gnomo metodu (angl. *Gnome sort*)

<iframe width="560" height="315" src="https://www.youtube.com/embed/cGpg_DvthSY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Pavyzdys

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pradiniai duomenys

    int skaiciai[] = { 47, 125, 23, 35, 49, 254, 354, 15, 28 };
    int kiekis = 9;

    // Skaičių išvedimas

    cout << "Skaiciai:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Rikiavimas gnomo metodu (gnome sort)

    for (int i = 0; i < kiekis - 1; i++)
    {
        // Jei reikia rikiavimo į kitą pusę, čia galime pakeisti ženklą
        if (skaiciai[i] > skaiciai[i + 1])
        { 
            // Skaičių apkeitimas
            swap(skaiciai[i], skaiciai[i + 1]);

            if (i > 0)
            {
                i -= 2; // atgal du žingsnius
            }
        }
    }

    // Surikiuotų skaičių išvedimas

    cout << "\nSurikiuoti:\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai:
47 125 23 35 49 254 354 15 28

Surikiuoti:
15 23 28 35 47 49 125 254 354
```

## Užduotys

### Užduotis 1

- Leiskite vartotojui suvesti norimą kiekį skaičių.
- Surikiuokite skaičius mažėjimo tvarka.
- Atvaizduokite tris didžiausius skaičius.

### Užduotis 2

- Leiskite vartotojui suvesti norimą kiekį skaičių.
- Atrinkite visus lyginius skaičius, bei visus nelyginius skaičius į atskirus masyvus.
- Vieną iš atrinktų masyvų surikiuokite didėjimo tvarka, kitą mažėjimo.
- Išveskite pradinius duomenis ir atrinktus bei surikiuotus duomenis.

### Užduotis 3

- Turite dienų temperatūrų informaciją.
- Į vieną masyvą atrinkite aukštas temperatūras (kurios didesnės nei 20 laipsnių), o į kitą žemas (mažesnės nei 10 laipsnių).
- Aukštas temperatūras surikiuokite mažėjimo tvarka.
- Žemas temperatūras surikiuokite didėjimo tvarka.
- Išveskite pradines temperatūras, atrinktas temperatūras ir po top 3 temperatūras, t.y. tris didžiausias ir tris mažiausias.

### Užduotis 4

- Sugeneruokite 20 atsitiktinių skaičių, kur kiekvienas skaičius patenka į rėžius `[1-100]`.
- Atrinkite skaičius, didesnius nei sugeneruotų skaičių vidurkis.
- Surikiuokite atrinktus skaičius didėjimo tvarka.
- Išveskite pradinius skaičius, bei atrinkus ir surikiuotus skaičius.

### Užduotis 5

- Turite informaciją apie krepšininko pelnytus taškus per įvairas varžybas.
- Raskite 5 didžiausius rezultatus (turbūt būtų patogu pirma surikiuoti ir tada gauti kelis reikiamus skaičius).
- Raskite šių 5-ių didžiausių rezultatų vidurkį.

### Užduotis 6

- Turite informaciją apie prekes (pavadinimas, kiekis, vieneto kaina).
- Išveskite šią informaciją lentelės pavidalu.
- Surikiuokite prekes pagal kainą, mažėjimo tvarka, o jei kaina sutampa tuomet pagal pavadinimą didėjimo tvarka. Nepamirškite perkelti ir kitų stulpelių. Surikiuotus rezultatus išveskite lentelės pavidalu.
