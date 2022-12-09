# Kintamieji ir duomenų tipai

## Apie kintamuosius

- Kintamieji yra jūsų duomenys.
- Šie duomenys gali būti įvairūs skaičiai, simboliai, tekstas ar kita.
- Jie gali būti panaudojami, pakeičiami.
- Su kintamaisiais galite saugoti bet kokią programai reikalingą informaciją. Pavyzdžiui duomenis apie žmones, daiktus ar kita.

## Sintaksė

```
pavadinimas = reiksme;
```

## Taisyklės kuriant kintamuosius

- Norint sukurti kintamąjį mums užtenka iškart rašyti kintamojo pavadinimą. Python nuspręs kintamojo tipą pagal jo reikšmę.
- Kintamojo pavadinimą gali sudaryti raidės, skaičiai ir apatinis brūkšnelis (`A-z`, `0-9`, `_`).
- Kintamojo pavadinimas gali prasidėti tik raide arba apatiniu brūkšneliu.
- Kintamųjų pavadinimai yra jautrūs mažosioms/didžiosioms raidėms. `A` didžioji ir `a` mažoji nėra tas pats, todėl kintamasis `vardas` ir kintamasis `VARDAS` nėra tas pats.
- Aprašant reikšmę reikia nepamiršti naudoti ar nenaudoti kabučių, pagal tai koks kintamojo tipas yra naudojamas.

## Duomenų tipai

| Duomenų tipo kategorija / rūšis | Duomenų tipas |
|-|-|
| Tekstinis (text type) | `str` |
| Skaičius (numeric types) | `int`, `float`, `complex` |
| Eilės (sequence types) | `list`, `tuple`, `range` |
| Kartografavimo (mapping type) | `dict` |
| Rinkinių (set types) | `set`, `frozenset` |
| Loginis (boolean type) | `bool` |
| Dvejetainiai (binary types) | `bytes`, `bytearray`, `memoryview` |
| Jokio tipo (none type) | `NoneType` |

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
vardas = 'Tomas'
pavarde = 'Tomauskas'

print(vardas)
print(pavarde)
```

Rezultatas:

```
Tomas
Tomauskas
```

### Pavyzdys 2

Kodas:

```python
skaicius1 = 8
skaicius2 = 4

print(skaicius1)
print(skaicius2)

print(skaicius1 + skaicius2)
```

Rezultatas:

```
8
4
12
```

### Pavyzdys 3

Kodas:

```python
tekstas = 'Koks nors mano norimas tekstas'
kitas_tekstas = "Tekstas su kitom kabutem"

print(tekstas)
print(kitas_tekstas)
```

Rezultatas:

```
Koks nors mano norimas tekstas
Tekstas su kitom kabutem
```

### Pavyzdys 4

Kodas:

```python
vardas = 'Petras'
Vardas = 'Jonas'

print(vardas)
print(Vardas)
```

Rezultatas:

```
Petras
Jonas
```

### Pavyzdys 5

Kodas:

```python
marke = 'Audi'
modelis = 'A4'
metai = 2010
rida = 124775
darbinis_turis = 1.6
ar_technikine = False
savininkas = None

print(marke)
print(modelis)
print(metai)
print(rida)
print(darbinis_turis)
print(ar_technikine)
print(savininkas)
```

Rezultatas:

```
Audi
A4
2010
124775
1.6
False
None
```

### Pavyzdys 6

Kodas:

```python
marke = 'Audi'
modelis = 'A4'
metai = 2010
rida = 124775
darbinis_turis = 1.6
ar_technikine = False
savininkas = None

print('Marke:', marke)
print('Modelis:', modelis)
print('Metai:', metai)
print('Rida, km:', rida)
print('Darbinis turis, l:', darbinis_turis)
print('Ar yra technikine?', ar_technikine)
print('Savininkas:', savininkas)
```

Rezultatas:

```
Marke: Audi
Modelis: A4
Metai: 2010
Rida, km: 124775
Darbinis turis, l: 1.6
Ar yra technikine? False
Savininkas: None
```

### Pavyzdys 7

Kodas:

```python
vardas = 'Tomas'
print(vardas)

vardas = 'Petras'
print(vardas)
```

Rezultatas:

```
Tomas
Petras
```

### Pavyzdys 8

Kodas:

```python
vardas = None
print(vardas)

