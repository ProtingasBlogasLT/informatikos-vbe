# range() arba ranges

## Apie range()

- Naudojamas tuomet, kai reikalinga sugeneruota skaičių seka.
- Ši skaičiu seka gali būti naudinga cikluose, duomenyse ir pan.

## Sintaksė

### 1-as variantas

```
range(pabaiga)
```

- nuo 0 (patenka)
- iki "pabaiga" (nepatenka)

### 2-as variantas

```
range(pradžia, pabaiga)
```

- nuo "pradžia" (patenka)
- iki "pabaiga" (nepatenka)

### 3-as variantas

```
range(pradžia, pabaiga, žingsnis)
```

- nuo "pradžia" (patenka)
- iki "pabaiga" (nepatenka)
- darant nurodytą žingsnį "žingsnis" (naudojant teigiamą reikšmę eis didėjimo tvarka, naudojant neigiamą reikšmę eis mažėjimo tvarka)

### Sintaksės pavyzdžiai

```python
range(7) # nuo 0 iki 7 (skaičiai 0, 1, 2, 3, 4, 5, 6)
range(2, 8) # nuo 2 iki 8 (skaičiai 2, 3, 4, 5, 6, 7)
range(1, 6, 2) # nelyginiai skaičiai nuo 1 iki 6 (1, 3, 5)
range(7, 0, -1) # nuo 7 iki 1 (skaičiai 7, 6, 5, 4, 3, 2, 1)
```

## Pavyzdžiai

### Pavyzdys 1

Kodas:

```python
print( range(7) )
```

Rezultatas:

```
range(0, 7)
```

### Pavyzdys 2

Kodas:

```python
skaiciai = list( range(6) )
print(skaiciai)
```

Rezultatas:

```
[0, 1, 2, 3, 4, 5]
```

### Pavyzdys 3

Kodas:

```python
print( list( range(10) ) )
```

Rezultatas:

```
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Pavyzdys 4

Kodas:

```python
skaiciai = list( range(2, 7) )
print(skaiciai)
```

Rezultatas:

```
[2, 3, 4, 5, 6]
```

### Pavyzdys 5

Kodas:

```python
skaiciukai = list( range(10, 15) )
print(skaiciukai)
```

Rezultatas:

```
[10, 11, 12, 13, 14]
```

### Pavyzdys 6

Kodas:

```python
kas_antra = list( range(5, 15, 2) )
print(kas_antra)
```

Rezultatas:

```
[5, 7, 9, 11, 13]
```

### Pavyzdys 7

Kodas:

```python
skaiciai = list( range(5, 50, 5) )
print(skaiciai)
```

Rezultatas:

```
[5, 10, 15, 20, 25, 30, 35, 40, 45]
```

### Pavyzdys 8

Kodas:

```python
skaiciai = list( range(1, 51) )
print(skaiciai)
```

Rezultatas:

```
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
```

### Pavyzdys 9

Kodas:

```python
nelyginiai = list( range(1, 30, 2) )
print(nelyginiai)
```

Rezultatas:

```
[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29]
```

### Pavyzdys 10

Kodas:

```python
skaiciai = list( range(5, 87, 6) )
print(skaiciai)
```

Rezultatas:

```
[5, 11, 17, 23, 29, 35, 41, 47, 53, 59, 65, 71, 77, 83]
```

### Pavyzdys 11

Kodas:

```python
skaiciai = list( range(10, 0, -1) )
print(skaiciai)
```

Rezultatas:

```
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

### Pavyzdys 12

Kodas:

```python
skaiciai = list( range(50, 0, -5) )
print(skaiciai)
```

Rezultatas:

```
[50, 45, 40, 35, 30, 25, 20, 15, 10, 5]
```

## Užduotys

### Užduotis 1

Sukurkite ir išveskite tokius nurodytus `ranges`:

- `[0, 1, 2, 3, 4, 5, 6]`
- `[1, 2, 3, 4, 5, 6, 7, 8, 9]`
- `[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]`
- `[20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]`
- `[20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]`
- `[1, 3, 5, 7, 9]`
- `[30, 33, 36, 39, 42, 45, 48]`
- `[50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]`

### Užduotis 2

Sukurkite ir išveskite tokius nurodytus `ranges`:

- `[1, 8, 15, 22, 29, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99]`
- `[3, 12, 21, 30, 39, 48, 57, 66, 75, 84, 93]`
- `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`
- `[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]`
- `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]`
- `[50, 45, 40, 35, 30, 25, 20, 15, 10, 5]`
