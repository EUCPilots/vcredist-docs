# 再頒布可能パッケージのダウンロード

Visual C++ 再頒布可能パッケージをダウンロードするには、`Get-VcList` のエントリを `Save-VcRedist` にパイプします。必要に応じて保存先フォルダーが作成されます。インストーラーは `Release\Version\Architecture` の下に保存され、有効な既存インストーラーは再利用されます。

ダウンロードには HTTPS と、許可された Microsoft ダウンロード ホストを使用する必要があります。既定では、既存のインストーラーも含め、各インストーラーに有効な Microsoft Authenticode 署名が必要です。このコマンドは、`Install-VcRedist` または展開インポート関数で使用するインストーラーの `Path` を含む各エントリを返します。

::: info
既存のインストーラーのファイル バージョンがマニフェストのバージョン以上であれば再利用されます。ただし、署名の検証は引き続き行われます。
:::

## パラメーター

### 必須パラメーター

* `VcList` - `Get-VcList` のエントリ

### オプションのパラメーター

* `Path` - 保存先フォルダー。既定値は現在のディレクトリです。
* `Proxy` - Visual C++ 再頒布可能パッケージのダウンロードに使用するプロキシ サーバーを指定します。
* `ProxyCredential` - プロキシ サーバーで認証が必要な場合、資格情報を PSCredential オブジェクトとして指定します。
* `ShowProgress` - ダウンロードの進行状況を表示します。
* `UserAgent` - 要求のユーザー エージェントを設定します。
* `SkipAuthenticodeValidation` - 署名の確認を省略します。検証を回避する明確な理由がある場合にのみ使用してください。
* `WhatIf` - 変更を加えずに、フォルダー作成とダウンロードをプレビューします。

## 例

既定の再頒布可能パッケージ一覧を `C:\Temp\VcRedist` にダウンロードするには、次のコマンドを使用します。

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
```

再頒布可能パッケージは保存先フォルダーにダウンロードされます。

![ローカル PC にインストールされた Microsoft Visual C++ 再頒布可能パッケージ](/images/vcredist-folder.png)

サポート対象の `2013` および `2019` x86 Visual C++ 再頒布可能パッケージを `Save-VcRedist` に渡し、`C:\Redist` にダウンロードします。

```powershell
$VcList = Get-VcList -Release 2013, 2019 -Architecture x86
Save-VcRedist -VcList $VcList -Path C:\Redist
```

`2012`、`2013`、`2019` の Visual C++ 再頒布可能パッケージを `C:\Redist` にダウンロードします。

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist
```

プロキシ サーバー `proxy.domain.local` を使用して、`2012`、`2013`、`2019` の Visual C++ 再頒布可能パッケージを `C:\Redist` にダウンロードします。

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist -Proxy proxy.domain.local
```
