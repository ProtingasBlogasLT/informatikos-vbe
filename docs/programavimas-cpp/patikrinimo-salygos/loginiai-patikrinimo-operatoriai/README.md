# Loginiai patikrinimo operatoriai

## Vaizdo pamoka

Informacija ruošiama.

## Apie loginius patikrinimo operatorius

Loginiai operatoriai naudojami norint patikrinti kelias sąlygas vienu metu (o ne iš eilės kaip tai vyktų su `else if`). Pavyzdžiui:

- Ar vartotojas prisijungęs **IR** ar vartotojas turi atitinkamą rolę?
- Ar failas egzistuoja failų sistemoje **ARBA** yra nustatytas atsarginis failas?
- Ar studentas turi užtektinai pinigų ant bilieto **IR** turi galiojantį LSP?
- Ar skaičius patenka į rėžius (yra didesnis už pradžią **IR** yra mažesnis už pabaigą)?
- Ar prie produkto yra įrašyta kaina **ARBA** produktas pažymėtas kaip nemokamas?
- ...

## Sintaksė naudojant loginius patikrinimo operatorius

```cpp
<sąlyga> <operatorius> <sąlyga>
```

- **sąlyga** - bet kokia sąlyga, kuri grąžina `true` arba `false` atsakymą. Pavyzdžius: `4 > 2`, gražina `true` atsakymą.
- **operatorius** - iš anksto numatytas operatorius, leidžiantis apjungti kelias sąlygas norimu būdu.

Galima apjungti ir daugiau sąlygų:

```cpp
<sąlyga> <operatorius> <sąlyga> <operatorius> <sąlyga>
```

Taip pat, galima su skliaustais nurodyti prioritetus apjungiant sąlygas:

```cpp
<sąlyga> <operatorius> (<sąlyga> <operatorius> <sąlyga>)
```

Pirma bus patikrintos sąlygos, esančios tarp skliaustų, o vėliau likusi dalis.

## Loginiai operatoriai

| Operatorius | Pavadinimas | Pavyzdys | Apibūdinimas |
|-|-|-|-|
| `&&` | ir | `x && y` | grąžins `true` jei `x` ir `y` bus teisingi |
| `||` | arba | `x || y` | grąžins `true` jei `x` arba `y` bus teisingas |
| `!` | ne | `!x` | grąžins `true` jei `x` nėra `true` |

## Operatorius `&& `(ir)

- `false && false = false`
- `false && true = false`
- `true && false = false`
- `true && true = true`

| X | Y | X and Y |
|-|-|-|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## Operatorius `||` (arba)

- `false || false = false`
- `false || true = true`
- `true || false = true`
- `true || true = true`

| X | Y | X or Y |
|-|-|-|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

## Operatorius `!` (ne)

- `!true = false`
- `!false = true`

| X | !X |
|-|-|
| 0 | 1 |
| 1 | 0 |

## Pasitikrinkite

Kaip manote, kam bus lygios (`true` / `false`) tokios sąlygos?

- `(10 > 9) && (9 > 10) = ???`
- `(10 > 9) || (9 > 10) = ???`
- `!true = ???`
- `(10 > 9) && (!(9 > 10)) = ???`

### Kam bus lygus `(10 > 9) && (9 > 10)` ?

1. `(10 > 9)` bus `true`, todėl: `true && (9 > 10)`
2. `(9 > 10)` bus `false`, todėl: `true && false`
3. Naudojant operatorių `&&` visos sąlygos dalys turi būti `true`, kad visa sąlyga būtų `true`, todėl galutinis rezultatas: `false`

Apibendrinus: `(10 > 9) && (9 > 10) = false`

### Kam bus lygus `(10 > 9) || (9 > 10)` ?

1. `(10 > 9)` bus `true`, todėl: `true || (9 > 10)`
2. `(9 > 10)` bus `false`, todėl: `true || false`
3. Naudojant operatorių `||` bent viena sąlygos dalis turi būti `true`, kad visa sąlyga būtų `true`, todėl galutinis rezultatas: `true`

