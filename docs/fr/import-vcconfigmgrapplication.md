# Importer des redistribuables dans ConfigMgr

Pour installer les redistribuables Visual C++ avec Microsoft Configuration Manager, utilisez `Import-VcConfigMgrApplication` pour importer chaque redistribuable Visual C++ en tant qu'application distincte comportant l'application et un seul type de déploiement.

Vous pouvez filtrer les redistribuables Visual C++ par version et architecture du processeur avec `Get-VcList`, avant de transmettre les résultats à `Save-VcRedist` et `Import-VcConfigMgrApplication`. La sortie de `Save-VcRedist` est nécessaire, car elle contient la propriété `Path`, renseignée avec le chemin de chaque programme d'installation.

## Paramètres

### Paramètres obligatoires

* `VcList` - Tableau contenant les informations des redistribuables Visual C++ provenant de `Save-VcRedist`
* `CMPath` - Spécifie un chemin UNC depuis lequel les redistribuables Visual C++ seront distribués
* `SMSSiteCode` - Spécifie le code de site à utiliser pour créer l'application ConfigMgr

### Paramètres facultatifs

* `Silent` - Utilise la commande d'installation silencieuse au lieu de la commande passive par défaut
* `AppFolder` - Importe les redistribuables Visual C++ dans un sous-dossier. La valeur par défaut est `VcRedists`.
* `NoCopy` - Ne copie pas les programmes d'installation téléchargés dans le chemin de contenu spécifié.
* `Publisher` - Éditeur attribué à l'application des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Microsoft`.
* `Keyword` - Mot-clé attribué à l'application des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Visual C++ Redistributables`.
* `WhatIf` - Prévisualise les modifications ConfigMgr sans les appliquer.
* `Language` - Langue attribuée à l'application des redistribuables Visual C++. La valeur par défaut est `en-US`.

## Exemples

Importer les redistribuables Visual C++ dans ConfigMgr en tant qu'applications avec un seul type de déploiement. L'exemple copie également les programmes d'installation téléchargés vers un chemin réseau.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB
```

Par défaut, les arguments de ligne de commande utilisés pour l'installation sont passifs. Lors de l'importation des applications dans Configuration Manager, vous pouvez spécifier des arguments d'installation entièrement silencieuse avec le paramètre `-Silent`.

```powershell
$VcList = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist"
Import-VcConfigMgrApplication -VcList $VcList -CMPath "\\server\share\VcRedist" -SMSSiteCode LAB -Silent
```

![Applications de redistribuables Microsoft Visual C++ importées dans ConfigMgr](/images/vcredistconfigmgr.png)
