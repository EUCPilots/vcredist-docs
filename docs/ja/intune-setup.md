# Intune への認証

Visual C++ 再頒布可能パッケージを Microsoft Intune にインポートするには、事前のセットアップが必要です。まず、PowerShell Gallery から必要なモジュールをインストールします。

```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
```

## 前提条件

1. **必要なモジュールをインストールします。**

   ```powershell
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
   Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
   ```

2. **Intune に認証します。**

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com
   ```

   非対話型認証には、`DeviceManagementApps.ReadWrite.All` アクセス許可を持つ Entra ID アプリ登録を使用します。

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>" -ClientSecret <secret>
   ```

3. **IntuneWin32App モジュールが使用可能で、有効な Microsoft Graph API アクセス トークンが存在することを確認します。**

## 認証

### 非対話型認証

非対話型認証には Entra ID アプリ登録を使用できます。アプリ登録には **DeviceManagementApps.ReadWrite.All** アプリケーション アクセス許可が必要です。アプリ登録を作成し、アクセス許可を割り当てて、管理者の同意を有効にします。その後、クライアント シークレットまたはクライアント証明書を使って認証します。

![IntuneWin32App 用の Entra ID アプリ登録](/images/appregistration.jpeg)

アプリ登録とクライアント シークレットを使用して非対話型でサインインするには、次の例を使用します。

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "f99877d5-f757-438e-b12b-d905b00ea6f3" -ClientSecret <secret>
```
