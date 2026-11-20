# MDT への再頒布可能パッケージのインポート

::: info
Microsoft Deployment Toolkit は Microsoft によるサポートが終了しています。VcRedist での MDT サポートはベストエフォートとなります。
:::

::: warning
VcRedist 5 の MDT コマンドは非推奨であり、今後のメジャー リリースで削除される可能性があります。
:::

参照イメージの一部として、または Microsoft Deployment Toolkit (MDT) ベースの展開ソリューションで Visual C++ 再頒布可能パッケージを使用するには、`Import-VcMdtApplication` を使って各パッケージを個別のアプリケーションとしてインポートします。各アプリケーションには、パッシブまたはサイレントのコマンド ライン、プラットフォーム サポート、および Visual C++ 再頒布可能パッケージがすでにインストールされているかを検出する `UninstallKey` が含まれます。

Visual C++ 再頒布可能パッケージは、`Get-VcList` でリリースとプロセッサ アーキテクチャをフィルターしてから `Save-VcRedist` および `Import-VcMdtApplication` に渡すことができます。各インストーラーのパスを格納する `Path` プロパティが含まれるため、`Save-VcRedist` の出力を渡す必要があります。

## パラメーター

### 必須パラメーター

* `VcList` - `Save-VcRedist` から取得した Visual C++ 再頒布可能パッケージの詳細を含む配列
* `MdtPath` - MDT 展開共有のローカル パスまたはネットワーク パス

### オプションのパラメーター

* `Silent` - 既定のパッシブ インストール コマンド ラインの代わりに、MDT アプリケーションのインストール コマンドを完全なサイレントに設定します。
* `Force` - 既存の Visual C++ 再頒布可能パッケージ アプリケーションを強制的に上書きします。
* `AppFolder` - Visual C++ 再頒布可能パッケージをサブフォルダーにインポートします。既定値は `VcRedists` です。
* `MdtDrive` - MDT 展開共有に割り当てるドライブ文字です。省略可能で、既定値は `DS001` です。
* `Publisher` - Visual C++ 再頒布可能パッケージのバンドルに割り当てる発行元です。省略可能で、既定値は `Microsoft` です。
* `Language` - Visual C++ 再頒布可能パッケージのバンドルに割り当てる言語です。既定値は `en-US` です。

## 例

サポート対象の `2012`、`2013`、`14` 再頒布可能パッケージを MDT 展開共有にインポートします。

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment
```

各再頒布可能パッケージは、展開を成功させるために必要なアプリケーション プロパティと共に、展開共有にインポートされます。

![MDT 共有にインポートされた Microsoft Visual C++ 再頒布可能パッケージのアプリケーション](/images/mdtvisualcapplications.png)

展開共有のフォルダー構造は次のようになります。

![展開共有の Application フォルダー内にある Visual C++ 再頒布可能パッケージ](/images/mdtvisualcapplicationsfolder.png)

既定ではパッシブ インストールのコマンド ライン引数が使用されます。MDT 展開共有にアプリケーションをインポートする際に、`-Silent` パラメーターで完全なサイレント インストールのコマンド ライン引数を指定できます。

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
