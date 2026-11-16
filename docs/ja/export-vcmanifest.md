# マニフェストのエクスポート

`Export-VcManifest` は、選択した VcRedist マニフェストを `VisualCRedistributables.json` としてフォルダーに書き込みます。v5 マニフェストは `SchemaVersion`、`Updated`、`InstallOrder`、`Entries` を含むフラットなスキーマで、各エントリに `Supported` フラグがあります。マニフェストの取得元をローカル ファイルで上書きすることはできません。

## パラメーター

### 必須パラメーター

* `Path` - マニフェストを書き込む既存のディレクトリ

### オプションのパラメーター

* `Source` - `Auto` (既定値)、`Remote`、`Bundled` を選択します。`Auto` は、リモート マニフェストが使用できない場合、またはバンドル版より古い場合を除いて、リモート マニフェストを使用します。
* `Proxy`、`ProxyCredential` - リモート マニフェストの取得時に使用するプロキシを構成します。
* `WhatIf` - ファイルを書き込まずにエクスポートをプレビューする、PowerShell 共通パラメーターです。

## 例

VcRedist マニフェストを `C:\Temp` にエクスポートします。マニフェストは `C:\Temp\VisualCRedistributables.json` に出力されます。

```powershell
Export-VcManifest -Path C:\Temp
```

マニフェストをエクスポートし、サポート対象エントリを確認します。

```powershell
Export-VcManifest -Path C:\Temp
$Manifest = Get-Content -Path C:\Temp\VisualCRedistributables.json | ConvertFrom-Json
$Manifest.Entries | Where-Object Supported
```

ネットワーク要求を行わずにバンドル版マニフェストをエクスポートします。

```powershell
Export-VcManifest -Path C:\Temp -Source Bundled
```
