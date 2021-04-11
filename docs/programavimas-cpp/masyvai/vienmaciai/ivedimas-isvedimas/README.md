# Vienmačiai masyvai: informacijos įvedimas ir gavimas (išvedimas)

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
    // Masyvo sukūrimas
    int pazymiai[] = {8, 7, 9, 10, 6, 8};

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 6;

    // Masyvo išvedimas
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << endl;
    }

    return 0;
}
```

Rezultatai:

```
8
7
9
10
6
8

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int pazymiai[5];

    // Masyvo užpildymas reikšmėmis
    pazymiai[0] = 8;
    pazymiai[1] = 7;
    pazymiai[2] = 9;
    pazymiai[3] = 10;
    pazymiai[4] = 6;

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 5;

    // Masyvo išvedimas
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << " ";
    }
    cout << endl;

    return 0;
}
```

Rezultatai:

```
8 7 9 10 6

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int pazymiai[5];

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 5;

    // Masyvo užpildymas reikšmėmis
    cout << "Iveskite 5 pazymius: ";
    cin >> pazymiai[0] >> pazymiai[1] >> pazymiai[2]
        >> pazymiai[3] >> pazymiai[4];

    // Masyvo išvedimas
    cout << "Ivesti pazymiai: ";
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << ", ";
    }
    cout << endl;

    return 0;
}
```

Rezultatas 1:

```
Iveskite 5 pazymius: 7 8 9 6 10
Ivesti pazymiai: 7, 8, 9, 6, 10,

```

Rezultatas 2:

```
Iveskite 5 pazymius: 8 7 5 1 4
Ivesti pazymiai: 8, 7, 5, 1, 4,

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int pazymiai[5];

    // Kiek masyve yra elementų
    int pazymiu_kiekis = 5;

    // Masyvo užpildymas reikšmėmis
    cout << "Iveskite 5 pazymius: ";
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cin >> pazymiai[i];
    }

    // Masyvo išvedimas
    cout << "Ivesti pazymiai: ";
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << pazymiai[i] << ", ";
    }
    cout << endl;

    return 0;
}
```

Rezultatas 1:

```
Iveskite 5 pazymius: 8 7 5 6 3
Ivesti pazymiai: 8, 7, 5, 6, 3,

