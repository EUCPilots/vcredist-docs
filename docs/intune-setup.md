# Authenticating to Intune

To import the Visual C++ Redistributables into Microsoft Intune, some initial setup is required - first, install the required modules from the PowerShell Gallery:

```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
```

## Prerequisites

1. **Install required modules:**

   ```powershell
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
   Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
   ```

2. **Authenticate to Intune:**

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com
   ```

   For non-interactive authentication, use an Entra ID app registration with `DeviceManagementApps.ReadWrite.All` permission:

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>" -ClientSecret <secret>
   ```

3. **Ensure the IntuneWin32App module is available and a valid Microsoft Graph API access token is present.**

## Authentication

### Non-interactive Authentication

An Entra ID app registration can be used for non-interactive authentication. The app registration requires the **DeviceManagementApps.ReadWrite.All** application permission. Create an app registration, assign the permission and enable admin consent. Then use a client secret or client certificate to use with authentication.

![Entra ID app registration for IntuneWin32App](/images/appregistration.jpeg)

For a non-interactive sign-in that uses the app registration and a client secret, use this example:

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "f99877d5-f757-438e-b12b-d905b00ea6f3" -ClientSecret <secret>
```
