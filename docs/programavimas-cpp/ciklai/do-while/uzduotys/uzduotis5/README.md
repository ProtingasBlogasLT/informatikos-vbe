---
sidebar: auto
prev: ../../
---

# Ciklo do while užduotis nr. 5

## Užduoties sąlyga

Išvedinėkite atsitiktinius skaičius iki kol rasite skaičių, kuris dalinasi iš 3.

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main()
{
	srand(time(NULL));

	int skaicius;

	do
	{
		skaicius = rand() % 50 + 1;
		cout << skaicius << " ";
	} while (skaicius % 3 != 0);

	return 0;
}
```

Rezultatas 1:

```
25 31 4 2 37 24
```

Rezultatas 2:

```
41 37 21
```
