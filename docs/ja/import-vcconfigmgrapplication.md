# ConfigMgr への再頒布可能パッケージのインポート

Microsoft Configuration Manager で Visual C++ 再頒布可能パッケージをインストールするには、`Import-VcConfigMgrApplication` を使用します。Visual C++ 再頒布可能パッケージごとに、アプリケーションと単一の展開の種類を含む個別のアプリケーションとしてインポートします。

Visual C++ 再頒布可能パッケージは、`Get-VcList` でリリースとプロセッサ アーキテクチャをフィルターしてから `Save-VcRedist` および `Import-VcConfigMgrApplication` に渡すことができます。各インストーラーのパスを格納する `Path` プロパティが含まれるため、`Save-VcRedist` の出力を渡す必要があります。

## パラメーター

### 必須パラメーター

* `VcList` - `Save-VcRedist` から取得した Visual C++ 再頒布可能パッケージの詳細を含む配列
* `CMPath` - Visual C++ 再頒布可能パッケージの配布元となる UNC パスを指定します。
* `SMSSiteCode` - ConfigMgr アプリケーション作成用のサイト コードを指定します。

### オプションのパラメーター

* `Silent` - 既定のパッシブ コマンドの代わりに、サイレント インストール コマンドを使用します。
* `AppFolder` - Visual C++ 再頒布可能パッケージをサブフォルダーにインポートします。既定値は `VcRedists` です。
* `NoCopy` - ダウンロードしたインストーラーを指定されたコンテンツ パスにコピーしません。
* `Publisher` - Visual C++ 再頒布可能パッケージのアプリケーションに割り当てる発行元です。省略可能で、既定値は `Microsoft` です。
* `Keyword` - Visual C++ 再頒布可能パッケージのアプリケーションに割り当てるキーワードです。省略可能で、既定値は `Visual C++ Redistributables` です。
* `WhatIf` - ConfigMgr の変更を適用せずにプレビューします。
* `Language` - Visual C++ 再頒布可能パッケージのアプリケーションに割り当てる言語です。既定値は `en-US` です。

## 例

Visual C++ 再頒布可能パッケージを単一の展開の種類を持つアプリケーションとして ConfigMgr にインポートします。ダウンロードしたインストーラーはネットワーク パスにコピーされます。

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB
```

既定ではパッシブ インストールのコマンド ライン引数が使用されます。Configuration Manager にアプリケーションをインポートする際に、`-Silent` パラメーターで完全なサイレント インストールのコマンド ライン引数を指定できます。

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB -Silent
```

![ConfigMgr にインポートされた Microsoft Visual C++ 再頒布可能パッケージのアプリケーション](/images/vcredistconfigmgr.png)
