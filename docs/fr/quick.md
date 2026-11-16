# Installation rapide

Le module VcRedist est principalement destiné au déploiement de systèmes d'exploitation en entreprise, sur des centaines ou des milliers de PC Windows. Il peut toutefois servir à installer rapidement les redistribuables Visual C++ pris en charge sur votre système actuel.

## Installer les redistribuables Visual C++

1. Vérifiez d'abord que PowerShell est exécuté en tant qu'administrateur. Recherchez PowerShell dans le menu Démarrer, cliquez avec le bouton droit sur le raccourci et choisissez `Run as Administrator`.
2. Effectuez l'installation avec PowerShell.

::: tip
Avant d'exécuter la commande suivante, veuillez examiner [https://vcredist.com/install.ps1](https://vcredist.com/install.ps1) pour vous assurer qu'elle est sûre. Nous savons déjà que le script est sûr, mais vous devriez vérifier la sécurité et le contenu de tout script provenant d'Internet que vous ne connaissez pas. La commande ci-dessous télécharge un script PowerShell distant et l'exécute sur votre ordinateur.
:::

Copiez ensuite la commande suivante :

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://vcredist.com/install.ps1'))
```

3. Collez le code dans l'invite PowerShell que vous avez ouverte en tant qu'administrateur.
4. Attendez quelques secondes pendant l'exécution de la commande. Si le script ne signale aucune erreur, les versions les plus récentes des redistribuables Visual C++ devraient être installées.

Le résultat devrait ressembler à ceci :

```powershell
Checking whether module is installed: VcRedist.
Installing module: VcRedist 5.0.4-beta5.
Saving VcRedists to path: C:\Users\Aaron\AppData\Local\Temp\VcRedist.
Downloading and installing supported Microsoft Visual C++ Redistributables.
Installed Visual C++ Redistributables:

Name                                                 Release Architecture Version
----                                                 ------- ------------ -------
Visual C++ v14 Redistributable (x86)                 14      x86          14.52.37029.0
Visual C++ v14 Redistributable (x64)                 14      x64          14.52.37029.0
Visual C++ v14 Redistributable (Arm64)               14      ARM64        14.52.37029.0
```

Une fois la commande terminée, les redistribuables Visual C++ devraient être installés sur votre système local. L'affichage devrait être similaire à celui-ci :

![Redistribuables Microsoft Visual C++ installés sur le PC local](/images/installed2022.png)
