# MDT の再頒布可能パッケージの更新

::: warning
VcRedist 5 の MDT コマンドは非推奨であり、今後のメジャー リリースで削除される可能性があります。サポートはベストエフォートです。
:::

`Update-VcMdtApplication` は、`Import-VcMdtApplication` で Microsoft Deployment Toolkit にインポートした Visual C++ 再頒布可能パッケージを更新します。Visual C++ 再頒布可能パッケージの更新 (通常は既存バージョンへの更新) がリリースされると、既存アプリケーションの更新が必要になる場合があります。`Import-VcMdtApplication` の `-Force` パラメーターを使用すると、既存アプリケーションを削除して再インポートします。一方、`Update-VcMdtApplication` は既存アプリケーションのプロパティを更新し、アプリケーション GUID を維持します。

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

完全なサイレント インストールのコマンド ラインを使い、MDT 展開共有内の `2012`、`2013`、`14` 再頒布可能パッケージを更新します。

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Update-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
