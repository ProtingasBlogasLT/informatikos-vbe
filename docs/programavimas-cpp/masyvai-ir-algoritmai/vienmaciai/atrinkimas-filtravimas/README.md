# Vienmačiai masyvai: atrinkimas, filtravimas

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
    // Sukuriamas skaičių masyvas su skaičiais
    int skaiciai[] = { 4, 7, 8, 5, 3, 2, 1, 4 };
    int skaiciu_kiekis = 8;

    // Išvedami visi skaičiai
    cout << "Visi skaiciai" << endl;

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    // Atrenkami ir išvedami visi lyginiai skaičiai iš masyvo
    cout << endl << "Lyginiai skaiciai is masyvo" << endl;

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        if (skaiciai[i] % 2 == 0)
        {
            cout << skaiciai[i] << " ";
        }
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Visi skaiciai
4 7 8 5 3 2 1 4
Lyginiai skaiciai is masyvo
4 8 2 4

```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su skaičiais
    int skaiciai[] = { 4, 7, 8, 5, 3, 2, 1, 4 };
    int skaiciu_kiekis = 8;

    // Išvedami visi skaičiai
    cout << "Visi skaiciai" << endl;

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << skaiciai[i] << " ";
    }

    cout << endl;

    // Sukuriamas masyvas ir naujas kiekio kintamasis atrinktiems skaičiams
    int atrinkti_skaiciai[10];
    int atrinktu_skaiciu_kiekis = 0;
    
    // Atrenkami skaičiai
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Ar skaičius lyginis?
        if (skaiciai[i] % 2 == 0)
        {
            // Įrašomas skaičius į naują masyvą
            atrinkti_skaiciai[atrinktu_skaiciu_kiekis] = skaiciai[i];

            // Naujo masyvo kiekis padidinamas vienu
            atrinktu_skaiciu_kiekis++;
        }
    }

    // Išvedami visi atrinkti skaičiai iš naujo masyvo
    cout << "Atrinkti skaiciai" << endl;

    for (int i = 0; i < atrinktu_skaiciu_kiekis; i++)
    {
        cout << atrinkti_skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Visi skaiciai
4 7 8 5 3 2 1 4
Atrinkti skaiciai
4 8 2 4

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas su skaičiais
    int skaiciai[] = { 4, 7, 8, 5, 3, 2, 1, 4 };
    int skaiciu_kiekis = 8;

    // Išvedami visi skaičiai ir ieškoma skaičių suma

    cout << "Visi skaiciai" << endl;

    int skaiciu_suma = 0;

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Skaičius išvedamas į ekraną
        cout << skaiciai[i] << " ";

        // Skaičius pridedamas prie bendros sumos
        skaiciu_suma += skaiciai[i];
    }

    cout << endl;

    // Ieškomas ir išvedamas skaičių vidurkis
    double skaiciu_vidurkis = (double)skaiciu_suma / skaiciu_kiekis;
    cout << "Skaiciu vidurkis" << endl << skaiciu_vidurkis << endl;

    // Sukuriamas masyvas ir naujas kiekio kintamasis atrinktiems skaičiams
    int atrinkti_skaiciai[10];
    int atrinktu_skaiciu_kiekis = 0;
    
    // Atrenkami skaičiai
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Ar skaičius didesnis už vidurkį?
        if (skaiciai[i] > skaiciu_vidurkis)
        {
            // Įrašomas skaičius į naują masyvą
            atrinkti_skaiciai[atrinktu_skaiciu_kiekis] = skaiciai[i];

            // Naujo masyvo kiekis padidinamas vienu
            atrinktu_skaiciu_kiekis++;
        }
    }

    // Išvedami visi atrinkti skaičiai iš naujo masyvo
    cout << "Atrinkti skaiciai, kurie didesni uz vidurki" << endl;

    for (int i = 0; i < atrinktu_skaiciu_kiekis; i++)
    {
        cout << atrinkti_skaiciai[i] << " ";
    }

    cout << endl;

    return 0;
}
```

Rezultatai:

