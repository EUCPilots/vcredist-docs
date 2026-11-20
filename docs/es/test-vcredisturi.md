# Probar los URI de Redistributables

`Test-VcRedistUri` valida los URI de descarga de los Redistributables de Visual C++ enviando una solicitud HEAD a cada URI. Use esta función para comprobar que los vínculos de descarga estén accesibles antes de intentar descargarlos con `Save-VcRedist`.

Solo se prueban las URL HTTPS de los hosts de descarga de Microsoft permitidos por el módulo; se rechazan las demás URL.

## Parámetros

### Parámetros obligatorios

* `VcList` - Matriz que contiene los detalles de los Redistributables de Visual C++ de `Get-VcList`

### Parámetros opcionales

* `Proxy` - Especifica un servidor proxy para la solicitud
* `ProxyCredential` - Especifica las credenciales del servidor proxy
* `ShowProgress` - Muestra el progreso de la descarga. De forma predeterminada, el progreso está oculto.

## Ejemplos

Pruebe todos los URI de descarga de Redistributables compatibles:

```powershell
Get-VcList | Test-VcRedistUri
```

Ejemplo de resultado:

```powershell
Result       : True
Release      : 14
Architecture : x64
Version      : 14.52.37029.0
URI          : https://aka.ms/vc14/vc_redist.x64.exe
```

Pruebe los URI de una versión y arquitectura específicas:

```powershell
Get-VcList -Release 2019 -Architecture x64 | Test-VcRedistUri
```

Pruebe todos los URI de Redistributables, incluidas las versiones no compatibles:

```powershell
Get-VcList -Export All | Test-VcRedistUri
```

Pruebe los URI a través de un servidor proxy:

```powershell
Get-VcList | Test-VcRedistUri -Proxy "http://proxy.domain.local"
```
