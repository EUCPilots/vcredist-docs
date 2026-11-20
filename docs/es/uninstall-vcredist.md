# Desinstalar los Redistributables

Para desinstalar los Redistributables de Visual C++ del equipo local, use `Uninstall-VcRedist`. Esta función acepta la versión y la arquitectura de los Redistributables de Visual C++ e intentará desinstalar silenciosamente los Redistributables seleccionados.

`Uninstall-VcRedist` requiere una sesión elevada de PowerShell en Windows. Usa el comportamiento de confirmación de alto impacto de PowerShell; use `-Confirm` para solicitar confirmación explícitamente o `-Confirm:$false` para suprimir el aviso.

## Parámetros

### Parámetros obligatorios

Ninguno. Si no se usan filtros, el comando selecciona los Redistributables instalados de todas las versiones (incluida `2022`) y las arquitecturas x86 y x64. ARM64 está disponible mediante `-Architecture ARM64`, pero no se selecciona de forma predeterminada. De forma predeterminada, solicita confirmación antes de desinstalar.

### Parámetros opcionales

* `Confirm` - Controla el aviso de confirmación de PowerShell. `-Confirm:$false` lo suprime.
* `Release` - Especifica la versión de los Redistributables que se desinstalarán (por ejemplo, `14`, `2019`, `2012`, etc.).
* `Architecture` - Especifica la arquitectura que se desinstalará: `x86`, `x64` o `ARM64`. De forma predeterminada, usa x86 y x64.
* `VcList` - Acepta entradas de `Get-VcList` o `Get-InstalledVcRedist` mediante la canalización para seleccionar Redistributables específicos que se desinstalarán.

## Ejemplos

El siguiente comando desinstalará todos los Redistributables de Visual C++ actualmente instalados en el sistema local.

```powershell
Uninstall-VcRedist -Confirm
```

Este comando desinstalará cualquier versión `2008` de los Redistributables de Visual C++ instalados.

```powershell
Uninstall-VcRedist -Release 2008
```

Desinstale las entradas seleccionadas del inventario de instalaciones:

```powershell
Get-InstalledVcRedist | Where-Object Release -eq "14" | Uninstall-VcRedist
```

El comando devuelve un objeto de estado para cada elemento seleccionado. `State` es `Uninstalled` si la eliminación se realiza correctamente, `Not installed` si el producto ya no estaba instalado y `Failed` si no se puede ejecutar el desinstalador o devuelve un código de salida inesperado. Si se especifican explícitamente `-Release` y `-Architecture` en modo manual, las combinaciones que falten también se devuelven como `Not installed`.
