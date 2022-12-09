# Informacijos nuskaitymas iš konsolės

## Apie informacijos įvedimą

- Vienas iš variantų kaip gauti informaciją į programą - paprašyti vartotojo, kad konsolėje suvestų reikalingą informaciją.
- Tam mes naudojame `input()` funkciją.

## Sintaksė

Skirtingose eilutėse:

```python
print('Įveskite vardą:')
vardas = input()
```

Toje pačioje eilutėje:

```python
vardas = input('Įveskite vardą: ')
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
print('Iveskite savo varda:')
vardas = input() # informacijos ivedimas is terminalo

print('Jus ivedete:', vardas)
```

Rezultatas:

```
Iveskite savo varda:
Ieva
Jus ivedete: Ieva
```

### Pavyzdys 2

Kodas:

```python
print('Iveskite norima teksta:')
tekstas = input()

print('Ivestas tekstas:', tekstas)
print('Ivesties tipas:', type(tekstas))
```

Rezultatas:

```
Iveskite norima teksta:
Koks nors norimas tekstas
Ivestas tekstas: Koks nors norimas tekstas
Ivesties tipas: <class 'str'>
```

### Pavyzdys 3

Kodas:

```python
print('Iveskite koki nors skaiciu:')
skaicius = input()

print('Ivesta:', skaicius, type(skaicius))

skaicius = int(skaicius)
print('Iskonvertuota:', skaicius, type(skaicius))
```

Rezultatas:

```
Iveskite koki nors skaiciu:
5
Ivesta: 5 <class 'str'>
Iskonvertuota: 5 <class 'int'>
```

### Pavyzdys 4

Kodas:

```python
print('Iveskite norima skaiciu:')
skaicius = int(input())

print('Ivesta:', skaicius, type(skaicius))
```

Rezultatas:

```
Iveskite norima skaiciu:
4
Ivesta: 4 <class 'int'>
```

### Pavyzdys 5

Kodas:

```python
print('Iveskite vidurki (galima per kableli):')
vidurkis = float(input())

print('Ivesta:', vidurkis, type(vidurkis))
```

Rezultatas:

```
Iveskite vidurki (galima per kableli):
8.4
Ivesta: 8.4 <class 'float'>
```

### Pavyzdys 6

Kodas:

```python
print('Vardas:')
vardas = input()

print('Amzius:')
amzius = int(input())

print('Ivesta informacija:')
print(vardas, type(vardas))
print(amzius, type(amzius))
```

Rezultatas:

```
Vardas:
Ieva
Amzius:
50
Ivesta informacija:
Ieva <class 'str'>
50 <class 'int'>
```

### Pavyzdys 7

Kodas:

```python
print('Pirmas skaicius:')
pirmas = int(input())

print('Antras skaicius:')
antras = int(input())

print('Atsakymai:')
print(f"{pirmas} + {antras} = {pirmas + antras}")
print(f"{pirmas} - {antras} = {pirmas - antras}")
```

Rezultatas:

```
Pirmas skaicius:
7
Antras skaicius:
6
Atsakymai:
7 + 6 = 13
7 - 6 = 1
```

### Pavyzdys 8

Kodas:

```python
print('Iveskite du skaicius (atskiriant enter paspaudimu):')
pirmas = int(input())
antras = int(input())

suma = pirmas + antras
print('skaiciu suma:', suma)
```

Rezultatas:

```
Iveskite du skaicius (atskiriant enter paspaudimu):
8
6
skaiciu suma: 14
```

### Pavyzdys 9

Kodas:

```python
vardas = input('Iveskite varda: ')
amzius = int( input('Iveskite amziu: ') )

print('Ivesta informacija:')
print(vardas, type(vardas))
print(amzius, type(amzius))
```

Rezultatas:

```
Iveskite varda: Ieva
Iveskite amziu: 50
Ivesta informacija:
Ieva <class 'str'>
50 <class 'int'>
```

### Pavyzdys 10

Kodas:

```python
pirmas = int( input('Pirmas skaicius: ') )
antras = int( input('Antras skaicius: ') )

print(f'{pirmas} + {antras} = {pirmas + antras}')
```

Rezultatas:

```
Pirmas skaicius: 7
Antras skaicius: 6
7 + 6 = 13
```

## Užduotys

### Užduotis 1

Paprašykite vartotojo įvesti savo vardą, amžių ir kodėl pasirinko programavimą. Įvestą informaciją išveskite kaip nors tvarkingai, sakiniu ar atskirose eilutėse su prierašais.

### Užduotis 2

Paprašykite vartotojo įvesti norimą simbolį. Iš šio simbolio išveskite norimo dydžio kvadratą.

### Užduotis 3

Paprašykite vartotojo įvesti norimą simbolį. Iš šio simbolio atspausdinkite laiptus. Pvz.:

```
*
**
***
```

### Užduotis 4

Paprašykite vartotojo įvesti vardą, amžių, ūgį (metais) (nepamirškite ką reikia iškonvertuoti iš `str` į `int` ar `float`). Išveskite gautus duomenis ir jų tipus.

### Užduotis 5

Paprašykite vartotojo įvesti 5-is savo pažymius. Paskaičiuokite pažymių vidurkį. Išveskite atsakymą.

### Užduotis 6

Leiskite vartotojui įvesti metrus. Išveskite kiek tai gaunasi centimetrais, milimetrais ir kilometrais.

### Užduotis 7

Leiskite vartotojui įvesti du skaičius. Išveskite šių skaičių sudėtį, skirtumą, sandaugą ir dalmenį.

### Užduotis 8

Leiskite vartotojui įvesti du norimus skaičius. Išveskite kokia gaunasi liekana padalinus vieną skaičių iš kito.

### Užduotis 9

Leiskite vartotojui įvesti du skaičius. Išveskite kiek gautųsi vieną skaičių pakėlus kito skaičiaus laipsniu (pvz, pirmas skaičius eina už pagrindą, o antras skaičius yra laipsnis, kuriuo ir keliame).
