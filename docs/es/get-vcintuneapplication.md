# Consultar Redistributables de Visual C++ en Microsoft Intune

`Get-VcIntuneApplication` recupera todas las aplicaciones Win32 de Redistributables de Visual C++ que se encuentran actualmente en Microsoft Intune. Resulta útil para auditar, generar informes o verificar qué Redistributables se administran en el inquilino de Intune.

## Características

- Consulta en Intune todas las aplicaciones Win32 de Redistributables de Visual C++
- Devuelve los detalles de la aplicación, como el nombre para mostrar y el identificador
- Resulta útil para inventarios, informes o como entrada para otras funciones de VcRedist

## Requisitos previos

- Debe estar instalado e importado el módulo de PowerShell [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- Debe haberse autenticado en Intune con `Connect-MSIntuneGraph`
- Debe haber un token de acceso válido de Microsoft Graph API

## Uso

```powershell
# Query all Visual C++ Redistributable Win32 apps in Intune
$Apps = Get-VcIntuneApplication

# Display the results
$Apps | Format-Table displayName, Id
```

## Funcionamiento

1. Llama a `Get-VcList -Export All` para obtener una lista de todos los Redistributables conocidos
2. Llama a `Get-VcRedistAppsFromIntune` con esa lista para recuperar las aplicaciones Win32 de Intune coincidentes
3. Devuelve la lista de objetos de aplicaciones de Intune

## Resultado

Cada objeto de la matriz devuelta incluye propiedades como:

- `displayName`: nombre para mostrar de la aplicación en Intune
- `Id`: identificador de la aplicación de Intune
- Otras propiedades devueltas por `Get-VcRedistAppsFromIntune`

## Solución de problemas

- **Faltan módulos:** Asegúrese de que `IntuneWin32App` esté instalado e importado.
- **Errores de autenticación:** Autentíquese con `Connect-MSIntuneGraph` y asegúrese de que `$Global:AccessToken` esté establecido.
- **No hay resultados:** Asegúrese de haber importado los Redistributables de Visual C++ en Intune con `Import-VcIntuneApplication`.

## Consulte también

- [Import-VcIntuneApplication](import-vcintuneapplication.md)
- [Remove-VcIntuneApplication](remove-vcintuneapplication.md)
- [Módulo de PowerShell IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [Documentación de VcRedist](https://vcredist.com/)
