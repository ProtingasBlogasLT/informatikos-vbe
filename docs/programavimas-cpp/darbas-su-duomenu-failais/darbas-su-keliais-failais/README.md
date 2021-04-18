# Darbas su keliais duomenų ir rezultatų failais

## Vaizdo pamoka

Informacija ruošiama.

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

Informacija ruošiama.
