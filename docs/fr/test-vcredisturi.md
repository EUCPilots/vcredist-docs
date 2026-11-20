# Tester les URI des redistribuables

`Test-VcRedistUri` valide les URI de téléchargement des redistribuables Visual C++ en envoyant une requête HEAD à chacune. Utilisez cette fonction pour vérifier l'accessibilité des liens de téléchargement avant de lancer un téléchargement avec `Save-VcRedist`.

Seules les URL HTTPS hébergées sur les hôtes de téléchargement Microsoft autorisés par le module sont testées ; les autres URL sont rejetées.

## Paramètres

### Paramètres obligatoires

* `VcList` - Tableau contenant les informations des redistribuables Visual C++ provenant de `Get-VcList`

### Paramètres facultatifs

* `Proxy` - Spécifie un serveur proxy pour la requête
* `ProxyCredential` - Spécifie les informations d'identification du serveur proxy
* `ShowProgress` - Affiche la progression du téléchargement. Par défaut, la progression est masquée.

## Exemples

Tester toutes les URI de téléchargement des redistribuables pris en charge :

```powershell
Get-VcList | Test-VcRedistUri
```

Exemple de sortie :

```powershell
Result       : True
Release      : 14
Architecture : x64
Version      : 14.52.37029.0
URI          : https://aka.ms/vc14/vc_redist.x64.exe
```

Tester les URI d'une version et d'une architecture précises :

```powershell
Get-VcList -Release 2019 -Architecture x64 | Test-VcRedistUri
```

Tester toutes les URI des redistribuables, y compris les versions non prises en charge :

```powershell
Get-VcList -Export All | Test-VcRedistUri
```

Tester les URI via un serveur proxy :

```powershell
Get-VcList | Test-VcRedistUri -Proxy "http://proxy.domain.local"
```
