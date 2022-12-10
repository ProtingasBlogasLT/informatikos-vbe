# Ciklas for

## Apie ciklą for

Šis ciklas dažniausiai naudojamas kai yra žinoma kiek kartų jis turi būti vykdomas arba kai yra iteruojamas objektas (skaičių sąrašas, elementų rinkinys, ...).

## Sintaksė

```python
for elementas in iteruojamas_objektas:
	# vykdomas kodas
```

- **iteruojamas_objektas** - elementų rinkinys, sąrašas ir pan. - tai pro ką mes iteruojame su ciklu
- **elementas** - vienas elementas, viena dalis, iš iteruojamas_objektas

**iteruojamas_objektas**:

```python
[40, 32, 73]
"labas"
range(1, 10)
```

## Pavyzdžiai (1)

### Pavyzdys 1

Kodas:

```python
print('labas')
print('labas')
print('labas')

print()

# ta pati atliks ir sitas ciklas:

for sk in range(3):
    print('labas')
```

Rezultatas:

```
labas
labas
labas

labas
labas
labas
```

### Pavyzdys 2

Kodas:

```python
print('eilute nr 1')
print('eilute nr 2')
print('eilute nr 3')
print('eilute nr 4')
print()

for i in range(1, 5):
    print(f'eilute nr {i}')
```

Rezultatas:

```
eilute nr 1
eilute nr 2
eilute nr 3
eilute nr 4

eilute nr 1
eilute nr 2
eilute nr 3
eilute nr 4
```

### Pavyzdys 3

Kodas:

```python
for i in range(5):
    print(i)
```

Rezultatas:

```
0
1
2
3
4
```

### Pavyzdys 4

Kodas:

```python
for i in range(0, 5):
    print(i)
```

Rezultatas:

```
0
1
2
3
4
```

### Pavyzdys 5

Kodas:

```python
for i in range(1, 6):
    print(i)
```

Rezultatas:

```
1
2
3
4
5
```

### Pavyzdys 6

Kodas:

```python
for i in range(5):
    print(i+1)
```

Rezultatas:

```
1
2
3
4
5
```

### Pavyzdys 7

Kodas:

```python
for sk in range(5, 11):
    print(f'skaicius: {sk}')
```

Rezultatas:

```
skaicius: 5
skaicius: 6
skaicius: 7
skaicius: 8
skaicius: 9
skaicius: 10
```

### Pavyzdys 8

Kodas:

```python
for i in range(5, 16):
    print(f'skaicius i = {i}')
```

Rezultatas:

```
skaicius i = 5
skaicius i = 6
skaicius i = 7
skaicius i = 8
skaicius i = 9
skaicius i = 10
skaicius i = 11
skaicius i = 12
skaicius i = 13
skaicius i = 14
skaicius i = 15
```

### Pavyzdys 9

Kodas:

```python
for skaicius in range(2, 11):
    if skaicius % 2 == 0:
        print(f'skaicius {skaicius} yra lyginis')
```

Rezultatas:

```
skaicius 2 yra lyginis
skaicius 4 yra lyginis
skaicius 6 yra lyginis
skaicius 8 yra lyginis
skaicius 10 yra lyginis
```

### Pavyzdys 10

Kodas:

```python
for skaicius in range(2, 11, 2):
    print(f'skaicius {skaicius} yra lyginis')
```

Rezultatas:

```
skaicius 2 yra lyginis
skaicius 4 yra lyginis
skaicius 6 yra lyginis
skaicius 8 yra lyginis
skaicius 10 yra lyginis
```

### Pavyzdys 11

Kodas:

```python
for sk in range(1, 13):
    if sk % 2 == 0 or sk % 5 == 0:
        print(f'skaicius {sk} dalinasi is 2 arba 5')
```

Rezultatas:

```
skaicius 2 dalinasi is 2 arba 5
skaicius 4 dalinasi is 2 arba 5
skaicius 5 dalinasi is 2 arba 5
skaicius 6 dalinasi is 2 arba 5
skaicius 8 dalinasi is 2 arba 5
skaicius 10 dalinasi is 2 arba 5
skaicius 12 dalinasi is 2 arba 5
```

### Pavyzdys 12

Kodas:

```python
kiek = 5

for i in range(kiek):
    print(i)
```

