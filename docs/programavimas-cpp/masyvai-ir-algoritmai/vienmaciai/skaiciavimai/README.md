# Vienmačiai masyvai: skaičiavimai (suma, vidurkis, kiekis, ...)

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
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 7, 8, 5, 6, 9, 5 };
    int skaiciu_kiekis = 6;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Sukuriamas kintamasis, kur bus saugomas rastos sumos atsakymas
    int suma = 0;

    // Ieškoma skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        suma += skaiciai[i];
    }

    // Išvedamas atsakymas
    cout << "Siu skaiciu suma: " << suma << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [7][8][5][6][9][5]
Siu skaiciu suma: 40
```

### Pavyzdys 2

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 8, 9, 6, 5, 4, 7, 8, 2, 3, 5, 6, 4, 1, 2, 5 };
    int skaiciu_kiekis = 15;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Sukuriami kintamieji, kur bus saugomi rastų sumų atsakymai
    int lyginiu_suma = 0;
    int nelyginiu_suma = 0;

    // Ieškomos skaičių sumos
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        if (skaiciai[i] % 2 == 0)
        {
            lyginiu_suma += skaiciai[i];
        }
        else
        {
            nelyginiu_suma += skaiciai[i];
        }
    }

    // Išvedami atsakymai
    cout << "Lyginiu skaiciu suma: " << lyginiu_suma << endl;
    cout << "Nelyginiu skaiciu suma: " << nelyginiu_suma << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [8][9][6][5][4][7][8][2][3][5][6][4][1][2][5]
Lyginiu skaiciu suma: 40
Nelyginiu skaiciu suma: 35

```

### Pavyzdys 3

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 8, 5, 3, 6, 5, 4 };
    int skaiciu_kiekis = 6;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }

    cout << endl;

    // Sukuriamas kintamasis, kur bus saugomas sumos atsakymas
    int suma = 0;

    // Ieškoma skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        suma += skaiciai[i];
    }

    // Skaičiuojamas vidurkis
    double vidurkis = (double)suma / skaiciu_kiekis;

    // Išvedami atsakymai
    cout << "Suma: " << suma << endl;
    cout << "Vidurkis: " << vidurkis << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [8][5][3][6][5][4]
Suma: 31
Vidurkis: 5.16667

```

### Pavyzdys 4

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 8, 5, 3, 6, 5, 4 };
    int skaiciu_kiekis = 6;

    // Išvedami skaičiai iš masyvo
    cout << "Skaiciai: ";

    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }
    cout << endl;

    // Sukuriamas kintamasis, kur bus saugomas sumos atsakymas
    int suma = 0;

    // Ieškoma skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        suma += skaiciai[i];
    }

    // Skaičiuojamas vidurkis
    double vidurkis = (double)suma / skaiciu_kiekis;

    // Sukuriamas kintamasis papildomam skaičiavimui
    int didesniu_nei_vidurkis_suma = 0;

    // Ieškoma didesnių nei vidurkis skaičių suma
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        if (skaiciai[i] > vidurkis)
        {
            didesniu_nei_vidurkis_suma += skaiciai[i];
        }
    }

    // Išvedami atsakymai
    cout << "Skaiciu suma: " << suma << endl;
    cout << "Skaicius vidurkis: " << vidurkis << endl;
    cout << "Didesniu nei vidurkis suma: " << didesniu_nei_vidurkis_suma << endl;

    return 0;
}
```

Rezultatai:

```
Skaiciai: [8][5][3][6][5][4]
Skaiciu suma: 31
Skaicius vidurkis: 5.16667
Didesniu nei vidurkis suma: 14

```