Apibendrinus: `(10 > 9) || (9 > 10) = true`

### Kam bus lygus `!true` ?

1. `!` dalis reiškia priešingą veiksmą, todėl `!true` keičiasi į tiesiog `false`

Apibendrinus: `!true = false`

### Kam bus lygus `(10 > 9) && (!(9 > 10))` ?

1. `(10 > 9)` bus `true`, todėl: `true && (!(9 > 10))`
2. `(9 > 10)` bus `false`, todėl: `true && (!false)`
3. `(!false)` dalis verčiasi į priešingą jai, t. y. į `true`, todėl: `true && true`
4. Naudojant operatorių `&&` visos sąlygos dalys turi būti `true`, kad visa sąlyga būtų `true`, todėl galutinis rezultatas: `true`

Apibendrinus: `(10 > 9) && (!(9 > 10)) = true`

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 14;

	if (skaicius > 0 && skaicius <= 100)
	{
		cout << "Skaicius patenka tarp reziu [1-100]";
	}
}
```

Rezultatai:

```
Skaicius patenka tarp reziu [1-100]
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;
	cout << "Iveskite skaiciu: ";
	cin >> skaicius;

	if (skaicius > 0 && skaicius <= 100)
	{
		cout << "Skaicius patenka tarp reziu [1-100]";
	}
	else
	{
		cout << "Skaicius nepatenka tarp nurodytu reziu";
	}
}
```

Rezultatas 1:

```
Iveskite skaiciu: 20
Skaicius patenka tarp reziu [1-100]
```

Rezultatas 2:

```
Iveskite skaiciu: 120
Skaicius nepatenka tarp nurodytu reziu
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;
	cout << "Iveskite skaiciu: ";
	cin >> skaicius;

	if (skaicius == 3 || skaicius > 100)
	{
		cout << "skaicius lygus 3 arba yra didesnis nei 100";
	}
}
```

Rezultatas 1:

```
Iveskite skaiciu: 25

```

Rezultatas 2:

```
Iveskite skaiciu: 5000
skaicius lygus 3 arba yra didesnis nei 100
```

Rezultatas 3:

```
Iveskite skaiciu: 3
skaicius lygus 3 arba yra didesnis nei 100
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pradzia = 1;
	int pabaiga = 100;
	int skaicius;

	cout << "iveskite skaiciu: ";
	cin >> skaicius;

	cout << "reziai [" << pradzia << "-" << pabaiga << "]" << endl;

	if (skaicius >= pradzia && skaicius <= pabaiga)
	{
		cout << "skaicius patenka i nurodytus rezius";
	}
	else
	{
		cout << "skaicius nepatenka i nurodytus rezius";
	}
}
```

Rezultatas 1:

```
iveskite skaiciu: -65
reziai [1-100]
skaicius nepatenka i nurodytus rezius
```

Rezultatas 2:

```
iveskite skaiciu: 55
reziai [1-100]
skaicius patenka i nurodytus rezius
```

Rezultatas 3:

```
iveskite skaiciu: 200
reziai [1-100]
skaicius nepatenka i nurodytus rezius
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;
	cout << "iveskite skaiciu: ";
	cin >> skaicius;

	if (skaicius > 0 && skaicius % 2 == 0)
	{
		cout << "skaicius yra teigiamas ir lyginis";
	}
	else if (skaicius > 0 && skaicius % 3 == 0)
	{
		cout << "skaicius yra teigiamas ir dalinasi is 3";
	}
	else
	{
		cout << "skaicius neigiamas arba nesidalina nei is 2 nei is 3";
	}
}
```

Rezultatas 1:

```
iveskite skaiciu: 8
skaicius yra teigiamas ir lyginis
```

Rezultatas 2:

```
iveskite skaiciu: 9
skaicius yra teigiamas ir dalinasi is 3
```

Rezultatas 3:

```
iveskite skaiciu: -5
skaicius neigiamas arba nesidalina nei is 2 nei is 3
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int kaina = 0;
	bool nemokama = true;

	if (kaina > 0 || nemokama == true)
	{
		cout << "preke parduodama" << endl;
	}

	if (kaina > 0 || nemokama)
	{
		cout << "preke parduodama" << endl;
	}
}
```

Rezultatai:

```
preke parduodama
preke parduodama

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (5 + 3 > 0 || 100 < 100)
	{
		cout << "suveike";
	}
	else
	{
		cout << "nesuveike";
	}
}
```

Rezultatai:

```
suveike
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (5 + 3 > 0 && 100 < 100)
	{
		cout << "suveike";
	}
	else
	{
		cout << "nesuveike";
	}
}
```

Rezultatai:

```
nesuveike
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (8 * 2 == 16 && (8 + 9 * 2) % 2 == 0)
	{
		cout << "suveike";
	}
	else
	{
		cout << "nesuveike";
	}
}
```

Rezultatai:

```
suveike
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (true && false || true)
	{
		cout << "suveike";
	}
	else
	{
		cout << "nesuveike";
	}
}
```

Rezultatai:

```
suveike
```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (false && (false || true))
	{
		cout << "suveike";
	}
	else
	{
		cout << "nesuveike";
	}
}
```

