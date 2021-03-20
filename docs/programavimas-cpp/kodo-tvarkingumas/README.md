# Kodo tvarkingumas

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pg4cI3nXs-Q?start=2334&end=2460" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Atitraukimai nuo krašto

Programoje kodo eilutės yra atitraukiamos nuo krašto su 4 tarpais arba 1 tab paspaudimu, jeigu tos kodo eilutės patenka į kažkokio kito dalyko ribas.

Pavyzdžiui, patikrinimo sąlygoje esantys veiksmai bus atitraukti nuo krašto, tiek kad nuo tos patikrinimo sąlygos būtų atsitraukę per 4 tarpus arba 1 tab.

Arba pavyzdžiui, jeigu bus ciklas, kuriame yra veiksmų, tai visi tie veiksmai bus patraukti nuo ciklo krašto per 4 tarpus arba 1 tab.

```cpp
#include <iostream>
using namespace std;

int main()
{
    cout << "pradzia!\n";

	if (true)
	{
		for (int i = 0; i < 10; i++)
		{
			cout << i << endl;
		}
	}

	cout << "pabaiga" << endl;
}
```

## Komentavimas

Kodas yra komentuojamas tais atvejais kai mes norime parašyti paaiškinimą apie tai kas vyksta kode arba kai norim kažkurią kodo dalį padaryti nebeaktyvią (nebevykdomą).

Kodą galima komentuoti dviem būdais:

- Aprašant komentarą toje pačioje eilutėje, t. y. naudojant vienos eilutės komentavimą su `// ...` ir tada rašant norimą komentarą.
- Aprašant komentarą per kelias eilutes, t. y. naudojant kelių eilučių komentavimą su `/* ... */` ir tada tarp šių simbolių rašant norimą komentarą.

```cpp
#include <iostream>
using namespace std;

int main()
{
	/* ciklas, kuris kartoja nurodytą
	kodą 5 kartus */
	for (int i = 0; i < 5; i++)
	{
		cout << i << endl; // išveda skaičių
	}
}
```
