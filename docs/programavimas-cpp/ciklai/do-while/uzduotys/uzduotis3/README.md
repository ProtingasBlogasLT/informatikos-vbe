---
sidebar: auto
prev: ../../
---

# Ciklo do while užduotis nr. 3

## Užduoties sąlyga

Išveskite visus lyginius skaičius nuo 1 iki pirmojo, kuris dalinasi iš 20. Raskite visų šių išvestų skaičių sumą.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;
	int suma = 0;

	do
	{
		if (skaicius % 2 == 0)
		{
			cout << skaicius << " ";
			suma += skaicius;
		}
		skaicius++;
	} while (skaicius % 20 != 0);

	cout << endl << "Siu skaiciu suma: " << suma;

	return 0;
}
```

Rezultatai:

```
2 4 6 8 10 12 14 16 18
Siu skaiciu suma: 90
```
