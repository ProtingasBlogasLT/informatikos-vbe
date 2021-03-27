# Funkcijos su grąžinimo tipu

## Vaizdo pamoka

Informacija ruošiama.

## Apie funkcijas su grąžinimo tipu

- Po atliktų skaičiavimų funkcijos gali grąžinti kokį nors atsakymą, kuris gali būti bet kokio kintamojo ar objekto tipo.
- Kuriant funkciją, kuri turėtų grąžinti kokį nors atsakymą (skaičių, žodį, sąrašą, objektą ar dar ką), būtina nurodyti grąžinimo tipą prieš pat funkcijos pavadinimą, o gale funkcijos būtina aprašyti `return` su grąžinamu atsakymu. `Return type` prieš funkcijos pavadinimą ir `return` gale funkcijos yra tiesiogiai susiję vienas su kitu - funkcija privalo grąžinti būtent tokio tipo atsakymą koks ir buvo nurodytas funkcijos aprašyme.

## Funkcijų su grąžinimo tipu sintaksė

```cpp
<tipas> <pavadinimas>(<argumentai / parametrai>)
{
    // funkcijos kodas...
    return <reiksme>;
}
```

- **tipas** - kokio tipo (`string`, `int`, ...) funkcija grąžins.
- **reiksme** - grąžinamas atsakymas, kurio tipas sutampa su nurodytu prieš funkcijos pavadinimą.

## Funkcijos iškvietimas ir atsakymų gavimas / panaudojimas

Jeigu tik kviečiam (problema ta, kad nematysim jokio rezultato):

```cpp
// toks iškvietimas:
suma();

// bus tas pats kas:
5; // užrašom reikšmę, bet jos niekaip nepanaudojam
```

Jei išsaugom atsakymą į kintamąjį:

```cpp
int kintamasis = suma();
```

Jeigu iškart išvedam atsakymą:

```cpp
cout << suma();
```

## Pavyzdžiai

Informacija ruošiama.

## Užduotys

Informacija ruošiama.
