# Visual C++ Redistributables aus Microsoft Intune entfernen

`Remove-VcIntuneApplication` automatisiert das Entfernen von Visual C++ Redistributable-Win32-Anwendungen aus Microsoft Intune. Die Funktion gleicht Anwendungen in Intune anhand der bereitgestellten VcList ab und entfernt sie mit dem Modul IntuneWin32App.

## Funktionen

- Entfernt Win32-Anwendungen der Visual C++ Redistributables aus Intune
- Akzeptiert ein VcList-Objekt (aus `Save-VcRedist`), um die zu entfernenden Anwendungen zu identifizieren
- Unterstützt `-WhatIf` und `-Confirm` für einen sicheren Betrieb
- Gibt ausführliche Informationen zur Nachverfolgung der Entfernung aus

## Voraussetzungen

- Das PowerShell-Modul [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) muss installiert und importiert sein
- Sie müssen mit `Connect-MSIntuneGraph` bei Intune authentifiziert sein
- Ein gültiges Microsoft-Graph-API-Zugriffstoken muss vorliegen

## Parameter

- `VcList` (**erforderlich**): Ein Array mit Visual C++ Redistributable-Objekten, üblicherweise aus `Save-VcRedist`. Dient zum Abgleich und Entfernen der entsprechenden Intune-Anwendungen.

## Anwendungsbeispiel

```powershell
# Get the list of redistributables you want to remove
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist

# Remove the corresponding Intune applications
Remove-VcIntuneApplication -VcList $VcList -Verbose -Confirm:$false
```

> **Tipp:** Verwenden Sie `-WhatIf`, um anzuzeigen, welche Anwendungen aus Intune entfernt würden.

## Funktionsweise

1. Ruft mit `Get-VcRedistAppsFromIntune` vorhandene Visual C++ Redistributable-Win32-Anwendungen in Intune ab
2. Ruft für jede passende Anwendung `Remove-IntuneWin32App` auf, um sie aus Intune zu entfernen
3. Unterstützt PowerShells `ShouldProcess` für die Sicherheitsoptionen `-WhatIf` und `-Confirm`

## Problembehandlung

- **Fehlende Module:** Stellen Sie sicher, dass `IntuneWin32App` installiert und importiert ist
- **Authentifizierungsfehler:** Authentifizieren Sie sich mit `Connect-MSIntuneGraph` und stellen Sie sicher, dass `$Global:AccessToken` festgelegt ist
- **Keine passenden Anwendungen:** Stellen Sie sicher, dass Ihre `VcList` den zu entfernenden Anwendungen entspricht

## Siehe auch

- [PowerShell-Modul IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [VcRedist-Dokumentation](https://vcredist.com/)
