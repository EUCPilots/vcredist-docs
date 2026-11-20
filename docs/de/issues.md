# Bekannte Probleme

::: info
**English - United States** ist die einzige unterstützte Sprache. Das Modul lädt nur die `en-US`-Versionen der Visual C++ Redistributables herunter.
:::

::: info
`Get-VcList` versucht, die VcRedist-Version im Manifest mit der Eigenschaft `ProductVersion` der heruntergeladenen Datei abzugleichen. Da die Product Version der VcRedist-Installationsprogramme für `2005` und `2008` nicht mit der installierten VcRedist-Version übereinstimmt, wird die Datei erneut heruntergeladen, obwohl es sich um die richtige Version des Installationsprogramms handelt.
:::

::: info
Visual C++ Redistributable 2012 Update 5 ist verfügbar. Dieses Update steht auf der Visual Studio-Downloadseite zur Verfügung, erfordert jedoch eine Anmeldung für den Download. Die [öffentliche Visual Studio-Downloadseite](https://visualstudio.microsoft.com/vs/older-downloads/) bietet weiterhin Update 4 an; daher ist dies die von VcRedist bereitgestellte Version.
:::

::: info
Visual C++ Redistributable 2008 `9.0.30729.7523` ist verfügbar, allerdings nur als [privater Hotfix](https://support.microsoft.com/en-us/help/2834565/fix-visual-c-2008-mfc-application-that-was-created-by-using-visual-stu) und nicht öffentlich von Microsoft herunterladbar.
:::

::: info
Die folgenden Visual C++ Redistributables sind nicht mehr zum Download verfügbar, aber weiterhin im VcRedist-Manifest enthalten:

* Visual C++ 2005 Redistributable Package, Version `8.0.50727.42`
* Visual C++ 2005 SP1 Redistributable Package, Version `8.0.56336`
* Visual C++ 2008 SP1 Redistributable Package, Version `9.0.30729`
:::
