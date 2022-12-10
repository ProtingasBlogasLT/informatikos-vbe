# Ciklas while

## Apie ciklą while

Dažniausiai naudojamas kai nežinome kiek kartų ciklas turėtų būti vykdomas. Pavyzdžiui:

- Nuskaitinėjame failą, tačiau nežinome kiek teksto eilučių jame yra.
- Bandome iš vartotojo gauti duomenis, tačiau nežinome iš kelinto karto jis sugebės suvesti duomenis tvarkingai.
- Vykdome skaičiavimus ir norime juos vykdyti iki kol pasieksime tinkamą rezultatą.
- ...

## Sintaksė

```python
while patikrinimo_salyga:
	# vykdomas kodas jei sąlyga True
```

- **patikrinimo_salyga** - jeigu ši sąlyga grąžina `True` tipo atsakymą, tuomet ciklas vykdo iteraciją
- Ciklas vykdo tiek iteracijų kiek patikrinimo_salyga vis dar grąžina `True`

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
# nuo 0 iki 5 su for

for skaicius in range(5):
    print(skaicius)

# nuo 0 iki 5 su while

skaicius = 0

while skaicius < 5:
    print(skaicius)
    skaicius += 1
```

Rezultatas:

```
0
1
2
3
4
0
1
2
3
4
```

### Pavyzdys 2

Kodas:

```python
tekstas = 'sita teksta isvedame'
kiek_liko = 4

while kiek_liko > 0:
    print(tekstas)
    kiek_liko -= 1
```

Rezultatas:

```
sita teksta isvedame
sita teksta isvedame
sita teksta isvedame
sita teksta isvedame
```

### Pavyzdys 3

Kodas:

```python
prekiu_kiekis = 24

while prekiu_kiekis > 0:
    print(f'turimas prekiu kiekis: {prekiu_kiekis}')
    nupirkta = int( input('Kiek norite nupirkti? ') )
    print(f'nupirkote: {nupirkta} \n')
    prekiu_kiekis -= nupirkta
```

Rezultatas:

```
turimas prekiu kiekis: 24
Kiek norite nupirkti? 10
nupirkote: 10

turimas prekiu kiekis: 14
Kiek norite nupirkti? 5
nupirkote: 5

turimas prekiu kiekis: 9
Kiek norite nupirkti? 7
nupirkote: 7

turimas prekiu kiekis: 2
Kiek norite nupirkti? 3
nupirkote: 3
```

### Pavyzdys 4

Kodas:

```python
prekiu_kiekis = 24

while prekiu_kiekis > 0:
    print(f'turimas prekiu kiekis: {prekiu_kiekis}')
    pirkimo_kiekis = int( input('Kiek norite nupirkti? ') )
    if pirkimo_kiekis > prekiu_kiekis:
        pirkimo_kiekis = prekiu_kiekis
    print(f'nupirkote: {pirkimo_kiekis} \n')
    prekiu_kiekis -= pirkimo_kiekis
```

Rezultatas:

```
turimas prekiu kiekis: 24
Kiek norite nupirkti? 14
nupirkote: 14

turimas prekiu kiekis: 10
Kiek norite nupirkti? 7
nupirkote: 7

turimas prekiu kiekis: 3
Kiek norite nupirkti? 5
nupirkote: 3
```

### Pavyzdys 5

Kodas:

```python
import random

while True:
    skaicius = random.randint(1, 100)
    print(skaicius)

    if skaicius % 7 == 0 and skaicius % 2 == 0:
        print(f'skaicius {skaicius} dalinasi is 7 ir is 2')
        break
```

Rezultatas:

```
7
46
78
7
59
85
14
skaicius 14 dalinasi is 7 ir is 2
```

### Pavyzdys 6

Kodas:

```python
import random

skaicius = 1

while skaicius % 7 != 0 or skaicius % 2 != 0:
    skaicius = random.randint(1, 100)
    print(skaicius)
```

Rezultatas:

```
25
16
81
10
88
43
2
25
46
41
42
```

### Pavyzdys 7

Kodas:

```python
kartoti = 't'

