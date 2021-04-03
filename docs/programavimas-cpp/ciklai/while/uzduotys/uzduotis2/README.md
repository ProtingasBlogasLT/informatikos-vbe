---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 2

## Užduoties sąlyga

Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį "lyginis", o prie kiekvieno nelyginio – "nelyginis".

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	while (skaicius < 50)
	{
		cout << skaicius;

		if (skaicius % 2 == 0)
		{
			cout << " lyginis";
		}
		else
		{
			cout << " nelyginis";
		}
		
		cout << endl;

		skaicius++;
	}

	return 0;
}
```

Rezultatas:

```
1 nelyginis
2 lyginis
3 nelyginis
4 lyginis
5 nelyginis
6 lyginis
7 nelyginis
8 lyginis
9 nelyginis
10 lyginis
11 nelyginis
12 lyginis
13 nelyginis
14 lyginis
15 nelyginis
16 lyginis
17 nelyginis
18 lyginis
19 nelyginis
20 lyginis
21 nelyginis
22 lyginis
23 nelyginis
24 lyginis
25 nelyginis
26 lyginis
27 nelyginis
28 lyginis
29 nelyginis
30 lyginis
31 nelyginis
32 lyginis
33 nelyginis
34 lyginis
35 nelyginis
36 lyginis
37 nelyginis
38 lyginis
39 nelyginis
40 lyginis
41 nelyginis
42 lyginis
43 nelyginis
44 lyginis
45 nelyginis
46 lyginis
47 nelyginis
48 lyginis
49 nelyginis
```
