# Importer des redistribuables dans Microsoft Intune

`Import-VcIntuneApplication` automatise la création de packages et l'importation des redistribuables Visual C++ dans Microsoft Intune en tant qu'applications Win32. Chaque redistribuable est empaqueté, doté de règles de détection et d'exigences, puis importé comme application distincte.

**Fonctionnalités principales :**
- Empaquette chaque redistribuable Visual C++ dans un fichier .intunewin
- Définit les propriétés de l'application : nom, description, éditeur, version, URL, notes, logo, commandes d'installation/désinstallation, comportement d'installation, architecture du système d'exploitation, système d'exploitation minimal, règles de détection et exigences
- Ignore l'importation si l'application existe déjà et est à jour dans Intune
- Nettoie les fichiers temporaires après l'importation
- Prend en charge `-WhatIf` pour prévisualiser les importations
- Prend en charge des règles d'exigences spécifiques à l'architecture pour les packages x86, x64 et ARM64

> **Remarque :**
> - Nécessite le module PowerShell [IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
> - Nécessite Windows PowerShell 5.1 ; PowerShell 7 n'est pas pris en charge par le module IntuneWin32App requis
> - Authentifiez-vous auprès d'Intune avec `Connect-MSIntuneGraph` avant utilisation
> - Nécessite un jeton d'accès valide à l'API Microsoft Graph

## Paramètres

- `VcList` (**obligatoire**) : tableau d'objets Redistributable Visual C++, généralement obtenus avec `Save-VcRedist`. Chaque objet doit comporter les propriétés requises (voir ci-dessous).
- `ImportAsUpdate` : ajoute une exigence de version de fichier afin qu'un environnement d'exécution plus ancien déjà installé ne satisfasse pas l'exigence d'un package plus récent.
- `WhatIf` : prévisualise les importations sans créer ni modifier d'applications Intune.

## Propriétés obligatoires de VcList

Chaque objet de `VcList` doit comporter :

- `Name`, `Version`, `Path`, `Architecture`, `SilentInstall`, `SilentUninstall`, `PackageId`, `URI` et les autres propriétés produites par `Save-VcRedist`.

La fonction valide ces propriétés et génère une erreur si l'une d'elles est absente.

## Exemple : importer des redistribuables

L'exemple suivant récupère la liste des redistribuables Visual C++ de la version 14, télécharge les programmes d'installation et importe chacun en tant qu'application Win32 dans Intune :

```powershell
$VcList = Get-VcList -Release "14" | Save-VcRedist -Path C:\Temp\VcRedist
Import-VcIntuneApplication -VcList $VcList
```

Utilisez `-ImportAsUpdate` pour ajouter une exigence correspondant à la version du fichier de détection du package :

```powershell
Import-VcIntuneApplication -VcList $VcList -ImportAsUpdate
```

![Applications de redistribuables Microsoft Visual C++ importées dans Intune](/images/intuneapp.jpeg)

## Affectations et remplacement

Après l'importation, affectez les applications avec `Add-IntuneWin32AppAssignmentAllDevices`. La fonction retourne des objets d'application comportant une propriété `Id` :

```powershell
# Retrieve existing Visual C++ Redistributable applications in Intune (that have been imported by VcRedist)
$ExistingApps = Get-VcIntuneApplication

# Import the new Visual C++ Redistributable versions
$NewApps = Get-VcList | Save-VcRedist -Path "C:\Temp\VcRedist" | Import-VcIntuneApplication

# Create an All Devices assignment and add supersedence rules for existing versions
foreach ($App in $NewApps) {
    $params = @{
        Id                           = $App.id
        Intent                       = "required"
        Notification                 = "showReboot"
        DeliveryOptimizationPriority = "notConfigured"
        UseLocalTime                 = $true
        AvailableTime                = $(Get-Date -Hour 18 -Minute 0 -Second 0)
        DeadlineTime                 = $(Get-Date -Hour 18 -Minute 0 -Second 0).AddDays(1)
        EnableRestartGracePeriod     = $true
        RestartGracePeriod           = 1440
        RestartNotificationSnooze    = 240
        RestartCountDownDisplay      = 15
    }
    Add-IntuneWin32AppAssignmentAllDevices @params

    # Match existing app packages with the same identifier and add supersedence rules
    $MatchingApp = $ExistingApps | Where-Object { $_.PackageId -eq $($App.notes | ConvertFrom-Json -ErrorAction "Stop").Guid }
    if ($null -ne $MatchingApp) {
        foreach ($Item in $MatchingApp) {
            Write-Host "Adding supersedence rule for $($Item.id) to $($App.id)"
            $SupersedenceRule = New-IntuneWin32AppSupersedence -ID $Item.id -SupersedenceType 'Update'
            Add-IntuneWin32AppSupersedence -ID $App.id -Supersedence $SupersedenceRule
        }
    }
}
```

## Fonctionnement

1. **Valide les prérequis :**
   - Vérifie que le système utilise Windows PowerShell (et non Core)
   - Vérifie la présence du module IntuneWin32App
   - Vérifie la présence d'un jeton d'accès à l'API Microsoft Graph
2. **Charge le manifeste d'application Intune** depuis `Intune.json` dans le répertoire du module
3. **Crée un objet d'icône** si le fichier d'icône existe
4. **Valide chaque objet VcList** pour vérifier la présence des propriétés requises
5. **Recherche les applications Intune existantes** et ignore l'importation si l'application est à jour
6. **Empaquette le programme d'installation** dans un fichier .intunewin
7. **Crée des règles d'exigences et de détection** à partir du manifeste et de VcList
8. **Importe l'application** avec `Add-IntuneWin32App`
9. **Nettoie** les fichiers temporaires

## Dépannage

- **PowerShell Core n'est pas pris en charge :** la fonction génère une erreur si elle est exécutée dans PowerShell Core. Utilisez Windows PowerShell 5.1.
- **Modules manquants :** vérifiez que `IntuneWin32App` est installé et disponible dans votre session.
- **Erreurs d'authentification :** authentifiez-vous avec `Connect-MSIntuneGraph` et vérifiez que `$Global:AccessToken` est défini.
- **Propriétés requises manquantes :** utilisez `Save-VcRedist` pour générer un `VcList` valide.

## Voir aussi

- [Module PowerShell IntuneWin32App](https://github.com/MSEndpointMgr/IntuneWin32App)
- [Documentation VcRedist](https://vcredist.com/)
