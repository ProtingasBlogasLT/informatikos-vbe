# Ciklas for

## Vaizdo pamoka

Informacija ruošiama.

## Apie `for` ciklą

Šis ciklas dažniausiai naudojamas kai yra žinoma kiek kartų jis turi būti vykdomas.

## Ciklo `for` sintaksė

```cpp
for (<kintamasis>; <sąlyga>; <veiksmas>)
{
    // kodas
}
```

- **kintamasis** - ciklo darbui reikalingas kintamasis, kuris bus sunaikintas ciklui baigus darbą, dažniausiai naudojamas norint suvaldyti kiek kartų ciklas turi būti vykdomas.
- **sąlyga** - ciklas bus vykdomas kol sąlyga bus teisinga (grąžins true), sąlyga apsirašo tokiu pačiu principu kaip apsirašydavo patikrinimo sąlygoje if.
- **veiksmas** - kas bus daroma kiekvienos ciklo iteracijos metu, dažniausiai - didinamas kintamasis.
- **kodas** - kodas, kuris bus vykdomas jei sąlyga teisinga.

## Pavyzdžiai (1 dalis)

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 0; i < 10; i++)
	{
		cout << i << endl;
	}
}
```

Rezultatai:

```
0
1
2
3
4
5
6
7
8
9

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 5; i <= 10; i++)
	{
		cout << i << " ";
	}
}
```

Rezultatai:

```
5 6 7 8 9 10 
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 5; i <= 50; i += 5)
	{
		cout << "[" << i << "] ";
	}
}
```

Rezultatai:

```
[5] [10] [15] [20] [25] [30] [35] [40] [45] [50] 
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 2; i <= 10; i++)
	{
		if (i % 2 == 0)
		{
			cout << "skaicius " << i << " yra lyginis" << endl;
		}
	}
}
```

Rezultatai:

```
skaicius 2 yra lyginis
skaicius 4 yra lyginis
skaicius 6 yra lyginis
skaicius 8 yra lyginis
skaicius 10 yra lyginis

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 1; i <= 25; i++)
	{
		if (i % 2 == 0 || i % 5 == 0)
		{
			cout << "skaicius " << i << " dalinasi is 2 arba 5\n";
		}
	}
}
```

Rezultatai:

```
skaicius 2 dalinasi is 2 arba 5
skaicius 4 dalinasi is 2 arba 5
skaicius 5 dalinasi is 2 arba 5
skaicius 6 dalinasi is 2 arba 5
skaicius 8 dalinasi is 2 arba 5
skaicius 10 dalinasi is 2 arba 5
skaicius 12 dalinasi is 2 arba 5
skaicius 14 dalinasi is 2 arba 5
skaicius 15 dalinasi is 2 arba 5
skaicius 16 dalinasi is 2 arba 5
skaicius 18 dalinasi is 2 arba 5
skaicius 20 dalinasi is 2 arba 5
skaicius 22 dalinasi is 2 arba 5
skaicius 24 dalinasi is 2 arba 5
skaicius 25 dalinasi is 2 arba 5

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int kiek;
	cout << "Iveskite kiek skaiciu parodyti: ";
	cin >> kiek;

	cout << "Skaiciai:\n";

	for (int i = 1; i <= kiek; i++)
	{
		cout << i << endl;
	}
}
```

Rezultatas 1:

```
Iveskite kiek skaiciu parodyti: 5
Skaiciai:
1
2
3
4
5

```

Rezultatas 2:

```
Iveskite kiek skaiciu parodyti: 9
Skaiciai:
1
2
3
4
5
6
7
8
9

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pradzia, pabaiga;

	cout << "Iveskite reziu pradia: ";
	cin >> pradzia;

	cout << "Iveskite reziu pabaiga: ";
	cin >> pabaiga;

	cout << "Skaiciai patenkantys i rezius [" << pradzia << "-" << pabaiga << "]: ";

	for (int i = pradzia; i <= pabaiga; i++)
	{
		cout << i << " ";
	}
}
```

Rezultatas 1:

```
Iveskite reziu pradia: 4
Iveskite reziu pabaiga: 6
Skaiciai patenkantys i rezius [4-6]: 4 5 6
```

Rezultatas 2:

```
Iveskite reziu pradia: 12
Iveskite reziu pabaiga: 18
Skaiciai patenkantys i rezius [12-18]: 12 13 14 15 16 17 18
```

Rezultatas 3:

```
Iveskite reziu pradia: 99
Iveskite reziu pabaiga: 107
Skaiciai patenkantys i rezius [99-107]: 99 100 101 102 103 104 105 106 107
```

Rezultatas 4:

```
Iveskite reziu pradia: -10
Iveskite reziu pabaiga: 0
Skaiciai patenkantys i rezius [-10-0]: -10 -9 -8 -7 -6 -5 -4 -3 -2 -1 0
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 0; i < 5; i++)
	{
		cout << i << " ";
	}

	cout << endl;

	for (int i = 0; i <= 5; i++)
	{
		cout << i << " ";
	}

	cout << endl;

	for (int i = 1; i < 5; i++)
	{
		cout << i << " ";
	}

	cout << endl;

	for (int i = 1; i <= 5; i++)
	{
		cout << i << " ";
	}
}
```

Rezultatai:

```
0 1 2 3 4
0 1 2 3 4 5
1 2 3 4
1 2 3 4 5
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 0; i < 5; i++)
	{
		cout << i << " ";
	}

	cout << endl;

	for (int i = 0; i < 5; i++)
	{
		cout << i+1 << " ";
	}
}
```

Rezultatai:

```
0 1 2 3 4
1 2 3 4 5
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 1; i <= 5; i++)
	{
		for (int j = 1; j <= 3; j++)
		{
			cout << "i = " << i << ", j = " << j << endl;
		}
		cout << endl;
	}
}
```

Rezultatai:

```
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3

