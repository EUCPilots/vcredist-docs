# Télécharger les redistribuables

Pour télécharger les redistribuables Visual C++, transmettez les entrées de `Get-VcList` à `Save-VcRedist` dans le pipeline. Le dossier cible est créé au besoin. Les programmes d'installation sont enregistrés sous `Release\Version\Architecture` ; les programmes existants et valides sont réutilisés.

Les téléchargements doivent utiliser HTTPS et un hôte de téléchargement Microsoft autorisé. Par défaut, la signature Microsoft Authenticode de chaque programme d'installation (y compris les programmes déjà présents) doit être valide. La commande retourne chaque entrée avec le chemin de son programme d'installation dans la propriété `Path`, à utiliser avec `Install-VcRedist` ou une fonction d'importation de déploiement.

::: info
Un programme d'installation existant est réutilisé si sa version de fichier est au moins aussi récente que la version du manifeste ; sa signature est tout de même vérifiée.
:::

## Paramètres

### Paramètres obligatoires

* `VcList` - Entrées provenant de `Get-VcList`

### Paramètres facultatifs

* `Path` - Dossier de destination ; par défaut, le répertoire actuel
* `Proxy` - Spécifie un serveur proxy à utiliser pour télécharger les redistribuables Visual C++
* `ProxyCredential` - Si le serveur proxy exige une authentification, les informations d'identification peuvent être fournies sous forme d'objet PSCredential
* `ShowProgress` - Affiche la progression du téléchargement
* `UserAgent` - Définit l'agent utilisateur de la requête
* `SkipAuthenticodeValidation` - Ignore la vérification de signature. À utiliser uniquement si vous avez une raison explicite de contourner la validation.
* `WhatIf` - Prévisualise la création des répertoires et les téléchargements sans apporter de modifications.

## Exemples

Pour télécharger la liste par défaut des redistribuables dans `C:\Temp\VcRedist`, utilisez la commande suivante :

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
```

Les redistribuables sont téléchargés dans le dossier cible :

![Redistribuables Microsoft Visual C++ installés sur le PC local](/images/vcredist-folder.png)

Transmettre à Save-VcRedist la liste des redistribuables Visual C++ x86 pris en charge pour les versions `2013` et `2019` afin de télécharger les redistribuables dans C:\Redist.

```powershell
$VcList = Get-VcList -Release 2013, 2019 -Architecture x86
Save-VcRedist -VcList $VcList -Path C:\Redist
```

Télécharger les redistribuables Visual C++ des versions `2012`, `2013` et `2019` dans C:\Redist.

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist
```

Télécharger les redistribuables Visual C++ des versions `2012`, `2013` et `2019` dans C:\Redist en utilisant le serveur proxy « proxy.domain.local ».

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist -Proxy proxy.domain.local
```
