# Install the Redistributables

A [quick install option](https://vcredist.com/quick/) is provided; however for a custom install of the Visual C++ Redistributables on a local machine, use `Install-VcRedist`. This function accepts the array of Visual C++ Redistributables passed from `Get-VcList` and installs the Visual C++ Redistributables downloaded to a local path with `Save-VcRedist`. The output from `Save-VcRedist` is required, because it includes the `Path` property that is populated with the path to each installer.

`Install-VcRedist` requires an elevated PowerShell session on Windows. It validates each installer's Microsoft Authenticode signature, installs releases in the order declared by the manifest, and checks installer exit codes. Passive installation is the default; use `-Silent` for quiet installation.

After the Visual C++ Redistributables are installed, the list of installed Visual C++ Redistributables is returned to the pipeline from `Get-InstalledVcRedist`.

## Parameters

### Required parameters

* `VcList` - An array containing details of the Visual C++ Redistributables from `Save-VcRedist`

### Optional parameters

* `Silent` - Uses the manifest's quiet install arguments instead of its passive arguments
* `Force` - Reinstall entries that are already installed and allow installation when the package architecture is not recommended for the current OS. On ARM64, this can be used to force x64 installers.

## Examples

The following commands will install the default supported Visual C++ Redistributables downloaded locally with `Save-VcRedist` to `C:\Temp\VcRedist`.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Install-VcRedist -VcList $VcList
```

These commands can be simplified by passing output to the subsequent command via the pipeline:

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist | Install-VcRedist
```

Fully silent install command line arguments can be specified with the `-Silent` parameter when installing the Redistributables.

```powershell
Install-VcRedist -VcList (Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist) -Silent
```

![Microsoft Visual C++ Redistributables installed on the local PC](/images/visualcprograms.png)
