---
sidebar: auto
prev: ../../
---

# Ciklo while užduotis nr. 13 (sudėtingesnė)

## Užduoties sąlyga

Sukurkite skaičiuotuvą, kuris vartotojui leistų atlikinėti tiek skaičiavimų kiek jis nori ir tokių skaičiavimų (suma, skirtumas, sandauga, dalmuo) kokių jis nori.

Tokios programos veikimo pavyzdys:

```
Ar norite atlikti skaičiavimus (t/n)? t
Įveskite skaičiavimą (skaičių, veiksmą, skaičių): 5 + 3
Atsakymas: 8

Ar norite atlikti skaičiavimus (t/n)? t
Įveskite skaičiavimą (skaičių, veiksmą, skaičių): 4 * 3
Atsakymas: 12

Ar norite atlikti skaičiavimus (t/n)? n
Programa baigė savo darbą.
```

Čia pateiktas tik pavyzdinis veikimas, kas reiškia, kad galima programą realizuoti ir kitaip. Pavyzdžiui, leidžiant suvesti skaičius ir tuomet dar papildomai užklausinėjant kokius veiksmus su tais skaičiuoti arba grįžtant prie naujų skaičių įvedimo.

## Sprendimas 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char vykdymas = 't';

	int pirmas, antras;
	char veiksmas;

	while (vykdymas == 't')
	{
		cout << "Iveskite skaiciavima (skaicius, veiksmas, skaicius): ";
		cin >> pirmas >> veiksmas >> antras;

		switch (veiksmas)
		{
		case '+': cout << "Atsakymas: " << pirmas + antras << endl; break;
		case '-': cout << "Atsakymas: " << pirmas - antras << endl; break;
		case '*': cout << "Atsakymas: " << pirmas * antras << endl; break;
		case '/': cout << "Atsakymas: " << (double)pirmas / antras << endl; break;
		default: cout << "Ivyko klaida" << endl; break;
		}

		cout << "Ar norite skaiciuoti dar karta (t/n)? ";
		cin >> vykdymas;
	}

	return 0;
}
```

Rezultatai:

```
Iveskite skaiciavima (skaicius, veiksmas, skaicius): 5 + 3
Atsakymas: 8
Ar norite skaiciuoti dar karta (t/n)? t
Iveskite skaiciavima (skaicius, veiksmas, skaicius): 8 * 2
Atsakymas: 16
Ar norite skaiciuoti dar karta (t/n)? n

```

## Sprendimas 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char vykdymas;

	int pirmas, antras;
	char veiksmas;

	cout << "Ar norite skaiciuoti (t/n)? ";
	cin >> vykdymas;

	while (vykdymas == 't')
	{
		cout << "Iveskite skaiciavima (skaicius, veiksmas, skaicius): ";
		cin >> pirmas >> veiksmas >> antras;

		switch (veiksmas)
		{
		case '+': cout << "Atsakymas: " << pirmas + antras << endl; break;
		case '-': cout << "Atsakymas: " << pirmas - antras << endl; break;
		case '*': cout << "Atsakymas: " << pirmas * antras << endl; break;
		case '/': cout << "Atsakymas: " << (double)pirmas / antras << endl; break;
		default: cout << "Ivyko klaida" << endl; break;
		}

		cout << "Ar norite skaiciuoti dar karta (t/n)? ";
		cin >> vykdymas;
	}

	cout << "Programa baige darba" << endl;

	return 0;
}
```

Rezultatai:

```
Ar norite skaiciuoti (t/n)? t
Iveskite skaiciavima (skaicius, veiksmas, skaicius): 7 + 4
Atsakymas: 11
Ar norite skaiciuoti dar karta (t/n)? t
Iveskite skaiciavima (skaicius, veiksmas, skaicius): 4 / 3
Atsakymas: 1.33333
Ar norite skaiciuoti dar karta (t/n)? t
Iveskite skaiciavima (skaicius, veiksmas, skaicius): 5 * 3
Atsakymas: 15
Ar norite skaiciuoti dar karta (t/n)? n
Programa baige darba

```

## Sprendimas 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char vykdymas;

	int pirmas, antras;
	char veiksmas;

	cout << "Ar norite skaiciuoti (t/n)? ";
	cin >> vykdymas;

	while (vykdymas == 't')
	{
		cout << "Iveskite du skaicius: ";
		cin >> pirmas >> antras;

		while (true)
		{
			cout << "Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): ";
			cin >> veiksmas;

			if (veiksmas == 'n')
			{
				break;
			}

			cout << pirmas << " " << veiksmas << " " << antras << " = ";

			switch (veiksmas)
			{
			case '+': cout << pirmas + antras << endl; break;
			case '-': cout << pirmas - antras << endl; break;
			case '*': cout << pirmas * antras << endl; break;
			case '/': cout << (double)pirmas / antras << endl; break;
			default: cout << "Ivyko klaida" << endl; break;
			}
		}

		cout << "Ar norite skaiciuoti dar karta (t/n)? ";
		cin >> vykdymas;
	}

	cout << "Programa baige darba" << endl;

	return 0;
}
```

Rezultatai:

```
Ar norite skaiciuoti (t/n)? t
Iveskite du skaicius: 5 3
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): +
5 + 3 = 8
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): -
5 - 3 = 2
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): *
5 * 3 = 15
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): n
Ar norite skaiciuoti dar karta (t/n)? t
Iveskite du skaicius: 7 8
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): /
7 / 8 = 0.875
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): *
7 * 8 = 56
Iveskite veiksma (+ - * /), kuri atlikti su skaiciais (isejimui - n): n
Ar norite skaiciuoti dar karta (t/n)? n
Programa baige darba
```