vardas = 'Petras'
print(vardas)
```

Rezultatas:

```
None
Petras
```

### Pavyzdys 9

Kodas:

```python
marke = 'Audi'
modelis = 'A4'
metai = 2010
rida = 124775
darbinis_turis = 1.6
ar_technikine = False
savininkas = None

print(marke, type(marke))
print(modelis, type(modelis))
print(metai, type(metai))
print(rida, type(rida))
print(darbinis_turis, type(darbinis_turis))
print(ar_technikine, type(ar_technikine))
print(savininkas, type(savininkas))
```

Rezultatas:

```
Audi <class 'str'>
A4 <class 'str'>
2010 <class 'int'>
124775 <class 'int'>
1.6 <class 'float'>
False <class 'bool'>
None <class 'NoneType'>
```

### Pavyzdys 10

Kodas:

```python
vardas = 'Tomas'
amzius = 14

print('vardas', vardas, type(vardas))
print('amzius', amzius, type(amzius))
print()

vardas = 15
amzius = 'Petras'

print('vardas', vardas, type(vardas))
print('amzius', amzius, type(amzius))
```

Rezultatas:

```
vardas Tomas <class 'str'>
amzius 14 <class 'int'>

vardas 15 <class 'int'>
amzius Petras <class 'str'>
```

### Pavyzdys 11

Kodas:

```python
vardas = 'Giedrius'
amzius = 20
vidurkis = 8.7
mokymu_programa = 'Multimedijos technologijos'
mokumu_istaiga = 'KTU'

print(vardas)
print(amzius)
print(vidurkis)
print(mokymu_programa)
print(mokumu_istaiga)
```

Rezultatas:

```
Giedrius
20
8.7
Multimedijos technologijos
KTU
```

### Pavyzdys 12

Kodas:

```python
tekstas1 = 'Knygos \'Haris Poteris\' buvo 11 vienetu'
tekstas2 = 'Knygos "Haris Poteris" buvo 11 vienetu'
tekstas3 = "Knygos 'Haris Poteris' buvo 11 vienetu"

print(tekstas1)
print(tekstas2)
print(tekstas3)
```

Rezultatas:

```
Knygos 'Haris Poteris' buvo 11 vienetu
Knygos "Haris Poteris" buvo 11 vienetu
Knygos 'Haris Poteris' buvo 11 vienetu
```

### Pavyzdys 13

Kodas:

```python
tekstas = 'Kas nors \n per kelias eilutes'
print(tekstas)
```

Rezultatas:

```
Kas nors
 per kelias eilutes
```

### Pavyzdys 14

Kodas:

```python
a = 5
b = a

print(a)
print(b)

a = 7

print(a)
print(b)
```

Rezultatas:

```
5
5
7
5
```

## Užduotys

### Užduotis 1

Aprašykite ir išveskite (atskirose eilutėse) kintamuosius, saugančius šią informaciją apie studentą:

- Vardas;
- Pavardė;
- Amžius;
- Ūgis;
- Svoris;
- Aukštoji mokykla;
- Akademinės grupės kodas;
- Kursas;
- Studijų programos pavadinimas;
- Atsiskaitytų kreditų skaičius;

### Užduotis 2

Aprašykite ir išveskite (atskirose eilutėse) kintamuosius, saugančius šią informaciją apie miestą:

- Pavadinimas;
- Valstybė;
- Apskritis;
- Įkūrimo data;
- Meras;
- Plotas kv. km.;
- Gyventojų skaičius;

### Užduotis 3

Susikurkite kintamąjį savo vardui saugoti. Išveskite į konsolę tekstą "mano vardas yra " ir turimo kintamojo reikšmę.

### Užduotis 4

Susikurkite kintamuosius studento akademinei grupei ir vidurkiui saugoti. Išveskite į konsolę, atskirose eilutėse pagalbinius tekstus, po kurių sektų dvitaškis ir atitinkamas kintamasis. Pavyzdžiui:

```
akademinė grupė: ifzm-6
vidurkis: 8
```

### Užduotis 5

Susikurkite kintamąjį, kuris saugotų bet kokį žodį. Išveskite šį žodį naudojant vieną `print()`. Žodis turi būti išvestas 5 kartus toje pačioje eilutėje, atskiriant tarpo simboliu.
