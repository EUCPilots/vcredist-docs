# Mettre à jour les redistribuables dans MDT

::: warning
Les commandes MDT de VcRedist 5 sont obsolètes et pourraient être supprimées dans une prochaine version majeure. La prise en charge est assurée dans la mesure du possible.
:::

Utilisez `Update-VcMdtApplication` pour mettre à jour les redistribuables Visual C++ précédemment importés dans Microsoft Deployment Toolkit avec `Import-VcMdtApplication`. À mesure que de nouvelles versions des redistribuables Visual C++ sont publiées (généralement sous forme de mises à jour des versions existantes), les applications existantes peuvent nécessiter une mise à jour. `Import-VcMdtApplication` accepte le paramètre `-Force`, mais commence par supprimer l'application existante avant de la réimporter. `Update-VcMdtApplication` met à jour les propriétés de l'application existante tout en conservant son GUID.

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

Mettre à jour les redistribuables `2012`, `2013` et `14` du partage MDT avec une ligne de commande d'installation entièrement silencieuse :

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Update-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
