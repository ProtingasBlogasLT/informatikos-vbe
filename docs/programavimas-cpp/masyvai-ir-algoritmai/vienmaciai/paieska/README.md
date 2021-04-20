# Vienmačiai masyvai: paieška

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/iztGhDnviTc?start=592&end=5174" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 4, 7, 8, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai\n";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Sukuriamas kintamasis didžiausiam skaičiui saugoti
    int didziausias_skaicius = skaiciai[0];

    // Einama per skaičius ir ieškomas didesnis skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius didesnis už didžiausią
        if (skaiciai[i] > didziausias_skaicius)
        {
            // Atnaujinama didžiausio skaičiaus reikšmė
            didziausias_skaicius = skaiciai[i];
        }
    }

    // Išvedamas atsakymas
    cout << "\nDidziausias rastas skaicius\n" << didziausias_skaicius;

    return 0;
}
```

Rezultatai:

```
Skaiciai
4 7 8 6 5 2 3
Didziausias rastas skaicius
8
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 4, 7, 8, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai\n";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Sukuriamas kintamasis mažiausiam skaičiui saugoti
    int maziausias_skaicius = skaiciai[0];

    // Einama per skaičius ir ieškomas mažesnis skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius mažesnis už mažiausią
        if (skaiciai[i] < maziausias_skaicius)
        {
            // Atnaujinama mažiausio skaičiaus reikšmė
            maziausias_skaicius = skaiciai[i];
        }
    }

    // Išvedamas atsakymas
    cout << "\nMaziausias rastas skaicius\n" << maziausias_skaicius;

    return 0;
}
```

Rezultatai:

```
Skaiciai
4 7 8 6 5 2 3
Maziausias rastas skaicius
2
```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 4, 7, 8, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai\n";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Sukuriamas kintamasis didžiausiam skaičiui saugoti
    int didziausias_skaicius = skaiciai[0];
    int didziausio_indeksas = 0;

    // Einama per skaičius ir ieškomas didesnis skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius didesnis už didžiausią
        if (skaiciai[i] > didziausias_skaicius)
        {
            // Atnaujinama didžiausio skaičiaus reikšmė
            didziausias_skaicius = skaiciai[i];

            // Įsimenamas didžiausios skaičiaus indeksas
            didziausio_indeksas = i;
        }
    }

    // Išvedami atsakymai
    cout << "\nDidziausias rastas skaicius\n" << didziausias_skaicius << endl;
    cout << "Didziausio skaiciaus indeksas\n" << didziausio_indeksas << endl;
    cout << "Didziausias skaicius yra kelintas\n" << didziausio_indeksas + 1 << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai
4 7 8 6 5 2 3
Didziausias rastas skaicius
8
Didziausio skaiciaus indeksas
2
Didziausias skaicius yra kelintas
3

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su reikšmėmis
    int skaiciai[] = { 3, 7, 5, 6, 5, 2, 3 };
    int skaiciu_kiekis = 7;

    // Išvedami skaičiai iš masyvo

    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Sukuriami kintamieji ieškomam skaičiui ir jo indeksui išsaugoti
    int pirmas_lyginis = 0;
    int pirmo_lyginio_indeksas = 0;

    // Einama per visus skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Tikrinama ar skaičius lyginis
        if (skaiciai[i] % 2 == 0)
        {
            // Skaičius įrašomas į kintamąjį
            pirmas_lyginis = skaiciai[i];

            // Skaičiaus indeksas įrašomas į kintamąjį
            pirmo_lyginio_indeksas = i;

            // Sustabdomas ciklas
            break;
        }
    }

    // Išvedami atsakymai
    cout << "Pirmas rastas lyginis skaicius: " << pirmas_lyginis << endl;
    cout << "Sis skaicius yra " << pirmo_lyginio_indeksas + 1 << " pozicijoje";

    return 0;
}
```

Rezultatai:

