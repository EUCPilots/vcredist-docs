# Descargar los Redistributables

Para descargar los Redistributables de Visual C++, pase las entradas de `Get-VcList` a `Save-VcRedist` por la canalización. La carpeta de destino se crea si es necesario. Los instaladores se guardan en `Release\Version\Architecture`; se reutilizan los instaladores existentes que sean válidos.

Las descargas deben usar HTTPS y un host de descarga de Microsoft permitido. De forma predeterminada, cada instalador (incluidos los existentes) debe tener una firma Microsoft Authenticode válida. El comando devuelve cada entrada con la ruta del instalador en `Path`, para usarla con `Install-VcRedist` o una función de importación de implementación.

::: info
Se reutiliza un instalador existente cuando su versión de archivo es igual o posterior a la versión del manifiesto; aun así, se comprueba su firma.
:::

## Parámetros

### Parámetros obligatorios

* `VcList` - Entradas de `Get-VcList`

### Parámetros opcionales

* `Path` - Carpeta de destino; de forma predeterminada, es el directorio actual
* `Proxy` - Especifica un servidor proxy para descargar los Redistributables de Visual C++
* `ProxyCredential` - Si el servidor proxy requiere autenticación, se pueden especificar credenciales como un objeto PSCredential
* `ShowProgress` - Muestra el progreso de la descarga
* `UserAgent` - Establece el agente de usuario de la solicitud
* `SkipAuthenticodeValidation` - Omite las comprobaciones de firma. Úselo solo si tiene un motivo explícito para omitir la validación.
* `WhatIf` - Obtiene una vista previa de la creación de directorios y las descargas sin realizar cambios.

## Ejemplos

Para descargar la lista predeterminada de Redistributables en `C:\Temp\VcRedist`, use el siguiente comando:

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
```

Los Redistributables se descargan en la carpeta de destino:

![Redistributables de Microsoft Visual C++ instalados en el equipo local](/images/vcredist-folder.png)

Pase la lista de Redistributables x86 compatibles de las versiones `2013` y `2019` a Save-VcRedist para descargarlos en C:\Redist.

```powershell
$VcList = Get-VcList -Release 2013, 2019 -Architecture x86
Save-VcRedist -VcList $VcList -Path C:\Redist
```

Descargue los Redistributables de Visual C++ `2012`, `2013` y `2019` en C:\Redist.

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist
```

Descargue los Redistributables de Visual C++ `2012`, `2013` y `2019` en C:\Redist usando el servidor proxy 'proxy.domain.local'.

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist -Proxy proxy.domain.local
```
