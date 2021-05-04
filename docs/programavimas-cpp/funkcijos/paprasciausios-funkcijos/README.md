# Paprasčiausios funkcijos

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/bzeN4Ina01I?start=2286&end=6534" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();

int main()
{
	pasisveikinti();
}

void pasisveikinti()
{
	cout << "Labas" << endl;
}
```

Rezultatai:

```
Labas
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();

int main()
{
	pasisveikinti();
	pasisveikinti();
	pasisveikinti();
	pasisveikinti();
	pasisveikinti();
}

void pasisveikinti()
{
	cout << "Labas ir tau" << endl;
}
```

Rezultatai:

```
Labas ir tau
Labas ir tau
Labas ir tau
Labas ir tau
Labas ir tau
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();

int main()
{
	for (int i = 0; i < 5; i++)
	{
		pasisveikinti();
	}
}

void pasisveikinti()
{
	cout << "Labas" << endl;
}
```

Rezultatai:

```
Labas
Labas
Labas
Labas
Labas
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();

int main()
{
	cout << "ar vykdyti? t/n" << endl;
	char vykdyti;
	cin >> vykdyti;

	if (vykdyti == 't')
	{
		pasisveikinti();
	}
}

void pasisveikinti()
{
	cout << "Labas" << endl;
}
```

Rezultatas 1:

```
ar vykdyti? t/n
t
Labas
```

Rezultatas 2:

```
ar vykdyti? t/n
n
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();
void atsisveikinti();

int main()
{
	pasisveikinti();
	atsisveikinti();
}

void pasisveikinti()
{
	cout << "Labas" << endl;
}

void atsisveikinti()
{
	cout << "viso" << endl;
}
```

Rezultatai:

```
Labas
viso
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();
void atsisveikinti();

int main()
{
	pasisveikinti();
	atsisveikinti();
	atsisveikinti();
	pasisveikinti();
}

void pasisveikinti()
{
	cout << "Labas" << endl;
}

void atsisveikinti()
{
	cout << "viso" << endl;
}
```

Rezultatai:

```
Labas
viso
viso
Labas
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti();

int main()
{

}

void pasisveikinti()
{
	cout << "Labas" << endl;
}
```

Rezultatai:

```

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

void atsakymas();

int main()
{
	atsakymas();
}

void atsakymas()
{
	cout << 5 + 3 << endl;
}
```

Rezultatai:

```
8
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

void sudeti();

int main()
{
	int pirmas = 8, antras = 3;
	sudeti();
}

void sudeti()
{
    // kintamieji pirmas ir antras nėra pasiekiami šioje vietoje,
    // todėl programa šioje vietoje nepasileis
	cout << pirmas + antras << endl;
}
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

void funkcijaVirsuje()
{
	cout << "funkcija virs main" << endl;
}

int main()
{
	funkcijaVirsuje();
}
```

Rezultatai:

```
funkcija virs main
```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

void lentele();

int main()
{
	lentele();
}

void lentele()
{
	for (int i = 1; i <= 5; i++)
	{
		for (int j = 1; j <= 5; j++)
		{
			cout << i * j << " ";
		}
		cout << endl;
	}
	cout << endl;
}
```

Rezultatai:

```
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20
5 10 15 20 25
```

### Pavyzdys 12

Kodas:

```cpp
#include <iostream>
using namespace std;

void informacija();

int main()
{
	informacija();
}

void informacija()
{
	string vardas = "Gabriele";
	int amzius = 25;
	cout << vardas << " " << amzius << endl;
}
```

Rezultatai:

```
Gabriele 25
```

### Pavyzdys 13

Kodas:

```cpp
#include <iostream>
using namespace std;

void informacija();
void klaidinga();

int main()
{
	informacija();
	klaidinga();
}

void informacija()
{
	string vardas = "Gabriele";
	int amzius = 25;
	cout << vardas << " " << amzius << endl;
}

void klaidinga()
{
	// programa nepasileis, nes ši funkcija nepasiekia tokio kintamojo
	cout << vardas << endl;
}
```

### Pavyzdys 14

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciavimai();
void suma();
void skirtumas();
void kazkasKito();

int main()
{
	skaiciavimai();
	kazkasKito();
}

