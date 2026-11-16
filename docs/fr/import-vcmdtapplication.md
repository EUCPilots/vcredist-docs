# Importer des redistribuables dans MDT

::: info
Microsoft ne prend plus en charge Microsoft Deployment Toolkit. Toute prise en charge de MDT par VcRedist est assurée dans la mesure du possible.
:::

::: warning
Les commandes MDT de VcRedist 5 sont obsolètes et pourraient être supprimées dans une prochaine version majeure.
:::

Pour installer les redistribuables Visual C++ dans une image de référence ou les utiliser avec une solution de déploiement basée sur Microsoft Deployment Toolkit (MDT), `Import-VcMdtApplication` importe chaque redistribuable Visual C++ comme application distincte. Chaque application comprend des commandes d'installation passives ou silencieuses, la prise en charge de la plateforme et la clé `UninstallKey`, qui permet de détecter si le redistribuable Visual C++ est déjà installé.

Vous pouvez filtrer les redistribuables Visual C++ par version et architecture du processeur avec `Get-VcList`, avant de transmettre les résultats à `Save-VcRedist` et `Import-VcMdtApplication`. La sortie de `Save-VcRedist` est nécessaire, car elle contient la propriété `Path`, renseignée avec le chemin de chaque programme d'installation.

## Paramètres

### Paramètres obligatoires

* `VcList` - Tableau contenant les informations des redistribuables Visual C++ provenant de `Save-VcRedist`
* `MdtPath` - Chemin local ou réseau du partage de déploiement MDT

### Paramètres facultatifs

* `Silent` - Configure la commande d'installation de l'application MDT pour qu'elle soit entièrement silencieuse au lieu d'utiliser la ligne de commande passive par défaut
* `Force` - Force le remplacement d'une application Redistributable Visual C++ existante
* `AppFolder` - Importe les redistribuables Visual C++ dans un sous-dossier. La valeur par défaut est `VcRedists`.
* `MdtDrive` - Lettre du lecteur associé au partage de déploiement MDT. Facultatif ; la valeur par défaut est `DS001`.
* `Publisher` - Éditeur attribué au bundle des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Microsoft`.
* `Language` - Langue attribuée au bundle des redistribuables Visual C++. La valeur par défaut est `en-US`.

## Exemples

Importer dans un partage de déploiement MDT les redistribuables pris en charge des versions `2012`, `2013` et `14` :

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment
```

Chaque redistribuable sera importé dans le partage de déploiement avec les propriétés d'application nécessaires à un déploiement réussi.

![Applications de redistribuables Microsoft Visual C++ importées dans un partage MDT](/images/mdtvisualcapplications.png)

La structure des dossiers dans le partage de déploiement sera semblable à ceci :

![Redistribuables Visual C++ dans le dossier Application du partage de déploiement](/images/mdtvisualcapplicationsfolder.png)

Par défaut, les arguments de ligne de commande utilisés pour l'installation sont passifs. Lors de l'importation des applications dans un partage de déploiement MDT, spécifiez le paramètre `-Silent` pour utiliser des arguments d'installation entièrement silencieuse.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
