# Funkcijos su argumentais

## Vaizdo pamoka

Informacija ruošiama.

## Apie funkcijas su argumentais

Funkcijos yra labiau panaudojamos, kai jos tą patį algoritmą gali pritaikyti prie skirtingų duomenų. Jei funkcijos darbui reikalingi duomenys - juos galima duoti funkcijai per argumentų sąrašą.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti(string vardas);

int main()
{
	pasisveikinti("Ieva");
	pasisveikinti("Gytis");
	pasisveikinti("Gabriele");
	pasisveikinti("Paulius");
}

void pasisveikinti(string vardas)
{
	cout << "Labas, " << vardas << endl;
}
```

Rezultatai:

```
Labas, Ieva
Labas, Gytis
Labas, Gabriele
Labas, Paulius
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

void pasisveikinti(string vardas);

int main()
{
	pasisveikinti("Ieva");
	pasisveikinti("Gytis");
	pasisveikinti("Gabriele");
	pasisveikinti("Paulius");

	string pirmas = "Tomas",
		antras = "Indre";

	pasisveikinti(pirmas);
	pasisveikinti(antras);
}

void pasisveikinti(string vardas)
{
	cout << "Labas, " << vardas << endl;
}
```

Rezultatai:

```
Labas, Ieva
Labas, Gytis
Labas, Gabriele
Labas, Paulius
Labas, Tomas
Labas, Indre
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

void informacija(string vardas, int amzius);

int main()
{
	string zmogus = "Povilas";
	int amzius = 23;

	informacija("Agne", 24);
	informacija(zmogus, amzius);
	informacija("Giedrius", amzius);
	informacija(zmogus, 19);
}

void informacija(string vardas, int amzius)
{
	cout << vardas << " " << amzius << endl;
}
```

Rezultatai:

```
Agne 24
Povilas 23
Giedrius 23
Povilas 19
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

void suma(int pirmas, int antras);

int main()
{
	suma(7, 4);
	suma(9, 3);
	suma(9, 1 + 1);

	int skaicius1, skaicius2;
	cout << "Iveskite du skaicius: ";
	cin >> skaicius1 >> skaicius2;

	suma(skaicius1, skaicius2);
	suma(skaicius2, 5);
	suma(10, skaicius1);
}

void suma(int pirmas, int antras)
{
	int atsakymas = pirmas + antras;
	cout << pirmas << " + " << antras << " = " << atsakymas << endl;
}
```

Rezultatas 1:

```
7 + 4 = 11
9 + 3 = 12
9 + 2 = 11
Iveskite du skaicius: 9 3
9 + 3 = 12
3 + 5 = 8
10 + 9 = 19
```

Rezultatas 2:

```
7 + 4 = 11
9 + 3 = 12
9 + 2 = 11
Iveskite du skaicius: -1 5
-1 + 5 = 4
5 + 5 = 10
10 + -1 = 9
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

void sudetis(int a, int b, int c);

int main()
{
	sudetis(4, 7, 8);
	sudetis(9, 2, 3);
	sudetis(1, 7, 5);
}

void sudetis(int a, int b, int c)
{
	int suma = a + b + c;
	cout << a << " + " << b << " + "
		<< c << " = " << suma << endl;
}
```

Rezultatai:

```
4 + 7 + 8 = 19
9 + 2 + 3 = 14
1 + 7 + 5 = 13
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

void sudetis(int a, int b, int c);
void atimtis(int a, int b);

int main()
{
	sudetis(4, 7, 8);
	sudetis(9, 2, 3);
	atimtis(7, 4);
	sudetis(1, 7, 5);
	atimtis(9, 4);
}

void sudetis(int a, int b, int c)
{
	int suma = a + b + c;
	cout << a << " + " << b << " + "
		<< c << " = " << suma << endl;
}

void atimtis(int a, int b)
{
	int skirtumas = a - b;
	cout << a << " - " << b << " = " << skirtumas << endl;
}
```

Rezultatai:

```
4 + 7 + 8 = 19
9 + 2 + 3 = 14
7 - 4 = 3
1 + 7 + 5 = 13
9 - 4 = 5
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

void sudetis(int a, int b);
void atimtis(int a, int b);

int main()
{
	srand(time(NULL));
	int pirmas, antras;

	for (int i = 0; i < 10; i++)
	{
		pirmas = rand() % 100 + 1;
		antras = rand() % 100 + 1;
		sudetis(pirmas, antras);
		atimtis(pirmas, antras);
		cout << endl;
	}
}

