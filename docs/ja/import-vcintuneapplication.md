# Microsoft Intune への再頒布可能パッケージのインポート

`Import-VcIntuneApplication` は、Visual C++ 再頒布可能パッケージを Win32 アプリとしてパッケージ化し、Microsoft Intune にインポートする処理を自動化します。各再頒布可能パッケージは個別にパッケージ化され、検出規則と要件規則が割り当てられたアプリケーションとしてインポートされます。

**主な機能:**

- 各 Visual C++ 再頒布可能パッケージを .intunewin ファイルとしてパッケージ化します。
- アプリケーションのプロパティ (名前、説明、発行元、バージョン、URL、メモ、ロゴ、インストール/アンインストール コマンド、インストール動作、OS アーキテクチャ、最小 OS、検出規則、要件規則) を設定します。
- Intune に同じアプリがすでに存在し、最新の場合はインポートをスキップします。
- インポート後に一時ファイルをクリーンアップします。
- `-WhatIf` によるインポートのプレビューをサポートします。
- x86、x64、ARM64 パッケージに対するアーキテクチャ固有の要件規則をサポートします。

> **注:**
>
> - [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) PowerShell モジュールが必要です。
> - Windows PowerShell 5.1 が必要です。必須の IntuneWin32App モジュールは PowerShell 7 をサポートしていません。
> - 使用前に `Connect-MSIntuneGraph` で Intune に認証してください。
> - 有効な Microsoft Graph API アクセス トークンが必要です。

## パラメーター

- `VcList` (**必須**): Visual C++ 再頒布可能パッケージ オブジェクトの配列。通常は `Save-VcRedist` から取得します。各オブジェクトには、以下に示す必須プロパティが含まれている必要があります。
- `ImportAsUpdate`: ファイル バージョンの要件を追加し、古いランタイムが新しいパッケージの要件を満たさないようにします。
- `WhatIf`: Intune アプリを作成または変更せずに、インポートをプレビューします。

## 必須の VcList プロパティ

`VcList` の各オブジェクトには次のプロパティが必要です。

- `Name`、`Version`、`Path`、`Architecture`、`SilentInstall`、`SilentUninstall`、`PackageId`、`URI` など、`Save-VcRedist` が生成するその他のプロパティ。

この関数はこれらのプロパティを検証し、不足している場合はエラーをスローします。

## 例: 再頒布可能パッケージのインポート

次の例では、リリース 14 の Visual C++ 再頒布可能パッケージの一覧を取得し、インストーラーをダウンロードしたうえで、各パッケージを Win32 アプリとして Intune にインポートします。

```powershell
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcIntuneApplication -VcList $VcList
```

`-ImportAsUpdate` を使用すると、パッケージの検出対象ファイル バージョンに関する要件を追加できます。

```powershell
Import-VcIntuneApplication -VcList $VcList -ImportAsUpdate
```

![Intune にインポートされた Microsoft Visual C++ 再頒布可能パッケージのアプリケーション](/images/intuneapp.jpeg)

## 割り当てと置き換え

インポート後、`Add-IntuneWin32AppAssignmentAllDevices` を使ってアプリケーションを割り当てます。この関数は `Id` プロパティを持つアプリケーション オブジェクトを返します。

```powershell
# Retrieve existing Visual C++ Redistributable applications in Intune (that have been imported by VcRedist)
$ExistingApps = Get-VcIntuneApplication

# Import the new Visual C++ Redistributable versions
$NewApps = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist" | Import-VcIntuneApplication

# Create an All Devices assignment and add supersedence rules for existing versions
foreach ($App in $NewApps) {
    $params = @{
        Id                           = $App.id
        Intent                       = "required"
        Notification                 = "showReboot"
        DeliveryOptimizationPriority = "notConfigured"
        UseLocalTime                 = $true
        AvailableTime                = $(Get-Date -Hour 18 -Minute 0 -Second 0)
        DeadlineTime                 = $(Get-Date -Hour 18 -Minute 0 -Second 0).AddDays(1)
        EnableRestartGracePeriod     = $true
        RestartGracePeriod           = 1440
        RestartNotificationSnooze    = 240
        RestartCountDownDisplay      = 15
    }
    Add-IntuneWin32AppAssignmentAllDevices @params

    # Match existing app packages with the same identifier and add supersedence rules
    $MatchingApp = $ExistingApps | Where-Object { $_.PackageId -eq $($App.notes | ConvertFrom-Json -ErrorAction "Stop").Guid }
    if ($null -ne $MatchingApp) {
        foreach ($Item in $MatchingApp) {
            Write-Host "Adding supersedence rule for $($Item.id) to $($App.id)"
            $SupersedenceRule = New-IntuneWin32AppSupersedence -ID $Item.id -SupersedenceType 'Update'
            Add-IntuneWin32AppSupersedence -ID $App.id -Supersedence $SupersedenceRule
        }
    }
}
```

## 動作のしくみ

1. **前提条件を検証します。**
   - Windows PowerShell (Core 以外) で実行されていることを確認します。
   - IntuneWin32App モジュールを確認します。
   - Microsoft Graph API アクセス トークンを確認します。
2. モジュール ディレクトリの `Intune.json` から Intune アプリ マニフェストを読み込みます。
3. アイコン ファイルが存在する場合は、アイコン オブジェクトを作成します。
4. 各 VcList オブジェクトに必須プロパティがあることを検証します。
5. Intune 内の既存アプリを確認し、最新の場合はインポートをスキップします。
6. インストーラーを .intunewin ファイルとしてパッケージ化します。
7. マニフェストと VcList から要件規則と検出規則を作成します。
8. `Add-IntuneWin32App` を使ってアプリをインポートします。
9. 一時ファイルをクリーンアップします。

## トラブルシューティング

- **PowerShell Core はサポートされません:** PowerShell Core で実行すると関数はエラーをスローします。Windows PowerShell 5.1 を使用してください。
- **モジュールが見つからない:** `IntuneWin32App` がインストールされ、セッションで利用可能であることを確認します。
- **認証エラー:** `Connect-MSIntuneGraph` で認証し、`$Global:AccessToken` が設定されていることを確認します。
- **必須プロパティがない:** `Save-VcRedist` を使用して、有効な `VcList` を生成します。

## 関連項目

- [IntuneWin32App PowerShell モジュール](https://github.com/MSEndpointMgr/IntuneWin32App)
- [VcRedist ドキュメント](https://vcredist.com/)