Rezultatas:

```
0
1
2
3
4
```

### Pavyzdys 13

Kodas:

```python
pradzia = 7
pabaiga = 10

for i in range(pradzia, pabaiga + 1):
    print(f'skaicius {i}')
```

Rezultatas:

```
skaicius 7
skaicius 8
skaicius 9
skaicius 10
```

### Pavyzdys 14

Kodas:

```python
pradzia, pabaiga = 7, 10

for i in range(pradzia, pabaiga + 1):
    print(f'skaicius {i}')
```

Rezultatas:

```
skaicius 7
skaicius 8
skaicius 9
skaicius 10
```

### Pavyzdys 15

Kodas:

```python
for raide in "mano tekstas":
    print(raide)
```

Rezultatas:

```
m
a
n
o

t
e
k
s
t
a
s
```

### Pavyzdys 16

Kodas:

```python
tekstas = 'obelis'

for r in tekstas:
    print(r * 10)
```

Rezultatas:

```
oooooooooo
bbbbbbbbbb
eeeeeeeeee
llllllllll
iiiiiiiiii
ssssssssss
```

### Pavyzdys 17

Kodas:

```python
for el in [7, 4, 5, 32, 14, 78]:
    print(el)
```

Rezultatas:

```
7
4
5
32
14
78
```

### Pavyzdys 18

Kodas:

```python
for i in range(1, 4):

    print('pirmo ciklo pradzia, i =', i)

    for j in range(1, 4):
        print('antras ciklas, j =', j)

    print('pirmo ciklo iteracijos pabaiga')
```

Rezultatas:

```
pirmo ciklo pradzia, i = 1
antras ciklas, j = 1
antras ciklas, j = 2
antras ciklas, j = 3
pirmo ciklo iteracijos pabaiga
pirmo ciklo pradzia, i = 2
antras ciklas, j = 1
antras ciklas, j = 2
antras ciklas, j = 3
pirmo ciklo iteracijos pabaiga
pirmo ciklo pradzia, i = 3
antras ciklas, j = 1
antras ciklas, j = 2
antras ciklas, j = 3
pirmo ciklo iteracijos pabaiga
```

### Pavyzdys 19

Kodas:

```python
for raide in "azuolas":
    if raide == "l":
        break
    print(raide)

print("pabaiga")
```

Rezultatas:

```
a
z
u
o
pabaiga
```

### Pavyzdys 20

Kodas:

```python
for raide in "azuolas":
    if raide == "l":
        continue
    print(raide)

print("pabaiga")
```

Rezultatas:

```
a
z
u
o
a
s
pabaiga
```

## Užduotys (1)

### Užduotis 1

Su `for` pagalba penkis kartus išveskite savo vardą.

### Užduotis 2

Parašyti `for`, kuris išvestų kiekvieną skaičių pradedant nuo 0 ir baigiant 10.

### Užduotis 3

Parašyti `for`, kuris išvestų kas antrą skaičių pradedant 0 ir baigiant 15.

### Užduotis 4

Parašyti `for`, kuris išvestų kas trečią skaičių, pradedant 1 ir baigiant 20. Kiekvieną skaičių apskliausti laužtiniais skliaustais. Pvz.: `[1][4][7]...`

### Užduotis 5

Parašyti `for`, kuris eitų pro kiekvieną skaičių nuo 1 iki 20. Jame apsirašyti `if` sąlygą, kuri patikrintų ar dabartinis skaičius dalinasi iš 4, jei taip tai šį skaičių išvesti.

### Užduotis 6

Išveskite visus skaičius nuo 1 iki 15, prie kiekvieno jų nurodant tai lyginis ar nelyginis skaičius. Pvz:

```
1 - nelyginis
2 - lyginis
3 - nelyginis
...
```

### Užduotis 7

Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti `for`, kuris atskirose eilutėse išvestų kiekvieną skaičių iš tų rėžių, bei atskiriant tarpu - tų skaičių kvadratus.

### Užduotis 8

Susikurkite kintamuosius rėžių pradžiai ir pabaigai nusakyti. Patikrinkite, kad tai būtų validu (pradžia turi būti mažesnė nei pabaiga). Jei rėžiai tinkami, tuomet vykdyti `for`, kuris iš duotų skaičių išvestų visus nelyginius skaičius arba tuos, kurie dalinasi iš 8.

