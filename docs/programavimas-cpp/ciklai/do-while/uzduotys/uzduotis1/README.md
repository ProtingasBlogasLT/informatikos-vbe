---
sidebar: auto
prev: ../../
---

# Ciklo do while užduotis nr. 1

## Užduoties sąlyga

Išveskite visus skaičius nuo 1 iki pirmojo, kuris dalinasi iš 17.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	do
	{
		cout << skaicius << " ";
		skaicius++;
	} while (skaicius % 17 != 0);

	return 0;
}
```

Rezultatai:

```
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
```
