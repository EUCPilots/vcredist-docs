# Instalar los Redistributables

Se ofrece una [opción de instalación rápida](https://vcredist.com/quick/); sin embargo, para realizar una instalación personalizada de los Redistributables de Visual C++ en un equipo local, use `Install-VcRedist`. Esta función acepta la matriz de Redistributables de Visual C++ que se pasa desde `Get-VcList` e instala los Redistributables descargados en una ruta local con `Save-VcRedist`. Se requiere el resultado de `Save-VcRedist`, ya que incluye la propiedad `Path` con la ruta de cada instalador.

`Install-VcRedist` requiere una sesión elevada de PowerShell en Windows. Valida la firma Microsoft Authenticode de cada instalador, instala las versiones en el orden declarado en el manifiesto y comprueba los códigos de salida del instalador. La instalación pasiva es la opción predeterminada; use `-Silent` para una instalación silenciosa.

Una vez instalados los Redistributables de Visual C++, la lista de Redistributables instalados se devuelve a la canalización desde `Get-InstalledVcRedist`.

## Parámetros

### Parámetros obligatorios

* `VcList` - Matriz que contiene los detalles de los Redistributables de Visual C++ de `Save-VcRedist`

### Parámetros opcionales

* `Silent` - Usa los argumentos de instalación silenciosa del manifiesto en lugar de los argumentos pasivos
* `Force` - Reinstala las entradas ya instaladas y permite la instalación cuando la arquitectura del paquete no es la recomendada para el sistema operativo actual. En ARM64, puede usarse para forzar instaladores x64.

## Ejemplos

Los siguientes comandos instalarán los Redistributables de Visual C++ compatibles predeterminados, descargados localmente con `Save-VcRedist` en `C:\Temp\VcRedist`.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Install-VcRedist -VcList $VcList
```

Estos comandos pueden simplificarse pasando el resultado al siguiente comando mediante la canalización:

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist | Install-VcRedist
```

Al instalar los Redistributables, se pueden especificar argumentos de línea de comandos para una instalación totalmente silenciosa con el parámetro `-Silent`.

```powershell
Install-VcRedist -VcList (Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist) -Silent
```

![Redistributables de Microsoft Visual C++ instalados en el equipo local](/images/visualcprograms.png)
