# Authentifizierung bei Intune

Um die Visual C++ Redistributables in Microsoft Intune zu importieren, ist zunächst eine Einrichtung erforderlich. Installieren Sie zuerst die benötigten Module aus der PowerShell Gallery:

```powershell
Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
```

## Voraussetzungen

1. **Erforderliche Module installieren:**

   ```powershell
   Set-PSRepository -Name PSGallery -InstallationPolicy Trusted
   Install-Module -Name VcRedist, IntuneWin32App, MSAL.PS
   ```

2. **Bei Intune authentifizieren:**

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com
   ```

   Verwenden Sie für die nicht interaktive Authentifizierung eine Entra-ID-App-Registrierung mit der Berechtigung `DeviceManagementApps.ReadWrite.All`:

   ```powershell
   Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "<appId>" -ClientSecret <secret>
   ```

3. **Stellen Sie sicher, dass das Modul IntuneWin32App verfügbar ist und ein gültiges Microsoft-Graph-API-Zugriffstoken vorliegt.**

## Authentifizierung

### Nicht interaktive Authentifizierung

Für eine nicht interaktive Authentifizierung kann eine Entra-ID-App-Registrierung verwendet werden. Die App-Registrierung benötigt die Anwendungsberechtigung **DeviceManagementApps.ReadWrite.All**. Erstellen Sie eine App-Registrierung, weisen Sie die Berechtigung zu und erteilen Sie die Administratoreinwilligung. Verwenden Sie anschließend ein Clientgeheimnis oder ein Clientzertifikat zur Authentifizierung.

![Entra-ID-App-Registrierung für IntuneWin32App](/images/appregistration.jpeg)

Verwenden Sie für eine nicht interaktive Anmeldung mit App-Registrierung und Clientgeheimnis dieses Beispiel:

```powershell
Connect-MSIntuneGraph -TenantID contoso.onmicrosoft.com -ClientId "f99877d5-f757-438e-b12b-d905b00ea6f3" -ClientSecret <secret>
```
