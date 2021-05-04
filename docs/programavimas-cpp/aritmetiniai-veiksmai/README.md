# Aritmetiniai veiksmai

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/Bvk2d1fAGPo?start=2170&end=7230" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apie aritmetinius veiksmus

- Skaičiavimuose gali prireikti ką nors sudauginti, padalinti, sudėti ar atimti, todėl tokius veiksmus galite atlikti ir su C++ pagalba.
- Aritmetinius veiksmus galima naudoti bet kur, kur prireikia: kuriant kintamuosius ir iškart pasiskaičiuojant jo reikšmę, išvedant ką nors, patikrinimo sąlygose ir pan.
- Skaičiavimai atliekami tokia tvarka kaip nusako matematika: daugyba ir dalyba, tuomet sudėtis ir atimtis.
- Jeigu reikia, eiliškumą galima pakeisti naudojant skliaustus.

## Aritmetiniai operatoriai

| Operatorius | Pavadinimas | Pavyzdys | Apibūdinimas |
|-|-|-|-|
| `+` | Sudėtis | `x + y` | `x` ir `y` skaičių suma |
| `-` | Atimtis | `x - y` | skirtumas atėmus `y` iš `x` |
| `*` | Daugyba | `x * y` | `x` ir `y` sandauga |
| `/` | Dalyba | `x / y` | dalmuo padalinus `x` iš `y` |
| `%` | Modulis | `x % y` | liekana padalinus `x` iš `y` |

## Priskyrimo operatoriai

| Priskyrimas | Tas pats kaip... | Apibūdinimas |
|-|-|-|
| `x = y` | `x = y` | Kairys operandas įgaus reikšmę kuri yra dešinėje pusėje |
| `x += y` | `x = x + y` | Sudėtis |
| `x -= y` | `x = x - y` | Atimtis |
| `x *= y` | `x = x * y` | Daugyba |
| `x /= y` | `x = x / y` | Dalyba |
| `x %= y` | `x = x % y` | Liekana |

## Didinimo / mažinimo operatoriai

| Operatorius | Pavadinimas | Apibūdinimas |
|-|-|-|
| `++x` | prieš-didinimas | Padidins `x` vienu, tada grąžins `x` |
| `x++` | po-didinimas | Grąžins `x`, tada padidins `x` vienu |
| `--x` | prieš-mažinimas | Sumažins `x` vienu, tada grąžins `x` |
| `x--` | po-mažinimas | Grąžins `x`, tada sumažins `x` vienu |

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << 5 + 3 << endl;
	cout << 2 * 7 << endl;
	cout << 4 - 7 << endl;
	cout << 4 / 2 << endl;
}
```

Rezultatai:

```
8
14
-3
2

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 7 * 5;
	int antras = pirmas + 2;

	cout << pirmas << endl;
	cout << antras << endl;

	cout << antras - 4 * 2 << endl;
}
```

Rezultatai:

```
35
37
29

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	double skaiciavimas = 10 * (2 + 1) / 5;
	cout << skaiciavimas;
}
```

Rezultatai:

```
6
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << 7 / 3 << endl;
	cout << (double)7 / 3 << endl;
	cout << endl;

	cout << 5 / 2 << endl;
	cout << (double)5 / 2 << endl;
}
```

Rezultatai:

```
2
2.33333

2
2.5

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 7;
	int antras = 3;

	int atsakymas1 = pirmas / antras;
	double atsakymas2 = pirmas / antras;
	int atsakymas3 = (double)pirmas / antras;
	double atsakymas4 = (double)pirmas / antras;

	cout << atsakymas1 << endl << atsakymas2 << endl
		<< atsakymas3 << endl << atsakymas4;
}
```

Rezultatai:

```
2
2
2
2.33333
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 7;
	double antras = 7.0;
	double trecias = (double)7;
	double ketvirtas = 7;

	cout << pirmas / 3 << endl;
	cout << antras / 3 << endl;
	cout << trecias / 3 << endl;
	cout << ketvirtas / 3 << endl;
}
```

Rezultatai:

```
2
2.33333
2.33333
2.33333

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 7;
	int antras = 3;
	double dalmuo = (double)pirmas / antras;
	int liekana = pirmas % antras;

	cout << "dalmuo: " << dalmuo << endl;
	cout << "liekana: " << liekana << endl;
}
```

Rezultatai:

```
dalmuo: 2.33333
liekana: 1

```

::: tip Patarimas
Prisiminkite kaip vyksta dalyba kampu ir bus lengviau suprasti kokiu būdu yra randama liekana.
:::

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << 7 % 4 << endl;
	cout << 8 % 3 << endl;
	cout << 17 % 7 << endl;
}
```

Rezultatai:

```
3
2
3

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 9;
	int antras = 4;

	cout << pirmas << " + " << antras << " = " << pirmas + antras << endl;
	cout << pirmas << " + " << antras << " = " << (pirmas + antras) << endl;

	int suma = pirmas + antras;

	cout << pirmas << " + " << antras << " = " << suma;
}
```

Rezultatai:

