# 再頒布可能パッケージのインストール

[クイック インストール オプション](https://vcredist.com/quick/)も利用できますが、ローカル コンピューターに Visual C++ 再頒布可能パッケージをカスタム インストールする場合は、`Install-VcRedist` を使用します。この関数は、`Get-VcList` から渡された Visual C++ 再頒布可能パッケージの配列を受け取り、`Save-VcRedist` でローカル パスにダウンロードしたパッケージをインストールします。各インストーラーのパスを格納する `Path` プロパティが含まれるため、`Save-VcRedist` の出力を渡す必要があります。

`Install-VcRedist` の実行には、Windows 上で管理者特権に昇格した PowerShell セッションが必要です。各インストーラーの Microsoft Authenticode 署名を検証し、マニフェストで定義された順序でリリースをインストールして、インストーラーの終了コードを確認します。既定ではパッシブ インストールを行います。サイレント インストールには `-Silent` を使用します。

Visual C++ 再頒布可能パッケージのインストール後、インストール済みパッケージの一覧が `Get-InstalledVcRedist` からパイプラインに返されます。

## パラメーター

### 必須パラメーター

* `VcList` - `Save-VcRedist` から取得した Visual C++ 再頒布可能パッケージの詳細を含む配列

### オプションのパラメーター

* `Silent` - マニフェストのパッシブ インストール引数の代わりに、サイレント インストール引数を使用します。
* `Force` - すでにインストール済みのエントリを再インストールし、現在の OS で推奨されていないパッケージ アーキテクチャでもインストールできるようにします。ARM64 では、x64 インストーラーを強制的にインストールできます。

## 例

次のコマンドは、`Save-VcRedist` で `C:\Temp\VcRedist` にダウンロードした、既定のサポート対象 Visual C++ 再頒布可能パッケージをインストールします。

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Install-VcRedist -VcList $VcList
```

出力を次のコマンドにパイプすることで、コマンドを簡潔に記述できます。

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist | Install-VcRedist
```

再頒布可能パッケージのインストール時に、`-Silent` パラメーターで完全なサイレント インストールのコマンド ライン引数を指定できます。

```powershell
Install-VcRedist -VcList (Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist) -Silent
```

![ローカル PC にインストールされた Microsoft Visual C++ 再頒布可能パッケージ](/images/visualcprograms.png)
