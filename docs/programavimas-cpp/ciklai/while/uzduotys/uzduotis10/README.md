---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 10

## Užduoties sąlyga

Išveskite skaičius nuo 1 iki 50. Šalia skaičiaus parašykite iš kokių skaičių (1-9) jis dalinasi. Pavyzdžiui:

```
Skaičius 2 dalinasi iš: 2
Skaičius 3 dalinasi iš: 3
Skaičius 4 dalinasi iš: 2 4
...
```

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius < 50)
	{
		cout << "Skaicius " << skaicius << " dalinasi is: ";

		for (int i = 2; i < 10; i++)
		{
			if (skaicius % i == 0)
			{
				cout << i << " ";
			}
		}

		cout << endl;

		skaicius++;
	}

	return 0;
}
```

Rezultatai:

```
Skaicius 1 dalinasi is:
Skaicius 2 dalinasi is: 2
Skaicius 3 dalinasi is: 3
Skaicius 4 dalinasi is: 2 4
Skaicius 5 dalinasi is: 5
Skaicius 6 dalinasi is: 2 3 6
Skaicius 7 dalinasi is: 7
Skaicius 8 dalinasi is: 2 4 8
Skaicius 9 dalinasi is: 3 9
Skaicius 10 dalinasi is: 2 5
Skaicius 11 dalinasi is:
Skaicius 12 dalinasi is: 2 3 4 6
Skaicius 13 dalinasi is:
Skaicius 14 dalinasi is: 2 7
Skaicius 15 dalinasi is: 3 5
Skaicius 16 dalinasi is: 2 4 8
Skaicius 17 dalinasi is:
Skaicius 18 dalinasi is: 2 3 6 9
Skaicius 19 dalinasi is:
Skaicius 20 dalinasi is: 2 4 5
Skaicius 21 dalinasi is: 3 7
Skaicius 22 dalinasi is: 2
Skaicius 23 dalinasi is:
Skaicius 24 dalinasi is: 2 3 4 6 8
Skaicius 25 dalinasi is: 5
Skaicius 26 dalinasi is: 2
Skaicius 27 dalinasi is: 3 9
Skaicius 28 dalinasi is: 2 4 7
Skaicius 29 dalinasi is:
Skaicius 30 dalinasi is: 2 3 5 6
Skaicius 31 dalinasi is:
Skaicius 32 dalinasi is: 2 4 8
Skaicius 33 dalinasi is: 3
Skaicius 34 dalinasi is: 2
Skaicius 35 dalinasi is: 5 7
Skaicius 36 dalinasi is: 2 3 4 6 9
Skaicius 37 dalinasi is:
Skaicius 38 dalinasi is: 2
Skaicius 39 dalinasi is: 3
Skaicius 40 dalinasi is: 2 4 5 8
Skaicius 41 dalinasi is:
Skaicius 42 dalinasi is: 2 3 6 7
Skaicius 43 dalinasi is:
Skaicius 44 dalinasi is: 2 4
Skaicius 45 dalinasi is: 3 5 9
Skaicius 46 dalinasi is: 2
Skaicius 47 dalinasi is:
Skaicius 48 dalinasi is: 2 3 4 6 8
Skaicius 49 dalinasi is: 7
```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius < 50)
	{
		cout << "Skaicius " << skaicius << " dalinasi is: ";

		if (skaicius % 2 == 0)
		{
			cout << "2 ";
		}

		if (skaicius % 3 == 0)
		{
			cout << "3 ";
		}

		if (skaicius % 4 == 0)
		{
			cout << "4 ";
		}

		if (skaicius % 5 == 0)
		{
			cout << "5 ";
		}

		if (skaicius % 6 == 0)
		{
			cout << "6 ";
		}

		if (skaicius % 7 == 0)
		{
			cout << "7 ";
		}

		if (skaicius % 8 == 0)
		{
			cout << "8 ";
		}

		if (skaicius % 9 == 0)
		{
			cout << "9 ";
		}

		cout << endl;

		skaicius++;
	}

	return 0;
}
```

Rezultatai:

```
Skaicius 1 dalinasi is:
Skaicius 2 dalinasi is: 2
Skaicius 3 dalinasi is: 3
Skaicius 4 dalinasi is: 2 4
Skaicius 5 dalinasi is: 5
Skaicius 6 dalinasi is: 2 3 6
Skaicius 7 dalinasi is: 7
Skaicius 8 dalinasi is: 2 4 8
Skaicius 9 dalinasi is: 3 9
Skaicius 10 dalinasi is: 2 5
Skaicius 11 dalinasi is:
Skaicius 12 dalinasi is: 2 3 4 6
Skaicius 13 dalinasi is:
Skaicius 14 dalinasi is: 2 7
Skaicius 15 dalinasi is: 3 5
Skaicius 16 dalinasi is: 2 4 8
Skaicius 17 dalinasi is:
Skaicius 18 dalinasi is: 2 3 6 9
Skaicius 19 dalinasi is:
Skaicius 20 dalinasi is: 2 4 5
Skaicius 21 dalinasi is: 3 7
Skaicius 22 dalinasi is: 2
Skaicius 23 dalinasi is:
Skaicius 24 dalinasi is: 2 3 4 6 8
Skaicius 25 dalinasi is: 5
Skaicius 26 dalinasi is: 2
Skaicius 27 dalinasi is: 3 9
Skaicius 28 dalinasi is: 2 4 7
Skaicius 29 dalinasi is:
Skaicius 30 dalinasi is: 2 3 5 6
Skaicius 31 dalinasi is:
Skaicius 32 dalinasi is: 2 4 8
Skaicius 33 dalinasi is: 3
Skaicius 34 dalinasi is: 2
Skaicius 35 dalinasi is: 5 7
Skaicius 36 dalinasi is: 2 3 4 6 9
Skaicius 37 dalinasi is:
Skaicius 38 dalinasi is: 2
Skaicius 39 dalinasi is: 3
Skaicius 40 dalinasi is: 2 4 5 8
Skaicius 41 dalinasi is:
Skaicius 42 dalinasi is: 2 3 6 7
Skaicius 43 dalinasi is:
Skaicius 44 dalinasi is: 2 4
Skaicius 45 dalinasi is: 3 5 9
Skaicius 46 dalinasi is: 2
Skaicius 47 dalinasi is:
Skaicius 48 dalinasi is: 2 3 4 6 8
Skaicius 49 dalinasi is: 7
```
