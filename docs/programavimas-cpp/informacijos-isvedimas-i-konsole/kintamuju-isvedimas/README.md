# Kintamųjų išvedimas

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pg4cI3nXs-Q?start=8169&end=9570" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apie kintamųjų išvedimą

- Programos dažniausiai būna skirtos darbui su turimais duomenimis. Pirmas, bet paprasčiausias dalykas ką galime atlikti su kintamaisiais yra juos išvesti į konsolės langą.
- Išvedant reikia naudoti kintamojo pavadinimą, nes jis išlieka toks pat visoje programos eigoje (reikšmė gali keistis jei yra aprašytas ją pakeičiantis kodas).
- Išvedime, nors ir naudosime kintamojo pavadinimą, bus išvesta kintamojo reikšmė.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas = "Jonas";
	int amzius = 50;

	cout << vardas << endl;
	cout << amzius << endl;
}
```

Rezultatas:

```
Jonas
50

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas = "Jonas";
	int amzius = 50;

	cout << vardas << endl << amzius << endl;
}
```

Rezultatas:

```
Jonas
50

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string marke = "ajsh";
	string modelis = "sjghjdsg";
	int metai = 2014;

	cout << marke << endl;
	cout << modelis << endl;
	cout << metai << endl;
}
```

Rezultatas:

```
ajsh
sjghjdsg
2014

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string marke = "ajsh";
	string modelis = "sjghjdsg";
	int metai = 2014;

	cout << marke << "\n" << modelis << "\n" << metai;
}
```

Rezultatas:

```
ajsh
sjghjdsg
2014
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string marke = "ajsh";
	string modelis = "sjghjdsg";
	int metai = 2014;

	cout << marke << modelis << metai;
}
```

Rezultatas:

```
ajshsjghjdsg2014
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string marke = "ajsh";
	string modelis = "sjghjdsg";
	int metai = 2014;

	cout << marke << " " << modelis << " " << metai;
}
```

Rezultatas:

```
ajsh sjghjdsg 2014
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas = "Petras";
	int amzius = 45;

	cout << vardas << amzius << endl;
}
```

Rezultatas:

```
Petras45

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas = "Petras";
	int amzius = 45;

	cout << vardas;
	cout << amzius;
}
```

Rezultatas:

```
Petras45
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 45;
	cout << skaicius << endl;

	skaicius = 30;
	cout << skaicius << endl;
}
```

Rezultatas:

```
45
30

```

## Užduotys

### Užduotis 1

Susikurkite kintamuosius su reikšmėmis studento vardui, pavardei, amžiui, grupės kodui. Juos išveskite konsolėje, atskirose eilutėse.

### Užduotis 2

Susikurkite skaičiaus kintamąjį su reikšme. Išveskite šį skaičių toje pačioje eilutėje 5 kartus. Pavyzdžiui: skaičius = 5, tai turi išvesti 55555.

### Užduotis 3

Susikurkite kintamuosius su reikšmėmis stalui apibūdinti: aukštis, plotis, ilgis, kojų skaičius, gamintojas. Išveskite visus šiuos duomenis atskirose eilutėse.
