# `else if` dalis

## Vaizdo pamoka

Informacija ruošiama.

## Apie `else if` dalį

- Naudojant tik `if` dalį tikriausiai pastebėjote, kad tikrinate tik vieną dalyką. `else if` leidžia tikrinti kelis dalykus vieną po kito. Pavyzdžiui:
  - Ar skaičius teigiamas? Jei ne - sekantis tikrinimas: o gal skaičius neigiamas?
  - Ar vartotojui yra 18 metų? Jei ne - sekantis tikrinimas: o gal vartotojui yra 16 metų? Jei ne - sekantis tikrinimas - o gal vartotojui mažiau nei 16?
- Galima naudoti tiek `else if` dalių kiek tik reikia.
- Kiekviena `else if` dalis atsakinga už naujos sąlygos patikrinimą.
- Jei tikrinant skirtingas sąlygas (einant per if ir `else if` dalis) yra randama teisinga, tuomet jai priskirtas kodas yra įvykdomas ir sekančios sąlygos nebetikrinamos. T.y. yra vykdoma tik pirma teisinga sąlyga.

## `else if` dalies sintaksė

```cpp
if (pirma sąlyga)
{
    // jeigu pirma salyga true - vykdomas čia esantis kodas
}
else if (antra sąlyga)
{
    // jeigu antra salyga true - vykdomas čia esantis kodas
}
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (5 > 8)
	{
		cout << "5 > 8";
	}
	else if (7 > 3)
	{
		cout << "7 > 3";
	}
	else if (1 == 1)
	{
		cout << "1 == 1";
	}
}
```

Rezultatai:

```
7 > 3
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 3;

	if (skaicius == 1)
	{
		cout << "skaicius yra 1";
	}
	else if (skaicius == 2)
	{
		cout << "skaicius yra 2";
	}
	else if (skaicius == 3)
	{
		cout << "skaicius yra 3";
	}
	else if (skaicius == 4)
	{
		cout << "skaicius yra 4";
	}
}
```

Rezultatai:

```
skaicius yra 3
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pinigai = 10;
	bool vip = true;

	if (vip)
	{
		cout << "vip iejimas";
	}
	else if (pinigai >= 5)
	{
		cout << "galite nusipirkti bilieta";
	}
}
```

Rezultatai:

```
vip iejimas
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pinigai;
	bool vip;

	cout << "Ar turite vip statusa? (1 - taip; 0 - ne)" << endl;
	cin >> vip;

	cout << "Kiek pinigu turite?" << endl;
	cin >> pinigai;

	if (vip)
	{
		cout << "vip iejimas";
	}
	else if (pinigai >= 5)
	{
		cout << "galite nusipirkti bilieta";
	}
}
```

Rezultatas 1:

```
Ar turite vip statusa? (1 - taip; 0 - ne)
1
Kiek pinigu turite?
55
vip iejimas
```

Rezultatas 2:

```
Ar turite vip statusa? (1 - taip; 0 - ne)
0
Kiek pinigu turite?
88
galite nusipirkti bilieta
```

Rezultatas 3:

```
Ar turite vip statusa? (1 - taip; 0 - ne)
0
Kiek pinigu turite?
2

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int amzius;
	cout << "iveskite savo amziu: ";
	cin >> amzius;

	if (amzius >= 18)
	{
		cout << "esate pilnametis";
	}
	else if (amzius >= 16)
	{
		cout << "jusu amzius yra 16 arba 17";
	}
	else if (amzius < 16)
	{
		cout << "jums yra iki 16 metu";
	}
}
```

Rezultatas 1:

```
iveskite savo amziu: 15
jums yra iki 16 metu
```

Rezultatas 2:

```
iveskite savo amziu: 16
jusu amzius yra 16 arba 17
```

Rezultatas 3:

```
iveskite savo amziu: 18
esate pilnametis
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string gyvunas;
	cout << "iveskite gyvuna: ";
	cin >> gyvunas;

	if (gyvunas == "suo")
	{
		cout << "ivestas gyvunas yra suo" << endl;
	}
	else if (gyvunas == "kate")
	{
		cout << "ivestas gyvunas yra kate" << endl;
	}
	else if (gyvunas == "ziurkenas")
	{
		cout << "ivestas gyvunas yra ziurkenas" << endl;
	}
	else if (gyvunas == "triusis")
	{
		cout << "ivestas gyvunas yra triusis" << endl;
	}

    cout << "dar kazkas toliau";
}
```

Rezultatas 1:

```
iveskite gyvuna: suo
ivestas gyvunas yra suo
dar kazkas toliau
```

Rezultatas 2:

```
iveskite gyvuna: kate
ivestas gyvunas yra kate
dar kazkas toliau
```

Rezultatas 3:

```
iveskite gyvuna: zirafa
dar kazkas toliau
```

Rezultatas 4:

```
iveskite gyvuna: triusis
ivestas gyvunas yra triusis
dar kazkas toliau
```

## Užduotys

### Užduotis 1

Liepkite vartotojui įvesti tris skaičius. Parašykite šiuos patikrinimus, naudojant `else if` dalis:

- Ar pirmas skaičius didesnis už antrą?
- Ar trečias skaičius didesnis už pirmą?
- Ar pirmi du skaičiai yra lygūs?
- Ar paskutiniai du skaičiai yra lygūs?

### Užduotis 2

iepkite vartotojui įvesti egzamino pažymį [0-10]. Naudojant `else if` dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:

- Jei pažymys yra lygus 10 išvesti "puiku".
- Jei pažymys yra lygus 9 išvesti "labai gerai".
- Jei pažymys yra lygus arba didesnis nei 7 išvesti "gerai".
- Jei pažymys yra lygus arba didesnis nei 5 išvesti "patenkinamai".
- Jei pažymys mažesnis nei 5 išvesti "egzaminas neišlaikytas".
