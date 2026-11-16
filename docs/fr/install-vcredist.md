# Installer les redistribuables

Une [option d'installation rapide](https://vcredist.com/quick/) est proposée. Pour installer les redistribuables Visual C++ de façon personnalisée sur une machine locale, utilisez `Install-VcRedist`. Cette fonction accepte le tableau de redistribuables Visual C++ fourni par `Get-VcList` et installe les redistribuables téléchargés dans un chemin local avec `Save-VcRedist`. La sortie de `Save-VcRedist` est nécessaire, car elle contient la propriété `Path`, renseignée avec le chemin de chaque programme d'installation.

`Install-VcRedist` nécessite une session PowerShell élevée sous Windows. La fonction valide la signature Microsoft Authenticode de chaque programme d'installation, installe les versions dans l'ordre défini par le manifeste et vérifie les codes de sortie des programmes d'installation. L'installation passive est utilisée par défaut ; utilisez `-Silent` pour une installation silencieuse.

Une fois les redistribuables Visual C++ installés, la liste des redistribuables présents est renvoyée dans le pipeline par `Get-InstalledVcRedist`.

## Paramètres

### Paramètres obligatoires

* `VcList` - Tableau contenant les informations des redistribuables Visual C++ provenant de `Save-VcRedist`

### Paramètres facultatifs

* `Silent` - Utilise les arguments d'installation silencieuse du manifeste au lieu des arguments passifs
* `Force` - Réinstalle les entrées déjà installées et autorise l'installation lorsque l'architecture du package n'est pas recommandée pour le système d'exploitation actuel. Sous ARM64, ce paramètre peut forcer l'installation des programmes x64.

## Exemples

Les commandes suivantes installent les redistribuables Visual C++ pris en charge par défaut, téléchargés localement avec `Save-VcRedist` dans `C:\Temp\VcRedist`.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Install-VcRedist -VcList $VcList
```

Vous pouvez simplifier ces commandes en transmettant la sortie à la commande suivante au moyen du pipeline :

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist | Install-VcRedist
```

Pour utiliser des arguments de ligne de commande d'installation entièrement silencieuse, spécifiez le paramètre `-Silent` lors de l'installation des redistribuables.

```powershell
Install-VcRedist -VcList (Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist) -Silent
```

![Redistribuables Microsoft Visual C++ installés sur le PC local](/images/visualcprograms.png)
