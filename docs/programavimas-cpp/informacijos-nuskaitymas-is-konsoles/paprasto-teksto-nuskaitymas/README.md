# Paprasto teksto nuskaitymas

## Vaizdo pamoka

Informacija ruošiama.

## Apie paprasto teksto nuskaitymą

- Paprasto teksto nuskaitymui geriausiai naudoti Console.ReadLine();, nes ši komanda nuskaitys visą suvestą eilutę ir ją grąžins kaip string tipo atsakymą.
- Gautą atsakymą galima išsaugoti į kintamąjį, arba iškart išvesti.

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
