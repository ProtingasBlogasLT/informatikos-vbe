# Rinkiniai (sets)

## Apie sets

- `Sets` irgi skirtas duomenų sugrupavimui, tačiau set galima turėti tik nesidubliuojančias reikšmes (tik unikalius duomenis).
- Duomenis galima keisti.
- Tarpinis variantas tarp sąrašo (`list`) ir žodyno (`dictionary`) (galima susidėti duomenis kaip į sąrašą, tačiau nėra rikiuojami kaip sąraše, nes yra be rikiavimo eiliškumo kaip `dictionary`).
- Naudingiausia kai reikia turėti rinkinį su unikaliomis reikšmėmis, tačiau nerūpi duomenų eiliškumas, raktų-reikšmių poros.

## Sintaksė

1-as variantas:

```
rinkinys = {reiksme, reiksme, reiksme}
```

2-as variantas:

```
rinkinys = set({reiksme, reiksme, reiksme})
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
rinkinys = set({1, 2, 3, 4, 4, 5, 5, 5})
print(rinkinys)
```

Rezultatas:

```
{1, 2, 3, 4, 5}
```

### Pavyzdys 2

Kodas:

```python
pirmas = set({7, 4, 5})
antras = {8, 2, 3, 5}

print(pirmas)
print(antras)
```

Rezultatas:

```
{4, 5, 7}
{8, 2, 3, 5}
```

### Pavyzdys 3

Kodas:

```python
unikalus_miestai = {"Kaunas", 'Vilnius', 'Klaipeda', 'Kaunas', 'Siauliai'}

print(unikalus_miestai)
```

Rezultatas:

```
{'Klaipeda', 'Kaunas', 'Siauliai', 'Vilnius'}
```

### Pavyzdys 4

Kodas:

```python
vardai = {'Petras', 'Ona', 'Gintaras', 'Ugne'}
print('Ona' in vardai)
print('Ugnius' in vardai)
print(5 in vardai)
```

Rezultatas:

```
True
False
False
```

### Pavyzdys 5

Kodas:

```python
rink = {'pirmas', 'antras', 'trecias'}
print(rink[0]) # klaida
```

Rezultatas:

```
Traceback (most recent call last):
  File "h:/coding school/python/12-sets/5pvz.py", line 2, in <module>
    print(rink[0]) # klaida
TypeError: 'set' object is not subscriptable
```

### Pavyzdys 6

Kodas:

```python
ivairi_info = {7, 'Jonas', 4, 5, 'Petras', 6.87, 2.5, 3}
print(ivairi_info)
```

Rezultatas:

```
{'Petras', 2.5, 3, 4, 5, 6.87, 7, 'Jonas'}
```

### Pavyzdys 7

Kodas:

```python
skaiciai = {7, 4, 2, 6}

for sk in skaiciai:
    print(sk)
```

Rezultatas:

```
2
4
6
7
```

### Pavyzdys 8

Kodas:

```python
salys = {'Lietuva', 'Latvija', 'Estija', 'Svedija', 'Norvegija'}

for salis in salys:
    print('-', salis)
```

Rezultatas:

```
- Estija
- Svedija
- Latvija
- Lietuva
- Norvegija
```

### Pavyzdys 9

Kodas:

```python
miestai = ['Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda',
    'Panevezys', 'Siauliai', 'Vilnius']

print('visi miestai:', miestai, '\n')

unikalus_miestai = set(miestai)

print('unikalus miestai:', unikalus_miestai)
```

Rezultatas:

```
visi miestai: ['Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai', 'Vilnius']

unikalus miestai: {'Kaunas', 'Siauliai', 'Vilnius', 'Panevezys', 'Klaipeda'}
```

### Pavyzdys 10

Kodas:

```python
miestai = ['Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda',
    'Panevezys', 'Siauliai', 'Vilnius']

print('visi miestai:', miestai, '\n')

unikalus_miestai = set(miestai)
unikalus_miestai_sarase1 = list(unikalus_miestai)
print('sarase1:', unikalus_miestai_sarase1, '\n')

unikalus_miestai_sarase2 = list(set(miestai))
print('sarase2:', unikalus_miestai_sarase2)
```

Rezultatas:

```
visi miestai: ['Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda', 'Panevezys', 'Siauliai', 'Vilnius']

sarase1: ['Vilnius', 'Klaipeda', 'Panevezys', 'Kaunas', 'Siauliai']

sarase2: ['Vilnius', 'Klaipeda', 'Panevezys', 'Kaunas', 'Siauliai']
```

### Pavyzdys 11

Kodas:

```python
miestai = ['Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda',
    'Panevezys', 'Siauliai', 'Vilnius']

print('skirtingu miestu yra:', len(set(miestai)))
```

Rezultatas:

