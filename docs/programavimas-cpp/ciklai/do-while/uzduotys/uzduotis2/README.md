---
sidebar: auto
prev: ../../
---

# Ciklo do while užduotis nr. 2

## Užduoties sąlyga

Išveskite visus skaičius nuo 1 iki pirmojo, kuris dalinasi iš 100. Vietoj kiekvieno skaičiaus, kuris dalinasi iš 5 išveskite tekstą "skaičius dalinasi iš 5".

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	do
	{
		if (skaicius % 5 == 0)
		{
			cout << "skaicius dalinasi is 5";
		}
		else
		{
			cout << skaicius;
		}
		cout << endl;
		skaicius++;
	} while (skaicius % 100 != 0);

	return 0;
}
```

Rezultatai:

```
1
2
3
4
skaicius dalinasi is 5
6
7
8
9
skaicius dalinasi is 5
11
12
13
14
skaicius dalinasi is 5
16
17
18
19
skaicius dalinasi is 5
21
22
23
24
skaicius dalinasi is 5
26
27
28
29
skaicius dalinasi is 5
31
32
33
34
skaicius dalinasi is 5
36
37
38
39
skaicius dalinasi is 5
41
42
43
44
skaicius dalinasi is 5
46
47
48
49
skaicius dalinasi is 5
51
52
53
54
skaicius dalinasi is 5
56
57
58
59
skaicius dalinasi is 5
61
62
63
64
skaicius dalinasi is 5
66
67
68
69
skaicius dalinasi is 5
71
72
73
74
skaicius dalinasi is 5
76
77
78
79
skaicius dalinasi is 5
81
82
83
84
skaicius dalinasi is 5
86
87
88
89
skaicius dalinasi is 5
91
92
93
94
skaicius dalinasi is 5
96
97
98
99
```
