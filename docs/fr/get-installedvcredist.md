# Obtenir les redistribuables installés

`Get-InstalledVcRedist` retourne la liste des redistribuables Visual C++ installés sur le système actuel. Cette fonction peut notamment servir à comparer la liste des redistribuables installés avec celle des manifestes inclus dans le module, ou à désinstaller les redistribuables installés.

L'exécution de la commande `Get-InstalledVcRedist` retourne la liste des redistribuables installés et diverses propriétés, notamment le nom affiché, le code produit, la version et les chaînes de désinstallation.

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

## Paramètres

### Paramètres facultatifs

* `Export` - `Supported` (par défaut) retourne les packages redistribuables ; `All` inclut également les environnements d'exécution Additional et Minimum, généralement masqués dans Programmes et fonctionnalités.

## Exemples

La commande suivante retourne la liste des redistribuables installés :

```powershell
Get-InstalledVcRedist
```

Vous pouvez filtrer la sortie sur certaines propriétés :

```powershell
Get-InstalledVcRedist | Select Name, Version, ProductCode
```

![Redistribuables Microsoft Visual C++ installés sur le PC local](/images/installed-vcredist.png)

Par défaut, cette liste n'inclut pas les environnements d'exécution Additional et Minimum. Incluez-les avec `-Export All` :

```powershell
Get-InstalledVcRedist -Export All
```
