# Importar Redistributables en MDT

::: info
Microsoft ya no admite Microsoft Deployment Toolkit. Cualquier soporte de MDT por parte de VcRedist se ofrecerá según el mejor esfuerzo.
:::

::: warning
Los comandos de MDT de VcRedist 5 están en desuso y podrían quitarse en una versión principal futura.
:::

Para instalar los Redistributables de Visual C++ como parte de una imagen de referencia o para usarlos con una solución de implementación basada en Microsoft Deployment Toolkit (MDT), `Import-VcMdtApplication` importa cada Redistributable de Visual C++ como una aplicación independiente que incluye las líneas de comandos pasivas o silenciosas, la compatibilidad con plataformas y `UninstallKey` para detectar si el Redistributable de Visual C++ ya está instalado.

Puede filtrar los Redistributables de Visual C++ por versión y arquitectura del procesador con `Get-VcList` antes de pasarlos a `Save-VcRedist` y `Import-VcMdtApplication`. Se requiere el resultado de `Save-VcRedist`, ya que incluye la propiedad `Path` con la ruta de cada instalador.

## Parámetros

### Parámetros obligatorios

* `VcList` - Matriz que contiene los detalles de los Redistributables de Visual C++ de `Save-VcRedist`
* `MdtPath` - Ruta local o de red al recurso compartido de implementación de MDT

### Parámetros opcionales

* `Silent` - Configura el comando de instalación de la aplicación MDT para que sea totalmente silencioso en lugar de usar la línea de comandos de instalación pasiva predeterminada
* `Force` - Fuerza la sobrescritura de una aplicación de Redistributable de Visual C++ existente
* `AppFolder` - Importa los Redistributables de Visual C++ en una subcarpeta. El valor predeterminado es `VcRedists`.
* `MdtDrive` - Letra de unidad que se asignará al recurso compartido de implementación de MDT. No es obligatorio; el valor predeterminado es `DS001`.
* `Publisher` - Editor asignado al conjunto de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es "Microsoft".
* `Language` - Idioma asignado al conjunto de Redistributables de Visual C++. El valor predeterminado es `en-US`.

## Ejemplos

Importe los Redistributables compatibles `2012`, `2013` y `14` en un recurso compartido de implementación de MDT:

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment
```

Cada Redistributable se importará en el recurso compartido de implementación con las propiedades de aplicación necesarias para una implementación correcta.

![Aplicaciones de Redistributables de Microsoft Visual C++ importadas en un recurso compartido de MDT](/images/mdtvisualcapplications.png)

La estructura de carpetas del recurso compartido de implementación será similar a esta:

![Redistributables de Visual C++ en la carpeta Application del recurso compartido de implementación](/images/mdtvisualcapplicationsfolder.png)

Los argumentos de línea de comandos de instalación usados de forma predeterminada son pasivos. Al importar las aplicaciones en un recurso compartido de implementación de MDT, se pueden especificar argumentos para una instalación totalmente silenciosa con el parámetro `-Silent`.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
