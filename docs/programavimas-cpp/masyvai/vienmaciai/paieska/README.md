# Vienmačiai masyvai: paieška

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
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 4, 7, 8, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai\n";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Sukuriamas kintamasis didžiausiam skaičiui saugoti
    int didziausias_skaicius = skaiciai[0];

    // Einama per skaičius ir ieškomas didesnis skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius didesnis už didžiausią
        if (skaiciai[i] > didziausias_skaicius)
        {
            // Atnaujinama didžiausio skaičiaus reikšmė
            didziausias_skaicius = skaiciai[i];
        }
    }

    // Išvedamas atsakymas
    cout << "\nDidziausias rastas skaicius\n" << didziausias_skaicius;

    return 0;
}
```

Rezultatai:

```
Skaiciai
4 7 8 6 5 2 3
Didziausias rastas skaicius
8
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 4, 7, 8, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai\n";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Sukuriamas kintamasis mažiausiam skaičiui saugoti
    int maziausias_skaicius = skaiciai[0];

    // Einama per skaičius ir ieškomas mažesnis skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius mažesnis už mažiausią
        if (skaiciai[i] < maziausias_skaicius)
        {
            // Atnaujinama mažiausio skaičiaus reikšmė
            maziausias_skaicius = skaiciai[i];
        }
    }

    // Išvedamas atsakymas
    cout << "\nMaziausias rastas skaicius\n" << maziausias_skaicius;

    return 0;
}
```

Rezultatai:

```
Skaiciai
4 7 8 6 5 2 3
Maziausias rastas skaicius
2
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 4, 7, 8, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai\n";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Sukuriamas kintamasis didžiausiam skaičiui saugoti
    int didziausias_skaicius = skaiciai[0];
    int didziausio_indeksas = 0;

    // Einama per skaičius ir ieškomas didesnis skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius didesnis už didžiausią
        if (skaiciai[i] > didziausias_skaicius)
        {
            // Atnaujinama didžiausio skaičiaus reikšmė
            didziausias_skaicius = skaiciai[i];

            // Įsimenamas didžiausios skaičiaus indeksas
            didziausio_indeksas = i;
        }
    }

    // Išvedami atsakymai
    cout << "\nDidziausias rastas skaicius\n" << didziausias_skaicius << endl;
    cout << "Didziausio skaiciaus indeksas\n" << didziausio_indeksas << endl;
    cout << "Didziausias skaicius yra kelintas\n" << didziausio_indeksas + 1 << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai
4 7 8 6 5 2 3
Didziausias rastas skaicius
8
Didziausio skaiciaus indeksas
2
Didziausias skaicius yra kelintas
3

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 3, 7, 5, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo

    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Sukuriami kintamieji ieškomam skaičiui ir jo indeksui išsaugoti
    int pirmas_lyginis = 0;
    int pirmo_lyginio_indeksas = 0;

    // Einama per visus skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Tikrinama ar skaičius lyginis
        if (skaiciai[i] % 2 == 0)
        {
            // Skaičius įrašomas į kintamąjį
            pirmas_lyginis = skaiciai[i];

            // Skaičiaus indeksas įrašomas į kintamąjį
            pirmo_lyginio_indeksas = i;

            // Sustabdomas ciklas
            break;
        }
    }

    // Išvedami atsakymai
    cout << "Pirmas rastas lyginis skaicius: " << pirmas_lyginis << endl;
    cout << "Sis skaicius yra " << pirmo_lyginio_indeksas + 1 << " pozicijoje";

    return 0;
}
```

Rezultatai:

```
Skaiciai: 3 7 5 6 5 2 3
Pirmas rastas lyginis skaicius: 6
Sis skaicius yra 4 pozicijoje
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    // Sukuriamas tuščias vardų masyvas
    string vardai[10];
    int vardu_kiekis;

    // Vartotojas renkasi kiek vardų norės suvesti
    cout << "Kiek vardu norite ivesti? ";
    cin >> vardu_kiekis;

    // Vardų įvedimas į masyvą
    for (int i = 0; i < vardu_kiekis; i++)
    {
        cout << i + 1 << "-asis vardas: ";
        cin >> vardai[i];
    }

    cout << endl;

    // Sukuriamas kintamasis ilgiausio vardo užsaugojimui
    string ilgiausias_vardas = "";

    // Einama per visus turimus vardus masyve
    for (int i = 0; i < vardu_kiekis; i++)
    {
        // Tikrinama ar vardas yra ilgesnis nei ilgiausias
        if (vardai[i].length() > ilgiausias_vardas.length())
        {
            // Atnaujinama ilgiausio vardo reikšmė
            ilgiausias_vardas = vardai[i];
        }
    }

    // Išvedami atsakymai
    cout << "Ilgiausias rastas vardas: " << ilgiausias_vardas << endl;
    cout << "Ilgiausio rasto vardo ilgis: " << ilgiausias_vardas.length() << endl;

    return 0;
}
```

Rezultatas 1:

```
Kiek vardu norite ivesti? 3
1-asis vardas: Tomas
2-asis vardas: Gintare
3-asis vardas: Petras

