# VcRedist 一覧の取得

`Get-VcList` は VcRedist マニフェストのエントリを返します。既定では、リリース `14` のエントリと、x86、x64、ARM64 の各アーキテクチャを返します。ほかのリリースやアーキテクチャを選択するには、`-Release` と `-Architecture` を使用します。`-Release` でリリースを選択すると、サポート対象外のエントリが含まれることがあり、その場合はコマンドが警告を表示します。特別な要件がない限り、[Microsoft がサポートする再頒布可能パッケージ](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist)のみをインストールしてください。

既定では、マニフェストは VcRedist リポジトリから解決されます。リモート マニフェストが使用できない場合、またはバンドル版より古い場合は、バンドル版が使用されます。

## パラメーター

* `Release` - `14`、`2015`、`2017`、`2019` などのリリースを選択します。既定値は `14` です。選択したエントリがサポート対象外の場合があります。
* `Architecture` - `x86`、`x64`、`arm64` を選択します。既定では 3 つすべてが対象です。
* `Export` - `Supported` (既定値)、`Unsupported`、`All` のエントリを返します。
* `Source` - マニフェストの解決方法として `Auto` (既定値)、`Remote`、`Bundled` を選択します。
* `Proxy`、`ProxyCredential` - リモート マニフェストの取得に使用するプロキシを構成します。

`-Export` を指定しない場合、エントリは `-Release` および `-Architecture` でフィルターされますが、サポート状態ではフィルターされません。全リリースからサポート対象のエントリのみを取得するには、`-Export Supported` を使用します。

サポート対象外のエントリまたはすべてのエントリを返すには、`-Export Unsupported` または `-Export All` を使用します。これらのパラメーター セットは `-Release` や `-Architecture` と組み合わせられません。必要に応じて、出力を `Where-Object` でフィルターします。サポート対象外のエントリを返すと、コマンドは警告を表示します。

## 例

既定のサポート対象一覧を返します。

```powershell
Get-VcList
```

リリース 2017 と 2019 の x64 エントリを返します。

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
```

リリース 2015 のサポート対象外 x64 エントリを返します。結果がサポート対象外のため、コマンドは警告を表示します。

```powershell
Get-VcList -Release 2015 -Architecture x64
```

全リリースからサポート対象のエントリのみを返します。

```powershell
Get-VcList -Export Supported
```

マニフェストの全エントリを返し、x64 でフィルターします。

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

リリース 2008 と 2010 のサポート対象外 x64 エントリを返します。

```powershell
Get-VcList -Export Unsupported | Where-Object { $_.Release -in "2008", "2010" -and $_.Architecture -eq "x64" }
```

ネットワーク要求を行わず、バンドルされたマニフェストを使用します。

```powershell
Get-VcList -Source Bundled
```

エントリを `Install-VcRedist` または展開インポート関数に渡すには、まず `Save-VcRedist` にパイプします。インストーラーをダウンロードして検証し、各エントリに `Path` プロパティを追加します。
