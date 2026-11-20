# Einführung

VcRedist ist ein PowerShell-Modul zur Lebenszyklusverwaltung der [Microsoft Visual C++ Redistributables](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

VcRedist lädt unterstützte und nicht unterstützte Redistributables zur lokalen Installation, zur Bereitstellung in Referenzabbildern oder zum Import als Anwendungen in Microsoft Configuration Manager und Microsoft Intune herunter. Passive und stille Installationen sowie Deinstallationen werden unterstützt. Die MDT-Integration bleibt nach bestem Bemühen verfügbar; ihre Befehle sind jedoch veraltet.

![Downloads aus der PowerShell Gallery](https://img.shields.io/powershellgallery/dt/vcredist.svg?style=flat&logo=powershell&logoColor=white&labelColor=7e56c2&color=009485)

## Warum?

Die Microsoft Visual C++ Redistributables sind eine Kernkomponente jeder Windows-Desktopbereitstellung (physische PCs oder virtuelle Desktops). Zur Unterstützung verschiedener Anwendungen werden häufig mehrere Versionen bereitgestellt. Daher müssen sie in Ihre Bereitstellungslösung importiert oder lokal installiert werden. Dieses Modul soll das Abrufen, Bereitstellen und Aktualisieren auf die aktuellen Versionen der Redistributables vereinfachen.

## Unterstützte und nicht unterstützte Redistributables

Das Modul verwendet ein Manifest mit einem `Supported`-Flag für jeden Eintrag. Die Standardabfrage von `Get-VcList` gibt Einträge für Version `14` zurück. Verwenden Sie `-Export Supported`, um nur unterstützte Einträge aller Versionen abzurufen, oder `-Export Unsupported` und `-Export All`, um Einträge einzuschließen, die von Microsoft nicht mehr unterstützt werden. Die direkte Auswahl einer Version kann ebenfalls nicht unterstützte Einträge zurückgeben und gibt dann eine Warnung aus.

Beachten Sie, dass Microsoft bestimmte Redistributables nicht mehr unterstützt und dafür keine Sicherheitsupdates bereitstellt. Die Liste der unterstützten Redistributables wird hier gepflegt: [Microsoft Visual C++ Redistributables](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist). Die Bereitstellung nicht unterstützter Redistributables erfolgt auf eigenes Risiko.

## Manifestquelle

`Get-VcList` verwendet standardmäßig das neueste verfügbare Manifest aus dem VcRedist-Repository und greift auf die mitgelieferte Kopie zurück, wenn das Remotemanifest nicht verwendet werden kann oder älter ist. Verwenden Sie `-Source Remote`, um das Remotemanifest vorauszusetzen, oder `-Source Bundled`, um eine Netzwerkanforderung zu vermeiden. Modulversion 4 erhält keine Manifestaktualisierungen mehr; aktualisieren Sie auf VcRedist 5, um aktuelle Manifestdaten zu erhalten.