### Užduotis 9

Leiskite vartotojui įvesti savo vardą. Ciklą `for` vykdykite tiek kartų kiek tame varde yra raidžių. Visais atvejais išveskite tą patį pasisveikinimą, pavyzdžiui "Labas, Ieva" (ši eilutė kartotųsi 4 kartus).

### Užduotis 10

Susikurkite tokį ciklą: `for elementas in [88, 65, 21, 26, 47]`

Iš duotų skaičių išveskite visus skaičius, kurie yra lyginiai.

### Užduotis 11

Leiskite vartotojui nurodyti rėžių pradžią, pabaigą, žingsnį. Taip pat, kokius skaičius jis nori matyti (lyginius ar nelyginius). Patikrinkite ar rėžiai tinkami, jei taip vykdykite ciklą, kuris eitų per nurodytą rėžių, darant atitinkamą žingsnį. Išveskite tik tokius skaičius kokius vartotojas pasirinko (lyginius arba nelyginius).

### Užduotis 12

Su `for` pagalba, pamėginkite išvesti tokią eglutę:

```
*
**
***
****
*****
```

(papildomai) leiskite vartotojui pasirinkti kokio dydžio eglutė turėtų būti išvesta.

### Užduotis 13

Leiskite vartotojui įvesti bet kokį žodį, bei pasirinkti po kiek kartų turėtų būti pakartojama kiekviena raidė. Su ciklo pagalba išveskite kiekvieną raidę iš žodžio atskiroje eilutėje, taip pat, tą raidę eilutėje kartokite tiek kartų kiek pasirinko vartotojas (16 pvz).

### Užduotis 14

(papildomai, sunkiau) Be daugybos veiksmo programoje, sudauginkite du skaičius.

## Pavyzdžiai (2)

### Pavyzdys 21

Kodas:

```python
suma = 0

for i in range(10):
    suma += i

print(f'gauta suma: {suma}')
```

Rezultatas:

```
gauta suma: 45
```

### Pavyzdys 22

Kodas:

```python
suma = 0

for i in range(10):
    if i % 2 == 0:
        suma += i

print(f'lyginiu suma: {suma}')
```

Rezultatas:

```
lyginiu suma: 20
```

## Užduotys (2)

### Užduotis 15

Raskite visų skaičių nuo 1 iki 100 sumą.

### Užduotis 16

Raskite visų lyginių skaičių nuo 20 iki 50 sumą.

### Užduotis 17

Raskite visų nelyginių skaičių nuo 30 iki 60 sumą.

### Užduotis 18

Rasti visų skaičių, žemesnių už 1000 ir kurie dalinasi iš 3 arba 5, sumą. Pavyzdys:

- Visi skaičiai mažesni už 10 ir kurie dalinasi iš 3 arba 5 yra: 3, 5, 6, 9.
- Šių skaičių suma yra 23.

Turite gauti `233168` atsakymą.

### Užduotis 19

The "Fizz-Buzz test" is an interview question designed to help filter out the 99.5% of programming job candidates who can't seem to program their way out of a wet paper bag. The text of the programming assignment is as follows:

"Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz"."

### Užduotis 20

(sunkesnė) Parašyti for ciklą, kuris išvestų norimą kiekį fibonačiaus skaičių į ekraną. Fibonačiaus sekoje kiekvienas skaičius yra lygus prieš jį ėjusių dviejų skaičių sumai: `1, 1, 2, 3, 5, 8, 13, 21...`

Galite remtis šiais žingsniais, bet nebūtinai:

- Susikurkite tris sveikųjų skaičių kintamuosius, kurie jums padės tai pasiekti.
  - Pirmi du kintamieji saugos paskutinius du skaičius.
  - Trečiasis bus šių pirmų dviejų skaičių suma.
- Pirmus du skaičius išveskite ne cikle, o prieš jį ir ciklą pradėkite vykdyti nuo 2, o ne nuo 0.
- Kiekvieno ciklo metu turite perskaičiuot trečiąjį skaičių (pirmų dviejų skaičių sudėtis), tuomet pirmasis skaičius yra lygus antram, o antrasis lygus trečiam, išvesti į ekraną trečią skaičių.
