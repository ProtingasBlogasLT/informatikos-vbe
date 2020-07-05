# Teksto ir kintamųjų išvedimas

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
	string tekstas = "cia kazkoks tekstas";
	cout << "tekstas isvedimui: " << tekstas << endl;
}
```

Rezultatai:

```
tekstas isvedimui: cia kazkoks tekstas

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string tekstas = "cia kazkoks tekstas";
	cout << "tekstas isvedimui: ";
	cout << tekstas;
}
```

Rezultatai:

```
tekstas isvedimui: cia kazkoks tekstas
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas = "Gytis";
	int amzius = 30;

	cout << "vardas: " << vardas << endl;
	cout << "amzius: " << amzius << endl;
}
```

Rezultatai:

```
vardas: Gytis
amzius: 30

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string vardas = "Gytis";
	int amzius = 30;

	cout << "vardas: " << vardas << endl
		<< "amzius: " << amzius << endl;
}
```

Rezultatai:

```
vardas: Gytis
amzius: 30

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string zodis = "medis";
	int skaicius = 14;

	cout << zodis << skaicius << endl;
	cout << zodis << " " << skaicius << endl;
}
```

Rezultatai:

```
medis14
medis 14

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	int pirmas = 12;
	int antras = 18;

	cout << "pirmas = " << pirmas << endl;
	cout << "antras = " << antras << endl;
}
```

Rezultatai:

```
pirmas = 12
antras = 18

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	int pirmas = 12;
	int antras = 18;

	cout << "pirmas = " << pirmas << "\nantras = " << antras << endl;
}
```

Rezultatai:

```
pirmas = 12
antras = 18

```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string tekstas = "pirmas\nantras\ntrecias\nketvirtas\npenktas";
	cout << "tekstas per kelias skirtingas eilutes:\n\n" << tekstas;
}
```

Rezultatai:

```
tekstas per kelias skirtingas eilutes:

pirmas
antras
trecias
ketvirtas
penktas
```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	string marke = "toyota";
	string modelis = "yaris";
	int metai = 2018;
	int rida = 15076;

	cout << "Automobilio " << marke << " " << modelis
		<< " (" << metai << " m.) rida yra "
		<< rida << " km.";
}
```

Rezultatai:

```
Automobilio toyota yaris (2018 m.) rida yra 15076 km.
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
	int skaicius = 5;
	cout << "skaicius = " << skaicius << endl;
	skaicius = 8;
	cout << "skaicius = " << skaicius << endl;
}
```

Rezultatai:

```
skaicius = 5
skaicius = 8

```

## Užduotys

### Užduotis 1

Susikurkite kintamąjį savo vardui saugoti. Išveskite į ekraną tekstą "mano vardas yra " ir turimo kintamojo reikšmę.

### Užduotis 2

Susikurkite kintamuosius studento akademinei grupei ir vidurkiui saugoti. Išveskite į ekraną, atskirose eilutėse pagalbinius tekstus, po kurių sektų dvitaškis ir atitinkamas kintamasis. Pavyzdžiui:

```
akademinė grupė: ifzm-6
vidurkis: 8
```

### Užduotis 3

Susikurkite kintamąjį, kuris saugotų bet kokį žodį. Išveskite šį žodį naudojant vieną `cout`. Žodis turi būti išvestas 5 kartus toje pačioje eilutėje, neatskiriant jokiu tarpu.

### Užduotis 4

Susikurkite skaičiaus kintamąjį. Išveskite šį kintamąjį 5 kartus toje pačioje eilutėje, atskiriant tarpu. Naudokite tik vieną `cout`;

### Užduotis 5

Susikurkite šiuos kintamuosius, saugančius informaciją apie gyvūną: `pavadinimas`, `amžius`, `kailio spalva`, `svoris`. Išveskite šiuos duomenis gražiai suformatuotus vienoje eilutėje, sakinio forma. Pavyzdžiui:

```
Gyvūnas - šuo (2 m.) turi rudą kailio spalvą ir sveria 1.4 kg.
```

### Užduotis 6

Susikurkite kintamuosius vardui ir amžiui saugoti. Išveskite juos atskirose eilutėse su apibūdinančiuoju tekstu prieš reikšmes. Pavyzdžiui:

```
vardas: Tomas
amžius: 30
```

### Užduotis 7

Susikurkite kintamuosius medžio duomenims saugoti: `pavadinimas`, `aukštis`, `storis`. Išveskite visą šią informaciją sakinio pavidalu. Pavyzdžiui:

```
Medis liepa yra 7 metrų aukščio ir 145 mm storio.
```

### Užduotis 8

Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje be tarpų tarp šių skaičių. Pavyzdžiui:

```
skaičius - 25, išvedimas - 2525252525
```

### Užduotis 9

Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje su tarpais tarp šių skaičių. Pavyzdžiui:

```
skaičius - 25, rezultatas - 25 25 25 25 25
```

### Užduotis 10

Susikurkite kintamąjį, kuriame saugosite norimą simbolį (pavyzdžiui: `*`). Išveskite tuščiavidurį, norimo dydžio, kvadratą iš turimo simbolio.

(papildomai) Pabandykite tai atlikti naudojant tik vieną `cout` nepamirškite, kad norint pereiti į naują eilutę, galima tarp dvigubų kabučių (teksto) naudoti užrašą `\n`.
