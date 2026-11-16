# Autenticarse en Intune

Para importar los Redistributables de Visual C++ en Microsoft Intune, se requiere una configuración inicial. Primero, instale los módulos necesarios desde PowerShell Gallery:

```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
```

## Requisitos previos

1. **Instalar los módulos necesarios:**

   ```powershell
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
   Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
   ```

2. **Autenticarse en Intune:**

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com
   ```

   Para la autenticación no interactiva, use un registro de aplicación de Entra ID con el permiso `DeviceManagementApps.ReadWrite.All`:

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>" -ClientSecret <secret>
   ```

3. **Asegúrese de que el módulo IntuneWin32App esté disponible y de que haya un token de acceso válido de Microsoft Graph API.**

## Autenticación

### Autenticación no interactiva

Se puede usar un registro de aplicación de Entra ID para la autenticación no interactiva. El registro de aplicación requiere el permiso de aplicación **DeviceManagementApps.ReadWrite.All**. Cree un registro de aplicación, asigne el permiso y habilite el consentimiento del administrador. A continuación, use un secreto de cliente o un certificado de cliente para la autenticación.

![Registro de aplicación de Entra ID para IntuneWin32App](/images/appregistration.jpeg)

Para iniciar sesión de forma no interactiva con el registro de aplicación y un secreto de cliente, use este ejemplo:

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "f99877d5-f757-438e-b12b-d905b00ea6f3" -ClientSecret <secret>
```
