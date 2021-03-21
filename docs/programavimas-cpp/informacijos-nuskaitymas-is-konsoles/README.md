# Informacijos nuskaitymas iš konsolės

## Vaizdo pamoka

Informacija ruošiama.

## Apie informacijos nuskaitymą iš konsolės

- Įvairios vartotojams skirtos programos įprastai turi turėti būdą kaip į ją įvesti informaciją.
- Kadangi šiuo metu dirbame su konsolinėmis programomis, todėl informacijos įvedimas į ją vyks šią informaciją tiesiog suvedant klaviatūros pagalba į konsolės langą.

## Nuskaitymas su `cin`

Nuskaitymui iš konsolės bus naudojamas `cin`. Jo veikimas panašus į `cout`, tik srauto operatorius žiūrės į kitą pusę (vietoj `<<`, bus `>>`).

Nuskaitant turės būti užrašomas kintamasis į kurį norite išsaugoti gautą reikšmę. Pavyzdžiui:

```cpp
int skaicius;
cin >> skaicius;
```

Bus nuskaitomi visi simboliai iki "white space", t.y. iki pirmo tarpo, naujos eilutės arba tab paspaudimo. O nuskaičius reikšmė bus įkeliama į nurodytą kintamąjį.

Norint atlikti nuskaitinėjimą į kelis kintamuosius vieną paskui kitą, prie to paties `cin` turėtų būti prilipdoma daugiau srauto operatorių (`>>`) ir prirašoma daugiau kintamųjų į kuriuos norima įkelti naujas reikšmes. Pavyzdžiui:

```cpp
int skaicius1, skaicius2;
cin >> skaicius1 >> skaicius2;
```

Į kiekvieną kintamąjį bus nuskaitomos reikšmės iki pirmojo "white space", t. y. tarpo, naujos eilutės arba tab paspaudimo.

## Nuskaitymas su `getline();`

Norint nuskaityti visą eilutę (iki enter paspaudimo) ar tam tikrą kiekį simbolių, galima naudoti ir `getline` funkciją.

Tokios eilutės sintaksė bus:

```cpp
getline(<nuskaitymo būdas>, <kintamasis>, <simbolis>);
```

- **nuskaitymo būdas** - iš kur mes nuskaitinėjame informaciją. Jei nuskaitome iš konsolės, tai rašysime `cin`, o jei iš kažkur kitur, tai atitinkamai kitą reikšmę.
- **kintamasis** - į kurį kintamąjį bus išsaugota nuskaityta reikšmė.
- **simbolis** (neprivaloma dalis) - iki kokio simbolio bus nuskaitinėjami simboliai ar tekstas. Bus nuskaitoma nebe iki pirmo tarpo ar naujos eilutės, bet iki nurodyto simbolio.

Todėl, nuskaitymas galėtų atrodyti kažkaip panašiai:

```cpp
string tekstas;
getline(cin, tekstas);
```

O jeigu nuskaitinėti iki pirmo kablelio, tuomet būtų galima užrašyti taip:

```cpp
string tekstas;
getline(cin, tekstas, ',');
```

Papildomai galite pažiūrėti:

<iframe width="560" height="315" src="https://www.youtube.com/embed/__o1jE0JSiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Nuskaitymas su `cin.get()`

Norint nuskaityti tam tikrą kiekį simbolių, taip pat, galima naudoti `cin.get()` funkciją.

Sintaksės pavyzdys:

```cpp
cin.get(<masyvas>, <simbolių kiekis>);
```

- **masyvas** - į kokį `char` masyvą bus išsaugoti nuskaityti simboliai.
- **simbolių kiekis** - kiek simbolių bus nuskaitoma iš buferio (angl. stream buffer).

Todėl, jeigu norime nuskaityti 10 simbolių, rašysime kažką tokio:

```cpp
char simboliai[10];
cin.get(simboliai, 10);
```

Papildomai galite pažiūrėti:

<iframe width="560" height="315" src="https://www.youtube.com/embed/yMwA4u7eXEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Dėl nenuskaitytų simbolių iš buferio