```

Rezultatas 2:

```
Iveskite 5 pazymius: 10 10 9 8 10
Ivesti pazymiai: 10, 10, 9, 8, 10,

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas, kurio dydis yra 5
    int skaiciai[] = { 7, 8, 9, 7, 4, 5, 6, 8, 7, 5, 2, 3 };

    // Kiek masyve yra elementų
    int skaiciu_kiekis = 12;

    // Pirmas narys masyve
    cout << "Pirmas narys masyve: " << skaiciai[0] << endl;

    // Antras narys masyve
    cout << "Antras narys masyve: " << skaiciai[1] << endl;

    // Paskutinis narys masyve
    cout << "Paskutinis narys masyve: " << skaiciai[skaiciu_kiekis - 1] << endl;

    // Prieš paskutinis narys masyve
    cout << "Pries paskutinis narys masyve: " << skaiciai[skaiciu_kiekis - 2] << endl;

    return 0;
}
```

Rezultatai:

```
Pirmas narys masyve: 7
Antras narys masyve: 8
Paskutinis narys masyve: 3
Pries paskutinis narys masyve: 2

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Pirmo skaičių masyvo sukūrimas
    int skaiciai1[] = { 7, 8, 9, 6, 5 };
    int skaiciai1_kiekis = 5;

    // Antro skaičių masyvo sukūrimas
    int skaiciai2[] = { 8, 5, 2, 3, 6, 4, 4 };
    int skaiciai2_kiekis = 7;

    // Pirmo skaičių masyvo išvedimas
    cout << "Pirmi skaiciai (" << skaiciai1_kiekis << "): ";

    for (int i = 0; i < skaiciai1_kiekis; i++)
    {
        cout << "[" << skaiciai1[i] << "]";
    }

    cout << endl;

    // Antro skaičių masyvo išvedimas
    cout << "Antri skaiciai (" << skaiciai2_kiekis << "): ";

    for (int i = 0; i < skaiciai2_kiekis; i++)
    {
        cout << "[" << skaiciai2[i] << "]";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Pirmi skaiciai (5): [7][8][9][6][5]
Antri skaiciai (7): [8][5][2][3][6][4][4]

```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Skaičių masyvo sukūrimas
    int skaiciai[100];
    int skaiciai_kiekis = 0;

    // Klausiama kiek žmogus nori įvesti skaičių
    cout << "Kiek skaiciu norite ivesti? ";
    cin >> skaiciai_kiekis;

    // Žmogus įveda skaičius
    for (int i = 0; i < skaiciai_kiekis; i++)
    {
        cout << i + 1 << "-asis skaicius: ";
        cin >> skaiciai[i];
    }

    // Skaičiai išvedami į konsolę
    cout << "\nJusu ivesti skaiciai: ";

    for (int i = 0; i < skaiciai_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite ivesti? 4
1-asis skaicius: 8
2-asis skaicius: 9
3-asis skaicius: 6
4-asis skaicius: 5

Jusu ivesti skaiciai: [8][9][6][5]
```

Rezultatas 2:

```
Kiek skaiciu norite ivesti? 9
1-asis skaicius: 8
2-asis skaicius: 5
3-asis skaicius: 6
4-asis skaicius: 8
5-asis skaicius: 7
6-asis skaicius: 5
7-asis skaicius: 2
8-asis skaicius: 3
9-asis skaicius: 4

Jusu ivesti skaiciai: [8][5][6][8][7][5][2][3][4]
```

### Pavyzdys 8

Kodas:

```cpp
#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

int main()
{
    // Sukuriami vardų ir amžių masyvai
    string vardai[10];
    int amziai[10];

    // Nurodomas įrašytų elementų kiekis šiuos masyvuose
    int kiekis = 0;

    // Užklausiama kiek bus įvedimų
    cout << "Kiek duomenu norite ivesti? ";
    cin >> kiekis;

    // Įvedinėjami duomenys
    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis zmogus\n";
        cout << "Vardas: ";
        cin >> vardai[i];
        cout << "Amzius: ";
        cin >> amziai[i];
    }

    // Duomenys išvedami iš šių dviejų masyvų

    cout << "\nIvesti duomenys\n\n";
    cout << "+----------------------+--------+\n";
    cout << "| Vardas               | Amzius |\n";
    cout << "+----------------------+--------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << "| " << setw(20) << left << vardai[i]
            << " | " << setw(6) << amziai[i] << " |" << endl;
    }

    cout << "+----------------------+--------+\n";

    return 0;
}
```

Rezultatas 1:

```
Kiek duomenu norite ivesti? 3
1-asis zmogus
Vardas: Jonas
Amzius: 74
2-asis zmogus
Vardas: Petras
Amzius: 15
3-asis zmogus
Vardas: Gintas
Amzius: 32

Ivesti duomenys

+----------------------+--------+
| Vardas               | Amzius |
+----------------------+--------+
| Jonas                | 74     |
| Petras               | 15     |
| Gintas               | 32     |
+----------------------+--------+

```

Rezultatas 2:

```
Kiek duomenu norite ivesti? 5
1-asis zmogus
Vardas: Greta
Amzius: 19
2-asis zmogus
Vardas: Gintare
Amzius: 20
3-asis zmogus
Vardas: Povilas
Amzius: 21
4-asis zmogus
Vardas: Gintas
Amzius: 36
5-asis zmogus
Vardas: Inga
Amzius: 23

Ivesti duomenys

+----------------------+--------+
| Vardas               | Amzius |
+----------------------+--------+
| Greta                | 19     |
| Gintare              | 20     |
| Povilas              | 21     |
| Gintas               | 36     |
| Inga                 | 23     |
+----------------------+--------+

```

### Pavyzdys 9

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Masyvo sukūrimas
    int skaiciai[10];
    int kiek = 0;

    // Kiek žmogus nori įvesti skaičių?
    cout << "Kiek skaiciu norite ivesti? ";
    cin >> kiek;

    // Patikrinimas ar neviršija sukurto masyvo dydžio
    if (kiek >= 10)
    {
        cout << "Negalite ivesti tiek skaiciu, rinkite iki 10" << endl;
    }
    else
    {
        // Skaičių įvedimas
        cout << "Iveskite visus norimus skaicius: ";

        for (int i = 0; i < kiek; i++)
        {
            cin >> skaiciai[i];
        }

        // Skaičių išvedimas
        cout << "Visi ivesti skaiciai: ";

        for (int i = 0; i < kiek; i++)
        {
            cout << skaiciai[i] << " ";
        }
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite ivesti? 5
Iveskite visus norimus skaicius: 8 9 7 5 3
Visi ivesti skaiciai: 8 9 7 5 3
```

Rezultatas 2:

```
Kiek skaiciu norite ivesti? 8
Iveskite visus norimus skaicius: 2 5 4 8 4 3
1 4
Visi ivesti skaiciai: 2 5 4 8 4 3 1 4
```

### Pavyzdys 10

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias skaičių masyvas
    int skaiciai[5];
    int skaiciu_kiekis = 5;

    // Bandoma gauti reikšmės iš neužpildyto masyvo
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

	return 0;
}
```

Rezultatai:

```
[-858993460][-858993460][-858993460][-858993460][-858993460]
```

### Pavyzdys 11

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias skaičių masyvas
    int skaiciai[5];
    int skaiciu_kiekis = 5;

    // Kiekvienas masyvo elementas užpildomas su 'default' reikšme
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        skaiciai[i] = 0;
    }

    // Išvedamas sutvarkytas masyvas
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

	return 0;
}
```

Rezultatai:

```
[0][0][0][0][0]
```

### Pavyzdys 12

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias skaičių masyvas
    int skaiciai[5] = {0};
    int skaiciu_kiekis = 5;

    // Išvedamas skaičių masyvas
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

	return 0;
}
```

