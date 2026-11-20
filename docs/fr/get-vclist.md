# Obtenir la liste VcRedist

`Get-VcList` retourne les entrées du manifeste VcRedist. Par défaut, la fonction retourne les entrées des versions `14` et des architectures x86, x64 et ARM64. Utilisez `-Release` et `-Architecture` pour sélectionner d'autres versions et architectures. Une sélection de version avec `-Release` peut inclure des entrées non prises en charge ; la commande émet un avertissement dans ce cas. Sauf besoin particulier, installez uniquement les [redistribuables pris en charge par Microsoft](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

Par défaut, le manifeste est résolu depuis le dépôt VcRedist. Si le manifeste distant est indisponible ou plus ancien que le manifeste fourni avec le module, la copie locale est utilisée.

## Paramètres

* `Release` - Sélectionne des versions, par exemple `14`, `2015`, `2017` ou `2019`. La valeur par défaut est `14` ; les entrées sélectionnées peuvent ne pas être prises en charge.
* `Architecture` - Sélectionne `x86`, `x64` ou `arm64`. Par défaut, les trois architectures sont sélectionnées.
* `Export` - Retourne les entrées `Supported` (par défaut), `Unsupported` ou `All`.
* `Source` - Sélectionne la résolution du manifeste `Auto` (par défaut), `Remote` ou `Bundled`.
* `Proxy`, `ProxyCredential` - Configure un proxy pour récupérer le manifeste distant.

Sans `-Export`, les entrées sont filtrées par `-Release` et `-Architecture`, sans filtrage selon leur état de prise en charge. Pour obtenir uniquement les entrées prises en charge, toutes versions confondues, utilisez `-Export Supported`.

Pour retourner les entrées non prises en charge ou toutes les entrées, utilisez `-Export Unsupported` ou `-Export All`. Ces jeux de paramètres ne peuvent pas être combinés avec `-Release` ou `-Architecture` ; au besoin, filtrez leur sortie avec `Where-Object`. La commande émet un avertissement lorsqu'elle retourne des entrées non prises en charge.

## Exemples

Retourner la liste prise en charge par défaut :

```powershell
Get-VcList
```

Retourner les entrées x64 des versions 2017 et 2019 :

```powershell
Get-VcList -Release 2017, 2019 -Architecture x64
```

Retourner l'entrée x64 non prise en charge de 2015. La commande émet un avertissement, car le résultat n'est pas pris en charge :

```powershell
Get-VcList -Release 2015 -Architecture x64
```

Retourner uniquement les entrées prises en charge, toutes versions confondues :

```powershell
Get-VcList -Export Supported
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