```
Skaiciai: 3 7 5 6 5 2 3
Pirmas rastas lyginis skaicius: 6
Sis skaicius yra 4 pozicijoje
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <string>
using namespace std;

int main()
{
    // Sukuriamas tuščias vardų masyvas
    string vardai[10];
    int vardu_kiekis;

    // Vartotojas renkasi kiek vardų norės suvesti
    cout << "Kiek vardu norite ivesti? ";
    cin >> vardu_kiekis;

    // Vardų įvedimas į masyvą
    for (int i = 0; i < vardu_kiekis; i++)
    {
        cout << i + 1 << "-asis vardas: ";
        cin >> vardai[i];
    }

    cout << endl;

    // Sukuriamas kintamasis ilgiausio vardo užsaugojimui
    string ilgiausias_vardas = "";

    // Einama per visus turimus vardus masyve
    for (int i = 0; i < vardu_kiekis; i++)
    {
        // Tikrinama ar vardas yra ilgesnis nei ilgiausias
        if (vardai[i].length() > ilgiausias_vardas.length())
        {
            // Atnaujinama ilgiausio vardo reikšmė
            ilgiausias_vardas = vardai[i];
        }
    }

    // Išvedami atsakymai
    cout << "Ilgiausias rastas vardas: " << ilgiausias_vardas << endl;
    cout << "Ilgiausio rasto vardo ilgis: " << ilgiausias_vardas.length() << endl;

    return 0;
}
```

Rezultatas 1:

```
Kiek vardu norite ivesti? 3
1-asis vardas: Tomas
2-asis vardas: Gintare
3-asis vardas: Petras

Ilgiausias rastas vardas: Gintare
Ilgiausio rasto vardo ilgis: 7

```

Rezultatas 2:

```
Kiek vardu norite ivesti? 5
1-asis vardas: Giedrius
2-asis vardas: Tomas
3-asis vardas: Inga
4-asis vardas: Povilas
5-asis vardas: Zygimantas

Ilgiausias rastas vardas: Zygimantas
Ilgiausio rasto vardo ilgis: 10

```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas temperatūrų masyvas
    double temperaturos[] = { 14.5, 25.2, 23.4, 10.9, 11.25 };
    int temperaturu_kiekis = 5;

    // Sukuriami kintamieji mažiausiai ir didžiausiai temperatūroms saugoti
    double maziausia_temperatura = temperaturos[0],
        didziausia_temperatura = temperaturos[0];

    // Einama per visas temperatūras
    for (int i = 0; i < temperaturu_kiekis; i++)
    {
        // Tikrinama ar šita temperatūra didesnė už didžiausią
        if (temperaturos[i] > didziausia_temperatura)
        {
            // Atnaujinama didžiausia temperatūra
            didziausia_temperatura = temperaturos[i];
        }

        // Tikrinama ar šita temperatūra mažesnė už mažiausią
        if (temperaturos[i] < maziausia_temperatura)
        {
            // Atnaujinama mažiausia temperatūra
            maziausia_temperatura = temperaturos[i];
        }
    }

    // Išvedamos visos temperatūros
    cout << "Temperaturos\n";
    for (int i = 0; i < temperaturu_kiekis; i++)
    {
        cout << temperaturos[i] << " ";
    }

    // Išvedami rasti atsakymai
    cout << "\nDidziausia temperatura\n" << didziausia_temperatura << endl;
    cout << "Maziausia temperatura\n" << maziausia_temperatura << endl;
    cout << "Skirtumas tarp siu temperaturu\n"
        << didziausia_temperatura - maziausia_temperatura;

    return 0;
}
```

Rezultatai:

```
Temperaturos
14.5 25.2 23.4 10.9 11.25
Didziausia temperatura
25.2
Maziausia temperatura
10.9
Skirtumas tarp siu temperaturu
14.3
```

### Pavyzdys 7

Kodas:

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main()
{
    // Sukuriami masyvai vardams ir amžiams saugoti
    string vardai[] = { "Jonas", "Gabrielius", "Greta", "Paulius",
                        "Gabrielius", "Julija" };
    int amziai[] = { 56, 23, 25, 21, 30, 34 };
    int kiekis = 6;

    // Išvedami pradiniai duomenys lentelės pavidale

    cout << "+--------------+--------+\n";
    cout << "| Vardas       | Amzius |\n";
    cout << "+--------------+--------+\n";

    for (int i = 0; i < kiekis; i++)
    {
        cout << "| " << setw(12) << left << vardai[i] << " | "
            << setw(6) << left << amziai[i] << " |\n";
    }

    cout << "+--------------+--------+\n\n";

    // Sukuriami kintamieji pirmam ilgiausiam vardui ieškoti
    string pirm_ilg_vard = "";
    int pirmo_ilg_vard_ind = 0;

    // Einama per duomenis
    for (int i = 0; i < kiekis; i++)
    {
        // Tikrinama ar vardas ilgesnis nei ilgiausias vardas
        if (vardai[i].length() > pirm_ilg_vard.length())
        {
            // Atnaujinama ilgiausio vardo reikšmė
            pirm_ilg_vard = vardai[i];

            // Atnaujinamas ilgiausio vardo indeksas
            pirmo_ilg_vard_ind = i;
        }
    }

    // Išvedama informacija apie pirmą ilgiausią rastą vardą ir žmogaus vardą
    cout << "Pirmas rastas ilgiausias vardas:\n";
    cout << vardai[pirmo_ilg_vard_ind] << " " << amziai[pirmo_ilg_vard_ind] << "\n\n";

    // Sukuriami kintamieji paskutiniam ilgiausiam vardui ieškoti
    string pask_ilg_vard = "";
    int pask_ilg_vard_ind = 0;

    // Einama per duomenis
    for (int i = 0; i < kiekis; i++)
    {
        // Tikrinama ar vardas ilgesnis nei ilgiausias vardas arba lygus
        if (vardai[i].length() >= pask_ilg_vard.length())
        {
            // Atnaujinama ilgiausio vardo reikšmė
            pask_ilg_vard = vardai[i];

            // Atnaujinamas ilgiausio vardo indeksas
            pask_ilg_vard_ind = i;
        }
    }

    // Išvedama informacija apie paskutinį ilgiausią rastą vardą ir žmogaus vardą
    cout << "Paskutinis rastas ilgiausias vardas:\n";
    cout << vardai[pask_ilg_vard_ind] << " " << amziai[pask_ilg_vard_ind] << endl;

    return 0;
}
```

