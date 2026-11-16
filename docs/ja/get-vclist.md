# VcRedist 一覧の取得

`Get-VcList` は VcRedist マニフェストのエントリを返します。既定では、リリース `14` のサポート対象エントリと、x86、x64、ARM64 の各アーキテクチャを返します。ほかのサポート対象リリースやアーキテクチャを選択するには、`-Release` と `-Architecture` を使用します。特別な要件がない限り、[Microsoft がサポートする再頒布可能パッケージ](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist)のみをインストールしてください。

既定では、マニフェストは VcRedist リポジトリから解決されます。リモート マニフェストが使用できない場合、またはバンドル版より古い場合は、バンドル版が使用されます。

## パラメーター

* `Release` - `14`、`2017`、`2019` など、サポート対象のリリースを選択します。既定値は `14` です。
* `Architecture` - `x86`、`x64`、`arm64` を選択します。既定では 3 つすべてが対象です。
* `Export` - `Supported` (既定値)、`Unsupported`、`All` のエントリを返します。
* `Source` - マニフェストの解決方法として `Auto` (既定値)、`Remote`、`Bundled` を選択します。
* `Proxy`、`ProxyCredential` - リモート マニフェストの取得に使用するプロキシを構成します。

`-Export` を指定しない場合、エントリは `-Release` および `-Architecture` でフィルターされます。`2015` はサポート対象外になったため、通常のサポート対象リリースのクエリには含まれません。

サポート対象外のエントリまたはすべてのエントリを返すには、`-Export Unsupported` または `-Export All` を使用します。これらのパラメーター セットは `-Release` や `-Architecture` と組み合わせられません。必要に応じて、出力を `Where-Object` でフィルターします。サポート対象外のエントリを返すと、コマンドは警告を表示します。

## 例

既定のサポート対象一覧を返します。

```powershell
Get-VcList
```

リリース 2017 と 2019 のサポート対象 x64 エントリを返します。

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
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
