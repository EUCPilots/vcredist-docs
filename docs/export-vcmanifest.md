# Export the Manifest

`Export-VcManifest` exports the internal Redistributable manifest to a local directory. The manifest is a JSON file (`VisualCRedistributables.json`) that contains details of all supported and unsupported Redistributables. Use this to create a custom manifest or to inspect the current manifest data.

## Parameters

### Required parameters

* `Path` - A directory path that the manifest will be exported to

## Examples

Export the VcRedist manifest to `C:\Temp`. The manifest will be exported to `C:\Temp\VisualCRedistributables.json`:

```powershell
Export-VcManifest -Path C:\Temp
```

Export the manifest and inspect the supported Redistributables:

```powershell
Export-VcManifest -Path C:\Temp
$Manifest = Get-Content -Path C:\Temp\VisualCRedistributables.json | ConvertFrom-Json
$Manifest.Supported
```

Export the manifest and use it as a custom manifest with `Get-VcList`:

```powershell
Export-VcManifest -Path C:\Temp
Get-VcList -Manifest C:\Temp\VisualCRedistributables.json
```
