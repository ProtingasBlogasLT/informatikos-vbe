# Patikrinimo sąlyga if

## Apie if sąlygą

If sąlyga skirta norint ką nors patikrinti ar palyginti. Pavyzdžiui:

- Ar skaičiai lygūs?
- Ar vartotojo amžius yra didesnis už 18?
- Ar vartotojas prisijungęs?
- Ar vartotojo rolė yra tinkama norint pasiekti turinį?
- Ar failas egzistuoja?
- ...

Kai sąlyga teisinga (užduotas klausimas yra tiesa (`True`)), tuomet yra vykdomas atitinkamas kodas.

## Palyginimo operatoriai (comparison operators)

| Operatorius | Pavadinimas | Pavyzdys |
|-|-|-|
| `==` | Lygu | `x == y` |
| `!=` | Nelygu | `x != y` |
| `>` | Daugiau nei | `x > y` |
| `<` | Mažiau nei | `x < y` |
| `>=` | Daugiau nei arba lygu | `x >= y` |
| `<=` | Mažiau nei arba lygu | `x <= y` |

## if sąlygos dalys

If sąlyga gali susidėti iš kelių dalių:

- `if` - būtinoji dalis.
- `elif` / `else if` - jeigu reikia tikrinti daugiau sąlygų, galima rašyti tiek `else if` dalių kiek tik reikia.
- `else` - jei reikia galima rašyti, rašosi pačiame gale, vieną kartą.
