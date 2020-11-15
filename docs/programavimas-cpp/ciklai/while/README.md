# Ciklas while

## Vaizdo pamoka

Informacija ruošiama.

## Apie ciklą `while`

Šis ciklas dažniausiai naudojamas kai nežinome kiek kartų ciklas turėtų būti vykdomas. Pavyzdžiui:

- Nuskaitinėjame failą, tačiau nežinome kiek teksto eilučių jame yra.
- Bandome iš vartotojo gauti duomenis, tačiau nežinome iš kelinto karto jis sugebės suvesti duomenis tvarkingai.
- Vykdome skaičiavimus ir norime juos vykdyti iki kol pasieksime tinkamą rezultatą.
- ...

## Ciklo `while` sintaksė

```cpp
while (sąlyga) {
    // kodas
}
```

- **sąlyga** - ciklas bus vykdomas tol kol sąlyga bus teisinga (grąžins `true`), sąlygos užrašymo būdas yra lygiai toks pats kaip prie patikrinimo sąlygos `if`.
- **kodas** - bus įvykdomas norimas kodas, kai sąlyga teisinga.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius < 10)
	{
		cout << skaicius << endl;
		skaicius++;
	}
}
```

Rezultatai:

```
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
	int skaicius = 1;

	while (true)
	{
		if (skaicius >= 5)
		{
			break;
		}

		cout << skaicius << endl;
		skaicius++;
	}
}
```

Rezultatai:

```
1
2
3
4

```

### Atsitiktinis skaičius

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

int main()
{
    // sukuria seed, kuris bus naudojamas atsitiktinio skaiciaus generavimui
	srand(time(NULL));

	int atsitiktinis = rand() % 10 + 1; // nuo 1 iki 10

	int v1 = rand() % 100;         // nuo 0 iki 99
	int v2 = rand() % 100 + 1;     // nuo 1 iki 100
	int v3 = rand() % 30 + 1985;   // nuo 1985 iki 2014

	cout << atsitiktinis << endl
		<< v1 << endl
		<< v2 << endl
		<< v3;
}
```

Rezultatas 1:

```
6
97
24
1991
```

Rezultatas 2:

```
8
63
76
1990
```

Rezultatas 3:

```
7
18
57
2000
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

int main()
{
	srand(time(NULL));

	int kiekis = 10;

	while (kiekis >= 0)
	{
		cout << "turimu kiekis: " << kiekis << endl;
		kiekis -= rand() % 3 + 1;
	}
}
```

Rezultatas 1:

```
turimu kiekis: 10
turimu kiekis: 8
turimu kiekis: 7
turimu kiekis: 6
turimu kiekis: 4
turimu kiekis: 2
turimu kiekis: 1

```

Rezultatas 2:

```
turimu kiekis: 10
turimu kiekis: 7
turimu kiekis: 5
turimu kiekis: 3
turimu kiekis: 2

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 0;

	while (skaicius < 10)
	{
		skaicius++;

		if (skaicius == 2 || skaicius == 4 || skaicius == 7)
		{
			continue;
		}

		cout << skaicius << endl;
	}
}
```

Rezultatai:

```
1
3
5
6
8
9
10

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

int main()
{
	srand(time(NULL));

	while (true)
	{
		int skaicius = rand() % 100 + 1;
		cout << skaicius << endl;

		if (skaicius % 2 == 0 && skaicius % 7 == 0)
		{
			cout << "skaicius " << skaicius << " dalinasi is 2 ir is 7" << endl;
			break;
		}
	}
}
```

Rezultatas 1:

```
97
87
80
35
37
91
24
23
43
3
24
81
4
28
skaicius 28 dalinasi is 2 ir is 7

```

Rezultatas 2:

```
30
67
14
skaicius 14 dalinasi is 2 ir is 7

```

Rezultatas 3:

```
72
56
skaicius 56 dalinasi is 2 ir is 7

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

int main()
{
	srand(time(NULL));

	int kiekis = 0;

	while (kiekis <= 10)
	{
		int skaicius = rand() % 100 + 1;
		cout << skaicius;

		if (skaicius % 2 == 0)
		{
			cout << " yra lyginis";
		}

		cout << endl;
		kiekis++;
	}
}
```

Rezultatas 1:

```
83
73
40 yra lyginis
28 yra lyginis
78 yra lyginis
15
80 yra lyginis
22 yra lyginis
7
95
93

```

Rezultatas 2:

```
13
5
77
22 yra lyginis
5
20 yra lyginis
24 yra lyginis
77
40 yra lyginis
98 yra lyginis
61

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

int main()
{
	srand(time(NULL));

	int kiekis = 0;
	int suma = 0;

	while (kiekis <= 10)
	{
		int skaicius = rand() % 100 + 1;
		cout << skaicius;

		if (skaicius % 2 == 0)
		{
			suma += skaicius;
			cout << " yra lyginis";
		}

		cout << endl;
		kiekis++;
	}

	cout << "lyginiu skaiciu suma: " << suma;
}
```

Rezultatas 1:

```
52 yra lyginis
27
75
38 yra lyginis
77
84 yra lyginis
39
20 yra lyginis
41
59
79
lyginiu skaiciu suma: 194
```

Rezultatas 2:

```
8 yra lyginis
42 yra lyginis
54 yra lyginis
31
85
2 yra lyginis
14 yra lyginis
25
94 yra lyginis
46 yra lyginis
65
lyginiu skaiciu suma: 260
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

int main()
{
	srand(time(NULL));

	int skaicius = 0;

	while (skaicius < 10)
	{
		cout << skaicius << endl;
		skaicius = rand() % 15 + 1;
	}
}
```

Rezultatas 1:

```
0
1
4

```