while kartoti == 't':
    print("Iveskite du norimus skaicius (atskiriant enter):")
    pirmas = int( input() )
    antras = int( input() )
    print(f'{pirmas} + {antras} = {pirmas + antras}')
    kartoti = input('Ar norite kartoti? (t/n): ')

print('Pabaiga')
```

Rezultatas:

```
Iveskite du norimus skaicius (atskiriant enter):
8
7
8 + 7 = 15
Ar norite kartoti? (t/n): t
Iveskite du norimus skaicius (atskiriant enter):
3
2
3 + 2 = 5
Ar norite kartoti? (t/n): n
Pabaiga
```

### Pavyzdys 8

Kodas:

```python
while True:
    print("Iveskite du norimus skaicius (atskiriant enter):")
    pirmas = int( input() )
    antras = int( input() )
    print(f'{pirmas} + {antras} = {pirmas + antras}')
    kartoti = input('Ar norite kartoti? (t/n): ')
    if kartoti != 't':
        print('Daugiau nebekartojama')
        break

print('Pabaiga')
```

Rezultatas:

```
Iveskite du norimus skaicius (atskiriant enter):
5
8
5 + 8 = 13
Ar norite kartoti? (t/n): t
Iveskite du norimus skaicius (atskiriant enter):
1
4
1 + 4 = 5
Ar norite kartoti? (t/n): n
Daugiau nebekartojama
Pabaiga
```

### Pavyzdys 9

Kodas:

```python
pradzia, pabaiga = 1, 100

skaicius = 0

while skaicius < pradzia or skaicius > pabaiga:
    skaicius = int( input('Iveskite skaiciu tarp [1-100]: ') )

print('Pabaiga')
print('Ivestas skaicius:', skaicius)
```

Rezultatas:

```
Iveskite skaiciu tarp [1-100]: 877
Iveskite skaiciu tarp [1-100]: -417
Iveskite skaiciu tarp [1-100]: 54
Pabaiga
Ivestas skaicius: 54
```

### Pavyzdys 10

Kodas:

```python
pradzia, pabaiga = 1, 100

skaicius = 0

while skaicius < pradzia or skaicius > pabaiga:
    skaicius = int( input('Iveskite skaiciu tarp [1-100]: ') )
    if skaicius < pradzia or skaicius > pabaiga:
        print('Blogas rezis!')

print('Pabaiga')
print('Ivestas skaicius:', skaicius)
```

Rezultatas:

```
Iveskite skaiciu tarp [1-100]: 741
Blogas rezis!
Iveskite skaiciu tarp [1-100]: -785
Blogas rezis!
Iveskite skaiciu tarp [1-100]: 64
Pabaiga
Ivestas skaicius: 64
```

### Pavyzdys 11

Kodas:

```python
pradzia, pabaiga = 1, 100

skaicius = 0

while True:
    skaicius = int( input('Iveskite skaiciu tarp [1-100]: ') )
    if skaicius < pradzia or skaicius > pabaiga:
        print('Blogas rezis!')
    else:
        break

print('Pabaiga')
print('Ivestas skaicius:', skaicius)
```

Rezultatas:

```
Iveskite skaiciu tarp [1-100]: 748
Blogas rezis!
Iveskite skaiciu tarp [1-100]: -75
Blogas rezis!
Iveskite skaiciu tarp [1-100]: 5
Pabaiga
Ivestas skaicius: 5
```

### Pavyzdys 12

Kodas:

```python
import random

lyginiu_suma = 0
lyginiu_kiekis = 0

while lyginiu_kiekis < 5:
    skaicius = random.randint(1, 10)
    if skaicius % 2 == 0:
        print(skaicius, 'lyginis')
        lyginiu_kiekis += 1
        lyginiu_suma += skaicius
    else:
        print(skaicius)

print('rasta lyginiu suma:', lyginiu_suma)
```

Rezultatas:

```
4 lyginis
3
4 lyginis
7
1
1
7
6 lyginis
10 lyginis
2 lyginis
rasta lyginiu suma: 26
```

### Pavyzdys 13

Kodas:

```python
import random

slaptas = random.randint(1, 10)
spejimas = None

