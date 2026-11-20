# Désinstaller les redistribuables

Pour désinstaller les redistribuables Visual C++ de la machine locale, utilisez `Uninstall-VcRedist`. Cette fonction accepte la version et l'architecture des redistribuables Visual C++ et tente de désinstaller silencieusement les redistribuables ciblés.

`Uninstall-VcRedist` nécessite une session PowerShell élevée sous Windows. La fonction utilise le mécanisme de confirmation PowerShell pour les opérations à fort impact ; utilisez `-Confirm` pour demander explicitement une confirmation ou `-Confirm:$false` pour supprimer l'invite.

## Paramètres

### Paramètres obligatoires

Aucun. Sans filtre, la commande sélectionne les redistribuables installés de toutes les versions (y compris `2022`) et des architectures x86 et x64. ARM64 est disponible avec `-Architecture ARM64`, mais n'est pas sélectionnée par défaut. Par défaut, une confirmation est demandée avant la désinstallation.

### Paramètres facultatifs

* `Confirm` - Contrôle l'invite de confirmation PowerShell. `-Confirm:$false` la supprime.
* `Release` - Spécifie la version (ou la génération) des redistribuables à désinstaller (par exemple `14`, `2019`, `2012`, etc.)
* `Architecture` - Spécifie l'architecture à désinstaller : `x86`, `x64` ou `ARM64`. Par défaut, x86 et x64 sont sélectionnés.
* `VcList` - Accepte les entrées de `Get-VcList` ou `Get-InstalledVcRedist` transmises dans le pipeline afin de sélectionner des redistribuables particuliers.

## Exemples

La commande suivante désinstalle tous les redistribuables Visual C++ actuellement installés sur le système local.

```powershell
Uninstall-VcRedist -Confirm
```

Cette commande désinstalle les redistribuables Visual C++ installés de la version `2008`.

```powershell
Uninstall-VcRedist -Release 2008
```

Désinstaller les entrées sélectionnées dans l'inventaire des éléments installés :

```powershell
Get-InstalledVcRedist | Where-Object Release -eq "14" | Uninstall-VcRedist
```

La commande retourne un objet d'état pour chaque élément sélectionné. `State` vaut `Uninstalled` lorsque la suppression réussit, `Not installed` lorsque le produit était déjà absent et `Failed` lorsque le programme de désinstallation ne peut pas s'exécuter ou retourne un code de sortie inattendu. Lorsque `-Release` et `-Architecture` sont tous deux explicitement spécifiés en mode manuel, les combinaisons manquantes sont également retournées avec l'état `Not installed`.
