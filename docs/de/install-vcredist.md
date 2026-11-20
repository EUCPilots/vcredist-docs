# Redistributables installieren

Eine [Schnellinstallationsoption](https://vcredist.com/quick/) ist verfügbar. Für eine benutzerdefinierte Installation der Visual C++ Redistributables auf einem lokalen Computer verwenden Sie jedoch `Install-VcRedist`. Diese Funktion akzeptiert das Array der von `Get-VcList` übergebenen Visual C++ Redistributables und installiert die Visual C++ Redistributables, die mit `Save-VcRedist` in einen lokalen Pfad heruntergeladen wurden. Die Ausgabe von `Save-VcRedist` ist erforderlich, da sie die Eigenschaft `Path` enthält, die mit dem Pfad zu jedem Installationsprogramm gefüllt ist.

`Install-VcRedist` erfordert eine erhöhte PowerShell-Sitzung unter Windows. Die Funktion validiert die Microsoft-Authenticode-Signatur jedes Installationsprogramms, installiert Versionen in der im Manifest angegebenen Reihenfolge und prüft die Exitcodes der Installationsprogramme. Standardmäßig erfolgt die Installation passiv. Verwenden Sie `-Silent` für eine stille Installation.

Nach der Installation der Visual C++ Redistributables wird die Liste der installierten Visual C++ Redistributables von `Get-InstalledVcRedist` an die Pipeline zurückgegeben.

## Parameter

### Erforderliche Parameter

* `VcList` – Ein Array mit Details der Visual C++ Redistributables aus `Save-VcRedist`

### Optionale Parameter

* `Silent` – Verwendet die stillen Installationsargumente des Manifests anstelle der passiven Argumente
* `Force` – Installiert bereits installierte Einträge erneut und ermöglicht die Installation, wenn die Paketarchitektur für das aktuelle Betriebssystem nicht empfohlen wird. Auf ARM64 kann dies verwendet werden, um x64-Installationsprogramme zu erzwingen.

## Beispiele

Die folgenden Befehle installieren die standardmäßig unterstützten Visual C++ Redistributables, die mit `Save-VcRedist` lokal nach `C:\Temp\VcRedist` heruntergeladen wurden.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Install-VcRedist -VcList $VcList
```

Diese Befehle lassen sich vereinfachen, indem die Ausgabe über die Pipeline an den nachfolgenden Befehl übergeben wird:

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist | Install-VcRedist
```

Mit dem Parameter `-Silent` können beim Installieren der Redistributables vollständig stille Installationsbefehlszeilenargumente angegeben werden.

```powershell
Install-VcRedist -VcList (Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist) -Silent
```

![Auf dem lokalen PC installierte Microsoft Visual C++ Redistributables](/images/visualcprograms.png)
