# Quitar Redistributables de Microsoft Intune

`Remove-VcIntuneApplication` automatiza la eliminación de aplicaciones Win32 de Redistributables de Visual C++ de Microsoft Intune. Busca las aplicaciones de Intune según el VcList proporcionado y las elimina mediante el módulo IntuneWin32App.

## Características

- Quita de Intune aplicaciones Win32 de Redistributables de Visual C++
- Acepta un objeto VcList (de `Save-VcRedist`) para identificar las aplicaciones que se eliminarán
- Admite `-WhatIf` y `-Confirm` para un funcionamiento seguro
- Proporciona resultados detallados para registrar las eliminaciones

## Requisitos previos

- Debe estar instalado e importado el módulo de PowerShell [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- Debe haberse autenticado en Intune con `Connect-MSIntuneGraph`
- Debe haber un token de acceso válido de Microsoft Graph API

## Parámetros

- `VcList` (**obligatorio**): Matriz de objetos de Redistributables de Visual C++, normalmente obtenidos de `Save-VcRedist`. Se usa para buscar y quitar las aplicaciones de Intune correspondientes.

## Ejemplo de uso

```powershell
# Get the list of redistributables you want to remove
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist

# Remove the corresponding Intune applications
Remove-VcIntuneApplication -VcList $VcList -Verbose -Confirm:$false
```

> **Sugerencia:** Use `-WhatIf` para ver qué aplicaciones se quitarían de Intune.

## Funcionamiento

1. Recupera las aplicaciones Win32 existentes de Redistributables de Visual C++ en Intune mediante `Get-VcRedistAppsFromIntune`
2. Para cada aplicación coincidente, llama a `Remove-IntuneWin32App` para quitarla de Intune
3. Admite `ShouldProcess` de PowerShell para la seguridad de `-WhatIf` y `-Confirm`

## Solución de problemas

- **Faltan módulos:** Asegúrese de que `IntuneWin32App` esté instalado e importado.
- **Errores de autenticación:** Autentíquese con `Connect-MSIntuneGraph` y asegúrese de que `$Global:AccessToken` esté establecido.
- **No hay aplicaciones coincidentes:** Asegúrese de que el `VcList` coincida con las aplicaciones que desea quitar.

## Consulte también

- [Módulo de PowerShell IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [Documentación de VcRedist](https://vcredist.com/)
