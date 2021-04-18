# Informacijos išvedimas į failą

## Vaizdo pamoka

Informacija ruošiama.

## Apie informacijos išvedimą į failą

- Norint išvesti informaciją į failą, reikės susikurti išvedimo srauto operatorių, atsidaryti failą, atlikti išvedimo veiksmus ir uždaryti failą.
- Išvedimui naudosite susikurtą srauto operatorių ir jį galėsite naudoti taip pat kaip naudojot `cout`.

## Sintaksė

Išvedimo į failą operatoriaus pasiruošimas:

```cpp
ofstream operatorius;
```

- **ofstream** - komanda, parodanti, kad kuriate išvedimo į failą operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint išvesti duomenis į failą.

Failo atsidarymas:

```cpp
operatorius.open("failo_pavadinimas.txt");
```

Taip pat, galima susikurti norimą išvedimo operatorių ir atsidaryti failą išvedimui vienoje eilutėje:

```cpp
ofstream operatorius("failo_pavadinimas.txt");
```

- **ofstream** - komanda, parodanti, kad kuriate išvedimo į failą operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint išvesti duomenis į failą.
- `failo_pavadinimas.txt` - failas, kurį atidarote išvedimui.

Duomenų išvedimas į failą, analogiškas `cout` išvedimui į konsolę:

```cpp
operatorius << "tekstas";
```

Failo uždarymas:

```cpp
operatorius.close();
```

## Failo papildymas

Atsidarant failą rašymui, jis būna išvalomas ir yra rašomas iš naujo. Norint tęsti išvedimą į anksčiau pradėtą failą, jį atsidarant galima panaudoti `ios:app`:

```cpp
ofstream operatorius("failas.txt", ios::app);
```

## Teksto formatavimas

Tam tikriems teksto formatavimo dalykams bus naudojama ši biblioteka:

```cpp
#include <iomanip>
```

Teksto formatavimo komandos naudojamos išvedime prie `cout` ar išvedimo į failą operatoriaus (kurį susikūrėte prie `ofstream`), prieš kiekvieną vietą, kurioje reikia tam tikro formatavimo. Pavyzdžiui, `cout` atveju:

```cpp
// Nustatomas 20 simbolių plotis ir kairinis teksto lygiavimas
cout << setw(20) << left << "tekstas" << endl;
```

Ar su išvedimo į failą operatoriumi:

```cpp
ofstream isvedimas("failas.txt");

// Nustatomas 20 simbolių plotis ir kairinis teksto lygiavimas
isvedimas << setw(20) << left << "tekstas" << endl;
```

### Simbolių kiekio nustatymas eilutėje

Sintaksė:

```cpp
setw(<skaicius>)
```

Bus nustatymas nurodyto pločio simbolių kiekis teksto ar skaičiaus išvedimui. Jei tekstas ar skaičius bus sudarytas iš mažiau simbolių nei nurodyta - likusi vieta bus užpildoma su paprastais tarpais, kad būtų užpildytas reikiamas plotis. O jeigu tekstas ar skaičius bus sudarytas iš daugiau simoblių nei nurodyta - bus nukerpama likusi dalis, kad neviršytų nurodyto pločio.

Pavyzdys:

```cpp
setw(10)
```

Panaudojimas:

```cpp
// dalis "tekstas" užims 10 simbolių vietos, todėl tai taps "   tekstas"
cout << setw(10) << "tekstas" << "kitas";
```

### Teksto lygiavimas

Kairėje pusėje:

```cpp
left
```

Dešinėje pusėje:

```cpp
right
```

Panaudojimas:

```cpp
// dalis "tekstas" užims 10 simbolių vietos ir bus sulygiuotas kairėje pusėje,
// todėl tai taps "tekstas   "
cout << setw(10) << left << "tekstas" << "kitas";
```

### Skaičių po kablelio nustatymas

Bandant išvesti skaičių per kablelį (`float`, `double`), galima nurodyti kiek maksimaliai skaičių bus atvaizduojama po kablelio:

```cpp
setprecision(<skaicius>)
```

Panaudojimas:

```cpp
double skaicius = 8.58455;
cout << setprecision(3) << skaicius << endl; // 8.58

skaicius = 9.54;
cout << setprecision(5) << skaicius << endl; // 9.54
```

### Skaičių po kablelio užfiksavimas

Jeigu norima išvesti būtinai išvesti tam tikrą kiekį skaičių po kablelio, tai galima užfiksuoti su `fixed` raktažodžiu, kuris likusias vietas užpildys nuliais:

```cpp
fixed
```

Panaudojimas:

```cpp
double skaicius = 8.58455;
cout << fixed << setprecision(3) << skaicius << endl; // 8.585

skaicius = 9.54;
cout << fixed << setprecision(5) << skaicius << endl; // 9.54000
```

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
    // sukuriamas išvedimo srauto operatorius
    ofstream rezultatai;

    // atsidaromas failas išvedimui
    rezultatai.open("rezultatai.txt");

    // išvedama informacija į failą
    rezultatai << "koks nors tekstas" << endl;
    rezultatai << "dar teksto, kitoje eiluteje" << endl;

    // failas uždaromas
    rezultatai.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
