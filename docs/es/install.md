# Instalar VcRedist

## Instalar desde PowerShell Gallery

El módulo VcRedist se publica en PowerShell Gallery y está disponible aquí: [VcRedist](https://www.powershellgallery.com/packages/VcRedist/). Puede instalar el módulo desde la galería con:

VcRedist 5 requiere PowerShell 5.1 o posterior.

```powershell
Install-Module -Name VcRedist
Import-Module -Name VcRedist
```

### Actualizar el módulo

Si instaló una versión anterior del módulo desde la galería, puede instalar la actualización más reciente con el parámetro `-Force`:

```powershell
Install-Module -Name VcRedist -Force
```

## Instalación manual desde el repositorio

Puede descargar el módulo desde el [repositorio de código fuente de GitHub](https://github.com/aaronparker/VcRedist); el módulo se encuentra en la carpeta `VcRedist`. La carpeta debe instalarse en una de las rutas de módulos de PowerShell. Para ver todas las rutas de módulos de PowerShell disponibles, use `$env:PSModulePath.split(';')` en una consola de PowerShell.

Entre las rutas habituales de módulos de PowerShell se incluyen:

* Usuario actual: `%USERPROFILE%\Documents\WindowsPowerShell\Modules\`
* Todos los usuarios: `%ProgramFiles%\WindowsPowerShell\Modules\`
* OneDrive: `$env:OneDrive\Documents\WindowsPowerShell\Modules\`

Para instalar desde el repositorio:

1. Descargue la rama `main` en su estación de trabajo.
2. Copie el contenido de la carpeta VcRedist de la estación de trabajo en la ruta de módulos de PowerShell deseada.
3. Abra una consola de PowerShell con la opción Run as Administrator.
4. Si el entorno lo requiere, establezca una directiva de ejecución que permita ejecutar los scripts del módulo.

Una vez completada la instalación, puede comprobar que el módulo existe ejecutando `Get-Module -ListAvailable VcRedist`. Para usar el módulo, cárguelo con:

```powershell
Import-Module -Name VcRedist
```