void sudetis(int a, int b)
{
	int suma = a + b;
	cout << a << " + " << b << " = " << suma << endl;
}

void atimtis(int a, int b)
{
	int skirtumas = a - b;
	cout << a << " - " << b << " = " << skirtumas << endl;
}
```

Rezultatas 1:

```
63 + 90 = 153
63 - 90 = -27

69 + 49 = 118
69 - 49 = 20

34 + 94 = 128
34 - 94 = -60

94 + 16 = 110
94 - 16 = 78

70 + 85 = 155
70 - 85 = -15

26 + 54 = 80
26 - 54 = -28

37 + 13 = 50
37 - 13 = 24

63 + 100 = 163
63 - 100 = -37

58 + 91 = 149
58 - 91 = -33

82 + 46 = 128
82 - 46 = 36
```

Rezultatas 2:

```
12 + 76 = 88
12 - 76 = -64

88 + 51 = 139
88 - 51 = 37

80 + 59 = 139
80 - 59 = 21

13 + 43 = 56
13 - 43 = -30

68 + 100 = 168
68 - 100 = -32

8 + 15 = 23
8 - 15 = -7

40 + 32 = 72
40 - 32 = 8

66 + 28 = 94
66 - 28 = 38

12 + 25 = 37
12 - 25 = -13

74 + 36 = 110
74 - 36 = 38
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <time.h>
using namespace std;

void sudetis(int a, int b);

int main()
{
	srand(time(NULL));

	for (int i = 0; i < 10; i++)
	{
		sudetis(rand() % 100 + 1, rand() % 100 + 1);
	}
}

void sudetis(int a, int b)
{
	int suma = a + b;
	cout << a << " + " << b << " = " << suma << endl;
}
```

Rezultatas 1:

```
21 + 42 = 63
45 + 29 = 74
42 + 76 = 118
100 + 90 = 190
37 + 71 = 108
63 + 37 = 100
43 + 43 = 86
3 + 50 = 53
97 + 85 = 182
64 + 37 = 101
```

Rezultatas 2:

```
79 + 55 = 134
62 + 50 = 112
81 + 67 = 148
91 + 40 = 131
13 + 81 = 94
40 + 46 = 86
92 + 94 = 186
19 + 15 = 34
62 + 53 = 115
58 + 92 = 150
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciavimai(int a, int b);
void sudetis(int a, int b);
void atimtis(int a, int b);

int main()
{
	skaiciavimai(74, 32);
	skaiciavimai(89, 23);
}

void skaiciavimai(int a, int b)
{
	sudetis(a, b);
	atimtis(a, b);
}

void sudetis(int a, int b)
{
	cout << a << " + " << b << " = " << a + b << endl;
}

void atimtis(int a, int b)
{
	cout << a << " - " << b << " = " << a - b << endl;
}
```

Rezultatai:

```
74 + 32 = 106
74 - 32 = 42
89 + 23 = 112
89 - 23 = 66
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciavimai(int skaicius1, int skaicius2);
void sudetis(int a, int b);
void atimtis(int a, int b);

int main()
{
	int pirmas = 78, antras = 34;
	skaiciavimai(pirmas, antras);
}

void skaiciavimai(int skaicius1, int skaicius2)
{
	sudetis(skaicius1, skaicius2);
	atimtis(skaicius1, skaicius2);
}

void sudetis(int a, int b)
{
	int suma = a + b ;
	cout << a << " + " << b << " = " << suma << endl;
}

void atimtis(int a, int b)
{
	int skirtumas = a - b;
	cout << a << " - " << b << " = " << skirtumas << endl;
}
```

Rezultatai:

```
78 + 34 = 112
78 - 34 = 44
```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciavimai(int skaicius1, int skaicius2, int skaicius3);
void sudetis(int a, int b);
void sudetis(int a, int b, int c);

int main()
{
	int pirmas = 78, antras = 34, trecias = 45;
	skaiciavimai(pirmas, antras, trecias);
}

void skaiciavimai(int skaicius1, int skaicius2, int skaicius3)
{
	sudetis(skaicius1, skaicius2);
	sudetis(skaicius1, skaicius2, skaicius3);
}

void sudetis(int a, int b)
{
	int suma = a + b ;
	cout << a << " + " << b << " = " << suma << endl;
}

void sudetis(int a, int b, int c)
{
	cout << a << " + " << b << " + "
		<< c << " = " << a + b + c << endl;
}
```

