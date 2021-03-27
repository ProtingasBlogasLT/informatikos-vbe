# Funkcijos su grąžinimo tipu

## Vaizdo pamoka

Informacija ruošiama.

## Apie funkcijas su grąžinimo tipu

- Po atliktų skaičiavimų funkcijos gali grąžinti kokį nors atsakymą, kuris gali būti bet kokio kintamojo ar objekto tipo.
- Kuriant funkciją, kuri turėtų grąžinti kokį nors atsakymą (skaičių, žodį, sąrašą, objektą ar dar ką), būtina nurodyti grąžinimo tipą prieš pat funkcijos pavadinimą, o gale funkcijos būtina aprašyti `return` su grąžinamu atsakymu. `Return type` prieš funkcijos pavadinimą ir `return` gale funkcijos yra tiesiogiai susiję vienas su kitu - funkcija privalo grąžinti būtent tokio tipo atsakymą koks ir buvo nurodytas funkcijos aprašyme.

## Funkcijų su grąžinimo tipu sintaksė

```cpp
<tipas> <pavadinimas>(<argumentai / parametrai>)
{
    // funkcijos kodas...
    return <reiksme>;
}
```

- **tipas** - kokio tipo (`string`, `int`, ...) funkcija grąžins.
- **reiksme** - grąžinamas atsakymas, kurio tipas sutampa su nurodytu prieš funkcijos pavadinimą.

## Funkcijos iškvietimas ir atsakymų gavimas / panaudojimas

Jeigu tik kviečiam (problema ta, kad nematysim jokio rezultato):

```cpp
// toks iškvietimas:
suma();

// bus tas pats kas:
5; // užrašom reikšmę, bet jos niekaip nepanaudojam
```

Jei išsaugom atsakymą į kintamąjį:

```cpp
int kintamasis = suma();
```

Jeigu iškart išvedam atsakymą:

```cpp
cout << suma();
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int skaicius();

int main()
{
    cout << skaicius() << endl;
    return 0;
}

int skaicius()
{
    int sk = 5;
    return sk;
}
```

Rezultatai:

```
5

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int skaicius()
{
    return 10;
}

int main()
{
    cout << skaicius();
    return 0;
}
```

Rezultatai:

```
10
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int skaicius()
{
    int atsitiktinis = rand() % 100 + 1;
    return atsitiktinis;
}

int main()
{
    srand(time(NULL));

    cout << skaicius() << endl;
    cout << skaicius() << endl;
    cout << skaicius() << endl;

    return 0;
}
```

Rezultatas 1:

```
31
95
5

```

Rezultatas 2:

```
61
95
43

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int skaicius()
{
    return rand() % 100 + 1;
}

int main()
{
    srand(time(NULL));

    int sugeneruotas_skaicius = skaicius();
    cout << sugeneruotas_skaicius;

    return 0;
}
```

Rezultatas 1:

```
87
```

Rezultatas 2:

```
54
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int skaicius(int nuo, int iki)
{
    int max = iki - nuo;
    return rand() % max + nuo;
}

int main()
{
    srand(time(NULL));

    cout << "atsitiktiniai skaiciai:\n";
    cout << "nuo 1 iki 10: " << skaicius(1, 10) << endl;
    cout << "nuo 5 iki 10: " << skaicius(5, 10) << endl;
    cout << "nuo 100 iki 1000: " << skaicius(100, 1000) << endl;

    return 0;
}
```

Rezultatas 1:

```
atsitiktiniai skaiciai:
nuo 1 iki 10: 4
nuo 5 iki 10: 9
nuo 100 iki 1000: 953

```

Rezultatas 2:

```
atsitiktiniai skaiciai:
nuo 1 iki 10: 5
nuo 5 iki 10: 7
nuo 100 iki 1000: 992

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int main()
{
    int skaicius1, skaicius2;

    cout << "Iveskite du skaicius: ";
    cin >> skaicius1 >> skaicius2;

    cout << skaicius1 << " + " << skaicius2 << " = " << suma(skaicius1, skaicius2);

    return 0;
}
```

Rezultatas 1:

```
Iveskite du skaicius: 6 8
6 + 8 = 14
```

Rezultatas 2:

```
Iveskite du skaicius: 14 52
14 + 52 = 66
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int skirtumas(int sk1, int sk2)
{
    return sk1 - sk2;
}

int main()
{
    int skaicius1 = 8, skaicius2 = 7;

    cout << skaicius1 << " + " << skaicius2 << " = "
        << suma(skaicius1, skaicius2) << endl;

    cout << skaicius1 << " - " << skaicius2 << " = "
        << skirtumas(skaicius1, skaicius2) << endl;

    return 0;
}
```

Rezultatai:

```
8 + 7 = 15
8 - 7 = 1

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int skirtumas(int sk1, int sk2)
{
    return sk1 - sk2;
}

void isvedimas(int pirmas, int antras)
{
    cout << pirmas << " + " << antras << " = "
        << suma(pirmas, antras) << endl;

    cout << pirmas << " - " << antras << " = "
        << skirtumas(pirmas, antras) << endl;
}

int main()
{
    int skaicius1 = 14, skaicius2 = 3;
    isvedimas(skaicius1, skaicius2);

    return 0;
}
```

Rezultatai:

```
14 + 3 = 17
14 - 3 = 11

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

// FUNKCIJŲ PROTOTIPAI -------------------------------

int suma(int pirmas, int antras);
int skirtumas(int sk1, int sk2);
void isvedimas(int pirmas, int antras);

// PAGRINDINĖ FUNKCIJA -------------------------------

int main()
{
    int skaicius1 = 14, skaicius2 = 3;

    isvedimas(skaicius1, skaicius2);
    isvedimas(16, skaicius2);
    isvedimas(skaicius1, 53);
    isvedimas(98, 12);

    return 0;
}

// KITOS FUNKCIJOS -----------------------------------

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int skirtumas(int sk1, int sk2)
{
    return sk1 - sk2;
}

void isvedimas(int pirmas, int antras)
{
    cout << pirmas << " + " << antras << " = "
        << suma(pirmas, antras) << endl;

    cout << pirmas << " - " << antras << " = "
        << skirtumas(pirmas, antras) << endl;

    cout << endl;
}
```

Rezultatai:

```
14 + 3 = 17
14 - 3 = 11

16 + 3 = 19
16 - 3 = 13

14 + 53 = 67
14 - 53 = -39

98 + 12 = 110
98 - 12 = 86


```

### Pavyzdys 10

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 11

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 12

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 13

Kodas:

```cpp

```

Rezultatai:

```

```

### Pavyzdys 14

Kodas:

```cpp

```

Rezultatai:

```

```

## Užduotys

Informacija ruošiama.