Rezultatai:

```
nesuveike
```

### Pavyzdys 12

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	bool bilietas = true;

	if (!bilietas)
	{
		cout << "bilieto nera";
	}
	else
	{
		cout << "bilietas yra";
	}
}
```

Rezultatai:

```
bilietas yra
```

### Pavyzdys 13

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	if (!(5 + 3 > 0))
	{
		cout << "suveike";
	}
	else
	{
		cout << "nesuveike";
	}
}
```

Rezultatai:

```
nesuveike
```

### Pavyzdys 14

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;
	cout << "iveskite skaiciu: ";
	cin >> skaicius;

	if ((skaicius > 0 && skaicius < 100) || skaicius % 2 == 0)
	{
		cout << "skaicius patenka i rezius arba dalinasi is 2" << endl;
	}

	if (skaicius > 0 && (skaicius < 100 || skaicius % 2 == 0))
	{
		cout << "skaicius teigiamas ir mazesnis uz 100 arba lyginis" << endl;
	}
}
```

Rezultatas 1:

```
iveskite skaiciu: 55
skaicius patenka i rezius arba dalinasi is 2
skaicius teigiamas ir mazesnis uz 100 arba lyginis
```

Rezultatas 2:

```
iveskite skaiciu: -7777
```

Rezultatas 3:

```
iveskite skaiciu: 120
skaicius patenka i rezius arba dalinasi is 2
skaicius teigiamas ir mazesnis uz 100 arba lyginis
```

## Užduotys

### Užduotis 1

Susikurkite du kintamuosius rėžių pradžiai ir pabaigai saugoti. Liepkite vartotojui įvesti skaičių. Patikrinkite ar skaičius patenka į nurodytus rėžius.

### Užduotis 2

Liepkite vartotojui įvesti bet kokį teigiamą skaičių. Patikrinkite ar skaičius yra teigiamas (didesnis už nulį) ir ar yra lyginis (dalinasi iš 2).

### Užduotis 3

Liepkite vartotojui įvesti bet kokį skaičių. Patikrinkite ar skaičius dalinasi iš 2 arba 5 arba 7.

### Užduotis 4

Liepkite vartotojui įvesti tris skaičius. Raskite kuris iš šių skaičių yra didžiausias.

### Užduotis 5

Liepkite vartotojui įvesti tris skaičius. Raskite kuris iš šių skaičių yra mažiausias.

### Užduotis 6

Liepkite vartotojui įvesti trijų egzaminų rezultatus. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:

- ar gautas vidurkis yra [8-10];
- ar gautas vidurkis yra [5-8);
- ar gautas vidurkis yra < 5.

### Užduotis 7

Liepkite įvesti du skaičius. Patikrinkite, naudojant 4 atskiras if sąlygas:

- ar pirmas skaičius yra didesnis už antrąjį, arba yra lygus 0;
- ar antras skaičius yra didesnis už pirmąjį, arba yra lygus 5;
- ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
- ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