i = 2, j = 1
i = 2, j = 2
i = 2, j = 3

i = 3, j = 1
i = 3, j = 2
i = 3, j = 3

i = 4, j = 1
i = 4, j = 2
i = 4, j = 3

i = 5, j = 1
i = 5, j = 2
i = 5, j = 3


```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 1; i <= 5; i++)
	{
		for (int j = 1; j <= 5; j++)
		{
			cout << i * j << " ";
		}
		cout << endl;
	}
}
```

Rezultatai:

```
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25

```

### Pavyzdys 12

Kodas:

```cpp
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
	for (int i = 1; i <= 5; i++)
	{
		for (int j = 1; j <= 5; j++)
		{
			cout << setw(2) << i * j << " ";
		}
		cout << endl;
	}
}
```

Rezultatai:

```
 1  2  3  4  5
 2  4  6  8 10
 3  6  9 12 15
 4  8 12 16 20
 5 10 15 20 25

```

### Pavyzdys 13

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 0; true; i++) // salyga visada true, todel gausis begalinis ciklas
	{
		cout << i << endl;

		if (i >= 5)
		{
			break; // nutraukia artimiausia cikla
		}
	}
}
```

Rezultatai:

```
0
1
2
3
4
5

```

### Pavyzdys 14

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (int i = 1; i < 7; i++)
	{
		if (i == 2 || i == 4)
		{
			// su continue grizta i ciklo pradzia,
			// nepabaiges iteracijos iki pabaigos
			continue;
		}

		cout << i << endl;
	}
}
```

Rezultatai:

```
1
3
5
6

```

### Pavyzdys 15

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	for (;;) // begalinis ciklas
	{
		cout << "zodis ";
	}
}
```

Rezultatai:

```
zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis zodis....
```

## Užduotys (1 dalis)

### Užduotis 1

Parašyti for, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10. Kiekvieną skaičių išvesti skirtingoje eilutėje.

### Užduotis 2

Parašyti for, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15. Kiekvieną skaičių išvesti toje pačioje eilutėje, po kiekvieno skaičiaus dedant tarpą.

### Užduotis 3

Parašyti for, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių išvesti toje pačioje eilutėje tačiau apskliaudžiant laužtiniais skliaustais. Pvz.: `[1][4][7]`...

### Užduotis 4

Parašyti `for`, kuris eitų pro kiekvieną skaičių nuo 1 iki 10. Jame apsirašyti if sąlygą, kuri patikrintų ar dabartinis skaičius yra lyginis, jei taip tai šį skaičių išvesti.

### Užduotis 5

Liepkite vartotojui įvesti rėžių pradžią ir pabaigą. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.

### Užduotis 6

Liepkite vartotojui įvesti rėžių pradžią ir pabaigą. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti for, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.

### Užduotis 7 (sudėtingesnė)

Be daugybos veiksmo programoje, sudauginti du skaičius.

## Pavyzdžiai (2 dalis)

### Pavyzdys 16

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int suma = 0;

	for (int i = 1; i <= 10; i++)
	{
		suma += i;
	}

	cout << "skaiciu [1-10] suma: " << suma;
}
```

Rezultatai:

```
skaiciu [1-10] suma: 55
```

### Pavyzdys 17

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int suma = 0;

	for (int i = 1; i <= 10; i++)
	{
		if (i % 2 == 0)
		{
			suma += i;
		}
	}

	cout << "lyginiu skaiciu, kurie patenka i rezius [1-10] suma: " << suma;
}
```

Rezultatai:

```
lyginiu skaiciu, kurie patenka i rezius [1-10] suma: 30
```

## Užduotys (2 dalis)

### Užduotis 8

Raskite visų skaičių nuo 1 iki 100 sumą.

### Užduotis 9

Raskite visų lyginių skaičių nuo 20 iki 50 sumą.

### Užduotis 10

Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.

### Užduotis 11

Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą.

::: tip Pavyzdys

Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.

Šių skaičių suma yra 23.

:::

Turite gauti 233168 atsakymą.

### Užduotis 12

Viena iš populiarų programavimo patikrinimo užduočių vadinama "Fizz-Buzz". Jos aprašas žemiau:

> The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:
> 
> "Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”."

### Užduotis 13 (sudėtingesnė)

Parašykite for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių dviejų skaičių sumai: `1, 1, 2, 3, 5, 8, 13, 21`...

Pagalba kaip atlikti užduotį:

- Susikurkite tris sveikųjų skaičių kintamuosius. Pirmi du kintamieji saugos paskutinius du skaičius. Trečiasis bus šių pirmų dviejų skaičių suma.
- Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite vykdyti nuo 2, o ne nuo 0.
- Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių (pirmų dviejų skaičių sudėtis), tuomet pirmojo skaičiaus reikšmę pakeisti į tokią kokia yra saugoma antrąjame, o antrojo kintamojo reikšmę - į trečiojo. Išvesti į ekraną trečią skaičių.