Rezultatai:

```
78 + 34 = 112
78 + 34 + 45 = 157
```

### Pavyzdys 12

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciavimai(int skaicius1, int skaicius2);
void sudetis(int a, int b);
void sudetis(int a, int b, int c);

int main()
{
	int pirmas = 78, antras = 34;
	skaiciavimai(pirmas, antras);
}

void skaiciavimai(int skaicius1, int skaicius2)
{
	sudetis(skaicius1, skaicius2);
	sudetis(skaicius1, skaicius2, 14);
	int skaicius = 45;
	sudetis(skaicius1, skaicius2, skaicius);
}

void sudetis(int a, int b)
{
	int suma = a + b ;
	cout << a << " + " << b << " = " << suma << endl;
}

void sudetis(int a, int b, int c)
{
	cout << a << " + " << b << " + "
		<< c << " = " << a + b + c << endl;
}
```

Rezultatai:

```
78 + 34 = 112
78 + 34 + 14 = 126
78 + 34 + 45 = 157
```

### Pavyzdys 13

Kodas:

```cpp
#include <iostream>
using namespace std;

void lentele(int eilutes, int stulpeliai);

int main()
{
	lentele(3, 3);
	lentele(2, 5);
	lentele(4, 5);

	cout << "Iveskite norima lenteles dydi: ";
	int eil, stulp;
	cin >> eil >> stulp;
	lentele(eil, stulp);
}

