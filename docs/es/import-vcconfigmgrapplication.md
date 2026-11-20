# Importar Redistributables en ConfigMgr

Para instalar los Redistributables de Visual C++ con Microsoft Configuration Manager, use `Import-VcConfigMgrApplication` para importar cada Redistributable de Visual C++ como una aplicación independiente con la aplicación y un único tipo de implementación.

Puede filtrar los Redistributables de Visual C++ por versión y arquitectura del procesador con `Get-VcList` antes de pasarlos a `Save-VcRedist` y `Import-VcConfigMgrApplication`. Se requiere el resultado de `Save-VcRedist`, ya que incluye la propiedad `Path` con la ruta de cada instalador.

## Parámetros

### Parámetros obligatorios

* `VcList` - Matriz que contiene los detalles de los Redistributables de Visual C++ de `Save-VcRedist`
* `CMPath` - Especifica una ruta UNC desde la que se distribuirán los Redistributables de Visual C++
* `SMSSiteCode` - Especifica el código del sitio para crear aplicaciones en ConfigMgr

### Parámetros opcionales

* `Silent` - Usa el comando de instalación silenciosa en lugar del comando pasivo predeterminado
* `AppFolder` - Importa los Redistributables de Visual C++ en una subcarpeta. El valor predeterminado es `VcRedists`.
* `NoCopy` - No copia los instaladores descargados en la ruta de contenido especificada.
* `Publisher` - Editor asignado a la aplicación de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es `Microsoft`.
* `Keyword` - Palabra clave asignada a la aplicación de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es `Visual C++ Redistributables`.
* `WhatIf` - Obtiene una vista previa de los cambios en ConfigMgr sin aplicarlos.
* `Language` - Idioma asignado a la aplicación de Redistributables de Visual C++. El valor predeterminado es `en-US`.

## Ejemplos

Para importar los Redistributables de Visual C++ como aplicaciones con un único tipo de implementación en ConfigMgr. Esto incluye copiar los instaladores descargados a una ruta de red.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB
```

Los argumentos de línea de comandos de instalación usados de forma predeterminada son pasivos. Al importar las aplicaciones en Configuration Manager, se pueden especificar argumentos de línea de comandos para una instalación totalmente silenciosa con el parámetro `-Silent`.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB -Silent
```

![Aplicaciones de Redistributables de Microsoft Visual C++ importadas en ConfigMgr](/images/vcredistconfigmgr.png)
