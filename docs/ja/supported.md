# サポート対象プラットフォーム

## Windows のバージョン

VcRedist は Windows システムを対象としています。再頒布可能パッケージのインストーラーは、各パッケージについて Microsoft が指定する Windows のバージョンをサポートします。VcRedist は、x64 および ARM64 を含む現在の Windows クライアントおよびサーバー リリースでテスト済みです。

## PowerShell エディション

VcRedist 5 には PowerShell 5.1 以降が必要です。v5 リリースは、x64 および ARM64 の Windows 上で Windows PowerShell 5.1 と PowerShell 7 を使用してテストされています。

ローカルのインベントリ取得、インストール、アンインストールには Windows が必要です。Intune 統合には Windows PowerShell 5.1 と `IntuneWin32App` モジュールが必要です。Configuration Manager と MDT の統合には、それぞれの Windows 管理コンポーネントが必要です。MDT コマンドは非推奨であり、ベストエフォートでサポートされます。
