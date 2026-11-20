# Registro de cambios

## 5.0.4-beta5

* Agrega el orden de instalación definido en el manifiesto, valida la cobertura de versiones del manifiesto y conserva el orden de instalación al exportar
* Instala Redistributables en el orden declarado, valida las versiones antes de iniciar los instaladores y permite forzar la instalación x64 en ARM64
* Actualiza el mantenimiento del manifiesto para ARM64 y agrega un flujo de trabajo manual para limpiar la instalación y actualizar las descargas
* Separa la validación del módulo de solo lectura, la preparación de PR de versiones y la publicación aprobada en Gallery
* Prueba los artefactos de versión en Windows PowerShell 5.1 y PowerShell 7, en x64 y ARM64
* Valida las versiones, etiquetas, documentación y contenido del paquete de Gallery; admite reintentos de publicación seguros
* Corrige la detección de pruebas del módulo y la detección de palabras clave del analizador personalizado

### Cambios importantes

* La versión mínima de PowerShell ahora es 5.1; se exige TLS 1.2 para las solicitudes web
* El manifiesto ahora tiene un esquema plano: `{ SchemaVersion, Updated, Entries[] }`; cada entrada tiene un valor booleano `Supported`
* Quita el parámetro `-Path` de `Get-VcList` y `Export-VcManifest`; no se puede reemplazar el origen del manifiesto
* Quita la variable exportada `$VcManifest`
* `Get-VcList -Export` filtra por `Supported`, `Unsupported` o `All`; el valor predeterminado es `Supported`
* `Save-VcRedist` y `Install-VcRedist` requieren que los instaladores se descarguen por HTTPS desde un host de Microsoft permitido y tengan una firma Microsoft Authenticode válida
* La versión 4 del módulo ya no recibe actualizaciones del manifiesto

### Novedades y mejoras

