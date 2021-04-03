---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 5

## Užduoties sąlyga

Iš skaičių nuo 1 iki 100, raskite visų lyginių ir visų nelyginių skaičių sumas. Naudokite tą patį ciklą abiems šiems veiksmams.

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	int lyginiu_suma = 0;
	int nelyginiu_suma = 0;

	while (skaicius < 100)
	{
		if (skaicius % 2 == 0)
		{
			lyginiu_suma += skaicius;
		}
		else
		{
			nelyginiu_suma += skaicius;
		}

		skaicius++;
	}

	cout << "Lyginiu suma: " << lyginiu_suma << endl;
	cout << "Nelyginiu suma: " << nelyginiu_suma << endl;

	return 0;
}
```

Rezultatai:

```
Lyginiu suma: 2450
Nelyginiu suma: 2500
```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	int lyginiu_suma = 0;
	int nelyginiu_suma = 0;

	while (skaicius < 100)
	{
		if (skaicius % 2 == 0)
		{
			lyginiu_suma += skaicius;
		}
		
		if (skaicius % 2 != 0)
		{
			nelyginiu_suma += skaicius;
		}

		skaicius++;
	}

	cout << "Lyginiu suma: " << lyginiu_suma << endl;
	cout << "Nelyginiu suma: " << nelyginiu_suma << endl;

	return 0;
}
```

Rezultatai:

```
Lyginiu suma: 2450
Nelyginiu suma: 2500
```
