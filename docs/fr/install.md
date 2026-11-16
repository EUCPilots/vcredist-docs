# Installer VcRedist

## Installation depuis la PowerShell Gallery

Le module VcRedist est publié dans la PowerShell Gallery et disponible ici : [VcRedist](https://www.powershellgallery.com/packages/VcRedist). Installez-le depuis la galerie avec les commandes suivantes :

VcRedist 5 nécessite PowerShell 5.1 ou une version ultérieure.

```powershell
Install-Module -Name VcRedist
Import-Module -Name VcRedist
```

### Mettre à jour le module

Si vous avez installé une version précédente du module depuis la galerie, installez la dernière mise à jour avec le paramètre `-Force` :

```powershell
Install-Module -Name VcRedist -Force
```

## Installation manuelle depuis le dépôt

Vous pouvez télécharger le module depuis le [dépôt source GitHub](https://github.com/aaronparker/VcRedist) ; il se trouve dans le dossier `VcRedist`. Installez ce dossier dans l'un des chemins des modules PowerShell. Pour afficher la liste complète de ces chemins, exécutez `$env:PSModulePath.split(';')` dans une console PowerShell.

Les chemins courants des modules PowerShell sont notamment :

* Utilisateur actuel : `%USERPROFILE%\Documents\WindowsPowerShell\Modules\`
* Tous les utilisateurs : `%ProgramFiles%\WindowsPowerShell\Modules\`
* OneDrive : `$env:OneDrive\Documents\WindowsPowerShell\Modules\`

Pour effectuer l'installation depuis le dépôt :

1. Téléchargez la branche `main` sur votre poste de travail.
2. Copiez le contenu du dossier VcRedist dans le chemin de module PowerShell de votre choix sur le poste.
3. Ouvrez une console PowerShell avec l'option Run as Administrator.
4. Si votre environnement l'exige, définissez une stratégie d'exécution qui autorise l'exécution des scripts du module.

Une fois l'installation terminée, vérifiez que le module est présent en exécutant `Get-Module -ListAvailable VcRedist`. Pour utiliser le module, chargez-le avec :

```powershell
Import-Module -Name VcRedist
```
