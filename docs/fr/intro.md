# Introduction

VcRedist est un module PowerShell destiné à gérer le cycle de vie des [redistribuables Microsoft Visual C++](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

VcRedist télécharge les redistribuables pris en charge et non pris en charge pour une installation locale, un déploiement dans une image de référence ou un import en tant qu'applications dans Microsoft Configuration Manager et Microsoft Intune. Il prend en charge les installations et désinstallations passives et silencieuses. L'intégration à MDT reste disponible dans la mesure du possible, mais ses commandes sont obsolètes.

![Téléchargements dans la PowerShell Gallery](https://img.shields.io/powershellgallery/dt/vcredist.svg?style=flat&logo=powershell&logoColor=white&labelColor=7e56c2&color=009485)

## Pourquoi

Les redistribuables Microsoft Visual C++ sont un composant essentiel de tout déploiement de postes Windows (PC physiques ou postes de travail virtuels). Plusieurs versions sont généralement déployées pour prendre en charge différentes applications ; elles doivent donc être importées dans votre solution de déploiement ou installées localement. Ce module vise à simplifier l'obtention, le déploiement et la mise à jour des versions actuelles des redistribuables.

## Redistribuables pris en charge ou non pris en charge

Le module utilise un seul manifeste dont chaque entrée comporte un indicateur `Supported`. Par défaut, `Get-VcList` retourne les redistribuables pris en charge ; utilisez `-Export Unsupported` ou `-Export All` pour inclure les entrées que Microsoft ne prend plus en charge.

Notez que Microsoft ne prend plus en charge certains redistribuables et ne leur fournit plus de mises à jour de sécurité. La liste des redistribuables pris en charge est tenue à jour ici : [Redistribuables Microsoft Visual C++](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist). Le déploiement de redistribuables non pris en charge se fait à vos risques.

## Source du manifeste

Par défaut, `Get-VcList` utilise le dernier manifeste disponible dans le dépôt VcRedist et se rabat sur la copie fournie avec le module si le manifeste distant ne peut pas être utilisé ou est plus ancien. Utilisez `-Source Remote` pour exiger le manifeste distant, ou `-Source Bundled` pour éviter toute requête réseau. Le manifeste du module version 4 ne reçoit plus de mises à jour ; passez à VcRedist 5 pour obtenir les données actuelles.