Rezultatai:

```
[0][0][0][0][0]
```

### Pavyzdys 13

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias skaičių masyvas
    int skaiciai[10];
    int skaiciu_kiekis = 0;

    // Vartotojas įveda kiek skaičių nori suvesti
    cout << "Kiek skaiciu norite suvesti? ";
    cin >> skaiciu_kiekis;

    // Apibūdinami apribojimai skaičių įvedime
    cout << "Iveskite " << skaiciu_kiekis << " skaiciu, kurie butu tarp reziu [1-10]\n";

    // Skaičių įvedimas
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Pasakoma kuris skaičius yra įvedinėjamas
        cout << "Iveskite " << i + 1 << "-aji skaiciu: ";
        int skaicius;

        do
        {
            // Įvedamas skaičius
            cin >> skaicius;

            // Jeigu skaičius tinka - įkeliama į masyvą
            if (skaicius >= 1 && skaicius <= 10)
            {
                skaiciai[i] = skaicius;
            }
            else
            {
                // Jeigu skaičius netinka - išvedamas klaidos pranešimas
                cout << "Blogas ivedimas, bandykite is naujo\n";
            }
        } while (skaicius < 1 || skaicius > 10); // kartojama kol įvestas skaičius tinka
    }

    // Skaičių išvedimas
    cout << "Ivesti skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    return 0;
}
```

Rezultatas 1:

```
Kiek skaiciu norite suvesti? 3
Iveskite 3 skaiciu, kurie butu tarp reziu [1-10]
Iveskite 1-aji skaiciu: 1
Iveskite 2-aji skaiciu: 55
Blogas ivedimas, bandykite is naujo
14
Blogas ivedimas, bandykite is naujo
5
Iveskite 3-aji skaiciu: 9
Ivesti skaiciai: [1][5][9]
```

Rezultatas 2:

```
Kiek skaiciu norite suvesti? 4
Iveskite 4 skaiciu, kurie butu tarp reziu [1-10]
Iveskite 1-aji skaiciu: 5
Iveskite 2-aji skaiciu: 9
Iveskite 3-aji skaiciu: 787
Blogas ivedimas, bandykite is naujo
455
Blogas ivedimas, bandykite is naujo
3
Iveskite 4-aji skaiciu: 1
Ivesti skaiciai: [5][9][3][1]
```

### Pavyzdys 14

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string zodis = "dramblys"; // čia tas pats kas char masyvas

	for (int i = 0; i < zodis.length(); i++) // vietoj length() galima ir size()
	{
		cout << zodis[i] << " ";
	}

    return 0;
}
```

Rezultatai:

```
d r a m b l y s
```

## Užduotys

### Užduotis 1

Sukurkite norimo dydžio skaičių masyvą, kuris iškart būtų užpildytas skaičiais.

Šiuos skaičius išveskite tris kartus:

- Pirmąjį kartą - išvedant visus skaičius toje pačioje eilutėje, atskiriant kableliu ir tarpu.
- Antrąjį kartą - išvedant visus skaičius atskirose eilutėse, prieš kiekvieną skaičių parašant kelintasis tai skaičius, pavyzdžiui, "1-asis skaičius yra ...", tada "2-asis skaičius yra...".
- Trečiąjį kartą - išvedant tik kas antrą skaičių iš masyvo, skaičius išvedant toje pačioje eilutėje, atskiriant tarpu.

