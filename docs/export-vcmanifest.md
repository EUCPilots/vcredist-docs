# Export the Manifest

`Export-VcManifest` writes the selected VcRedist manifest to a folder as `VisualCRedistributables.json`. The v5 manifest has a flat schema containing `SchemaVersion`, `Updated`, `InstallOrder`, and `Entries`; each entry has a `Supported` flag. The manifest source cannot be overridden with a local file.

## Parameters

### Required parameters

* `Path` - An existing directory where the manifest will be written

### Optional parameters

* `Source` - Selects `Auto` (default), `Remote`, or `Bundled`. `Auto` uses the remote manifest unless it is unavailable or older than the bundled copy.
* `Proxy`, `ProxyCredential` - Configure a proxy when retrieving the remote manifest.
* `WhatIf` - Common PowerShell parameter to preview the export without writing the file.

## Examples

Export the VcRedist manifest to `C:\Temp`. The manifest will be exported to `C:\Temp\VisualCRedistributables.json`:

```powershell
Export-VcManifest -Path C:\Temp
```

Export the manifest and inspect supported entries:

```powershell
Export-VcManifest -Path C:\Temp
$Manifest = Get-Content -Path C:\Temp\VisualCRedistributables.json | ConvertFrom-Json
$Manifest.Entries | Where-Object Supported
```

Export the bundled manifest without making a network request:

```powershell
Export-VcManifest -Path C:\Temp -Source Bundled
```
