# Ciklas do while

## Vaizdo pamoka

Informacija ruošiama.

## Apie ciklą `do while`

Šis ciklas yra labai panašus į `while` ciklą, skiriasi tik atliekamų veiksmų eiliškumas. Ciklas `while` pirmiausiai tikrina ar sąlyga jam yra tinkama ir tuomet vykdo kodą. O ciklas `do while` pirma įvykdo kodą ir tik tada patikrina sąlyga ar jam reikia dar kartą vykdyti kodą.

## Ciklo `do while` sintaksė

```cpp
do {
    // kodas
} while (sąlyga);
```

- **kodas** - bus įvykdomas norimas kodas bent vieną kartą visada, bei dar vykdomas jei sąlyga bus teisinga (grąžins `true`).
- **sąlyga** - tai kas atsakys ar ciklas turi dar kartą kartoti nurodytą kodą, apsirašo taip pat kaip `if` sąlygoje.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 0;

	do
	{
		cout << skaicius << endl;
		skaicius++;
	} while (skaicius < 10);
}
```

Rezultatai:

```
0
1
2
3
4
5
6
7
8
9

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	do
	{
		cout << skaicius << endl;
		skaicius++;
	} while (skaicius % 15 != 0);
}
```

Rezultatai:

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;

	do
	{
		cout << skaicius << ", ";
		skaicius++;
	} while (skaicius < 100);
}
```

Rezultatai:

```
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 1;
	int suma = 0;

	do
	{
		suma += skaicius;
		skaicius++;
	} while (skaicius <= 100);

	cout << "skaiciu [1-100] suma: " << suma;
}
```

Rezultatai:

```
skaiciu [1-100] suma: 5050
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 20;

	do
	{
		if (skaicius % 3 == 0)
		{
			cout << "Skaicius " << skaicius << " dalinasi is 3" << endl;
		}
		else
		{
			cout << skaicius << endl;
		}
		skaicius--;
	} while (skaicius > 0);
}
```

Rezultatai:

```
20
19
Skaicius 18 dalinasi is 3
17
16
Skaicius 15 dalinasi is 3
14
13
Skaicius 12 dalinasi is 3
11
10
Skaicius 9 dalinasi is 3
8
7
Skaicius 6 dalinasi is 3
5
4
Skaicius 3 dalinasi is 3
2
1

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	bool testi = true;
	char pasirinkimas;

	do
	{
		cout << "Cia kazkokie norimi veiksmai" << endl;
		cout << "Testi? (t/n)" << endl;

		cin >> pasirinkimas;

		if (pasirinkimas != 't')
		{
			testi = false;
		}
	} while (testi);
}
```

Rezultatas 1:

```
Cia kazkokie norimi veiksmai
Testi? (t/n)
t
Cia kazkokie norimi veiksmai
Testi? (t/n)
t
Cia kazkokie norimi veiksmai
Testi? (t/n)
t
Cia kazkokie norimi veiksmai
Testi? (t/n)
t
Cia kazkokie norimi veiksmai
Testi? (t/n)
n

```

Rezultatas 2:

```
Cia kazkokie norimi veiksmai
Testi? (t/n)
n

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pasirinkimas;

	do
	{
		cout << "Pasirinkite is:" << endl
			<< "1 - x dalykas" << endl
			<< "2 - y dalykas" << endl;
		cin >> pasirinkimas;

		if (pasirinkimas < 1 || pasirinkimas > 2)
		{
			cout << "Blogai ivestas skaicius" << endl;
		}
	} while (pasirinkimas < 1 || pasirinkimas > 2);

	cout << "Pasirinkimas: " << pasirinkimas;
}
```

Rezultatas 1:

```
Pasirinkite is:
1 - x dalykas
2 - y dalykas
1
Pasirinkimas: 1
```

Rezultatas 2:

```
Pasirinkite is:
1 - x dalykas
2 - y dalykas
2
Pasirinkimas: 2
```

Rezultatas 3:

```
Pasirinkite is:
1 - x dalykas
2 - y dalykas
7
Blogai ivestas skaicius
Pasirinkite is:
1 - x dalykas
2 - y dalykas
-4
Blogai ivestas skaicius
Pasirinkite is:
1 - x dalykas
2 - y dalykas
3
Blogai ivestas skaicius
Pasirinkite is:
1 - x dalykas
2 - y dalykas
2
Pasirinkimas: 2
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pasirinkimas;

	do
	{
		cout << "Pasirinkite is:" << endl
			<< "1 - x dalykas" << endl
			<< "2 - y dalykas" << endl;
		cin >> pasirinkimas;

		if (pasirinkimas != 1 && pasirinkimas != 2)
		{
			cout << "Blogai ivestas skaicius" << endl;
		}
	} while (pasirinkimas != 1 && pasirinkimas != 2);

	cout << "Pasirinkimas: " << pasirinkimas;
}
```

Rezultatas 1:

```
Pasirinkite is:
1 - x dalykas
2 - y dalykas
1
Pasirinkimas: 1
```

Rezultatas 2:

```
Pasirinkite is:
1 - x dalykas
2 - y dalykas
-5
Blogai ivestas skaicius
Pasirinkite is:
1 - x dalykas
2 - y dalykas
7
Blogai ivestas skaicius
Pasirinkite is:
1 - x dalykas
2 - y dalykas
1
Pasirinkimas: 1
```

Rezultatas 3:

```
Pasirinkite is:
1 - x dalykas
2 - y dalykas
2
Pasirinkimas: 2
```

## Užduotys

### Užduotis 1

Išveskite visus skaičius nuo 1 iki pirmojo, kuris dalinasi iš 17.

### Užduotis 2

Išveskite visus skaičius nuo 1 iki pirmojo, kuris dalinasi iš 100. Vietoj kiekvieno skaičiaus, kuris dalinasi iš 5 išveskite tekstą "skaičius dalinasi iš 5".

### Užduotis 3

Išveskite visus lyginius skaičius nuo 1 iki pirmojo, kuris dalinasi iš 20. Iš visų šių išvestų skaičių sumą.

### Užduotis 4

Išveskite visus nelyginius skaičius nuo 1 iki 50. Raskite šių skaičių sumą ir vidurkį.

### Užduotis 5

Išvedinėkite atsitiktinius skaičius iki kol rasite skaičių, kuris dalinasi iš 3.
