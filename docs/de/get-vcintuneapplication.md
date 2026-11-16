# Visual C++ Redistributables in Microsoft Intune abfragen

`Get-VcIntuneApplication` ruft alle Visual C++ Redistributable-Win32-Anwendungen ab, die derzeit in Microsoft Intune vorhanden sind. Die Funktion ist hilfreich für Überprüfungen, Berichte oder zur Kontrolle, welche Redistributables in Ihrem Intune-Mandanten verwaltet werden.

## Funktionen

- Fragt Intune nach allen Visual C++ Redistributable-Win32-Anwendungen ab
- Gibt Anwendungsdetails einschließlich Anzeigename und ID zurück
- Eignet sich zur Inventarisierung, Berichterstellung oder als Eingabe für andere VcRedist-Funktionen

## Voraussetzungen

- Das PowerShell-Modul [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) muss installiert und importiert sein
- Sie müssen mit `Connect-MSIntuneGraph` bei Intune authentifiziert sein
- Ein gültiges Microsoft-Graph-API-Zugriffstoken muss vorliegen

## Verwendung

```powershell
# Query all Visual C++ Redistributable Win32 apps in Intune
$Apps = Get-VcIntuneApplication

# Display the results
$Apps | Format-Table displayName, Id
```

## Funktionsweise

1. Ruft `Get-VcList -Export All` auf, um eine Liste aller bekannten Redistributables zu erhalten
2. Ruft `Get-VcRedistAppsFromIntune` mit dieser Liste auf, um passende Intune-Win32-Anwendungen abzurufen
3. Gibt die Liste der Intune-Anwendungsobjekte zurück

## Ausgabe

Jedes Objekt im zurückgegebenen Array enthält Eigenschaften wie:
- `displayName`: Der Anzeigename der Anwendung in Intune
- `Id`: Die Intune-Anwendungs-ID
- Weitere Eigenschaften, die von `Get-VcRedistAppsFromIntune` zurückgegeben werden

## Problembehandlung

- **Fehlende Module:** Stellen Sie sicher, dass `IntuneWin32App` installiert und importiert ist
- **Authentifizierungsfehler:** Authentifizieren Sie sich mit `Connect-MSIntuneGraph` und stellen Sie sicher, dass `$Global:AccessToken` festgelegt ist
- **Keine Ergebnisse:** Stellen Sie sicher, dass Sie Visual C++ Redistributables mit `Import-VcIntuneApplication` in Intune importiert haben

## Siehe auch

- [Import-VcIntuneApplication](import-vcintuneapplication.md)
- [Remove-VcIntuneApplication](remove-vcintuneapplication.md)
- [PowerShell-Modul IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [VcRedist-Dokumentation](https://vcredist.com/)
