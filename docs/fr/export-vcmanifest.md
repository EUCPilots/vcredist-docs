# Exporter le manifeste

`Export-VcManifest` écrit le manifeste VcRedist sélectionné dans un dossier sous le nom `VisualCRedistributables.json`. Le manifeste v5 utilise un schéma plat comprenant `SchemaVersion`, `Updated`, `InstallOrder` et `Entries` ; chaque entrée comporte un indicateur `Supported`. Il n'est pas possible de remplacer la source du manifeste par un fichier local.

## Paramètres

### Paramètres obligatoires

* `Path` - Répertoire existant dans lequel le manifeste sera écrit

### Paramètres facultatifs

* `Source` - Sélectionne `Auto` (par défaut), `Remote` ou `Bundled`. `Auto` utilise le manifeste distant, sauf s'il est indisponible ou plus ancien que la copie locale.
* `Proxy`, `ProxyCredential` - Configure un proxy lors de la récupération du manifeste distant.
* `WhatIf` - Paramètre PowerShell courant qui permet de prévisualiser l'exportation sans écrire le fichier.

## Exemples

Exporter le manifeste VcRedist dans `C:\Temp`. Le manifeste sera exporté vers `C:\Temp\VisualCRedistributables.json` :

```powershell
Export-VcManifest -Path C:\Temp
```

Exporter le manifeste et examiner les entrées prises en charge :

```powershell
Export-VcManifest -Path C:\Temp
$Manifest = Get-Content -Path C:\Temp\VisualCRedistributables.json | ConvertFrom-Json
$Manifest.Entries | Where-Object Supported
```

Exporter le manifeste fourni avec le module sans requête réseau :

```powershell
Export-VcManifest -Path C:\Temp -Source Bundled
```