koks nors tekstas
dar teksto, kitoje eiluteje

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
    // sukuriamas srauto operatorius išvedimui ir atidaromas failas išvedimui
    ofstream isvedimas("rezultatai.txt");

    // kintamieji duomenims
    string vardas;
    int amzius;

    // informacijos suvedimas konsolės pagalba
    cout << "Iveskite savo varda: ";
    cin >> vardas;
    cout << "Iveskite amziu: ";
    cin >> amzius;

    // informacijos išvedimas į failą
    isvedimas << "Ivestas vardas: " << vardas << endl;
    isvedimas << "Bei amzius: " << amzius << endl;

    // failo uždarymas
    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
Ivestas vardas: Ieva
Bei amzius: 99

```
</code-block>
</code-group>

Konsolė:

```
Iveskite savo varda: Ieva
Iveskite amziu: 99
```

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
    ofstream isvedimas("rezultatai.txt");

    int skaiciai[] = { 8, 5, 3, 5, 4 };
    int kiekis = 5;

    for (int i = 0; i < kiekis; i++)
    {
        isvedimas << skaiciai[i] << " ";
    }

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
8 5 3 5 4 
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
    ofstream isvedimas("rezultatai.txt");

    string vardai[] = { "Tomas", "Petras", "Gintare", "Inga" };
    int amziai[] = { 70, 60, 30, 40 };
    int kiekis = 4;

    for (int i = 0; i < kiekis; i++)
    {
        isvedimas << vardai[i] << " " << amziai[i] << endl;
    }

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
Tomas 70
Petras 60
Gintare 30
Inga 40

```
</code-block>
</code-group>

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
    ofstream isvedimas("rezultatai.txt");

    string vardai[] = { "Tomas", "Petras", "Gintare", "Inga" };
    int amziai[] = { 70, 60, 30, 40 };
    int kiekis = 4;

    isvedimas << "+---------------+--------+\n";
    isvedimas << "| Vardas        | Amzius |\n";
    isvedimas << "+---------------+--------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        isvedimas << "| " << setw(13) << left
            << vardai[i] << " | " << setw(6)
            << left << amziai[i] << " |\n";
    }

    isvedimas << "+---------------+--------+\n";

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
+---------------+--------+
| Vardas        | Amzius |
+---------------+--------+
| Tomas         | 70     |
| Petras        | 60     |
| Gintare       | 30     |
| Inga          | 40     |
+---------------+--------+

```
</code-block>
</code-group>

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
    ofstream isvedimas("rezultatai.txt");

    string vardai[] = { "Tomas", "Petras", "Gintare", "Inga" };
    double ugiai[] = { 1.85, 1.755, 1.7, 1.6 };
    int kiekis = 4;

    isvedimas << "+---------------+----------+\n";
    isvedimas << "| Vardas        | Ugis, m. |\n";
    isvedimas << "+---------------+----------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        isvedimas << "| " << setw(13) << left
            << vardai[i] << " | " << setw(8)
            << left << setprecision(2) << ugiai[i] << " |\n";
    }

    isvedimas << "+---------------+----------+\n";

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
+---------------+----------+
| Vardas        | Ugis, m. |
+---------------+----------+
| Tomas         | 1.9      |
| Petras        | 1.8      |
| Gintare       | 1.7      |
| Inga          | 1.6      |
+---------------+----------+

```
</code-block>
</code-group>

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
    ofstream isvedimas("rezultatai.txt");

    int skaiciai[] = { 8, 5, 4, 3, 2, 1, 5, 6 };
    int kiekis = 8;

    for (int i = 0; i < kiekis; i++)
    {
        isvedimas << skaiciai[i] << endl;
    }

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
8
5
4
3
2
1
5
6

```
</code-block>
</code-group>

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
    ofstream isvedimas("rezultatai.txt");

    int skaiciai[] = { 8, 5, 4, 3, 2, 1, 5, 6 };
    int kiekis = 8;

    isvedimas << "Skaiciai: ";
    int suma = 0;

    for (int i = 0; i < kiekis; i++)
    {
        isvedimas << skaiciai[i] << " ";
        suma += skaiciai[i];
    }

    isvedimas << endl;
    isvedimas << "Siu skaiciu suma: " << suma;

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
Skaiciai: 8 5 4 3 2 1 5 6 
Siu skaiciu suma: 34
```
</code-block>
</code-group>

### Pavyzdys 9

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main()
{
    ofstream isvedimas("rezultatai.txt", ios::app);

    isvedimas << "tekstas" << endl;

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
tekstas
tekstas
tekstas

```
</code-block>
</code-group>

:::tip Pastaba
Kiekvieną kartą paleidus programą, failas yra pildomas toliau, o ne perrašomas.
:::


### Pavyzdys 10

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
#include <ctime>
using namespace std;

int main()
{
    ofstream isvedimas("rezultatai.txt");

    srand(time(NULL));

    int kiek;
    cout << "Kiek skaiciu irasyti? ";
    cin >> kiek;
    
    for (int i = 0; i < kiek; i++)
    {
        isvedimas << rand() % 100 << " ";
    }

    isvedimas.close();

    return 0;
}
```
</code-block>

<code-block title="rezultatai.txt">
```
86 28 61 91 20 93 66 53 86 8 
```
</code-block>
</code-group>

Rezultatai:

```
Kiek skaiciu irasyti? 10
```

## Užduotys

Informacija ruošiama.
