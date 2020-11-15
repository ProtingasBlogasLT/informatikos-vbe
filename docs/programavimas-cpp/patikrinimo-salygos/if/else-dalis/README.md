
# Patikrinimo sąlyga if: else dalis

## Vaizdo pamoka

Informacija ruošiama.

## Apie `else` dalį

- `else` bus vykdomas visada kai jokia kita, prieš jį ėjusi sąlyga nebus teisinga.
- `else` dalyje nebereikia rašyti jokios sąlygos, jis automatiškai vykdomas kai niekas kitas netinka.
- `else` dalis rašoma tik vieną kartą, visos if sąlygos pabaigoje.
- `else` dalies rašyti nebūtina.
- `else` dalyje galima:
  - išvesti klaidos pranešimą;
  - leisti kartoti veiksmą;
  - įrašyti klaidą į "log" failus;
  - atlikti kitus veiksmus, kurie nėra priskiriami jokiai tikrintai sąlygai;
  - ...

## `else` dalies sintaksė

```cpp
if (sąlyga)
{
    // jeigu salyga true - vykdomas čia esantis kodas
}
else
{
    // jeigu sąlyga false - vykdomas čia esantis kodas
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
	int skaicius;
	cout << "iveskite skaiciu: ";
	cin >> skaicius;

	if (skaicius >= 0)
	{
		cout << "skaicius yra teigiamas arba lygus 0";
	}
	else
	{
		cout << "skaicius yra neigiamas";
	}
}
```

Rezultatas 1:

```
iveskite skaiciu: 5
skaicius yra teigiamas arba lygus 0
```

Rezultatas 2:

```
iveskite skaiciu: 0
skaicius yra teigiamas arba lygus 0
```

Rezultatas 3:

```
iveskite skaiciu: -4
skaicius yra neigiamas
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string gyvunas;
	cout << "Iveskite gyvuna: ";
	cin >> gyvunas;

	if (gyvunas == "zirafa")
	{
		cout << "oho";
	}
	else
	{
		cout << "turimas gyvunas: " << gyvunas;
	}
}
```

Rezultatas 1:

```
Iveskite gyvuna: suo
turimas gyvunas: suo
```

Rezultatas 2:

```
Iveskite gyvuna: zirafa
oho
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas = 7, antras = 9;

	if (pirmas > antras)
	{
		cout << pirmas << " yra didesnis uz " << antras;
	}
	else
	{
		cout << "skaiciai yra lygus arba "
			<< pirmas << " yra mazesnis uz " << antras;
	}
}
```

Rezultatai:

```
skaiciai yra lygus arba 7 yra mazesnis uz 9
```

## Užduotys

### Užduotis 1

Liepkite vartotojui įvesti teigiamą skaičių. Patikrinkite ar skaičius teigiamas, jei taip - išveskite pasveikinimą, o jei ne - aprėkite vartotoją.

### Užduotis 2

Liepkite vartotojui įvesti skaičių. Patikrinkite ar skaičius lyginis, jei taip - išveskite, kad skaičius lyginis, o jei ne - kad nelyginis.

### Užduotis 3

Liepkite vartotojui įvesti teigiamą skaičių. Patikrinkite ar tas skaičius dalinasi iš 7, jei taip - išveskite norimą tekstą, o jei ne - išveskite, kad toks skaičius netinka.

### Užduotis 4

Liepkite vartotojui įvesti du skaičius. Patikrinkite ar pirmas skaičius didesnis už antrąjį, jei taip - išveskite, kad pirmas skaičius didesnis už antrąjį, o jei ne - išveskite, kad įvyko klaida.
