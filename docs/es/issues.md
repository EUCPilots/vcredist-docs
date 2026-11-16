# Problemas conocidos

::: info
Solo se admite **English - United States**. El módulo solo descarga las versiones `en-US` de los Redistributables de Visual C++.
:::

::: info
`Get-VcList` intenta hacer coincidir la versión de VcRedist del manifiesto con la propiedad `ProductVersion` del archivo descargado. Como Product Version de los instaladores de VcRedist `2005` y `2008` no coincide con la versión instalada de VcRedist, el archivo se volverá a descargar aunque el instalador sea de la versión correcta.
:::

::: info
Está disponible Visual C++ Redistributable 2012 Update 5. Esta actualización se ofrece en el sitio de descargas de Visual Studio, pero requiere iniciar sesión para descargarla. La [página de descargas públicas de Visual Studio](https://visualstudio.microsoft.com/vs/older-downloads/) sigue ofreciendo Update 4, por lo que esa es la versión que proporciona VcRedist.
:::

::: info
Visual C++ Redistributable 2008 `9.0.30729.7523` está disponible, pero solo [como revisión privada](https://support.microsoft.com/en-us/help/2834565/fix-visual-c-2008-mfc-application-that-was-created-by-using-visual-stu) y no se puede descargar públicamente desde Microsoft.
:::

::: info
Los siguientes Redistributables de Visual C++ ya no están disponibles para su descarga; sin embargo, siguen incluidos en el manifiesto de VcRedist:

* Visual C++ 2005 Redistributable Package, version `8.0.50727.42`
* Visual C++ 2005 SP1 Redistributable Package, version `8.0.56336`
* Visual C++ 2008 SP1 Redistributable Package, version `9.0.30729`
:::
