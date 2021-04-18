# Darbas su duomenų failais

## Vaizdo pamoka

Informacija ruošiama.

## Apie darbą su duomenų failais

- Norint nuskaityti informaciją iš failo arba išvesti informaciją į failą, reikės susikurti norimos krypties srauto operatorių, atsidaryti failą, atlikti nuskaitymo ar įrašymo veiksmus ir uždaryti failą.
- Nuskaitymas ar išvedimas į failą bus labai panašus į nuskaitymą ar išvedimą į konsolę, kuomet teko naudoti `cin` ir `cout`, vienintelis skirtumas - jūs susikursite savo srauto operatorių ir naudosite jį.
- Su tuo pačiu failu vienu metu galite atlikti tik nuskaitymo arba išvedimo veiksmą.

## Naudojama biblioteka

Norint nuskaityti informaciją iš failo ar išvesti ką nors į failą, bus reikalinga `fstream` biblioteka:

```cpp
#include <fstream>
```

## Sintaksė

Norint nuskaityti kažką iš failo arba kažką išvesti į failą, reikės susikurti atititinkamo tipo srauto operatorių, atsidaryti failą. O toliau, šių operatorių naudojimas yra toks pats kaip `cout` ir `cin` naudojimas dirbant su informacija iš ar į konsolę.

Nuskaitymo iš failo srauto operatoriaus kūrimas:

```cpp
ifstream nuskaitymo_srautas;
```

Išvedimo į failą srauto operatoriaus kūrimas:

```cpp
ofstream isvedimo_srautas;
```

Failo atsidarymas:

```cpp
srauto_operatorius.open("failas.txt");
```

Failo uždarymas:

```cpp
srauto_operatorius.close();
```

Galima naudoti ir trumpesnę sintaksę. Srauto operatoriaus sukūrimas ir failo atsidarymas darbui:

```cpp
// failas nuskaitymui
ifstream operatorius("failas.txt");

// failas išvedimui
ofstream operatorius("failas.txt");
```
