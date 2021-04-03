---
sidebar: auto
prev: ../../
---

# Ciklo do while užduotis nr. 4

## Užduoties sąlyga

Išveskite visus nelyginius skaičius nuo 1 iki 50. Raskite šių skaičių sumą ir vidurkį.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;
	int suma = 0, kiekis = 0;

	do
	{
		if (skaicius % 2 != 0)
		{
			cout << skaicius << " ";
			suma += skaicius;
			kiekis++;
		}
		skaicius++;
	} while (skaicius < 50);

	cout << endl;
	cout << "Suma: " << suma << endl;
	cout << "Vidurkis: " << (double)suma / kiekis << endl;

	return 0;
}
```

Rezultatai:

```
1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49
Suma: 625
Vidurkis: 25
```
