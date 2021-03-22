# Tiesos / netiesos nuskaitymas

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/aGVAVQSwxyQ?start=6466&end=6894" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	bool diplomas;
	cout << "Ar turite aukstojo mokslo diploma? (1 - taip; 0 - ne) ";
	cin >> diplomas;
	cout << "Diplomas: " << diplomas;
}
```

Rezultatas 1:

```
Ar turite aukstojo mokslo diploma? (1 - taip; 0 - ne) 1
Diplomas: 1
```

Rezultatas 2:

```
Ar turite aukstojo mokslo diploma? (1 - taip; 0 - ne) 0
Diplomas: 0
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	bool augintinis;
	cout << "Ar turite augintini? (1 - taip; 0 - ne) ";
	cin >> augintinis;
	cout << "Atsakymas: " << augintinis;
}
```

Rezultatai:

```
Ar turite augintini? (1 - taip; 0 - ne) 1
Atsakymas: 1
```

## Užduotys

### Užduotis 1

Paklauskite vartotojo ar jam patinka programuoti.

### Užduotis 2

Paklauskite vartotojo ar jis yra baigęs mokyklą.
