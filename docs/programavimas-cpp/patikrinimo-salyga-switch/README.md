# Patikrinimo sąlyga switch

## Vaizdo pamoka

Informacija ruošiama.

## Apie `switch` sąlygą

- `switch` sąlyga skirta norint patikrinti kelias skirtingas galimas to paties kintamojo reikšmes. Pavyzdžiui, tikriname užsakymo kodą:
  - Ar kodas yra lygus 1?
  - Ar kodas yra lygus 2?
  - Ar kodas yra lygus 3?
  - …
- Bus įvykdomas pirmos teisingos sąlygos kodas.

## `switch` sąlygos sintaksė

```
switch (kintamasis)
{
case tikrinimas1:
    // vykdomas kodas, jei kintamasis == tikrinimas1
    break;
case tikrinimas2:
    // vykdomas kodas, jei kintamasis == tikrinimas2
    break;
default:
    // vykdomas kodas, jei joks case nebuvo įvykdytas
    break;
}
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius = 2;

	if (skaicius == 1)
	{
		cout << "skaicius lygus 1" << endl;
	}
	else if (skaicius == 2)
	{
		cout << "skaicius lygus 2" << endl;
	}
	else if (skaicius == 3)
	{
		cout << "skaicius lygus 3" << endl;
	}

	switch (skaicius)
	{
	case 1:
		cout << "skaicius lygus 1" << endl;
		break;
	case 2:
		cout << "skaicius lygus 2" << endl;
		break;
	case 3:
		cout << "skaicius lygus 3" << endl;
		break;
	}
}
```

Rezultatai:

```
skaicius lygus 2
skaicius lygus 2

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;

	cout << "iveskite norima skaiciu: ";
	cin >> skaicius;

	switch (skaicius)
	{
	case 1: cout << "pasirinkote 1!" << endl; break;
	case 2: cout << "pasirinkote 2!" << endl; break;
	case 5: cout << "pasirinkote 5!" << endl; break;
	case 10: cout << "pasirinkote 10!" << endl; break;
	}
}
```

Rezultatas 1:

```
iveskite norima skaiciu: 5
pasirinkote 5!

```

Rezultatas 2:

```
iveskite norima skaiciu: 2
pasirinkote 2!

```

Rezultatas 3:

```
iveskite norima skaiciu: 11

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius;

	cout << "iveskite norima skaiciu: ";
	cin >> skaicius;

	if (skaicius == 1)
	{
		cout << "pasirinktas skaicius 1" << endl;
	}
	else
	{
		cout << "skaicius nerastas" << endl;
	}

	switch (skaicius)
	{
	case 1:
		cout << "pasirinktas skaicius 1" << endl;
		break;
	default:
		cout << "skaicius nerastas" << endl;
		break;
	}
}
```

Rezultatas 1:

```
iveskite norima skaiciu: 5
skaicius nerastas
skaicius nerastas

```

Rezultatas 2:

```
iveskite norima skaiciu: 1
pasirinktas skaicius 1
pasirinktas skaicius 1

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius1, skaicius2, pasirinkimas;

	cout << "iveskite du skaicius: ";
	cin >> skaicius1 >> skaicius2;

	cout << "1 - suma\n"
		<< "2 - skirtumas\n"
		<< "3 - sandauga\n"
		<< "Pasirinkimas: ";
	cin >> pasirinkimas;

	switch (pasirinkimas)
	{
	case 1:
		cout << skaicius1 << " + " << skaicius2 << " = "
			<< skaicius1 + skaicius2 << endl;
		break;
	case 2:
		cout << skaicius1 << " - " << skaicius2 << " = "
			<< skaicius1 - skaicius2 << endl;
		break;
	case 3:
		cout << skaicius1 << " x " << skaicius2 << " = "
			<< skaicius1 * skaicius2 << endl;
		break;
	default:
		cout << "blogai pasirinktas veiksmas" << endl;
		break;
	}
}
```

Rezultatas 1:

```
iveskite du skaicius: 8 3
1 - suma
2 - skirtumas
3 - sandauga
Pasirinkimas: 2
8 - 3 = 5

```

Rezultatas 2:

```
iveskite du skaicius: 3
5
1 - suma
2 - skirtumas
3 - sandauga
Pasirinkimas: 1
3 + 5 = 8

```

