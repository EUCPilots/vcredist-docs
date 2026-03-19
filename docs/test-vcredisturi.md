# Test Redistributable URIs

`Test-VcRedistUri` validates the download URIs for the Visual C++ Redistributables by sending a HEAD request to each URI. Use this function to verify that download links are accessible before attempting to download with `Save-VcRedist`.

## Parameters

### Required parameters

* `VcList` - An array containing details of the Visual C++ Redistributables from `Get-VcList`

### Optional parameters

* `Proxy` - Specifies a proxy server for the request
* `ProxyCredential` - Specifies credentials for the proxy server
* `ShowProgress` - Displays download progress. Progress is hidden by default

## Examples

Test all supported Redistributable download URIs:

```powershell
Get-VcList | Test-VcRedistUri
```

Example output:

```powershell
Result       : True
Release      : 14
Architecture : x64
Version      : 14.50.35719.0
URI          : https://aka.ms/vc14/vc_redist.x64.exe
```

Test URIs for a specific release and architecture:

```powershell
Get-VcList -Release 2019 -Architecture x64 | Test-VcRedistUri
```

Test all Redistributable URIs including unsupported versions:

```powershell
Get-VcList -Export All | Test-VcRedistUri
```

Test URIs via a proxy server:

```powershell
Get-VcList | Test-VcRedistUri -Proxy "http://proxy.domain.local"
```
