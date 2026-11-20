# Control de versiones de VcRedist

VcRedist usa el esquema de versiones `major.minor.patch[-prerelease]`. La versión 5 introduce cambios importantes; las versiones preliminares, como `5.0.6-rc2`, identifican compilaciones que aún no son estables.

## Versión principal

Las versiones principales suelen introducir cambios importantes. Es probable que las versiones principales interrumpan los scripts que usan el módulo VcRedist.

## Versión secundaria

Las versiones secundarias suelen agregar funciones, como nuevas funciones públicas. No deberían interrumpir los scripts que usan el módulo VcRedist, pero siempre se recomienda realizar pruebas.

## Versión de revisión

Las versiones de revisión proporcionan correcciones de errores y actualizaciones de mantenimiento. Un sufijo de versión preliminar indica que la versión aún no es estable.
