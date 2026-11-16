# Microsoft Intune の Visual C++ 再頒布可能パッケージを照会する

`Get-VcIntuneApplication` は、現在 Microsoft Intune に存在するすべての Visual C++ 再頒布可能 Win32 アプリケーションを取得します。Intune テナントで管理されている再頒布可能パッケージの監査、レポート作成、確認に役立ちます。

## 機能

- Intune 内のすべての Visual C++ 再頒布可能 Win32 アプリを照会します。
- 表示名や ID などのアプリケーション詳細を返します。
- インベントリ、レポート作成、またはほかの VcRedist 関数への入力として使用できます。

## 前提条件

- [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) PowerShell モジュールをインストールしてインポートしておく必要があります。
- `Connect-MSIntuneGraph` で Intune に認証しておく必要があります。
- 有効な Microsoft Graph API アクセス トークンが存在する必要があります。

## 使用方法

```powershell
# Query all Visual C++ Redistributable Win32 apps in Intune
$Apps = Get-VcIntuneApplication

# Display the results
$Apps | Format-Table displayName, Id
```

## 動作のしくみ

1. `Get-VcList -Export All` を呼び出して、既知の再頒布可能パッケージの一覧を取得します。
2. その一覧を指定して `Get-VcRedistAppsFromIntune` を呼び出し、一致する Intune Win32 アプリケーションを取得します。
3. Intune アプリケーション オブジェクトの一覧を返します。

## 出力

返された配列の各オブジェクトには、次のようなプロパティが含まれます

- `displayName`: Intune でのアプリケーションの表示名
- `Id`: Intune アプリケーション ID
- その他、`Get-VcRedistAppsFromIntune` が返すプロパティ

## トラブルシューティング

- **モジュールが見つからない:** `IntuneWin32App` がインストールされ、インポートされていることを確認します。
- **認証エラー:** `Connect-MSIntuneGraph` で認証し、`$Global:AccessToken` が設定されていることを確認します。
- **結果がない:** `Import-VcIntuneApplication` を使用して Visual C++ 再頒布可能パッケージを Intune にインポートしたことを確認します。

## 関連項目

- [Import-VcIntuneApplication](import-vcintuneapplication.md)
- [Remove-VcIntuneApplication](remove-vcintuneapplication.md)
- [IntuneWin32App PowerShell モジュール](https://github.com/MSEndpointMgr/IntuneWin32App)
- [VcRedist ドキュメント](https://vcredist.com/)
