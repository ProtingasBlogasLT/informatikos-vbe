# Informacijos nuskaitymas iš failo: paprastas nuskaitymas

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
    // kintamieji duomenims saugoti
    int skaicius1, skaicius2, skaicius3;

    // nuskaitymo pasiruošimas
    ifstream nuskaitymas;

    // failo atsidarymas
    nuskaitymas.open("duomenys.txt");

    // nuskaitymas
    nuskaitymas >> skaicius1 >> skaicius2 >> skaicius3;

    // failo uždarymas
    nuskaitymas.close();

    // veiksmai su nuskaitytais duomenimis
    cout << "Faile esantys skaiciai:" << endl << skaicius1 << endl
        << skaicius2 << endl << skaicius3 << endl;
    cout << "Siu skaiciu suma: " << skaicius1 + skaicius2 + skaicius3 << endl;

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
5 4 8
```
</code-block>
</code-group>

Rezultatai:

```
Faile esantys skaiciai:
5
4
8
Siu skaiciu suma: 17
```

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
    // kintamieji duomenims
    string vardas, pavarde;
    int amzius;
    double ugis;

    // srauto operatoriaus sukūrimas ir failo atidarymas
    ifstream failas("duomenys.txt");

    // failo nuskaitymas
    failas >> vardas >> pavarde >> amzius >> ugis;

    // išvedimas į konsolę
    cout << vardas << " " << pavarde << " (" << amzius
        << " m.), jo ugis " << ugis << " m." << endl;

    // failo uždarymas
    failas.close();

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas Tomauskas 25 1.8
```
</code-block>
</code-group>

Rezultatai:

```
Tomas Tomauskas (25 m.), jo ugis 1.8 m.
```

### Pavyzdys 3

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <string>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string pavadinimas1, pavadinimas2;
    int metai1, metai2, puslapiai1, puslapiai2;
    double kaina1, kaina2;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas

    getline(duomenys, pavadinimas1);
    duomenys >> metai1 >> puslapiai1 >> kaina1;

    duomenys >> ws;
    
    getline(duomenys, pavadinimas2);
    duomenys >> metai2 >> puslapiai2 >> kaina2;

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "PIRMA KNYGA" << endl;
    cout << "Pavadinimas: " << pavadinimas1 << endl;
    cout << "Metai: " << metai1 << endl;
    cout << "Puslapiai: " << puslapiai1 << endl;
    cout << "Kaina: " << kaina1 << " eur.\n\n";

    cout << "ANTRA KNYGA" << endl;
    cout << "Pavadinimas: " << pavadinimas2 << endl;
    cout << "Metai: " << metai2 << endl;
    cout << "Puslapiai: " << puslapiai2 << endl;
    cout << "Kaina: " << kaina2 << " eur.\n";

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Haris Poteris ir Azkabano kalinys
2005 200 19.99
7 efektyviai veikianciu zmoniu iprociai
2018 180 12.99
```
</code-block>
</code-group>

Rezultatai:

```
PIRMA KNYGA
Pavadinimas: Haris Poteris ir Azkabano kalinys
Metai: 2005
Puslapiai: 200
Kaina: 19.99 eur.

ANTRA KNYGA
Pavadinimas: 7 efektyviai veikianciu zmoniu iprociai
Metai: 2018
Puslapiai: 180
Kaina: 12.99 eur.
```

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
    // kintamieji duomenims saugoti
    int skaiciai[5];
    int kiekis = 5;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas
    duomenys >> skaiciai[0] >> skaiciai[1]
        >> skaiciai[2] >> skaiciai[3] >> skaiciai[4];

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Nuskaityti skaiciai: ";
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
        suma += skaiciai[i];
    }

    cout << endl;
    cout << "Skaiciu suma: " << suma << endl;

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
8
9
5
7
4
```
</code-block>
</code-group>

Rezultatai:

```
Nuskaityti skaiciai: 8 9 5 7 4
Skaiciu suma: 33
```

### Pavyzdys 5

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[4];
    int amziai[4];
    int kiekis = 4;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream fin("duomenys.txt");

    // failo nuskaitymas
    for (int i = 0; i < kiekis; i++)
    {
        fin >> vardai[i] >> amziai[i];
    }

    // failo uždarymas
    fin.close();

    // kiti veiksmai

    cout << "Vardai       Amziai\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(12) << left << vardai[i]
            << " " << setw(6) << amziai[i] << endl;
    }
    
    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas 23
Gintaras 24
Greta 26
Gintare 23
```
</code-block>
</code-group>

Rezultatai:

```
Vardai       Amziai

Tomas        23
Gintaras     24
Greta        26
Gintare      23
```

### Pavyzdys 6

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <iomanip>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    string vardai[4];
    int amziai[4];
    int kiekis = 4;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream fin("duomenys.txt");

    // failo nuskaitymas
    for (int i = 0; i < kiekis; i++)
    {
        char laikinas[16];
        fin.get(laikinas, 16);
        vardai[i] = laikinas;
        fin >> amziai[i];
        fin >> ws;
    }

    // failo uždarymas
    fin.close();

    // kiti veiksmai

    cout << "Vardai           Amziai\n\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << setw(16) << left << vardai[i]
            << " " << setw(6) << amziai[i] << endl;
    }
    
    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Tomas Tomauskas 23
Gintaras        24
Greta           26
Gintare         23
```
</code-block>
</code-group>

Rezultatai:

```
Vardai           Amziai

Tomas Tomauskas  23
Gintaras         24
Greta            26
Gintare          23
```

### Pavyzdys 7

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    // kintamieji duomenims saugoti
    int skaiciai[5];
    int kiek = 5;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream fin("duomenys.txt");

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        fin >> skaiciai[i];
    }

    // failo uždarymas
    fin.close();

    cout << "Skaiciai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
    }
    
    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
8
9
5
4
5
3
1
5
8
7
```
</code-block>
</code-group>

Rezultatai:

```
Skaiciai: 8 9 5 4 5
```

## Užduotys

Informacija ruošiama.
