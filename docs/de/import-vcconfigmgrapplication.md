# Redistributables in ConfigMgr importieren

Um die Visual C++ Redistributables mit Microsoft Configuration Manager zu installieren, verwenden Sie `Import-VcConfigMgrApplication`. Damit wird jedes Visual C++ Redistributable als separate Anwendung mit einer Anwendung und einem einzelnen Bereitstellungstyp importiert.

Visual C++ Redistributables können vor der Übergabe an `Save-VcRedist` und `Import-VcConfigMgrApplication` mit `Get-VcList` nach Version und Prozessorarchitektur gefiltert werden. Die Ausgabe von `Save-VcRedist` ist erforderlich, da sie die Eigenschaft `Path` enthält, die mit dem Pfad zu jedem Installationsprogramm gefüllt ist.

## Parameter

### Erforderliche Parameter

* `VcList` – Ein Array mit Details der Visual C++ Redistributables aus `Save-VcRedist`
* `CMPath` – Gibt einen UNC-Pfad an, über den die Visual C++ Redistributables verteilt werden
* `SMSSiteCode` – Gibt den Sitecode für die Erstellung der ConfigMgr-Anwendung an

### Optionale Parameter

* `Silent` – Verwendet den stillen Installationsbefehl anstelle des standardmäßigen passiven Befehls
* `AppFolder` – Importiert die Visual C++ Redistributables in einen Unterordner. Standard ist `VcRedists`.
* `NoCopy` – Kopiert heruntergeladene Installationsprogramme nicht in den angegebenen Inhaltspfad.
* `Publisher` – Der Herausgeber der Visual C++ Redistributables-Anwendung. Optional; Standard ist `Microsoft`.
* `Keyword` – Das Schlüsselwort der Visual C++ Redistributables-Anwendung. Optional; Standard ist `Visual C++ Redistributables`.
* `WhatIf` – Zeigt ConfigMgr-Änderungen in der Vorschau an, ohne sie anzuwenden.
* `Language` – Die Sprache der Visual C++ Redistributables-Anwendung. Standard ist `en-US`.

## Beispiele

Importieren Sie die Visual C++ Redistributables als Anwendungen mit einem einzelnen Bereitstellungstyp in ConfigMgr. Dabei werden die heruntergeladenen Installationsprogramme in einen Netzwerkpfad kopiert.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB
```

Standardmäßig werden passive Installationsbefehlszeilenargumente verwendet. Vollständig stille Installationsbefehlszeilenargumente können beim Import der Anwendungen in Configuration Manager mit dem Parameter `-Silent` angegeben werden.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB -Silent
```

![In ConfigMgr importierte Anwendungen der Microsoft Visual C++ Redistributables](/images/vcredistconfigmgr.png)
