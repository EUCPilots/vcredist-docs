# Obtener la lista de VcRedist

`Get-VcList` devuelve entradas del manifiesto de VcRedist. De forma predeterminada, devuelve las entradas compatibles para la versión `14` y las arquitecturas x86, x64 y ARM64. Use `-Release` y `-Architecture` para seleccionar otras versiones y arquitecturas compatibles. Salvo que tenga un requisito específico, instale únicamente los [Redistributables compatibles con Microsoft](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

De forma predeterminada, el manifiesto se resuelve desde el repositorio de VcRedist. Si el manifiesto remoto no está disponible o es anterior al manifiesto incluido, se usa la copia incluida.

## Parámetros

* `Release` - Selecciona versiones compatibles, como `14`, `2017` o `2019`. De forma predeterminada, es `14`.
* `Architecture` - Selecciona `x86`, `x64` o `arm64`. De forma predeterminada, se seleccionan las tres.
* `Export` - Devuelve las entradas `Supported` (predeterminado), `Unsupported` o `All`.
* `Source` - Selecciona la resolución del manifiesto `Auto` (predeterminado), `Remote` o `Bundled`.
* `Proxy`, `ProxyCredential` - Configuran un proxy para recuperar el manifiesto remoto.

Si no se especifica `-Export`, las entradas se filtran por `-Release` y `-Architecture`. `2015` ya no es compatible y no se incluye en la consulta normal de versiones compatibles.

Para devolver entradas no compatibles o todas las entradas, use `-Export Unsupported` o `-Export All`. Estos conjuntos de parámetros no se pueden combinar con `-Release` ni `-Architecture`; filtre el resultado con `Where-Object` si es necesario. El comando muestra una advertencia al devolver entradas no compatibles.

## Ejemplos

Devuelva la lista predeterminada de elementos compatibles:

```powershell
Get-VcList
```

Devuelva entradas x64 compatibles de las versiones 2017 y 2019:

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
```

Devuelva todas las entradas del manifiesto y filtre por x64:

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

Devuelva entradas x64 no compatibles de las versiones 2008 y 2010:

```powershell
Get-VcList -Export Unsupported | Where-Object { $_.Release -in "2008", "2010" -and $_.Architecture -eq "x64" }
```

Use el manifiesto incluido sin realizar una solicitud de red:

```powershell
Get-VcList -Source Bundled
```

Para pasar entradas a `Install-VcRedist` o a una función de importación de implementación, páselas primero por `Save-VcRedist`. Esta función descarga y valida los instaladores y agrega una propiedad `Path` a cada entrada.
