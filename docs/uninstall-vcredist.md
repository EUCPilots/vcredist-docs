# Uninstall the Redistributables

To uninstall the Visual C++ Redistributables on the local machine, use `Uninstall-VcRedist`. This function accepts the release and architecture of the Visual C++ Redistributables and will attempt to perform a silent uninstall of the targeted Visual C++ Redistributables.

`Uninstall-VcRedist` requires an elevated PowerShell session on Windows. It uses PowerShell's high-impact confirmation behavior; use `-Confirm` to request confirmation explicitly or `-Confirm:$false` to suppress the prompt.

## Parameters

### Required parameters

None. Without filters, the command selects installed Redistributables from all releases (including `2022`) and the x86 and x64 architectures. ARM64 is available through `-Architecture ARM64`, but is not selected by default. It prompts before uninstalling by default.

### Optional parameters

* `Confirm` - Controls PowerShell's confirmation prompt. `-Confirm:$false` suppresses it.
* `Release` - Specifies the release (or version) of the redistributables to uninstall (e.g., `14`, `2019`, `2012`, etc.)
* `Architecture` - Specifies the architecture to uninstall: `x86`, `x64`, or `ARM64`. Defaults to x86 and x64.
* `VcList` - Accepts entries from `Get-VcList` or `Get-InstalledVcRedist` through the pipeline to select specific Redistributables.

## Examples

The following command will uninstall all of the currently installed Visual C++ Redistributables on the local system.

```powershell
Uninstall-VcRedist -Confirm
```

This command will uninstall any `2008` release of the installed Visual C++ Redistributables.

```powershell
Uninstall-VcRedist -Release 2008
```

Uninstall selected installed entries from the inventory:

```powershell
Get-InstalledVcRedist | Where-Object Release -eq "14" | Uninstall-VcRedist
```

The command returns a status object for each selected item. `State` is `Uninstalled` when removal succeeds, `Not installed` when the product was already absent, and `Failed` when the uninstaller cannot run or returns an unexpected exit code. When both `-Release` and `-Architecture` are explicitly specified in manual mode, missing combinations are also returned as `Not installed`.
