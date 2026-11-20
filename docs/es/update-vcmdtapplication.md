# Actualizar Redistributables en MDT

::: warning
Los comandos de MDT de VcRedist 5 están en desuso y podrían quitarse en una versión principal futura. El soporte se ofrece según el mejor esfuerzo.
:::

Use `Update-VcMdtApplication` para actualizar los Redistributables de Visual C++ que se hayan importado previamente en Microsoft Deployment Toolkit con `Import-VcMdtApplication`. A medida que se publican actualizaciones de Redistributables de Visual C++ (normalmente, actualizaciones de versiones existentes), puede ser necesario actualizar las aplicaciones existentes. Aunque `Import-VcMdtApplication` admite el parámetro `-Force`, primero eliminará la aplicación existente y la volverá a importar. `Update-VcMdtApplication` actualiza las propiedades de la aplicación existente y conserva su GUID.

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

Actualice los Redistributables `2012`, `2013` y `14` de un recurso compartido de implementación de MDT con la línea de comandos de instalación totalmente silenciosa:

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Update-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