Rezultatai:

```
+--------------+--------+
| Vardas       | Amzius |
+--------------+--------+
| Jonas        | 56     |
| Gabrielius   | 23     |
| Greta        | 25     |
| Paulius      | 21     |
| Gabrielius   | 30     |
| Julija       | 34     |
+--------------+--------+

Pirmas rastas ilgiausias vardas:
Gabrielius 23

Paskutinis rastas ilgiausias vardas:
Gabrielius 30
```

## Užduotys

### Užduotis 1

- Turite informaciją apie taksisto nuvažiuotus kilometrus kiekvieną dieną.
- Raskite kiek mažiausiai ir kiek daugiausiai kilometrų per dieną yra nuvažiavęs taksistas.
- Raskite ar taksistas kada nors yra nuvažiavęs virš 100 km per dieną.
- Raskite ar taksistas kada nors yra nuvažiavęs lygiai 50 km per dieną.
- Išveskite pradinę turimą informaciją apie nuvažiuotus kilometrus ir visus rastus atsakymus.

<a href="uzduotys/uzduotis1/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 2

- Turite informaciją apie kepyklos iškeptus duonos kepalus kiekvieną dieną (kepalų kiekis per dieną).
- Raskite kiek daugiausiai kepalų per dieną yra iškepus kepykla, bei kuri (kelinta) diena tai buvo?
- Raskite kiek mažiausiai kepalų per dieną yra iškepus kepykla, bei kuri (kelinta) diena tai buvo?
- Koks kepalų skirtumas tarp mažiausiai ir daugiausiai iškeptų duonos kepalų?
- Raskite kada pirmą kartą kepykla iškepė daugiau nei 10 duonos kepalų per dieną.
- Išveskite pradinius duomenis ir visus rastus atsakymus.

