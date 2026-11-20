# VcRedist installieren

## Installation aus der PowerShell Gallery

Das VcRedist-Modul wird in der PowerShell Gallery veröffentlicht und ist hier verfügbar: [VcRedist](https://www.powershellgallery.com/packages/VcRedist/). Sie können das Modul aus der Gallery wie folgt installieren:

VcRedist 5 erfordert PowerShell 5.1 oder höher.

```powershell
Install-Module -Name VcRedist
Import-Module -Name VcRedist
```

### Modul aktualisieren

Wenn Sie eine frühere Version des Moduls aus der Gallery installiert haben, können Sie das neueste Update mit dem Parameter `-Force` installieren:

```powershell
Install-Module -Name VcRedist -Force
```

## Manuelle Installation aus dem Repository

Das Modul kann aus dem [GitHub-Quellrepository](https://github.com/aaronparker/VcRedist) heruntergeladen werden. Es enthält das Modul im Ordner `VcRedist`. Dieser Ordner muss in einen Ihrer PowerShell-Modulpfade installiert werden. Eine vollständige Liste der verfügbaren PowerShell-Modulpfade erhalten Sie in einer PowerShell-Konsole mit `$env:PSModulePath.split(';')`.

Zu den üblichen PowerShell-Modulpfaden gehören:

* Aktueller Benutzer: `%USERPROFILE%\Documents\WindowsPowerShell\Modules\`
* Alle Benutzer: `%ProgramFiles%\WindowsPowerShell\Modules\`
* OneDrive: `$env:OneDrive\Documents\WindowsPowerShell\Modules\`

So installieren Sie das Modul aus dem Repository:

1. Laden Sie den Branch `main` auf Ihre Arbeitsstation herunter.
2. Kopieren Sie den Inhalt des Ordners VcRedist auf Ihrer Arbeitsstation in den gewünschten PowerShell-Modulpfad.
3. Öffnen Sie eine PowerShell-Konsole mit der Option Run as Administrator.
4. Legen Sie bei Bedarf eine Ausführungsrichtlinie fest, die das Ausführen der Modulscripts zulässt.

Nach Abschluss der Installation können Sie mit `Get-Module -ListAvailable VcRedist` überprüfen, ob das Modul vorhanden ist. Laden Sie das Modul zur Verwendung mit folgendem Befehl:

```powershell
Import-Module -Name VcRedist
```
