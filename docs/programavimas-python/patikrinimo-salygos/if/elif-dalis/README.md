# Patikrinimo sąlyga if: elif dalis

## elif / else if sąlyga

- Naudojant tik `if` dalį tikriausiai pastebėjote, kad tikrinate tik vieną dalyką. `Elif` / `else if` leidžia tikrinti kelis dalykus vieną po kito. Pavyzdžiui:
  - Ar skaičius teigiamas? Jei ne - sekantis tikrinimas: o gal skaičius neigiamas?
  - Ar vartotojui yra 18 metų? Jei ne - sekantis tikrinimas: o gal vartotojui yra 16 metų? Jei ne - sekantis tikrinimas - o gal vartotojui mažiau nei 16?
- Galima naudoti tiek `elif` dalių kiek tik reikia.
- Kiekviena `elif` dalis atsakinga už naujos sąlygos patikrinimą.
- Jei tikrinant skirtingas sąlygas (einant per `if` ir `elif` dalis) yra randama teisinga, tuomet jai priskirtas kodas yra įvykdomas ir sekančios sąlygos nebetikrinamos. T.y. yra vykdoma tik pirma teisinga sąlyga.

## elif / else if sąlygos sintaksė

```python
if tikrinama_salyga:
	# musu vykdomas kodas jeigu tikrinama_salyga yra True
elif tikrinama_salyga2:
	# musu vykdomas kodas jeigu tikrinama_salyga2 yra True
elif tikrinama_salyga3:
	# musu vykdomas kodas jeigu tikrinama_salyga3 yra True
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
if 5 > 8:
    print('suveike 5 > 8')
elif 7 > 3:
    print('suveike 7 > 3')
elif 1 == 1:
    print('suveike 1 == 1')
```

Rezultatas:

```
suveike 7 > 3
```

### Pavyzdys 2

Kodas:

```python
pasirinkimas = int( input('Iveskite pasirinkima (1-4): ') )

if pasirinkimas == 1:
    print('pasirinkote 1')
elif pasirinkimas == 2:
    print('pasirinkote 2')
elif pasirinkimas == 3:
    print('pasirinkote 3')
elif pasirinkimas == 4:
    print('pasirinkote 4')
```

Rezultatas 1:

```
Iveskite pasirinkima (1-4): 3
pasirinkote 3
```

Rezultatas 2:

```
Iveskite pasirinkima (1-4): 6
```

### Pavyzdys 3

Kodas:

```python
pinigai = 10
vip = True

if vip == True:
    print('vip iejimas')
elif pinigai > 5:
    print('galite nusipirkti bilieta')
```

Rezultatas:

```
vip iejimas
```

### Pavyzdys 4

Kodas:

```python
pinigai = 10
vip = True

if vip:
    print('vip iejimas')
elif pinigai > 5:
    print('galite nusipirkti bilieta')
```

Rezultatas:

```
vip iejimas
```

### Pavyzdys 5

Kodas:

```python
amzius = int( input('Iveskite amziu: ') )

if amzius >= 18:
    print('pilnametis')
elif amzius >= 16:
    print('amzius yra 16 arba 17')
elif amzius < 16:
    print('amzius yra iki 16 metu')
```

Rezultatas 1:

```
Iveskite amziu: 10
amzius yra iki 16 metu
```

Rezultatas 2:

```
Iveskite amziu: 16
amzius yra 16 arba 17
```

Rezultatas 3:

```
Iveskite amziu: 20
pilnametis
```

### Pavyzdys 6

Kodas:

```python
taskai = 6

if taskai >= 10:
    print('pazenges zaidejas')
elif taskai >= 8:
    print('geras zaidejas')
elif taskai >= 5:
    print('vidutinis zaidejas')
elif taskai < 5:
    print('pradedantysis zaidejas')
```

Rezultatas:

```
vidutinis zaidejas
```

### Pavyzdys 7

Kodas:

```python
role = 'moderatorius'

if role == 'admin':
    print('visos sistemos galimybes')
elif role == 'moderatorius':
    print('kiek apribotos, bet beveik pilnos galimybes')
elif role == 'vartotojas':
    print('gali tik perziureti paskirta info')
```

Rezultatas:

```
kiek apribotos, bet beveik pilnos galimybes
```

### Pavyzdys 8

Kodas:

```python
vardas = 'Jonas'

if vardas == 'jonas':
    print('jonas is mazuju')
elif vardas == 'Jonas':
    print('Jonas is pirmos didziosios')
elif vardas == 'JONAS':
    print('JONAS is visu didziuju')
```

Rezultatas:

```
Jonas is pirmos didziosios
```

### Pavyzdys 9

Kodas:

```python
vardas = 'Petras'

if 'ABC' in vardas:
    print('varde', vardas, 'yra ABC')
elif vardas.startswith('Pe'):
    print('vardas', vardas, 'prasideda su Pe')
elif vardas.endswith('as'):
    print('vardas', vardas, 'baigiasi su as')
```

Rezultatas:

```
vardas Petras prasideda su Pe
```

### Pavyzdys 10

Kodas:

```python
paieskos_fraze = 'SlaPtas'

if paieskos_fraze == 'slaptas':
    print('radome, case sensitive')
elif paieskos_fraze.lower() == 'slaptas':
    print('radome, case insensitive')
elif paieskos_fraze.lower() != 'slaptas':
    print('neradome')
```

Rezultatas:

```
radome, case insensitive
```

## Užduotys

### Užduotis 1

Susikurkite tris skaičių kintamuosius su norimomis reikšmėmis, arba leiskite šiuos skaičius suvesti vartotojui. Patikrinkite šias sąlygas (naudojant elif dalis):

- Ar pirmas skaičius didesnis už antrą?
- Ar antras skaičius didesnis už trečią?
- Ar trečias skaičius didesnis už pirmą?
- Ar pirmi du skaičiai yra lygūs?
- Ar paskutiniai du skaičiai yra lygūs?
- Ar pirmas skaičius yra lygus 0?
- Ar antras skaičius neigiamas?
- Ar trečias skaičius teigiamas?

### Užduotis 2

Susikurkite kintamąjį egzamino pažymiui saugoti [0-10]. Naudojant elif dalis patikrinkite šias sąlygas ir išveskite atitinkamą tekstą:

- Jei pažymys yra lygus 10 išvesti "puiku".
- Jei pažymys yra lygus arba didesnis nei 9 išvesti "labai gerai".
- Jei pažymys yra lygus arba didesnis nei 7 išvesti "gerai".
- Jei pažymys yra lygus arba didesnis nei 5 išvesti "patenkinamai".
- Jei pažymys mažesnis nei 5 išvesti "egzaminas neišlaikytas".
