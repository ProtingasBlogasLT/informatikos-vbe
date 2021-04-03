---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 9

## Užduoties sąlyga

Raskite visų skaičių nuo 1 iki 10 sandaugą. Išveskite tik atsakymą, neišvedant pačių skaičių.

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int sandauga = 1;
	int skaicius = 1;

	while (skaicius <= 10)
	{
		sandauga *= skaicius;
		skaicius++;
	}

	cout << "sandauga: " << sandauga;

	return 0;
}
```

Rezultatai:

```
sandauga: 3628800
```
