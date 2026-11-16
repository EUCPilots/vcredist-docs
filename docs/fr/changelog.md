# Journal des modifications

## 5.0.4-beta5

* Ajoute l'ordre d'installation défini par le manifeste, valide la couverture des versions du manifeste et préserve l'ordre d'installation lors de l'exportation
* Installe les redistribuables dans l'ordre déclaré, valide les versions avant de lancer les programmes d'installation et permet de forcer l'installation x64 sur ARM64
* Met à jour la maintenance du manifeste pour ARM64 et ajoute un workflow manuel de désinstallation complète et de mise à jour des téléchargements
* Sépare la validation du module en lecture seule, la préparation des PR de publication et la publication approuvée dans la Gallery
* Teste les artefacts de publication avec Windows PowerShell 5.1 et PowerShell 7 sur x64 et ARM64
* Valide les versions de publication, les balises, la documentation et le contenu du package Gallery ; prend en charge les nouvelles tentatives de publication sécurisées
* Corrige la découverte des tests du module et la détection des mots-clés de l'analyseur personnalisé

### Changements incompatibles

* La version minimale de PowerShell est désormais 5.1 ; TLS 1.2 est imposé pour les requêtes Web
* Le manifeste utilise désormais un schéma plat : `{ SchemaVersion, Updated, Entries[] }` ; chaque entrée comporte un booléen `Supported`
* Supprime le paramètre `-Path` de `Get-VcList` et `Export-VcManifest` ; la source du manifeste ne peut pas être remplacée
* Supprime la variable exportée `$VcManifest`
* `Get-VcList -Export` filtre selon `Supported`, `Unsupported` ou `All` ; la valeur par défaut est `Supported`
* `Save-VcRedist` et `Install-VcRedist` exigent que les programmes d'installation soient téléchargés en HTTPS depuis un hôte Microsoft autorisé et portent une signature Microsoft Authenticode valide
* Le module v4 ne reçoit plus de mises à jour du manifeste

### Nouveautés et améliorations

