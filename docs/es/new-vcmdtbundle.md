# Crear un conjunto de Redistributables en MDT

::: warning
Los comandos de MDT de VcRedist 5 están en desuso y podrían quitarse en una versión principal futura. El soporte se ofrece según el mejor esfuerzo.
:::

Una vez importados los Redistributables de Visual C++ en un recurso compartido de implementación de MDT, estarán disponibles como aplicaciones individuales que se pueden agregar a una secuencia de tareas. Para simplificar su selección, se pueden agregar a un conjunto de aplicaciones. Un conjunto es una aplicación del recurso compartido de MDT que no instala aplicaciones por sí misma, sino que incluye otras aplicaciones como dependencias. Así, con una sola acción en una secuencia de tareas, un conjunto puede instalar un grupo de aplicaciones en un orden específico.

La propiedad Version del conjunto se establece con la fecha actual para que sea fácil saber cuándo se creó o actualizó por última vez.

## Parámetros

### Parámetros obligatorios

* `MdtPath` - Ruta local o de red al recurso compartido de implementación de MDT

### Parámetros opcionales

* `AppFolder` - Importa los Redistributables de Visual C++ en una subcarpeta. El valor predeterminado es `VcRedists`.
* `MdtDrive` - Letra de unidad que se asignará al recurso compartido de implementación de MDT. No es obligatorio; el valor predeterminado es `DS001`.
* `Publisher` - Editor asignado al conjunto de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es `Microsoft`.
* `BundleName` - Nombre corto asignado al conjunto de Redistributables de Visual C++. No es obligatorio; el valor predeterminado es `Visual C++ Redistributables`.
* `Language` - El valor predeterminado es `en-US`.

## Ejemplos

Para crear el conjunto en el recurso compartido de implementación de destino, ejecute `New-VcMdtBundle`. Esta función buscará Redistributables de Visual C++ en la carpeta de aplicaciones predeterminada (VcRedists) y creará un conjunto con cada aplicación Redistributable como dependencia, en orden de la versión más antigua a la más reciente.

```powershell
New-VcMdtBundle -MdtPath \\server\deployment
```
