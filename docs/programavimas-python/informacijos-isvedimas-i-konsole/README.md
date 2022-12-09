# Informacijos išvedimas į konsolę

## Apie informacijos išvedimą

- Norint konsolėje (terminale) pamatyti kokią nors informaciją (kai dirbame iš `*.py` failų), tam reikia naudoti `print()` funkciją.
- Pagal numatytuosius nustatymus `print()` išves informaciją į vieną eilutę, o po išvedimo pereis į kitą, kad sekantys išvedimai būtų naujose eilutėse.

## Sintaksė

```
print()
print('norimas tekstas')
print("norimas tekstas")
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
print('Teksto eilute')
```

Rezultatas:

```
Teksto eilute
```

### Pavyzdys 2

Kodas:

```python
print('Pirma teksto eilute')
print('Antra teksto eilute')
```

Rezultatas:

```
Pirma teksto eilute
Antra teksto eilute
```

### Pavyzdys 3

Kodas:

```python
tekstas = 'Teksto eilute'
print(tekstas)
```

Rezultatas:

```
Teksto eilute
```

### Pavyzdys 4

Kodas:

```python
pirma_eilute = 'Pirma teksto eilute'

print(pirma_eilute)
print('Antra teksto eilute')
```

Rezultatas:

```
Pirma teksto eilute
Antra teksto eilute
```

### Pavyzdys 5

Kodas:

```python
print('koks nors ' + 'jungtinis tekstas')
print('koks nors', 'kitoks jungtinis tekstas')
print('koks nors vientisas tekstas')
```

Rezultatas:

```
koks nors jungtinis tekstas
koks nors kitoks jungtinis tekstas
koks nors vientisas tekstas
```

### Pavyzdys 6

Kodas:

```python
print('---------------')
print('isskirtas tekstas')
print('---------------')
```

Rezultatas:

```
---------------
isskirtas tekstas
---------------
```

### Pavyzdys 7

Kodas:

```python
print('tekstas')
print() # nauja eilute
print('dar teksto')
```

Rezultatas:

```
tekstas

dar teksto
```

### Pavyzdys 8

Kodas:

```python
tekstas = 'pirma eilute\nantra eilute\ntrecia eilute'
print(tekstas)

print('pirma eilute\nantra eilute\ntrecia eilute')
```

Rezultatas:

```
pirma eilute
antra eilute
trecia eilute
pirma eilute
antra eilute
trecia eilute
```

### Pavyzdys 9

Kodas:

```python
marke = 'Citroen'
modelis = 'Xsara'
metai = 2002
rida = 148974

print(marke)
print(modelis)
print(metai)
print(rida)
```

Rezultatas:

```
Citroen
Xsara
2002
148974
```

### Pavyzdys 10

Kodas:

```python
marke = 'Citroen'
modelis = 'Xsara'
metai = 2002
rida = 148974

print('Marke:', marke)
print('Modelis:', modelis)
print('Metai:', metai)
print('Rida:', rida)
```

Rezultatas:

```
Marke: Citroen
Modelis: Xsara
Metai: 2002
Rida: 148974
```

### Pavyzdys 11

Kodas:

```python
marke = 'Citroen'
modelis = 'Xsara'
metai = 2002
rida = 148974

print('Marke: ' + marke)
print('Modelis: ' + modelis)
print('Metai: ' + str(metai)) # be str meta klaida
print('Rida: ' + str(rida)) # be str meta klaida
```

Rezultatas:

```
Marke: Citroen
Modelis: Xsara
Metai: 2002
Rida: 148974
```

### Pavyzdys 12

Kodas:

```python
marke = 'Citroen'
modelis = 'Xsara'
metai = 2002
rida = 148974

print(marke, modelis, 'buvo pagaminta', metai, 'metais ir nuvaziavo', rida, 'km')
```

Rezultatas:

```
Citroen Xsara buvo pagaminta 2002 metais ir nuvaziavo 148974 km
```

### Pavyzdys 13

Kodas:

