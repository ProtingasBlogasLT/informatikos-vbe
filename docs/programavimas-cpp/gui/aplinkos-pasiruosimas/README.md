# Aplinkos pasiruošimas C++ GUI programų kūrimui

## Vaizdo pamoka

<iframe width="560" height="315" src="https://www.youtube.com/embed/oiYD_FdgIII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Kodas

Kodas, kurio prireiks:

```cpp
#include "MyForm.h"

using namespace System;
using namespace System::Windows::Forms;

[STAThread]

void main(array<String^>^ args)
{
	Application::EnableVisualStyles();
	Application::SetCompatibleTextRenderingDefault(false);
	PROJEKTAS::FORMA form;
	Application::Run(% form);
}
```
