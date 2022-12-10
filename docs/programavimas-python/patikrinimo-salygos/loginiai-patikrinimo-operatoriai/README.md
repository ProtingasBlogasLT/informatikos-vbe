# Loginiai patikrinimo operatoriai

## Apie loginius operatorius

Loginiai operatoriai naudojami norint patikrinti kelias sąlygas vienu metu (o ne iš eilės kaip tai vyktų su `elif`). Pavyzdžiui:

- Ar vartotojas prisijungęs **IR** ar vartotojas turi atitinkamą rolę?
- Ar failas egzistuoja failų sistemoje **ARBA** yra nustatytas atsarginis failas?
- Ar studentas turi užtektinai pinigų ant bilieto **IR** turi galiojantį LSP?
- Ar skaičius patenka į rėžius (yra didesnis už pradžią **IR** yra mažesnis už pabaigą)?
- Ar prie produkto yra įrašyta kaina **ARBA** produktas pažymėtas kaip nemokamas?

## Sintaksė naudojant loginius patikrinimo operatorius

```
<sąlyga> <operatorius> <sąlyga>
```

- **sąlyga** - bet kokia sąlyga, kuri grąžina `True` arba `False` atsakymą. Pavyzdžius: `4 > 2`, gražina `True` atsakymą.
- **operatorius** - iš anksto numatytas operatorius, leidžiantis apjungti kelias sąlygas norimu būdu.

Galima apjungti ir daugiau sąlygų:

```
<sąlyga> <operatorius> <sąlyga> <operatorius> <sąlyga>
```

Taip pat, galima su skliaustais nurodyti prioritetus apjungiant sąlygas:

```
<sąlyga> <operatorius> (<sąlyga> <operatorius> <sąlyga>)
```

Pirma bus patikrintos sąlygos, esančios tarp skliaustų, o vėliau likusi dalis.

## Loginiai operatoriai

| Operatorius | Aprašymas | Pavyzdys |
|-|-|-|
| `and` | grąžins `True` jeigu abi sąlygos yra `True` | `x < 5 and x < 10` |
| `or` | grąžins `True` jeigu bent viena iš sąlygų yra `True` | `x < 5 or x < 4` |
| `not` | grąžins priešingą rezultatą, pvz.: grąžins `False` jeigu rezultatas yra `True` | `not(x < 5 and x < 10)` |

## Operatorius `and` (ir)

- `False and False = False`
- `False and True = False`
- `True and False = False`
- `True and True = True`

| X | Y | X and Y |
|-|-|-|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | 1 |

## Operatorius `or` (arba)

- `False or False = False`
- `False or True = True`
- `True or False = True`
- `True or True = True`

| X | Y | X or Y |
|-|-|-|
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

## Operatorius `not` (ne)

- `not(True) = False`
- `not(False) = True`

| X | not(X) |
|-|-|
| 0 | 1 |
| 1 | 0 |

## Pasitikrinkite

Kaip manote, kam bus lygios (`True` / `False`) tokios sąlygos?

- `(10 > 9) and (9 > 10) = ???`
- `(10 > 9) or (9 > 10) = ???`
- `not(True) = ???`
- `(10 > 9) and (not(9 > 10)) = ???`

### Kam bus lygus `(10 > 9) and (9 > 10)` ?

1. `(10 > 9)` bus `True`, todėl: `True and (9 > 10)`
2. `(9 > 10)` bus `False`, todėl: `True and False`
3. Naudojant operatorių and visos sąlygos dalys turi būti `True`, kad visa sąlyga būtų `True`, todėl galutinis rezultatas: `False`

Apibendrinus: `(10 > 9) and (9 > 10) = False`

### Kam bus lygus `(10 > 9) or (9 > 10)` ?

1. `(10 > 9)` bus `True`, todėl: `True or (9 > 10)`
2. `(9 > 10)` bus `False`, todėl: `True or False`
3. Naudojant operatorių `or` bent viena sąlygos dalis turi būti `True`, kad visa sąlyga būtų `True`, todėl galutinis rezultatas: `True`

Apibendrinus: `(10 > 9) or (9 > 10) = True`

### Kam bus lygus `not(True)` ?

1. `not` dalis reiškia priešingą veiksmą, todėl `not(True)` keičiasi į tiesiog `False`

Apibendrinus: `not(True) = False`

### Kam bus lygus `(10 > 9) and (not(9 > 10))` ?

1. `(10 > 9)` bus `True`, todėl: `True and (not(9 > 10))`
2. `(9 > 10)` bus `False`, todėl: `True and (not(False))`
3. `(not(False))` dalis verčiasi į priešingą jai, t. y. į `True`, todėl: `True && True`
4. Naudojant operatorių `and` visos sąlygos dalys turi būti `True`, kad visa sąlyga būtų `True`, todėl galutinis rezultatas: `True`

Apibendrinus: `(10 > 9) and (not(9 > 10)) = True`

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
skaicius = int( input('Iveskite skaiciu: ') )

if skaicius > 0 and skaicius <= 100:
    print('skaicius patenka tarp reziu [1-100]')
```

Rezultatas 1:

```
Iveskite skaiciu: 42
skaicius patenka tarp reziu [1-100]
```

Rezultatas 2:

```
Iveskite skaiciu: 136
```

### Pavyzdys 2

Kodas:

```python
skaicius = int( input('Iveskite skaiciu: ') )