while slaptas != spejimas:
    spejimas = int(input('Spekite skaiciu tarp 1 ir 10: '))
```

Rezultatas:

```
Spekite skaiciu tarp 1 ir 10: 5
Spekite skaiciu tarp 1 ir 10: 1
Spekite skaiciu tarp 1 ir 10: 2
Spekite skaiciu tarp 1 ir 10: 3
Spekite skaiciu tarp 1 ir 10: 4
Spekite skaiciu tarp 1 ir 10: 6
Spekite skaiciu tarp 1 ir 10: 7
Spekite skaiciu tarp 1 ir 10: 8
```

### Pavyzdys 14

Kodas:

```python
import random

slaptas = random.randint(1, 10)
spejimas = None

while slaptas != spejimas:
    spejimas = int(input('Spekite skaiciu tarp 1 ir 10: '))
    if slaptas != spejimas:
        print('Deja nepavyko, bandykite dar karta')
    else:
        print('Laimejote!')
```

Rezultatas:

```
Spekite skaiciu tarp 1 ir 10: 5
Deja nepavyko, bandykite dar karta
Spekite skaiciu tarp 1 ir 10: 4
Deja nepavyko, bandykite dar karta
Spekite skaiciu tarp 1 ir 10: 3
Deja nepavyko, bandykite dar karta
Spekite skaiciu tarp 1 ir 10: 2
Deja nepavyko, bandykite dar karta
Spekite skaiciu tarp 1 ir 10: 1
Laimejote!
```

### Pavyzdys 15

Kodas:

```python
import random

slaptas = random.randint(1, 10)
spejimas = None

while slaptas != spejimas:
    spejimas = int(input('Spekite skaiciu tarp 1 ir 10: '))
    if slaptas > spejimas:
        print('Bandykite didesni')
    elif slaptas < spejimas:
        print('Bandykite mazesni')
    else:
        print('Atspejote!')
```

Rezultatas:

```
Spekite skaiciu tarp 1 ir 10: 5
Bandykite mazesni
Spekite skaiciu tarp 1 ir 10: 3
Bandykite mazesni
Spekite skaiciu tarp 1 ir 10: 1
Bandykite didesni
Spekite skaiciu tarp 1 ir 10: 2
Atspejote!
```

### Pavyzdys 16

Kodas:

```python
pazymiu_suma = 0
pazymiu_kiekis = 0

dar_ivesti = 't'

while dar_ivesti == 't':
    pazymys = int(input('Iveskite pazymi: '))
    pazymiu_suma += pazymys
    pazymiu_kiekis += 1
    dar_ivesti = input('Ar dar norite ivesti? (t/n) ')

vidurkis = round(pazymiu_suma / pazymiu_kiekis, 1)
print('Suvestu pazymiu vidurkis:', vidurkis)
```

Rezultatas:

```
Iveskite pazymi: 7
Ar dar norite ivesti? (t/n) t
Iveskite pazymi: 9
Ar dar norite ivesti? (t/n) t
Iveskite pazymi: 10
Ar dar norite ivesti? (t/n) n
Suvestu pazymiu vidurkis: 8.7
```

### Pavyzdys 17

Kodas:

```python
pazymiu_suma = 0
pazymiu_kiekis = 0

pazymys = -1

print('Iveskite tiek pazymiu kiek norite (atskiriant enter)')
print('Norint baigti irasykite 0')

while pazymys != 0:
    pazymys = int(input('Iveskite pazymi: '))
    if pazymys != 0:
        pazymiu_suma += pazymys
        pazymiu_kiekis += 1

