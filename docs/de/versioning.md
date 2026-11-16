# VcRedist-Versionierung verstehen

VcRedist verwendet die Versionierung `major.minor.patch[-prerelease]`. Version 5 führt inkompatible Änderungen ein; Betaversionen wie `5.0.4-beta5` kennzeichnen Vorabversionen.

## Hauptversion

Hauptversionen führen üblicherweise inkompatible Änderungen ein. Hauptversionen können Skripts beschädigen, die das VcRedist-Modul verwenden.

## Nebenversion

Nebenversionen fügen üblicherweise neue Funktionen hinzu, beispielsweise zusätzliche öffentliche Funktionen. Sie sollten Skripts, die das VcRedist-Modul verwenden, nicht beeinträchtigen; Tests werden dennoch immer empfohlen.

## Patchversion

Patchversionen enthalten Fehlerbehebungen und Wartungsaktualisierungen. Ein Vorabversionssuffix weist darauf hin, dass es sich noch nicht um eine stabile Version handelt.