void skaiciavimai()
{
	suma();
	skirtumas();
}

void suma()
{
	int pirmas = 5, antras = 4;
	int suma = pirmas + antras;
	cout << pirmas << " + " << antras << " = " << suma << endl;
}

void skirtumas()
{
	int pirmas = 7, antras = 3;
	int skirtumas = pirmas - antras;
	cout << pirmas << " - " << antras << " = " << skirtumas << endl;
}

void kazkasKito()
{
	cout << "kazkas kito" << endl;
}
```

Rezultatai:

```
5 + 4 = 9
7 - 3 = 4
kazkas kito
```

### Pavyzdys 15

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciuoti();

int main()
{
	string vykdyti;

	do
	{
		skaiciuoti();

		cout << "ar dar norite skaiciuoti? (t/n): ";
		cin >> vykdyti;
	} while (vykdyti == "t");
}

void skaiciuoti()
{
	int pirmas, antras;
	cout << "Iveskite du skaicius: ";
	cin >> pirmas >> antras;
	int suma = pirmas + antras;
	int skirtumas = pirmas - antras;
	cout << "suma = " << suma << endl;
	cout << "skirtumas = " << skirtumas << endl;
}
```

Rezultatas 1:

```
Iveskite du skaicius: 4 8
suma = 12
skirtumas = -4
ar dar norite skaiciuoti? (t/n): n
```

Rezultatas 2:

```
Iveskite du skaicius: 9 3
suma = 12
skirtumas = 6
ar dar norite skaiciuoti? (t/n): t
Iveskite du skaicius: 2 3
suma = 5
skirtumas = -1
ar dar norite skaiciuoti? (t/n): t
Iveskite du skaicius: 56 14
suma = 70
skirtumas = 42
ar dar norite skaiciuoti? (t/n): n
```

## Užduotys

### Užduotis 1

Sukurkite ir iškvieskite funkciją, kuri į ekraną išvestų trumpą eilėraštį.

### Užduotis 2

Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma informacija apie policininką (vardas, pavardė, amžius, alga, etatas, specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui: įterpkite į sakinį, ar išveskite atskirose eilutėse ar pan.).

### Užduotis 3

Sukurkite ir iškvieskite funkciją, kuri išvestų norimus žodžius atskirose eilutėse, prieš kiekvieną žodį parašant brūkšnį. Pavyzdžiui:

```
- pirmas
- antras
- ...
```

### Užduotis 4

Sukurkite iš iškvieskite funkciją, kuri paprašytų vartotojo įvesti savo vardą. Po įvedimo, metodas turi pasisveikinti su vartotoju.

### Užduotis 5

Sukurkite ir iškvieskite funkciją, kuri sugeneruotų lentelę. Pirmame ir antrame stulpeliuose turi būti atsitiktinai sugeneruoti skaičiai, o trečiame - tos eilutės skaičių suma. Pavyzdžiui:

```
4 5 9
1 7 8
9 2 11
3 6 9
```

### Užduotis 6

Sukurkite ir iškvieskite funkciją, kurioje turėtumėte skaičių masyvą su duomenimis. Šio masyvo skaičius išveskite į ekraną atskiriant tarpu. Pavyzdžiui:

```
7 8 9 5 4 3 5
```

### Užduotis 7

Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje, skaičius atskiriant tarpu.

### Užduotis 8

Sukurkite funkciją, kuri išvestų 1 atsitiktinį skaičių, bei po jo padėtų vieno simbolio tarpą. Šį metodą kvieskite (main funkcijoje) cikle, kuris būtų vykdomas 100 kartų. Taip turėtumėte matyti išvestų 100-ą atsitiktinių skaičių. Pavyzdžiui:

```
7 8 3 4 5 1 2 5 7 9 6 4 3 2 1 2 ...
```

### Užduotis 9

Sukurkite funkciją, kuri iš jame sukurto žodžių masyvo paimtų kurį nors žodį atsitiktinai ir jį išvestų. Sukurkite antrą metodą, kuris sugeneruotų atsitiktinį skaičių ir jį išvestų. Sukurkite ir iškvieskite trečią metodą, kuri iškviestų kitus du metodus.