### Pavyzdys 5

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas tuščias pažymių masyvas
    int pazymiai[10];
    int pazymiu_kiekis = 0;

    // Klausiama žmogaus kiek pažymių nori suvesti
    cout << "Kiek pazymiu norite suvesti? ";
    cin >> pazymiu_kiekis;

    // Suvedami visi pažymiai į masyvą
    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        cout << i + 1 << "-asis pazymys: ";
        cin >> pazymiai[i];
    }

    cout << endl;

    // Ieškoma suma

    int suma = 0;

    for (int i = 0; i < pazymiu_kiekis; i++)
    {
        suma += pazymiai[i];
    }

    // Ieškomas vidurkis
    double vidurkis = (double)suma / pazymiu_kiekis;

    // Išvedamas atsakymas
    cout << "Ivestu pazymiu vidurkis: " << vidurkis;

    return 0;
}
```

Rezultatas 1:

```
Kiek pazymiu norite suvesti? 7
1-asis pazymys: 5
2-asis pazymys: 6
3-asis pazymys: 3
4-asis pazymys: 2
5-asis pazymys: 1
6-asis pazymys: 5
7-asis pazymys: 3

Ivestu pazymiu vidurkis: 3.57143
```

Rezultatas 2:

```
Kiek pazymiu norite suvesti? 3
1-asis pazymys: 8
2-asis pazymys: 9
3-asis pazymys: 8

Ivestu pazymiu vidurkis: 8.33333
```

### Pavyzdys 6

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    // Sukuriamas skaičių masyvas ir užpildomas reikšmėmis
    int skaiciai[] = { 7, 4, 5, 9, 5, 2, 8, 1 };
    int skaiciu_kiekis = 8;

    // Išvedami skaičiai esantys masyve
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        cout << "[" << skaiciai[i] << "]";
    }
    cout << endl;

    // Sukuriami kintamieji skaičiavimams
    int lyginiu_kiekis = 0, lyginiu_suma = 0;
    double lyginiu_vidurkis = 0;

    // Einama per visus skaičius
    for (int i = 0; i < skaiciu_kiekis; i++)
    {
        // Žiūrima ar skaičius lyginis
        if (skaiciai[i] % 2 == 0)
        {
            // Lyginių kiekis didinamas vienu
            lyginiu_kiekis++;

            // Lyginių suma padidinama nauju skaičiumi
            lyginiu_suma += skaiciai[i];
        }
    }

    // Skaičiuojamas lyginių vidurkis
    lyginiu_vidurkis = (double)lyginiu_suma / lyginiu_kiekis;

    // Išvedami atsakymai
    cout << "Lyginiu skaiciu kiekis: " << lyginiu_kiekis << endl;
    cout << "Lyginiu skaiciu suma: " << lyginiu_suma << endl;
    cout << "Lyginiu skaiciu vidurkis: " << lyginiu_vidurkis << endl;

    return 0;
}
```

Rezultatai:

```
[7][4][5][9][5][2][8][1]
Lyginiu skaiciu kiekis: 3
Lyginiu skaiciu suma: 14
Lyginiu skaiciu vidurkis: 4.66667

```

## Užduotys

### Užduotis 1

- Susikurkite skaičių masyvą, kurį reikšmėmis galite užpildyti tiesiai programoje arba leisti suvesti vartotojui.
- Raskite šių skaičių sumą, vidurkį.
- Raskite skaičių, didesnių už vidurkį, kiekį.
- Išveskite turimus skaičius, bei visus gautus atsakymus.

<a href="uzduotys/uzduotis1/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 2

- Susikurkite skaičių masyvą, kurį reikšmėmis galite užpildyti tiesiai programoje arba leisti suvesti vartotojui.
- Iš šių skaičių raskite sumą tų skaičių, kurie yra lyginiai ir yra didesnių nei bendras turimų skaičių vidurkis.
- Išveskite visus pradinius skaičius ir atsakymus.

<a href="uzduotys/uzduotis2/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 3

- Vartotojui leiskite suvesti dviejų studentų pažymius (į du skirtingus masyvus).
- Paskaičiuokite kiekvieno studento pažymių vidurkius.
- Išveskite kiekvieno studento pažymius ir gautus vidurkius.
- Nurodykite, kurio studento vidurkis yra didesnis, bei per kokią dalį vidurkis skiriasi.

