# Informacijos nuskaitymas iš failo

## Vaizdo pamoka

Informacija ruošiama.

## Apie informacijos nuskaitymą iš failo

- Norint nuskaityti informaciją iš failo, reikės susikurti nuskaitymo srauto operatorių, atsidaryti failą, atlikti nuskaitymo veiksmus ir uždaryti failą.
- Nuskaitymui naudosite susikurtą srauto operatorių ir jį galėsite naudoti taip pat kaip naudojot `cin`. Taip pat, nuskaitymui bus galima naudoti `getline()` bei `.get()` komandas.

## Nuskaitymo būdai

Nuskaitymas iš failo yra labai panašus nuskaitymo iš konsolės atveju. Todėl siūlome platesnės informacijos apie nuskaitymo būdus ir kitus niuansus paieškoti skyriuje [Informacijos nuskaitymas iš konsolės](https://informatikosvbe.lt/programavimas-cpp/informacijos-nuskaitymas-is-konsoles/).

## Sintaksė

Nuskaitymo iš failo srauto operatoriaus kūrimas:

```cpp
ifstream operatorius;
```

- **ifstream** - komanda, parodanti, kad kuriate nuskaitymo iš failo operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint nuskaityti duomenis iš failo.

Failo atsidarymas:

```cpp
operatorius.open("failo_pavadinimas.txt");
```

Taip pat, galima susikurti norimą nuskaitymo operatorių ir atsidaryti failą nuskaitymui vienoje eilutėje:

```cpp
ifstream operatorius("failo_pavadinimas.txt");
```

- **ifstream** - komanda, parodanti, kad kuriate nuskaitymo iš failo operatorių.
- **operatorius** - jūsų sugalvotas operatoriaus pavadinimas, kurį naudosite norint nuskaityti duomenis iš failo.
- `failo_pavadinimas.txt` - failas, kurį atidarote nuskaitymui.

Duomenų nuskaitymas iš failo, analogiškas `cin` nuskaitymui iš konsolės:

```cpp
int kintamasis;
operatorius >> kintamasis;
```

Duomenų nuskaitymas iš failo, pasinaudojant `getline()`:

```cpp
string tekstas;

// eilutės nuskaitymas
getline(operatorius, kintamasis);

// eilutės nuskaitymas iki simbolio (šiuo atveju - kablelio)
getline(operatorius, kintamasis, ',');
```

Duomenų nuskaitymas iš failo, pasinaudojant `cin.get()`:

```cpp
char simboliai[20];

// Nuskaitoma 20 simbolių į char masyvą
operatorius.get(simboliai, 20);
```

Failo uždarymas:

```cpp
operatorius.close();
```