Rezultatas 3:

```
iveskite du skaicius: 6 2
1 - suma
2 - skirtumas
3 - sandauga
Pasirinkimas: 3
6 x 2 = 12

```

Rezultatas 4:

```
iveskite du skaicius: 4 5
1 - suma
2 - skirtumas
3 - sandauga
Pasirinkimas: 9
blogai pasirinktas veiksmas

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "kazkas kazkas" << endl;

	char pasirinkimas;
	cout << "ar norite testi? (t/n)" << endl;
	cin >> pasirinkimas;

	switch (pasirinkimas)
	{
	case 't':
		cout << "dar kazkas daroma" << endl;
		break;
	case 'n':
		cout << "pabaigos zodis" << endl;
		break;
	default:
		cout << "ivyko klaida" << endl;
		break;
	}
}
```

Rezultatas 1:

```
kazkas kazkas
ar norite testi? (t/n)
t
dar kazkas daroma

```

Rezultatas 2:

```
kazkas kazkas
ar norite testi? (t/n)
n
pabaigos zodis

```

Rezultatas 3:

```
kazkas kazkas
ar norite testi? (t/n)
d
ivyko klaida

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius1, skaicius2;
	char pasirinkimas;

	int suma, skirtumas, sandauga;
	double dalmuo;

	cout << "ar norite skaiciuoti? (t/n)" << endl;
	cin >> pasirinkimas;

	switch (pasirinkimas)
	{
	case 't':
		cout << "Iveskite du skaicius: ";
		cin >> skaicius1 >> skaicius2;

		suma = skaicius1 + skaicius2;
		skirtumas = skaicius1 - skaicius2;
		sandauga = skaicius1 * skaicius2;
		dalmuo = (double)skaicius1 / skaicius2;

		cout << "skaiciu " << skaicius1 << " ir " << skaicius2
			<< " skaiciavimai:" << endl
			<< "suma = " << suma << endl
			<< "skirtumas = " << skirtumas << endl
			<< "sandauga = " << sandauga << endl
			<< "dalmuo = " << dalmuo << endl;
		break;
	case 'n':
		cout << "pabaigos zodis" << endl;
		break;
	default:
		cout << "ivyko klaida" << endl;
		break;
	}
}
```

Rezultatas 1:

```
ar norite skaiciuoti? (t/n)
n
pabaigos zodis

```

Rezultatas 2:

```
ar norite skaiciuoti? (t/n)
t
Iveskite du skaicius: 5 8
skaiciu 5 ir 8 skaiciavimai:
suma = 13
skirtumas = -3
sandauga = 40
dalmuo = 0.625

```

Rezultatas 3:

```
ar norite skaiciuoti? (t/n)
t
Iveskite du skaicius: 2 7
skaiciu 2 ir 7 skaiciavimai:
suma = 9
skirtumas = -5
sandauga = 14
dalmuo = 0.285714

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <math.h>
using namespace std;

int main()
{
	int skaicius1, skaicius2, skaicius3, laipsnis;
	int pasirinkimas;

	cout << "Pasirinkimai:" << endl
		<< "1 - skaiciuoti dvieju skaiciu suma ir skirtuma" << endl
		<< "2 - skaiciuoti dvieju skaiciu sandauga" << endl
		<< "3 - skaiciuoti vieno skaiciaus laipsni" << endl
		<< "4 - skaiciuoti triju skaiciu suma" << endl << endl;

	cout << "Iveskite pasirinkimo numeri: ";
	cin >> pasirinkimas;
	cout << endl;

	switch (pasirinkimas)
	{
	case 1:
		cout << "Pasirinkta dvieju skaiciu suma ir skirtumas" << endl;
		cout << "Iveskite du skaicius: ";
		cin >> skaicius1 >> skaicius2;
		cout << "Suma = " << skaicius1 + skaicius2 << endl;
		cout << "Skirtumas = " << skaicius1 - skaicius2 << endl;
		break;
	case 2:
		cout << "Pasirinkta dvieju skaiciu sandauga" << endl;
		cout << "Iveskite du skaicius: ";
		cin >> skaicius1 >> skaicius2;
		cout << "Atsakymas = " << skaicius1 * skaicius2 << endl;
		break;
	case 3:
		cout << "Pasirinkta vieno skaiciaus laipsnis" << endl;
		cout << "Iveskite skaiciu: ";
		cin >> skaicius1;
		cout << "Iveskite norima laipsni: ";
		cin >> laipsnis;
		cout << "Atsakymas = " << pow(skaicius1, laipsnis) << endl;
		break;
	case 4:
		cout << "Pasirinkta triju skaiciu suma" << endl;
		cout << "Iveskite tris skaicius: ";
		cin >> skaicius1 >> skaicius2 >> skaicius3;
		cout << "Atsakymas = " << skaicius1 + skaicius2 + skaicius3 << endl;
		break;
	default:
		cout << "Nera tokio pasirinkimo varianto" << endl;
		break;
	}
}
```

