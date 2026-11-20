# MDT の再頒布可能パッケージ バンドルの更新

::: warning
VcRedist 5 の MDT コマンドは非推奨であり、今後のメジャー リリースで削除される可能性があります。サポートはベストエフォートです。
:::

MDT 展開内の Visual C++ 再頒布可能パッケージ バンドルについて、共有内のアプリケーションに合わせて更新する必要がある場合、`Update-VcMdtBundle` は展開共有をスキャンし、既存バンドルの依存関係を現在の Visual C++ 再頒布可能パッケージ アプリケーションに置き換えます。

バンドルの Version プロパティは現在の日付に更新されるため、最終更新日を簡単に確認できます。

## パラメーター

### 必須パラメーター

* `MdtPath` - MDT 展開共有のローカル パスまたはネットワーク パス

### オプションのパラメーター

* `AppFolder` - サブフォルダー内の Visual C++ 再頒布可能パッケージ バンドルを更新します。既定値は `VcRedists` です。
* `MdtDrive` - MDT 展開共有に割り当てるドライブ文字です。省略可能で、既定値は `DS001` です。
* `Publisher` - Visual C++ 再頒布可能パッケージのバンドルに割り当てる発行元です。省略可能で、既定値は `Microsoft` です。
* `BundleName` - Visual C++ 再頒布可能パッケージのバンドルに割り当てる短い名前です。省略可能で、既定値は `Visual C++ Redistributables` です。
* `Language` - 既定値は `en-US` です。

## 例

対象の展開共有でバンドルを更新するには、`Update-VcMdtBundle` を実行します。この関数は既定のアプリケーション フォルダー (VcRedists) にある Visual C++ 再頒布可能パッケージを検索し、古い順に各アプリケーションを依存関係として既存のバンドルを更新します。

```powershell
Update-VcMdtBundle -MdtPath \\server\deployment
```