vidurkis = round(pazymiu_suma / pazymiu_kiekis, 1)
print('Suvestu pazymiu vidurkis:', vidurkis)
```

Rezultatas:

```
Iveskite tiek pazymiu kiek norite (atskiriant enter)
Norint baigti irasykite 0
Iveskite pazymi: 7
Iveskite pazymi: 7
Iveskite pazymi: 8
Iveskite pazymi: 0
Suvestu pazymiu vidurkis: 7.3
```

## Užduotys

### Užduotis 1

Išveskite visus skaičius nuo 1 iki 20.

### Užduotis 2

Išveskite visus skaičius nuo 1 iki 50. Prie kiekvieno lyginio skaičiaus parašykite žodį "lyginis", o prie kiekvieno nelyginio – "nelyginis".

### Užduotis 3

Išveskite visus skaičius nuo 25 iki 50. Vietoj skaičių, kurie dalinasi iš 3 išveskite tekstą "dalinasi iš 3".

### Užduotis 4

Išveskite visus skaičius nuo 1 iki 100 arba iki tol kol pasitaikys toks, kuris dalinasi iš 7.

### Užduotis 5

Išvedinėkite visus skaičius nuo 1 iki tol kol pasitaikys skaičius, kuris dalinasi iš 3 ir iš 5.

### Užduotis 6

Vartotojas turi suvesti rėžių pradžią ir pabaigą. Tačiau jūs turite patikrinti ar nurodyti rėžiai yra geri (pradžia mažesnė už pabaigą). Liepkite vartotojui kartoti įvedimą tol, kol rėžiai jau bus įvesti tinkamai. Turint tinkamus rėžius, išveskite visus skaičius nuo rėžių pradžios iki pabaigos (šitam jau vietoj `while` galite naudoti `for` ciklą), šalia kiekvieno skaičiaus išvedant jo kvadratą, bei ar jis lyginis / nelyginis.

### Užduotis 7

Išveskite visus skaičius nuo 1 iki kol pasitaikys toks, kuris yra pirminis ir yra didesnis nei 20.

### Užduotis 8

Liepkite vartotojui įvedinėti bet kokius skaičius. Vykdykite įvedinėjimą iki kol įvestas skaičius bus lygus 0. Raskite įvestų skaičių sumą.

### Užduotis 9

Leiskite vartotojui atlikti norimus skaičiavimus tiek kartų kiek jis nori. Pavyzdžiui, leiskite vartotojui įvesti du skaičius, tuomet jam parodykite pačius skaičius, veiksmus (sudėtis, atimtis, daugyba, dalyba) ir suskaičiuotus atsakymus (`5 + 3 = 8; 5 - 3 = 2; ...`). Kai atsakymai bus parodyti, vartotojas turi turėti galimybę pakartoti skaičiavimus, todėl leiskite pasirinkti ar dar kartoti veiksmą, ar jau programa turėtų baigti savo darbą.

### Užduotis 10

Vartotojui išveskite pasirinkto skaičiaus daugybos lentelę (pvz, skaičiaus 5 daugybos lentelė būtų `5 * 1 = 5; 5 * 2 = 10; 5 * 3 = 15; ...`). Leiskite vartotojui kartoti veiksmą (tiek kartų kiek norės) ir gauti dar vieną daugybos lentelę su kitu pasirinktu skaičiumi.

### Užduotis 11

Liepkite vartotojui įvesti kiek jis nori skaičių. Įvedimą sustabdykite tuomet, kai vartototojas įves 0 ar -1, ar kitą jūsų pasirinktą skaičių ar simbolį. Raskite vartotojo įvestų skaičių sumą, vidurkį.

### Užduotis 12

Sukurkite studentų pažymių vidurkių skaičiuoklę (kaip pavyzdį galite naudoti 17-ą pavyzdį). Tačiau tokia skaičiuoklė turėtų leisti skaičiuoti vidurkį ne tik iš vieno studento pažymių, bet leistų pakartoti pažymių įvedimą ir vidurkio skaičiavimą ant tiek studentų kiek reikia.

### Užduotis 13

Sukurkite skaičiaus atspėjimo užduotį. Leiskite vartotojui pasirinkti žaidimo sudėtingumą (atsitiktinio skaičiaus rėžiai), ar suteikiamos pagalbos (skaičius mažesnis / didesnis nei spėjamas), kiek spėjimų leidžiama (neribotai, arba pvz iki 10 ėjimų), bei kiti pasirinkti parametrai. Vartotojas šiuos parametrus pasirenka žaidimo pradžioje. Turite užtikrinti, kad vartotojas pasirinko parametrus tik iš galimų - jeigu ne, liepkite įvedimą pakartoti.
