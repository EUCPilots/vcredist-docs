# インストール済み再頒布可能パッケージの取得

`Get-InstalledVcRedist` は、現在のシステムにインストールされている Visual C++ 再頒布可能パッケージの一覧を返します。この関数は、インストール済みパッケージとモジュールに含まれるマニフェストの一覧との比較や、インストール済みパッケージのアンインストールなど、さまざまな処理に役立ちます。

`Get-InstalledVcRedist` コマンドを実行すると、表示名、製品コード、バージョン、アンインストール文字列など、さまざまなプロパティを含むインストール済みパッケージの一覧が返されます。

```powershell
Publisher            : Microsoft Corporation
Name                 : Visual C++ v14 Redistributable (x86)
Version              : 14.52.37029.0
ProductCode          : {a88f8d56-9d66-4c09-a714-3c6d83981361}
BundleCachePath      : C:\ProgramData\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe
Architecture         : x86
Release              : 14
UninstallString      : "C:\ProgramData\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{0e4ccf1b-d073-4cfe-8a24-e86185719b56}\vc_redist.x86.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

Publisher            : Microsoft Corporation
Name                 : Visual C++ v14 Redistributable (Arm64)
Version              : 14.52.37029.0
ProductCode          : {f3c64e2f-0e60-4973-bfbb-bde56fc107e1}
BundleCachePath      : C:\ProgramData\Package Cache\{a111f0a4-679e-43e6-bdfe-25e176541c72}\vc_redist.arm64.exe
Architecture         : ARM64
Release              : 14
UninstallString      : "C:\ProgramData\Package Cache\{a111f0a4-679e-43e6-bdfe-25e176541c72}\vc_redist.arm64.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{a111f0a4-679e-43e6-bdfe-25e176541c72}\vc_redist.arm64.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall

Publisher            : Microsoft Corporation
Name                 : Visual C++ v14 Redistributable (x64)
Version              : 14.52.37029.0
ProductCode          : {be2c4202-8de2-4274-95c7-ef71b2bfdcad}
BundleCachePath      : C:\ProgramData\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe
Architecture         : x64
Release              : 14
UninstallString      : "C:\ProgramData\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe"  /uninstall
QuietUninstallString : "C:\ProgramData\Package Cache\{91ee571b-0e8a-4c65-9eaf-2e2f5fc60c00}\vc_redist.x64.exe" /uninstall /quiet
UninstallKey         : HKLM:\SOFTWARE\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall
```

## パラメーター

### オプションのパラメーター

* `Export` - `Supported` (既定値) は再頒布可能パッケージを返します。`All` を指定すると、「プログラムと機能」には通常表示されない Additional および Minimum Runtime も含まれます。

## 例

次のコマンドは、インストール済み再頒布可能パッケージの一覧を返します。

```powershell
Get-InstalledVcRedist
```

出力は特定のプロパティでフィルターできます。

```powershell
Get-InstalledVcRedist | Select Name, Version, ProductCode
```

![ローカル PC にインストールされた Microsoft Visual C++ 再頒布可能パッケージ](/images/installed-vcredist.png)

既定では Additional および Minimum Runtime はこの一覧に含まれません。`-Export All` で含めることができます。

```powershell
Get-InstalledVcRedist -Export All
```
