---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 12

## Užduoties sąlyga

Išveskite atsitiktinį kiekį atsitiktinių skaičių.

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main()
{
	srand(time(NULL));

	int kelintas = 0;
	int kiekis = rand() % 30 + 1;
	int skaicius;

	while (kelintas < kiekis)
	{
		skaicius = rand() % 100 + 1;
		cout << skaicius << " ";
		kelintas++;
	}

	cout << endl;

	return 0;
}
```

Rezultatas 1:

```
86 57 7 10 73 52 83
```

Rezultatas 2:

```
40 38 15 62 66 27 88 44 68 25 1 16 77 6 32 81 53 58 92 38 26 37 24 59 10 33 98
```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
#include <ctime>
using namespace std;

int main()
{
	srand(time(NULL));

	int kelintas = 0;
	int kiekis = rand() % 30 + 1;

	while (kelintas < kiekis)
	{
		cout << rand() % 100 + 1 << " ";
		kelintas++;
	}

	cout << endl;

	return 0;
}
```

Rezultatas 1:

```
70 28 68 9 2 78 64 82 10 97 99 74 96 76 3 56 19 67
```

Rezultatas 2:

```
92 9 8 61 95 53 1 47
```
