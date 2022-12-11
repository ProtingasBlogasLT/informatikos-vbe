# Nekeičiami sąrašai (tuples)

## Apie tuples

- Tai susijusių duomenų sugrupavimas (labai panašu į `list`).
- Tačiau tų duomenų mes niekaip po sukūrimo keisti nebegalime (read-only).
- `Tuples` yra greitesni už `list`'us, mažesnė rizika kad kažką sugadinsime ir pan. Tačiau jeigu reikia galimybės keisti duomenis - tuomet `tuples` netiks.

## Sintaksė

1-as variantas:

``` python
rinkinys = (reiksme, reiksme, reiksme)
```

2-as variantas:

```python
rinkinys = tuple([reiksme, reiksme, reiksme])
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
menesiai = ('sausis', 'vasaris', 'kovas', 'balandis', 'geguze',
    'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis',
    'lapkritis', 'gruodis')

print(menesiai)
```

Rezultatas:

```
('sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis')
```

### Pavyzdys 2

Kodas:

```python
menesiai = tuple(['sausis', 'vasaris', 'kovas', 'balandis', 'geguze',
    'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis',
    'lapkritis', 'gruodis'])

print(menesiai)
```

Rezultatas:

```
('sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis')
```

### Pavyzdys 3

Kodas:

```python
menesiai = ('sausis', 'vasaris', 'kovas', 'balandis', 'geguze',
    'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis',
    'lapkritis', 'gruodis')

print(menesiai)
print(type(menesiai))
print(menesiai[0])
print(menesiai[2])
print(menesiai[2:5])
print(menesiai[-4])
print(menesiai[1:6:2])
```

Rezultatas:

```
('sausis', 'vasaris', 'kovas', 'balandis', 'geguze', 'birzelis', 'liepa', 'rugpjutis', 'rugsejis', 'spalis', 'lapkritis', 'gruodis')
<class 'tuple'>
sausis
kovas
('kovas', 'balandis', 'geguze')
rugsejis
('vasaris', 'balandis', 'birzelis')
```

### Pavyzdys 4

Kodas:

```python
# galim tureti pasikartojanciu duomenu
skaiciai = (4, 7, 8, 5, 4, 6, 8, 4)
print(skaiciai.count(4))
print(skaiciai.index(8))
```

Rezultatas:

```
3
2
```

### Pavyzdys 5

Kodas:

```python
studentai = ('Petras', 'Ona', 'Ignas', 'Alisa')

for studentas in studentai:
    print(studentas)
```

Rezultatas:

```
Petras
Ona
Ignas
Alisa
```

### Pavyzdys 6

Kodas:

```python
demo = (7, 8, 5, 6)
demo.append(4) # error
```

Rezultatas:

```
Traceback (most recent call last):
  File "h:/coding school/python/11-tuples-ir-sets/6pvz.py", line 2, in <module>
    demo.append(4) # error
AttributeError: 'tuple' object has no attribute 'append'
```

### Pavyzdys 7

Kodas:

```python
demo = (7, 8, 5, 6)
demo[1] = 55 # error
```

Rezultatas:

```
Traceback (most recent call last):
  File "h:/coding school/python/11-tuples-ir-sets/7pvz.py", line 2, in <module>
    demo[1] = 55 # error
TypeError: 'tuple' object does not support item assignment
```

### Pavyzdys 8

Kodas:

```python
kate = {
    'vardas': 'puke',
    'amzius': 0.5,
    'megstamiausias_zaislas': 'lazeriukas'
}

# kai kurie dictionary metodai, kaip pvz .items()
# grazina tuples
print(kate.items())
```

Rezultatas:

```
dict_items([('vardas', 'puke'), ('amzius', 0.5), ('megstamiausias_zaislas', 'lazeriukas')])
```

### Pavyzdys 9

Kodas:

```python
# tuples galima naudoti kaip raktus prie dictionaries:
lokacijos = {
    (35.6895, 39.6917): 'tokyo office',
    (40.7128, 74.0060): 'new york office',
    (37.7749, 122.4194): 'san francisco office'
}

print(lokacijos)
print()
print(lokacijos[(37.7749, 122.4194)])
```

Rezultatas:

```
{(35.6895, 39.6917): 'tokyo office', (40.7128, 74.006): 'new york office', (37.7749, 122.4194): 'san francisco office'}

san francisco office
```

## Užduotys

### Užduotis 1

Susikurkite `tuple` iš studijų programos modulių pavadinimų. Atspausdinkite šiuos pavadinimus sąraše, prieš kiekvieną pavadinimą išvedant brūkšniuką. Raskite ilgiausią modulio pavadinimą.

### Užduotis 2

Susikurkite `tuple` iš mėnesių pavadinimų. Susikurkite kitus `tuples` sezonams apibūdinti: žiema, pavasaris, vasara, ruduo. Panaudokite `slicing` `[start:end]`, kad atitinkamus mėnesius sudėtumėte į atitinkamus sezonų `tuples`. Šį priskyrimą turite atlikti kuriant individualius sezonų `tuples`, kitaip išmes klaidą, kad jo negalite modifikuoti.
