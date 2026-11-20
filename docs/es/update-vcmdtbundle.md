# Actualizar el conjunto de Redistributables en MDT

::: warning
Los comandos de MDT de VcRedist 5 están en desuso y podrían quitarse en una versión principal futura. El soporte se ofrece según el mejor esfuerzo.
:::

Si es necesario actualizar el conjunto de Redistributables de Visual C++ de una implementación de MDT para incluir las aplicaciones de Redistributables que se encuentran actualmente en el recurso compartido, `Update-VcMdtBundle` examina el recurso compartido de implementación y reemplaza las dependencias del conjunto existente con las aplicaciones de Redistributables de Visual C++ actuales.

La propiedad Version del conjunto se actualiza con la fecha actual para que sea fácil saber cuándo se actualizó por última vez.

## Parámetros

### Parámetros obligatorios

* `MdtPath` - Ruta local o de red al recurso compartido de implementación de MDT

### Parámetros opcionales

* `AppFolder` - Actualiza el conjunto de Redistributables de Visual C++ en una subcarpeta. El valor predeterminado es `VcRedists`.
* `MdtDrive` - Letra de unidad que se asignará al recurso compartido de implementación de MDT. No es obligatorio; el valor predeterminado es `DS001`.
* `Publisher` - Editor asignado al conjunto de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es `Microsoft`.
* `BundleName` - Nombre corto asignado al conjunto de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es `Visual C++ Redistributables`.
* `Language` - El valor predeterminado es `en-US`.

## Ejemplos

Para actualizar el conjunto en el recurso compartido de implementación de destino, ejecute `Update-VcMdtBundle`. Esta función buscará Redistributables de Visual C++ en la carpeta de aplicaciones predeterminada (VcRedists) y actualizará el conjunto existente con cada aplicación Redistributable como dependencia, en orden de la versión más antigua a la más reciente.

```powershell
Update-VcMdtBundle -MdtPath \\server\deployment
```
