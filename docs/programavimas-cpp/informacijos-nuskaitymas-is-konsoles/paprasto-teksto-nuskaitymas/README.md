# Paprasto teksto nuskaitymas

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string tekstas;
	cin >> tekstas;
	cout << "Ivestas tekstas:\n" << tekstas << endl;
}
```

Rezultatai:

```
abc
Ivestas tekstas:
abc

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string tekstas;
	cout << "Iveskite norima teksta:" << endl;
	cin >> tekstas;
	cout << endl << "Ivestas tekstas:\n" << tekstas << endl;
}
```

Rezultatas 1:

```
Iveskite norima teksta:
abc

Ivestas tekstas:
abc

```

Rezultatas 2:

```
Iveskite norima teksta:
shdtfg  s h df

Ivestas tekstas:
shdtfg

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string tekstas;
	cout << "Iveskite norima teksta:" << endl;
	getline(cin, tekstas);
	cout << endl << "Ivestas tekstas:\n" << tekstas << endl;
}
```

Rezultatas 1:

```
Iveskite norima teksta:
sjhbfghd sjgbhj

Ivestas tekstas:
sjhbfghd sjgbhj

```

Rezultatas 2:

```
Iveskite norima teksta:
sdfg sdg, sdfs

Ivestas tekstas:
sdfg sdg, sdfs

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string tekstas;
	cout << "Iveskite norima teksta:" << endl;
	getline(cin, tekstas, ',');
	cout << endl << "Ivestas tekstas:\n" << tekstas << endl;
}
```

Rezultatai:

```
Iveskite norima teksta:
abc abc, def

Ivestas tekstas:
abc abc

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	int skaicius;
	string tekstas;

	cout << "Iveskite skaiciu ir teksto" << endl;

	cin >> skaicius >> tekstas;

	cout << "\nIvesti duomenys:\n\n";
	cout << skaicius << endl;
	cout << tekstas << endl;
}
```

Rezultatai:

```
Iveskite skaiciu ir teksto
5 afvgsdfbsdhf sdg

Ivesti duomenys:

5
afvgsdfbsdhf

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	int skaicius;
	string tekstas;

	cout << "Iveskite skaiciu ir teksto" << endl;

	cin >> skaicius;
	getline(cin, tekstas);

	cout << "\nIvesti duomenys:\n\n";
	cout << skaicius << endl;
	cout << tekstas << endl;
}
```

Rezultatai:

```
Iveskite skaiciu ir teksto
7 hasf shhjsdg

Ivesti duomenys:

7
 hasf shhjsdg

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	int skaicius;
	string tekstas;

	cout << "Iveskite skaiciu ir teksto" << endl;

	cin >> skaicius;
	cin >> ws; // white space
	getline(cin, tekstas);

	cout << "\nIvesti duomenys:\n\n";
	cout << skaicius << endl;
	cout << tekstas << endl;
}
```

Rezultatas 1:

```
Iveskite skaiciu ir teksto
7 ashfbsf sdf sg

Ivesti duomenys:

7
ashfbsf sdf sg

```

Rezultatas 2:

```
Iveskite skaiciu ir teksto
8
      a b

Ivesti duomenys:

8
a b

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string marke, modelis;

	cout << "Iveskite marke: ";
	cin >> marke;

	cout << "Iveskite modeli: ";
	cin >> modelis;
	cout << endl;

	cout << "Ivesta marke ir modelis: " << marke << " " << modelis;
}
```

Rezultatai:

```
Iveskite marke: porche
Iveskite modeli: 911

Ivesta marke ir modelis: porche 911
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char simboliai[10];

	cout << "Iveskite teksto: " << endl;
	cin.get(simboliai, 10);

	cout << "Nuskaitytas tekstas: [" << simboliai << "]";
}
```

Rezultatai:

```
Iveskite teksto:
koks nors tekstas tekstas
Nuskaitytas tekstas: [koks nors]
```

## Užduotys

### Užduotis 1

Iš konsolės nuskaitykite vieną norimą žodį. Jį išveskite du kartus, atskiriant tarpu. Pavyzdys: jeigu įvedėte žodį `dramblys`, tai išvedime turite gauti `dramblys dramblys`.

### Užduotis 2

Iš konsolės nuskaitykite savo vardą ir pavardę. Išveskite nuskaitytą informaciją pasisveikinime, pavyzdžiui:

```
Labas, Tomas Tomauskas.
```

### Užduotis 3

Iš konsolės nuskaitykite šią informaciją apie gyvūną: `pavadinimas`, `šeima`, `regionas` kuriame galima sutikti. Išveskite nuskaitytą informaciją sakinio pavidalu. Pavyzdžiui:

```
Gyvūnas liūtas priklauso katinų šeimai ir yra randamas afrikoje.
```
