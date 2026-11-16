# 変更履歴

## 5.0.4-beta5

* マニフェストで定義されたインストール順序を追加し、マニフェストのリリース範囲を検証し、エクスポート時にインストール順序を保持
* 宣言された順序で再頒布可能パッケージをインストールし、インストーラーの起動前にリリースを検証し、ARM64 で x64 のインストールを強制する機能をサポート
* ARM64 向けのマニフェスト メンテナンスを更新し、手動でのクリーン アンインストール/ダウンロード更新ワークフローを追加
* 読み取り専用のモジュール検証、リリース PR の準備、承認済み Gallery 公開を分離
* Windows PowerShell 5.1 と PowerShell 7 を使用し、x64 および ARM64 でリリース成果物をテスト
* リリースのバージョン、タグ、ドキュメント、Gallery パッケージの内容を検証し、安全な公開再試行をサポート
* モジュールのテスト検出とカスタム アナライザーのキーワード検出を修正

### 破壊的変更

* PowerShell の最小バージョンが 5.1 になりました。Web 要求では TLS 1.2 が強制されます。
* マニフェストはフラットなスキーマ `{ SchemaVersion, Updated, Entries[] }` になりました。各エントリには `Supported` ブール値が含まれます。
* `Get-VcList` と `Export-VcManifest` から `-Path` パラメーターを削除しました。マニフェストの取得元を上書きすることはできません。
* エクスポートされる `$VcManifest` 変数を削除しました。
* `Get-VcList -Export` は `Supported`、`Unsupported`、`All` でフィルターします。既定値は `Supported` です。
* `Save-VcRedist` と `Install-VcRedist` では、許可された Microsoft ホストから HTTPS でダウンロードされ、有効な Microsoft Authenticode 署名を持つインストーラーが必要になりました。
* モジュール v4 ではマニフェストの更新を受け取れなくなりました。

### 新機能と改善