Taip pat, atlikite šiuos veiksmus:

- Išveskite pirmąjį skaičių iš masyvo.
- Išveskite antrąjį skaičių iš masyvo.
- Išveskite paskutinį skaičių iš masyvo.
- Papildomai: išveskite bet kurį, atsitiktinai parinktą skaičių iš masyvo.

### Užduotis 2

- Susikurkite vardų masyvą, kuris jau būtų užpildytas vardais.
- Išveskite vardus sąrašo pavidalu, išvedant kelintas tai vardas, kad tai vardas ir išvedant patį vardą. Pavyzdžiui:

```
- 1-as vardas: Tomas.
- 2-as vardas: Greta.
- ...
```

- Papildomai: leiskite vartotojui pakeisti bet kurį vardą, įvedant vardo numerį, o po pakeitimo visas sąrašas turi atsivaizduoti dar kartą.

### Užduotis 3

- Susikurkite simbolių (`char`) masyvą, kuris jau būtų užpildytas su jūsų pasirinktais simboliais.
- Išveskite visus simbolius toje pačioje eilutėje, neatskiriant jokiu tarpu ar kitu simboliu. Pavyzdžiui:

```
*d&s^%d$dj#*
```

- Su šio masyvo simboliais nupieškite kvadratą. Pavyzdžiui:

```
*#%*
(  $
^52&
```

- Su šio masyvo simboliais nupieškite laiptus. Pavyzdžiui:

```
$
#*
Y(*
&@@)
```

### Užduotis 4

- Susikurkite du skaičių masyvus, kurie iškart būtų užpildyti duomenimis.
- Vartotojui leiskite pasirinkti kurį skaičių masyvą (pirmą ar antrą) parodyti ekrane.
- Vartotojui pasirinkus, kurį masyvą parodyti, visus jo skaičius išveskite toje pačioje eilutėje, kiekvieną skaičių apskliaudžiant laužtiniais (`[ ]`) skliaustais.

### Užduotis 5

- Sukurkite trijų studentų pažymių masyvus (tris atskirus masyvus) su duomenimis, kuriuose pažymiai gali būti rašomi per kablelį, o pažymių kiekis kiekviename masyve gali būti skirtingas.
- Išveskite kiekvieną masyvą atskirose eilutėse, prieš kiekvieną masyvą parašant kas yra išvedama. O taip pat, pažymius rašyti toje pačioje eilutėje ir atskiriant vertikaliu brūkšniu. Pavyzdžiui:

```
1-o moksleivio pažymiai: 7.4 | 8 | 9.6 | 8 | 6.8
2-o moksleivio pažymiai: 10 | 9.5 | 9.4 | 9.8 | 8.6 | 10 | 9.7
3-o moksleivio pažymiai: 8 | 7 | 6.8
```

### Užduotis 6

- Sukurkite skaičių masyvą, kuriame iš pradžių nebūtų duomenų.
- Leiskite vartotojui pasirinkti kiek duomenų jis nori įvesti, bei leiskite jam tuos duomenis įvesti, kiekvienoje įvedimo eilutėje nurodant kelintą skaičių jis įvedinėja. Pavyzdžiui:

```
1-asis skaičius: ...
2-asis skaičius: ...
...
```

- Galiausiai visus skaičius išveskite gražiai, lentelės pavidalu, kur pirmas stulpelis parodytų kelintas tai skaičius, o antrame stulpelyje būtų skaičius iš masyvo. Pavyzdžiui:

```
+-----+----------+
| #   | Skaičius |
+-----+----------+
| 1   | 8        |
| 2   | 15       |
| 3   | 32       |
| 4   | 5        |
| 5   | 1        |
+-----+----------+
```

- Po lentele išveskite kiek skaičių šiame masyve yra iš viso. Pavyzdžiui: "Lentelėje yra 5 skaičiai".

### Užduotis 7

- Susikurkite vardų ir vardų ilgių masyvus.
- Leiskite vartotojui suvesti norimą kiekį vardų.
- Paskaičiuokite vardų ilgius ir sudėkite atsakymus į vardų ilgių masyvą.
- Išveskite vardus ir jų ilgius sąrašo pavidalu. Pavyzdžiui:

```
- Vardo "Jonas" ilgis 5 simboliai.
- Vardo "Gintarė" ilgis 7 simboliai.
- ...
```

### Užduotis 8

