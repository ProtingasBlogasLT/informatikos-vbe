# Informacijos išvedimas į failą

## Vaizdo pamoka

Informacija ruošiama.

## Apie informacijos išvedimą į failą

- Norint išvesti informaciją į failą, reikės susikurti išvedimo srauto operatorių, atsidaryti failą, atlikti išvedimo veiksmus ir uždaryti failą.
- Išvedimui naudosite susikurtą srauto operatorių ir jį galėsite naudoti taip pat kaip naudojot `cout`.

## Sintaksė

Išvedimo į failą operatoriaus pasiruošimas:

```cpp
ofstream operatorius;
```

- **ofstream** - komanda, parodanti, kad kuriate išvedimo į failą operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint išvesti duomenis į failą.

Failo atsidarymas:

```cpp
operatorius.open("failo_pavadinimas.txt");
```

Taip pat, galima susikurti norimą išvedimo operatorių ir atsidaryti failą išvedimui vienoje eilutėje:

```cpp
ofstream operatorius("failo_pavadinimas.txt");
```

- **ofstream** - komanda, parodanti, kad kuriate išvedimo į failą operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint išvesti duomenis į failą.
- `failo_pavadinimas.txt` - failas, kurį atidarote išvedimui.

Duomenų išvedimas į failą, analogiškas `cout` išvedimui į konsolę:

```cpp
operatorius << "tekstas";
```

Failo uždarymas:

```cpp
operatorius.close();
```
