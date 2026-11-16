# Créer un bundle de redistribuables dans MDT

::: warning
Les commandes MDT de VcRedist 5 sont obsolètes et pourraient être supprimées dans une prochaine version majeure. La prise en charge est assurée dans la mesure du possible.
:::

Une fois les redistribuables Visual C++ importés dans un partage de déploiement MDT, ils sont disponibles sous forme d'applications individuelles pouvant être ajoutées à une séquence de tâches. Pour simplifier leur sélection, vous pouvez les regrouper dans un bundle d'applications. Un bundle est une application du partage MDT qui n'installe pas elle-même d'applications, mais inclut d'autres applications comme dépendances. Il permet ainsi d'installer un ensemble d'applications dans un ordre précis au moyen d'une seule action dans une séquence de tâches.

La propriété Version du bundle est renseignée avec la date actuelle, ce qui permet de savoir facilement quand il a été créé ou mis à jour pour la dernière fois.

## Paramètres

### Paramètres obligatoires

* `MdtPath` - Chemin local ou réseau du partage de déploiement MDT

### Paramètres facultatifs

* `AppFolder` - Importe les redistribuables Visual C++ dans un sous-dossier. La valeur par défaut est `VcRedists`.
* `MdtDrive` - Lettre du lecteur associé au partage de déploiement MDT. Facultatif ; la valeur par défaut est `DS001`.
* `Publisher` - Éditeur attribué au bundle des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Microsoft`.
* `BundleName` - Nom court attribué au bundle des redistribuables Visual C++. Facultatif ; la valeur par défaut est `Visual C++ Redistributables`.
* `Language` - Langue par défaut : `en-US`

## Exemples

Pour créer le bundle dans le partage de déploiement cible, exécutez `New-VcMdtBundle`. Cette fonction recherche les redistribuables Visual C++ dans le dossier d'applications par défaut (`VcRedists`) et crée un bundle dont chaque application Redistributable est une dépendance, dans l'ordre chronologique, de la plus ancienne à la plus récente.

```powershell
New-VcMdtBundle -MdtPath \\server\deployment
```