<a href="uzduotys/uzduotis3/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 4

- Turite viso mėnesio, kiekvienos dienos temperatūras.
- Raskite kiek dienų siekė 20 laipsnių ar buvo  šiltesnės nei 20 laispsnių ir koks tokių dienų vidurkis.
- Raskite kiek dienų buvo mažiau nei 20 laipsnių ir koks tokių dienų vidurkis.
- Raskite koks skirtumas tarp šiltų ir vėsesnių dienų vidurkių.
- Kurių dienų (šiltesnių ar vėsesnių) buvo daugiau?
- Išveskite pradinius duomenis, bei gautus atsakymus.

<a href="uzduotys/uzduotis4/" target="_blank">Žiūrėti sprendimą</a>

### Užduotis 5

- Studentas rašo baigiamąjį darbą ir jūs žinote po kiek puslapių kiekvieną dieną iki šiol jam pavyko parašyti.
- Jūs taip pat žinote, kad galutinį dokumentą studentas turi pateikti už x dienų, bei žinote kiek minimaliai puslapių reikia būti parašius.
- Pamėginkite paskaičiuoti ar studentas spės parašyti baigiamąjį darbą, jei sugebės išlaikyti tokį patį darbo tempą.
- Išveskite gautus atsakymus.

### Užduotis 6

- Taksi įmonė turi 3 vairuotojus. Turite informaciją apie kiekvieno vairuotojo per dieną nuvažiuotų kilometrų informaciją, bei atliktų užsakymų (reisų) kiekį.
- Raskite kiek vidutiniškai kilometrų per dieną nuvažiuoja kiekvienas vairuotojas.
- Raskite kiek vidutiniškai atlieka užsakymų (reisų) per dieną kiekvienas vairuotojas.
- Raskite kiek iš viso užsakymų (reisų) yra įvykdęs kiekvienas vairuotojas.
- Raskite kiek visi įmonės vairuotojai vidutiniškai per dieną nuvažiuoja kilometrų.
- Raskite kiek visi įmonės vairuotojai iš viso yra atlikę užsakymų (reisų).
- Raskite, kuris vairuotojas vidutiniškai nuvažiuoja daugiausiai kilometrų per dieną.
- Išveskite visą turimą pradinę informaciją, bei visus gautus atsakymus.

### Užduotis 7

- Krepšininkas treniruojasi varžyboms. Jūs turite informaciją apie tai kiek taškų jis įmetė per kiekvieną treniruotę.
- Paskaičiuokite kiek vidutiniškai taškų jis įmeta per kiekvieną treniruotę.
- Žinote koks yra bendras komandos vidurkis taškų vidurkis kiekvienoje treniruotėje.
- Palyginkite šio krepšininko treniruočių taškų vidurkį su komandos vidurkiu. Kaip jam sekasi?
- Išveskite turimus pradinius duomenis, bei gautus atsakymus.

### Užduotis 8

- Turite parduotuvės prekių informaciją (prekių pavadinimai, jų kiekiai, vieno vieneto kaina).
- Raskite kiek parduotuvė uždirbtų jei būtų išpirktos visos turimos prekės.
- Raskite kokia vidutinė vienos prekės kaina.
- Visą pradinę informaciją išveskite lentelės pavidalu ir tuomet pateikite visus gautus skaičiavimus.

### Užduotis 9

- Jums yra žinoma kiek duonos kepalų kiekvieną dieną kepykla iškepdavo per praėjusias dvi savaites.
- Jums yra žinoma, kiek artimiausios dviems savaitėms kepykla turi užsakymų.
- Pamėginkite prognozuoti ar kepykla spės patenkinti visus būsimus užsakymus (galbūt jums galėtų padėti vidurkio paskaičiavimas ir palyginimas).
- Išveskite pradinius duomenis ir gautus skaičiavimus.
