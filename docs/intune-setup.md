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

   See [Authentication](#authentication) for interactive and non-interactive examples. Both require the client ID from your own Entra ID app registration.

3. **Ensure the IntuneWin32App module is available and a valid Microsoft Graph API access token is present.**

## Authentication

As of IntuneWin32App version 1.5.0, `Connect-MSIntuneGraph` requires the client ID from your own Entra ID app registration for all authentication flows.

### Interactive Authentication

Interactive delegated authentication is the default. Provide your app registration's client ID; the command opens a browser for sign-in:

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>"
```

### Non-interactive Authentication

For non-interactive authentication, configure an Entra ID app registration with the **DeviceManagementApps.ReadWrite.All** application permission and grant admin consent. Then authenticate with the app registration's client ID and a client secret or certificate.

![Entra ID app registration for IntuneWin32App](/images/appregistration.jpeg)

For example, to sign in with a client secret:

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>" -ClientSecret "<client-secret>"
```
