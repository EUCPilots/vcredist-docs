# Obtener los Redistributables instalados

`Get-InstalledVcRedist` devuelve la lista de Redistributables de Visual C++ instalados en el sistema actual. Esta función puede ayudar a realizar distintas tareas, como comparar la lista de Redistributables instalados con la de los manifiestos incluidos en el módulo o desinstalar los Redistributables instalados.

Al ejecutar el comando `Get-InstalledVcRedist`, se devuelve la lista de Redistributables instalados con varias propiedades, entre ellas el nombre para mostrar, el código de producto, la versión y las cadenas de desinstalación.

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

## Parámetros

### Parámetros opcionales

* `Export` - `Supported` (predeterminado) devuelve los paquetes Redistributable; `All` también incluye los tiempos de ejecución Additional y Minimum, normalmente ocultos en Programas y características.

## Ejemplos

El siguiente comando devuelve la lista de Redistributables instalados:

```powershell
Get-InstalledVcRedist
```

El resultado se puede filtrar por propiedades específicas:

```powershell
Get-InstalledVcRedist | Select Name, Version, ProductCode
```

![Redistributables de Microsoft Visual C++ instalados en el equipo local](/images/installed-vcredist.png)

Esta lista no incluye los tiempos de ejecución Additional y Minimum de forma predeterminada. Inclúyalos con `-Export All`:

```powershell
Get-InstalledVcRedist -Export All
```
