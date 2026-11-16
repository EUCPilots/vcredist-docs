# Interroger les redistribuables Visual C++ dans Microsoft Intune

`Get-VcIntuneApplication` récupère toutes les applications Win32 de redistribuables Visual C++ actuellement présentes dans Microsoft Intune. Cette fonction est utile pour auditer, établir des rapports ou vérifier quels redistribuables sont gérés dans votre locataire Intune.

## Fonctionnalités

- Interroge Intune pour rechercher toutes les applications Win32 de redistribuables Visual C++
- Retourne les détails des applications, notamment leur nom affiché et leur ID
- Utile pour l'inventaire, les rapports ou comme entrée d'autres fonctions VcRedist

## Prérequis

- Le module PowerShell [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App) doit être installé et importé
- Vous devez être authentifié auprès d'Intune avec `Connect-MSIntuneGraph`
- Un jeton d'accès valide à l'API Microsoft Graph doit être présent

## Utilisation

```powershell
# Query all Visual C++ Redistributable Win32 apps in Intune
$Apps = Get-VcIntuneApplication

# Display the results
$Apps | Format-Table displayName, Id
```

## Fonctionnement

1. Appelle `Get-VcList -Export All` pour obtenir la liste de tous les redistribuables connus
2. Appelle `Get-VcRedistAppsFromIntune` avec cette liste afin de récupérer les applications Win32 Intune correspondantes
3. Retourne la liste des objets d'application Intune

## Sortie

Chaque objet du tableau retourné comprend des propriétés telles que :
- `displayName` : nom affiché de l'application dans Intune
- `Id` : ID de l'application Intune
- D'autres propriétés retournées par `Get-VcRedistAppsFromIntune`

## Dépannage

- **Modules manquants :** vérifiez que `IntuneWin32App` est installé et importé
- **Erreurs d'authentification :** authentifiez-vous avec `Connect-MSIntuneGraph` et vérifiez que `$Global:AccessToken` est défini
- **Aucun résultat :** vérifiez que vous avez importé les redistribuables Visual C++ dans Intune avec `Import-VcIntuneApplication`

## Voir aussi

- [Import-VcIntuneApplication](import-vcintuneapplication.md)
- [Remove-VcIntuneApplication](remove-vcintuneapplication.md)
- [Module PowerShell IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [Documentation VcRedist](https://vcredist.com/)
