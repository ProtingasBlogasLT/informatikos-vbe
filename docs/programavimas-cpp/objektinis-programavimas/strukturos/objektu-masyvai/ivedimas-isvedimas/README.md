# Struktūros: objektų masyvai (informacijas įvedimas ir gavimas / išvedimas)

Informacija ruošiama.

<!-- 

#include <iostream>
#include <iomanip>
using namespace std;

struct preke
{
    string pavadinimas;
    double kaina;
    int kiekis;

    void sudeti_duomenis(string pavad, double kaina, int kiekis)
    {
        pavadinimas = pavad;
        this->kaina = kaina;
        this->kiekis = kiekis;
    }

    void isvesti()
    {
        cout << setw(20) << left << pavadinimas << " "
            << kaina << " eur.    "
            << kiekis << " vnt." << endl;
    }
};

struct parduotuve
{
    string pavadinimas;
    preke prekes[100];
    int prekiu_kiekis;

    void isvedimas()
    {
        cout << "Parduotuves " << pavadinimas << " prekes:" << endl;
        for (int i = 0; i < prekiu_kiekis; i++)
        {
            prekes[i].isvesti();
        }
    }
};

int main()
{
    parduotuve maxima;
    preke p1, p2;

    p1.sudeti_duomenis("Piestukas", 0.89, 87);
    p2.sudeti_duomenis("Sasiuvinys", 1.78, 548);

    maxima.pavadinimas = "Maxima";
    maxima.prekes[0] = p1;
    maxima.prekes[1] = p2;
    maxima.prekiu_kiekis = 2;

    maxima.isvedimas();

    return 0;
}

 -->
