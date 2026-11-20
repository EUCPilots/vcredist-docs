# Microsoft Intune からの Visual C++ 再頒布可能パッケージの削除

`Remove-VcIntuneApplication` は、Microsoft Intune から Visual C++ 再頒布可能 Win32 アプリケーションを削除します。指定した VcList に基づいて Intune 内のアプリケーションを照合し、IntuneWin32App モジュールを使って削除します。

## 機能

- Intune から Visual C++ 再頒布可能パッケージの Win32 アプリケーションを削除します。
- 削除対象アプリを特定するため、`Save-VcRedist` から取得した VcList オブジェクトを受け取ります。
- 安全に操作できるよう `-WhatIf` と `-Confirm` をサポートします。
- 削除状況を追跡するための詳細出力を提供します。

## 前提条件

- [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) PowerShell モジュールをインストールしてインポートしておく必要があります。
- `Connect-MSIntuneGraph` で Intune に認証しておく必要があります。
- 有効な Microsoft Graph API アクセス トークンが存在する必要があります。

## パラメーター

- `VcList` (**必須**): 通常は `Save-VcRedist` から取得する Visual C++ 再頒布可能パッケージ オブジェクトの配列です。対応する Intune アプリケーションの照合と削除に使用します。

## 使用例

```powershell
# Get the list of redistributables you want to remove
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist

# Remove the corresponding Intune applications
Remove-VcIntuneApplication -VcList $VcList -Verbose -Confirm:$false
```

> **ヒント:** `-WhatIf` を使用すると、Intune から削除されるアプリケーションを確認できます。

## 動作のしくみ

1. `Get-VcRedistAppsFromIntune` を使って Intune 内の既存の Visual C++ 再頒布可能 Win32 アプリを取得します。
2. 一致する各アプリケーションに対し、`Remove-IntuneWin32App` を呼び出して Intune から削除します。
3. `-WhatIf` と `-Confirm` による安全な操作のため、PowerShell の `ShouldProcess` をサポートします。

## トラブルシューティング

- **モジュールが見つからない:** `IntuneWin32App` がインストールされ、インポートされていることを確認します。
- **認証エラー:** `Connect-MSIntuneGraph` で認証し、`$Global:AccessToken` が設定されていることを確認します。
- **一致するアプリがない:** `VcList` が削除対象のアプリと一致することを確認します。

## 関連項目

- [IntuneWin32App PowerShell モジュール](https://github.com/MSEndpointMgr/IntuneWin32App)
- [VcRedist ドキュメント](https://vcredist.com/)
