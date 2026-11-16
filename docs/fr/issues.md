# Problèmes connus

::: info
Seul **English - United States** est pris en charge. Le module télécharge uniquement les versions `en-US` des redistribuables Visual C++.
:::

::: info
`Get-VcList` tente de faire correspondre la version de VcRedist dans le manifeste à la propriété `ProductVersion` du fichier téléchargé. Comme la version du produit des programmes d'installation VcRedist `2005` et `2008` ne correspond pas à celle de VcRedist installé, le fichier sera téléchargé à nouveau même si le programme d'installation est de la bonne version.
:::

::: info
La mise à jour 5 du redistribuable Visual C++ 2012 est disponible sur le site de téléchargement Visual Studio, mais nécessite une connexion pour être téléchargée. La [page de téléchargements publics Visual Studio](https://visualstudio.microsoft.com/vs/older-downloads/) propose toujours la mise à jour 4 ; c'est donc cette version que fournit VcRedist.
:::

::: info
Le redistribuable Visual C++ 2008 `9.0.30729.7523` est disponible, mais uniquement [sous forme de correctif privé](https://support.microsoft.com/en-us/help/2834565/fix-visual-c-2008-mfc-application-that-was-created-by-using-visual-stu) et non en téléchargement public auprès de Microsoft.
:::

::: info
Les redistribuables Visual C++ suivants ne sont plus disponibles au téléchargement, mais figurent toujours dans le manifeste VcRedist :

* Visual C++ 2005 Redistributable Package, version `8.0.50727.42`
* Visual C++ 2005 SP1 Redistributable Package, version `8.0.56336`
* Visual C++ 2008 SP1 Redistributable Package, version `9.0.30729`
:::
