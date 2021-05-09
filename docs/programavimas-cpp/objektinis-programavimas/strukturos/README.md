# Struktūros

## Vaizdo pamoka

Informacija ruošiama.

## Struktūros sintaksė

### Struktūros sukūrimas

Struktūros sukūrimas:

```cpp
struct <pavadinimas>
{
    // kodas
};
```

- **pavadinimas** - jūsų sugalvotas struktūros pavadinimas, dažniausiai aprašomas vienaskaitos forma, kadangi aprašo vieto objekto savybes.
- **kodas** - tarp kontūrinių skliaustų rašysite viską kas priklauso šiai struktūrai (kintamuosius ir funkcijas).

Pavyzdžiui:

```cpp
struct zmogus
{
    // kodas
};
```

### Struktūros atributai (kintamieji)

Norint aprašyti atributus / savybes ar tiesiog kintamuosius, tai būtų daroma taip:

```cpp
struct <pavadinimas>
{
    <tipas> <kintamojo1_pavadinimas>;
    <tipas> <kintamojo2_pavadinimas>;
    <tipas> <kintamojo3_pavadinimas>;
    ...
};
```

- **pavadinimas** - jūsų sugalvotas struktūros pavadinimas, dažniausiai aprašomas vienaskaitos forma, kadangi aprašo vieto objekto savybes.
- **tipas** - kintamojo tipas, gali būti `int`, `double`, `string`, `char` ir pan.
- **kintamojo_pavadinimas** - jūsų sugalvotas kintamojo pavadinimas.

Pavyzdžiui:

```cpp
struct zmogus
{
    string vardas;
    string pavarde;
    int amzius;
    double ugis;
};
```

### Struktūros funkcijos / metodai

Norint aprašyti su struktūra galimus atlikti veiksmus, t.y. sukurti funkcijas, bus daroma taip:

```cpp
struct <pavadinimas>
{
    // ...

    <tipas> <funkcijos_pavadinimas>(<argumentai>)
    {
        // kodas
    }
};
```

- **pavadinimas** - jūsų sugalvotas struktūros pavadinimas, dažniausiai aprašomas vienaskaitos forma, kadangi aprašo vieto objekto savybes.
- **tipas** - funkcijos rezultatų grąžinimo tipas (angl. `return type`), gali būti `void`, `int`, `double` ir pan.
- **funkcijos_pavadinimas** - jūsų sugalvotas funkcijos pavadinimas.
- **argumentai** - duomenys ką gauna funkcija, kad galėtų atlikti savo darbą.

Pavyzdžiui:

```cpp
struct zmogus
{
    string vardas;
    string pavarde;
    int amzius;
    double ugis;

    void isvedimas()
    {
        // funkcijos kodas
    }
};
```

:::tip Dėl struktūroje esančios funkcijos ribų
Struktūroje aprašytos funkcijos ribos (angl. `scope`) yra truputį kitokios nei įprastu atveju, t.y. tokios funkcijos pasiekia visus struktūroje (pagrindinėje jos dalyje, o ne atskirose funkcijose) sukurtus duomenis (kintamuosius).
:::

## Objekto sintaksė

### Objekto kūrimas

Objekto sukūrimo sintaksė:

```cpp
<tipas / strukturos_pavadinimas> <objekto_pavadinimas>;
```

- **tipas / strukturos_pavadinimas** - kuriamo objekto tipas, kuris sutampa su struktūros pavadinimu.
- **objekto_pavadinimas** - tas pats kas kintamojo pavadinimas, tačiau šiuo atveju kuriate objektą, o jam pavadinimą galvojate, kad jį vėliau galėtumėte kaip nors pasiekti.

Tarkime turime struktūrą:

```cpp
struct zmogus
{
    // ...
};

```

Tai tokios struktūros objektas bus sukurtas taip:

```cpp
zmogus petras;
```

### Objekte esančių duomenų ar funkcijų pasiekimas

Norint pasiekti objekte esančius kintamuosius:

```cpp
objektas.kintamasis;
```

Norint iškviesti objekte esančias funkcijas:

```cpp
objektas.funkcija();
```

Todėl pavyzdžiui, turint objektą:

```cpp
zmogus petras;
```

Jame esančius atributus (kintamuosius) galima pasiekti:

```cpp
petras.vardas;
```

Arba iškviesti funkcijas:

```cpp
petras.isvedimas();
```

## Struktūros aprašymo vieta

Struktūra yra kuriama už `main` funkcijos ribų. Galima kurti tame pačiame ar kitame faile, tačiau kuriant kitame faile ir norint pasinaudoti pavyzdžiui tame pačiame pagrindiniame faile, būtina įtraukti (su `include`) struktūros `.h` failą.

```cpp
#include <iostream>
using namespace std;

struct zmogus
{
    // kodas
};

int main()
{

    return 0;
}
```
