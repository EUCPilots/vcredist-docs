# Uninstall the Redistributables

To uninstall the Visual C++ Redistributables on the local machine, use `Uninstall-VcRedist`. This function accepts the release and architecture of the Visual C++ Redistributables and will attempt to perform a silent uninstall of the targeted Visual C++ Redistributables.

`Uninstall-VcRedist` requires elevated access to be able to uninstall the Redistributables.

## Parameters

### Required parameters

None. If `Uninstall-VcRedist` is run without parameters, you will be prompted to confirm that you want to uninstall the Redistributable/s. Without additional parameters, `Uninstall-VcRedist` will attempt to uninstall all currently installed Redistributables.

### Optional parameters

* `Confirm` - `Uninstall-VcRedist` will not uninstall Redistributables by default. `-Confirm:$true` is required to enable `Uninstall-VcRedist` to uninstall the Redistributables.
* `Release` - Specifies the release (or version) of the redistributables to uninstall (e.g., `2022`, `2019`, `2012`, etc.)
* `Architecture` - Specifies the processor architecture to of the redistributables to uninstall. Can be `x86` or `x64`

## Examples

The following command will uninstall all of the currently installed Visual C++ Redistributables on the local system.

```powershell
Uninstall-VcRedist -Confirm:$true
```

This command will uninstall any `2008` release of the installed Visual C++ Redistributables.

```powershell
Uninstall-VcRedist -Release 2008 -Confirm:$true
```
