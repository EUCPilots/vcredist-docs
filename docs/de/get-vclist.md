# VcRedist-Liste abrufen

`Get-VcList` gibt Einträge aus dem VcRedist-Manifest zurück. Standardmäßig werden Einträge für Version `14` und die Architekturen x86, x64 und ARM64 zurückgegeben. Verwenden Sie `-Release` und `-Architecture`, um andere Versionen und Architekturen auszuwählen. Eine Auswahl mit `-Release` und `-Architecture` kann nicht unterstützte Einträge enthalten; in diesem Fall gibt der Befehl eine Warnung aus. Sofern keine besonderen Anforderungen bestehen, installieren Sie nur [von Microsoft unterstützte Redistributables](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

Das Manifest wird standardmäßig aus dem VcRedist-Repository aufgelöst. Wenn das Remotemanifest nicht verfügbar oder älter als das mitgelieferte Manifest ist, wird die mitgelieferte Kopie verwendet.

## Parameter

* `Release` – Wählt Versionen wie `14`, `2015`, `2017` oder `2019` aus. Standard ist `14`; ausgewählte Einträge können nicht unterstützt sein.
* `Architecture` – Wählt `x86`, `x64` oder `arm64` aus. Standardmäßig werden alle drei ausgewählt.
* `Export` – Gibt Einträge vom Typ `Supported` (Standard), `Unsupported` oder `All` zurück.
* `Source` – Wählt die Auflösung des Manifests aus: `Auto` (Standard), `Remote` oder `Bundled`.
* `Proxy`, `ProxyCredential` – Konfigurieren einen Proxy für den Abruf des Remotemanifests.

Ohne `-Export` werden die Einträge anhand von `-Release` und `-Architecture` gefiltert, jedoch nicht nach Unterstützungsstatus. Verwenden Sie `-Export Supported`, um nur unterstützte Einträge aller Versionen abzurufen.

Verwenden Sie `-Export Unsupported` oder `-Export All`, um nicht unterstützte Einträge oder alle Einträge abzurufen. Diese Parametersätze können nicht mit `-Release` oder `-Architecture` kombiniert werden. Filtern Sie die Ausgabe bei Bedarf mit `Where-Object`. Der Befehl gibt eine Warnung aus, wenn nicht unterstützte Einträge zurückgegeben werden.

## Beispiele

Die standardmäßige Liste unterstützter Einträge zurückgeben:

```powershell
Get-VcList
```

x64-Einträge für die Versionen 2017 und 2019 zurückgeben:

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
```

Den nicht unterstützten x64-Eintrag für 2015 zurückgeben. Der Befehl gibt eine Warnung aus, da das Ergebnis nicht unterstützt wird:

```powershell
Get-VcList -Release 2015 -Architecture x64
```

Nur unterstützte Einträge aller Versionen zurückgeben:

```powershell
Get-VcList -Export Supported
```

Alle Manifesteinträge zurückgeben und nach x64 filtern:

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

Nicht unterstützte x64-Einträge für die Versionen 2008 und 2010 zurückgeben:

```powershell
Get-VcList -Export Unsupported | Where-Object { $_.Release -in "2008", "2010" -and $_.Architecture -eq "x64" }
```

Das mitgelieferte Manifest ohne Netzwerkanforderung verwenden:

```powershell
Get-VcList -Source Bundled
```

Um Einträge an `Install-VcRedist` oder eine Importfunktion für die Bereitstellung zu übergeben, leiten Sie sie zunächst über `Save-VcRedist` weiter. Der Befehl lädt die Installationsprogramme herunter, validiert sie und fügt jedem Eintrag die Eigenschaft `Path` hinzu.
