# Patikrinimo sąlyga if

## Vaizdo pamoka

Informacija ruošiama.

## Apie patikrinimo sąlygą if

If sąlyga skirta norint ką nors patikrinti ar palyginti. Pavyzdžiui:

- Ar skaičiai lygūs?
- Ar vartotojo amžius yra didesnis už 18?
- Ar vartotojas prisijungęs?
- Ar vartotojo rolė yra tinkama norint pasiekti turinį?
- Ar failas egzistuoja?
…

Kai sąlyga teisinga (užduotas klausimas yra tiesa (`true`)), tuomet yra vykdomas atitinkamas kodas.

## Palyginimo operatoriai

| Operatorius | Pavadinimas | Pavyzdys | Apibūdinimas |
|-|-|-|-|
| `>` | daugiau | `x > y` | grąžina `true` jei `x` daugiau už `y` |
| `<` | mažiau | `x < y` | grąžina `true` jei `x` mažiau už `y` |
| `>=` | daugiau arba lygu | `x >= y` | grąžina `true` jei `x` daugiau arba lygu `y` |
| `<=` | mažiau arba lygu | `x <= y` | grąžina `true` jei `x` mažiau arba lygu `y` |
| `==` | lygu | `x == y` | grąžina `true` jei `x` ir `y` yra lygūs |
| `!=` | nelygu | `x != y` | grąžina `true` jei `x` ir `y` yra nelygūs |

## if sąlygos dalys

If sąlyga gali susidėti iš kelių dalių:

- `if` - būtinoji dalis.
- `else if` - jeigu reikia tikrinti daugiau sąlygų, galima rašyti tiek `else if` dalių kiek tik reikia.
- `else` - jei reikia galima rašyti, rašosi pačiame gale, vieną kartą.
