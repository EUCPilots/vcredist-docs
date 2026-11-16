# S'authentifier auprès d'Intune

Une configuration initiale est nécessaire pour importer les redistribuables Visual C++ dans Microsoft Intune. Commencez par installer les modules requis depuis la PowerShell Gallery :

```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
```

## Prérequis

1. **Installer les modules requis :**

   ```powershell
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
   Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
   ```

2. **S'authentifier auprès d'Intune :**

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com
   ```

   Pour une authentification non interactive, utilisez une inscription d'application Microsoft Entra ID disposant de l'autorisation `DeviceManagementApps.ReadWrite.All` :

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>" -ClientSecret <secret>
   ```

3. **Vérifiez que le module IntuneWin32App est disponible et qu'un jeton d'accès valide à l'API Microsoft Graph est présent.**

## Authentification

### Authentification non interactive

Une inscription d'application Microsoft Entra ID peut servir à l'authentification non interactive. Elle nécessite l'autorisation d'application **DeviceManagementApps.ReadWrite.All**. Créez une inscription d'application, attribuez-lui cette autorisation et accordez le consentement administrateur. Utilisez ensuite un secret client ou un certificat client pour l'authentification.

![Inscription d'application Microsoft Entra ID pour IntuneWin32App](/images/appregistration.jpeg)

Pour vous connecter sans interaction à l'aide de l'inscription d'application et d'un secret client, utilisez l'exemple suivant :

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "f99877d5-f757-438e-b12b-d905b00ea6f3" -ClientSecret <secret>
```
