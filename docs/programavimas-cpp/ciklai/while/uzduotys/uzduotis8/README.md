---
sidebar: auto
---

# Ciklo while užduotis nr. 8

## Užduoties sąlyga

Nekeliant į atskiras eilutes, o atskiriant kableliu išveskite 100 atsitiktinių skaičių. Raskite visų jų sumą ir vidurkį.

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main()
{
	srand(time(NULL));

	int skaicius = 0,
		suma = 0,
		kelintas = 0,
		kiekis = 100;

	while (kelintas < kiekis)
	{
		skaicius = rand() % 10 + 1;

		cout << skaicius << ", ";
		suma += skaicius;

		kelintas++;
	}

	double vidurkis = (double)suma / kiekis;

	cout << "\n\nSiu skaiciu suma: " << suma << endl;
	cout << "Vidurkis: " << vidurkis << endl;

	return 0;
}
```

Rezultatas 1:

```
9, 8, 10, 9, 3, 9, 6, 3, 4, 10, 8, 3, 1, 6, 5, 2, 9, 10, 2, 1, 1, 3, 4, 4, 5, 9, 7, 8, 7, 10, 9, 5, 2, 7, 8, 1, 7, 9, 2, 9, 7, 1, 9, 10, 2, 9, 4, 8, 10, 5, 3, 4, 3, 4, 9, 5, 2, 4, 5, 4, 3, 7, 10, 9, 4, 5, 5, 8, 6, 2, 6, 8, 8, 3, 3, 5, 9, 3, 6, 7, 5, 7, 1, 8, 2, 5, 4, 6, 8, 3, 3, 1, 5, 10, 9, 6, 1, 1, 4, 10,

Siu skaiciu suma: 559
Vidurkis: 5.59

```

Rezultatas 2:

```
8, 6, 6, 9, 4, 8, 2, 5, 3, 6, 7, 4, 7, 9, 3, 1, 4, 6, 10, 7, 1, 9, 9, 2, 5, 4, 8, 5, 2, 1, 4, 2, 5, 8, 5, 8, 7, 3, 9, 10, 1, 3, 9, 9, 7, 7, 10, 3, 2, 4, 5, 8, 4, 7, 10, 6, 3, 7, 9, 4, 9, 6, 6, 2, 10, 7, 9, 9, 1, 3, 4, 5, 1, 9, 3, 10, 1, 4, 1, 7, 2, 10, 10, 9, 2, 4, 2, 6, 6, 2, 6, 8, 3, 9, 1, 2, 9, 7, 8, 4,

Siu skaiciu suma: 557
Vidurkis: 5.57

```
