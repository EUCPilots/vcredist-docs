# Get the Installed Redistributables

`Get-InstalledVcRedist` is used to return the list of Visual C++ Redistributables installed on the current system. This function can assist in performing various functions including, comparing the installed list of Redistributables against that listed in the manifests included in the module, or uninstalling the installed Redistributables.

Running the `Get-InstalledVcRedist` command returns the list of installed Redistributables with various properties, including the display name, product code, version and uninstall strings.

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

## Parameters

### Optional parameters

* `Export` - `Supported` (default) returns Redistributable packages; `All` also includes Additional and Minimum Runtimes typically hidden from Programs and Features.

## Examples

The following command will return the list of installed Redistributables:

```powershell
Get-InstalledVcRedist
```

Output can be filtered for specific properties:

```powershell
Get-InstalledVcRedist | Select Name, Version, ProductCode
```

![Microsoft Visual C++ Redistributables installed on the local PC](/images/installed-vcredist.png)

This list won't include the Additional and Minimum Runtimes by default. Include them with `-Export All`:

```powershell
Get-InstalledVcRedist -Export All
```
