# Désinstaller les redistribuables

Pour désinstaller les redistribuables Visual C++ de la machine locale, utilisez `Uninstall-VcRedist`. Cette fonction accepte la version et l'architecture des redistribuables Visual C++ et tente de désinstaller silencieusement les redistribuables ciblés.

`Uninstall-VcRedist` nécessite une session PowerShell élevée sous Windows. La fonction utilise le mécanisme de confirmation PowerShell pour les opérations à fort impact ; utilisez `-Confirm` pour demander explicitement une confirmation ou `-Confirm:$false` pour supprimer l'invite.

## Paramètres

### Paramètres obligatoires

Aucun. Sans filtre, la commande sélectionne les redistribuables installés de toutes les versions et des architectures x86 et x64. Par défaut, une confirmation est demandée avant la désinstallation.

### Paramètres facultatifs

* `Confirm` - Contrôle l'invite de confirmation PowerShell. `-Confirm:$false` la supprime.
* `Release` - Spécifie la version (ou la génération) des redistribuables à désinstaller (par exemple `14`, `2019`, `2012`, etc.)
* `Architecture` - Spécifie l'architecture à désinstaller : `x86`, `x64` ou `ARM64`. Par défaut, x86 et x64 sont sélectionnés.
* `VcList` - Accepte les entrées du manifeste transmises dans le pipeline afin de sélectionner certains redistribuables à désinstaller.

## Exemples

La commande suivante désinstalle tous les redistribuables Visual C++ actuellement installés sur le système local.

```powershell
Uninstall-VcRedist -Confirm
```

Cette commande désinstalle les redistribuables Visual C++ installés de la version `2008`.

```powershell
Uninstall-VcRedist -Release 2008
```
