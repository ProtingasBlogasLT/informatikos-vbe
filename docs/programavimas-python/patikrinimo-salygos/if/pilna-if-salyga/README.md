# Patikrinimo sąlyga if: pilna sąlyga

## Pilnos if sąlygos (su visomis dalimis) sintaksė

```python
if tikrinama_salyga:
	# musu vykdomas kodas jeigu tikrinama_salyga yra True
elif tikrinama_salyga2:
	# musu vykdomas kodas jeigu tikrinama_salyga2 yra True
else:
	# musu vykdomas kodas jeigu salyga if yra False
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
skaicius = int( input('Iveskite norima skaiciu: ') )

if skaicius > 0:
    print('jis yra teigiamas')
elif skaicius < 0:
    print('jis yra neigiamas')
else:
    print('jis yra lygus 0')
```

Rezultatas 1:

```
Iveskite norima skaiciu: 7
jis yra teigiamas
```

Rezultatas 2:

```
Iveskite norima skaiciu: -4
jis yra neigiamas
```

Rezultatas 3:

```
Iveskite norima skaiciu: 0
jis yra lygus 0
```

### Pavyzdys 2

Kodas:

```python
skaicius = int( input('Iveskite norima skaiciu: ') )

if skaicius % 2 == 0:
    print('skaicius dalinasi is 2')
elif skaicius % 3 == 0:
    print('skaicius dalinasi is 3')
elif skaicius % 4 == 0:
    print('skaicius dalinasi is 4')
else:
    print('nepavyko rasti is ko dalintusi')
```

Rezultatas 1:

```
Iveskite norima skaiciu: 98
skaicius dalinasi is 2
```

Rezultatas 2:

```
Iveskite norima skaiciu: 11
nepavyko rasti is ko dalintusi
```

Rezultatas 3:

```
Iveskite norima skaiciu: 39
skaicius dalinasi is 3
```

### Pavyzdys 3

Kodas:

```python
taskai = 7

if taskai >= 100:
    print('laimejote!')
elif taskai > 0:
    print('zaidimas vyksta')
else:
    print('pralosete')
```

Rezultatas:

```
zaidimas vyksta
```

### Pavyzdys 4

Kodas:

```python
failas = 'uzrasai/2022-10-14.txt'

if failas == None:
    print('prasome nurodyti faila')
elif failas.endswith('.txt'):
    print('failo nuskaitymas...')
else:
    print('nurodytas netinkamo formato failas')
```

Rezultatas:

```
failo nuskaitymas...
```

### Pavyzdys 5

Kodas:

```python
role = 'terminatorius'

if role == 'admin':
    print('visos galimybes')
elif role == 'moderatorius':
    print('dalis sistemos galimybiu')
elif role == 'vartotojas':
    print('tik priskirta informacija')
else:
    print(role, 'role nerasta')
```

Rezultatas:

```
terminatorius role nerasta
```

### Pavyzdys 6

Kodas:

```python
pirmas = int( input('Pirmas skaicius: ') )
antras = int( input('Antras skaicius: ') )

if pirmas > antras:
    print(pirmas, 'didesnis nei', antras)
elif antras > pirmas:
    print(antras, 'didesnis uz', pirmas)
else:
    print('skaiciai lygus')
```

Rezultatas 1:

```
Pirmas skaicius: 7
Antras skaicius: 9
9 didesnis uz 7
```

Rezultatas 2:

```
Pirmas skaicius: 5
Antras skaicius: 3
5 didesnis nei 3
```

Rezultatas 3:

```
Pirmas skaicius: 7
Antras skaicius: 7
skaiciai lygus
```

## Užduotys

### Užduotis 1

Susikurkite skaičiui saugoti skirtą kintamąjį, arba reikšmę leiskite suvesti vartotojui. Tikrinkite (naudojant visas if sąlygos dalis):

- Ar skaičius yra lyginis?
- Ar dalinasi iš 5?
- Ar skaičius lygus 3?
- Jeigu nieko nepavyko rasti, išveskite klaidos pranešimą.

### Užduotis 2

Susikurkite tris skaičius arba leiskite visus skaičius suvesti vartotojui. Tikrinkite (naudojant visas if sąlygos dalis):

- Ar pirmi du skaičiai lygūs?
- Ar pirmas ir trečias skaičiai lygūs?
- Ar trečias skaičius didesnis už pirmą?
- Ar antras skaičius lygus dvigubai trečio skaičiaus reikšmei?
- Ar pirmas skaičius dalinasi iš 3?
- Jei nieko nepavyko rasti, išveskite klaidos pranešimą.