Rezultatas 1:

```
Pasirinkimai:
1 - skaiciuoti dvieju skaiciu suma ir skirtuma
2 - skaiciuoti dvieju skaiciu sandauga
3 - skaiciuoti vieno skaiciaus laipsni
4 - skaiciuoti triju skaiciu suma

Iveskite pasirinkimo numeri: 1

Pasirinkta dvieju skaiciu suma ir skirtumas
Iveskite du skaicius: 4 5
Suma = 9
Skirtumas = -1

```

Rezultatas 2:

```
Pasirinkimai:
1 - skaiciuoti dvieju skaiciu suma ir skirtuma
2 - skaiciuoti dvieju skaiciu sandauga
3 - skaiciuoti vieno skaiciaus laipsni
4 - skaiciuoti triju skaiciu suma

Iveskite pasirinkimo numeri: 2

Pasirinkta dvieju skaiciu sandauga
Iveskite du skaicius: 2 3
Atsakymas = 6

```

Rezultatas 3:

```
Pasirinkimai:
1 - skaiciuoti dvieju skaiciu suma ir skirtuma
2 - skaiciuoti dvieju skaiciu sandauga
3 - skaiciuoti vieno skaiciaus laipsni
4 - skaiciuoti triju skaiciu suma

Iveskite pasirinkimo numeri: 3

Pasirinkta vieno skaiciaus laipsnis
Iveskite skaiciu: 2
Iveskite norima laipsni: 3
Atsakymas = 8

```

Rezultatas 4:

```
Pasirinkimai:
1 - skaiciuoti dvieju skaiciu suma ir skirtuma
2 - skaiciuoti dvieju skaiciu sandauga
3 - skaiciuoti vieno skaiciaus laipsni
4 - skaiciuoti triju skaiciu suma

Iveskite pasirinkimo numeri: 4

Pasirinkta triju skaiciu suma
Iveskite tris skaicius: 1 2 3
Atsakymas = 6

```

Rezultatas 5:

```
Pasirinkimai:
1 - skaiciuoti dvieju skaiciu suma ir skirtuma
2 - skaiciuoti dvieju skaiciu sandauga
3 - skaiciuoti vieno skaiciaus laipsni
4 - skaiciuoti triju skaiciu suma

Iveskite pasirinkimo numeri: 5

Nera tokio pasirinkimo varianto

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius1, skaicius2;
	char veiksmas;

	cout << "Iveskite norima suskaiciuoti matematini veiksma" << endl;
	cin >> skaicius1 >> veiksmas >> skaicius2;

	cout << skaicius1 << " " << veiksmas << " " << skaicius2 << " = ";

	switch (veiksmas)
	{
	case '+': cout << skaicius1 + skaicius2; break;
	case '-': cout << skaicius1 - skaicius2; break;
	case '*': cout << skaicius1 * skaicius2; break;
	case '/': cout << (double)skaicius1 / skaicius2; break;
	default: cout << "Ivyko klaida"; break;
	}
}
```

Rezultatas 1:

```
Iveskite norima suskaiciuoti matematini veiksma
5 + 6
5 + 6 = 11
```

Rezultatas 2:

```
Iveskite norima suskaiciuoti matematini veiksma
9 - 6
9 - 6 = 3
```

Rezultatas 3:

```
Iveskite norima suskaiciuoti matematini veiksma
2 * 3
2 * 3 = 6
```

Rezultatas 4:

```
Iveskite norima suskaiciuoti matematini veiksma
7 / 3
7 / 3 = 2.33333
```

