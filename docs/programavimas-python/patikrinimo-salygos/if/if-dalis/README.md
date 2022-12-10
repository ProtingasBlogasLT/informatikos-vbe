# Patikrinimo sąlyga if: if dalis

## if sąlygos veikimas

![if dalies veikimas](./veikimas.png)

## if sąlygos sintaksė

```python
if tikrinama_salyga:
    # musu vykdomas kodas jeigu tikrinama_salyga yra True
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
if 5 > 3:
    print('5 yra didesnis nei 3')
```

Rezultatas:

```
5 yra didesnis nei 3
```

### Pavyzdys 2

Kodas:

```python
if -7 > -10:
    print('-7 yra didesnis uz -10')

if 3 < 5:
    print('3 mazesnis uz 5')

if 8 < 0:
    print('8 mazesnis uz 0')
```

Rezultatas:

```
-7 yra didesnis uz -10
3 mazesnis uz 5
```

### Pavyzdys 3

Kodas:

```python
skaicius = 5

if skaicius > 0:
    print('skaicius teigiamas')

if skaicius < 0:
    print('skaicius neigiamas')

if skaicius == 0:
    print('skaicius lygus 0')
```

Rezultatas:

```
skaicius teigiamas
```

### Pavyzdys 4

Kodas:

```python
if 5 > 5:
    print('5 didesnis nei 5')

if 5 == 5:
    print('5 lygu 5')
```

Rezultatas:

```
5 lygu 5
```

### Pavyzdys 5

Kodas:

```python
slaptazodis = 'slaptas'

if slaptazodis == 'Slaptas':
    print('pirmas if')

if slaptazodis == 'slaptas':
    print('antras if')
```

Rezultatas:

```
antras if
```

### Pavyzdys 6

Kodas:

```python
vardas = 'Jonas'
amzius = 18

if amzius >= 18:
    print(vardas, 'yra pilnametis')
```

Rezultatas:

```
Jonas yra pilnametis
```

### Pavyzdys 7

Kodas:

```python
print('Iveskite norima skaiciu:')
skaicius = int(input())

if skaicius > 0:
    print('ivestas skaicius teigiamas')

if skaicius < 0:
    print('ivestas skaicius neigiamas')

if skaicius == 0:
    print('ivestas skaicius lygus 0')
```

Rezultatas 1:

```
Iveskite norima skaiciu:
6
ivestas skaicius teigiamas
```

Rezultatas 2:

```
Iveskite norima skaiciu:
-7
ivestas skaicius neigiamas
```

Rezultatas 3:

```
Iveskite norima skaiciu:
0
ivestas skaicius lygus 0
```

### Pavyzdys 8

Kodas:

```python
skaicius = 8

if 5 + 3 >= 6:
    print('suveike 5 + 3 >= 6 patikrinimas')

if skaicius + 2 > 10:
    print('suveike', skaicius, '+ 2 > 10 patikrinimas')

if skaicius * 2 > 0:
    print('suveike', skaicius, '* 2 > 0 patikrinimas')

if 8 * 2 < 8 + 6:
    print('suveike 8 * 2 < 8 + 6 patikrinimas')
```

Rezultatas:

```
suveike 5 + 3 >= 6 patikrinimas
suveike 8 * 2 > 0 patikrinimas
```

### Pavyzdys 9

Kodas:

```python
skaicius = int( input('Iveskite skaiciu: ') )

print(f'{skaicius}:')

if skaicius % 2 == 0:
    print('dalinasi is 2')
if skaicius % 3 == 0:
    print('dalinasi is 3')
if skaicius % 4 == 0:
    print('dalinasi is 4')
if skaicius % 5 == 0:
    print('dalinasi is 5')
if skaicius % 6 == 0:
    print('dalinasi is 6')
if skaicius % 7 == 0:
    print('dalinasi is 7')
if skaicius % 8 == 0:
    print('dalinasi is 8')
if skaicius % 9 == 0:
    print('dalinasi is 9')
```

Rezultatas:

```
Iveskite skaiciu: 48
48:
dalinasi is 2
dalinasi is 3
dalinasi is 4
dalinasi is 6
dalinasi is 8
```

### Pavyzdys 10

Kodas:

```python
skaicius = 8

if skaicius % 2 != 0:
    print('skaicius nesidalina is 2')

if skaicius % 3 != 0:
    print('skaicius nesidalina is 3')

if skaicius % 4 != 0:
    print('skaicius nesidalina is 4')
```

