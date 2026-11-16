# Redistributables in MDT importieren

::: info
Microsoft unterstützt das Microsoft Deployment Toolkit nicht mehr. Die Unterstützung von MDT durch VcRedist erfolgt nach bestem Bemühen.
:::

::: warning
Die MDT-Befehle in VcRedist 5 sind veraltet und können in einer künftigen Hauptversion entfernt werden.
:::

Um die Visual C++ Redistributables als Teil eines Referenzabbilds zu installieren oder mit einer Bereitstellungslösung auf Basis des Microsoft Deployment Toolkit (MDT) zu verwenden, importiert `Import-VcMdtApplication` jedes Visual C++ Redistributable als separate Anwendung. Diese umfasst passive oder stille Befehlszeilen, Plattformunterstützung und den `UninstallKey`, mit dem erkannt wird, ob das Visual C++ Redistributable bereits installiert ist.

Visual C++ Redistributables können vor der Übergabe an `Save-VcRedist` und `Import-VcMdtApplication` mit `Get-VcList` nach Version und Prozessorarchitektur gefiltert werden. Die Ausgabe von `Save-VcRedist` ist erforderlich, da sie die Eigenschaft `Path` enthält, die mit dem Pfad zu jedem Installationsprogramm gefüllt ist.

## Parameter

### Erforderliche Parameter

* `VcList` – Ein Array mit Details der Visual C++ Redistributables aus `Save-VcRedist`
* `MdtPath` – Der lokale oder Netzwerkpfad zur MDT-Bereitstellungsfreigabe

### Optionale Parameter

* `Silent` – Legt den Installationsbefehl der MDT-Anwendung so fest, dass er vollständig still ausgeführt wird, anstelle der standardmäßigen passiven Installationsbefehlszeile
* `Force` – Erzwingt das Überschreiben einer vorhandenen Visual C++ Redistributable-Anwendung
* `AppFolder` – Importiert die Visual C++ Redistributables in einen Unterordner. Standard ist `VcRedists`.
* `MdtDrive` – Der Laufwerksbuchstabe, der der MDT-Bereitstellungsfreigabe zugeordnet wird. Optional; Standard ist `DS001`.
* `Publisher` – Der Herausgeber des Visual C++ Redistributables-Bundles. Optional; Standard ist „Microsoft“.
* `Language` – Die Sprache des Visual C++ Redistributables-Bundles. Standard ist `en-US`.

## Beispiele

Importieren Sie die unterstützten Redistributables der Versionen `2012`, `2013` und `14` in eine MDT-Bereitstellungsfreigabe:

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment
```

Jedes Redistributable wird mit den für eine erfolgreiche Bereitstellung erforderlichen Anwendungseigenschaften in die Bereitstellungsfreigabe importiert.

![In eine MDT-Freigabe importierte Anwendungen der Microsoft Visual C++ Redistributables](/images/mdtvisualcapplications.png)

Die Ordnerstruktur der Bereitstellungsfreigabe sieht folgendermaßen aus:

![Visual C++ Redistributables im Anwendungsordner der Bereitstellungsfreigabe](/images/mdtvisualcapplicationsfolder.png)

Standardmäßig werden passive Installationsbefehlszeilenargumente verwendet. Vollständig stille Installationsbefehlszeilenargumente können beim Import der Anwendungen in eine MDT-Bereitstellungsfreigabe mit dem Parameter `-Silent` angegeben werden.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
