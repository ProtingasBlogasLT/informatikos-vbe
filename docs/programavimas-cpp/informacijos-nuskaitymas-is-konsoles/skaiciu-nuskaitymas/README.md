# Skaičių nuskaitymas

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
	int skaicius;

	cout << "Iveskite skaiciu: ";
	cin >> skaicius;

	cout << "Jusu ivestas skaicius: " << skaicius;
}
```

Rezultatai:

```
Iveskite skaiciu: 5
Jusu ivestas skaicius: 5
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas, antras;

	cout << "Iveskite pirma skaiciu: ";
	cin >> pirmas;

	cout << "Iveskite antra skaiciu: ";
	cin >> antras;

	cout << "Jus ivedete " << pirmas << " ir " << antras;
}
```

Rezultatai:

```
Iveskite pirma skaiciu: 7
Iveskite antra skaiciu: 3
Jus ivedete 7 ir 3
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	string vardas = "Tomas";
	int amzius;

	cout << "Iveskite vartotojo " << vardas << " amziu: ";
	cin >> amzius;
	cout << vardas << " " << amzius << " m." << endl;
}
```

Rezultatai:

```
Iveskite vartotojo Tomas amziu: 24
Tomas 24 m.

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas, antras;

	cout << "Iveskite du skaicius (atskirtus naujoje eiluteje arba tarpu:" << endl;
	cin >> pirmas >> antras;

	cout << "Jus ivedete " << pirmas << " " << antras;
}
```

Rezultatas 1:

```
Iveskite du skaicius (atskirtus naujoje eiluteje arba tarpu:
14
5
Jus ivedete 14 5
```

Rezultatas 2:

```
Iveskite du skaicius (atskirtus naujoje eiluteje arba tarpu:
8 9
Jus ivedete 8 9
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int pirmas, antras, trecias;

	cout << "Iveskite tris skaicius:" << endl;
	cin >> pirmas >> antras >> trecias;

	int suma = pirmas + antras + trecias;

	cout << pirmas << " + " << antras << " + " << trecias << " = " << suma;
}
```

Rezultatas 1:

```
Iveskite tris skaicius:
1
2
3
1 + 2 + 3 = 6
```

Rezultatas 2:

```
Iveskite tris skaicius:
4 2
3
4 + 2 + 3 = 9
```

Rezultatas 3:

```
Iveskite tris skaicius:
8 7 2
8 + 7 + 2 = 17
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	double ugis;

	cout << "Iveskite savo ugi (m.): ";
	cin >> ugis;

	cout << "Jusu ugis: " << ugis << " m." << endl;
}
```

Rezultatai:

```
Iveskite savo ugi (m.): 1.7
Jusu ugis: 1.7 m.

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int ugis;

	cout << "Iveskite savo ugi (m.): ";
	cin >> ugis;

	cout << "Jusu ugis: " << ugis << " m." << endl;
}
```

Rezultatai:

```
Iveskite savo ugi (m.): 1.7
Jusu ugis: 1 m.

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	double paz1, paz2, paz3, paz4, paz5;

	cout << "Iveskite kelis pazymius (galima rasyti per kableli):\n";
	cin >> paz1 >> paz2 >> paz3 >> paz4 >> paz5;

	double vidurkis = (double)(paz1 + paz2 + paz3 + paz4 + paz5) / 5;
	cout << "Ivestu pazymiu vidurkis: " << vidurkis;
}
```

Rezultatai:

```
Iveskite kelis pazymius (galima rasyti per kableli):
7 8 9 6.3 1
Ivestu pazymiu vidurkis: 6.26
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	int dabar, gamybos_metai;

	cout << "Iveskite dabartinius metus: ";
	cin >> dabar;

	cout << "Iveskite masinos gamybos metus: ";
	cin >> gamybos_metai;

	cout << endl << "Masinai yra: " << dabar - gamybos_metai << " metu.";
}
```

Rezultatas 1:

```
Iveskite dabartinius metus: 2020
Iveskite masinos gamybos metus: 2005

Masinai yra: 15 metu.
```

Rezultatas 2:

```
Iveskite dabartinius metus: 2020
Iveskite masinos gamybos metus: 2018

Masinai yra: 2 metu.
```

## Užduotys

### Užduotis 1

Iš konsolės nuskaitykite du skaičius. Išveskite šių skaičių sumą.

### Užduotis 2

Iš konsolės nuskaitykite vardą ir amžių. Išveskite gautus duomenis į ekraną.

### Užduotis 3

Iš konsolės nuskaitykite bet kokį sveikąjį skaičių. Išveskite šį skaičių ir jo kvadratą.

### Užduotis 4

Iš konsolės nuskaitykite penkis skaičius. Juos išveskite į ekraną, raskite jų vidurkį.

### Užduotis 5

Parašykite programą, kuri laipsnius paverstų į Kelvinus ir Farenheitus.

### Užduotis 6

Iš konsolės nuskaitykite du skaičius. Raskite sumos, skirtumo, sandaugos ir dalmens atsakymus. Viską išveskite nurodant ir pačius veiksmus. Pavyzdžiui:

```
5 + 4 = 9
5 - 4 = 1
…
```

### Užduotis 7

Liepkite vartotojui įvesti tris skaičius. Į ekraną išveskite šiuos skaičius ir jų vidurkį. Pavyzdžiui:

```
Įvestų skaičių 4, 5, 8 vidurkis: 5,6.
```

### Užduotis 8

Liepkite vartotojui įvesti bet kokį sveikąjį skaičių. Išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5. Pavyzdžiui:

```
2 * 1 = 2
…
2 * 5 = 10
```

### Užduotis 9

Liepkite įvesti tris skaičius. Išveskite įvestus skaičius, jų kvadratus, juos pakeltus trečiuoju laipsniu, juos padalintus iš dviejų.
