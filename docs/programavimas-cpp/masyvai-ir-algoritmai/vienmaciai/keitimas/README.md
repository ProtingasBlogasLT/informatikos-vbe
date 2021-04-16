# Vienmačiai masyvai: keitimas (reikšmių įterpimas, šalinimas, ...)

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Skaičių, kurie atitinka tam tikrą sąlygą, keitimas kitais.

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    int skaiciai[] = { 8, 9, 8, 5, 3, 5, 4, 2, 3 };
    int kiekis = 9;

    for (int i = 0; i < kiekis; i++)
    {
        if (skaiciai[i] % 2 == 0)
        {
            skaiciai[i] = 0;
        }
    }

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
    int skaiciai[10] = { 4, 5, 6, 7 };
    int kiek = 4;

    cout << "Pradiniai duomenys: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << "\nSu iterptu skaiciumi: ";

    kiek++;

    int kelintoj_vietoj = 2;
    int naujas_skaicius = 30;

    for (int i = kiek - 1; i > kelintoj_vietoj - 1; i--)
    {
        skaiciai[i + 1] = skaiciai[i];
    }

    skaiciai[kelintoj_vietoj] = naujas_skaicius;

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
    int skaiciai[] = { 5, 8, 2, 3, 1, 4 };
    int kiek = 6;

    cout << "Pradiniai duomenys: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    int didziausio_indeksas = 0,
        maziausio_indeksas = 0;

    for (int i = 0; i < kiek; i++)
    {
        if (skaiciai[i] > skaiciai[didziausio_indeksas])
        {
            didziausio_indeksas = i;
        }

        if (skaiciai[i] < skaiciai[maziausio_indeksas])
        {
            maziausio_indeksas = i;
        }
    }

    int laikinas = skaiciai[didziausio_indeksas];
    skaiciai[didziausio_indeksas] = skaiciai[maziausio_indeksas];
    skaiciai[maziausio_indeksas] = laikinas;

    // arba:
    // swap(skaiciai[didziausio_indeksas], skaiciai[maziausio_indeksas]);

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
    int skaiciai[] = { 8, 5, 6, 5, 4, 2 };
    int kiek = 6;

    int kuri_salinti_ind = 2;

    cout << "Skaiciai:  ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    for (int i = kuri_salinti_ind; i < kiek - 1; i++)
    {
        skaiciai[i] = skaiciai[i + 1];
    }

    kiek--;

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
    int skaiciai[] = { 8, 5, 6, 5, 4, 2 };
    int kiek = 6;

    int kuri_salinti = 5;

    cout << "Skaiciai:  ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }

    for (int i = 0; i < kiek; i++)
    {
        if (skaiciai[i] == kuri_salinti)
        {
            for (int j = i; j < kiek - 1; j++)
            {
                skaiciai[j] = skaiciai[j + 1];
            }

            i--;
            kiek--;
        }
    }

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

Informacija ruošiama.
