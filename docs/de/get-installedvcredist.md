# Installierte Redistributables abrufen

Mit `Get-InstalledVcRedist` wird die Liste der auf dem aktuellen System installierten Visual C++ Redistributables zurückgegeben. Diese Funktion kann bei verschiedenen Aufgaben helfen, etwa beim Vergleich der installierten Redistributables mit den im Modul enthaltenen Manifesten oder beim Deinstallieren installierter Redistributables.

Beim Ausführen von `Get-InstalledVcRedist` wird die Liste der installierten Redistributables mit verschiedenen Eigenschaften zurückgegeben, darunter Anzeigename, Produktcode, Version und Deinstallationszeichenfolgen.

```powershell
Publisher            : Microsoft Corporation
Name                 : Visual C++ v14 Redistributable (x86)
Version              : 14.52.37029.0
ProductCode          : {a88f8d56-9d66-4c09-a714-3c6d83981361}
BundleCachePath      : C:\ProgramData\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe
Architecture         : x86
Release              : 14
UninstallString      : "C:\ProgramData\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

Publisher            : Microsoft Corporation
Name                 : Visual C++ v14 Redistributable (Arm64)
Version              : 14.52.37029.0
ProductCode          : {f3c64e2f-0e60-4973-bfbb-bde56fc107e1}
BundleCachePath      : C:\ProgramData\Package Cache\{a111f0a4-679e-43e6-bdfe-25e176541c72}\vc_redist.arm64.exe
Architecture         : ARM64
Release              : 14
UninstallString      : "C:\ProgramData\Package Cache\{a111f0a4-679e-43e6-bdfe-25e176541c72}\vc_redist.arm64.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{a111f0a4-679e-43e6-bdfe-25e176541c72}\vc_redist.arm64.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

Publisher            : Microsoft Corporation
Name                 : Visual C++ v14 Redistributable (x64)
Version              : 14.52.37029.0
ProductCode          : {be2c4202-8de2-4274-95c7-ef71b2bfdcad}
BundleCachePath      : C:\ProgramData\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe
Architecture         : x64
Release              : 14
UninstallString      : "C:\ProgramData\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall
```

## Parameter

### Optionale Parameter

* `Export` – `Supported` (Standard) gibt Redistributable-Pakete zurück; `All` schließt auch die zusätzlichen und minimalen Laufzeitumgebungen ein, die normalerweise in „Programme und Features“ ausgeblendet sind.

## Beispiele

Der folgende Befehl gibt die Liste der installierten Redistributables zurück:

```powershell
Get-InstalledVcRedist
```

Die Ausgabe kann nach bestimmten Eigenschaften gefiltert werden:

```powershell
Get-InstalledVcRedist | Select Name, Version, ProductCode
```

![Auf dem lokalen PC installierte Microsoft Visual C++ Redistributables](/images/installed-vcredist.png)

Diese Liste enthält standardmäßig nicht die zusätzlichen und minimalen Laufzeitumgebungen. Schließen Sie sie mit `-Export All` ein:

```powershell
Get-InstalledVcRedist -Export All
```