```
9 + 4 = 13
9 + 4 = 13
9 + 4 = 13
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 5;
	int antras = 6;

	int suma = pirmas + antras;
	int skirtumas = pirmas - antras;
	int sandauga = pirmas * antras;
	double dalmuo = (double)pirmas / antras;

	cout << pirmas << " + " << antras << " = " << suma << endl;
	cout << pirmas << " - " << antras << " = " << skirtumas << endl;
	cout << pirmas << " * " << antras << " = " << sandauga << endl;
	cout << pirmas << " / " << antras << " = " << dalmuo << endl;
}
```

Rezultatai:

```
5 + 6 = 11
5 - 6 = -1
5 * 6 = 30
5 / 6 = 0.833333

```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int a = 5;
	cout << "a = " << a << endl << endl;

	int b = a++;
	cout << "a = " << a << endl;
	cout << "b = " << b << endl;
}
```

Rezultatai:

```
a = 5

a = 6
b = 5

```

### Pavyzdys 12

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 5;

	cout << "skaicius   = " << skaicius << endl;
	cout << "skaicius++ = " << skaicius++ << endl;
	cout << "skaicius   = " << skaicius << endl;
	cout << "++skaicius = " << ++skaicius << endl;
	cout << "skaicius   = " << skaicius << endl;
	cout << "skaicius++ = " << skaicius++ << endl;
	cout << "skaicius   = " << skaicius << endl;
	cout << "skaicius++ = " << skaicius++ << endl;
	cout << "skaicius   = " << skaicius << endl;
	cout << "skaicius-- = " << skaicius-- << endl;
	cout << "skaicius   = " << skaicius << endl;
	cout << "--skaicius = " << --skaicius << endl;
	cout << "skaicius   = " << skaicius << endl;
}
```

Rezultatai:

```
skaicius   = 5
skaicius++ = 5
skaicius   = 6
++skaicius = 7
skaicius   = 7
skaicius++ = 7
skaicius   = 8
skaicius++ = 8
skaicius   = 9
skaicius-- = 9
skaicius   = 8
--skaicius = 7
skaicius   = 7

```

### Pavyzdys 13

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 5;

	cout << "skaicius: " << skaicius << endl;

	skaicius -= 3;
	cout << "-= 3: " << skaicius << endl;

	skaicius *= 2;
	cout << "*= 2: " << skaicius << endl;

	skaicius += 7;
	cout << "+= 7: " << skaicius << endl;

	skaicius /= 2;
	cout << "/= 2: " << skaicius << endl;
}
```

Rezultatai:

```
skaicius: 5
-= 3: 2
*= 2: 4
+= 7: 11
/= 2: 5

```

### Pavyzdys 14

Kodas:

```cpp
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
	int skaicius = 2;
	int penktas_laipsnis = pow(skaicius, 5);

	cout << "skaicius: " << skaicius << endl;
	cout << "penktas laipsnis: " << penktas_laipsnis << endl;
}
```

Rezultatai:

```
skaicius: 2
penktas laipsnis: 32

```

### Pavyzdys 15

Kodas:

```cpp
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
	int skaicius = 9;
	double saknis = sqrt(skaicius);

	cout << "skaiciaus " << skaicius << " saknis " << saknis;
}
```

Rezultatai:

```
skaiciaus 9 saknis 3
```

### Pavyzdys 16

Kodas:

```cpp
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
	int skaicius = 4;
	cout << "skaiciaus " << skaicius << " saknis " << sqrt(skaicius);
}
```

Rezultatai:

```
skaiciaus 4 saknis 2
```

## Užduotys

### Užduotis 1

Išveskite į ekraną pasirinktą skaičių, jo kvadratą, jį pakeltą trečiu laipsniu.

### Užduotis 2

Susikurkite tris kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir sandaugą.

### Užduotis 3

Susikurkite du kintamuosius skaičiams saugoti. Išveskite šių skaičių sumą ir skirtumą. Išveskite sandaugą, gautą padauginus sumą ir skirtumą. Išveskite dalmenį, gautą padalinus sumą iš skirtumo.

### Užduotis 4

Susikurkite keturis kintamuosius skaičiams saugoti. Išveskite šių skaičių vidurkį.

### Užduotis 5

Išveskite į ekraną dviejų skaičių sumą, skirtumą, sandaugą ir dalmenį, kiekvieną kartą nurodant atliekamą veiksmą ir šių skaičių reikšmes. Pvz.:

```
4 + 5 = 9
4 - 5 = -1
…
```

### Užduotis 6

Išveskite į ekraną šių veiksmų atsakymus:

```
-1 + 4 * 6
(35 + 5) % 7
14 + -4 * 6 / 11
2 + 15 / 6 * 1 - 7 % 2
```

Turite gauti: `23, 5, 12, 3`.

### Užduotis 7

Išveskite norimo skaičiaus daugybos lentelę nuo 1 iki 10. Pavyzdžiui:

```
5 * 1 = 5
5 * 2 = 10
…
5 * 10 = 50
```

### Užduotis 8

Susikurkite dviženklį skaičių. Raskite jo skaitmenų sumą.

Pavyzdžiui: `58` -> `5 + 8 = 13`.

Kad gauti pirmą skaitmenį galima dalinti iš `10` (būtinai kaip `int` iš `int`).

Kad gauti antrą skaitmenį galima dalinti su `%` iš `10`.
