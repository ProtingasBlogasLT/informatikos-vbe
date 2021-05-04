# Funkcijos

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/bzeN4Ina01I?start=432&end=2286" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Apie funkcijas

Labai paprastai tariant funkcija (arba metodas) yra tam tikrų veiksmų rinkinys, skirtas konkrečios užduoties atlikimui.

Keletas pagrindinių minčių:

- Funkcija apjungia tam tikros užduoties kodą į vieną vietą. Tai padeda turėti tvarkingesnį kodą.
- Funkcija turėtų atlikti vieną užduotį. Tai gali būti sumos skaičiavimas, duomenų nuskaitymas iš failo, duomenų išvedimas į konsolę iš masyvo, vidurkio skaičiavimas, duomenų filtravimui ir pan.
- Funkciją galima kviesti daug kartų. Todėl vieną kartą užrašius algoritmą ir funkcijai duodant skirtingus duomenis, ji atliks tą pačią užduotį, bet kiekvieną kartą su reikiamais duomenimis.
- Funkcija mato tik tuos duomenis (kintamuosius), kurie yra sukurti joje arba kurie yra perduodami jos iškvietimo metu.

## Funkcijų sintaksė

```cpp
<tipas> <pavadinimas>(<argumentai / parametrai>)
{
    <kodas>
    return <reiksme>; // jei metodo tipas yra ne void
}
```

- **tipas** - kokio (duomenų) tipo atsakymą funkciją grąžins. Jeigu funkcijos užduotis surasti sumą, tai atsakymas pavyzdžiui gali būti `int` ar `double` tipo, nes jei suma bus skaičiuojama iš `int` tipo skaičių, tai ir atsakymas bus `int`, jei iš `double`, tai bus `double`. Jeigu funkcija ieškos vidurkio, tuomet atsakymas greičiausiai bus `double` tipo. Jeigu funkcija turės sugeneruoti kažkokią tekstinę eilutę, tai atsakymas tikriausiai bus `string`. Ir t. t. Jeigu funkcija neturi grąžinti jokių duomenų kaip atsakymo, t. y. jeigu funkcija neturi grąžinti jokio atsakymo, o tik atlikti darbą, tuomet jos tipa bus `void`, kuris reiškia, kad funkcija tik atlieka darbą ir negrąžina jokio atsakymo. O jeigu funkcija yra `void`, tuomet `return` eilutė nebesirašo.
- **pavadinimas** - funkcijos pavadinimas. Taikomos tokios pačios taisyklės kaip ir kintamųjų pavadinimams. Šis pavadinimas naudojamas norint iškviesti funkciją. Pavadinime turėtų atsispindėti kokią užduotį sprendžia funkcija. Pavyzdžiui: įvedimas, išvedimas, suma, vidurkis, filtravimas, ...
- **argumentai / parametrai** - papildomi duomenys, kurie reikalingi funkcijos darbui bei kuriuos gauna funkcija.
- **kodas** - kodas (ar veiksmų rinkinys), kurį atlieka funkcija užduoties įgyvendinimui.
- **return** ir **reiksme** - glaudžiai susijusi su `<tipas>` dalimi, šioje vietoje yra grąžinamas atsakymas, tokio tipo, koks nurodytas `<tipas>` dalyje. Pavyzdžiui, jeigu `<tipas>` dalyje buvo nurodyta, kad ši funkcija turi grąžinti `int` tipo atsakymą, tuomet `return` dalyje turi būti grąžinta reikšmė arba kintamasis, kuris yra `int` tipo. Kai `<tipas>` yra `void`, tuomet ši return dalis išvis nesirašo.

## Funkcijos aprašymas ir iškvietimas

Funkcijas aprašyti ir iškviesti galima taip:

```cpp
#include <iostream>
using namespace std;

void funkcija(); // programa informuojama apie funkcijos egzistavimą

int main()
{
	funkcija(); // funkcija iškviečiama
}

void funkcija() // aprašoma funkcija
{
	// funkcijos kodas
}
```

Arba galima ir taip:

```cpp
#include <iostream>
using namespace std;

void funkcija() // aprašoma funkcija
{
	// funkcijos kodas
}

int main()
{
	funkcija(); // funkcija iškviečiama
}
```
