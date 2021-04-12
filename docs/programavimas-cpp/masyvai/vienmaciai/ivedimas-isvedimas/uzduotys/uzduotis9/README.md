---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 9

## Užduoties sąlyga

- Susikurkite `string` tipo kintamąjį su norima reikšme.
- Išveskite visą žodį, kiekvieną raidę atskirant brūkšniu (`-`). Pavyzdžiui:

```
d-r-a-m-b-l-y-s
```

- Išveskite kiekvieną raidę atskirose eilutėse. Pavyzdžiui:

```
d
r
a
m
b
l
y
s
```

## Sprendimas

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string zodis = "dramblys";

	for (int i = 0; i < zodis.length(); i++)
	{
		cout << zodis[i];

		if (i + 1 < zodis.length())
		{
			cout << "-";
		}
	}

	cout << "\n\n";

	for (int i = 0; i < zodis.length(); i++)
	{
		cout << zodis[i] << endl;
	}

    return 0;
}
```

Rezultatai:

```
d-r-a-m-b-l-y-s

d
r
a
m
b
l
y
s
```
