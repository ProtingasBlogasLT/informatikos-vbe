---
sidebar: auto
---

# Ciklo while užduotis nr. 1

## Užduoties sąlyga

Išveskite visus skaičius nuo 1 iki 20.

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius < 20)
	{
		cout << skaicius << " ";
		skaicius++;
	}

	cout << endl;

	return 0;
}
```

Rezultatai:

```
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19
```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius < 20)
	{
		cout << skaicius << endl;
		skaicius++;
	}

	return 0;
}
```

Rezultatai:

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
```
