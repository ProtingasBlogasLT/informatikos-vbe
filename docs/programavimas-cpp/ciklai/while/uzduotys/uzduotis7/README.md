---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 7

## Užduoties sąlyga

Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (!(skaicius % 3 == 0 && skaicius % 5 == 0))
	{
		cout << skaicius << " ";
		skaicius++;
	}

	return 0;
}
```

Rezultatai:

```
1 2 3 4 5 6 7 8 9 10 11 12 13 14
```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius % 15 != 0)
	{
		cout << skaicius << " ";
		skaicius++;
	}

	return 0;
}
```

Rezultatai:

```
1 2 3 4 5 6 7 8 9 10 11 12 13 14
```

## Sprendimas 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (true)
	{
		if (skaicius % 3 == 0 && skaicius % 5 == 0)
		{
			break;
		}

		cout << skaicius << " ";
		skaicius++;
	}

	return 0;
}
```

Rezultatai:

```
1 2 3 4 5 6 7 8 9 10 11 12 13 14
```