<!-- leiskite vartotojui suvesti norimą kiekį skaičių bei leiskite įvesti laispnio kėlimo pasirinkimą, į naują masyvą sukelkite tų pačių skaičių kvadratus, bei į dar vieną masyvą sukelkite tuos pačius skaičius pakeltus norimu laipsnius, visus šiuos skaičius išveskite trijose skirtingose eilutėse, papildomai: išveskite lentelės pavidalu, kur pirmas stupelis pats skaičius, tada skaičiaus kvadratas, tada kažkoks pakėlimas laipsniu -->

- Susikurkite skaičių masyvą ir leiskite vartotojui jį užpildyti norimu kiekiu skaičių.
- Leiskite vartotojui įvesti norimą laipsnį (skaičių, kuriuo bus pakelti suvesti skaičiai).
- Sukurkite naują masyvą į kurį paskaičiuokite ir sudėkite suvestų skaičių kvadratų reikšmes.
- Sukurkite naują masyvą į kurį paskaičiuokite ir sudėkite suvestų skaičių, pakeltų nurodytu laipsniu, reikšmes.
- Visus atsakymus išveskite atskirose eilutėse. Pavyzdžiui:

```
Suvesti skaičiai: 2 4 9 3
Šių skaičių kvadratai: 4 16 81 9
Šie skaičiai pakelti 5-u laipsniu: 32 1024 59049 243
```

- Papildomai: visus atsakymus išveskite lentelės pavidalu. Pavyzdžiui:

```
+----------+-----------+---------------+
| Skaičius | Kvadratas | 5-as laipsnis |
+----------+-----------+---------------+
| 2        | 4         | 32            |
| 4        | 16        | 1024          |
| 9        | 81        | 59049         |
| 3        | 9         | 243           |
+----------+-----------+---------------+
```

### Užduotis 9

- Susikurkite `string` tipo kintamąjį su norima reikšme.
- Išveskite visą žodį, kiekvieną raidę atskirant brūkšniu (`-`). Pavyzdžiui:

```
d-r-a-m-b-l-y-s
```

- Išveskite kiekvieną raidę atskirose eilutėse. Pavyzdžiui:

```
d
r
a
m
b
l
y
s
```

### Užduotis 10

- Susikurkite du skaičių masyvus į kuriuos leiskite vartotojui suvesti po kiek nori skaičių.
- Išveskite tik tą masyvą, kuris turi daugiau skaičių.
- Nurodykite per kiek skaičių skiriasi skaičių kiekis. Pavyzdžiui: "Išvestas masyvas didesnis per 3 skaičius".

### Užduotis 11

- Leiskite vartotojui suvesti kiek nori skaičių.
- Leiskite jam pamatyti norimą (kelintąjį) skaičių konsolėje. Pavyzdžiui:

```
Skaičiai: 7 8 9 5 4
Kelintą skaičių norite pamatyti? 2
2-asis skaičius: 8
```

- Papildomai: padarykite, kad vartotojas galėtų pasižiūrėti kiek norėtų skaičių, nurodant kelintas tai skaičius.

### Užduotis 12 (sudėtingesnė)

- Sukurkite masyvą, kurį užpildykite norimu kiekiu fibonačiaus skaičių. Norimą kiekį fibonačiaus skaičių sugeneruoja ir užpildo programa.
- Išveskite sugeneruotus skaičius norima forma.

### Užduotis 13 (sudėtingesnė)

Sukurkite žodyną, kur vartotojas galėtų įvesti lietuvišką žodį ir jam parodytų anglišką atitikmenį. Tam gali padėti du žodžių masyvai, kur vertimai sutaptų per indeksą.

### Užduotis 14 (sudėtingesnė)

- Vartotojui leiskite suvesti norimą kiekį skaičių.
- Vienoje eilutėje išveskite visus suvestus skaičius.
- Kitoje eilutėje išveskite tik lyginius skaičius iš įvestų.
- Dar kitoje eilutėje išveskite tik nelyginius skaičius iš įvestų.

### Užduotis 15 (sudėtingesnė)

- Susikurkite masyvą iš 25-ių skaičių.
- Išveskite šiuos skaičius 5x5 dydžio lentelėje.

### Užduotis 16 (sudėtingesnė)

- Leiskite vartotojui suvedinėti skaičius.
- Į masyvą įkelkite tik skaičius, kurie yra pirminiai. Masyve turi atsirasti 5 tokie skaičiai.
- Šiuos skaičius išveskite į ekraną.
