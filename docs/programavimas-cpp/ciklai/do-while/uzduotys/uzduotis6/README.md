---
sidebar: auto
prev: ../../
---

# Ciklo do while užduotis nr. 6

## Užduoties sąlyga

Leiskite vartotojui atlikinėti skaičiavimus tol kol jis norės.

Tokios galimos programos veikimo pavyzdys:

```
Įveskite norimą atlikti skaičiavimą (skaičius, veiksmas, skaičius):
5 + 3
Atsakymas: 8

Ar dar skaičiuoti (t/n)? t

Įveskite norimą atlikti skaičiavimą (skaičius, veiksmas, skaičius):
8 * 2
Atsakymas: 16

Ar dar skaičiuoti (t/n)? n
```

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas, antras;
	char veiksmas;

	char tesimas;

	do
	{
		cout << "Iveskite norima atlikti skaiciavima (skaicius, veiksmas, skaicius):" << endl;
		cin >> pirmas >> veiksmas >> antras;

		switch (veiksmas)
		{
		case '+': cout << "Atsakymas: " << pirmas + antras; break;
		case '-': cout << "Atsakymas: " << pirmas - antras; break;
		case '*': cout << "Atsakymas: " << pirmas * antras; break;
		case '/': cout << "Atsakymas: " << (double)pirmas / antras; break;
		default: cout << "Ivyko klaida"; break;
		}

		cout << "\n\nAr dar norite skaiciuoti (t/n)? ";
		cin >> tesimas;
		cout << endl;
	} while (tesimas == 't');

	return 0;
}
```

Rezultatas 1:

```
Iveskite norima atlikti skaiciavima (skaicius, veiksmas, skaicius):
5 + 7
Atsakymas: 12

Ar dar norite skaiciuoti (t/n)? t

Iveskite norima atlikti skaiciavima (skaicius, veiksmas, skaicius):
2 * 5
Atsakymas: 10

Ar dar norite skaiciuoti (t/n)? n
```

Rezultatas 2:

```
Iveskite norima atlikti skaiciavima (skaicius, veiksmas, skaicius):
2 / 5
Atsakymas: 0.4

Ar dar norite skaiciuoti (t/n)? t

Iveskite norima atlikti skaiciavima (skaicius, veiksmas, skaicius):
9 * 2
Atsakymas: 18

Ar dar norite skaiciuoti (t/n)? t

Iveskite norima atlikti skaiciavima (skaicius, veiksmas, skaicius):
3 + 4
Atsakymas: 7

Ar dar norite skaiciuoti (t/n)? n
```
