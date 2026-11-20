# Redistributables in Microsoft Intune importieren

`Import-VcIntuneApplication` automatisiert das Verpacken und Importieren von Visual C++ Redistributables als Win32-Anwendungen in Microsoft Intune. Jedes Redistributable wird paketiert, mit Erkennungs- und Anforderungsregeln versehen und als separate Anwendung importiert.

**Wichtige Funktionen:**

- Verpackt jedes Visual C++ Redistributable als .intunewin-Datei
- Legt Anwendungseigenschaften fest: Name, Beschreibung, Herausgeber, Version, URLs, Hinweise, Logo, Installations-/Deinstallationsbefehle, Installationsverhalten, Betriebssystemarchitektur, Mindestbetriebssystem sowie Erkennungs- und Anforderungsregeln
- Überspringt den Import, wenn die Anwendung bereits vorhanden und in Intune aktuell ist
- Bereinigt temporäre Dateien nach dem Import
- Unterstützt `-WhatIf`, um Importe in der Vorschau anzuzeigen
- Unterstützt architekturspezifische Anforderungsregeln für x86-, x64- und ARM64-Pakete

> **Hinweis:**
>
> - Erfordert das PowerShell-Modul [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
> - Erfordert Windows PowerShell 5.1; PowerShell 7 wird vom erforderlichen Modul IntuneWin32App nicht unterstützt
> - Authentifizieren Sie sich vor der Verwendung mit `Connect-MSIntuneGraph` bei Intune
> - Erfordert ein gültiges Microsoft-Graph-API-Zugriffstoken

## Parameter

- `VcList` (**erforderlich**): Ein Array von Visual C++ Redistributable-Objekten, üblicherweise aus `Save-VcRedist`. Jedes Objekt muss die erforderlichen Eigenschaften enthalten (siehe unten).
- `ImportAsUpdate`: Importiert für jedes Redistributable eine separate Updateanwendung, stellt ihrem Anzeigenamen `Update for` voran und fügt eine Dateiversionsanforderung hinzu, damit eine ältere installierte Laufzeitumgebung die Updateanforderung nicht erfüllt.
- `WhatIf`: Zeigt Importe in der Vorschau an, ohne Intune-Anwendungen zu erstellen oder zu ändern.

## Erforderliche VcList-Eigenschaften

Jedes Objekt in `VcList` muss Folgendes enthalten:

- `Name`, `Version`, `Path`, `Architecture`, `SilentInstall`, `SilentUninstall`, `PackageId`, `URI` und weitere Eigenschaften, wie sie von `Save-VcRedist` erzeugt werden.

Die Funktion validiert diese Eigenschaften und löst einen Fehler aus, wenn eine davon fehlt.

## Beispiel: Redistributables importieren

Das folgende Beispiel ruft die Liste der Visual C++ Redistributables für Version 14 ab, lädt die Installationsprogramme herunter und importiert jedes als Win32-Anwendung in Intune:

```powershell
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcIntuneApplication -VcList $VcList
```

Verwenden Sie `-ImportAsUpdate`, um eine Anforderung für die Dateiversion der Erkennungsdatei des Pakets hinzuzufügen:

```powershell
Import-VcIntuneApplication -VcList $VcList -ImportAsUpdate
```

![In Intune importierte Anwendungen der Microsoft Visual C++ Redistributables](/images/intuneapp.jpeg)

## Zuweisungen und Ablösung

Weisen Sie die Anwendungen nach dem Import mit `Add-IntuneWin32AppAssignmentAllDevices` zu. Die Funktion gibt Anwendungsobjekte mit einer `Id`-Eigenschaft zurück:

```powershell
# Retrieve existing Visual C++ Redistributable applications in Intune (that have been imported by VcRedist)
$ExistingApps = Get-VcIntuneApplication

# Import the new Visual C++ Redistributable versions
$NewApps = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist" | Import-VcIntuneApplication

# Create an All Devices assignment and add supersedence rules for existing versions
foreach ($App in $NewApps) {
    $params = @{
        Id                           = $App.id
        Intent                       = "required"
        Notification                 = "showReboot"
        DeliveryOptimizationPriority = "notConfigured"
        UseLocalTime                 = $true
        AvailableTime                = $(Get-Date -Hour 18 -Minute 0 -Second 0)
        DeadlineTime                 = $(Get-Date -Hour 18 -Minute 0 -Second 0).AddDays(1)
        EnableRestartGracePeriod     = $true
        RestartGracePeriod           = 1440
        RestartNotificationSnooze    = 240
        RestartCountDownDisplay      = 15
    }
    Add-IntuneWin32AppAssignmentAllDevices @params

    # Match existing app packages with the same identifier and add supersedence rules
    $MatchingApp = $ExistingApps | Where-Object { $_.PackageId -eq $($App.notes | ConvertFrom-Json -ErrorAction "Stop").Guid }
    if ($null -ne $MatchingApp) {
        foreach ($Item in $MatchingApp) {
            Write-Host "Adding supersedence rule for $($Item.id) to $($App.id)"
            $SupersedenceRule = New-IntuneWin32AppSupersedence -ID $Item.id -SupersedenceType 'Update'
            Add-IntuneWin32AppSupersedence -ID $App.id -Supersedence $SupersedenceRule
        }
    }
}
```

## Funktionsweise

1. **Validiert die Voraussetzungen:**
   - Stellt sicher, dass Windows PowerShell (nicht Core) ausgeführt wird
   - Prüft, ob das Modul IntuneWin32App vorhanden ist
   - Prüft, ob ein Microsoft-Graph-API-Zugriffstoken vorliegt
2. **Lädt das Intune-App-Manifest** aus `Intune.json` im Modulverzeichnis
3. **Erstellt ein Symbolobjekt**, wenn die Symboldatei vorhanden ist
4. **Validiert jedes VcList-Objekt** auf die erforderlichen Eigenschaften
5. **Sucht nach vorhandenen Intune-Anwendungen** und überspringt den Import, wenn die Anwendung aktuell ist
6. **Verpackt das Installationsprogramm** als .intunewin-Datei
7. **Erstellt Anforderungs- und Erkennungsregeln** anhand des Manifests und von VcList
8. **Importiert die Anwendung** mit `Add-IntuneWin32App`
9. **Bereinigt** temporäre Dateien

## Problembehandlung

- **PowerShell Core wird nicht unterstützt:** Die Funktion löst unter PowerShell Core einen Fehler aus. Verwenden Sie Windows PowerShell 5.1.
- **Fehlende Module:** Stellen Sie sicher, dass `IntuneWin32App` installiert und in Ihrer Sitzung verfügbar ist.
- **Authentifizierungsfehler:** Authentifizieren Sie sich mit `Connect-MSIntuneGraph` und stellen Sie sicher, dass `$Global:AccessToken` festgelegt ist.
- **Erforderliche Eigenschaften fehlen:** Verwenden Sie `Save-VcRedist`, um eine gültige `VcList` zu erstellen.

## Siehe auch

- [PowerShell-Modul IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [VcRedist-Dokumentation](https://vcredist.com/)
