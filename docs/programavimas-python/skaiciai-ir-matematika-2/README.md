# Skaičiai ir matematika (2) / Aritmetiniai veiksmai

## Apie aritmetinius veiksmus

- Skaičiavimuose gali prireikti ką nors sudauginti, padalinti, sudėti ar atimti, todėl tokius veiksmus galite atlikti ir su Python pagalba.
- Aritmetinius veiksmus galima naudoti bet kur, kur prireikia: kuriant kintamuosius ir iškart pasiskaičiuojant jo reikšmę, išvedant ką nors, patikrinimo sąlygose ir pan.
- Skaičiavimai atliekami tokia tvarka kaip nusako matematika: daugyba ir dalyba, tuomet sudėtis ir atimtis.
- Jeigu reikia, eiliškumą galima pakeisti naudojant skliaustus.

## Matematiniai operatoriai

| Operatorius | Pavadinimas | Pavyzdys | Paaiškinimas |
|-|-|-|-|
| `+` | Sudėtis | `5 + 3` | Sudeda 5 ir 3 |
| `-` | Atimtis | `8 - 2` | Iš 8 atima 2 |
| `*` | Daugyba | `5 * 2` | 5 padaugina iš 2 |
| `/` | Dalyba | `4 / 2` | 4 padalina iš 2 |
| `**` | Laipsnis (exponentiation) | `2 ** 3` | 2 pakelia 3-iu laipsniu |
| `%` | Liekana (modulo) | `7 % 3` | 7 dalina iš 3 ir ima liekaną (ats: 1) |
| `//` | Sveikojo skaičiaus (integer) dalyba | `7 // 3` | 7 dalina iš 3, bet numeta liekaną (ats: 2) |

## Priskyrimo operatoriai

| Priskyrimas | Toks pats kaip... | Apibūdinimas |
|-|-|-|
| `x = y` | `x = y` | Kairys operandas įgaus reikšmę, kuri yra dešinėje pusėje |
| `x += y` | `x = x + y` | Sudėtis (prie x, pridės y) |
| `x -= y` | `x = x - y` | Atimtis |
| `x *= y` | `x = x * y` | Daugyba |
| `x /= y` | `x = x / y` | Dalyba |

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
print(5 + 2)
print(7+3)
print(9 - 1)
print(8 * 4)
print(10 / 3)
```

Rezultatas:

```
7
10
8
32
3.3333333333333335
```

### Pavyzdys 2

Kodas:

```python
print(5 + 3 * 2)
print(10 - 5 * (7 + 2))
```

Rezultatas:

```
11
-35
```

### Pavyzdys 3

Kodas:

```python
atsakymas = 8 * 2 + 4
print(atsakymas)
```

Rezultatas:

```
20
```

### Pavyzdys 4

Kodas:

```python
x = 10
y = 3

print(x + y)
print(x - y)
print(x * y)
print(x / y)
print()

print(x % y)
print(x ** y)
print(x // y)
```

Rezultatas:

```
13
7
30
3.3333333333333335

1
1000
3
```

### Pavyzdys 5

Kodas:

```python
a = 5
b = 4

suma = a + b
skirtumas = a - b
sandauga = a * b
dalmuo = a / b

print('a:', a)
print('b:', b)

print('suma:', suma)
print('skirtumas:', skirtumas)
print('sandauga:', sandauga)
print('dalmuo:', dalmuo)
```

Rezultatas:

```
a: 5
b: 4
suma: 9
skirtumas: 1
sandauga: 20
dalmuo: 1.25
```

### Pavyzdys 6

Kodas:

```python
a = 5
b = 4

suma = a + b
skirtumas = a - b
sandauga = a * b
dalmuo = a / b

print(f'{a} + {b} = {suma}')
print(f'{a} - {b} = {skirtumas}')
print(f'{a} * {b} = {sandauga}')
print(f'{a} / {b} = {dalmuo}')
```

Rezultatas:

```
5 + 4 = 9
5 - 4 = 1
5 * 4 = 20
5 / 4 = 1.25
```

### Pavyzdys 7

Kodas:

```python
a = 5
b = 4

print(f'{a} + {b} = {a + b}')
print(f'{a} - {b} = {a - b}')
print(f'{a} * {b} = {a * b}')
print(f'{a} / {b} = {a / b}')
```

Rezultatas:

```
5 + 4 = 9
5 - 4 = 1
5 * 4 = 20
5 / 4 = 1.25
```

### Pavyzdys 8

Kodas:

```python
sk1 = 11
sk2 = 7

print(sk1 / sk2)
print(sk1 % sk2)
```

Rezultatas:

```
1.5714285714285714
4
```

### Pavyzdys 9

Kodas:

```python
a = 5
b = 7

c = a + b * 2
d = a + c

print(a)
print(b)
print(c)
print(d)
```

Rezultatas:

```
5
7
19
24
```

### Pavyzdys 10

Kodas:

```python
skaicius = 15
print(skaicius)

skaicius = 1
print(skaicius)

skaicius = skaicius + 2
print(skaicius)

skaicius = 0
print(skaicius)

skaicius += 5
print(skaicius)
```

Rezultatas:

```
15
1
3
0
5
```

### Pavyzdys 11

Kodas:

```python
skaicius = 0
print('= 0:', skaicius)

skaicius += 10
print('+= 10:', skaicius)

skaicius -= 5
print('-= 5:', skaicius)

skaicius *= 2
print('*= 2:', skaicius)

skaicius /= 4
print('/= 4:', skaicius)
```

Rezultatas:

```
= 0: 0
+= 10: 10
-= 5: 5
*= 2: 10
/= 4: 2.5
```

### Pavyzdys 12

Kodas:

```python
pirmas = 5
antras = 2

print(pirmas)
print(antras)

pirmas += 5 * antras

print(pirmas)
```

Rezultatas:

```
5
2
15
```

## Užduotys

### Užduotis 1

Išveskite atsakymus šių veiksmų:

- 8 * 4 + 2
- 8 * (4 + 2)
- 48 / 4
- 3 + 6 * 2

### Užduotis 2

Susikurkite du kintamuosius skaičiams saugoti. Į juos įrašykite norimus skaičius. Susikurkite trečiąjį kintamąjį, kurio reikšmė būtų pirmų dviejų kintamųjų suma. Visus kintamuosius išveskite.

### Užduotis 3

Susikurkite tris kintamuosius skaičiams saugoti. Į juos įrašykite norimus skaičius. Raskite šių skaičių suma, skirtumą, sandaugą ir dalmenį. Atsakymus išveskite kartu su atliekamu veiksmu (pvz 8 + 2 + 4 = 14).

### Užduotis 4

Susikurkite du kintamuosius skaičiams saugoti. Į juos įrašykite norimus skaičius. Pirmąjį kintamąjį padidinkite 5-iais. Antrajį padidinkite 2 kartus. Išveskite visus atsakymus (pradines reikšmes ir pakeistas reikšmes).