void lentele(int eilutes, int stulpeliai)
{
	cout << "Daugybos (" << eilutes << "x" << stulpeliai << ") lentele" << endl;
	for (int i = 1; i <= eilutes; i++)
	{
		for (int j = 1; j <= stulpeliai; j++)
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
Daugybos (3x3) lentele
1 2 3
2 4 6
3 6 9

Daugybos (2x5) lentele
1 2 3 4 5
2 4 6 8 10

Daugybos (4x5) lentele
1 2 3 4 5
2 4 6 8 10
3 6 9 12 15
4 8 12 16 20

Iveskite norima lenteles dydi: 10 10
Daugybos (10x10) lentele
1 2 3 4 5 6 7 8 9 10
2 4 6 8 10 12 14 16 18 20
3 6 9 12 15 18 21 24 27 30
4 8 12 16 20 24 28 32 36 40
5 10 15 20 25 30 35 40 45 50
6 12 18 24 30 36 42 48 54 60
7 14 21 28 35 42 49 56 63 70
8 16 24 32 40 48 56 64 72 80
9 18 27 36 45 54 63 72 81 90
10 20 30 40 50 60 70 80 90 100
```

### Pavyzdys 14

Kodas:

```cpp
#include <iostream>
using namespace std;

void isvedimas(int skaiciai[], int kiekis);
void isvedimas(string komentaras, int masyvas[], int kiekis);

int main()
{
	int skaiciai[] = { 4, 7, 5, 6, 9, 2 };
	isvedimas(skaiciai, 6);

	int pazymiai[] = { 9, 8, 7, 10, 7, 6, 9 };
	isvedimas(pazymiai, 7);
	isvedimas("Moksleivio pazymiai", pazymiai, 7);
}

void isvedimas(int skaiciai[], int kiekis)
{
	cout << "masyvo skaiciai:" << endl;
	for (int i = 0; i < kiekis; i++)
	{
		cout << skaiciai[i] << " ";
	}
	cout << endl;
}

void isvedimas(string komentaras, int masyvas[], int kiekis)
{
	cout << komentaras << endl;
	for (int i = 0; i < kiekis; i++)
	{
		cout << masyvas[i] << " ";
	}
	cout << endl;
}
```

Rezultatai:

```
masyvo skaiciai:
4 7 5 6 9 2
masyvo skaiciai:
9 8 7 10 7 6 9
Moksleivio pazymiai
9 8 7 10 7 6 9
```

### Pavyzdys 15

Kodas:

```cpp
#include <iostream>
using namespace std;

void isvedimas(int skaiciai[], int kiekis);
void suma(int skaiciai[], int kiekis);
void vidurkis(int skaiciai[], int kiekis);

int main()
{
	int pazymiai[] = { 9, 8, 7, 10, 7, 6, 9 };
	int kiekis = 7;

	cout << "Duomenys su kuriais dirbame:" << endl;
	isvedimas(pazymiai, kiekis);

	cout << "Skaiciavimai is siu duomenu:" << endl;
	suma(pazymiai, kiekis);
	vidurkis(pazymiai, kiekis);
}

void isvedimas(int skaiciai[], int kiekis)
{
	cout << "masyvo skaiciai:" << endl;
	for (int i = 0; i < kiekis; i++)
	{
		cout << skaiciai[i] << " ";
	}
	cout << endl;
}

void suma(int skaiciai[], int kiekis)
{
	int suma = 0;
	for (int i = 0; i < kiekis; i++)
	{
		suma += skaiciai[i];
	}
	cout << "suma = " << suma << endl;
}

void vidurkis(int skaiciai[], int kiekis)
{
	int suma = 0;
	for (int i = 0; i < kiekis; i++)
	{
		suma += skaiciai[i];
	}
	cout << "vidurkis = " << (double)suma / kiekis << endl;
}
```

Rezultatai:

```
Duomenys su kuriais dirbame:
masyvo skaiciai:
9 8 7 10 7 6 9
Skaiciavimai is siu duomenu:
suma = 56
vidurkis = 8
```

### Pavyzdys 16

Kodas:

```cpp
#include <iostream>
using namespace std;

void veiksmaiSuMoksleiviu(int pazymiai[], int kiekis);
void isvedimas(int skaiciai[], int kiekis);
void vidurkis(int skaiciai[], int kiekis);

int main()
{
	int pazymiai1[] = { 9, 8, 7, 10, 7, 6, 9 };
	int kiekis1 = 7;
	veiksmaiSuMoksleiviu(pazymiai1, kiekis1);

	int pazymiai2[] = { 8, 7, 9, 2, 5, 7 };
	int kiekis2 = 6;
	veiksmaiSuMoksleiviu(pazymiai2, kiekis2);
}

void veiksmaiSuMoksleiviu(int pazymiai[], int kiekis)
{
	cout << "Duomenys su kuriais dirbame:" << endl;
	isvedimas(pazymiai, kiekis);

	cout << "Skaiciavimai is siu duomenu:" << endl;
	vidurkis(pazymiai, kiekis);

	cout << endl;
}

void isvedimas(int skaiciai[], int kiekis)
{
	cout << "moksleivio pazymiai:" << endl;
	for (int i = 0; i < kiekis; i++)
	{
		cout << skaiciai[i] << " ";
	}
	cout << endl;
}

void vidurkis(int skaiciai[], int kiekis)
{
	int suma = 0;
	for (int i = 0; i < kiekis; i++)
	{
		suma += skaiciai[i];
	}
	cout << "vidurkis = " << (double)suma / kiekis << endl;
}
```

Rezultatai:

```
Duomenys su kuriais dirbame:
moksleivio pazymiai:
9 8 7 10 7 6 9
Skaiciavimai is siu duomenu:
vidurkis = 8

Duomenys su kuriais dirbame:
moksleivio pazymiai:
8 7 9 2 5 7
Skaiciavimai is siu duomenu:
vidurkis = 6.33333
```

### Pavyzdys 17

Kodas:

```cpp
#include <iostream>
using namespace std;

void isvedimas(int skaiciai[], int kiekis);
void suma(int skaiciai[], int kiekis);

int main()
{
	int skaiciai1[] = { 4, 7, 8, 6, 3 };
	int kiekis1 = 5;
	int skaiciai2[] = { 8, 9, 8, 7, 9, 4 };
	int kiekis2 = 6;
	suma(skaiciai1, kiekis1);
	suma(skaiciai2, kiekis2);
}

void isvedimas(int skaiciai[], int kiekis)
{
	for (int i = 0; i < kiekis; i++)
	{
		cout << skaiciai[i] << " ";
	}
	cout << endl;
}

void suma(int skaiciai[], int kiekis)
{
	cout << "skaiciai masyve:" << endl;
	isvedimas(skaiciai, kiekis);

	int suma = 0;

	for (int i = 0; i < kiekis; i++)
	{
		suma += skaiciai[i];
	}

	cout << "suma = " << suma << "\n\n";
}
```

Rezultatai:

```
skaiciai masyve:
4 7 8 6 3
suma = 28

skaiciai masyve:
8 9 8 7 9 4
suma = 45
```

### Pavyzdys 18

Kodas:

```cpp
#include <iostream>
using namespace std;

void isvedimas(string komentaras, string sarasas[], int kiekis);

int main()
{
	string pirkiniai[] = { "sasiuvinys", "tusinukas", "piestukai", "trintukas", "kuprine" };
	int pirkKiekis = 5;

	string programavimoKalb[] = { "C++", "Python", "JavaScript" };
	int progKKiekis = 3;

	isvedimas("Pirkiniu sarasas", pirkiniai, pirkKiekis);
	isvedimas("Programavimo kalbos", programavimoKalb, progKKiekis);
}

void isvedimas(string komentaras, string sarasas[], int kiekis)
{
	cout << komentaras << ":" << endl;
	for (int i = 0; i < kiekis; i++)
	{
		cout << " - " << sarasas[i] << endl;
	}
	cout << endl;
}
```

Rezultatai:

```
Pirkiniu sarasas:
 - sasiuvinys
 - tusinukas
 - piestukai
 - trintukas
 - kuprine

Programavimo kalbos:
 - C++
 - Python
 - JavaScript
```

## Užduotys

### Užduotis 1

Parašykite ir iškvieskite funkciją, kuri per argumentų sąrašą priimtų norimą žodį. Funkcija gautą žodį turi išvesti jį apskliaudžiant dviem brūkšniukais iš kiekvieno šono (pavyzdžiui: `-- pomidoras --`). Šią funkciją kvieskite 5 kartus, kiekvieną kartą funkcijai duodant vis kitokį žodį.

### Užduotis 2

Parašykite ir iškvieskite funkciją, kuri per argumentų sąrašą priimtų vardą, pavardę, amžių ir profesiją. Ši funkcija, turi išvesti sakinį panaudojant gautus žodžius. Funkciją kvieskite du kartus, jai duodant skirtingus duomenis.

### Užduotis 3

Sukurkite 4 skirtingas funkcijas sumos, skirtumo, sandaugos bei dalmens radimui. Kiekviena iš jų turi priimti po du sveikuosius skaičius, turi išvesti kokį veiksmą ir su kokiais skaičiais atliko, bei atsakymą (pvz.: `5 + 7 = 12`). Iškvieskite šias funkcijas bent po vieną kartą, duodant skirtingus arba tuos pačius skaičius.

### Užduotis 4

Parašykite funkciją, kuri priimtų du skaičius. Joje išveskite tą skaičių, kuris yra didesnis. O jei skaičiai lygūs - išvestų tekstą "skaičiai lygūs".

### Užduotis 5

Sukurkite šias funkcijas:
- Kuri priimtų vardą, pavardę, akademinės grupės kodą. Funkcija turi išvesti gautą informaciją.
- Kuri priimtų tris skaičius (pažymius). Funkcija turi suskaičiuoti ir išvesti pažymių vidurkį.
- Apjungiančią funkciją, kuri per argumentų sąrašą priimtų vardą, pavardę, akademinės grupės kodą bei tris skaičius (pažymius). Joje iškvieskite kitus du, prieš tai sukurtus metodus. Šią pagrindinę funkciją kvieskite bent 2 kartus su skirtingais duomenimis.

### Užduotis 6

Parašykite ir iškvieskite funkciją, kuri per argumentų sąrašą priimtų skaičių, kuris nurodo kiek atsitiktinių skaičių yra norima sugeneruoti. Funkcija turi sugeneruoti ir išvesti nurodytą kiekį atsitiktinių skaičių, kiekvieną jų atskiriant tarpu.

### Užduotis 7

Parašykite ir iškvieskite funkciją, kuri priimtų šiuos skaičius: kiek – kiek atsitiktinių skaičių norima sugeneruoti; minimumas – mažiausia galima atsitiktinio skaičiaus reikšmė; maksimumas – didžiausia galima atsitiktinio skaičiaus reikšmė. Funkcija turi sugeneruoti nurodytą kiekį atsitiktinių skaičių, atsižvelgdama į generuojamų skaičių min ir max reikšmes. Kiekvieną šių skaičių turi išvesti atskiriant kableliu.

### Užduotis 8

Parašykite ir iškvieskite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija turi rasti ir išvesti mažiausią rastą skaičių.

### Užduotis 9

Parašykite ir iškvieskite funkciją, kuri per argumentus primtų žodžių masyvą. Funkcija turi rasti ir išvesti ilgiausią rastą žodį.

### Užduotis 10

Parašykite funkciją, kuri iš gauto žodžių masyvo rastų kuris žodis yra trumpiausias. Išvestų žodžius atskirose eilutėse, kaip nors išskiriant rastą trumpiausią žodį. Funkciją kvieskite kelis kartus su skirtingais žodžių masyvais.