```
Visi skaiciai
4 7 8 5 3 2 1 4
Skaiciu vidurkis
4.25
Atrinkti skaiciai, kurie didesni uz vidurki
7 8 5

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas temperatūrų masyvas su duomenimis
    double temperaturos[] = { 25.5, 24.3, -17.5, 9.4, -1.05 };
    int temperaturu_kiekis = 5;

    // Sukuriamas tuščias teigimaų temperatūrų masyvas
    double teigiamos_temperaturos[10];
    int teigiamu_temp_kieks = 0;

    // Sukuriamas tuščias neigiamų temperatūrų masyvas
    double neigiamos_temperaturos[10];
    int neigiamu_temp_kiekis = 0;

    // Atrenkamos temperatūros
    for (int i = 0; i < temperaturu_kiekis; i++)
    {
        // Ar temperatūra teigiama?
        if (temperaturos[i] > 0)
        {
            // Įrašyti į teigiamų temperatūrų masyvą ir kiekį padidinti vienu
            teigiamos_temperaturos[teigiamu_temp_kieks++] = temperaturos[i];
        }
        else
        {
            // Įrašyti į neigiamų temperatūrų masyvą ir kiekį padidinti vienu
            neigiamos_temperaturos[neigiamu_temp_kiekis++] = temperaturos[i];
        }
    }

    // Išvesti pradines temperatūras
    cout << "Temperaturos:\n";

    for (int i = 0; i < temperaturu_kiekis; i++)
    {
        cout << "[ " << temperaturos[i] << " ]";
    }

    // Išvesti atrinktas teigiamas temperatūras
    cout << "\nTeigiamos temperaturos:\n";

    for (int i = 0; i < teigiamu_temp_kieks; i++)
    {
        cout << "[ " << teigiamos_temperaturos[i] << " ]";
    }

    // Išvesti atrinktas neigimas temperatūras
    cout << "\nNeigiamos temperaturos:\n";

    for (int i = 0; i < neigiamu_temp_kiekis; i++)
    {
        cout << "[ " << neigiamos_temperaturos[i] << " ]";
    }

    return 0;
}
```

Rezultatai:

```
Temperaturos:
[ 25.5 ][ 24.3 ][ -17.5 ][ 9.4 ][ -1.05 ]
Teigiamos temperaturos:
[ 25.5 ][ 24.3 ][ 9.4 ]
Neigiamos temperaturos:
[ -17.5 ][ -1.05 ]
```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
#include <string>
#include <iomanip>
using namespace std;

int main()
{
    // Sukuriami masyvai vardams ir amžams saugoti
    string vardai[10];
    int amziai[10];
    int kiek_zmoniu = 0;

    // Užklausiama kiek žmonių bus įvedinėjama
    cout << "Kiek zmoniu norite ivesti? ";
    cin >> kiek_zmoniu;
    cout << endl;

    // Vyksta žmonių duomenų įvedimas į masyvus
    for (int i = 0; i < kiek_zmoniu; i++)
    {
        cout << i + 1 << "-asis zmogus\n";
        cout << "Vardas: ";
        cin >> vardai[i];
        cout << "Amzius: ";
        cin >> amziai[i];
        cout << endl;
    }

    // Klausiama atrinkimo pagal amžių riba
    cout << "Amziaus riba, pagal kuria norite atrinkti (bus atrinkti visi vyresni): ";
    int vyresni_nei = 0;
    cin >> vyresni_nei;

    // Sukuriami nauji masyvai, atrinktiems duomenims saugoti
    string atrinktu_vardai[10];
    int atrinktu_amziai[10];
    int atrinktu_kiekis = 0;

    // Einama per pradinius duomenis
    for (int i = 0; i < kiek_zmoniu; i++)
    {
        // Tikrinama ar amžius didesnis arba lygus nurodytui
        if (amziai[i] >= vyresni_nei)
        {
            // Įrašomas atrinktas vardas į naują masyvą
            atrinktu_vardai[atrinktu_kiekis] = vardai[i];

            // Įrašomas atrinktas amžius į naują masyvą
            atrinktu_amziai[atrinktu_kiekis] = amziai[i];

            // Padidinamas atrinktų duomenų kiekis
            atrinktu_kiekis++;
        }
    }

    // Atrinkti duomenys išvedami lentelės pavidale

    cout << "Atrinkti zmones\n\n";

    cout << "+----------------+--------+\n";
    cout << "| Vardas         | Amzius |\n";
    cout << "+----------------+--------+\n";

    for (int i = 0; i < atrinktu_kiekis; i++)
    {
        cout << "| " << setw(14) << left << atrinktu_vardai[i]
            << " | " << setw(6) << atrinktu_amziai[i] << " |\n";
    }

    cout << "+----------------+--------+\n";

    return 0;
}
```

Rezultatas 1:

```
Kiek zmoniu norite ivesti? 4

