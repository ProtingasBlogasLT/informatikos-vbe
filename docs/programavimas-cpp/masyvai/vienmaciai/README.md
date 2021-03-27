# Vienmačiai masyvai

## Vaizdo pamoka

Informacija ruošiama.

## Apie vienmatį masyvą

- Masyve saugoma tik viena eilė susijusių duomenų. Pavyzdžiui, vienas po kito einantys:
  - pažymiai;
  - vardai;
  - automobilių markės;
  - ūgiai;
  - kiekvienos dienos temperatūros;
  - ...
- Viename vienmatyje masyve saugoma tokio paties duomenų tipo informacija (tik `int`, tik `string`, ar pan.).
- Kuriant masyvą reikia nurodyti masyvo dydį (kiek maksimaliai elementų bus saugoma jame). Vietoj to galima masyvui iškart priskirti duomenys, dėl ko jo dydis bus paskaičiuojamas automatiškai.
- Sukūrus norimo dydžio masyvą, jo viso užpildyti nebūtina, tačiau geriau jį kurti tokio dydžio, kad kuo labiau būtų išnaudojama visa rezervuota vieta, nes kitu atveju - tai tik atmintyje rezervuota ir nepanaudota vieta.
- Masyvo dydžio pakeisti programos eigoje negalima.
- Masyve esančius duomenis pasiekti ar keisti programos eigoje galima.

## Vienmačio masyvo sintaksė

Tuščias, nurodyto dydžio masyvas:

```cpp
<tipas> <pavadinimas>[<dydis>];
```

Masyvas, kūrimo metu užpildytas su nurodytais duomenimis:

```cpp
<tipas> <pavadinimas>[] = { <duomenys> };
```

Paaiškinimai:

- **tipas** - kokio tipo duomenys bus šiame masyve (`int`, `string`, `char`, `float`, ...).
- **pavadinimas** - koks masyvo pavadinimas / vardas, apibūdinantis kokią informaciją jis saugo, kaip jį galima pasiekti programoje.
- **dydis** - kiek maksimaliai elementų bus saugoma jame, pavyzdžiui, dešimt pažymių.
- **duomenys** - reikšmės duomenų, kurios įrašomos masyvo kūrimo metu.

## Masyvo narių indeksavimas

### Pavyzdys 1

Duomenys ir jų indeksai:

| Reikšmė: | 5 | 8 | 9 | 2 | -1 | 7 | -2 | 4 |
|-|-|-|-|-|-|-|-|-|
| Indeksas: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

Aprašymas per kodą:

```cpp
int skaiciai[] = { 5, 8, 9, 2, -1, 7, -2, 4 };
```

### Pavyzdys 2

Duomenys ir jų indeksai:

| Reikšmė: | Gluosnis | Ažuolas | Liepa | Berželis | Obelis |
|-|-|-|-|-|-|
| Indeksas: | 0 | 1 | 2 | 3 | 4 |

Aprašymas per kodą:

```cpp
string medziai[] =
{
  "Gluosnis",
  "Azuolas",
  "Liepa",
  "Berzelis",
  "Obelis"
};
```

### Pavyzdys 3

Duomenys ir jų indeksai:

| Reikšmė: | 7.5 | 8 | 4.5 | 9.8 | 7.6 |
|-|-|-|-|-|-|
| Indeksas: | 0 | 1 | 2 | 3 | 4 |

Aprašymas per kodą:

```cpp
double pazymiai[] = { 7.5, 8, 4.5, 9.8, 7.6 };
```

## Duomenų pasiekimas per indeksą

Reikšmės pasiekimas (išspausdinimas):

```cpp
cout << pavadinimas[indeksas];
```

Reikšmės pakeitimas:

```cpp
pavadinimas[indeksas] = nauja_reiksme;
```

## Pasitikrinkite: koks indeksas, kokia reikšmė?

| Reikšmė: | 5 | 8 | 9 | 2 | -1 | 7 | -2 | 4 |
|-|-|-|-|-|-|-|-|-|
| Indeksas: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

- `skaiciai[???] = 5;`
- `skaiciai[3] = ???;`
- `skaiciai[6] = ???;`
- `skaiciai[???] = 8;`
- `skaiciai[???] = 7;`
- `skaiciai[4] = ???;`
- `skaiciai[???] = 9;`
- `skaiciai[???] = 4;`

## Masyvo dydis ir elementų kiekis

- Masyvo dydis ir masyve esantis elementų kiekis nėra vienas ir tas pats.
- Masyvas gali būti ir didesnis nei į jį yra įvesta informacijos.
- C++ kalboje nėra automatinio `length` ar `count` sekimo, kuris nurodytų kiek elementų yra nurodytame masyve, todėl tai reikės daryti patiems.

Tarkime, sukuriame pažymių masyvą, kurio dydis yra 10 elementų:

```cpp
int pazymiai[10];
```

Į šį masyvą įrašome 5 pažymius:

```cpp
pazymiai[0] = 8;
pazymiai[1] = 9;
pazymiai[2] = 7;
pazymiai[3] = 10;
pazymiai[4] = 8;
```

Todėl dirbant su šio masyvo duomenimis mums reikės kažkaip žinoti, kiek duomenų jame iš tikrųjų yra. Tam tikslui galime įsivesti `int` tipo kintamąjį, kuris saugotų šį kiekį:

```cpp
int pazymiu_kiekis = 5;
```

Šis masyvas atmintyje atrodytų kažkaip panašiai:

| Reikšmė: | 8 | 9 | 7 | 10 | 8 | - | - | - | - | - |
|-|-|-|-|-|-|-|-|-|-|-|
| Indeksas: | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
