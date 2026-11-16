# Supprimer des redistribuables Visual C++ de Microsoft Intune

`Remove-VcIntuneApplication` automatise la suppression des applications Win32 de redistribuables Visual C++ de Microsoft Intune. La fonction identifie les applications Intune à partir du `VcList` fourni et les supprime à l'aide du module IntuneWin32App.

## Fonctionnalités

- Supprime d'Intune les applications Win32 des redistribuables Visual C++
- Accepte un objet VcList (produit par `Save-VcRedist`) pour identifier les applications à supprimer
- Prend en charge `-WhatIf` et `-Confirm` pour une utilisation sécurisée
- Fournit une sortie détaillée pour le suivi des suppressions

## Prérequis

- Le module PowerShell [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) doit être installé et importé
- Vous devez être authentifié auprès d'Intune avec `Connect-MSIntuneGraph`
- Un jeton d'accès valide à l'API Microsoft Graph doit être présent

## Paramètres

- `VcList` (**obligatoire**) : tableau d'objets Redistributable Visual C++, généralement obtenus avec `Save-VcRedist`. Sert à identifier et supprimer les applications Intune correspondantes.

## Exemple d'utilisation

```powershell
# Get the list of redistributables you want to remove
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist

# Remove the corresponding Intune applications
Remove-VcIntuneApplication -VcList $VcList -Verbose -Confirm:$false
```

> **Conseil :** utilisez `-WhatIf` pour afficher les applications qui seraient supprimées d'Intune.

## Fonctionnement

1. Récupère les applications Win32 de redistribuables Visual C++ existantes dans Intune avec `Get-VcRedistAppsFromIntune`
2. Pour chaque application correspondante, appelle `Remove-IntuneWin32App` pour la supprimer d'Intune
3. Prend en charge `ShouldProcess` de PowerShell pour les protections `-WhatIf` et `-Confirm`

## Dépannage

- **Modules manquants :** vérifiez que `IntuneWin32App` est installé et importé
- **Erreurs d'authentification :** authentifiez-vous avec `Connect-MSIntuneGraph` et vérifiez que `$Global:AccessToken` est défini
- **Aucune application correspondante :** vérifiez que votre `VcList` correspond aux applications à supprimer

## Voir aussi

- [Module PowerShell IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [Documentation VcRedist](https://vcredist.com/)
