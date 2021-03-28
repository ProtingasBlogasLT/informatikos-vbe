# Vienmačiai masyvai: skaičiavimai (suma, vidurkis, ...)

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 7, 8, 5, 6, 9, 5 };
    int skaiciu_kiekis = 6;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Sukuriamas kintamasis, kur bus saugomas rastos sumos atsakymas
    int suma = 0;

    // Ieškoma skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        suma += skaiciai[i];
    }

    // Išvedamas atsakymas
    cout << "Siu skaiciu suma: " << suma << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [7][8][5][6][9][5]
Siu skaiciu suma: 40
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 8, 9, 6, 5, 4, 7, 8, 2, 3, 5, 6, 4, 1, 2, 5 };
    int skaiciu_kiekis = 15;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Sukuriami kintamieji, kur bus saugomi rastų sumų atsakymai
    int lyginiu_suma = 0;
    int nelyginiu_suma = 0;

    // Ieškomos skaičių sumos
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        if (skaiciai[i] % 2 == 0)
        {
            lyginiu_suma += skaiciai[i];
        }
        else
        {
            nelyginiu_suma += skaiciai[i];
        }
    }

    // Išvedami atsakymai
    cout << "Lyginiu skaiciu suma: " << lyginiu_suma << endl;
    cout << "Nelyginiu skaiciu suma: " << nelyginiu_suma << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [8][9][6][5][4][7][8][2][3][5][6][4][1][2][5]
Lyginiu skaiciu suma: 40
Nelyginiu skaiciu suma: 35

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 8, 5, 3, 6, 5, 4 };
    int skaiciu_kiekis = 6;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Sukuriamas kintamasis, kur bus saugomas sumos atsakymas
    int suma = 0;

    // Ieškoma skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        suma += skaiciai[i];
    }

    // Skaičiuojamas vidurkis
    double vidurkis = (double)suma / skaiciu_kiekis;

    // Išvedami atsakymai
    cout << "Suma: " << suma << endl;
    cout << "Vidurkis: " << vidurkis << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [8][5][3][6][5][4]
Suma: 31
Vidurkis: 5.16667

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 8, 5, 3, 6, 5, 4 };
    int skaiciu_kiekis = 6;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }
    cout << endl;

    // Sukuriamas kintamasis, kur bus saugomas sumos atsakymas
    int suma = 0;

    // Ieškoma skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        suma += skaiciai[i];
    }

    // Skaičiuojamas vidurkis
    double vidurkis = (double)suma / skaiciu_kiekis;

    // Sukuriamas kintamasis papildomam skaičiavimui
    int didesniu_nei_vidurkis_suma = 0;

    // Ieškoma didesnių nei vidurkis skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        if (skaiciai[i] > vidurkis)
        {
            didesniu_nei_vidurkis_suma += skaiciai[i];
        }
    }

    // Išvedami atsakymai
    cout << "Skaiciu suma: " << suma << endl;
    cout << "Skaicius vidurkis: " << vidurkis << endl;
    cout << "Didesniu nei vidurkis suma: " << didesniu_nei_vidurkis_suma << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [8][5][3][6][5][4]
Skaiciu suma: 31
Skaicius vidurkis: 5.16667
Didesniu nei vidurkis suma: 14

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias pažymių masyvas
    int pazymiai[10];
    int pazymiu_kiekis = 0;

    // Klausiama žmogaus kiek pažymių nori suvesti
    cout << "Kiek pazymiu norite suvesti? ";
    cin >> pazymiu_kiekis;

    // Suvedami visi pažymiai į masyvą
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << i + 1 << "-asis pazymys: ";
        cin >> pazymiai[i];
    }

    cout << endl;

    // Ieškoma suma

    int suma = 0;

    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        suma += pazymiai[i];
    }

    // Ieškomas vidurkis
    double vidurkis = (double)suma / pazymiu_kiekis;

    // Išvedamas atsakymas
    cout << "Ivestu pazymiu vidurkis: " << vidurkis;

    return 0;
}
```

Rezultatas 1:

```
Kiek pazymiu norite suvesti? 7
1-asis pazymys: 5
2-asis pazymys: 6
3-asis pazymys: 3
4-asis pazymys: 2
5-asis pazymys: 1
6-asis pazymys: 5
7-asis pazymys: 3

Ivestu pazymiu vidurkis: 3.57143
```

Rezultatas 2:

```
Kiek pazymiu norite suvesti? 3
1-asis pazymys: 8
2-asis pazymys: 9
3-asis pazymys: 8

Ivestu pazymiu vidurkis: 8.33333
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

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 

Kodas:

```cpp

```

Rezultatai:

```

```

## Užduotys

Informacija ruošiama.