Rezultatas 2:

```
0
5
9
7
6
9

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char veiksmas = 't';

	while (veiksmas == 't')
	{
		cout << "yey! as cikle!" << endl
			<< "ar norite testi? (t/n)" << endl;
		cin >> veiksmas;
	}
}
```

Rezultatas 1:

```
yey! as cikle!
ar norite testi? (t/n)
t
yey! as cikle!
ar norite testi? (t/n)
t
yey! as cikle!
ar norite testi? (t/n)
t
yey! as cikle!
ar norite testi? (t/n)
t
yey! as cikle!
ar norite testi? (t/n)
t
yey! as cikle!
ar norite testi? (t/n)
n

```

Rezultatas 2:

```
yey! as cikle!
ar norite testi? (t/n)
t
yey! as cikle!
ar norite testi? (t/n)
n

```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;

	cout << "Iveskite skaiciu, kuris patektu i rezius [1-100]: ";
	cin >> skaicius;

	while (skaicius < 0 || skaicius > 100)
	{
		cout << "Blogai ivestas skaicius" << endl
			<< "Bandykite dar karta:" << endl;
		cin >> skaicius;
	}

	cout << "Sekmingai ivesta!" << endl;
	cout << "Ivestas skaicius: " << skaicius;
}
```

Rezultatas 1:

```
Iveskite skaiciu, kuris patektu i rezius [1-100]: 5
Sekmingai ivesta!
Ivestas skaicius: 5
```

Rezultatas 2:

```
Iveskite skaiciu, kuris patektu i rezius [1-100]: -688
Blogai ivestas skaicius
Bandykite dar karta:
9999
Blogai ivestas skaicius
Bandykite dar karta:
50
Sekmingai ivesta!
Ivestas skaicius: 50
```

Rezultatas 3:

```
Iveskite skaiciu, kuris patektu i rezius [1-100]: 8454
Blogai ivestas skaicius
Bandykite dar karta:
15
Sekmingai ivesta!
Ivestas skaicius: 15
```

Rezultatas 4:

```
Iveskite skaiciu, kuris patektu i rezius [1-100]: 84848
Blogai ivestas skaicius
Bandykite dar karta:
4144
Blogai ivestas skaicius
Bandykite dar karta:
1515
Blogai ivestas skaicius
Bandykite dar karta:
51544
Blogai ivestas skaicius
Bandykite dar karta:
10
Sekmingai ivesta!
Ivestas skaicius: 10
```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "Pasirinkite:\n"
		<< "1 - jei x priezastis\n"
		<< "2 - jei y priezastis\n"
		<< "3 - jei z priezastis\n";

	int pasirinkimas;
	cin >> pasirinkimas;

	while (pasirinkimas != 1 && pasirinkimas != 2 && pasirinkimas != 3)
	{
		cout << "Blogas pasirinkimas, bandykite dar karta: ";
		cin >> pasirinkimas;
	}

	cout << "Pasirinkta: " << pasirinkimas;
}
```

Rezultatas 1:

```
Pasirinkite:
1 - jei x priezastis
2 - jei y priezastis
3 - jei z priezastis
9
Blogas pasirinkimas, bandykite dar karta: 4
Blogas pasirinkimas, bandykite dar karta: 2
Pasirinkta: 2
```

Rezultatas 2:

```
Pasirinkite:
1 - jei x priezastis
2 - jei y priezastis
3 - jei z priezastis
1
Pasirinkta: 1
```

Rezultatas 3:

```
Pasirinkite:
1 - jei x priezastis
2 - jei y priezastis
3 - jei z priezastis
0
Blogas pasirinkimas, bandykite dar karta: 0
Blogas pasirinkimas, bandykite dar karta: 0
Blogas pasirinkimas, bandykite dar karta: 0
Blogas pasirinkimas, bandykite dar karta: 0
Blogas pasirinkimas, bandykite dar karta: 8
Blogas pasirinkimas, bandykite dar karta: 6
Blogas pasirinkimas, bandykite dar karta: 3
Pasirinkta: 3
```

## Užduotys

### Užduotis 1

Išveskite visus skaičius nuo 1 iki 20.

### Užduotis 2

Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį "lyginis", o prie kiekvieno nelyginio – "nelyginis".

### Užduotis 3

Išveskite visus skaičius nuo 1 iki 100, kiekvieną skaičių atskiriant kableliu, bei nekeliant skaičių į naujas eilutes.

### Užduotis 4

Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą "dalinasi iš 3".

### Užduotis 5

Iš skaičių nuo 1 iki 100, raskite visų lyginių ir visų nelyginių skaičių sumas. Naudokite tą patį ciklą abiems šiems veiksmams.

### Užduotis 6

Išveskite 10 atsitiktinių skaičių, raskite jų sumą.

### Užduotis 7

Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.

### Užduotis 8

Nekeliant į atskiras eilutes, o atskiriant kableliu išveskite 100 atsitiktinių skaičių. Raskite visų jų sumą ir vidurkį.

### Užduotis 9

Raskite visų skaičių nuo 1 iki 10 sandaugą. Išveskite tik atsakymą, neišvedant pačių skaičių.

### Užduotis 10

Išveskite skaičius nuo 1 iki 50. Šalia skaičiaus parašykite iš kokių skaičių (1-9) jis dalinasi. Pavyzdžiui:

```
Skaičius 2 dalinasi iš: 2
Skaičius 3 dalinasi iš: 3
Skaičius 4 dalinasi iš: 2 4
...
```

### Užduotis 11

Liepkite vartotojui įvedinėti bet kokius skaičius. Vykdykite įvedinėjimą iki kol įvestas skaičius bus lygus 0. Raskite įvestų skaičių sumą.
