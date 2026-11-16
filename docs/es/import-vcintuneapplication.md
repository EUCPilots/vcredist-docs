# Importar Redistributables en Microsoft Intune

`Import-VcIntuneApplication` automatiza el empaquetado y la importación de Redistributables de Visual C++ como aplicaciones Win32 en Microsoft Intune. Cada Redistributable se empaqueta, se le asignan reglas de detección y requisitos, y se importa como una aplicación independiente.

**Características principales:**

- Empaqueta cada Redistributable de Visual C++ en un archivo .intunewin
- Establece las propiedades de la aplicación: Name, Description, Publisher, Version, URLs, Notes, Logo, comandos de instalación/desinstalación, comportamiento de instalación, arquitectura del sistema operativo, sistema operativo mínimo y reglas de detección y requisitos
- Omite la importación si la aplicación ya existe y está actualizada en Intune
- Limpia los archivos temporales después de la importación
- Admite `-WhatIf` para obtener una vista previa de las importaciones
- Admite reglas de requisitos específicas para las arquitecturas x86, x64 y ARM64

> **Nota:**
>
> - Requiere el módulo de PowerShell [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
> - Requiere Windows PowerShell 5.1; PowerShell 7 no es compatible con el módulo IntuneWin32App requerido
> - Antes de usarlo, autentíquese en Intune con `Connect-MSIntuneGraph`
> - Requiere un token de acceso válido de Microsoft Graph API

## Parámetros

- `VcList` (**obligatorio**): Matriz de objetos de Redistributables de Visual C++, normalmente obtenidos de `Save-VcRedist`. Cada objeto debe tener las propiedades necesarias (véase más abajo).
- `ImportAsUpdate`: Agrega un requisito de versión de archivo para que un tiempo de ejecución instalado más antiguo no satisfaga el requisito de un paquete más reciente.
- `WhatIf`: Obtiene una vista previa de las importaciones sin crear ni modificar aplicaciones de Intune.

## Propiedades necesarias de VcList

Cada objeto de `VcList` debe incluir:

- `Name`, `Version`, `Path`, `Architecture`, `SilentInstall`, `SilentUninstall`, `PackageId`, `URI` y otras propiedades generadas por `Save-VcRedist`.

La función valida estas propiedades y genera un error si falta alguna.

## Ejemplo: importar Redistributables

El siguiente ejemplo recupera la lista de Redistributables de Visual C++ para la versión 14, descarga los instaladores e importa cada uno como una aplicación Win32 en Intune:

```powershell
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcIntuneApplication -VcList $VcList
```

Use `-ImportAsUpdate` para agregar un requisito para la versión del archivo de detección del paquete:

```powershell
Import-VcIntuneApplication -VcList $VcList -ImportAsUpdate
```

![Aplicaciones de Redistributables de Microsoft Visual C++ importadas en Intune](/images/intuneapp.jpeg)

## Asignaciones y supersedencia

Después de la importación, asigne las aplicaciones con `Add-IntuneWin32AppAssignmentAllDevices`. La función devuelve objetos de aplicación con una propiedad `Id`:

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

## Funcionamiento

1. **Valida los requisitos previos:**
   - Comprueba que se esté ejecutando en Windows PowerShell (no en Core)
   - Comprueba que esté disponible el módulo IntuneWin32App
   - Comprueba que haya un token de acceso de Microsoft Graph API
2. **Carga el manifiesto de aplicaciones de Intune** desde `Intune.json` en el directorio del módulo
3. **Crea un objeto de icono** si existe el archivo del icono
4. **Valida cada objeto de VcList** para comprobar que tenga las propiedades necesarias
5. **Busca aplicaciones existentes en Intune** y omite la importación si están actualizadas
6. **Empaqueta el instalador** como archivo .intunewin
7. **Crea reglas de requisitos y detección** a partir del manifiesto y de VcList
8. **Importa la aplicación** mediante `Add-IntuneWin32App`
9. **Limpia** los archivos temporales

## Solución de problemas

- **PowerShell Core no es compatible:** La función genera un error si se ejecuta en PowerShell Core. Use Windows PowerShell 5.1.
- **Faltan módulos:** Asegúrese de que `IntuneWin32App` esté instalado y disponible en la sesión.
- **Errores de autenticación:** Autentíquese con `Connect-MSIntuneGraph` y asegúrese de que `$Global:AccessToken` esté establecido.
- **Faltan propiedades obligatorias:** Use `Save-VcRedist` para generar un `VcList` válido.

## Consulte también

- [Módulo de PowerShell IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [Documentación de VcRedist](https://vcredist.com/)
