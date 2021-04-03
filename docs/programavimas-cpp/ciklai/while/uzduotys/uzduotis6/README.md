---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 6

## Užduoties sąlyga

Išveskite 10 atsitiktinių skaičių, raskite jų sumą.

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main()
{
	srand(time(NULL));

	int suma = 0,
		kelintas = 0,
		skaicius;

	while (kelintas < 10)
	{
		skaicius = rand() % 10 + 1;

		cout << skaicius << " ";
		suma += skaicius;

		kelintas++;
	}

	cout << endl << "Siu skaiciu suma: " << suma << endl;

	return 0;
}
```

Rezultatas 1:

```
5 9 5 5 10 7 1 9 6 6
Siu skaiciu suma: 63
```

Rezultatas 2:

```
1 3 9 3 2 3 2 9 6 7
Siu skaiciu suma: 45
```
