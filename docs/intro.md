# Introduction

VcRedist is a PowerShell module for lifecycle management of the [Microsoft Visual C++ Redistributables](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

VcRedist downloads the supported and unsupported Redistributables for local installation, gold image deployment, or importing as applications into Microsoft Configuration Manager and Microsoft Intune. It supports passive and silent installs and uninstalls. The MDT integration remains available on a best-effort basis, but its commands are deprecated.

![PowerShell Gallery downloads](https://img.shields.io/powershellgallery/dt/vcredist.svg?style=flat&logo=powershell&logoColor=white&labelColor=7e56c2&color=009485)

## Why

The Microsoft Visual C++ Redistributables are a core component of any Windows desktop deployment (physical PCs or virtual desktops). Multiple versions are commonly deployed to support various applications, thus they need to be imported into your deployment solution or installed locally. The aim of this module is to simplify obtaining, deploying, and updating to the current versions of the Redistributables.

## Supported vs. Unsupported Redistributables

The module uses one manifest with a `Supported` flag on each entry. By default, `Get-VcList` returns supported Redistributables; use `-Export Unsupported` or `-Export All` to include entries Microsoft no longer supports.

It is important to note that Microsoft no longer supports and provides security updates for certain Redistributables. The list of supported Redistributables is maintained here [Microsoft Visual C++ Redistributables](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist). Deployment of unsupported Redistributables should be done at your own risk.

## Manifest source

`Get-VcList` uses the latest manifest available from the VcRedist repository by default and falls back to the bundled copy if the remote manifest cannot be used or is older. Use `-Source Remote` to require the remote manifest or `-Source Bundled` to avoid a network request. Module version 4 no longer receives manifest updates; update to VcRedist 5 to receive current manifest data.
