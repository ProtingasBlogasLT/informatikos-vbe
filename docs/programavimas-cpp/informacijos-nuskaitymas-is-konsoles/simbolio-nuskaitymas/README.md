# Simbolio nuskaitymas

## Vaizdo pamoka

Informacija ruošiama.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char simbolis;
	cout << "Iveskite norima simboli: ";
	cin >> simbolis;
	cout << "Ivestas simbolis: " << simbolis;
}
```

Rezultatas 1:

```
Iveskite norima simboli: *
Ivestas simbolis: *
```

Rezultatas 2:

```
Iveskite norima simboli: ***
Ivestas simbolis: *
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char simbolis;
	cout << "Iveskite norima simboli: ";
	cin >> simbolis;
	cout << simbolis << simbolis << simbolis << endl;
	cout << simbolis << " " << simbolis << endl;
	cout << simbolis << simbolis << simbolis;
}
```

Rezultatas 1:

```
Iveskite norima simboli: *
***
* *
***
```

Rezultatas 2:

```
Iveskite norima simboli: -
---
- -
---
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char simbolis;
	cout << "Iveskite norima simboli: ";
	cin >> simbolis;
	cout << "Ivesto simbolio skaitmenine reiksme: " << (int)simbolis;
}
```

Rezultatai:

```
Iveskite norima simboli: *
Ivesto simbolio skaitmenine reiksme: 42
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	char simbolis;
	cout << "Iveskite norima simboli: ";
	cin >> simbolis;
	cout << "Ivestas simbolis: " << simbolis << endl;

	string likutis;
	cin >> likutis;
	cout << "Likutis: " << likutis;
}
```

Rezultatai:

```
Iveskite norima simboli: ***
Ivestas simbolis: *
Likutis: **
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	char pasirinkimas;
	cout << "Ar testi programos darba? (t/n)" << endl;
	cin >> pasirinkimas;
	cout << "Pasirinkta: " << pasirinkimas;
}
```

Rezultatai:

```
Ar testi programos darba? (t/n)
t
Pasirinkta: t
```

## Užduotys

### Užduotis 1

Nuskaitykite iš konsolės norimą simbolį. Nupieškite kvadratą iš šio simbolio. Pavyzdžiui:

```
***
***
***
```

### Užduotis 2

Nuskaitykite iš konsolės norimą simbolį. Nubraižykite eglutę iš gauto simbolio. Pavyzdžiui:

```
     *
    ***
  ********
    ****
  ********
************
     *
```
