# Informacijos nuskaitymas iš failo

## Vaizdo pamoka

Informacija ruošiama.

## Apie informacijos nuskaitymą iš failo

- Norint nuskaityti informaciją iš failo, reikės susikurti nuskaitymo srauto operatorių, atsidaryti failą, atlikti nuskaitymo veiksmus ir uždaryti failą.
- Nuskaitymui naudosite susikurtą srauto operatorių ir jį galėsite naudoti taip pat kaip naudojot `cin`. Taip pat, nuskaitymui bus galima naudoti `getline()` bei `.get()` komandas.

## Nuskaitymo būdai

Nuskaitymas iš failo yra labai panašus nuskaitymo iš konsolės atveju. Todėl siūlome platesnės informacijos apie nuskaitymo būdus ir kitus niuansus paieškoti skyriuje [Informacijos nuskaitymas iš konsolės](https://informatikosvbe.lt/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/).

## Sintaksė

Nuskaitymo iš failo srauto operatoriaus kūrimas:

```cpp
ifstream operatorius;
```

- **ifstream** - komanda, parodanti, kad kuriate nuskaitymo iš failo operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint nuskaityti duomenis iš failo.

Failo atsidarymas:

```cpp
operatorius.open("failo_pavadinimas.txt");
```

Taip pat, galima susikurti norimą nuskaitymo operatorių ir atsidaryti failą nuskaitymui vienoje eilutėje:

```cpp
ifstream operatorius("failo_pavadinimas.txt");
```

- **ifstream** - komanda, parodanti, kad kuriate nuskaitymo iš failo operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint nuskaityti duomenis iš failo.
- `failo_pavadinimas.txt` - failas, kurį atidarote nuskaitymui.

Duomenų nuskaitymas iš failo, analogiškas `cin` nuskaitymui iš konsolės:

```cpp
int kintamasis;
operatorius >> kintamasis;
```

Duomenų nuskaitymas iš failo, pasinaudojant `getline()`:

```cpp
string tekstas;

// eilutės nuskaitymas
getline(operatorius, kintamasis);

// eilutės nuskaitymas iki simbolio (šiuo atveju - kablelio)
getline(operatorius, kintamasis, ',');
```

Duomenų nuskaitymas iš failo, pasinaudojant `cin.get()`:

```cpp
char simboliai[20];

// Nuskaitoma 20 simbolių į char masyvą
operatorius.get(simboliai, 20);
```

Patikrinimas ar jau failo pabaiga buvo pasiekta (grąžina `true` jei jau pasiekta failo pabaiga ir `false` - jei dar ne failo pabaiga):

```cpp
operatorius.eof(); // end of file
```

Failo uždarymas:

```cpp
operatorius.close();
```

## Pavyzdžiai 1 (paprastas nuskaitymas)

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

## Užduotys 1 (paprastas nuskaitymas)

Informacija ruošiama.

## Pavyzdžiai 2 (kai žinoma kiek duomenų)

### Pavyzdys 8

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
    int kiek;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");
    
    // kiekio nuskaitymas
    duomenys >> kiek;

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        duomenys >> skaiciai[i];
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Skaiciu faile: " << kiek << endl;

    cout << "Skaiciai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << ", ";
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
3
45
89
56
```
</code-block>
</code-group>

Rezultatai:

```
Skaiciu faile: 3
Skaiciai: 45, 89, 56,
```

### Pavyzdys 9

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
    string vardai[10];
    int kiek;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // kiekio nuskaitymas
    duomenys >> kiek;

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        duomenys >> vardai[i];
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << ", ";
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
4
Tomas
Greta
Paulius
Inga
```
</code-block>
</code-group>

Rezultatai:

```
Tomas, Greta, Paulius, Inga,
```

### Pavyzdys 10

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
    string vardai[10];
    int amziai[10];
    int kiek;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // kiekio nuskaitymas
    duomenys >> kiek;

    // failo nuskaitymas
    for (int i = 0; i < kiek; i++)
    {
        duomenys >> vardai[i] >> amziai[i] >> ws;
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << " (" << amziai[i] << " m.)" << endl;
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
4
Tomas 23
Greta 24
Paulius 22
Inga 22
```
</code-block>
</code-group>

Rezultatai:

```
Tomas (23 m.)
Greta (24 m.)
Paulius (22 m.)
Inga (22 m.)
```

## Užduotys 2 (kai žinoma kiek duomenų)

Informacija ruošiama.

## Pavyzdžiai 3 (kai nežinoma kiek duomenų)

### Pavyzdys 11

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
    int skaiciai[10];
    int kiek = 0;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas
    while (!duomenys.eof())
    {
        duomenys >> skaiciai[kiek];
        kiek++;
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Nuskaityti skaiciai: ";
    int suma = 0;

    for (int i = 0; i < kiek; i++)
    {
        cout << skaiciai[i] << " ";
        suma += skaiciai[i];
    }

    cout << "\nSiu skaiciu suma: " << suma << endl;
    cout << "Vidurkis: " << (double)suma / kiek << endl;

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
2
5
6
5
4
2
3
1
5
```
</code-block>
</code-group>

Rezultatai:

```
Nuskaityti skaiciai: 2 5 6 5 4 2 3 1 5
Siu skaiciu suma: 33
Vidurkis: 3.66667
```

### Pavyzdys 12

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
    string vardai[10];
    int kiek = 0;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream duomenys("duomenys.txt");

    // failo nuskaitymas
    while (!duomenys.eof())
    {
        duomenys >> vardai[kiek];
        kiek++;
    }

    // failo uždarymas
    duomenys.close();

    // kiti veiksmai

    cout << "Nuskaityti vardai: ";

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << ", ";
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Ignas
Tomas
Giedrius
```
</code-block>
</code-group>

Rezultatai:

```
Nuskaityti vardai: Ignas, Tomas, Giedrius,
```

### Pavyzdys 13

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
    string vardai[10];
    int amziai[10];
    int kiek = 0;

    // srauto operatoriaus sukūrimas ir failo atsidarymas
    ifstream failas("duomenys.txt");

    // failo nuskaitymas
    while (!failas.eof())
    {
        failas >> vardai[kiek];
        failas >> amziai[kiek];
        kiek++;
    }

    // failo uždarymas
    failas.close();

    // kiti veiksmai

    for (int i = 0; i < kiek; i++)
    {
        cout << vardai[i] << " (" << amziai[i]
            << " m.)" << endl;
    }

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
Ignas 20
Tomas 23
Giedrius 22
```
</code-block>
</code-group>

Rezultatai:

```
Ignas (20 m.)
Tomas (23 m.)
Giedrius (22 m.)
```

## Užduotys 3 (kai nežinoma kiek duomenų)

Informacija ruošiama.