<a href="uzduotys/uzduotis2/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 3

- Leiskite vartotojui suvesti norimą kiekį žodžių.
- Raskite trumpiausią ir ilgiausią žodžius. Jeigu yra keli vienodo ilgio trumpiausi ar ilgiausi, tai rasti pirmus tokius žodžius.
- Raskite iš kiek vidutiniškai raidžių susidaro visi žodžiai. Šį skaičių apvalinkite į norimą pusę.
- Raskite pirmą žodį, kuris yra sudarytas iš būtent tokio raidžių kiekio, koks yra rastas (suapvalintas) vidurkis.
- Leiskite vartotojui pasirinkti kokio žodžio ieškoti tarp visų turimų žodžių. Raskite kiek kartų kartojasi (kiek kartų galima rasti) vartotojo nurodytas žodis.

<a href="uzduotys/uzduotis3/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 4

- Leiskite vartotojui suvesti norimą kiekį skaičių arba sugeneruokite atsitiktinai.
- Patikrinkite ar visi skaičiai yra lyginiai / nelyginiai.
- Patikrinkite ar tarp šių skaičių yra bent vienas pirminis skaičius. Jei taip raskite paskutinį pirminį skaičių.
- Išveskite skaičius, bei gautus atsakymus.

### Užduotis 5

- Leiskite vartotojui suvesti norimą kiekį pažymių.
- Raskite mažiausią pažymį.
- Ar rastas mažiausias pažymys yra neigiamas (mažesnis nei 4)?
- Išveskite gautus atsakymus.

### Užduotis 6

- Turite informaciją apie 3 studentų turimus pažymius (trys skirtingi masyvai).
- Raskite kiekvieno studento didžiausią pažymį.
- Kuris studentas turi didžiausią iš visų pažymį?
- Išveskite pradinius duomenis ir rastus atsakymus.

### Užduotis 7

- Jums yra žinoma informacija apie prekes parduotuvėje (prekės pavadinimas, kiekis, vieneto kaina).
- Laikykime, kad pavyko išparduoti visas turimas prekes. Iš kurios prekės bus uždirbta daugiausiai (`kiekis x kaina`)?
- O iš kurios bus uždirbta mažiausiai?
- Raskite kurios prekės buvo turima daugiausiai kiekio.
- Raskite kurios prekės vieneto kaina buvo mažiausia.
- Išveskite pradinius duomenis lentelės pavidalu. Išveskite visus gautus atsakymus po lentele.

### Užduotis 8

- Turite informaciją apie knygyne esančias knygas (pavadinimas, puslapių skaičius, kaina).
- Kokia storiausias knygos kaina?
- Koks ploniausios knygos pavadinimas?
- Jei sugebėtume per dieną perskaityti po 20 puslapių, per kiek dienų perskaitytume kiekvieną knygą? Šiems atsakymams galima susikurti papildomą masyvą.
- Ar yra bent viena knyga, kurią perskaitytume per lygiai 5 dienas? Jei taip, grąžinti pirmą ir paskutinę tokią rastą knygą.
- Išveskite turimų knygų informaciją lentelės pavidalu. Išveskite visus gautus atsakymus po lentele. Kiek dienų užtruktume su kiekviena knyga, galima spausdinti toje pačioje lentelėje kaip ir pradiniai knygų duomenys.

### Užduotis 9 (sudėtingesnė)

Sukurkite žodyną, kur vartotojas galėtų įvesti lietuvišką žodį ir jam būtų parodytas angliškas atitikmuo. Tam gali padėti du žodžių masyvai, kur vertimai sutaptų per indeksą. Leiskite vartotojui atlikti tiek vertimų kiek jis nori.

### Užduotis 10 (sudėtingesnė)

- Susikurkite `string` tipo kintamąjį, kuriame saugotumėte norimą tekstą.
- Raskite kuri raidė tekste kartojasi daugiausiai kartų.