if skaicius > 0 and skaicius <= 100:
    print('skaicius patenka tarp reziu [1-100]')
else:
    print('skaicius nepatenka tarp nurodytu reziu')
```

Rezultatas 1:

```
Iveskite skaiciu: 48
skaicius patenka tarp reziu [1-100]
```

Rezultatas 2:

```
Iveskite skaiciu: 879
skaicius nepatenka tarp nurodytu reziu
```

### Pavyzdys 3

Kodas:

```python
skaicius = 156

if skaicius == 3 or skaicius > 100:
    print('skaicius lygus 3 arba didesnis nei 100')
```

Rezultatas:

```
skaicius lygus 3 arba didesnis nei 100
```

### Pavyzdys 4

Kodas:

```python
pradzia = 1
pabaiga = 100

skaicius = int( input('Iveskite skaiciu: ') )

print()
print('reziai [', pradzia, '-', pabaiga, ']')
print('duotas skaicius:', skaicius)

if skaicius >= pradzia and skaicius <= pabaiga:
    print('patenka i rezius')
else:
    print('nepatenka i rezius')
```

Rezultatas 1:

```
Iveskite skaiciu: 458

reziai [ 1 - 100 ]
duotas skaicius: 458
nepatenka i rezius
```

Rezultatas 2:

```
Iveskite skaiciu: 34

reziai [ 1 - 100 ]
duotas skaicius: 34
patenka i rezius
```

### Pavyzdys 5

Kodas:

```python
skaicius = 4

if skaicius > 0 and skaicius % 2 == 0:
    print('skaicius teigiamas ir lyginis')
elif skaicius > 0 and skaicius % 3 == 0:
    print('skaicius teigiamas ir dalinasi is 3')
else:
    print('skaicius neigiamas arba nesidalina nei is 2 nei is 3')
```

Rezultatas:

```
skaicius teigiamas ir lyginis
```

### Pavyzdys 6

Kodas:

```python
kaina = 0
nemokama = True

if kaina > 0 or nemokama == True:
    print('preke parduodama')

if kaina > 0 or nemokama:
    print('preke parduodama')
```

Rezultatas:

```
preke parduodama
preke parduodama
```

### Pavyzdys 7

Kodas:

```python
if 5 + 3 > 0 or 100 < 100:
    print('suveike')
else:
    print('nesuveike')
```

Rezultatas:

```
suveike
```

### Pavyzdys 8

Kodas:

```python
if 5 + 3 > 0 and 100 < 100:
    print('suveike')
else:
    print('nesuveike')
```

Rezultatas:

```
nesuveike
```

### Pavyzdys 9

Kodas:

```python
if 8 * 2 == 16 and (8 + 9 * 2) % 2 == 0:
    print('suveike')
else:
    print('nesuveike')
```

Rezultatas:

```
suveike
```

### Pavyzdys 10

Kodas:

```python
if True and False or True:
    print('suveike')
else:
    print('nesuveike')
```

Rezultatas:

```
suveike
```

### Pavyzdys 11

Kodas:

```python
if False and (False or True):
    print('suveike')
else:
    print('nesuveike')
```

Rezultatas:

```
nesuveike
```

### Pavyzdys 12

Kodas:

```python
ar_yra_bilietas = True

if ar_yra_bilietas:
    print('bilietas yra')
else:
    print('bilieto nera')

if not(ar_yra_bilietas):
    print('bilieto nera')
else:
    print('bilietas yra')
```

Rezultatas:

```
bilietas yra
bilietas yra
```

### Pavyzdys 13

Kodas:

```python
if not(5 + 3 > 0):
    print('suveike')
else:
    print('nesuveike')
```

Rezultatas:

```
nesuveike
```

### Pavyzdys 14

Kodas:

```python
skaicius = 55

if (skaicius > 0 and skaicius < 100) or skaicius % 2 == 0:
    print('skaicius patenka i rezius arba dalinasi is 2')

if skaicius > 0 and (skaicius < 100 or skaicius % 2 == 0):
    print('skaicius teigiamas ir mazesnis uz 100 arba lyginis')
```

Rezultatas:

```
skaicius patenka i rezius arba dalinasi is 2
skaicius teigiamas ir mazesnis uz 100 arba lyginis
```

## Užduotys

### Užduotis 1

Leiskite vartotojui suvesti tris skaičius. Suraskite kuris iš šių skaičių yra didžiausias.

### Užduotis 2

Leiskite vartotojui suvesti tris skaičius. Suraskite kuris iš šių skaičių yra mažiausias.

### Užduotis 3

Susikurkite trijų egzaminų rezultatų kintamuosius arba paprašykite, kad vartotojas suvestų šias reikšmes. Suraskite pažymių vidurkį. Atlikite šiuos patikrinimus:

- ar gautas vidurkis yra [8-10];
- ar gautas vidurkis yra [5-8);
- ar gautas vidurkis yra < 5.

### Užduotis 4

Susikurkite du skaičius. Patikrinkite (naudojant 4 atskirus `if`'us):

- ar pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;
- ar antras skaičius yra didesnis už pirmąjį arba yra lygus 5;
- ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;
- ar antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;
