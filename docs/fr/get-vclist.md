# Obtenir la liste VcRedist

`Get-VcList` retourne les entrées du manifeste VcRedist. Par défaut, la fonction retourne les entrées prises en charge pour la version `14` et les architectures x86, x64 et ARM64. Utilisez `-Release` et `-Architecture` pour sélectionner d'autres versions et architectures prises en charge. Sauf besoin particulier, installez uniquement les [redistribuables pris en charge par Microsoft](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

Par défaut, le manifeste est résolu depuis le dépôt VcRedist. Si le manifeste distant est indisponible ou plus ancien que le manifeste fourni avec le module, la copie locale est utilisée.

## Paramètres

* `Release` - Sélectionne les versions prises en charge, par exemple `14`, `2017` ou `2019`. La valeur par défaut est `14`.
* `Architecture` - Sélectionne `x86`, `x64` ou `arm64`. Par défaut, les trois architectures sont sélectionnées.
* `Export` - Retourne les entrées `Supported` (par défaut), `Unsupported` ou `All`.
* `Source` - Sélectionne la résolution du manifeste `Auto` (par défaut), `Remote` ou `Bundled`.
* `Proxy`, `ProxyCredential` - Configure un proxy pour récupérer le manifeste distant.

Sans `-Export`, les entrées sont filtrées par `-Release` et `-Architecture`. La version `2015` n'est plus prise en charge et n'est pas incluse dans la requête normale des versions prises en charge.

Pour retourner les entrées non prises en charge ou toutes les entrées, utilisez `-Export Unsupported` ou `-Export All`. Ces jeux de paramètres ne peuvent pas être combinés avec `-Release` ou `-Architecture` ; au besoin, filtrez leur sortie avec `Where-Object`. La commande émet un avertissement lorsqu'elle retourne des entrées non prises en charge.

## Exemples

Retourner la liste prise en charge par défaut :

```powershell
Get-VcList
```

Retourner les entrées x64 prises en charge pour les versions 2017 et 2019 :

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
```

Retourner toutes les entrées du manifeste et filtrer les entrées x64 :

```powershell
Get-VcList -Export All | Where-Object { $_.Architecture -eq "x64" }
```

Retourner les entrées x64 non prises en charge pour les versions 2008 et 2010 :

```powershell
Get-VcList -Export Unsupported | Where-Object { $_.Release -in "2008", "2010" -and $_.Architecture -eq "x64" }
```

Utiliser le manifeste fourni avec le module sans requête réseau :

```powershell
Get-VcList -Source Bundled
```

Pour transmettre des entrées à `Install-VcRedist` ou à une fonction d'importation de déploiement, faites-les d'abord passer par `Save-VcRedist`. Cette fonction télécharge et valide les programmes d'installation, puis ajoute à chaque entrée une propriété `Path`.
