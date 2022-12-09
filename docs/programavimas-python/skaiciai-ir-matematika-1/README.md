# Skaičiai ir matematika (1)

## Pagrindiniai skaičių duomenų tipai

| int (integer) | float (floating point) |
|-|-|
| 10 | 8.5 |
| 8 | -9.1 |
| -7 | 5.3 |

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

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
print(12)
print(5)
print(8.2)
```

Rezultatas:

```
12
5
8.2
```

### Pavyzdys 2

Kodas:

```python
print(8 * 2)
print(75 + 23)
```

Rezultatas:

```
16
98
```

### Pavyzdys 3

Kodas:

```python
print(7 + 8)
print(2 * 4)
print(5 - 1)
print(7 / 3)
```

Rezultatas:

```
15
8
4
2.3333333333333335      
```

### Pavyzdys 4

Kodas:

```python
print(5.2 + 1.4)
print(8 - 1.5)
print(1 / 2)
print(1 / 3)
```

Rezultatas:

```
6.6
6.5
0.5
0.3333333333333333
```

### Pavyzdys 5

Kodas:

```python
print(1 + 2 * 5 / 3)
```

Rezultatas:

```
4.333333333333334
```

### Pavyzdys 6

Kodas:

```python
print( (1 + 2) * 5 / 3 )
```

Rezultatas:

```
5.0
```

### Pavyzdys 7

Kodas:

```python
print(2 ** 3)
print(4 ** 8)
print(49 ** 0.5)
```

Rezultatas:

```
8
65536
7.0
```

### Pavyzdys 8

Kodas:

```python
print(10 % 3)
print(25 % 4)
print(13 % 2)
print(16 % 2)
print(8 % 2)
```

Rezultatas:

```
1
1
1
0
0
```

### Pavyzdys 9

Kodas:

```python
print(10 / 3)
print(10 // 3)
```

Rezultatas:

```
3.3333333333333335
3
```

### Pavyzdys 10

Kodas:

```python
print(6 / 7)
print(6 // 7)
```

Rezultatas:

```
0.8571428571428571
0
```

### Pavyzdys 11

Kodas:

```python
print( type(7) )
print( type(5) )
```

Rezultatas:

```
<class 'int'>
<class 'int'>
```

### Pavyzdys 12

Kodas:

```python
print( type(8.2) )
print( type(6.8) )
```

Rezultatas:

```
<class 'float'>
<class 'float'>
```

### Pavyzdys 13

Kodas:

```python
print( type( 3 + 2 ) )
print( type( 1 / 2 ) )
```

Rezultatas:

```
<class 'int'>
<class 'float'>
```

### Pavyzdys 14

Kodas:

```python
print( type( 8 * 2.5 ) )
print( type( 8 - 4 ) )
```

Rezultatas:

```
<class 'float'>
<class 'int'>
```

## Užduotys

### Užduotis 1

Atskirose eilutėse išveskite skaičius 15, 12, 89 ir 5.8.

### Užduotis 2

Išveskite šių matematinių veiksmų atsakymus:

- 78 * 2
- 5 + 3
- 7 / 2
- 85 - 32

### Užduotis 3

Išveskite šių matematinių veiksmų atsakymus:

- 5.2 * 3
- 9.4 * 0.5
- 4.2 / 2

### Užduotis 4

Išveskite šių matematinių veiksmų atsakymus:

- 7 + 2 * 3
- (7 + 2) * 3
- 52 + 74 + 32
- 87 - 65 + 14
- 79 / (5 - 2)

### Užduotis 5

Apskaičiuokite išveskite šiuos atsakymus (naudojant `**` operatorių):

- skaičių 2 pakeltą 4-u laipsniu
- skaičių 8 pakeltą 3-u laipsniu
- skaičių 14 pakeltą 0.5-io laipsnio

### Užduotis 6

Raskite šių dalybų liekanas (naudojant `%` operatorių):

- 2 iš 2
- 3 iš 2
- 11 iš 2
- 13 iš 2
- 10 iš 2

### Užduotis 7

Raskite šių dalybų liekanas (naudojant `%` operatorių):

- 15 iš kiekvieno skaičiaus nuo 2 iki 9 (15 iš 2, 15 iš 3 ir pan.)

### Užduotis 8

Atlikite tokias integer dalybas (naudojant `//` operatorių):

- 5 iš 2
- 6 iš 3
- 6 iš 4
- 80 iš 3
- 45 iš 4
- 45 iš 3

### Užduotis 9

Išsiaiškinkite duomenų tipus (panaudokite `type`) šiems atvejams:

- jeigu yra skaičius 6
- jeigu yra skaičius 2.5
- jeigu yra skaičius 157
- jeigu yra skaičius -8.2
- jeigu yra dalyba 2 iš 5
- jeigu yra sudėtis 8 su 9
- jeigu yra sudėtis 8.5 su 3
