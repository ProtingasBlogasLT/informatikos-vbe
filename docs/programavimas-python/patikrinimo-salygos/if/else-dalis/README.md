# Patikrinimo sąlyga if: else dalis

## Apie else dalį

- `else` bus vykdomas visada kai jokia kita, prieš jį ėjusi sąlyga nebus teisinga.
- `else` dalyje nebereikia rašyti jokios sąlygos, jis automatiškai vykdomas kai niekas kitas netinka.
- `else` dalis rašoma tik vieną kartą, visos if sąlygos pabaigoje.
- `else` dalies rašyti nebūtina.
- `else` dalyje galima:
  - išvesti klaidos pranešimą;
  - leisti kartoti veiksmą;
  - įrašyti klaidą į "log" failus;
  - atlikti kitus veiksmus, kurie nėra priskiriami jokiai tikrintai sąlygai;
  - ...

## else sąlygos sintaksė

```python
if tikrinama_salyga:
	# musu vykdomas kodas jeigu tikrinama_salyga yra True
else:
	# musu vykdomas kodas jeigu salyga if yra False
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
skaicius = 8

if skaicius >= 10:
    print('skaicius didesnis arba lygus 10')
else:
    print('skaicius mazesnis nei 10')
```

Rezultatas:

```
skaicius mazesnis nei 10
```

### Pavyzdys 2

Kodas:

```python
failas = 'failai/paskaitos/uzrasai.txt'

if failas.endswith('.txt'):
    print('tekstinis failas')
    print('pradedamas darbas prie failo')
else:
    print('kitokio formato failas')
    print('prasome pasirinkti tinkama faila')
```

Rezultatas:

```
tekstinis failas
pradedamas darbas prie failo
```

### Pavyzdys 3

Kodas:

```python
ar_failas_yra = True

if ar_failas_yra:
    print('failo nuskaitymas...')
else:
    print('prasome nurodyti faila')
```

Rezultatas:

```
failo nuskaitymas...
```

### Pavyzdys 4

Kodas:

```python
failas = 'failai/paskaitos/uzrasai.txt'

# be patikrinimų kurie baigiasi True ar False,
# natūraliai False galime gauti ir jeigu:
# - turime tuščią objektą
# - turime tuščią string kintamąjį
# - nurodyta None reikšmė
# - yra 0

if failas:
    print('failo nuskaitymas...')
else:
    print('prasome nurodyti faila')
```

Rezultatas:

```
failo nuskaitymas...
```

### Pavyzdys 5

Kodas:

```python
failas = None

# be patikrinimų kurie baigiasi True ar False,
# natūraliai False galime gauti ir jeigu:
# - turime tuščią objektą
# - turime tuščią string kintamąjį
# - nurodyta None reikšmė
# - yra 0

if failas:
    print('failo nuskaitymas...')
else:
    print('prasome nurodyti faila')
```

Rezultatas:

```
prasome nurodyti faila
```

### Pavyzdys 6

Kodas:

```python
from random import randint

slaptas = randint(1, 10)

spejimas = int( input('Spekite skaiciu nuo 1 iki 10: ') )

if slaptas == spejimas:
    print('atspejote!')
else:
    print('deja, nepavyko :(((')
```

Rezultatas 1:

```
Spekite skaiciu nuo 1 iki 10: 1
atspejote!
```

Rezultatas 2:

```
Spekite skaiciu nuo 1 iki 10: 3
deja, nepavyko :(((
```

Rezultatas 3:

```
Spekite skaiciu nuo 1 iki 10: 6
deja, nepavyko :(((
```

### Pavyzdys 7

Kodas:

```python
taskai = 4

if taskai > 0:
    print('zaidimas vyksta')
else:
    print('deja, pralaimejote :(')
```

Rezultatas:

```
zaidimas vyksta
```

### Pavyzdys 8

Kodas:

```python
vardas = input('Iveskite savo varda: ')

if vardas:
    print('Labas, ' + vardas + '!')
else:
    print('Nieko neivedete!')
```

Rezultatas 1:

```
Iveskite savo varda: Ieva
Labas, Ieva!
```

Rezultatas 2:

```
Iveskite savo varda:
Nieko neivedete!
```

### Pavyzdys 9

Kodas:

```python
vardas = input('Iveskite savo varda: ')

if not(vardas):
    print('Nieko neivedete!')

print('...visa kita...')
```

Rezultatas 1:

```
Iveskite savo varda: Ieva
...visa kita...
```

Rezultatas 2:

```
Iveskite savo varda:
Nieko neivedete!        
...visa kita...
```

## Užduotys

### Užduotis 1

Leiskite vartotojui suvesti norimą skaičių. Patikrinkite ar jis yra lyginis, jei taip išveskite vieną informaciją, jei ne - kitą.

### Užduotis 2

Leiskite vartotojui suvesti norimą skaičių. Patikrinkite ar šis skaičius dalinasi iš 7, jei taip išveskite vieną tekstą, jei ne - kitą.

### Užduotis 3

Susikurkite kintamąjį, kuriame nurodytumėte kelią iki norimo failo. Patikrinkite ar šis failas yra .py tipo, jei taip išveskite vieną tekstą, jei ne - kitą.
