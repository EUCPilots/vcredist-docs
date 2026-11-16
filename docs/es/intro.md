# Introducción

VcRedist es un módulo de PowerShell para administrar el ciclo de vida de los [Redistributables de Microsoft Visual C++](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist).

VcRedist descarga los Redistributables compatibles y no compatibles para su instalación local, la implementación de imágenes maestras o la importación como aplicaciones en Microsoft Configuration Manager y Microsoft Intune. Admite instalaciones y desinstalaciones pasivas y silenciosas. La integración con MDT sigue disponible según el mejor esfuerzo, pero sus comandos están en desuso.

![Descargas de PowerShell Gallery](https://img.shields.io/powershellgallery/dt/vcredist.svg?style=flat&logo=powershell&logoColor=white&labelColor=7e56c2&color=009485)

## Motivo

Los Redistributables de Microsoft Visual C++ son un componente esencial de cualquier implementación de escritorio de Windows (en equipos físicos o escritorios virtuales). Normalmente se implementan varias versiones para admitir distintas aplicaciones, por lo que es necesario importarlas en la solución de implementación o instalarlas localmente. El objetivo de este módulo es simplificar la obtención, implementación y actualización a las versiones actuales de los Redistributables.

## Redistributables compatibles y no compatibles

El módulo usa un manifiesto con una marca `Supported` para cada entrada. De forma predeterminada, `Get-VcList` devuelve los Redistributables compatibles; use `-Export Unsupported` o `-Export All` para incluir las entradas que Microsoft ya no admite.

Es importante tener en cuenta que Microsoft ya no admite ciertos Redistributables ni proporciona actualizaciones de seguridad para ellos. La lista de Redistributables compatibles se mantiene aquí: [Redistributables de Microsoft Visual C++](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist). La implementación de Redistributables no compatibles se realiza bajo su propia responsabilidad.

## Origen del manifiesto

De forma predeterminada, `Get-VcList` usa el manifiesto más reciente disponible en el repositorio de VcRedist y recurre a la copia incluida si no se puede usar el manifiesto remoto o si es anterior. Use `-Source Remote` para exigir el manifiesto remoto o `-Source Bundled` para evitar una solicitud de red. La versión 4 del módulo ya no recibe actualizaciones del manifiesto; actualice a VcRedist 5 para obtener los datos actuales.