* Agrega validación y filtrado del manifiesto según la arquitectura, incluida la gestión nativa de AMD64 y ARM64 en las integraciones de implementación
* Refuerza las solicitudes web con HTTPS y validación de redirecciones, gestión de proxy y un comportamiento mejorado de TLS
* Mejora la ejecución de procesos con comillas en argumentos, tiempos de espera, límites de salida y gestión de códigos de salida
* Valida las rutas de los instaladores y mejora la detección del software instalado y la gestión del destino de descarga
* Mejora las importaciones de Intune, ConfigMgr y MDT con requisitos según la arquitectura, reglas de detección, compatibilidad con `-WhatIf` y gestión de errores
* Actualiza la selección de pruebas de CI y los flujos de trabajo de actualización del manifiesto; quita la configuración de Codecov
* Agrega documentación de ayuda traducida y amplía la cobertura de pruebas
* El manifiesto se lee del repositorio (rama `v5` durante el desarrollo) y, ante cualquier error, se recurre al manifiesto incluido; use `-Source Auto|Remote|Bundled`. Si el manifiesto remoto es anterior, se usa el incluido
* Agrega `-Proxy` y `-ProxyCredential` a todas las funciones que recuperan o descargan contenido
* `Install-VcRedist` y `Uninstall-VcRedist` comprueban los códigos de salida del instalador; `Uninstall-VcRedist` expande las variables de entorno en los comandos de desinstalación
* `Invoke-Process` genera un error si se obtienen códigos de salida inesperados
* `Import-VcIntuneApplication` y `Export-VcManifest` admiten `-WhatIf`
* `Import-VcIntuneApplication -ImportAsUpdate` agrega un requisito de versión de archivo para tiempos de ejecución anteriores basado en el archivo de detección de cada paquete (#204)
* Corrige los nombres de archivos de detección incluidos para los Redistributables de 2012 y 2013
* `Save-VcRedist` crea la carpeta `-Path` si no existe y genera un error antes de descargar si no puede hacerlo (#219)
* Las solicitudes web usan un agente de usuario `VcRedist/<version> (...)` en lugar del agente de usuario del navegador Chrome
* Corrige la arquitectura de la regla de requisitos de `Import-VcIntuneApplication`: `All` ya no es válido, los paquetes x86 ahora usan `x64x86` y los paquetes ARM64 usan `arm64` (#207)
* Corrige el destino de `-WhatIf` de `New-VcMdtBundle` y `Update-VcMdtBundle`, y la restauración de la ubicación de ConfigMgr en `Import-VcConfigMgrApplication`
* Las pruebas de MDT ahora usan stubs y mocks; se quita `tests/Install-Mdt.ps1`

### En desuso

* Las funciones de MDT (`Import-VcMdtApplication`, `New-VcMdtBundle`, `Update-VcMdtApplication`, `Update-VcMdtBundle`) emiten una advertencia de que están en desuso

## 4.1.526

* Actualiza los Redistributables de Visual C++ 2022 a la versión v14 más reciente
* <Badge type="danger" text="Cambio importante" /> Cambia la propiedad de versión `2022` a `14` para reflejar la versión más reciente
* Actualiza el icono del módulo al nuevo icono de Visual Studio 2026

## 4.1.523

* Corrige la alternativa de detección de la arquitectura del Redistributable `x64`
* Agrega una alternativa de detección de la arquitectura del Redistributable `ARM64`

## 4.1.522

* Actualiza VcRedist `2022` a `14.44.35211.0`

## 4.1.517

* Actualiza `Import-VcIntuneApplication` para agregar información de detección de archivos a los paquetes de Intune importados.
* Actualiza `Import-VcIntuneApplication` para buscar en Intune paquetes coincidentes de Redistributables de Visual C++ antes de intentar importarlos. Si no existe un paquete coincidente o es necesario actualizar su versión, `Import-VcIntuneApplication` importará un paquete de Redistributable de Visual C++.
* Agrega la nueva función `Get-VcIntuneApplication` para devolver la lista de paquetes de Redistributables de Visual C++ importados por `Import-VcIntuneApplication`.
* Agrega la nueva función `Remove-VcIntuneApplication` para quitar paquetes de Redistributables de Visual C++ importados por `Import-VcIntuneApplication`.

## 4.1.505

* Corrige las propiedades ARM64 de VcRedist `2022` a `14.44.35208.0`

## 4.1.504

* Actualiza VcRedist `2022` a `14.44.35208.0`

## 4.1.503

* Actualiza VcRedist `2022` a `14.44.35112.1`

## 4.1.502

* Actualiza VcRedist `2022` a `14.42.34438.0`

## 4.1.501

* Corrige el código de producto de VcRedist `2013` x86

## 4.1.500

* Actualiza VcRedist `2022` a `14.42.34433.0`

## 4.1.499

* Actualiza VcRedist `2022` a `14.40.33816.0`
* Actualiza VcRedist `2019` a `14.29.30156.0`
* Actualiza VcRedist `2017` a `14.16.27052.0`

## 4.1.498

* <Badge type="danger" text="Cambio importante" /> Mueve las versiones `2012` y `2013` a la lista de Redistributables no compatibles; consulte [Descargas más recientes de Redistributables de Microsoft Visual C++ compatibles](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist?view=msvc-170) para obtener información sobre las versiones compatibles
* Agrega la arquitectura `ARM64` a la versión `2022`
* Corrige un problema con el resultado de la función interna `New-MdtDrive`

## 4.1.497

* Actualiza Redistributables `2022` a `14.40.33810.0`

## 4.1.496

* Corrige un problema de `Import-VcIntuneApplication` que impedía aceptar el resultado de `Save-VcRedist` [#149](https://github.com/aaronparker/vcredist/issues/149)

## 4.1.495

* Actualiza Redistributables `2022` a `14.38.33135.0`

## 4.1.494

* Corrige un problema que impedía instalar los Redistributables importados en MDT
* Corrige un problema al importar los Redistributables en un recurso compartido de implementación de MDT
* Actualiza Redistributables `2019` a `14.29.30153.0`
* Actualiza Redistributables `2022` a `14.38.33130.0`

## 4.1.493

* Corrige un problema con `Import-VcConfigMgrApplication` [#142](https://github.com/aaronparker/vcredist/issues/142) [#96](https://github.com/aaronparker/vcredist/issues/96)

## 4.1.482

* Cambia el valor predeterminado de `MinimumRequiredOperatingSystem` a `W10_1809` debido a un cambio en el valor esperado de Intune [#132](https://github.com/aaronparker/vcredist/issues/132)

## 4.1.480

* <Badge type="danger" text="Cambio importante" /> Actualiza `Install-VcRedist`, `Import-VcConfigMgrApplication`, `Import-VcMdtApplication` e `Import-VcIntuneApplication` para que usen el resultado de `Save-VcRedist`, eliminando la necesidad del parámetro `-Path` [#123](https://github.com/aaronparker/vcredist/discussions/123)
* <Badge type="danger" text="Cambio importante" /> Quita del manifiesto los siguientes Redistributables porque Microsoft ya no los ofrece para descargar [#114](https://github.com/aaronparker/vcredist/issues/114):

  * Visual C++ 2005 SP1 Redistributable Package 8.0.56336
  * Visual C++ 2005 SP1 Redistributable Package 8.0.50727.42
  * Visual C++ 2008 Redistributable Package 9.0.21022
  * Visual C++ 2008 Redistributable Package 9.0.21022.218
  * Visual C++ 2008 Redistributable Package 9.0.30729
  * Visual C++ 2008 Redistributable Package 9.0.21022

## 4.0.461

* Actualización de VcRedist 2022, versión `14.34.31938.0`

## 4.0.460

* Esta actualización se debe principalmente a mejoras de código mediante pruebas adicionales e informes de cobertura de código
* Incluye mejoras generales del código, como la simplificación de rutinas y un comportamiento coherente al generar errores
* Cambia el resultado de `Uninstall-VcRedist` para devolver códigos de estado de los resultados de desinstalación
* Actualiza `Export-VcManifest` para generar un objeto `System.IO.FileSystemInfo` en lugar de una cadena
* Corrige un problema de `Get-InstalledVcRedist` que impedía exportar solo los Redistributables instalados de forma predeterminada
* Cambia el nombre de `Test-VcRedistDownload` a `Test-VcRedistUri` para reflejar mejor la finalidad de la función
* Cambia la propiedad `Download` a `URI` en el manifiesto de Redistributables de Visual C++
* Corrige las líneas de comandos de instalación del manifiesto de Redistributables de Visual C++ que usaban `noreboot` en lugar de `norestart`
* Agrega validación interna al crear una asignación de unidad a un recurso compartido de implementación de MDT
* Quita las funciones privadas que no se usaban o no proporcionaban funciones esenciales

## 3.0.338

* Actualización de VcRedist 2022, versión `14.34.31931.0`
* Agrega `Test-VcRedistDownload`, que comprueba si están disponibles las URL de descarga de Redistributables de VcRedist pasadas por `Get-VcList`
* Corrige un problema de `Update-VcMdtApplication` que impedía actualizar correctamente las aplicaciones existentes con las propiedades de la nueva versión

## 3.0.337

* Actualización de VcRedist 2022 a la versión `14.32.31332.0`

## 3.0.336

* Actualización de VcRedist 2022 a la versión `14.32.31326.0`

## 3.0.335

* Agrega `Import-VcIntuneApplication` para importar Redistributables de Visual C++ en un inquilino de Microsoft Intune de destino. En esta versión, `Import-VcIntuneApplication` no admite la asignación de aplicaciones. La función devuelve objetos de aplicación de Intune que se pueden usar para agregar asignaciones con la función `Add-IntuneWin32AppAssignmentAllDevices` de `IntuneWin32App`.
* Agrega la función privada `New-TemporaryFolder`
* Actualiza las pruebas de las nuevas funciones
* Actualiza la documentación de `Import-VcIntuneApplication`

## 3.0.320

* Actualización de VcRedist 2022 a la versión `14.31.31103.0`

## 3.0.315

* Actualización de VcRedist 2022 a la versión `14.30.30708.0`
* Actualización de VcRedist 2019 a la versión `14.29.30139.0`

## 3.0.307

* Actualiza las páginas de ayuda en línea a [https://vcredist.com/](https://vcredist.com/)

## 3.0.302

* Versión de mantenimiento: aborda problemas detectados por PSScriptAnalyzer y mejora el estilo del código

## 3.0.292

* Agrega compatibilidad con Visual C++ Redistributable for Visual Studio 2022, versión `14.30.30704.0`
* Mueve `Visual C++ 2010 Service Pack 1 Redistributable Package MFC Security Update` a la lista de Redistributables no compatibles

## 3.0.281

* Actualización de VcRedist 2019 a la versión `14.29.30135.0`

## 3.0.273

* Actualización de VcRedist 2019 a la versión `14.29.30133.0`
* Corrige un problema de `Import-VcConfigMgrApplication` que generaba el error `String was not recognized as a valid DateTime`. La función ahora usa el formato corto de fecha y hora de la sesión actual al importar la aplicación.
* Actualiza `New-VcMdtBundle` y `Update-VcMdtBundle` para usar el formato corto de fecha y hora de la sesión actual al crear o actualizar el conjunto.

## 3.0.271

* Actualización de VcRedist 2019 a la versión `14.29.30040.0`

## 3.0.263

* Actualización de VcRedist 2019 a la versión `14.29.30037.0`
* Actualiza el módulo para usar la ayuda externa basada en MAML con platyPS, a fin de facilitar la actualización del contenido de ayuda
* Mejoras generales del código en distintas funciones
* Actualiza el módulo para las actualizaciones del sitio de documentación

## 3.0.255

* Actualiza el manifiesto de VcRedist para VcRedist 2019 `14.28.29914.0`
* Agrega la propiedad `Path` al resultado de `Save-VcRedist` con la ruta del VcRedist descargado

## 3.0.251

* IMPORTANTE: Esta versión mueve Visual C++ Redistributable 2008 a la lista de Redistributables no compatibles, por lo que `Get-VcList` ya no lo devolverá de forma predeterminada. Consulte la documentación sobre [cómo obtener la lista de Redistributables compatibles y no compatibles](https://vcredist.com/get-vclist.html).
* Corrige un problema al pasar la lista de Redistributables a `Install-VcRedist` mediante la canalización [#77](https://github.com/aaronparker/VcRedist/issues/77)
* Corrige un problema en el resultado de `Save-VcRedist` que impedía devolver la lista de Redistributables a la canalización cuando se ejecutaba por segunda vez

## 3.0.243

* Corrige un problema de `Get-VcList` que provocaba un error al exportar un Redistributable de Visual C++ no compatible
* Ordena por número de versión la lista de Redistributables de Visual C++ que se pasa a `Install-VcRedist`, para instalarlos de la versión más antigua a la más reciente
* Actualiza `Save-VcRedist` para que no genere un error al intentar descargar un URL de Redistributable de Visual C++ que devuelve 404, de modo que continúe descargando los demás Redistributables. Consulte los [problemas conocidos](https://vcredist.com/known-issues.html) para ver los Redistributables que ya no están disponibles para descargar.
* Actualiza `Install-VcRedist` para que no genere un error si un instalador Redistributable no está disponible en la ruta de destino y continúe instalando los demás. Esto permite que la función continúe el proceso si `Save-VcRedist` no descarga determinados Redistributables.
* Actualiza correctamente `Uninstall-VcRedist` para admitir la canalización. Esto permite ejecutar comandos como `Get-InstalledVcRedist | Uninstall-VcRedist`.

## 3.0.238

* Actualiza la versión principal a 3 debido a la introducción de un cambio importante
* Cambia la estructura de carpetas usada al descargar VcRedists e importarlos a MDT o ConfigMgr. La estructura ahora es `Release\Version\Architecture`. Por ejemplo: `2019\14.28.29913.0\x64`. Este cambio permite importar instaladores VcRedist en ConfigMgr y Microsoft Intune como versiones de aplicación distintas que se pueden usar para reemplazar versiones anteriores y actualizar los equipos de destino.
* Actualiza `Import-VcMdtApplication` para importar aplicaciones VcRedist con la nueva estructura de carpetas y convención de nombres. Las aplicaciones se crearán con el formato `Visual C++ Redistributable Release Architecture Version`; por ejemplo: `Visual C++ Redistributable 2019 x86 14.28.29913.0`.
* Valida los cambios anteriores en `Import-VcConfigMgrApplication`, que importa aplicaciones VcRedist con la nueva estructura de carpetas y convención de nombres. Las aplicaciones se crearán con el formato `Visual C++ Redistributable Release Architecture Version`; por ejemplo: `Visual C++ Redistributable 2019 x86 14.28.29913.0`.
* Corrige un problema de `Import-VcConfigMgrApplication` al copiar el ejecutable de instalación de VcRedist en el recurso compartido de implementación de ConfigMgr mediante robocopy, que informaba de un error incluso cuando el ejecutable de destino se había copiado correctamente. Resuelve el problema [#63](https://github.com/aaronparker/VcRedist/issues/63).
* Actualiza `Import-VcConfigMgrApplication` para copiar individualmente los ejecutables de instalación de VcRedist en lugar de copiar toda la carpeta de descarga de VcRedist (guardada con `Save-VcRedist`). Esto permite importar instaladores individualmente con solo el contenido necesario para cada versión.
* Agrega el parámetro `-NoProgress` a `Save-VcRedist` para suprimir el progreso de descarga de `Invoke-WebRequest` al usar el parámetro `-Verbose`. La velocidad de descarga se ve afectada cuando `Invoke-WebRequest` muestra el progreso.
* Actualiza la ayuda en línea de distintas funciones
* Varias tareas de limpieza del código para mejorar su solidez, la comprobación de errores y la ortografía

## 2.0.231

* Actualiza el manifiesto de VcRedist para VcRedist 2019 `14.28.29913.0`
* Agrega la propiedad `UninstallKey` al manifiesto de VcRedist para agregar métodos de detección de claves del Registro de 32 o 64 bits
* Agrega `UninstallKey` a `Get-InstalledVcRedist` para ayudar a determinar los métodos de detección de aplicaciones (por ejemplo, con ConfigMgr, Intune, etc.)
* Actualiza `Import-VcConfigMgrApplication` con estos cambios:
  * Actualiza el nombre de la aplicación al formato `Visual C++ Redistributable 2010 x64 10.0.40219.325`
  * Actualiza el método de detección de la aplicación para detectar la clave del Registro de destino (en el Registro de 32 o 64 bits correspondiente). Resuelve el problema [#58](https://github.com/aaronparker/VcRedist/issues/58).
  * Agrega el parámetro `-NoCopy` para permitir importar aplicaciones VcRedist en ConfigMgr sin tener que copiar el contenido al recurso compartido de implementación de ConfigMgr
* Varias tareas de limpieza del código y corrección ortográfica

## 2.0.218

* Actualiza VcRedist `2019` a `14.28.29325.2`
* Corrige un problema que impedía que `Save-VcRedist` devolviera los detalles de VcRedists descargados a la canalización
* Agrega la función privada `Get-DigitalSignature` para devolver información de la firma digital y el certificado de los instaladores VcRedist mediante `Get-FileMetadata`

## 2.0.214

* Actualiza VcRedist `2019` a `14.27.29112.0`
* Actualiza VcRedist `2017` a `14.16.27033.0`
* Actualiza `Import-VcConfigMgrApplication` para admitir espacios en las rutas con ROBOCOPY
* Cambia el nombre de la rama `Master` a `Main`

## 2.0.209

* Actualiza VcRedist `2019` a `14.27.29016.0`
* Actualiza `Uninstall-VcRedist` para garantizar que la desinstalación de VcRedist no active un reinicio

## 2.0.203

* Actualización de VcRedist `2019`, versión `14.26.28720`
* Automatiza la actualización del manifiesto `VcRedist` para las nuevas versiones `2019`
* Actualiza las funciones con las nuevas evaluaciones de `PSScriptAnalyzer`

## 2.0.183

* Corrige un problema por el que `Get-InstalledVcRedist` no devolvía VcRedists instalados debido a una coincidencia incorrecta de RegEx. Mejora el código que filtra los resultados con el parámetro `ExportAll`.

## 2.0.181

* `Import-MdtModule`: simplifica el código y garantiza que se genere una excepción si no se puede cargar el módulo
* `Get-InstalledVcRedist`: actualiza el filtrado de Redistributables y el estilo del código
* `Save-VcRedist.ps1`: actualiza la ayuda en línea, quita el uso de `Start-BitsTransfer` (ahora solo usa `Invoke-WebRequest`), fuerza el uso de TLS 1.2, corrige la referencia al parámetro `ProxyCredential` y corrige la salida de VcRedists descargados a la canalización
* `Update-VcMdtApplication.ps1`: garantiza la ruta correcta en el resultado detallado y corrige un problema que impedía copiar los ejecutables de VcRedist al recurso compartido de implementación de MDT
* `Update-VcMdtBundle`: actualiza la ayuda en línea, el método para encontrar el conjunto VcRedist existente (corrige un problema cuando no está en la ubicación predeterminada) y el método para actualizar las propiedades del conjunto
* Actualiza las pruebas de Pester para las funciones públicas

## 2.0.174

* Agrega `$ProgressPreference = "SilentlyContinue"` a `Save-VcRedist` para acelerar las descargas
* Actualiza el manifiesto para admitir VcRedist 2019 `14.25.28508.3`
* Actualiza la descripción del módulo
* Exporta la variable `VcManifest` para uso futuro

## 2.0.168

* Actualiza el manifiesto para VcRedist 2019 `14.24.28127.4`
* Actualiza `Import-VcConfigMgrApplication` para las rutas UNC y la validación del módulo ConfigMgr
* Actualiza `Export-VcManifest` para exportar todo el manifiesto. Se prepara la actualización automática del manifiesto con nuevas versiones de VcRedist.

## 2.0.163

* Actualiza el manifiesto para VcRedist 2019, versión `14.23.27820.0`, para Visual Studio 2019 `16.3`

## 2.0.161

* Los VcRedists importados en el recurso compartido de implementación de MDT no tienen habilitada la opción `Hide this application in the Deployment Wizard`
* Agrega el parámetro `-DontHide` a `Import-VcMdtApplication` para no ocultar aplicaciones en el asistente de implementación de MDT

## 2.0.158

* Agrega una ruta predeterminada al parámetro `-Path` de `Save-VcRedist` e `Install-VcRedist` para resolver [#53](https://github.com/aaronparker/vcredist/issues/53) y garantizar el funcionamiento de la función si no se especifica el parámetro
* Agrega Begin, Process y End para corregir la compatibilidad con la canalización de `Save-VcRedist`, `Install-VcRedist`, `Import-VcConfigMgrApplication`, `Import-VcMdtApplication`, `Update-VcMdtApplication` y `Update-VcMdtBundle`, y resolver [#53](https://github.com/aaronparker/vcredist/issues/53)
* Agrega la función `Uninstall-VcRedist` para administrar la desinstalación de VcRedists
* Actualiza las pruebas de Pester para las funciones públicas

## 2.0.147

* Agrega compatibilidad básica con proxy a `Save-VcRedist`
* Actualiza los resultados de `Import-VcMdtApplication`, `New-VcMdtBundle`, `Update-VcMdtApplication` y `Update-VcMdtBundle` para exportar todas las propiedades de la aplicación
* Actualizaciones generales de formato y calidad del código: uso de nombres de tipo completos, parámetros de cmdlets y funciones, y expansión de parámetros
* Actualiza los mensajes detallados
* Uniforma la declaración de parámetros en las funciones públicas
* Agrega instrucciones Try/Catch para gestionar mejor las excepciones
* Quita las instrucciones Begin/Process/End de las funciones que no necesitan admitir varios objetos en la canalización
* Mueve el manifiesto del módulo de `/Manifest` a la carpeta de nivel superior del módulo y actualiza `Get-VcList` para reflejar la nueva ubicación
* Actualiza la integración con AppVeyor y el diseño de los scripts

## 2.0.140

* Actualiza el manifiesto para VcRedist `2019`, versión `14.21.27702.2`, para Visual Studio 2019 `16.1`

## 2.0.138

* Corrige el problema [#45: entrada de dependencia en blanco en aplicaciones importadas con Import-VcMdtApplication](https://github.com/aaronparker/VcRedist/issues/45)
* Corrige un problema al importar VcRedists en ConfigMgr [#47](https://github.com/aaronparker/VcRedist/issues/47)

## 2.0.132

* Simplifica la semántica de versiones a major.minor.build
* Agrega VcRedist `2019` al manifiesto
* Convierte el manifiesto a JSON para facilitar su administración y simplificar el código
* Actualiza la función `Get-VcList` para admitir el formato de manifiesto JSON
* Combina VcRedists en un único manifiesto
* Cambia el nombre de `Get-VcRedist` a `Save-VcRedist`
* Cambia el nombre de `Import-VcCmApp` a `Import-VcConfigMgrApplication`
* Cambia el nombre de la función `Export-VcXml` a `Export-VcManifest`
* Cambia el nombre de `Import-VcMdtApp` a `Import-VcMdtApplication`
* Divide `Import-VcMdtApplication` en `Import-VcMdtApplication`, `Update-VcMdtApplication`, `New-VcMdtBundle` y `Update-VcMdtBundle` para simplificar el código y proporcionar funciones más sólidas
* Actualiza la propiedad HelpUri de cada función
* Actualiza `Get-InstalledVcRedist` para exportar propiedades adicionales, incluidas `Release` y `Architecture`
* Agrega las funciones privadas `New-MdtApplicationFolder` y `New-MdtDrive`
* Actualiza `Get-VcList` con el parámetro `-Export` para `All, Supported, Unsupported`
* Agrega la posibilidad de filtrar el resultado de `Get-VcList` con `-Release` y `-Architecture`
* Corrige la compatibilidad con la canalización de `Install-VcRedist`, `Import-VcMdtApplication` e `Import-VcConfigMgrApplication` para aceptar el resultado de `Get-VcList` en la canalización
* Quita los parámetros `-Release` y `-Architecture` de `Install-VcRedist`, `Import-VcMdtApplication` e `Import-VcConfigMgrApplication`. En su lugar, use `Get-VcList` para filtrar por versión y arquitectura.
* Actualiza las pruebas de Pester para las funciones públicas y privadas

## 1.5.2.98

* Actualiza los manifiestos con los detalles correctos de VcRedist 2017 `14.16.27027.1`. v1.5.1.95 incluyó la confirmación incorrecta del manifiesto.

## 1.5.1.95

* Actualiza los manifiestos con VcRedist 2017 `14.16.27024.1`
* Actualiza el módulo para exportar el alias `Save-VcRedist` para `Get-VcRedist`. En la siguiente versión principal, `Get-VcRedist` pasará a llamarse `Save-VcRedist`.
* Cambia `-VcList` para usar `[PSCustomObject]` en lugar de `[array]` en `Import-VcCmApp` e `Import-VcMdtApp`
* Actualiza el icono del módulo al nuevo icono de Visual Studio 2019

## 1.5.0.92

* Agrega la función privada `Import-MdtModule` para mejorar el código de carga del módulo MDT
* Actualiza `Import-VcMdtApp` para una comprobación de errores más sólida
* Actualiza la función privada `Get-ValidPath` para evitar errores con rutas no válidas
* Actualiza el manifiesto con VcRedist 2017 versión `14.16.27024.1`

## 1.4.3.88

* Corrige la función privada `Get-Bitness` para garantizar un único resultado al no usar parámetros o al usar `-Architecture`

## 1.4.2.85

* Corrige el directorio de trabajo incorrecto al importar VcRedists a MDT mediante `Import-VcMdtApp`

## 1.4.1.79

* Agrega la función privada `Invoke-Process` (de Adam Bertram)
* Actualiza `Install-VcRedist` para usar `Invoke-Process` y mejorar la gestión de `Start-Process`
* Corrige Resolve-Path / TrimEnd en la función privada `Get-ValidPath`
* Corrige un problema de rutas relativas en `Import-VcCmApp`; resuelve el problema [#24](https://github.com/aaronparker/vcredist/issues/24)
* El conjunto agregado a MDT ahora incorpora los Redistributables como dependencias, de la versión más antigua a la más reciente
* Expande argumentos en `Install-VcRedist`, `Import-VcMdtApp` e `Import-VcCmApp`
* Actualiza el formato del código
* Actualiza la documentación

## 1.4.0.69

* Actualiza los manifiestos para la versión más reciente de `2017`, versión `14.15.26706.0`
* Actualiza los manifiestos con los argumentos de línea de comandos de instalación silenciosa
* Agrega el modificador `-Silent` a `Install-VcRedist`, `Import-VcMdtApp` e `Import-VcCmApp` para admitir argumentos opcionales de instalación silenciosa
* Agrega la función privada `Get-Bitness` para determinar la arquitectura del procesador del sistema operativo actual
* Actualiza `Install-VcRedist` para evitar instalar Redistributables de 64 bits en Windows de 32 bits
* Quita la compatibilidad con la canalización del parámetro `-VcRedist` en `Install-VcRedist`, `Import-VcMdtApp` e `Import-VcCmApp`. No funciona correctamente pasar el resultado de `Get-VcList` a estos comandos por la canalización. La compatibilidad con la canalización podría volver en una versión futura.
* Quita los Redistributables `2015` del valor predeterminado del parámetro `-Release` para las funciones `Install-VcRedist`, `Import-VcMdtApp` e `Import-VcCmApp`, a fin de evitar instalar `2015` y después `2017` (que son la misma versión principal)

## 1.3.7.60

* Actualiza los manifiestos con `2013`, versión `12.0.40664`
* Agrega `UninstallString` al resultado de la función `Get-InstalledVcRedist`
* `Get-VcList` intenta hacer coincidir la versión de VcRedist del manifiesto con la propiedad `Product Version` de un archivo descargado existente. Si la versión del manifiesto es superior, el archivo se volverá a descargar.
* Agrega la función privada `Get-FileMetadata` para recuperar `Product Version` del archivo descargado
* Actualiza la lógica de `Install-VcRedist` al consultar VcRedists instalados

## 1.3.6.56

* Agrega `Get-InstalledVcRedist`, que usa la función privada `Get-InstalledSoftware`. Resuelve [#18](https://github.com/aaronparker/vcredist/issues/18), una solicitud de esta función. La función `Get-InstallSoftware` es de [Adam Bertram](https://4sysops.com/archives/find-the-product-guid-of-installed-software-with-powershell/).
* Actualiza los manifiestos con los ProductCodes correctos
* Actualiza la documentación

## 1.3.5.48

* Actualiza los manifiestos con `2017`, versión `14.14`
* Actualiza los manifiestos con `<Version></Version>` para mejorar la lógica de instalación, por ejemplo, omitir la instalación de `2015` sobre `2017`

## 1.3.4.45

* Corrige la importación de Redistributables con la selección correcta de plataforma `x86` y `x64` en la aplicación MDT mediante `Import-VcMdtApp`
* Corrige la importación de Redistributables en una carpeta especificada por -AppFolder cuando la carpeta ya existe en `Import-VcMdtApp`

## 1.3.3.39

* Actualiza los manifiestos con la versión `2017` `14.13.26020`
* Actualiza la propiedad `ReleaseNotes` del módulo con un vínculo al registro de cambios [https://vcredist.com/change-log](https://vcredist.com/change-log)
* Actualiza las funciones con `Write-Output` explícito

## 1.3.2.35

* Actualiza el formato del código
* Usa `Join-Path` para crear rutas de carpetas y archivos y mejorar la compatibilidad con PSCore
* Actualiza las pruebas de Pester
* Actualiza la versión para alinearla mejor con los cambios de funciones

## 1.3.1.4

* Corrige la importación de aplicaciones ConfigMgr

## 1.3.1.2

* Agrega `-Bundle` a `Import-VcMdtApp` para crear un conjunto de aplicaciones con los Redistributables como dependencias. Los Redistributables se ocultarán para que solo se pueda seleccionar el conjunto en el asistente de implementación.
* Actualiza pruebas simples de Pester y habilita la integración con Appveyor
* Limpia la ayuda en línea
* Genera ayuda externa con platyPS

## 1.3.1.0

* Agrega la función `Import-VcCmApp` para importar Redistributables de Visual C++ en ConfigMgr.

## 1.3.0.0

* Refactoriza el código como módulo de PowerShell para simplificar el desarrollo y la publicación en PowerShell Gallery.
