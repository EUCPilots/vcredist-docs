# Manifest exportieren

`Export-VcManifest` schreibt das ausgewählte VcRedist-Manifest als `VisualCRedistributables.json` in einen Ordner. Das Manifest von v5 hat ein flaches Schema mit `SchemaVersion`, `Updated`, `InstallOrder` und `Entries`; jeder Eintrag verfügt über ein `Supported`-Flag. Die Manifestquelle kann nicht durch eine lokale Datei überschrieben werden.

## Parameter

### Erforderliche Parameter

* `Path` – Ein vorhandenes Verzeichnis, in das das Manifest geschrieben wird

### Optionale Parameter

* `Source` – Wählt `Auto` (Standard), `Remote` oder `Bundled`. `Auto` verwendet das Remotemanifest, sofern es verfügbar und nicht älter als die mitgelieferte Kopie ist.
* `Proxy`, `ProxyCredential` – Konfigurieren einen Proxy für den Abruf des Remotemanifests.
* `WhatIf` – Allgemeiner PowerShell-Parameter, um den Export in der Vorschau anzuzeigen, ohne die Datei zu schreiben.

## Beispiele

Exportieren Sie das VcRedist-Manifest nach `C:\Temp`. Das Manifest wird nach `C:\Temp\VisualCRedistributables.json` exportiert:

```powershell
Export-VcManifest -Path C:\Temp
```

Exportieren Sie das Manifest und überprüfen Sie unterstützte Einträge:

```powershell
Export-VcManifest -Path C:\Temp
$Manifest = Get-Content -Path C:\Temp\VisualCRedistributables.json | ConvertFrom-Json
$Manifest.Entries | Where-Object Supported
```

Exportieren Sie das mitgelieferte Manifest ohne Netzwerkanforderung:

```powershell
Export-VcManifest -Path C:\Temp -Source Bundled
```
