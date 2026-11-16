# Download the Redistributables

To download Visual C++ Redistributables, pipe entries from `Get-VcList` to `Save-VcRedist`. The target folder is created if needed. Installers are stored under `Release\Version\Architecture`; existing valid installers are reused.

Downloads must use HTTPS and an allowed Microsoft download host. By default, each installer (including an existing installer) must have a valid Microsoft Authenticode signature. The command returns each entry with its installer `Path` for use with `Install-VcRedist` or a deployment import function.

::: info
An existing installer is reused when its file version is at least as recent as the manifest version; its signature is still checked.
:::

## Parameters

### Required parameters

* `VcList` - Entries from `Get-VcList`

### Optional parameters

* `Path` - Destination folder; defaults to the current directory
* `Proxy` - Specify a proxy server to use when downloading the Visual C++ Redistributables
* `ProxyCredential` - If the proxy server requires authentication, credentials can be specified as an PSCredential object
* `ShowProgress` - Display download progress
* `UserAgent` - Set the request user agent
* `SkipAuthenticodeValidation` - Skip signature checks. Use only when you have an explicit reason to bypass validation.
* `WhatIf` - Preview directory creation and downloads without making changes.

## Examples

To download the default list of Redistributables to `C:\Temp\VcRedist`, use the following command:

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
```

Redistributables are downloaded into the target folder:

![Microsoft Visual C++ Redistributables installed on the local PC](/images/vcredist-folder.png)

Pass the list of `2013` and `2019` x86 supported Visual C++ Redistributables to Save-VcRedist and downloads the Redistributables to C:\Redist.

```powershell
$VcList = Get-VcList -Release 2013, 2019 -Architecture x86
Save-VcRedist -VcList $VcList -Path C:\Redist
```

Download the `2012`, `2013`, and `2019` Visual C++ Redistributables to C:\Redist.

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist
```

Downloads the `2012`, `2013`, and `2019` Visual C++ Redistributables to C:\Redist using the proxy server 'proxy.domain.local'

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist -Proxy proxy.domain.local
```
