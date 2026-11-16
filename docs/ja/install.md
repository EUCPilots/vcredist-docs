# VcRedist のインストール

## PowerShell Gallery からインストールする

VcRedist モジュールは PowerShell Gallery に公開されており、こちらから入手できます: [VcRedist](https://www.powershellgallery.com/packages/VcRedist/)。次のコマンドで Gallery からモジュールをインストールできます。

VcRedist 5 には PowerShell 5.1 以降が必要です。

```powershell
Install-Module -Name VcRedist
Import-Module -Name VcRedist
```

### モジュールの更新

以前のバージョンのモジュールを Gallery からインストールしている場合は、`-Force` パラメーターを使って最新の更新プログラムをインストールできます。

```powershell
Install-Module -Name VcRedist -Force
```

## リポジトリから手動でインストールする

モジュールは [GitHub のソース リポジトリ](https://github.com/aaronparker/VcRedist)からダウンロードできます。`VcRedist` フォルダーにモジュールが含まれています。このフォルダーを PowerShell のモジュール パスのいずれかにインストールする必要があります。使用可能な PowerShell モジュール パスの一覧を確認するには、PowerShell コンソールで `$env:PSModulePath.split(';')` を実行します。

一般的な PowerShell モジュール パスは次のとおりです。

* 現在のユーザー: `%USERPROFILE%\Documents\WindowsPowerShell\Modules\`
* すべてのユーザー: `%ProgramFiles%\WindowsPowerShell\Modules\`
* OneDrive: `$env:OneDrive\Documents\WindowsPowerShell\Modules\`

リポジトリからインストールするには、次の手順を実行します。

1. `main` ブランチをワークステーションにダウンロードします。
2. VcRedist フォルダーの内容を、ワークステーション上の任意の PowerShell モジュール パスにコピーします。
3. `管理者として実行` オプションで PowerShell コンソールを開きます。
4. 環境に応じて、モジュール スクリプトを実行できる実行ポリシーを設定します。

インストールが完了したら、`Get-Module -ListAvailable VcRedist` を実行してモジュールが存在することを確認できます。モジュールを使用するには、次のコマンドで読み込みます。

```powershell
Import-Module -Name VcRedist
```
