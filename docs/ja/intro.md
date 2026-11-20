# はじめに

VcRedist は、[Microsoft Visual C++ 再頒布可能パッケージ](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist)のライフサイクルを管理する PowerShell モジュールです。

VcRedist は、ローカル インストール、ゴールド イメージへの展開、または Microsoft Configuration Manager や Microsoft Intune へのアプリケーションとしてのインポートに使用できる、サポート対象およびサポート対象外の再頒布可能パッケージをダウンロードします。パッシブ インストールとサイレント インストール、およびアンインストールをサポートします。MDT 統合はベストエフォートで引き続き利用できますが、コマンドは非推奨です。

![PowerShell Gallery のダウンロード数](https://img.shields.io/powershellgallery/dt/vcredist.svg?style=flat&logo=powershell&logoColor=white&labelColor=7e56c2&color=009485)

## 目的

Microsoft Visual C++ 再頒布可能パッケージは、物理 PC や仮想デスクトップなど、あらゆる Windows デスクトップ展開の中核となるコンポーネントです。さまざまなアプリケーションをサポートするために複数のバージョンが展開されることが多いため、展開ソリューションにインポートするか、ローカルにインストールする必要があります。このモジュールは、最新バージョンの再頒布可能パッケージの取得、展開、更新を簡素化することを目的としています。

## サポート対象とサポート対象外の再頒布可能パッケージ

このモジュールでは、各エントリに `Supported` フラグを持つ単一のマニフェストを使用します。既定の `Get-VcList` クエリはリリース `14` を返します。全リリースのサポート対象エントリのみを取得するには `-Export Supported` を使用し、Microsoft がサポートを終了したエントリを含めるには `-Export Unsupported` または `-Export All` を使用します。リリースを直接選択した場合も、サポート対象外のエントリが返されることがあり、その際は警告が表示されます。

Microsoft が一部の再頒布可能パッケージのサポートとセキュリティ更新プログラムの提供を終了している点に注意してください。サポート対象の再頒布可能パッケージの一覧は、こちらの [Microsoft Visual C++ 再頒布可能パッケージ](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist)で管理されています。サポート対象外の再頒布可能パッケージの展開は、自己責任で行ってください。

## マニフェストの取得元

既定では、`Get-VcList` は VcRedist リポジトリから入手できる最新のマニフェストを使用し、リモート マニフェストが使用できない場合、またはバンドル版より古い場合は、バンドル版にフォールバックします。リモート マニフェストを必須にするには `-Source Remote` を、ネットワーク要求を避けるには `-Source Bundled` を使用します。モジュール バージョン 4 ではマニフェストの更新を受け取れません。最新のマニフェスト データを取得するには VcRedist 5 に更新してください。
