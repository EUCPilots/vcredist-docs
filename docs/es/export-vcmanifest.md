# Exportar el manifiesto

`Export-VcManifest` escribe el manifiesto de VcRedist seleccionado en una carpeta como `VisualCRedistributables.json`. El manifiesto v5 tiene un esquema plano que contiene `SchemaVersion`, `Updated`, `InstallOrder` y `Entries`; cada entrada tiene una marca `Supported`. No se puede reemplazar el origen del manifiesto con un archivo local.

## Parámetros

### Parámetros obligatorios

* `Path` - Directorio existente donde se escribirá el manifiesto

### Parámetros opcionales

* `Source` - Selecciona `Auto` (predeterminado), `Remote` o `Bundled`. `Auto` usa el manifiesto remoto salvo que no esté disponible o sea anterior a la copia incluida.
* `Proxy`, `ProxyCredential` - Configuran un proxy al recuperar el manifiesto remoto.
* `WhatIf` - Parámetro común de PowerShell para obtener una vista previa de la exportación sin escribir el archivo.

## Ejemplos

Exporte el manifiesto de VcRedist en `C:\Temp`. El manifiesto se exportará a `C:\Temp\VisualCRedistributables.json`:

```powershell
Export-VcManifest -Path C:\Temp
```

Exporte el manifiesto y examine las entradas compatibles:

```powershell
Export-VcManifest -Path C:\Temp
$Manifest = Get-Content -Path C:\Temp\VisualCRedistributables.json | ConvertFrom-Json
$Manifest.Entries | Where-Object Supported
```

Exporte el manifiesto incluido sin realizar una solicitud de red:

```powershell
Export-VcManifest -Path C:\Temp -Source Bundled
```
