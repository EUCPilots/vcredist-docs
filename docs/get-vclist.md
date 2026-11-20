# Get the VcRedist list

`Get-VcList` returns entries from the VcRedist manifest. By default, it returns entries for release `14` and architectures x86, x64, and ARM64. Use `-Release` and `-Architecture` to select other releases and architectures. A release selection can include unsupported entries; the command warns when it does. Unless you have a specific requirement, install only [Redistributables supported by Microsoft](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

The manifest is resolved from the VcRedist repository by default. If the remote manifest is unavailable or older than the bundled manifest, the bundled copy is used.

## Parameters

* `Release` - Select releases, such as `14`, `2015`, `2017`, or `2019`. Defaults to `14`; selected entries can be unsupported.
* `Architecture` - Select `x86`, `x64`, or `arm64`. Defaults to all three.
* `Export` - Return `Supported` (default), `Unsupported`, or `All` entries.
* `Source` - Select `Auto` (default), `Remote`, or `Bundled` manifest resolution.
* `Proxy`, `ProxyCredential` - Configure a proxy for retrieving the remote manifest.

Without `-Export`, entries are filtered by `-Release` and `-Architecture` without filtering by support status. To get only supported entries across all releases, use `-Export Supported`.

To return unsupported entries or all entries, use `-Export Unsupported` or `-Export All`. These parameter sets cannot be combined with `-Release` or `-Architecture`; filter their output with `Where-Object` if needed. The command warns when returning unsupported entries.

## Examples

Return the default supported list:

```powershell
Get-VcList
```

Return x64 entries for releases 2017 and 2019:

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
```

Return the unsupported 2015 x64 entry. The command writes a warning because the result is unsupported:

```powershell
Get-VcList -Release 2015 -Architecture x64
```

Return only supported entries across releases:

```powershell
Get-VcList -Export Supported
```

Return all manifest entries and filter for x64:

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

Return unsupported x64 entries for releases 2008 and 2010:

```powershell
Get-VcList -Export Unsupported | Where-Object { $_.Release -in "2008", "2010" -and $_.Architecture -eq "x64" }
```

Use the bundled manifest without a network request:

```powershell
Get-VcList -Source Bundled
```

To pass entries to `Install-VcRedist` or a deployment import function, first pipe them through `Save-VcRedist`. It downloads and validates the installers and adds a `Path` property to each entry.
