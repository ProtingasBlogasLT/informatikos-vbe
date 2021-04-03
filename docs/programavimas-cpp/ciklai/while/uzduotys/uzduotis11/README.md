---
sidebar: auto
---

# Ciklo while užduotis nr. 11

## Užduoties sąlyga

Liepkite vartotojui įvedinėti bet kokius skaičius. Vykdykite įvedinėjimą iki kol įvestas skaičius bus lygus 0. Raskite įvestų skaičių sumą.

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int suma = 0,
		skaicius;

	while (true)
	{
		cout << "Iveskite skaiciu: ";
		cin >> skaicius;
		suma += skaicius;

		if (skaicius == 0)
		{
			break;
		}
	}

	cout << "Siu skaiciu suma: " << suma;

	return 0;
}
```

Rezultatas 1:

```
Iveskite skaiciu: 5
Iveskite skaiciu: 7
Iveskite skaiciu: 0
Siu skaiciu suma: 12
```

Rezultatas 2:

```
Iveskite skaiciu: 7
Iveskite skaiciu: 5
Iveskite skaiciu: 1
Iveskite skaiciu: 2
Iveskite skaiciu: 0
Siu skaiciu suma: 15
```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int suma = 0,
		skaicius = -1;

	while (skaicius != 0)
	{
		cout << "Iveskite skaiciu: ";
		cin >> skaicius;
		suma += skaicius;
	}

	cout << "Siu skaiciu suma: " << suma;

	return 0;
}
```

Rezultatas 1:

```
Iveskite skaiciu: 8
Iveskite skaiciu: 9
Iveskite skaiciu: 0
Siu skaiciu suma: 17
```

Rezultatas 2:

```
Iveskite skaiciu: 5
Iveskite skaiciu: 6
Iveskite skaiciu: 2
Iveskite skaiciu: 0
Siu skaiciu suma: 13
```