Visi nuskaitymo metu nepanaudoti simboliai (neįkelti į kintamuosius ar kitaip nenuskaityti / neišvalyti) ir toliau egzistuos buferyje. Programos eigoje, vėliau atlikinėjant daugiau nuskaitymų iš konsolės (ar ateityje - failo), gali būti nuskaitomi šie nepanaudoti simboliai, kas gali atrodyti kaip klaida, todėl papildomai vertėtų pasidomėti `cin.ignore()` ir `cin >> ws`.

Norint pasitikrinti, kad buferyje lieka duomenų, galima atlikti dar vieną nuskaitymą, neprašant vartotojo, kad kažką darytų:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string tekstas, likusi_dalis;
    cout << "Iveskite teksto, dekite ; ir iveskite daugiau teksto:" << endl;
    getline(cin, tekstas, ';');
    getline(cin, likusi_dalis);
    cout << endl << "Jusu ivestas tekstas:" << endl << tekstas << "\n\n"
        << "Likusi dalis ivedime:" << endl << likusi_dalis << endl;
}
```

Tokia programa veiks taip:

```
Iveskite teksto, dekite ; ir iveskite daugiau teksto:
mano norimas tekstas;dar daugiau teksto

Jusu ivestas tekstas:
mano norimas tekstas

Likusi dalis ivedime:
dar daugiau teksto

```

Norint išvengti tokių situacijų galima naudoti šiuos dalykus:

- `cin.ignore()` - įprastu atveju ignoruos (nuskaitys iš buferio ir išmes lauk) vieną sekantį simbolį iš buferio, todėl sekančiame nuskaityme bus gaunamos reikšmės praleidžiant vieną simbolį. Tai gali būti naudinga kai tarkim vyksta skaičiaus nuskaitymas ir iškart po jo yra `getline` eilutė, kuri nuskaitymą vykdo iki naujos eilutės. Tačiau problema būna tuomet, kai įvedus skaičių ir paspaudus `enter`, skaičius yra nuskaitytas, tačiau naujos eilutės ženklas yra likęs buferyje, dėl ko `getline` nuskaito būtent tą naują eilutę ir nebežiūrės nieko kas sektų po to.
- `cin.ignore(10)` - tarp skliaustų nurodant kokį nors skaičių, bus ignoruojami 10 sekančių simbolių iš buferio.
- `cin.ignore(15, '\n')` - galima nurodyti norimą kiekį simbolių ignoravimui arba simbolį iki kurio bus viskas ignoruojama. Šiuo atveju bus ignoruojama iki 15 simbolių arba iki pirmos naujos eilutės.
- `cin >> ws` - išvalys visus sekančius "white spaces", t. y. išvalys viską kas yra paprasti tarpai, naujos eilutės, bei `tab` paspaudimai.

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas;
	int amzius;

	cout << "Iveskite amziu: ";
	cin >> amzius;

	cout << "Iveskite varda: ";
	getline(cin, vardas);

	cout << endl << "Ivesta informacija: " << vardas << " " << amzius << endl;
}
```

Rezultatas:

```
Iveskite amziu: 55
Iveskite varda:
Ivesta informacija:  55

```

### Pavyzdys 2

Kodas:

```cpp{12}
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas;
	int amzius;

	cout << "Iveskite amziu: ";
	cin >> amzius;
	cin.ignore();

	cout << "Iveskite varda: ";
	getline(cin, vardas);

	cout << endl << "Ivesta informacija: " << vardas << " " << amzius << endl;
}
```

Rezultatas:

```
Iveskite amziu: 55
Iveskite varda: Tomas

Ivesta informacija: Tomas 55

```

### Pavyzdys 3

Kodas:

```cpp{14}
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas;
	int amzius;

	cout << "Iveskite amziu: ";
	cin >> amzius;

	cout << "Iveskite varda: ";
	cin >> ws;
	getline(cin, vardas);

	cout << endl << "Ivesta informacija: " << vardas << " " << amzius << endl;
}
```

Rezultatas:

```
Iveskite amziu: 80
Iveskite varda: Petras

Ivesta informacija: Petras 80

```
