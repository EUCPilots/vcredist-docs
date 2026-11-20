# Comprendre la gestion des versions de VcRedist

VcRedist utilise une gestion des versions au format `major.minor.patch[-prerelease]`. La version 5 introduit des changements incompatibles ; les versions préliminaires, telles que `5.0.6-rc2`, désignent des versions qui ne sont pas encore stables.

## Version majeure

Les versions majeures introduisent généralement des changements incompatibles. Elles risquent de compromettre les scripts qui utilisent le module VcRedist.

## Version mineure

Les versions mineures ajoutent généralement de nouvelles fonctionnalités, telles que des fonctions publiques supplémentaires. Elles ne devraient pas compromettre les scripts qui utilisent le module VcRedist, mais il est toujours recommandé d'effectuer des tests.

## Version corrective

Les versions correctives fournissent des corrections de bogues et des mises à jour de maintenance. Un suffixe de préversion indique que la version n'est pas encore stable.
