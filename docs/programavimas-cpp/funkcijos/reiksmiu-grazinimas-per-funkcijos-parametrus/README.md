# Reikšmių grąžinimas per funkcijos parametrus

## Vaizdo pamoka

Informacija ruošiama.

## Sintaksė

Funkcijose parametruose galima rašyti kintamuosius, kuriuos funkcija naudos, pavyzdžiui:

```cpp
string vardas
```

Tačiau tokiu atveju, kintamieji funkcijai perduodami darant šių kintamųjų kopijas, kas reiškia, kad funkcijos viduje pasikeitus kintamojo reikšmei, originalaus kintamojo reikšmė nebus pakeista.

Jeigu reikia, kad kintamojo reikšmę būtų galima pakeisti, jį funkcijai galima perduoti kaip nuorodą (angl. *reference*), tarp kintamojo tipo ir pavadinimo įstačius simbolį `&`:

```cpp
string & vardas
```

To daryti nereikia su masyvais ir kitais panašiais tipais, kurie funkcijoms ir taip yra perduodami kaip nuorodos, kadangi jų kopijavimas atmintyje gali būti brangus.

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

void ivedimas(string & vardas, int & amzius)
{
    cout << "Iveskite varda: ";
    cin >> vardas;
    cout << "Iveskite amziu: ";
    cin >> amzius;
}

int main()
{
    string vardas;
    int amzius;

    ivedimas(vardas, amzius);

    cout << "\nIvesti duomenys" << endl;
    cout << "Vardas: " << vardas << endl;
    cout << "Amzius: " << amzius << endl;

    return 0;
}
```

Rezultatai:

```
Iveskite varda: Ieva
Iveskite amziu: 90

Ivesti duomenys
Vardas: Ieva
Amzius: 90
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

void skaiciu_ivedimas(int & pirmas, int & antras)
{
    cout << "Iveskite du skaicius: ";
    cin >> pirmas >> antras;
}

int suma(int pirmas, int antras)
{
    return pirmas + antras;
}

int main()
{
    int sk1, sk2;
    skaiciu_ivedimas(sk1, sk2);
    cout << "Ivestu skaiciu suma: " << suma(sk1, sk2) << endl;

    return 0;
}
```

Rezultatai:

```
Iveskite du skaicius: 5 3
Ivestu skaiciu suma: 8
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

void ivedimas(int skaiciai[], int & kiekis)
{
    cout << "Kiek skaiciu norite ivesti? ";
    cin >> kiekis;

    for (int i = 0; i < kiekis; i++)
    {
        cout << i + 1 << "-asis skaicius: ";
        cin >> skaiciai[i];
    }
}

void isvedimas(int skaiciai[], int kiekis)
{
    cout << "Ivesti skaiciai:\n";
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;
}

int main()
{
    int skaiciai[100];
    int kiek;

    ivedimas(skaiciai, kiek);
    isvedimas(skaiciai, kiek);

    return 0;
}
```

Rezultatai:

```
Kiek skaiciu norite ivesti? 5
1-asis skaicius: 8
2-asis skaicius: 9
3-asis skaicius: 5
4-asis skaicius: 4
5-asis skaicius: 2
Ivesti skaiciai:
8 9 5 4 2
```

### Pavyzdys 4

Kodas:

<code-group>
<code-block title="programa.cpp">
```cpp
#include <iostream>
#include <fstream>
using namespace std;

void ivedimas(int masyvas[], int & kiekis)
{
    ifstream fin("duomenys.txt");

    fin >> kiekis;

    for (int i = 0; i < kiekis; i++)
    {
        fin >> masyvas[i];
    }

    fin.close();
}

void isvedimas(int mas[], int kiekis)
{
    cout << "Nuskaityti skaiciai:\n";
    
    for (int i = 0; i < kiekis; i++)
    {
        cout << mas[i] << " ";
    }

    cout << endl;
}

int main()
{
    int skaiciai[100];
    int kiek;

    ivedimas(skaiciai, kiek);
    isvedimas(skaiciai, kiek);

    return 0;
}
```
</code-block>

<code-block title="duomenys.txt">
```
5
6
4
5
2
4
```
</code-block>
</code-group>

Konsolė:

```
Nuskaityti skaiciai:
6 4 5 2 4
```

## Užduotys

### Užduotis 1

Sukurkite funkciją, kuri leistų vartotojui suvesti duomenis apie save (vardas, amžius, ūgis). Šiuos duomenis turite gauti atgal į pagrindinę programos funkciją (`main`) per įvedimo funkcijos parametrus.

Sukurkite antrąją funkciją, kuri per funkcijos argumentus gautų įvestus duomenis ir išvestų juos į konsolę.

### Užduotis 2

Sukurkite šias funkcijas:

- Kuri sugeneruotų du atsitiktinius skaičius ir juos grąžintų per funkcijos parametrus.
- Sumos paskaičiavimo funkciją, kuri gauna du skaičius ir grąžina sumą kaip atsakymą.
- Išvedimo funkciją, kuri gauna du skaičius ir išveda į konsolę atliktą veiksmą bei gautą atsakymą (pvz.: `5 + 3 = 8`). Dėl atsakymo ši funkcija kviečia sumos skaičiavimo funkciją.

Pagrindinėje programos funkcijoje (`main`) sukurkite ciklą, kurį vykdykite 10 kartų. Šiame cikle, kiekvieną kartą kvieskite skaičių sugeneravimo funkciją, bei išvedimo funkciją.

### Užduotis 3

Faile esantys duomenys:

```
Tomas Tomauskas 19 1.8
```

Faile esantys duomenys:

- Vardas.
- Pavardė.
- Amžius.
- Ūgis.

Parašykite funkciją, kuri nuskaitytų duomenis iš failo ir juos perduotų atgal per funkcijos parametrus.

Iškvieskite šią funkciją.

Nuskaitytus rezultatus išvesti galite per išvedimo funkciją (jeigu ją susikursite) arba iškart `main` funkcijoje.

### Užduotis 4

Programoje susikurkite duomenis vartotojo vardui ir slaptažodžiui saugoti.

Susikurkite papildomą funkciją, kurioje vartotojui būtų išvedami jo duomenys, bei paklausiama ar vartotojas nori tuos duomenis pakeisti. Jeigu vartotojas pasirinks, kad nori, tai turi būti leista suvesti naujas reikšmes, o šios reikšmės turi būti grąžinamos per funkcijos parametrus.

### Užduotis 5 (sudėtingesnė, laisva forma)

Užduotis laisva forma, todėl patys renkatės kokios funkcijos bus realizuotos, kokie funkcionalumai bus įgyvendinti, bei kaip gausite duomenis ir kur saugosite rezultatus.

Sukurkite nedidelį žaidimą.

Idėjos žaidimui:

- Žaidime turėtų būti pagrindinis herojus, bei priešai.
- Pagrindinis herojus turi puolimo ir gynybos taškus, bei kiek gyvybės likę.
- Priešai gali nuimti tam tikrą kiekį gyvybės nuo herojaus. Jeigu herojaus gynyba yra ženkliai mažesnė nei priešo puolimas, tai gyvybės procentaliai gali sumažėti daugiau, nei jeigu herojaus gynyba būtų aukštesnė.
- Jeigu herojus miršta, turi būti parodytas atitinkamas pralaimėjimo pranešimas. Jeigu herojus įveikia visus priešus ir lieka gyvas - tuomet laimėjimo pranešimas.
