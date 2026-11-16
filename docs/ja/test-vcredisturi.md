# 再頒布可能パッケージ URI のテスト

`Test-VcRedistUri` は、各 URI に HEAD 要求を送信して Visual C++ 再頒布可能パッケージのダウンロード URI を検証します。`Save-VcRedist` でダウンロードする前に、ダウンロード リンクにアクセスできることを確認するために使用します。

テスト対象は、モジュールで許可された Microsoft ダウンロード ホスト上の HTTPS URL のみです。それ以外の URL は拒否されます。

## パラメーター

### 必須パラメーター

* `VcList` - `Get-VcList` から取得した Visual C++ 再頒布可能パッケージの詳細を含む配列

### オプションのパラメーター

* `Proxy` - 要求に使用するプロキシ サーバーを指定します。
* `ProxyCredential` - プロキシ サーバーの資格情報を指定します。
* `ShowProgress` - ダウンロードの進行状況を表示します。既定では非表示です。

## 例

サポート対象の再頒布可能パッケージのダウンロード URI をすべてテストします。

```powershell
Get-VcList | Test-VcRedistUri
```

出力例:

```powershell
Result       : True
Release      : 14
Architecture : x64
Version      : 14.52.37029.0
URI          : https://aka.ms/vc14/vc_redist.x64.exe
```

特定のリリースとアーキテクチャの URI をテストします。

```powershell
Get-VcList -Release 2019 -Architecture x64 | Test-VcRedistUri
```

サポート対象外バージョンを含め、すべての再頒布可能パッケージの URI をテストします。

```powershell
Get-VcList -Export All | Test-VcRedistUri
```

プロキシ サーバー経由で URI をテストします。

```powershell
Get-VcList | Test-VcRedistUri -Proxy "http://proxy.domain.local"
```
