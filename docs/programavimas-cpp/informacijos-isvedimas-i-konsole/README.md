# Informacijos išvedimas į konsolę

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/Pg4cI3nXs-Q?start=5640&end=5842" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Aprašymas

Šiuo metu dirbame su konsolės langu, todėl jeigu norime matyti kokius nors programos eigos aprašymus, ar pačius rezultatus, reikės į konsolę sugebėti išvesti tekstą ir kintamuosius.

## Galimos komandos (sintaksė)

Bus naudojamos `cout` ir `endl` komandos.

`cout` rodo išvedimo į ekraną komandą, o `endl` rodo naujos eilutės įterpimo veiksmą.

Į `cout` galima įdėti daugiau nei vieną išvedimo elementą, kiekvienas šis dalykas yra atskiriamas su `<<`.

Tarkim:

```cpp
cout << "tekstas";
```

Išves tik žodį `tekstas` į konsolę, be naujų eilučių ar dar ko.

Arba:

```cpp
cout << "tekstas" << endl;
```

Išves žodį `tekstas` į konsolę ir padės naują eilutę.

Na, arba:

```cpp
cout << "tekstas" << endl << "kitas" << endl;
```

Išves:

```
tekstas
kitas

```

Ant galo reikia pastebėti, kad yra įterpta dar viena papildoma eilutė, nes gale `cout` yra naudojamas `endl`.