```python
marke = 'Citroen'
modelis = 'Xsara'
metai = 2002
rida = 148974

# f"" arba f'' yra naujesnio python budas formatuoti teksta
print(f'{marke} {modelis} buvo pagaminta {metai} metais ir nuvaziavo {rida} km')
```

Rezultatas:

```
Citroen Xsara buvo pagaminta 2002 metais ir nuvaziavo 148974 km
```

### Pavyzdys 14

Kodas:

```python
vardas = 'Tomas'
pavarde = 'Tomauskas'
amzius = 22
kursas = 3
vidurkis = 8.7

# f"" arba f'' yra naujesnio python budas formatuoti teksta
eil = f"{vardas} {pavarde} ({amzius} m.) mokosi {kursas}-iame kurse, jo vidurkis yra {vidurkis}"

print(eil)
```

Rezultatas:

```
Tomas Tomauskas (22 m.) mokosi 3-iame kurse, jo vidurkis yra 8.7
```

### Pavyzdys 15

Kodas:

```python
tekstas = 'Teksto pradzia'
tekstas += ' daugiau teksto'

print(tekstas)
```

Rezultatas:

```
Teksto pradzia daugiau teksto
```

### Pavyzdys 16

Kodas:

```python
vardas = 'Tomas'
pavarde = 'Tomauskas'
amzius = 22
kursas = 3
vidurkis = 8.7

# f"" arba f'' yra naujesnio python budas formatuoti teksta
formatuotas = f"{vardas} {pavarde} ({amzius} m.) mokosi "
formatuotas += f"{kursas}-iame kurse, jo vidurkis yra {vidurkis}"

print(formatuotas)
```

Rezultatas:

```
Tomas Tomauskas (22 m.) mokosi 3-iame kurse, jo vidurkis yra 8.7
```

### Pavyzdys 17

Kodas:

```python
vardas = 'Tomas'
pavarde = 'Tomauskas'
vidurkis = 8.7

# format yra senesnio python variantas teksto formatavimui
formatuotas = "Studento {} {} vidurkis yra {}".format(vardas, pavarde, vidurkis)

print(formatuotas)
```

Rezultatas:

```
Studento Tomas Tomauskas vidurkis yra 8.7
```

## Užduotys

### Užduotis 1

Pirmoje eilutėje išveskite savo vardą ir amžių. Antroje eilutėje išveskite kodėl pasiryžote išbandyti programavimą.

### Užduotis 2

Išveskite bet kokį eilėraštį, kurį sudarytų bent 5 eilutės.

### Užduotis 3

Išveskite 3x3 dydžio tuščiavidurį kvadratą iš `*` simbolio. Galutinio rezultato pavyzdys:

```
***
* *
***
```

### Užduotis 4

Susikurkite šiuos kintamuosius, saugančius informaciją apie gyvūną: pavadinimas, amžius, kailio spalva, svoris. Išveskite šiuos duomenis gražiai suformatuotus vienoje eilutėje, sakinio forma. Pavyzdžiui:

```
Gyvūnas - šuo (2 m.) turi rudą kailio spalvą ir sveria 1.4 kg.
```

### Užduotis 5

Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje be tarpų tarp šių skaičių. Pavyzdžiui: skaičius - `25`, išvedimas - `2525252525`

### Užduotis 6

Susikurkite skaičiaus kintamąjį, kurį išveskite penkis kartus toje pačioje eilutėje su tarpais tarp šių skaičių. Pavyzdžiui: skaičius - `25`, rezultatas - `25 25 25 25 25`

### Užduotis 7

Išveskite:

```
*
**
***
```

### Užduotis 8

Per vieną `print()` išveskite tris skirtingas teksto eilutes.

### Užduotis 9

Konsolėje iš brūkšniukų ir kitų simbolių išveskite lentelę. Pavyzdžiui:

```
+--------+--------+
| Vardas | Amzius |
+--------+--------+
| Tomas  | 24     |
| Jonas  | 26     |
| Justė  | 25     |
+--------+--------+
```
