# Darbas su keliais duomenų ir rezultatų failais

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/XVzUvXbYAkc?start=4767&end=6600" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pavyzdžiai

### Pavyzdys 1

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream duomenys("duomenys.txt");
    ofstream rezultatai("rezultatai.txt");

    int skaiciai[100];
    int kiekis = 0;

    while (!duomenys.eof())
    {
        duomenys >> skaiciai[kiekis];
        kiekis++;
    }

    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        suma += skaiciai[i];
    }

    rezultatai << "Skaiciu suma: " << suma << endl;

    duomenys.close();
    rezultatai.close();

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
7
4
5
9
8
5
2
```
</code-block>

<code-block title="rezultatai.txt">
```
Skaiciu suma: 40

```
</code-block>
</code-group>

### Pavyzdys 2

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream duomenys("duomenys.txt");
    ofstream rezultatai("rezultatai.txt");

    string dienos[7];
    int temperaturos[7];
    int kiekis = 7;

    for (int i = 0; i < kiekis; i++)
    {
        duomenys >> dienos[i] >> temperaturos[i] >> ws;
    }

    int silciausios_ind = 0, vesiausios_ind = 0;

    for (int i = 0; i < kiekis; i++)
    {
        if (temperaturos[i] > temperaturos[silciausios_ind])
        {
            silciausios_ind = i;
        }

        if (temperaturos[i] < temperaturos[vesiausios_ind])
        {
            vesiausios_ind = i;
        }
    }

    rezultatai << "Silciausia diena buvo " << dienos[silciausios_ind]
        << ", temperatura sieke " << temperaturos[silciausios_ind]
        << endl;

    rezultatai << "Vesiausia diena buvo " << dienos[vesiausios_ind]
        << ", temperatura sieke " << temperaturos[vesiausios_ind]
        << endl;

    duomenys.close();
    rezultatai.close();

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Pirmadienis 17
Antradienis 18
Treciadienis 15
Ketvirtadienis 18
Penktadienis 19
Sestadienis 18
Sekmadienis 16
```
</code-block>

<code-block title="rezultatai.txt">
```
Silciausia diena buvo Penktadienis, temperatura sieke 19
Vesiausia diena buvo Treciadienis, temperatura sieke 15

```
</code-block>
</code-group>

### Pavyzdys 3

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream duomenys;

    int skaiciai[100];
    int kiekis = 0;

    duomenys.open("duomenys1.txt");

    while (!duomenys.eof())
    {
        duomenys >> skaiciai[kiekis++];
    }

    duomenys.close();

    duomenys.open("duomenys2.txt");

    while (!duomenys.eof())
    {
        duomenys >> skaiciai[kiekis++];
    }

    duomenys.close();

    ofstream rezultatai("rezultatai.txt");

    rezultatai << "Skaiciai is abieju duomenu failu:" << endl;

    for (int i = 0; i < kiekis; i++)
    {
        rezultatai << skaiciai[i] << " ";
    }

    rezultatai << endl;

    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        suma += skaiciai[i];
    }

    rezultatai << "Siu skaiciu bendra suma: " << suma << endl;

    rezultatai.close();

    return 0;
}
```
</code-block>

<code-block title="duomenys1.txt">
```
12
45
87
65
```
</code-block>

<code-block title="duomenys2.txt">
```
5 4 8 2 3
```
</code-block>

<code-block title="rezultatai.txt">
```
Skaiciai is abieju duomenu failu:
12 45 87 65 5 4 8 2 3 
Siu skaiciu bendra suma: 231

```
</code-block>
</code-group>

### Pavyzdys 4

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ifstream duomenys;

    string duomenu_failai[] = { "duomenys1.txt", "duomenys2.txt" };
    int duomenu_failu_kiekis = 2;

    int skaiciai[100];
    int kiekis = 0;

    for (int i = 0; i < duomenu_failu_kiekis; i++)
    {
        duomenys.open(duomenu_failai[i]);

        while (!duomenys.eof())
        {
            duomenys >> skaiciai[kiekis++];
        }

        duomenys.close();
    }

    ofstream rezultatai("rezultatai.txt");

    rezultatai << "Skaiciai is abieju duomenu failu:" << endl;
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        rezultatai << skaiciai[i] << " ";
        suma += skaiciai[i];
    }

    rezultatai << endl;
    rezultatai << "Siu skaiciu bendra suma: " << suma << endl;

    rezultatai.close();

    return 0;
}
```
</code-block>

<code-block title="duomenys1.txt">
```
12
45
87
65
```
</code-block>

<code-block title="duomenys2.txt">
```
5 4 8 2 3
```
</code-block>

<code-block title="rezultatai.txt">
```
Skaiciai is abieju duomenu failu:
12 45 87 65 5 4 8 2 3 
Siu skaiciu bendra suma: 231

```
</code-block>
</code-group>

## Užduotys

### Užduotis 1

Duomenų faile esanti informacija:

```
4
Liepa     12
Berzelis  10
Obelis    13
Kriause   15
```

Duomenų failo pirmoje eilutėje yra nurodytas įrašų kiekis.

Kitose failo eilutėse saugoma ši informacija apie medžius:

- Medžio pavadinimas.
- Medžio amžius metais.

Atkreipkite dėmesį, kad medžio pavadinimams yra naudojamas atitinkamas simbolių kiekis, kadangi pavadinimą gali sudaryti ne vienas žodis.

Nuskaitykite šią informaciją iš failo.

Į kitą failą išveskite šią nuskaitytą informaciją gražiai lentelės pavidalu.

Taip pat, raskite ir išveskite šiuos dalykus:

- Medžių amžiaus vidurkį.
- Vyriausią medį.
- Jaunausią medį.
- Skirtumą tarp vyriausio ir jaunausio medžių.

### Užduotis 2

Faile esanti informacija:

```
Piestukas           0.99 45
Kreideles crayon    1.99 32
Sasiuvinys 50 psl.  1.49 26
```

Kiekvienoje failo eilutėje yra ši informacija apie prekes:

- Prekės pavadinimas.
- Kaina, eurais.
- Turimų vienetų kiekis.

Atkreipkite dėmesį į tai kad prekės pavadinimas yra sudarytas iš atitinkamo simbolių kiekio, kadangi prekės pavadinimą gali sudaryti ne vienas žodis.

Nuskaitykite šią informaciją iš failo.

Išveskite nuskaitytą informaciją į rezultatų failą lentelės pavidalu. Kainą atvaizduokite fiksuotą du skaičiai po kablelio.

Taip pat, raskite:

- Raskite kuri prekė yra pigiausia ir kuri brangiausia.
- Kurios prekės yra daugiausiai vienetų.
- Kurios prekės pelnas būtų didžiausias, jeigu pavyktų parduoti visus turimus vienetus.
