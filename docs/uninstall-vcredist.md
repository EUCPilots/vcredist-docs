# Uninstall the Redistributables

To uninstall the Visual C++ Redistributables on the local machine, use `Uninstall-VcRedist`. This function accepts the release and architecture of the Visual C++ Redistributables and will attempt to perform a silent uninstall of the targeted Visual C++ Redistributables.

`Uninstall-VcRedist` requires an elevated PowerShell session on Windows. It uses PowerShell's high-impact confirmation behavior; use `-Confirm` to request confirmation explicitly or `-Confirm:$false` to suppress the prompt.

## Parameters

### Required parameters

None. Without filters, the command selects installed Redistributables from all releases and the x86 and x64 architectures. It prompts before uninstalling by default.

### Optional parameters

* `Confirm` - Controls PowerShell's confirmation prompt. `-Confirm:$false` suppresses it.
* `Release` - Specifies the release (or version) of the redistributables to uninstall (e.g., `14`, `2019`, `2012`, etc.)
* `Architecture` - Specifies the architecture to uninstall: `x86`, `x64`, or `ARM64`. Defaults to x86 and x64.
* `VcList` - Accepts manifest entries from the pipeline to select specific Redistributables to uninstall.

## Examples

The following command will uninstall all of the currently installed Visual C++ Redistributables on the local system.

```powershell
Uninstall-VcRedist -Confirm
```

This command will uninstall any `2008` release of the installed Visual C++ Redistributables.

```powershell
Uninstall-VcRedist -Release 2008
```