* マニフェストのアーキテクチャ対応検証とフィルター処理を追加しました。展開統合全体でネイティブ AMD64 と ARM64 の処理にも対応します。
* HTTPS とリダイレクト検証、プロキシ処理、TLS 動作の改善によって Web 要求を強化しました。
* 引数の引用符処理、タイムアウト、出力上限、終了コード処理によってプロセス実行を改善しました。
* インストーラー パスの検証を追加し、インストール済みソフトウェアの検出とダウンロード先の処理を改善しました。
* アーキテクチャ対応の要件、検出規則、`-WhatIf` サポート、エラー処理によって Intune、ConfigMgr、MDT のインポートを改善しました。
* CI テストの選択とマニフェスト更新ワークフローを更新し、Codecov の構成を削除しました。
* 翻訳済みのヘルプ ドキュメントを追加し、テスト範囲を拡大しました。
* マニフェストはリポジトリ (開発中は `v5` ブランチ) から読み込まれ、失敗時はバンドル版マニフェストにフォールバックします。`-Source Auto|Remote|Bundled` を使用します。リモート版が古い場合はバンドル版マニフェストが使用されます。
* コンテンツを取得またはダウンロードするすべての関数に `-Proxy` と `-ProxyCredential` を追加しました。
* `Install-VcRedist` と `Uninstall-VcRedist` でインストーラーの終了コードを確認するようになりました。`Uninstall-VcRedist` はアンインストール コマンド内の環境変数を展開します。
* `Invoke-Process` は想定外の終了コードが発生した場合に失敗するようになりました。
* `Import-VcIntuneApplication` と `Export-VcManifest` が `-WhatIf` をサポートします。
* `Import-VcIntuneApplication -ImportAsUpdate` は、各パッケージの検出対象ファイルに基づいて古いランタイムのファイル バージョン要件を追加します (#204)。
* 2012 および 2013 の再頒布可能パッケージに対して、バンドル版の検出ファイル名を修正しました。
* `Save-VcRedist` は `-Path` フォルダーが存在しない場合に作成し、作成できない場合はダウンロード前に失敗するようになりました (#219)。
* Web 要求では Chrome ブラウザーのユーザー エージェントの代わりに `VcRedist/<version> (...)` ユーザー エージェントを使用します。
* `Import-VcIntuneApplication` の要件規則のアーキテクチャを修正しました。`All` は無効になり、x86 パッケージでは `x64x86`、ARM64 パッケージでは `arm64` を使用します (#207)。
* `New-VcMdtBundle` と `Update-VcMdtBundle` の `-WhatIf` 対象、および `Import-VcConfigMgrApplication` での ConfigMgr の場所復元を修正しました。
* MDT テストでスタブとモックを使用するようになりました。`tests/Install-Mdt.ps1` を削除しました。

### 非推奨

* MDT 関数 (`Import-VcMdtApplication`、`New-VcMdtBundle`、`Update-VcMdtApplication`、`Update-VcMdtBundle`) は非推奨であることを警告します。

## 4.1.526

* 2022 Visual C++ 再頒布可能パッケージを最新の v14 に更新
* <Badge type="danger" text="破壊的変更" /> 最新バージョンを反映するため、`2022` のリリース プロパティを `14` に変更
* モジュール アイコンを新しい Visual Studio 2026 アイコンに更新

## 4.1.523

* `x64` 再頒布可能パッケージのアーキテクチャ検出フォールバックを修正
* `ARM64` 再頒布可能パッケージのアーキテクチャ検出フォールバックを追加

## 4.1.522

* VcRedist `2022` を `14.44.35211.0` に更新

## 4.1.517

* `Import-VcIntuneApplication` を更新し、インポートした Intune パッケージにファイル検出情報を追加
* `Import-VcIntuneApplication` を更新し、インポート前に一致する Visual C++ 再頒布可能パッケージが Intune にあるか確認するように変更。一致するパッケージがない場合、またはバージョン更新が必要な場合は、Visual C++ 再頒布可能パッケージをインポート
* `Import-VcIntuneApplication` でインポートした Visual C++ 再頒布可能パッケージの一覧を返す新しい関数 `Get-VcIntuneApplication` を追加
* `Import-VcIntuneApplication` でインポートした Visual C++ 再頒布可能パッケージを削除する新しい関数 `Remove-VcIntuneApplication` を追加

## 4.1.505

* VcRedist `2022` `14.44.35208.0` の ARM64 プロパティを修正

## 4.1.504

* VcRedist `2022` を `14.44.35208.0` に更新

## 4.1.503

* VcRedist `2022` を `14.44.35112.1` に更新

## 4.1.502

* VcRedist `2022` を `14.42.34438.0` に更新

## 4.1.501

* VcRedist `2013` x86 の製品コードを修正

## 4.1.500

* VcRedist `2022` を `14.42.34433.0` に更新

## 4.1.499

* VcRedist `2022` を `14.40.33816.0` に更新
* VcRedist `2019` を `14.29.30156.0` に更新
* VcRedist `2017` を `14.16.27052.0` に更新

## 4.1.498

* <Badge type="danger" text="破壊的変更" /> `2012` と `2013` のリリースを「サポート対象外の再頒布可能パッケージ」一覧に移動しました。サポート対象リリースの詳細については、[Microsoft Visual C++ 再頒布可能パッケージの最新のサポート対象ダウンロード](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist?view=msvc-170)を参照してください。
* `2022` リリースに `ARM64` アーキテクチャを追加
* 内部関数 `New-MdtDrive` の出力に関する問題を修正

## 4.1.497

* 再頒布可能パッケージ `2022` を `14.40.33810.0` に更新

## 4.1.496

* `Save-VcRedist` の出力を `Import-VcIntuneApplication` に渡すと受け付けられない問題を修正 [#149](https://github.com/aaronparker/vcredist/issues/149)

## 4.1.495

* 再頒布可能パッケージ `2022` を `14.38.33135.0` に更新

## 4.1.494

* MDT にインポートした再頒布可能パッケージがインストールされない問題を修正
* 再頒布可能パッケージを MDT 展開共有にインポートする際の問題を修正
* 再頒布可能パッケージ `2019` を `14.29.30153.0` に更新
* 再頒布可能パッケージ `2022` を `14.38.33130.0` に更新

## 4.1.493

* `Import-VcConfigMgrApplication` の問題を修正 [#142](https://github.com/aaronparker/vcredist/issues/142) [#96](https://github.com/aaronparker/vcredist/issues/96)

## 4.1.482

* Intune で想定される値が変更されたため、`MinimumRequiredOperatingSystem` の既定値を `W10_1809` に変更 [#132](https://github.com/aaronparker/vcredist/issues/132)

## 4.1.480

* <Badge type="danger" text="破壊的変更" /> `Install-VcRedist`、`Import-VcConfigMgrApplication`、`Import-VcMdtApplication`、`Import-VcIntuneApplication` を更新し、`Save-VcRedist` の出力を使用するように変更。これにより `-Path` パラメーターが不要に [#123](https://github.com/aaronparker/vcredist/discussions/123)
* <Badge type="danger" text="破壊的変更" /> Microsoft からダウンロードできなくなったため、次の再頒布可能パッケージをマニフェストから削除 [#114](https://github.com/aaronparker/vcredist/issues/114):

  * Visual C++ 2005 SP1 Redistributable Package 8.0.56336
  * Visual C++ 2005 SP1 Redistributable Package 8.0.50727.42
  * Visual C++ 2008 Redistributable Package 9.0.21022
  * Visual C++ 2008 Redistributable Package 9.0.21022.218
  * Visual C++ 2008 Redistributable Package 9.0.30729
  * Visual C++ 2008 Redistributable Package 9.0.21022

## 4.0.461

* VcRedist 2022 バージョン `14.34.31938.0` に更新

## 4.0.460

* 主に追加テストとコード カバレッジ レポートの導入によるコード改善を実施
* ルーチンの簡素化、エラー発生時の一貫したスロー動作など、全般的なコードを改善
* `Uninstall-VcRedist` の出力を変更し、アンインストール結果のステータス コードを返すように変更
* `Export-VcManifest` の出力を文字列ではなく `System.IO.FileSystemInfo` オブジェクトに変更
* `Get-InstalledVcRedist` が既定でインストール済み再頒布可能パッケージのみをエクスポートしない問題を修正
* 関数の目的により合致するよう、`Test-VcRedistDownload` を `Test-VcRedistUri` に名称変更
* Visual C++ 再頒布可能パッケージのマニフェストで `Download` プロパティを `URI` に変更
* Visual C++ 再頒布可能パッケージのマニフェストで `noreboot` を `norestart` と誤って指定していたインストール コマンド ラインを修正
* MDT 展開共有へのドライブ マッピング作成時に内部検証を追加
* 使用されていない、または重要な機能を提供していないプライベート関数を削除

## 3.0.338

* VcRedist 2022 バージョン `14.34.31931.0` に更新
* `Test-VcRedistDownload` を追加。`Get-VcList` から渡された既存 VcRedist のダウンロード URL が利用可能かどうかをテスト
* `Update-VcMdtApplication` で新しいバージョン プロパティを既存アプリケーションに正しく更新できない問題を修正

## 3.0.337

* VcRedist 2022 バージョン `14.32.31332.0` に更新

## 3.0.336

* VcRedist 2022 バージョン `14.32.31326.0` に更新

## 3.0.335

* Visual C++ 再頒布可能パッケージを対象の Microsoft Intune テナントにインポートする `Import-VcIntuneApplication` を追加。このリリースでは、`Import-VcIntuneApplication` によるアプリケーションへの割り当て追加はサポートされません。この関数は Intune アプリケーション オブジェクトを返します。`IntuneWin32App` の `Add-IntuneWin32AppAssignmentAllDevices` 関数を使用して割り当てを追加できます。
* プライベート関数 `New-TemporaryFolder` を追加
* 新しい関数のテストを更新
* `Import-VcIntuneApplication` のドキュメントを更新

## 3.0.320

* VcRedist 2022 バージョン `14.31.31103.0` に更新

## 3.0.315

* VcRedist 2022 バージョン `14.30.30708.0` に更新
* VcRedist 2019 バージョン `14.29.30139.0` に更新

## 3.0.307

* オンライン ヘルプ ページを [https://vcredist.com/](https://vcredist.com/) に更新

## 3.0.302

* メンテナンス リリース。PSScriptAnalyzer によって特定された問題に対処し、コード スタイルを改善

## 3.0.292

* バージョン `14.30.30704.0` の Visual C++ 再頒布可能パッケージ for Visual Studio 2022 をサポート
* `Visual C++ 2010 Service Pack 1 Redistributable Package MFC Security Update` をサポート対象外の再頒布可能パッケージ一覧に移動

## 3.0.281

* VcRedist 2019 バージョン `14.29.30135.0` に更新

## 3.0.273

* VcRedist 2019 バージョン `14.29.30133.0` に更新
* `Import-VcConfigMgrApplication` で `String was not recognized as a valid DateTime` エラーが発生する問題を修正。アプリケーションのインポート時に、関数が現在のセッションの短い日付/時刻形式を使用するようになりました。
* バンドルの作成または更新時に現在のセッションの短い日付/時刻形式を使用するよう、`New-VcMdtBundle` と `Update-VcMdtBundle` を更新

## 3.0.271

* VcRedist 2019 バージョン `14.29.30040.0` に更新

## 3.0.263

* VcRedist 2019 バージョン `14.29.30037.0` に更新
* platyPS を使用した MAML ベースの外部ヘルプを使うようモジュールを更新し、ヘルプ コンテンツを更新しやすくしました。
* さまざまな関数全体にわたる全般的なコード改善
* ドキュメント サイトの更新に合わせてモジュールを更新

## 3.0.255

* VcRedist 2019 `14.28.29914.0` の VcRedist マニフェストを更新
* `Save-VcRedist` の出力に、ダウンロードした VcRedist のパスを含む `Path` プロパティを追加

## 3.0.251

* 重要: このリリースでは Visual C++ 再頒布可能パッケージ 2008 をサポート対象外の一覧に移動するため、`Get-VcList` では既定で返されなくなります。[サポート対象およびサポート対象外の再頒布可能パッケージ一覧の取得方法](https://vcredist.com/get-vclist.html)に関するドキュメントを参照してください。
* `Install-VcRedist` に再頒布可能パッケージ一覧をパイプライン経由で渡した際の問題を修正 [#77](https://github.com/aaronparker/VcRedist/issues/77)
* `Save-VcRedist` を 2 回目に実行したとき、再頒布可能パッケージの一覧をパイプラインに返せない問題を修正

## 3.0.243

* サポート対象外の Visual C++ 再頒布可能パッケージをエクスポートすると `Get-VcList` が失敗する問題を修正
* `Install-VcRedist` に渡された Visual C++ 再頒布可能パッケージの一覧をバージョン番号で並べ替え、古いものから順にインストールするよう変更
* 404 を返す Visual C++ 再頒布可能パッケージ URL をダウンロードしようとしても `Save-VcRedist` がエラーをスローせず、残りのダウンロードを続行するように更新。ダウンロードできなくなった再頒布可能パッケージについては[既知の問題](https://vcredist.com/known-issues.html)を参照してください。
* 対象パスに再頒布可能パッケージのインストーラーがない場合でも `Install-VcRedist` がエラーをスローせず、残りをインストールするように更新。これにより、`Save-VcRedist` で特定の再頒布可能パッケージがダウンロードされなくても、インストール処理を続行できます。
* パイプラインを正しくサポートするよう `Uninstall-VcRedist` を更新。`Get-InstalledVcRedist | Uninstall-VcRedist` などのコマンドが使用可能になりました。

## 3.0.238

* 破壊的変更の導入に伴い、メジャー バージョンを 3 に更新
* VcRedist のダウンロード時および MDT または ConfigMgr へのインポート時に使用されるフォルダー構造を変更。構造は `Release\Version\Architecture` になりました。例: `2019\14.28.29913.0\x64`。この変更により、VcRedist インストーラーを ConfigMgr と Microsoft Intune に個別のアプリケーション バージョンとしてインポートし、以前のバージョンを置き換えて対象 PC をアップグレードできるようになりました。
* `Import-VcMdtApplication` を更新し、新しいフォルダー構造と命名規則で VcRedist アプリケーションをインポートするよう変更。アプリケーション名は `Visual C++ Redistributable Release Architecture Version` の形式です。例: `Visual C++ Redistributable 2019 x86 14.28.29913.0`
* `Import-VcConfigMgrApplication` で新しいフォルダー構造と命名規則を使って VcRedist アプリケーションをインポートする変更を検証。アプリケーション名は `Visual C++ Redistributable Release Architecture Version` の形式です。例: `Visual C++ Redistributable 2019 x86 14.28.29913.0`
* robocopy 経由で VcRedist セットアップ実行可能ファイルを ConfigMgr 展開共有にコピーした際、対象ファイルのコピーに成功していてもエラーが報告される `Import-VcConfigMgrApplication` の問題を修正。問題: [#63](https://github.com/aaronparker/VcRedist/issues/63)
* `Import-VcConfigMgrApplication` を更新し、`Save-VcRedist` で保存した VcRedist ダウンロード フォルダー全体ではなく、セットアップ実行可能ファイルを個別にコピーするよう変更。これにより、各バージョンに必要なコンテンツのみで個別のインストーラーをインポートできます。
* `Invoke-WebRequest` がダウンロード進行状況を表示している間はダウンロード速度が低下するため、`-Verbose` パラメーター使用時に進行状況を抑制する `-NoProgress` パラメーターを `Save-VcRedist` に追加
* さまざまな関数のインライン ヘルプを更新
* 堅牢性、エラー チェック、スペルを含む各種コードを整理

## 2.0.231

* VcRedist 2019 `14.28.29913.0` の VcRedist マニフェストを更新
* 32 ビットまたは 64 ビットのレジストリ キー検出方法を追加するため、VcRedist マニフェストに `UninstallKey` プロパティを追加
* アプリケーションの検出方法 (ConfigMgr、Intune など) の判定を支援するため、`Get-InstalledVcRedist` に `UninstallKey` を追加
* `Import-VcConfigMgrApplication` を次のように更新:
  * アプリケーション名を `Visual C++ Redistributable 2010 x64 10.0.40219.325` の形式に更新
  * 対象レジストリ キー (正しい 32 ビットまたは 64 ビット レジストリ内) を検出するようアプリケーション検出方法を更新。問題に対応: [#58](https://github.com/aaronparker/VcRedist/issues/58)
  * ConfigMgr 展開共有にコンテンツをコピーせず VcRedist アプリケーションをインポートできる `-NoCopy` パラメーターを追加
* コードとスペルを各種整理

## 2.0.218

* VcRedist `2019` を `14.28.29325.2` に更新
* `Save-VcRedist` がダウンロードした VcRedist の詳細をパイプラインに返さない問題を修正
* `Get-FileMetadata` 経由で VcRedist インストーラーのデジタル署名/証明書情報を返すプライベート関数 `Get-DigitalSignature` を追加

## 2.0.214

* VcRedist `2019` を `14.27.29112.0` に更新
* VcRedist `2017` を `14.16.27033.0` に更新
* ROBOCOPY でパス内のスペースをサポートするよう `Import-VcConfigMgrApplication` を更新
* `Master` ブランチを `Main` に名称変更

## 2.0.209

* VcRedist `2019` を `14.27.29016.0` に更新
* VcRedist のアンインストールによって再起動が発生しないことを確認するよう `Uninstall-VcRedist` を更新

## 2.0.203

* VcRedist `2019` バージョン `14.26.28720` に更新
* 新しい `2019` リリースに合わせて `VcRedist` マニフェストの更新を自動化
* `PSScriptAnalyzer` の新しい評価結果に基づき関数を更新

## 2.0.183

* RegEx の照合ミスにより `Get-InstalledVcRedist` がインストール済み VcRedist を返さない問題を修正。`ExportAll` パラメーターで出力をフィルターするコードを改善

## 2.0.181

* `Import-MdtModule` - コードを簡素化し、モジュールを読み込めない場合に例外がスローされるように変更
* `Get-InstalledVcRedist` - 再頒布可能パッケージのフィルター処理とコード スタイルを更新
* `Save-VcRedist.ps1` - インライン ヘルプを更新し、`Start-BitsTransfer` の使用を削除 (現在は `Invoke-WebRequest` のみ使用)。TLS 1.2 を強制し、`ProxyCredential` パラメーターへの参照を修正し、ダウンロードした VcRedist の出力がパイプラインに渡るよう修正
* `Update-VcMdtApplication.ps1` - 詳細出力内のパスを修正し、VcRedist 実行可能ファイルが MDT 展開共有にコピーされない問題を修正
* `Update-VcMdtBundle` - インライン ヘルプを更新。既定の場所にない VcRedist バンドルを検出する際の問題を修正するため、既存バンドルの検索方法とバンドル プロパティの更新方法を変更
* パブリック関数の Pester テストを更新

## 2.0.174

* ダウンロードを高速化するため、`Save-VcRedist` に `$ProgressPreference = "SilentlyContinue"` を追加
* VcRedist 2019 `14.25.28508.3` をサポートするようマニフェストを更新
* モジュールの説明を更新
* 将来の使用に備えて `VcManifest` 変数をエクスポート

## 2.0.168

* VcRedist 2019 `14.24.28127.4` に合わせてマニフェストを更新
* UNC パスと ConfigMgr モジュールの検証に対応するため、`Import-VcConfigMgrApplication` を更新
* マニフェスト全体をエクスポートするよう `Export-VcManifest` を更新。新しい VcRedist リリースに合わせたマニフェストの自動更新に向けた変更

## 2.0.163

* Visual Studio 2019 `16.3` 向け VcRedist 2019 バージョン `14.23.27820.0` のマニフェストを更新

## 2.0.161

* MDT 展開共有にインポートされた VcRedist で `Hide this application in the Deployment Wizard` オプションが有効にならない問題を修正
* MDT Deployment Wizard でアプリケーションを非表示にしないための `-DontHide` パラメーターを `Import-VcMdtApplication` に追加

## 2.0.158

* `Save-VcRedist` と `Install-VcRedist` で `-Path` パラメーターを省略しても関数が動作するよう既定のパスを追加。[#53](https://github.com/aaronparker/vcredist/issues/53) に対応
* `Save-VcRedist`、`Install-VcRedist`、`Import-VcConfigMgrApplication`、`Import-VcMdtApplication`、`Update-VcMdtApplication`、`Update-VcMdtBundle` に Begin、Process、End を追加してパイプラインをサポート。[#53](https://github.com/aaronparker/vcredist/issues/53) に対応
* VcRedist のアンインストールを管理する `Uninstall-VcRedist` 関数を追加
* パブリック関数の Pester テストを更新

## 2.0.147

* `Save-VcRedist` に基本的なプロキシ サポートを追加
* `Import-VcMdtApplication`、`New-VcMdtBundle`、`Update-VcMdtApplication`、`Update-VcMdtBundle` の出力を更新し、すべてのアプリケーション プロパティをエクスポート
* 完全な型名とコマンドレット/関数パラメーター、パラメーター スプラッティングを使用して、全般的なコード書式と品質を改善
* 詳細出力メッセージを更新
* パブリック関数のパラメーター宣言を統一
* 例外処理を改善するための Try/Catch ステートメントを追加
* パイプラインで複数のオブジェクトをサポートする必要がない関数から Begin/Process/End ステートメントを削除
* モジュール マニフェストの場所を `/Manifest` からモジュール フォルダーのトップ レベルに移動し、新しい場所に合わせて `Get-VcList` を更新
* AppVeyor 統合とスクリプトのレイアウトを更新

## 2.0.140

* Visual Studio 2019 `16.1` 向け VcRedist `2019` バージョン `14.21.27702.2` のマニフェストを更新

## 2.0.138

* [#45 Import-VcMdtApplication でインポートしたアプリに空の依存関係エントリが表示される問題](https://github.com/aaronparker/VcRedist/issues/45)を修正
* VcRedist を ConfigMgr にインポートする際の問題を修正 [#47](https://github.com/aaronparker/VcRedist/issues/47)

## 2.0.132

* バージョンの意味を major.minor.build に簡素化
* VcRedist `2019` をマニフェストに追加
* マニフェストを JSON に変換して管理とコードを簡素化
* JSON マニフェスト形式をサポートするよう `Get-VcList` 関数を更新
* VcRedist を単一のマニフェストに統合
* `Get-VcRedist` を `Save-VcRedist` に名称変更
* `Import-VcCmApp` を `Import-VcConfigMgrApplication` に名称変更
* `Export-VcXml` 関数を `Export-VcManifest` に名称変更
* `Import-VcMdtApp` を `Import-VcMdtApplication` に名称変更
* コードを簡素化し、より堅牢な関数を提供するため、`Import-VcMdtApplication` 関数を `Import-VcMdtApplication`、`Update-VcMdtApplication`、`New-VcMdtBundle`、`Update-VcMdtBundle` に分割
* 各関数の HelpUri プロパティを更新
* `Get-InstalledVcRedist` を更新し、`Release` と `Architecture` などの追加プロパティをエクスポート
* プライベート関数 `New-MdtApplicationFolder`、`New-MdtDrive` を追加
* `-Export` パラメーターで `All, Supported, Unsupported` を指定できるよう `Get-VcList` 関数を更新
* `-Release` と `-Architecture` で `Get-VcList` の出力をフィルターする機能を追加
* `Install-VcRedist`、`Import-VcMdtApplication`、`Import-VcConfigMgrApplication` がパイプラインから `Get-VcList` の出力を受け取れるよう、パイプライン サポートを修正
* `Install-VcRedist`、`Import-VcMdtApplication`、`Import-VcConfigMgrApplication` から `-Release` と `-Architecture` パラメーターを削除。リリースとアーキテクチャのフィルターには `Get-VcList` を使用
* パブリック関数とプライベート関数の Pester テストを更新

## 1.5.2.98

* VcRedist 2017 `14.16.27027.1` の正しい詳細でマニフェストを更新。v1.5.1.95 には誤ったマニフェスト コミットが含まれていました。

## 1.5.1.95

* VcRedist 2017 `14.16.27024.1` でマニフェストを更新
* `Get-VcRedist` のエイリアス `Save-VcRedist` をエクスポートするようモジュールを更新。次のメジャー バージョンでは `Get-VcRedist` を `Save-VcRedist` に名称変更する予定
* `Import-VcCmApp` と `Import-VcMdtApp` の `-VcList` を `[array]` ではなく `[PSCustomObject]` を使用するよう変更
* 新しい Visual Studio 2019 アイコンを使用するようモジュール アイコンを更新

## 1.5.0.92

* MDT モジュール読み込みコードを改善するプライベート関数 `Import-MdtModule` を追加
* より堅牢なエラー チェックを行うよう `Import-VcMdtApp` を更新
* 無効なパスによるエラーを回避するようプライベート関数 `Get-ValidPath` を更新
* VcRedist 2017 バージョン `14.16.27024.1` でマニフェストを更新

## 1.4.3.88

* パラメーターなし、または `-Architecture` 指定時に出力が 1 つだけになるようプライベート関数 `Get-Bitness` を修正

## 1.4.2.85

* `Import-VcMdtApp` で VcRedist を MDT にインポートする際の誤った作業ディレクトリを修正

## 1.4.1.79

* プライベート関数 `Invoke-Process` を追加 (Adam Bertram による)
* `Start-Process` の処理を改善するため、`Invoke-Process` を使用するよう `Install-VcRedist` を更新
* プライベート関数 `Get-ValidPath` の Resolve-Path / TrimEnd を修正
* `Import-VcCmApp` の相対パスの問題を修正し、[#24](https://github.com/aaronparker/vcredist/issues/24) に対応
* MDT に追加されるバンドルで、古い再頒布可能パッケージから順に依存関係を設定
* `Install-VcRedist`、`Import-VcMdtApp`、`Import-VcCmApp` でスプラッティングを使用
* コードの書式を更新
* ドキュメントを更新

## 1.4.0.69

* 最新の `2017` リリース、バージョン `14.15.26706.0` 向けにマニフェストを更新
* サイレント インストールのコマンド ライン引数をマニフェストに追加
* オプションのサイレント インストール コマンド ライン引数をサポートする `-Silent` スイッチを `Install-VcRedist`、`Import-VcMdtApp`、`Import-VcCmApp` に追加
* 現在の OS のプロセッサ アーキテクチャ判定をサポートするプライベート関数 `Get-Bitness` を追加
* 32 ビット Windows への 64 ビット再頒布可能パッケージのインストールを回避するよう `Install-VcRedist` を更新
* `Install-VcRedist`、`Import-VcMdtApp`、`Import-VcCmApp` の `-VcRedist` パラメーターに対するパイプライン サポートを削除。`Get-VcList` の出力をこれらのコマンドに渡すと正しく動作しません。今後のリリースでパイプライン サポートを再度追加する可能性があります。
* 同じメジャー バージョンの `2015` の後に `2017` をインストールしないよう、`Install-VcRedist`、`Import-VcMdtApp`、`Import-VcCmApp` 関数の `-Release` パラメーターの既定値から `2015` 再頒布可能パッケージを削除

## 1.3.7.60

* `2013`、バージョン `12.0.40664` でマニフェストを更新
* `Get-InstalledVcRedist` の出力に `UninstallString` を追加
* マニフェスト内の VcRedist バージョンと、既存のダウンロード済みファイルの `Product Version` プロパティとの一致を `Get-VcList` が試みるよう変更。マニフェストのバージョンが新しい場合、ファイルは再ダウンロードされます。
* ダウンロードしたファイルから `Product Version` を取得するプライベート関数 `Get-FileMetadata` を追加
* インストール済み VcRedist を照会する際の `Install-VcRedist` のロジックを更新

## 1.3.6.56

* プライベート関数 `Get-InstalledSoftware` を使用する `Get-InstalledVcRedist` を追加。PowerShell でインストール済みソフトウェアの製品 GUID を検索する機能の要望に関する issue [#18](https://github.com/aaronparker/VcRedist/issues/18) に対応。`Get-InstallSoftware` 関数は [Adam Bertram](https://4sysops.com/archives/find-the-product-guid-of-installed-software-with-powershell/) によるものです。
* 正しい ProductCodes でマニフェストを更新
* ドキュメントを更新

## 1.3.5.48

* `2017`、バージョン `14.14` でマニフェストを更新
* `2015` の上書きインストール (例: インストールをスキップする) など、より適切なインストール ロジックを可能にするため、マニフェストに `<Version></Version>` を追加

## 1.3.4.45

* `Import-VcMdtApp` で MDT アプリケーションに正しい `x86`、`x64` プラットフォーム選択を設定し、再頒布可能パッケージのインポートを修正
* `Import-VcMdtApp` で `-AppFolder` に指定されたフォルダーがすでに存在するときの再頒布可能パッケージのインポートを修正

## 1.3.3.39

* `2017` `14.13.26020` リリースでマニフェストを更新
* 変更履歴へのリンク [https://vcredist.com/change-log](https://vcredist.com/change-log) を使うようモジュールの `ReleaseNotes` プロパティを更新
* 明示的な `Write-Output` を使うよう関数を更新

## 1.3.2.35

* コードの書式を更新
* PSCore との互換性向上のため、フォルダー/ファイル パスの構築に `Join-Path` を使用
* Pester テストを更新
* 機能変更により適合するようバージョンを更新

## 1.3.1.4

* ConfigMgr アプリケーションのインポートを修正

## 1.3.1.2

* `Import-VcMdtApp` に `-Bundle` を追加し、再頒布可能パッケージを依存関係として含むアプリケーション バンドルを作成できるように変更。展開ウィザードでバンドルのみ選択できるよう、再頒布可能パッケージは非表示になります。
* 簡単な Pester テストを更新し、Appveyor 統合を動作させるよう修正
* インライン ヘルプを整理
* platyPS で外部ヘルプを生成

## 1.3.1.0

* Visual C++ 再頒布可能パッケージを ConfigMgr にインポートする関数 `Import-VcCmApp` を追加

## 1.3.0.0

* コーディングと PowerShell Gallery への公開を簡素化するため、PowerShell モジュールにリファクタリング
