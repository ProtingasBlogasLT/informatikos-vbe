# Informacijos išvedimas į konsolę

## Vaizdo pamoka

Informacija ruošiama.

## Aprašymas

Šiuo metu dirbame su konsolės langu, todėl jeigu norime matyti kokius nors programos eigos aprašymus, ar pačius rezultatus, reikės į konsolę sugebėti išvesti tekstą ir kintamuosius.

## Galimos komandos

Bus naudojamos `cout` ir `endl` komandos.

`cout` rodo išvedimo į ekraną komandą, o `endl` rodo naujos eilutės įterpimo veiksmą.

Į `cout` galima įdėti daugiau nei vieną išvedimo elementą, kiekvienas šis dalykas yra atskiriamas su `<<`.

Tarkim:

```cpp
cout << "tekstas";
```

Išves tik žodį `tekstas` į konsolę, be naujų eilučių ar dar ko.

Arba:

```cpp
cout << "tekstas" << endl;
```

Išves žodį `tekstas` į konsolę ir padės naują eilutę.

Na, arba:

```cpp
cout << "tekstas" << endl << "kitas" << endl;
```

Išves:

```
tekstas
kitas

```

Ant galo reikia pastebėti, kad yra įterpta dar viena papildoma eilutė, nes gale `cout` yra naudojamas `endl`.

## Paprasto teksto išvedimas

- Norint išvesti paprastą tekstą, tokį koks jis yra, jį reikia rašyti tarp dvigubų kabučių.
- Šis tekstas dažniausiai bus naudojamas apibūdinti gautus rezultatus.
- Tekste galima įrašyti \n kas padėtų naują eilutę nurodytoje vietoje.

## Pavyzdžiai (paprasto teksto)

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "Labas" << endl;
	cout << "Mano vardas yra" << endl;
	cout << "behh" << endl;
}
```

Rezultatas:

```
Labas
Mano vardas yra
behh

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "Labas\n";
	cout << "Mano vardas yra\n";
	cout << "behh\n";
}
```

Rezultatas:

```
Labas
Mano vardas yra
behh

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "PROGRAMA PRADEDA DARBA" << endl;
	cout << "Programos autorius: x y\n";
	cout << "Programa atlieka siuos veiksmus:" << endl;
	cout << "1 - ..." << endl;
	cout << "2 - ......\n";
	cout << "3 - ...\n";
	cout << endl;
	cout << "Atsakymai:" << endl;
	cout << "abc" << endl;
	cout << "PROGRAMOS PABAIGA";
}
```

Rezultatas:

```
PROGRAMA PRADEDA DARBA
Programos autorius: x y
Programa atlieka siuos veiksmus:
1 - ...
2 - ......
3 - ...

Atsakymai:
abc
PROGRAMOS PABAIGA
```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "Labas\nMano vardas\nToks ir toks\n";
}
```

Rezultatas:

```
Labas
Mano vardas
Toks ir toks

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "pirma teksto eilute" << endl << "antra teksto eilute" << endl << "trecia teksto eilute";
}
```

Rezultatas:

```
pirma teksto eilute
antra teksto eilute
trecia teksto eilute
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "pirmas\nantras" << endl;
	cout << "trecias\nketvirtas\n";
	cout << "penktas\nsestas";
}
```

Rezultatas:

```
pirmas
antras
trecias
ketvirtas
penktas
sestas
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "zodis" << "kitas" << "dar" << endl;
}
```

Rezultatas:

```
zodiskitasdar

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "zodis " << "kitas " << "dar" << endl;
}
```

Rezultatas:

```
zodis kitas dar

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
	cout << "sekam " << "pasaka "
		<< "po " << "viena "
		<< "zodi" << endl
		<< "kita eilute" << endl;
}
```

Rezultatas:

```
sekam pasaka po viena zodi
kita eilute

```

## Užduotys (paprasto teksto)

### Užduotis 1

Pirmoje eilutėje išveskite savo vardą ir amžių. Antroje eilutėje išveskite kodėl pasiryžote išbandyti programavimą.

### Užduotis 2

Išveskite bet kokį eilėraštį, kurį sudarytų bent 5 eilutės.

### Užduotis 3

Išveskite 3x3 dydžio tuščiavidurį kvadratą iš * simbolio. Galutinio rezultato pavyzdys:

```
***
* *
***
```

### Užduotis 4

Išveskite:

```
*
**
***
```

## Kintamųjų išvedimas

