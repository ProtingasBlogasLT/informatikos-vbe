---
sidebar: auto
prev: ../../
---

# Vienmačio masyvo informacijos įvedimo ir išvedimo užduotis nr. 3

## Užduoties sąlyga

- Susikurkite simbolių (`char`) masyvą, kuris jau būtų užpildytas su jūsų pasirinktais simboliais.
- Išveskite visus simbolius toje pačioje eilutėje, neatskiriant jokiu tarpu ar kitu simboliu. Pavyzdžiui:

```
*d&s^%d$dj#*
```

- Su šio masyvo simboliais nupieškite kvadratą. Pavyzdžiui:

```
*#%*
(  $
^52&
```

- Su šio masyvo simboliais nupieškite laiptus. Pavyzdžiui:

```
$
#*
Y(*
&@@)
```

## Sprendimas

Kodas:

```cpp
#include <iostream>
using namespace std;

int main()
{
    char simboliai[] = { '%', '$', '#', '*', '&', '^', '&',
                        '*', '#', '@', '#', '!' };
    int kiek = 12;

    for (int i = 0; i < kiek; i++)
    {
        cout << simboliai[i];
    }

    cout << "\n\n";

    cout << simboliai[0] << simboliai[1] << simboliai[2] << simboliai[3] << endl;
    cout << simboliai[4] << "  " << simboliai[5] << endl;
    cout << simboliai[6] << "  " << simboliai[7] << endl;
    cout << simboliai[8] << simboliai[9] << simboliai[10] << simboliai[11] << "\n\n";

    cout << simboliai[0] << endl;
    cout << simboliai[1] << simboliai[2] << endl;
    cout << simboliai[3] << simboliai[4] << simboliai[5] << endl;
    cout << simboliai[6] << simboliai[7] << simboliai[8] << simboliai[9] << endl;
    
    return 0;
}
```

Rezultatai:

```
%$#*&^&*#@#!

%$#*
&  ^
&  *
#@#!

%
$#
*&^
&*#@
```
