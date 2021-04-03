---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 4

## Užduoties sąlyga

Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą "dalinasi iš 3".

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 25;

	while (skaicius < 50)
	{
		if (skaicius % 3 == 0)
		{
			cout << "dalinasi is 3" << endl;
		}
		else
		{
			cout << skaicius << endl;
		}

		skaicius++;
	}

	cout << endl;

	return 0;
}
```

Rezultatai:

```
25
26
dalinasi is 3
28
29
dalinasi is 3
31
32
dalinasi is 3
34
35
dalinasi is 3
37
38
dalinasi is 3
40
41
dalinasi is 3
43
44
dalinasi is 3
46
47
dalinasi is 3
49

```
