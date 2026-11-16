# Mettre à jour le bundle de redistribuables dans MDT

::: warning
Les commandes MDT de VcRedist 5 sont obsolètes et pourraient être supprimées dans une prochaine version majeure. La prise en charge est assurée dans la mesure du possible.
:::

Si le bundle de redistribuables Visual C++ d'un partage de déploiement MDT doit être mis à jour en fonction des applications Redistributable actuellement présentes dans le partage, `Update-VcMdtBundle` analyse le partage et remplace les dépendances de l'ancien bundle par les applications Visual C++ actuelles.

La propriété Version du bundle est mise à jour avec la date actuelle, ce qui permet de savoir facilement quand le bundle a été mis à jour pour la dernière fois.

## Paramètres

### Paramètres obligatoires

* `MdtPath` - Chemin local ou réseau du partage de déploiement MDT

### Paramètres facultatifs

* `AppFolder` - Met à jour le bundle des redistribuables Visual C++ dans un sous-dossier. La valeur par défaut est `VcRedists`.
* `MdtDrive` - Lettre du lecteur associé au partage de déploiement MDT. Facultatif ; la valeur par défaut est `DS001`.
* `Publisher` - Éditeur attribué au bundle des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Microsoft`.
* `BundleName` - Nom court attribué au bundle des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Visual C++ Redistributables`.
* `Language` - Langue par défaut : `en-US`

## Exemples

Pour créer le bundle dans le partage de déploiement cible, exécutez `Update-VcMdtBundle`. Cette fonction recherche les redistribuables Visual C++ dans le dossier d'applications par défaut (`VcRedists`) et met à jour le bundle existant en ajoutant chaque application Redistributable comme dépendance, de la plus ancienne à la plus récente.

```powershell
Update-VcMdtBundle -MdtPath \\server\deployment
```
