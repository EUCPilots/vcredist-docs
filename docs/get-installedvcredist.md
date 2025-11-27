# Get the Installed Redistributables

`Get-InstalledVcRedist` is used to return the list of Visual C++ Redistributables installed on the current system. This function can assist in performing various functions including, comparing the installed list of Redistributables against that listed in the manifests included in the module, or uninstalling the installed Redistributables.

Running the `Get-InstalledVcRedist` command returns the list of installed Redistributables with various properties, including the display name, product code, version and uninstall strings.

```powershell
Publisher            : Microsoft Corporation
Name                 : Microsoft Visual C++ 2015-2022 Redistributable (x86) - 14.44.35211
Version              : 14.44.35211.0
ProductCode          : {0b5169e3-39da-4313-808e-1f9c0407f3bf}
BundleCachePath      : C:\ProgramData\Package Cache\{0b5169e3-39da-4313-808e-1f9c0407f3bf}\VC_redist.x86.exe
Architecture         : x86
Release              : 2022
UninstallString      : "C:\ProgramData\Package Cache\{0b5169e3-39da-4313-808e-1f9c0407f3bf}\VC_redist.x86.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{0b5169e3-39da-4313-808e-1f9c0407f3bf}\VC_redist.x86.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

Publisher            : Microsoft Corporation
Name                 : Microsoft Visual C++ 2022 Redistributable (Arm64) - 14.44.35211
Version              : 14.44.35211.0
ProductCode          : {a87e42cd-475d-4f15-8848-e0d60c63c02f}
BundleCachePath      : C:\ProgramData\Package Cache\{a87e42cd-475d-4f15-8848-e0d60c63c02f}\VC_redist.arm64.exe
Architecture         : ARM64
Release              : 2022
UninstallString      : "C:\ProgramData\Package Cache\{a87e42cd-475d-4f15-8848-e0d60c63c02f}\VC_redist.arm64.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{a87e42cd-475d-4f15-8848-e0d60c63c02f}\VC_redist.arm64.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

Publisher            : Microsoft Corporation
Name                 : Microsoft Visual C++ 2015-2022 Redistributable (x64) - 14.44.35211
Version              : 14.44.35211.0
ProductCode          : {d8bbe9f9-7c5b-42c6-b715-9ee898a2e515}
BundleCachePath      : C:\ProgramData\Package Cache\{d8bbe9f9-7c5b-42c6-b715-9ee898a2e515}\VC_redist.x64.exe
Architecture         : x64
Release              : 2022
UninstallString      : "C:\ProgramData\Package Cache\{d8bbe9f9-7c5b-42c6-b715-9ee898a2e515}\VC_redist.x64.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{d8bbe9f9-7c5b-42c6-b715-9ee898a2e515}\VC_redist.x64.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall
```

## Parameters

### Optional parameters

* `ExportAll` - Export all installed Redistributables including the Additional and Minimum Runtimes typically hidden from Programs and Features

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

This list won't include the Additional and Minimum Runtimes by default. These can be returned with the `-ExportAll` switch:

```powershell
Get-InstalledVcRedist -ExportAll
```
