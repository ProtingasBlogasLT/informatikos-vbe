# Kintamieji

## Vaizdo pamoka

Informacija ruošiama.

## Apie kintamuosius

- Kintamieji yra jūsų duomenys.
- Šie duomenys gali būti įvairūs skaičiai, simboliai, tekstas ar kita.
- Jie gali būti panaudojami, pakeičiami.
- Su kintamaisiais galite saugoti bet kokią programai reikalingą informaciją. Pavyzdžiui duomenis apie žmones, daiktus, užsakymus ar kita.
- Sintaksė: `var pavadinimas = reikšmė;` arba `tipas pavadinimas = reikšmė;`

## Taisyklės kuriant kintamuosius

- Kintamojo pavadinimas prasideda su žodžiu var arba jo tipo pavadinimu, iškart po kurio seka kintamojo pavadinimas.
- Kintamojo pavadinimą gali sudaryti raidės, skaičiai ir apatinis brūkšnelis (`A-z`, `0-9`, `_`).
- Kintamojo pavadinimas gali prasidėti tik raide arba apatiniu brūkšneliu.
- Kintamųjų pavadinimai yra jautrūs mažosioms/didžiosioms raidėms. A didžioji ir a mažoji nėra tas pats, todėl kintamasis pavadinimu `age` ir kintamasis pavadinimu `AGE` nėra tas pats.
- Kintamojo pavadinime negali būti tarpo.
- Aprašant reikšmę reikia nepamiršti naudoti ar nenaudoti kabučių, pagal tai koks kintamojo tipas yra naudojamas.

## Kintamųjų (duomenų) tipai

| Kintamojo tipas | Apibūdinimas | Pavyzdinė reikšmė |
| --------------- | ------------ | ----------------- |
| `int` | sveikasis skaičius | `4` |
| `float` | skaičius per kablelį | `8.6584845` |
| `double` | skaičius per kablelį, 2x tikslesnis už `float` | `6.15788728245154` |
| `char` | raidė, simbolis | `'n'` |
| `string` | keli simboliai, žodis, tekstas | `"pastatas"` |
| `bool` | tiesa / netiesa, tik `true` arba `false` | `true` |

## Pavyzdžiai

### Pavyzdys 1

```cpp
#include <string>
using namespace std;

int main()
{
	string vardas = "Tomas";
	string pavarde = "Tomavicius";
	int amzius = 25;
	double ugis = 1.8;
}
```

### Pavyzdys 2

```cpp
#include <string>
using namespace std;

int main()
{
	string marke = "tesla";
	string modelis = "model s";
	int metai = 2018;
	int rida = 1020;
	string spalva = "balta";
	string kebuloTipas = "sedanas";
	double darbinisTuris = 2.0;
}
```

### Pavyzdys 3

```cpp
#include <string>
using namespace std;

int main()
{
	string vardas_pavarde = "Petras Petraitis";
	int amzius = 20;
	string specialybe = "buhalteris";
	double alga = 11.5; // eur/val
}
```

### Pavyzdys 4

```cpp
#include <string>
using namespace std;

int main()
{
	int koju_skaicius = 4;
	string pavadinimas = "liutas";
	string kailis = "trumpas";
	int greitis = 5; // kmh
	string spalva = "ruda";
}
```

### Pavyzdys 5

```cpp
#include <string>
using namespace std;

int main()
{
	string pavadinimas = "azuolas";
	int metai = 12;
	float aukstis = 7.4;
	float storis = 0.8;
	bool sula = false;
}
```

### Pavyzdys 6

```cpp
using namespace std;

int main()
{
	int skaicius1, skaicius2, skaicius3;
}
```

### Pavyzdys 7

```cpp
using namespace std;

int main()
{
	int skaicius1 = 5,
		skaicius2 = 7,
		skaicius3 = 3;
}
```

### Pavyzdys 8

```cpp
using namespace std;

int main()
{
	int sk1, sk2;
	sk1 = sk2 = 5;
}
```

## Užduotys 

### Užduotis 1

Aprašykite kintamuosius, saugančius šią informaciją apie studentą:

- Vardas;
- Pavardė;
- Amžius;
- Ūgis;
- Svoris;
- Aukštoji mokykla;
- Akademinės grupės kodas;
- Kursas;
- Studijų programos pavadinimas;
- Atsiskaitytų kreditų skaičius;

### Užduotis 2

Aprašykite kintamuosius, saugančius šią informaciją apie miestą:

- Pavadinimas;
- Valstybė;
- Apskritis;
- Įkūrimo data;
- Meras;
- Plotas kv. km.;
- Gyventojų skaičius;