1-asis zmogus
Vardas: Tomas
Amzius: 18

2-asis zmogus
Vardas: Giedrius
Amzius: 23

3-asis zmogus
Vardas: Inga
Amzius: 17

4-asis zmogus
Vardas: Povilas
Amzius: 16

Amziaus riba, pagal kuria norite atrinkti (bus atrinkti visi vyresni): 18
Atrinkti zmones

+----------------+--------+
| Vardas         | Amzius |
+----------------+--------+
| Tomas          | 18     |
| Giedrius       | 23     |
+----------------+--------+

```

Rezultatas 2:

```
Kiek zmoniu norite ivesti? 3

1-asis zmogus
Vardas: Petras
Amzius: 55

2-asis zmogus
Vardas: Tomas
Amzius: 15

3-asis zmogus
Vardas: Gintare
Amzius: 24

Amziaus riba, pagal kuria norite atrinkti (bus atrinkti visi vyresni): 19
Atrinkti zmones

+----------------+--------+
| Vardas         | Amzius |
+----------------+--------+
| Petras         | 55     |
| Gintare        | 24     |
+----------------+--------+

```

## Užduotys

### Užduotis 1

- Susikurkite skaičių masyvą.
- Išveskite šiuos skaičius.
- Išveskite visus lyginius skaičius iš šio masyvo.
- Išveskite visus nelyginius skaičius iš šio masyvo.

Pavyzdžiui:

```
Skaičiai: 5 8 7 6 5 4 7
Lyginiai: 8 6 4
Nelygiai: 5 7 5 7
```

- Raskite lyginių skaičių sumą.
- Raskite nelyginių skaičių sumą.
- Raskite lyginių ar nelyginių skaičių suma yra didesnė ir koks skirtumas tarp jų.

<a href="uzduotys/uzduotis1/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 2

- Susikurkite skaičių masyvą. Raskite skaičių vidurkį.
- Atrinkite į kitą masyvą skaičius, kurie yra didesni už vidurkį.
- Išveskite pradinius ir atrinktus duomenis.

<a href="uzduotys/uzduotis2/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 3

- Leiskite vartotojui suvesti norimą kiekį vardų.
- Leiskite vartotojui pasirinkti raidę, pagal kurią vyks vardų atrinkimas.
- Atrinkite vardus, kurie prasideda pasirinkta raide. Norint pasirinkti tik pirmąją raidę, galima naudoti `vardai[i][0]` arba `vardai[i].at(0)`. Norint transformuoti konkrečią raidę į mažąją, galima naudoti `char(tolower('T'))`.
- Atrinkite vardus, kurie turi nurodytą raidę, bet kurioje vardo vietoje.
- Išveskite suvestus duomenis, bei atrinktus pagal kažkurį kriterijų.

<a href="uzduotys/uzduotis3/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 4

- Susikurkite `string` tipo kintamąjį, į kurį vartotojas gali įvesti bet kokį norimą žodį.
- Iš `string` kintamojo atrinkite visas balses į naują `char` masyvą. Balsės: `{a, e, i, o, u}`.
- Raskite rastų balsių kiekį.
- Papildomai: kurių balsių žodyje atsikartojo daugiausiai?

### Užduotis 5

- Turite informaciją apie paskutinius užsakymus parduotuvėje (užsakymų sumos).
- Išveskite visus šiuos duomenis.
- Leiskite vartotojui pasirinkti užsakymo sumą nuo kurios atfiltruoti užsakymus.
- Atrinkite užsakymus, kurie didesni nei nurodyta suma.
- Atvaizduokite atrinktus duomenis.

### Užduotis 6

- Turite informaciją apie parduotuvėje turimas prekes (prekių pavadinimai, kiekiai, kainos).
- Išveskite pradinius duomenis lentelės pavidale.
- Atrinkite prekes, kurių yra turima daugiau nei vartotojo pasirinktas kiekis.
- Išveskite atrinktas pagal kiekį prekes lentelėje.
- Atrinkite prekes, kurių kaina patenka tarp vartotojo nurodytų rėžių.
- Išveskite atrinktas pagal kainą prekes lentelėje.

### Užduotis 7

- Turite informaciją apie komandos varžybas (pelnyti taškai ir laimėta ar ne).
- Atrinkite visas varžybas, kuriose buvo laimėta.
- Atrinkite visas varžybas, kuriose buvo pralaimėta.
- Raskite laimėtų ir pralaimėtų varžybų taškų vidurkius. Koks skirtumas tarp šių taškų?
- Išveskite pradinius ir atrinktus duomenis.

### Užduotis 8

- Leiskite vartotojui įvesti norimą kiekį skaičių.
- Susikurkite kitą skaičių masyvą, kurio reikšmes būtų lygios pradinio skaičių masyvo reikšmių kvadratams. Pavyzdžiui, jei turimas masyvas `array = {1, 2, 3}`, turi būti sukurtas kitas masyvas su reikšmėmis `pow_array = {1, 4, 9}`.
- Iš naujo masyvo atrinkite visus skaičius, kurie dalinasi iš 3.
- Išveskite pradinius skaičius, pakeistus skaičius, bei atrinktus skaičius.

### Užduotis 9

- Turite informaciją apie vairuotojo kiekvieną dieną nuvažiuotus kilometrus.
- Į naują masyvą atrinkite labai ilgas keliones (ilgesnes nei 100 km).
- Į naują masyvą atrinkite labai trumpas keliones (trumpesnes nei 30 km).
- Raskite trumpų ir ilgų kelionių sumas ir vidurkius.
- Raskite koks skirtumas tarp trumpų ir ilgų kelionių vidurkių.
- Išveskite pradinius duomenis, atrinktus duomenis ir kitus rastus atsakymus.

### Užduotis 10

- Susikurkite žodžių masyvą.
- Raskite kiekvieno žodžio balsių kiekius ir sudėkite į atskirą skaičių masyvą.
- Atrinkite visus žodžius, kurie turi lyginį kiekį balsių.
- Išveskite pradinius ir atrinktus duomenis.

### Užduotis 11

- Studentas rašo baigiamąjį darbą. Turite informaciją apie tai kiek puslapių jis parašė kiekvieną dieną.
- Raskite kiek vidutiniškai puslapių per dieną parašo studentas.
- Atrinkite tuos kartus kai studentas parašė daugiau puslapių nei vidutiniškai.
- Išveskite pradinius ir atrinktus duomenis.

### Užduotis 12

- Turite penkių studentų pažymius (atskiruose masyvuose).
- Į naują masyvą atrinkite visus visų studentų pažymius, kurie yra lygūs arba didesni nei 8.
- Raskite atrinktų pažymių vidurkį.
- Raskite kokią procentinę dalį iš visų pažymių sudaro šie atrinkti geri pažymiai. Pavyzdžiui, jei pirmas studentas turėjo pažymius = `{7, 8, 9}`, antras = `{9, 5, 3}`, atrinkti bus = `{8, 9, 9}`, šių atrinktų pažymių yra 3, o iš viso yra 6 pažymiai, todėl gerų pažymių yra 50 % nuo visų pažymių.
- Išveskite visų studentų pažymius, atrinktus gerus pažymius, bei visus rastus skaičiavimus.