Rezultatas 5:

```
Iveskite norima suskaiciuoti matematini veiksma
5 a 2
5 a 2 = Ivyko klaida
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius1, skaicius2;
	char veiksmas;
	double atsakymas;

	cout << "Iveskite norima suskaiciuoti matematini veiksma" << endl;
	cin >> skaicius1 >> veiksmas >> skaicius2;

	switch (veiksmas)
	{
	case '+': atsakymas = skaicius1 + skaicius2; break;
	case '-': atsakymas = skaicius1 - skaicius2; break;
	case '*': atsakymas = skaicius1 * skaicius2; break;
	case '/': atsakymas = (double)skaicius1 / skaicius2; break;
    default: atsakymas = 0; break;
	}

	cout << skaicius1 << " " << veiksmas << " " << skaicius2
		<< " = " << atsakymas;
}
```

Rezultatas 1:

```
Iveskite norima suskaiciuoti matematini veiksma
2 + 3
2 + 3 = 5
```

Rezultatas 2:

```
Iveskite norima suskaiciuoti matematini veiksma
2 - 0
2 - 0 = 2
```

Rezultatas 3:

```
Iveskite norima suskaiciuoti matematini veiksma
4 * 5
4 * 5 = 20
```

Rezultatas 4:

```
Iveskite norima suskaiciuoti matematini veiksma
4 / 3
4 / 3 = 1.33333
```

Rezultatas 5:

```
Iveskite norima suskaiciuoti matematini veiksma
5 b 2
5 b 2 = 0
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int skaicius1, skaicius2;
	char veiksmas;
	double atsakymas;

	cout << "Iveskite norima suskaiciuoti matematini veiksma" << endl;
	cin >> skaicius1 >> veiksmas >> skaicius2;

	switch (veiksmas)
	{
	case '+':
		atsakymas = skaicius1 + skaicius2;
		break;
	case '-':
		atsakymas = skaicius1 - skaicius2;
		break;
	case '*':
	case 'x':
		atsakymas = skaicius1 * skaicius2;
		break;
	case '/':
	case ':':
		atsakymas = (double)skaicius1 / skaicius2;
		break;
	default:
		atsakymas = 0;
		break;
	}

	cout << skaicius1 << " " << veiksmas << " " << skaicius2
		<< " = " << atsakymas;
}
```

Rezultatas 1:

```
Iveskite norima suskaiciuoti matematini veiksma
2 + 3
2 + 3 = 5
```

Rezultatas 2:

```
Iveskite norima suskaiciuoti matematini veiksma
2 * 3
2 * 3 = 6
```

Rezultatas 3:

```
Iveskite norima suskaiciuoti matematini veiksma
8 x 2
8 x 2 = 16
```

Rezultatas 4:

```
Iveskite norima suskaiciuoti matematini veiksma
5 : 2
5 : 2 = 2.5
```

## Užduotys

### Užduotis 1

Išveskite vartotojui pasirinkimų informaciją (pavyzdžiui: pasirinkite 1, jei vanduo, 2 - jei …, 3 - jei ...). Liepkite vartotojui įvesti pasirinkimo numerį. Tikrinkite:

- Ar pasirinkimas lygus 1? Jei taip, išveskite, kad vartotojas pasirinko vandenį.
- Ar pasirinkimas lygus 2? Jei taip, išveskite, kad vartotojas pasirinko limonadą.
- Ar pasirinkimas lygus 3? Jei taip, išveskite, kad vartotojas pasirinko arbatą.
- Ar pasirinkimas lygus 4? Jei taip, išveskite, kad vartotojas pasirinko kavą.
- Jei pasirinkimas neegzistuoja, išveskite klaidos pranešimą.

### Užduotis 2

Liepkite vartotojui įvesti tris skaičius. Tikrinkite **pirmą** skaičių:

- Ar pirmas skaičius lygus 1? Jei taip, išvesti visų trijų skaičių sumą.
- Ar pirmas skaičius lygus 2? Jei taip, išvesti antro ir trečio skaičių sandaugą.
- Ar pirmas skaičius lygus 3? Jei taip, išvesti pirmo skaičiaus kvadratą.
- Jei nei vienas variantas netinka, išveskite klaidos pranešimą.
