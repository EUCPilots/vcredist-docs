# クイック インストール

VcRedist モジュールは、主に数百台から数千台の Windows PC を対象とする企業のオペレーティング システム展開で使用しますが、現在のシステムにサポート対象の Visual C++ 再頒布可能パッケージをすばやくインストールすることもできます。

## Visual C++ 再頒布可能パッケージをインストールする

1. まず、PowerShell を管理者として実行していることを確認します。スタート メニューで PowerShell を探し、ショートカットを右クリックして `管理者として実行` を選択します。
2. PowerShell でインストールします。

::: tip
安全性を確認するため、次のコマンドを実行する前に [https://vcredist.com/install.ps1](https://vcredist.com/install.ps1) を確認してください。このスクリプトが安全であることは把握していますが、インターネットから取得した、よく知らないスクリプトについては、セキュリティと内容を確認してください。以下のコマンドはリモートの PowerShell スクリプトをダウンロードし、コンピューター上で実行します。
:::

次のコマンドをコピーします。

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://vcredist.com/install.ps1'))
```

3. 管理者として実行した PowerShell プロンプトにコードを貼り付けます。
4. コマンドが実行されるまで数秒待ちます。スクリプトでエラーが発生しなければ、最新の Visual C++ 再頒布可能パッケージがインストールされているはずです。

次のような出力が表示されます。

```powershell
Checking whether module is installed: VcRedist.
Installing module: VcRedist 5.0.4-beta5.
Saving VcRedists to path: C:\Users\Aaron\AppData\Local\Temp\VcRedist.
Downloading and installing supported Microsoft Visual C++ Redistributables.
Installed Visual C++ Redistributables:

Name                                                 Release Architecture Version
----                                                 ------- ------------ -------
Visual C++ v14 Redistributable (x86)                 14      x86          14.52.37029.0
Visual C++ v14 Redistributable (x64)                 14      x64          14.52.37029.0
Visual C++ v14 Redistributable (Arm64)               14      ARM64        14.52.37029.0
```

コマンドが完了すると、次のように Visual C++ 再頒布可能パッケージがローカル システムにインストールされていることを確認できます。

![ローカル PC にインストールされた Microsoft Visual C++ 再頒布可能パッケージ](/images/installed2022.png)
