# Get the VcRedist list

`Get-VcList` returns the list of Visual C++ Redistributables. The VcRedist module includes the full list of available supported and unsupported  Redistributables and returns only the supported list by default. Unless you have a specific requirement, it is highly recommend that you install only [the supported Redistributables](https://support.microsoft.com/en-au/help/2977003/the-latest-supported-visual-c-downloads).

Running `Get-VcList` with no parameters will return an array of the supported Redistributables by reading the internal manifest. Output can then be manipulated to filter the results. Note though, the default behaviour of `Get-VcList` is to return only the `14` Redistributables. This is because the `2015`, `2017`, `2019` and `14` Redistributables are all the same major version and will be upgraded to the `14` release and can't be installed side-by-side.

Here's a sample of what's returned:

```powershell
PS C:\> Get-VcList

Name            : Visual C++ v14 Redistributable (x64)
ProductCode     : {91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}
Version         : 14.50.35719.0
URL             : https://www.visualstudio.com/downloads/
URI             : https://aka.ms/vc14/vc_redist.x64.exe
Release         : 14
Architecture    : x64
Install         : /install /passive /norestart
SilentInstall   : /install /quiet /norestart
SilentUninstall : "%ProgramData%\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe" /uninstall /quiet /norestart
UninstallKey    : 32
PackageId       : 43677731-4118-4a83-b5eb-d984ad22aa67
DetectionFile   : %SystemRoot%\System32\vcruntime140.dll

Name            : Visual C++ v14 Redistributable (x86)
ProductCode     : {0e4ccf1b-d073-4cfe-8a24-e86185719b56}
Version         : 14.50.35719.0
URL             : https://www.visualstudio.com/downloads/
URI             : https://aka.ms/vc14/vc_redist.x86.exe
Release         : 14
Architecture    : x86
Install         : /install /passive /norestart
SilentInstall   : /install /quiet /norestart
SilentUninstall : "%ProgramData%\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe" /uninstall /quiet /norestart
UninstallKey    : 32
PackageId       : 5eb1197c-0c50-4a1b-9f88-87309b79ff3b
DetectionFile   : %SystemRoot%\System32\vcruntime140.dll
```

Output from `Get-VcList` can be filtered using `Where-Object`. This approach is useful where you want to export the full list of Redistributables but filter for specific processor architectures.

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

To pass the list of redistributables to `Install-VcRedist`, `Import-VcMdtApplication`, `Update-VcMdtApplication`, `Import-VcConfigMgrApplication` and `Update-VcConfigMgrApplication`, it must first be passed through `Save-VcRedist`, which will then add a Path property to the object required by the other functions.

## Parameters

### Optional parameters

* `Release` - Specifies the release (or version) of the redistributables to return (e.g. `14`, `2019`, `2010`, `2012`, etc.)
* `Architecture` - Specifies the processor architecture to of the redistributables to return. Can be `x86`, `x64` or `arm64`
* `Export` - Defines the list of Visual C++ Redistributables to export - All, Supported or Unsupported Redistributables. Defaults to exporting the Supported Redistributables.
* `Manifest` - An external JSON file that contains the details about the Visual C++ Redistributables. This must be in the expected format

### Returning Supported Redistributables

`Get-VcList` without additional parameters will return all of the supported Redistributables. Using the `-Release` and `-Architecture` parameters will return the specified release and architecture from the supported Redistributables only.

### Returning Unsupported Redistributables

To return Redistributables from the list of unsupported Redistributables or the entire list, the `-Export` parameter is required. The `-Export` parameter cannot be used with the `-Release` and `-Architecture` parameters; therefore to filter in the full list or the unsupported list of Redistributables, the output from `Get-VcList` must be filtered with `Where-Object`.

## Filtering Output

The output from `Get-VcList` can be filtered before sending to `Save-VcRedist`. `Get-VcList` has the `-Release` parameter for filtering on the `14` release of the Redistributables. Additionally, the `-Architecture` parameter can filter on `x86`, `x64` or `arm64` processor architectures.

These parameters cannot be used with the `-Export` parameter. If you require filtering when exporting All, Supported or Unsupported Redistributables, pipe the output to the `Where-Object` function. This approach is required where you want to export a list of the unsupported Redistributables.

## Examples

Return the current list of supported Redistributables:

```powershell
Get-VcList
```

`Get-VcList` does not return the `2015`, `2017` or `2019` releases by default. To return specific releases and processor architectures from the supported list of Redistributables, the following example can be used:

```powershell
Get-VcList -Release 2015, 2017, 2019 -Architecture x64
```

To return the complete list of available supported and unsupported Redistributables:

```powershell
Get-VcList -Export All
```

You may want to export the complete list of available supported and unsupported Redistributables, but filter for 64-bit Redistributables only:

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

To return a specific release and architecture from the list of unsupported Visual C++ Redistributables from the embedded manifest, the following can be used to filter for the `2008`, and `2010` releases and 64-bit versions of the Redistributables.

```powershell
Get-VcList -Export Unsupported | Where-Object { $_.Release -in "2008", "2010" -and $_.Architecture -eq "x64" }
```