Rezultatas:

```
skaicius nesidalina is 3
```

### Pavyzdys 11

Kodas:

```python
skaicius = 14

print(skaicius > 0)
print(skaicius >= 10)
print(skaicius < 0)
print(skaicius <= 10)
print(skaicius == 10)
print(skaicius != 10)
```

Rezultatas:

```
True
True
False
False
False
True
```

### Pavyzdys 12

Kodas:

```python
print(1 == 1)
print(True == 1)
print()

print(True == False)
print(True == 0)
print()

print(False == 0)
```

Rezultatas:

```
True
True

False
False

True
```

### Pavyzdys 13

Kodas:

```python
ar_vairuoja = True

print('ar vairuoja reiksme:', ar_vairuoja)

if ar_vairuoja == True:
    print('pirmas if')

if ar_vairuoja:
    print('antras if')
```

Rezultatas:

```
ar vairuoja reiksme: True
pirmas if
antras if
```

### Pavyzdys 14

Kodas:

```python
# ternary operator / inline if

# [on_true] if [expression] else [on_false]

# jeigu klientas turi daugiau nei 100 tasku,
# jis yra 'gold' klientas, kitu atveju,
# jis yra 'silver' klientas

taskai = 110
tipas = 'gold' if taskai > 100 else 'silver'

print(tipas)
```

Rezultatas:

```
gold
```

### Pavyzdys 15

Kodas:

```python
taskai = 110
tipas = 'gold' if taskai > 100 else 'silver'
print(taskai, tipas)

taskai = 50
print(taskai, tipas)

tipas = 'gold' if taskai > 100 else 'silver'
print(taskai, tipas)
```

Rezultatas:

```
110 gold
50 gold
50 silver
```

### Pavyzdys 16

Kodas:

```python
patikrinimas = True if 10 * 2 > 0 else False
print(patikrinimas)

patikrinimas2 = 10 * 2 > 0
print(patikrinimas2)

tekstas = 'Tom' if 5 + 3 * 2 > 10 else 'Bob'
print(tekstas)

tekstas2 = 'Tom' if 5 + 2 == 10 else 'Bob'
print(tekstas2)
```

Rezultatas:

```
True
True
Tom
Bob
```

## Užduotys

### Užduotis 1

Susikurkite tris kintamuosius skaičiams saugoti. Parašykite šias atskiras if sąlygas:

- Ar pirmas ir antras skaičiai yra lygūs?
- Ar antras ir trečias skaičiai yra lygūs?
- Ar pirmas skaičius yra didesnis už antrąjį?
- Ar antras skaičius yra didesnis už dvigubą trečiojo skaičiaus reikšmę (trečias skaičius padaugintas iš 2)?
- Ar pirmas skaičius yra lyginis (ar dalinasi iš 2)?
- Ar antras skaičius yra nelyginis (ar nesidalina iš 2)?
- Ar trečias skaičius yra teigiamas (didesnis už 0)?
- Ar pirmas skaičius yra neigiamas (mažesnis už 0)?
- Ar antras skaičius dalinasi iš 4?
- Ar trečias skaičius dalinasi iš 8?

### Užduotis 2

Liepkite vartotojui suvesti savo amžių. Patikrinkite ar amžius yra didesnis arba lygus 18-ai, jei taip - išveskite "jūs galite balsuoti".

### Užduotis 3

Leiskite vartotojui suvesti norimą kiekį pažymių (pavyzdžiui, jūs nusimatote 3-is kintamuosius, tai leidžiate padaryti 3 įvedimus). Raskite šių pažymių vidurkį. Patikrinkite ar vidurkis teigiamas (daugiau arba lygu 5-iems), jei taip - išveskite "vidurkis teigiamas".

### Užduotis 4

Susikurkite skaičiaus kintamąjį arba leiskite šį skaičių įvesti vartotojui. Atlikite šiuos patikrinimus ir veiksmus:

- Jei skaičius dalinasi iš 5, tuomet išveskite šio skaičiaus daugybos lentelę nuo 1 iki 5.
- Jei skaičius lyginis, tuomet išveskite šį skaičių, jo kvadratą ir jį padalintą iš 2.
- Jei skaičius nesidalina iš 7, tuomet susikurkite antrąjį kintamąjį, išveskite šių dviejų skaičių sumą, skirtumą, sandaugą, dalmenį.