* Ajoute la validation et le filtrage du manifeste tenant compte de l'architecture, y compris la gestion native d'AMD64 et ARM64 dans les intégrations de déploiement
* Renforce les requêtes Web avec la validation HTTPS et des redirections, la gestion des proxys et un comportement TLS amélioré
* Améliore l'exécution des processus grâce à la mise entre guillemets des arguments, aux délais d'expiration, aux limites de sortie et à la gestion des codes de sortie
* Valide les chemins des programmes d'installation et améliore la détection des logiciels installés ainsi que la gestion de la destination des téléchargements
* Améliore les importations Intune, ConfigMgr et MDT avec des exigences tenant compte de l'architecture, des règles de détection, la prise en charge de `-WhatIf` et la gestion des erreurs
* Met à jour la sélection des tests CI et les workflows de mise à jour du manifeste ; supprime la configuration Codecov
* Ajoute une documentation d'aide traduite et étend la couverture des tests
* Le manifeste est lu depuis le dépôt (branche `v5` en cours de développement) et le module se rabat sur le manifeste fourni en cas d'échec ; utilisez `-Source Auto|Remote|Bundled`. Le manifeste fourni avec le module est utilisé si le manifeste distant est plus ancien.
* Ajoute `-Proxy` et `-ProxyCredential` à chaque fonction qui récupère ou télécharge du contenu
* `Install-VcRedist` et `Uninstall-VcRedist` vérifient les codes de sortie des programmes d'installation ; `Uninstall-VcRedist` développe les variables d'environnement dans les commandes de désinstallation
* `Invoke-Process` échoue en cas de code de sortie inattendu
* `Import-VcIntuneApplication` et `Export-VcManifest` prennent en charge `-WhatIf`
* `Import-VcIntuneApplication -ImportAsUpdate` ajoute une exigence de version de fichier pour les environnements d'exécution plus anciens, basée sur le fichier de détection de chaque package (#204)
* Corrige les noms de fichiers de détection fournis pour les redistribuables 2012 et 2013
* `Save-VcRedist` crée le dossier `-Path` s'il n'existe pas et échoue avant le téléchargement si la création est impossible (#219)
* Les requêtes Web utilisent un agent utilisateur `VcRedist/<version> (...)` au lieu de celui du navigateur Chrome
* Corrige l'architecture des règles d'exigences de `Import-VcIntuneApplication` : `All` n'est plus valide, les packages x86 utilisent désormais `x64x86` et les packages ARM64 utilisent `arm64` (#207)
* Corrige la cible `-WhatIf` de `New-VcMdtBundle` et `Update-VcMdtBundle`, ainsi que la restauration de l'emplacement ConfigMgr dans `Import-VcConfigMgrApplication`
* Les tests MDT utilisent désormais des stubs et des mocks ; `tests/Install-Mdt.ps1` est supprimé

### Obsolète

* Les fonctions MDT (`Import-VcMdtApplication`, `New-VcMdtBundle`, `Update-VcMdtApplication`, `Update-VcMdtBundle`) signalent qu'elles sont obsolètes

## 4.1.526

* Met à jour les redistribuables Visual C++ 2022 vers la dernière version v14
* <Badge type="danger" text="Changement incompatible" /> Modifie la propriété de version `2022` en `14` pour refléter la version la plus récente
* Met à jour l'icône du module avec la nouvelle icône Visual Studio 2026

## 4.1.523

* Corrige le mécanisme de secours de détection de l'architecture du redistribuable `x64`
* Ajoute un mécanisme de secours de détection de l'architecture du redistribuable `ARM64`

## 4.1.522

* Met à jour VcRedist `2022` vers `14.44.35211.0`

## 4.1.517

* Met à jour `Import-VcIntuneApplication` pour ajouter les informations de détection de fichier aux packages Intune importés.
* Met à jour `Import-VcIntuneApplication` afin de rechercher dans Intune les packages de redistribuables Visual C++ correspondants avant de tenter l'importation. Si aucun package correspondant n'existe ou qu'une mise à jour de version est nécessaire, `Import-VcIntuneApplication` importe alors un package Redistributable Visual C++.
* Ajoute la fonction `Get-VcIntuneApplication` pour retourner la liste des packages de redistribuables Visual C++ importés par `Import-VcIntuneApplication`
* Ajoute la fonction `Remove-VcIntuneApplication` pour supprimer les packages de redistribuables Visual C++ importés par `Import-VcIntuneApplication`

## 4.1.505

* Corrige les propriétés ARM64 de VcRedist `2022` pour la version `14.44.35208.0`

## 4.1.504

* Met à jour VcRedist `2022` vers `14.44.35208.0`

## 4.1.503

* Met à jour VcRedist `2022` vers `14.44.35112.1`

## 4.1.502

* Met à jour VcRedist `2022` vers `14.42.34438.0`

## 4.1.501

* Corrige le code produit de VcRedist `2013` x86

## 4.1.500

* Met à jour VcRedist `2022` vers `14.42.34433.0`

## 4.1.499

* Met à jour VcRedist `2022` vers `14.40.33816.0`
* Met à jour VcRedist `2019` vers `14.29.30156.0`
* Met à jour VcRedist `2017` vers `14.16.27052.0`

## 4.1.498

* <Badge type="danger" text="Changement incompatible" /> Déplace les versions `2012` et `2013` dans la liste des redistribuables non pris en charge ; consultez les [derniers téléchargements pris en charge du redistribuable Microsoft Visual C++](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist?view=msvc-170) pour connaître les versions prises en charge
* Ajoute l'architecture `ARM64` à la version `2022`
* Corrige un problème de sortie de la fonction interne `New-MdtDrive`

## 4.1.497

* Met à jour les redistribuables `2022` vers `14.40.33810.0`

## 4.1.496

* Corrige un problème de `Import-VcIntuneApplication` qui n'acceptait pas la sortie de `Save-VcRedist` [#149](https://github.com/aaronparker/vcredist/issues/149)

## 4.1.495

* Met à jour les redistribuables `2022` vers `14.38.33135.0`

## 4.1.494

* Corrige un problème qui empêchait l'installation des redistribuables importés dans MDT
* Corrige un problème lors de l'importation des redistribuables dans un partage de déploiement MDT
* Met à jour les redistribuables `2019` vers `14.29.30153.0`
* Met à jour les redistribuables `2022` vers `14.38.33130.0`

## 4.1.493

* Corrige un problème avec `Import-VcConfigMgrApplication` [#142](https://github.com/aaronparker/vcredist/issues/142) [#96](https://github.com/aaronparker/vcredist/issues/96)

## 4.1.482

* Modifie la valeur par défaut de `MinimumRequiredOperatingSystem` en `W10_1809` à la suite d'une modification de la valeur attendue par Intune [#132](https://github.com/aaronparker/vcredist/issues/132)

## 4.1.480

* <Badge type="danger" text="Changement incompatible" /> Modifie `Install-VcRedist`, `Import-VcConfigMgrApplication`, `Import-VcMdtApplication` et `Import-VcIntuneApplication` pour utiliser la sortie de `Save-VcRedist`, supprimant ainsi la nécessité du paramètre `-Path` [#123](https://github.com/aaronparker/vcredist/discussions/123)
* <Badge type="danger" text="Changement incompatible" /> Supprime du manifeste les redistribuables suivants, car Microsoft ne les propose plus au téléchargement [#114](https://github.com/aaronparker/vcredist/issues/114) :

  * Visual C++ 2005 SP1 Redistributable Package 8.0.56336
  * Visual C++ 2005 SP1 Redistributable Package 8.0.50727.42
  * Visual C++ 2008 Redistributable Package 9.0.21022
  * Visual C++ 2008 Redistributable Package 9.0.21022.218
  * Visual C++ 2008 Redistributable Package 9.0.30729
  * Visual C++ 2008 Redistributable Package 9.0.21022

## 4.0.461

* Mise à jour de VcRedist 2022 vers la version `14.34.31938.0`

## 4.0.460

* Cette mise à jour résulte principalement d'améliorations du code grâce à l'ajout de tests et de rapports de couverture
* Comprend des améliorations générales du code, notamment la simplification des routines et un comportement cohérent en cas d'erreur
* Modifie la sortie de `Uninstall-VcRedist` afin de retourner des codes d'état pour les résultats de désinstallation
* Met à jour `Export-VcManifest` pour qu'elle retourne un objet `System.IO.FileSystemInfo` au lieu d'une chaîne
* Corrige un problème dans `Get-InstalledVcRedist` qui n'exportait pas uniquement les redistribuables installés par défaut
* Renomme `Test-VcRedistDownload` en `Test-VcRedistUri` pour mieux refléter le rôle de la fonction
* Remplace la propriété `Download` par `URI` dans le manifeste des redistribuables Visual C++
* Corrige les lignes de commande d'installation dans le manifeste des redistribuables Visual C++ qui utilisaient `noreboot` au lieu de `norestart`
* Ajoute une validation interne lors de la création d'un mappage de lecteur vers un partage de déploiement MDT
* Supprime les fonctions privées inutilisées ou n'apportant aucune fonctionnalité essentielle

## 3.0.338

* Mise à jour de VcRedist 2022 vers la version `14.34.31931.0`
* Ajoute `Test-VcRedistDownload` pour vérifier la disponibilité des URL de téléchargement des entrées VcRedist transmises par `Get-VcList`
* Corrige un problème dans `Update-VcMdtApplication` qui ne mettait pas correctement à jour les propriétés de version des applications existantes

## 3.0.337

* Mise à jour de VcRedist 2022 vers la version `14.32.31332.0`

## 3.0.336

* Mise à jour de VcRedist 2022 vers la version `14.32.31326.0`

## 3.0.335

* Ajoute `Import-VcIntuneApplication` pour importer le redistribuable Visual C++ dans un locataire Microsoft Intune cible. Dans cette version, `Import-VcIntuneApplication` ne prend pas en charge l'ajout d'affectations à l'application. La fonction retourne les objets d'application Intune, qui peuvent être utilisés pour ajouter des affectations avec la fonction `Add-IntuneWin32AppAssignmentAllDevices` du module `IntuneWin32App`.
* Ajoute la fonction privée `New-TemporaryFolder`
* Met à jour les tests des nouvelles fonctions
* Met à jour la documentation de `Import-VcIntuneApplication`

## 3.0.320

* Mise à jour de VcRedist 2022 vers la version `14.31.31103.0`

## 3.0.315

* Mise à jour de VcRedist 2022 vers la version `14.30.30708.0`
* Mise à jour de VcRedist 2019 vers la version `14.29.30139.0`

## 3.0.307

* Met à jour les pages d'aide en ligne vers [https://vcredist.com/](https://vcredist.com/)

## 3.0.302

* Version de maintenance : corrige les problèmes détectés par PSScriptAnalyzer et améliore le style du code

## 3.0.292

* Ajoute la prise en charge du redistribuable Visual C++ pour Visual Studio 2022, version `14.30.30704.0`
* Déplace le `Visual C++ 2010 Service Pack 1 Redistributable Package MFC Security Update` dans la liste des redistribuables non pris en charge

## 3.0.281

* Mise à jour de VcRedist 2019 vers la version `14.29.30135.0`

## 3.0.273

* Mise à jour de VcRedist 2019 vers la version `14.29.30133.0`
* Corrige une erreur de `Import-VcConfigMgrApplication` : `String was not recognized as a valid DateTime`. La fonction utilise désormais le format abrégé de date et d'heure de la session actuelle lors de l'importation de l'application.
* Met à jour `New-VcMdtBundle` et `Update-VcMdtBundle` pour utiliser le format abrégé de date et d'heure de la session actuelle lors de la création ou de la mise à jour du bundle

## 3.0.271

* Mise à jour de VcRedist 2019 vers la version `14.29.30040.0`

## 3.0.263

* Mise à jour de VcRedist 2019 vers la version `14.29.30037.0`
* Met à jour le module afin d'utiliser l'aide externe au format MAML avec platyPS pour simplifier la mise à jour du contenu d'aide
* Améliorations générales du code dans diverses fonctions
* Met à jour le module en fonction des changements du site de documentation

## 3.0.255

* Met à jour le manifeste VcRedist pour VcRedist 2019 `14.28.29914.0`
* Ajoute à la sortie de `Save-VcRedist` une propriété `Path` contenant le chemin du VcRedist téléchargé

## 3.0.251

* IMPORTANT : cette version déplace le redistribuable Visual C++ 2008 dans la liste des redistribuables non pris en charge ; `Get-VcList` ne le retournera donc plus par défaut. Consultez la documentation sur la [récupération des listes de redistribuables pris en charge et non pris en charge](https://vcredist.com/get-vclist.html).
* Corrige un problème de transmission par le pipeline de la liste des redistribuables à `Install-VcRedist` [#77](https://github.com/aaronparker/VcRedist/issues/77)
* Corrige un problème de sortie de `Save-VcRedist` qui empêchait le retour de la liste des redistribuables dans le pipeline lors d'une seconde exécution

## 3.0.243

* Corrige un problème dans `Get-VcList` qui provoquait une erreur lors de l'exportation d'un redistribuable Visual C++ non pris en charge
* Trie par numéro de version la liste transmise à `Install-VcRedist`, afin d'installer les redistribuables de la version la plus ancienne à la plus récente
* Met à jour `Save-VcRedist` afin que la fonction ne génère pas d'erreur lors d'une tentative de téléchargement d'une URL de redistribuable Visual C++ renvoyant une erreur 404, et puisse poursuivre le téléchargement des autres redistribuables. Consultez les [problèmes connus](https://vcredist.com/known-issues.html) pour connaître les redistribuables qui ne sont plus disponibles au téléchargement.
* Met à jour `Install-VcRedist` afin que la fonction ne génère pas d'erreur lorsqu'un programme d'installation de redistribuable est absent du chemin cible et qu'elle poursuive l'installation des autres redistribuables. La procédure d'installation peut ainsi continuer lorsque certains redistribuables n'ont pas été téléchargés par `Save-VcRedist`.
* Corrige la prise en charge du pipeline par `Uninstall-VcRedist`. Cela permet d'utiliser des commandes telles que `Get-InstalledVcRedist | Uninstall-VcRedist`.

## 3.0.238

* Passe à la version majeure 3 en raison de l'introduction d'un changement incompatible
* Modifie la structure de dossiers utilisée lors du téléchargement des VcRedist et de leur importation dans MDT ou ConfigMgr. La structure est désormais `Release\Version\Architecture`, par exemple `2019\14.28.29913.0\x64`. Cette modification permet d'importer les programmes d'installation VcRedist dans ConfigMgr et Microsoft Intune en tant que versions d'application distinctes, afin de remplacer les versions précédentes et de mettre à niveau les PC cibles.
* Met à jour `Import-VcMdtApplication` pour importer les applications VcRedist selon la nouvelle structure de dossiers et la nouvelle convention de nommage. Les applications sont créées au format `Visual C++ Redistributable Release Architecture Version`, par exemple `Visual C++ Redistributable 2019 x86 14.28.29913.0`.
* Valide les modifications précédentes de `Import-VcConfigMgrApplication` qui importent les applications VcRedist selon la nouvelle structure de dossiers et la nouvelle convention de nommage. Les applications sont créées au format `Visual C++ Redistributable Release Architecture Version`, par exemple `Visual C++ Redistributable 2019 x86 14.28.29913.0`.
* Corrige une erreur signalée par robocopy lors de la copie du programme d'installation VcRedist dans le partage de déploiement ConfigMgr, même lorsque le fichier cible avait bien été copié. Corrige le problème [#63](https://github.com/aaronparker/VcRedist/issues/63).
* Met à jour `Import-VcConfigMgrApplication` afin de copier individuellement les exécutables d'installation VcRedist plutôt que l'ensemble du dossier de téléchargement VcRedist enregistré par `Save-VcRedist`. Les programmes d'installation individuels ne sont ainsi importés qu'avec le contenu nécessaire à chaque version.
* Ajoute le paramètre `-NoProgress` à `Save-VcRedist` pour masquer la progression des téléchargements `Invoke-WebRequest` lors de l'utilisation du paramètre `-Verbose`. La vitesse de téléchargement diminue lorsque `Invoke-WebRequest` affiche la progression.
* Met à jour l'aide intégrée de plusieurs fonctions
* Divers nettoyages du code visant à améliorer la robustesse, la vérification des erreurs et l'orthographe

## 2.0.231

* Met à jour le manifeste VcRedist pour VcRedist 2019 `14.28.29913.0`
* Ajoute la propriété `UninstallKey` au manifeste VcRedist afin de définir des méthodes de détection pour les clés de Registre 32 bits ou 64 bits
* Ajoute `UninstallKey` à `Get-InstalledVcRedist` pour faciliter la définition des méthodes de détection d'application (par exemple dans ConfigMgr ou Intune)
* Met à jour `Import-VcConfigMgrApplication` :
  * Met à jour le nom de l'application au format `Visual C++ Redistributable 2010 x64 10.0.40219.325`
  * Met à jour la méthode de détection de l'application pour détecter la clé de Registre cible (dans le Registre 32 ou 64 bits approprié). Corrige le problème [#58](https://github.com/aaronparker/VcRedist/issues/58).
  * Ajoute le paramètre `-NoCopy` afin d'importer les applications VcRedist dans ConfigMgr sans copier le contenu vers le partage de déploiement ConfigMgr
* Divers nettoyages du code et corrections orthographiques

## 2.0.218

* Met à jour VcRedist `2019` vers `14.28.29325.2`
* Corrige un problème empêchant `Save-VcRedist` de retourner les détails des VcRedist téléchargés dans le pipeline
* Ajoute la fonction privée `Get-DigitalSignature` pour retourner les informations de signature numérique et de certificat des programmes d'installation VcRedist via `Get-FileMetadata`

## 2.0.214

* Met à jour VcRedist `2019` vers `14.27.29112.0`
* Met à jour VcRedist `2017` vers `14.16.27033.0`
* Met à jour `Import-VcConfigMgrApplication` pour prendre en charge les espaces dans les chemins avec ROBOCOPY
* Renomme la branche `Master` en `Main`

## 2.0.209

* Met à jour VcRedist `2019` vers `14.27.29016.0`
* Met à jour `Uninstall-VcRedist` pour éviter que la désinstallation d'un VcRedist ne déclenche un redémarrage

## 2.0.203

* Met à jour VcRedist `2019` vers la version `14.26.28720`
* Automatise la mise à jour du manifeste `VcRedist` lors des nouvelles versions de `2019`
* Met à jour les fonctions selon les nouvelles évaluations de `PSScriptAnalyzer`

## 2.0.183

* Corrige un problème dû auquel `Get-InstalledVcRedist` ne retournait pas les VcRedist installés en raison d'une correspondance RegEx incorrecte. Améliore le filtrage de sortie avec le paramètre `ExportAll`.

## 2.0.181

* `Import-MdtModule` - Simplifie le code et garantit qu'une exception est levée si le module ne peut pas être chargé
* `Get-InstalledVcRedist` - Met à jour le filtrage des redistribuables et le style du code
* `Save-VcRedist.ps1` - Met à jour l'aide intégrée, supprime l'utilisation de `Start-BitsTransfer` (seul `Invoke-WebRequest` est désormais utilisé), impose TLS 1.2, corrige la référence au paramètre `ProxyCredential` et corrige l'envoi des VcRedist téléchargés dans le pipeline
* `Update-VcMdtApplication.ps1` - Corrige le chemin affiché en mode détaillé et la copie des exécutables VcRedist vers le partage de déploiement MDT
* `Update-VcMdtBundle` - Met à jour l'aide intégrée, améliore la recherche du bundle VcRedist existant (notamment hors de l'emplacement par défaut) et la mise à jour des propriétés du bundle
* Met à jour les tests Pester des fonctions publiques

## 2.0.174

* Ajoute `$ProgressPreference = "SilentlyContinue"` à `Save-VcRedist` pour accélérer les téléchargements
* Met à jour le manifeste pour prendre en charge VcRedist 2019 `14.25.28508.3`
* Met à jour la description du module
* Exporte la variable `VcManifest` en vue d'une utilisation ultérieure

## 2.0.168

* Met à jour le manifeste pour VcRedist 2019 `14.24.28127.4`
* Met à jour `Import-VcConfigMgrApplication` pour les chemins UNC et la validation du module ConfigMgr
* Met à jour `Export-VcManifest` afin d'exporter l'ensemble du manifeste, première étape vers la mise à jour automatique du manifeste lors des nouvelles versions VcRedist

## 2.0.163

* Met à jour le manifeste pour VcRedist 2019 version `14.23.27820.0` pour Visual Studio 2019 `16.3`

## 2.0.161

* Les VcRedist importés dans le partage de déploiement MDT n'activent pas l'option `Hide this application in the Deployment Wizard`
* Ajoute le paramètre `-DontHide` à `Import-VcMdtApplication` pour ne pas masquer les applications dans l'assistant de déploiement MDT

## 2.0.158

* Ajoute un chemin par défaut au paramètre `-Path` de `Save-VcRedist` et `Install-VcRedist` pour corriger le problème [#53](https://github.com/aaronparker/vcredist/issues/53) et garantir le fonctionnement des fonctions lorsque le paramètre n'est pas spécifié
* Ajoute Begin, Process et End afin de corriger la prise en charge du pipeline dans `Save-VcRedist`, `Install-VcRedist`, `Import-VcConfigMgrApplication`, `Import-VcMdtApplication`, `Update-VcMdtApplication` et `Update-VcMdtBundle`, et de corriger le problème [#53](https://github.com/aaronparker/vcredist/issues/53)
* Ajoute la fonction `Uninstall-VcRedist` pour gérer la désinstallation des VcRedist
* Met à jour les tests Pester des fonctions publiques

## 2.0.147

* Ajoute la prise en charge de base des proxys à `Save-VcRedist`
* Met à jour la sortie de `Import-VcMdtApplication`, `New-VcMdtBundle`, `Update-VcMdtApplication` et `Update-VcMdtBundle` afin d'exporter toutes les propriétés des applications
* Améliore le formatage et la qualité générale du code : noms de types complets, paramètres complets des applets de commande et fonctions, et transmission des paramètres par table de hachage
* Met à jour les messages de sortie détaillée
* Uniformise la déclaration des paramètres des fonctions publiques
* Ajoute des blocs Try/Catch pour mieux gérer les exceptions
* Supprime les blocs Begin/Process/End des fonctions qui n'ont pas besoin de prendre en charge plusieurs objets dans le pipeline
* Déplace le manifeste du module de `/Manifest` vers le dossier racine du module et met à jour `Get-VcList` en conséquence
* Met à jour l'intégration AppVeyor et la structure des scripts

## 2.0.140

* Met à jour le manifeste pour VcRedist `2019` version `14.21.27702.2` pour Visual Studio 2019 `16.1`

## 2.0.138

* Corrige le problème [#45, entrée Dependency vide dans les applications importées par Import-VcMdtApplication](https://github.com/aaronparker/vcredist/issues/45)
* Corrige un problème d'importation des VcRedist dans ConfigMgr [#47](https://github.com/aaronparker/vcredist/issues/47)

## 2.0.132

* Simplifie la sémantique de version au format major.minor.build
* Ajoute VcRedist `2019` au manifeste
* Convertit le manifeste au format JSON pour en faciliter la gestion et simplifier le code
* Met à jour `Get-VcList` pour prendre en charge le format de manifeste JSON
* Regroupe les VcRedist dans un manifeste unique
* Renomme `Get-VcRedist` en `Save-VcRedist`
* Renomme `Import-VcCmApp` en `Import-VcConfigMgrApplication`
* Renomme la fonction `Export-VcXml` en `Export-VcManifest`
* Renomme `Import-VcMdtApp` en `Import-VcMdtApplication`
* Sépare `Import-VcMdtApplication` en `Import-VcMdtApplication`, `Update-VcMdtApplication`, `New-VcMdtBundle` et `Update-VcMdtBundle` pour simplifier le code et fournir des fonctions plus robustes
* Met à jour la propriété HelpUri de chaque fonction
* Met à jour `Get-InstalledVcRedist` pour exporter des propriétés supplémentaires, notamment `Release` et `Architecture`
* Ajoute les fonctions privées `New-MdtApplicationFolder` et `New-MdtDrive`
* Ajoute à `Get-VcList` le paramètre `-Export` pour sélectionner `All`, `Supported` ou `Unsupported`
* Ajoute le filtrage de la sortie de `Get-VcList` avec `-Release` et `-Architecture`
* Corrige la prise en charge du pipeline par `Install-VcRedist`, `Import-VcMdtApplication` et `Import-VcConfigMgrApplication` afin qu'elles acceptent la sortie de `Get-VcList`
* Supprime les paramètres `-Release` et `-Architecture` de `Install-VcRedist`, `Import-VcMdtApplication` et `Import-VcConfigMgrApplication`. Utilisez plutôt `Get-VcList` pour filtrer les versions et architectures.
* Met à jour les tests Pester des fonctions publiques et privées

## 1.5.2.98

* Met à jour les manifestes avec les informations correctes de VcRedist 2017 `14.16.27027.1`. v1.5.1.95 contenait le mauvais commit de manifeste.

## 1.5.1.95

* Met à jour les manifestes avec VcRedist 2017 `14.16.27024.1`
* Met à jour le module pour exporter l'alias `Save-VcRedist` de `Get-VcRedist`. La prochaine version majeure renommera `Get-VcRedist` en `Save-VcRedist`.
* Remplace `[array]` par `[PSCustomObject]` pour `-VcList` dans `Import-VcCmApp` et `Import-VcMdtApp`
* Met à jour l'icône du module avec la nouvelle icône Visual Studio 2019

## 1.5.0.92

* Ajoute la fonction privée `Import-MdtModule` pour améliorer le chargement du module MDT
* Met à jour `Import-VcMdtApp` afin d'améliorer la vérification des erreurs
* Met à jour la fonction privée `Get-ValidPath` afin d'éviter les erreurs sur les chemins non valides
* Met à jour le manifeste avec VcRedist 2017 version `14.16.27024.1`

## 1.4.3.88

* Corrige la fonction privée `Get-Bitness` pour garantir une sortie unique sans paramètres ou avec `-Architecture`

## 1.4.2.85

* Corrige le répertoire de travail incorrect lors de l'importation des VcRedist dans MDT avec `Import-VcMdtApp`

## 1.4.1.79

* Ajoute la fonction privée `Invoke-Process` (par Adam Bertram)
* Met à jour `Install-VcRedist` afin d'utiliser `Invoke-Process` pour mieux gérer `Start-Process`
* Corrige Resolve-Path / TrimEnd dans la fonction privée `Get-ValidPath`
* Corrige un problème de chemin relatif dans `Import-VcCmApp` et clôt le problème [#24](https://github.com/aaronparker/vcredist/issues/24)
* Le bundle ajouté à MDT contient désormais les redistribuables comme dépendances, de la version la plus ancienne à la plus récente
* Transmet les arguments par table de hachage dans `Install-VcRedist`, `Import-VcMdtApp` et `Import-VcCmApp`
* Met à jour le formatage du code
* Met à jour la documentation

## 1.4.0.69

* Met à jour les manifestes pour la dernière version `2017`, version `14.15.26706.0`
* Met à jour les manifestes avec les arguments de ligne de commande d'installation silencieuse
* Ajoute le commutateur `-Silent` à `Install-VcRedist`, `Import-VcMdtApp` et `Import-VcCmApp` pour prendre en charge les arguments facultatifs d'installation silencieuse
* Ajoute la fonction privée `Get-Bitness` pour déterminer l'architecture du processeur du système d'exploitation actuel
* Met à jour `Install-VcRedist` pour éviter d'installer des redistribuables 64 bits sur Windows 32 bits
* Supprime la prise en charge du pipeline pour le paramètre `-VcRedist` dans `Install-VcRedist`, `Import-VcMdtApp` et `Import-VcCmApp`. La transmission de la sortie de `Get-VcList` à ces commandes ne fonctionnait pas correctement ; la prise en charge du pipeline pourrait être rétablie dans une prochaine version.
* Supprime les redistribuables `2015` de la valeur par défaut du paramètre `-Release` de `Install-VcRedist`, `Import-VcMdtApp` et `Import-VcCmApp`, afin d'éviter d'installer les redistribuables `2015` puis `2017`, qui correspondent à la même version majeure

## 1.3.7.60

* Met à jour les manifestes avec `2013`, version `12.0.40664`
* Ajoute `UninstallString` à la sortie de la fonction `Get-InstalledVcRedist`
* `Get-VcList` tente de faire correspondre la version de VcRedist du manifeste à la propriété `Product Version` d'un fichier téléchargé existant. Si le manifeste indique une version supérieure, le fichier est téléchargé de nouveau.
* Ajoute la fonction privée `Get-FileMetadata` pour récupérer la propriété `Product Version` d'un fichier téléchargé
* Met à jour la logique de `Install-VcRedist` lors de la recherche des VcRedist installés

## 1.3.6.56

* Ajoute `Get-InstalledVcRedist`, qui utilise la fonction privée `Get-InstalledSoftware`. Clôt le problème [#18](https://github.com/aaronparker/vcredist/issues/18), demande de fonctionnalité pour cette fonction. Fonction `Get-InstallSoftware` d'[Adam Bertram](https://4sysops.com/archives/find-the-product-guid-of-installed-software-with-powershell/)
* Met à jour les manifestes avec les codes produit corrects
* Met à jour la documentation

## 1.3.5.48

* Met à jour les manifestes avec `2017`, version `14.14`
* Met à jour les manifestes avec `<Version></Version>` afin d'améliorer la logique d'installation, par exemple pour ignorer l'installation de `2015` par-dessus `2017`

## 1.3.4.45

* Corrige l'importation des redistribuables en sélectionnant la plateforme `x86` ou `x64` correcte pour l'application MDT dans `Import-VcMdtApp`
* Corrige l'importation des redistribuables dans un dossier spécifié par `-AppFolder` lorsque ce dossier existe déjà dans `Import-VcMdtApp`

## 1.3.3.39

* Met à jour les manifestes pour la version `2017` `14.13.26020`
* Met à jour la propriété `ReleaseNotes` du module avec un lien vers le journal des modifications [https://vcredist.com/change-log](https://vcredist.com/change-log)
* Met à jour les fonctions en ajoutant des appels explicites à `Write-Output`

## 1.3.2.35

* Met à jour le formatage du code
* Utilise `Join-Path` pour construire les chemins de dossiers et fichiers afin d'améliorer la compatibilité avec PSCore
* Met à jour les tests Pester
* Met à jour la version pour mieux refléter les changements de fonctionnalités

## 1.3.1.4

* Corrige l'importation des applications ConfigMgr

## 1.3.1.2

* Ajoute `-Bundle` à `Import-VcMdtApp` pour créer un bundle d'applications ayant les redistribuables comme dépendances. Les redistribuables sont masqués afin que seul le bundle puisse être sélectionné dans l'assistant de déploiement.
* Met à jour les tests Pester élémentaires et rétablit le fonctionnement de l'intégration Appveyor
* Nettoie l'aide intégrée
* Génère l'aide externe avec platyPS

## 1.3.1.0

* Ajoute la fonction `Import-VcCmApp` pour importer les redistribuables Visual C++ dans ConfigMgr.

## 1.3.0.0

* Refactorise le projet en module PowerShell afin de simplifier le développement et la publication dans la PowerShell Gallery.