```
skirtingu miestu yra: 5
```

### Pavyzdys 12

Kodas:

```python
s = set([1, 2, 3])

s.add(4)
print(s)

s.add(4)
print(s)
```

Rezultatas:

```
{1, 2, 3, 4}
{1, 2, 3, 4}
```

### Pavyzdys 13

Kodas:

```python
miestai = {'Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda',
    'Panevezys', 'Siauliai', 'Vilnius'}
print(miestai, '\n')

miestai.add('Ukmerge')
miestai.add('Kaunas')
print(miestai)
```

Rezultatas:

```
{'Siauliai', 'Klaipeda', 'Kaunas', 'Panevezys', 'Vilnius'}

{'Siauliai', 'Klaipeda', 'Kaunas', 'Ukmerge', 'Panevezys', 'Vilnius'}
```

### Pavyzdys 14

Kodas:

```python
skaiciai = {1, 2, 3, 4, 5, 6}

skaiciai.remove(3)
print(skaiciai)

skaiciai.remove(7) # klaida

# jeigu reikia isvengti trynimo
# klaidu - naudokite .discard()
```

Rezultatas:

```
{1, 2, 4, 5, 6}
Traceback (most recent call last):
  File "h:/coding school/python/12-sets/14pvz.py", line 6, in <module>
    skaiciai.remove(7) # klaida
KeyError: 7
```

### Pavyzdys 15

Kodas:

```python
miestai = {'Kaunas', 'Vilnius', 'Kaunas', 'Klaipeda',
    'Panevezys', 'Siauliai', 'Vilnius'}

miestai.remove('Panevezys')
# miestai.remove('Birzai') # klaida

print(miestai)

miestai.discard('Birzai')
miestai.discard('Vilnius')

print(miestai)
```

Rezultatas:

```
{'Siauliai', 'Vilnius', 'Kaunas', 'Klaipeda'}
{'Siauliai', 'Kaunas', 'Klaipeda'}
```

### Pavyzdys 16

Kodas:

```python
pirmas = set([1, 2, 3])
antras = pirmas.copy()

print('pirmas', pirmas)
print('antras', antras)
print()

print(pirmas == antras) # ar sutampa reiksmes
print(pirmas is antras) # ar ziuri i ta pacia vieta atmintyje
```

Rezultatas:

```
pirmas {1, 2, 3}
antras {1, 2, 3}

True
False
```

### Pavyzdys 17

Kodas:

```python
rinkinys = set([1, 2, 3])
rinkinys.clear() # isvalymas
print(rinkinys)
```

Rezultatas:

```
set()
```

### Pavyzdys 18

Kodas:

```python
matematikos_studentai = {'Ona', 'Petras', 'Giedrius', 'Gintare'}
biologijos_studentai = {'Petras', 'Jonas', 'Ona', 'Povilas', 'Greta'}

visi_unikalus_studentai = matematikos_studentai | biologijos_studentai

print(visi_unikalus_studentai)
```

Rezultatas:

```
{'Povilas', 'Jonas', 'Gintare', 'Petras', 'Ona', 'Giedrius', 'Greta'}
```

### Pavyzdys 19

Kodas:

```python
matematikos_studentai = {'Ona', 'Petras', 'Giedrius', 'Gintare'}
biologijos_studentai = {'Petras', 'Jonas', 'Ona', 'Povilas', 'Greta'}

studentai_tik_abiejuose = matematikos_studentai & biologijos_studentai

print(studentai_tik_abiejuose)
```

Rezultatas:

```
{'Ona', 'Petras'}
```

### Pavyzdys 20

Kodas:

```python
raides = { raide.upper() for raide in 'labas rytas' }
print(raides)
```

Rezultatas:

```
{'A', 'T', 'S', ' ', 'B', 'R', 'L', 'Y'}
```

### Pavyzdys 21

Kodas:

```python
skaiciai = { x ** 2 for x in range(10) }
print(skaiciai)
```

Rezultatas:

```
{0, 1, 64, 4, 36, 9, 16, 49, 81, 25}
```

## Užduotys

### Užduotis 1

Įsivaizduokite, kad sukūrėte balsavimo formą, kurioje žmogus galėjo rinktis 1 iš kelių galimų variantų (ar įrašyti savo) ir turite sąraše visus tuos balsavimo duomenis (pvz: balsavimui panaudotas klausimas "labiausiai patinkanti kalba:", o atsakymai `['c++', 'python', 'python', 'javascript', 'python', 'c#', 'javascript']`). Atrinkite visus skirtingus atsakymų variantus į atskirą sąrašą (būtų `['c++', 'python', 'javascript', 'c#']`).

### Užduotis 2

Savo nuožiūra atlikite dar bent vieną analogišką užduotį.