Ilgiausias rastas vardas: Gintare
Ilgiausio rasto vardo ilgis: 7

```

Rezultatas 2:

```
Kiek vardu norite ivesti? 5
1-asis vardas: Giedrius
2-asis vardas: Tomas
3-asis vardas: Inga
4-asis vardas: Povilas
5-asis vardas: Zygimantas

Ilgiausias rastas vardas: Zygimantas
Ilgiausio rasto vardo ilgis: 10

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    double temperaturos[] = { 14.5, 25.2, 23.4, 10.9, 11.25 };
    int temperaturu_kiekis = 5;

    double maziausia_temperatura = temperaturos[0],
        didziausia_temperatura = temperaturos[0];

    for (int i = 0; i < temperaturu_kiekis; i++)
    {
        if (temperaturos[i] > didziausia_temperatura)
        {
            didziausia_temperatura = temperaturos[i];
        }
        if (temperaturos[i] < maziausia_temperatura)
        {
            maziausia_temperatura = temperaturos[i];
        }
    }

    cout << "Temperaturos\n";
    for (int i = 0; i < temperaturu_kiekis; i++)
    {
        cout << temperaturos[i] << " ";
    }

    cout << "\nDidziausia temperatura\n" << didziausia_temperatura << endl;
    cout << "Maziausia temperatura\n" << maziausia_temperatura << endl;
    cout << "Skirtumas tarp siu temperaturu\n"
        << didziausia_temperatura - maziausia_temperatura;

    return 0;
}
```

Rezultatai:

```
Temperaturos
14.5 25.2 23.4 10.9 11.25
Didziausia temperatura
25.2
Maziausia temperatura
10.9
Skirtumas tarp siu temperaturu
14.3
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main()
{
    string vardai[] = { "Jonas", "Gabrielius", "Greta", "Paulius", "Gabrielius", "Julija" };
    int amziai[] = { 56, 23, 25, 21, 30, 34 };
    int kiekis = 6;

    cout << "+--------------+--------+\n";
    cout << "| Vardas       | Amzius |\n";
    cout << "+--------------+--------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << "| " << setw(12) << left << vardai[i] << " | "
            << setw(6) << left << amziai[i] << " |\n";
    }

    cout << "+--------------+--------+\n\n";

    string pirm_ilg_vard = "";
    int pirmo_ilg_vard_ind = 0;

    for (int i = 0; i < kiekis; i++)
    {
        if (vardai[i].length() > pirm_ilg_vard.length())
        {
            pirm_ilg_vard = vardai[i];
            pirmo_ilg_vard_ind = i;
        }
    }

    cout << "Pirmas rastas ilgiausias vardas:\n";
    cout << vardai[pirmo_ilg_vard_ind] << " " << amziai[pirmo_ilg_vard_ind] << "\n\n";

    string pask_ilg_vard = "";
    int pask_ilg_vard_ind = 0;

    for (int i = 0; i < kiekis; i++)
    {
        if (vardai[i].length() >= pask_ilg_vard.length())
        {
            pask_ilg_vard = vardai[i];
            pask_ilg_vard_ind = i;
        }
    }

    cout << "Paskutinis rastas ilgiausias vardas:\n";
    cout << vardai[pask_ilg_vard_ind] << " " << amziai[pask_ilg_vard_ind] << endl;

    return 0;
}
```

Rezultatai:

```
+--------------+--------+
| Vardas       | Amzius |
+--------------+--------+
| Jonas        | 56     |
| Gabrielius   | 23     |
| Greta        | 25     |
| Paulius      | 21     |
| Gabrielius   | 30     |
| Julija       | 34     |
+--------------+--------+

Pirmas rastas ilgiausias vardas:
Gabrielius 23

Paskutinis rastas ilgiausias vardas:
Gabrielius 30
```

## Užduotys

### Užduotis 1



### Užduotis 2



### Užduotis 3



### Užduotis 4



### Užduotis 5



### Užduotis 6



### Užduotis 7



### Užduotis 8



### Užduotis 9



### Užduotis 10



### Užduotis 11



### Užduotis 12



### Užduotis 13



### Užduotis 14



### Užduotis 15



### Užduotis 16



### Užduotis 17



### Užduotis 18



### Užduotis 19



### Užduotis 20
