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
- Viename vienmatyje masyve saugoma tokio paties duomenų tipo informacija (tik int, string ar pan.).

## Masyvo narių indeksavimas

- Visi duomenys masyve surašomi atskiriant kableliu.
- Naudojant šį masyvo tipą nereikia rūpintis indeksavimo kūrimu, nes indeksavimas atliekamas automatiškai, kiekvieną masyvo narį/elementą automatiškai numeruojant nuo 0. Todėl jeigu surašote, kad masyve turite kelis žodžius (pvz.: “audi”, “bmw”, “mercedes”...). Kiekvienam žodžiui bus priskirtas indekso skaičius, pradedant 0. Todėl gausis, kad “audi” turės indeksą nr. 0, bmw - 1, mercedes - 2, ir t.t.
- Kiekvienas narys yra pasiekiamas per skaitinį indekso numerį, todėl jei norime pasiimti pirmąjį narį iš masyvo, nurodome indekso numerį - 0, jeigu antrąjį narį - 1 ir t.t.

## Vienmačio masyvo sintaksė

```cpp
<tipas>[] <pavadinimas> = new <tipas>[<dydis>];
<tipas>[] <pavadinimas> = { <duomenys> };
var <pavadinimas> = new <tipas>[<dydis>];
var <pavadinimas> = new [] { <duomenys> };
```

## Indeksavimas

### Pavyzdys 1

| Reikšmė | 5 | 8 | 9 | 3 | -1 | 7 | -2 | 4 |
|-|-|-|-|-|-|-|-|-|
| Indeksas | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

```cpp
var skaiciai = new [] { 5, 8, 9, 3, -1, 7, -2, 4 };
```

### Pavyzdys 2

| Reikšmė| Gluosnis | Ažuolas | Liepa | Berželis | Obelis |
|-|-|-|-|-|-|
| Indeksas| 0 | 1 | 2 | 3 | 4 |

```cpp
var medziai = new []
{
“Gluosnis”,
“Ąžuolas”,
“Liepa”,
“Berželis”,
“Obelis”
};
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

## Pasitikrinkite: koks indeksas arba reikšmė?

| Reikšmė | 5 | 8 | 9 | 3 | -1 | 7 | -2 | 4 |
|-|-|-|-|-|-|-|-|-|
| Indeksas | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 |

- `skaiciai[???] = 5;`
- `skaiciai[3] = ???;`
- `skaiciai[6] = ???;`
- `skaiciai[???] = 8;`
- `skaiciai[???] = 7;`
- `skaiciai[4] = ???;`
- `skaiciai[???] = 9;`
- `skaiciai[???] = 4;`

## Pavyzdžiai

Informacija ruošiama.

## Užduotys

Informacija ruošiama.
