# Änderungsprotokoll

## 5.0.4-beta5

* Fügt eine im Manifest definierte Installationsreihenfolge hinzu, validiert die Versionsabdeckung des Manifests und erhält die Installationsreihenfolge beim Export
* Installiert Redistributables in der angegebenen Reihenfolge, validiert Versionen vor dem Start der Installationsprogramme und unterstützt das Erzwingen einer x64-Installation auf ARM64
* Aktualisiert die Manifestwartung für ARM64 und ergänzt einen manuellen Workflow zum Bereinigen, Deinstallieren und Aktualisieren von Downloads
* Trennt die schreibgeschützte Modulvalidierung, die Vorbereitung von Release-PRs und die genehmigte Veröffentlichung in der Gallery voneinander
* Testet Releaseartefakte unter Windows PowerShell 5.1 und PowerShell 7 auf x64 und ARM64
* Validiert Releaseversionen, Tags, Dokumentation und Inhalte des Gallery-Pakets; unterstützt sichere Wiederholungsversuche bei der Veröffentlichung
* Behebt die Erkennung von Modultests und die Erkennung von Schlüsselwörtern im benutzerdefinierten Analyzer

### Inkompatible Änderungen

* Die erforderliche Mindestversion von PowerShell ist jetzt 5.1; für Webanforderungen wird TLS 1.2 erzwungen
* Das Manifest verwendet jetzt ein flaches Schema: `{ SchemaVersion, Updated, InstallOrder, Entries[] }`; jeder Eintrag besitzt einen booleschen Wert `Supported`
* Entfernt den Parameter `-Path` aus `Get-VcList` und `Export-VcManifest`; die Manifestquelle kann nicht überschrieben werden
* Entfernt die exportierte Variable `$VcManifest`
* `Get-VcList -Export` filtert nach `Supported`, `Unsupported` oder `All`; Standard ist `Supported`
* `Save-VcRedist` und `Install-VcRedist` setzen voraus, dass Installationsprogramme über HTTPS von einem zulässigen Microsoft-Host heruntergeladen wurden und eine gültige Microsoft-Authenticode-Signatur besitzen
* Modulversion 4 erhält keine Manifestaktualisierungen mehr

### Neu und verbessert

* Ergänzt eine architekturbewusste Manifestvalidierung und Filterung, einschließlich nativer AMD64- und ARM64-Behandlung in den Bereitstellungsintegrationen
* Verbessert die Sicherheit von Webanforderungen durch HTTPS- und Weiterleitungsvalidierung, Proxybehandlung und optimiertes TLS-Verhalten
* Verbessert die Prozessausführung durch korrektes Quoting von Argumenten, Zeitüberschreitungen, Ausgabebegrenzungen und Behandlung von Exitcodes
* Validiert Installationsprogrammpfade und verbessert die Erkennung installierter Software sowie die Behandlung des Downloadziels
* Verbessert Importe in Intune, ConfigMgr und MDT durch architekturbewusste Anforderungen, Erkennungsregeln, Unterstützung für `-WhatIf` und Fehlerbehandlung
* Aktualisiert die CI-Testauswahl und die Workflows zur Manifestaktualisierung; entfernt die Codecov-Konfiguration
* Ergänzt übersetzte Hilfedokumentation und erweitert die Testabdeckung
* Das Manifest wird während der Entwicklung aus dem Repository (Branch `v5`) gelesen und bei jedem Fehler durch das mitgelieferte Manifest ersetzt. Verwenden Sie `-Source Auto|Remote|Bundled`. Das mitgelieferte Manifest wird verwendet, wenn das Remotemanifest älter ist.
* Ergänzt `-Proxy` und `-ProxyCredential` für jede Funktion, die Inhalte abruft oder herunterlädt
* `Install-VcRedist` und `Uninstall-VcRedist` prüfen Exitcodes der Installationsprogramme; `Uninstall-VcRedist` löst Umgebungsvariablen in Deinstallationsbefehlen auf
* `Invoke-Process` schlägt bei unerwarteten Exitcodes fehl
* `Import-VcIntuneApplication` und `Export-VcManifest` unterstützen `-WhatIf`
* `Import-VcIntuneApplication -ImportAsUpdate` fügt basierend auf der Erkennungsdatei jedes Pakets eine Dateiversionsanforderung für ältere Laufzeitumgebungen hinzu (#204)
* Korrigiert die Namen der mitgelieferten Erkennungsdateien für die Redistributables 2012 und 2013
* `Save-VcRedist` erstellt den Ordner `-Path`, falls er nicht vorhanden ist, und bricht vor dem Download ab, wenn dies nicht möglich ist (#219)
* Webanforderungen verwenden statt des Chrome-Browser-User-Agents einen User-Agent im Format `VcRedist/<version> (...)`
* Korrigiert die Architektur der Anforderungsregel von `Import-VcIntuneApplication`: `All` ist nicht mehr gültig, x86-Pakete verwenden jetzt `x64x86`, ARM64-Pakete verwenden `arm64` (#207)
* Korrigiert das `-WhatIf`-Ziel von `New-VcMdtBundle` und `Update-VcMdtBundle` sowie die Wiederherstellung des ConfigMgr-Speicherorts in `Import-VcConfigMgrApplication`
* MDT-Tests verwenden jetzt Stubs und Mocks; `tests/Install-Mdt.ps1` wurde entfernt

### Veraltet

* Die MDT-Funktionen (`Import-VcMdtApplication`, `New-VcMdtBundle`, `Update-VcMdtApplication`, `Update-VcMdtBundle`) geben eine Warnung aus, dass sie veraltet sind

## 4.1.526

* Aktualisiert die Visual C++ Redistributables 2022 auf die neueste v14-Version
* <Badge type="danger" text="Inkompatible Änderung" /> Ändert die Versionseigenschaft `2022` in `14`, um die neueste Version widerzuspiegeln
* Aktualisiert das Modulsymbol auf das neue Visual Studio 2026-Symbol

## 4.1.523

* Korrigiert den Fallback für die Erkennung der Architektur des `x64`-Redistributables
* Ergänzt einen Fallback für die Erkennung der Architektur des `ARM64`-Redistributables

## 4.1.522

* Aktualisiert VcRedist `2022` auf `14.44.35211.0`

## 4.1.517

* Aktualisiert `Import-VcIntuneApplication`, damit den importierten Intune-Paketen Informationen zur Dateierkennung hinzugefügt werden.
* Aktualisiert `Import-VcIntuneApplication`, damit Intune vor dem Import nach passenden Visual C++ Redistributable-Paketen durchsucht wird. Ist kein passendes Paket vorhanden oder ist eine Versionsaktualisierung erforderlich, importiert `Import-VcIntuneApplication` anschließend ein Visual C++ Redistributable-Paket.
* Fügt die neue Funktion `Get-VcIntuneApplication` hinzu, die die von `Import-VcIntuneApplication` importierten Visual C++ Redistributable-Pakete zurückgibt
* Fügt die neue Funktion `Remove-VcIntuneApplication` hinzu, um die von `Import-VcIntuneApplication` importierten Visual C++ Redistributable-Pakete zu entfernen

## 4.1.505

* Korrigiert ARM64-Eigenschaften für VcRedist `2022` auf `14.44.35208.0`

## 4.1.504

* Aktualisiert VcRedist `2022` auf `14.44.35208.0`

## 4.1.503

* Aktualisiert VcRedist `2022` auf `14.44.35112.1`

## 4.1.502

* Aktualisiert VcRedist `2022` auf `14.42.34438.0`

## 4.1.501

* Korrigiert den Produktcode für VcRedist `2013` x86

## 4.1.500

* Aktualisiert VcRedist `2022` auf `14.42.34433.0`

## 4.1.499

* Aktualisiert VcRedist `2022` auf `14.40.33816.0`
* Aktualisiert VcRedist `2019` auf `14.29.30156.0`
* Aktualisiert VcRedist `2017` auf `14.16.27052.0`

## 4.1.498

* <Badge type="danger" text="Inkompatible Änderung" /> Verschiebt die Versionen `2012` und `2013` in die Liste der nicht unterstützten Redistributables. Informationen zu unterstützten Versionen finden Sie unter [Microsoft Visual C++ Redistributable: neueste unterstützte Downloads](https://learn.microsoft.com/en-au/cpp/windows/latest-supported-vc-redist?view=msvc-170).
* Ergänzt die Architektur `ARM64` für Version `2022`
* Behebt ein Problem mit der Ausgabe der internen Funktion `New-MdtDrive`

## 4.1.497

* Aktualisiert Redistributables `2022` auf `14.40.33810.0`

## 4.1.496

* Behebt ein Problem in `Import-VcIntuneApplication`, bei dem die Ausgabe von `Save-VcRedist` nicht akzeptiert wurde [#149](https://github.com/aaronparker/vcredist/issues/149)

## 4.1.495

* Aktualisiert Redistributables `2022` auf `14.38.33135.0`

## 4.1.494

* Behebt ein Problem, durch das in MDT importierte Redistributables nicht installiert werden
* Behebt ein Problem beim Import der Redistributables in eine MDT-Bereitstellungsfreigabe
* Aktualisiert Redistributables `2019` auf `14.29.30153.0`
* Aktualisiert Redistributables `2022` auf `14.38.33130.0`

## 4.1.493

* Behebt ein Problem mit `Import-VcConfigMgrApplication` [#142](https://github.com/aaronparker/vcredist/issues/142) [#96](https://github.com/aaronparker/vcredist/issues/96)

## 4.1.482

* Ändert den Standardwert von `MinimumRequiredOperatingSystem` aufgrund einer Änderung des von Intune erwarteten Werts in `W10_1809` [#132](https://github.com/aaronparker/vcredist/issues/132)

## 4.1.480

* <Badge type="danger" text="Inkompatible Änderung" /> Aktualisiert `Install-VcRedist`, `Import-VcConfigMgrApplication`, `Import-VcMdtApplication` und `Import-VcIntuneApplication`, sodass die Ausgabe von `Save-VcRedist` verwendet wird und der Parameter `-Path` entfällt [#123](https://github.com/aaronparker/vcredist/discussions/123)
* <Badge type="danger" text="Inkompatible Änderung" /> Entfernt die folgenden Redistributables aus dem Manifest, da sie nicht mehr von Microsoft heruntergeladen werden können [#114](https://github.com/aaronparker/vcredist/issues/114):

    * Visual C++ 2005 SP1 Redistributable Package 8.0.56336
    * Visual C++ 2005 SP1 Redistributable Package 8.0.50727.42
    * Visual C++ 2008 Redistributable Package 9.0.21022
    * Visual C++ 2008 Redistributable Package 9.0.21022.218
    * Visual C++ 2008 Redistributable Package 9.0.30729
    * Visual C++ 2008 Redistributable Package 9.0.21022

## 4.0.461

* Aktualisierung für VcRedist 2022, Version `14.34.31938.0`

## 4.0.460

* Dieses Update beruht hauptsächlich auf Codeverbesserungen durch zusätzliche Tests und Codeabdeckungsberichte
* Allgemeine Codeverbesserungen, einschließlich vereinfachter Routinen und konsistentem Auslösen von Fehlern
* Ändert die Ausgabe von `Uninstall-VcRedist`, sodass Statuscodes für Deinstallationsergebnisse zurückgegeben werden
* Aktualisiert `Export-VcManifest`, sodass statt einer Zeichenfolge ein Objekt des Typs `System.IO.FileSystemInfo` ausgegeben wird
* Behebt ein Problem in `Get-InstalledVcRedist`, durch das standardmäßig nicht nur installierte Redistributables exportiert wurden
* Benennt `Test-VcRedistDownload` in `Test-VcRedistUri` um, damit der Name dem Zweck der Funktion besser entspricht
* Ändert die Eigenschaft `Download` im Manifest der Visual C++ Redistributables in `URI`
* Korrigiert Installationsbefehlszeilen im Manifest der Visual C++ Redistributables, die `noreboot` anstelle von `norestart` verwendeten
* Ergänzt eine interne Validierung beim Erstellen einer Laufwerkszuordnung zu einer MDT-Bereitstellungsfreigabe
* Entfernt private Funktionen, die nicht verwendet wurden oder keine wesentliche Funktionalität bereitstellten

## 3.0.338

* Aktualisierung für VcRedist 2022, Version `14.34.31931.0`
* Ergänzt `Test-VcRedistDownload`, um zu testen, ob die von `Get-VcList` zurückgegebenen Download-URLs für VcRedist verfügbar sind
* Behebt ein Problem in `Update-VcMdtApplication`, durch das vorhandene Anwendungen nicht korrekt mit den Versionseigenschaften der neuen Version aktualisiert wurden

## 3.0.337

* Aktualisierung für VcRedist 2022, Version `14.32.31332.0`

## 3.0.336

* Aktualisierung für VcRedist 2022, Version `14.32.31326.0`

## 3.0.335

* Ergänzt `Import-VcIntuneApplication`, um Visual C++ Redistributables in einen Microsoft-Intune-Zielmandanten zu importieren. In dieser Version werden Zuweisungen für die Anwendung durch `Import-VcIntuneApplication` nicht unterstützt. Die Funktion gibt Intune-Anwendungsobjekte zurück, die mit der Funktion `Add-IntuneWin32AppAssignmentAllDevices` aus `IntuneWin32App` für Zuweisungen verwendet werden können.
* Ergänzt die private Funktion `New-TemporaryFolder`
* Aktualisiert Tests für neue Funktionen
* Aktualisiert die Dokumentation zu `Import-VcIntuneApplication`

## 3.0.320

* Aktualisierung für VcRedist 2022, Version `14.31.31103.0`

## 3.0.315

* Aktualisierung für VcRedist 2022, Version `14.30.30708.0`
* Aktualisierung für VcRedist 2019, Version `14.29.30139.0`

## 3.0.307

* Aktualisiert die Online-Hilfeseiten auf [https://vcredist.com/](https://vcredist.com/)

## 3.0.302

* Wartungsrelease: Behebt von PSScriptAnalyzer erkannte Probleme und verbessert den Codestil

## 3.0.292

* Ergänzt die Unterstützung für Visual C++ Redistributable für Visual Studio 2022, Version `14.30.30704.0`
* Verschiebt das `Visual C++ 2010 Service Pack 1 Redistributable Package MFC Security Update` in die Liste der nicht unterstützten Redistributables

## 3.0.281

* Aktualisierung für VcRedist 2019, Version `14.29.30135.0`

## 3.0.273

* Aktualisierung für VcRedist 2019, Version `14.29.30133.0`
* Behebt ein Problem in `Import-VcConfigMgrApplication`, das den Fehler `String was not recognized as a valid DateTime` auslöste. Beim Import der Anwendung verwendet die Funktion jetzt das kurze Datums-/Uhrzeitformat der aktuellen Sitzung.
* Aktualisiert `New-VcMdtBundle` und `Update-VcMdtBundle`, sodass beim Erstellen oder Aktualisieren des Bundles das kurze Datums-/Uhrzeitformat der aktuellen Sitzung verwendet wird

## 3.0.271

* Aktualisierung für VcRedist 2019, Version `14.29.30040.0`

## 3.0.263

* Aktualisierung für VcRedist 2019, Version `14.29.30037.0`
* Aktualisiert das Modul auf externe MAML-basierte Hilfe mit platyPS, um die Aktualisierung der Hilfeinhalte zu vereinfachen
* Allgemeine Codeverbesserungen in verschiedenen Funktionen
* Aktualisiert das Modul im Zuge der Änderungen an der Dokumentationswebsite

## 3.0.255

* Aktualisiert das VcRedist-Manifest für VcRedist 2019 `14.28.29914.0`
* Ergänzt die Eigenschaft `Path` in der Ausgabe von `Save-VcRedist`, die den Pfad zur heruntergeladenen VcRedist enthält

## 3.0.251

* WICHTIG: Mit diesem Release wird Visual C++ Redistributable 2008 in die Liste der nicht unterstützten Redistributables verschoben und daher standardmäßig nicht mehr von `Get-VcList` zurückgegeben. Informationen dazu finden Sie in der Dokumentation zum [Abrufen der Liste unterstützter und nicht unterstützter Redistributables](https://vcredist.com/get-vclist.html).
* Behebt ein Problem bei der Übergabe der Liste der Redistributables über die Pipeline an `Install-VcRedist` [#77](https://github.com/aaronparker/VcRedist/issues/77)
* Behebt ein Problem mit der Ausgabe von `Save-VcRedist`, durch das bei einem zweiten Aufruf die Liste der Redistributables nicht an die Pipeline zurückgegeben wurde

## 3.0.243

* Behebt ein Problem in `Get-VcList`, durch das beim Export eines nicht unterstützten Visual C++ Redistributables ein Fehler auftrat
* Sortiert die an `Install-VcRedist` übergebene Liste der Visual C++ Redistributables nach Versionsnummer, damit die Installation von der ältesten bis zur neuesten Version erfolgt
* Aktualisiert `Save-VcRedist`, damit kein Fehler ausgelöst wird, wenn beim Herunterladen eine URL des Visual C++ Redistributables den Status 404 zurückgibt; der Download der übrigen Redistributables wird fortgesetzt. Nicht mehr verfügbare Downloads sind unter [Bekannte Probleme](https://vcredist.com/known-issues.html) aufgeführt.
* Aktualisiert `Install-VcRedist`, damit kein Fehler ausgelöst wird, wenn ein Redistributable-Installationsprogramm im Zielpfad nicht verfügbar ist; die Installation der übrigen Redistributables wird fortgesetzt. So kann die Funktion den Installationsvorgang fortsetzen, wenn `Save-VcRedist` bestimmte Redistributables nicht heruntergeladen hat.
* Aktualisiert `Uninstall-VcRedist`, damit die Pipeline korrekt unterstützt wird. Dadurch sind Befehle wie `Get-InstalledVcRedist | Uninstall-VcRedist` möglich.

## 3.0.238

* Aktualisiert die Hauptversionsnummer auf 3, da eine inkompatible Änderung eingeführt wurde
* Ändert die Ordnerstruktur für Downloads von VcRedist und Importe in MDT oder ConfigMgr. Die Struktur lautet jetzt `Release\Version\Architecture`, zum Beispiel `2019\14.28.29913.0\x64`. Diese Änderung ermöglicht den Import von VcRedist-Installationsprogrammen in ConfigMgr und Microsoft Intune als separate Anwendungsversionen, mit denen frühere Versionen ersetzt und Ziel-PCs aktualisiert werden können.
* Aktualisiert `Import-VcMdtApplication`, damit VcRedist-Anwendungen mit der neuen Ordnerstruktur und Namenskonvention importiert werden. Anwendungen werden im Format `Visual C++ Redistributable Release Architecture Version` erstellt, zum Beispiel `Visual C++ Redistributable 2019 x86 14.28.29913.0`.
* Validiert vorherige Änderungen in `Import-VcConfigMgrApplication`, mit denen VcRedist-Anwendungen gemäß der neuen Ordnerstruktur und Namenskonvention importiert werden. Anwendungen werden im Format `Visual C++ Redistributable Release Architecture Version` erstellt, zum Beispiel `Visual C++ Redistributable 2019 x86 14.28.29913.0`.
* Behebt ein Problem in `Import-VcConfigMgrApplication`, bei dem robocopy beim Kopieren der VcRedist-Setupdatei in die ConfigMgr-Bereitstellungsfreigabe einen Fehler meldete, obwohl die Zieldatei erfolgreich kopiert worden war. Behebt Problem [#63](https://github.com/aaronparker/VcRedist/issues/63).
* Aktualisiert `Import-VcConfigMgrApplication`, sodass VcRedist-Setupdateien einzeln statt des gesamten mit `Save-VcRedist` gespeicherten Downloadordners kopiert werden. Dadurch lassen sich einzelne Installationsprogramme mit nur den für die jeweilige Version benötigten Inhalten importieren.
* Ergänzt den Parameter `-NoProgress` in `Save-VcRedist`, um den Downloadfortschritt von `Invoke-WebRequest` bei Verwendung des Parameters `-Verbose` zu unterdrücken. Die Downloadgeschwindigkeit wird durch die Fortschrittsanzeige von `Invoke-WebRequest` beeinträchtigt.
* Aktualisiert die Inlinehilfe verschiedener Funktionen
* Verschiedene Bereinigungen zur Verbesserung von Robustheit, Fehlerprüfung und Rechtschreibung

## 2.0.231

* Aktualisiert das VcRedist-Manifest für VcRedist 2019 `14.28.29913.0`
* Ergänzt die Eigenschaft `UninstallKey` im VcRedist-Manifest, um Erkennungsmethoden für 32-Bit- oder 64-Bit-Registrierungsschlüssel hinzuzufügen
* Ergänzt `UninstallKey` in `Get-InstalledVcRedist`, um die Bestimmung von Anwendungserkennungsmethoden zu unterstützen (z. B. für ConfigMgr, Intune usw.)
* Aktualisiert `Import-VcConfigMgrApplication`:
  * Aktualisiert den Anwendungsnamen auf das Format `Visual C++ Redistributable 2010 x64 10.0.40219.325`
  * Aktualisiert die Anwendungserkennungsmethode, sodass der Zielregistrierungsschlüssel in der passenden 32-Bit- oder 64-Bit-Registrierung erkannt wird. Behebt Problem [#58](https://github.com/aaronparker/VcRedist/issues/58).
  * Ergänzt den Parameter `-NoCopy`, um den Import von VcRedist-Anwendungen zu ermöglichen, ohne Inhalte in die ConfigMgr-Bereitstellungsfreigabe kopieren zu müssen
* Verschiedene Code- und Rechtschreibkorrekturen

## 2.0.218

* Aktualisiert VcRedist `2019` auf `14.28.29325.2`
* Behebt ein Problem, durch das `Save-VcRedist` Details heruntergeladener VcRedists nicht an die Pipeline zurückgab
* Ergänzt die private Funktion `Get-DigitalSignature`, um über `Get-FileMetadata` Informationen zu digitalen Signaturen/Zertifikaten von VcRedist-Installationsprogrammen zurückzugeben

## 2.0.214

* Aktualisiert VcRedist `2019` auf `14.27.29112.0`
* Aktualisiert VcRedist `2017` auf `14.16.27033.0`
* Aktualisiert `Import-VcConfigMgrApplication`, sodass Pfade mit Leerzeichen von ROBOCOPY unterstützt werden
* Benennt den Branch `Master` in `Main` um

## 2.0.209

* Aktualisiert VcRedist `2019` auf `14.27.29016.0`
* Aktualisiert `Uninstall-VcRedist`, sodass eine VcRedist-Deinstallation keinen Neustart auslöst

## 2.0.203

* Aktualisierung für VcRedist `2019`, Version `14.26.28720`
* Automatisiert die Aktualisierung des `VcRedist`-Manifests für neue Versionen von `2019`
* Aktualisiert Funktionen anhand neuer Auswertungen von `PSScriptAnalyzer`

## 2.0.183

* Behebt ein Problem, durch das `Get-InstalledVcRedist` wegen eines falschen RegEx-Abgleichs installierte VcRedists nicht zurückgab. Verbessert den Code, der die Ausgabe mit dem Parameter `ExportAll` filtert.

## 2.0.181

* `Import-MdtModule` – Vereinfacht den Code und stellt sicher, dass eine Ausnahme ausgelöst wird, wenn das Modul nicht geladen werden kann
* `Get-InstalledVcRedist` – Aktualisiert die Filterung der Redistributables und verbessert den Codestil
* `Save-VcRedist.ps1` – Aktualisiert die Inlinehilfe, entfernt `Start-BitsTransfer` (verwendet jetzt nur noch `Invoke-WebRequest`), erzwingt TLS 1.2, korrigiert den Verweis auf den Parameter `ProxyCredential` und korrigiert die Übergabe heruntergeladener VcRedists an die Pipeline
* `Update-VcMdtApplication.ps1` – Korrigiert den Pfad in der ausführlichen Ausgabe und behebt ein Problem, durch das VcRedist- ausführbare Dateien nicht in die MDT-Bereitstellungsfreigabe kopiert wurden
* `Update-VcMdtBundle` – Aktualisiert die Inlinehilfe, verbessert die Suche nach dem vorhandenen VcRedist-Bundle (auch außerhalb des Standardspeicherorts) und die Aktualisierung der Bundle-Eigenschaften
* Aktualisiert Pester-Tests für öffentliche Funktionen

## 2.0.174

* Ergänzt `$ProgressPreference = "SilentlyContinue"` in `Save-VcRedist`, um Downloads zu beschleunigen
* Aktualisiert das Manifest zur Unterstützung von VcRedist 2019 `14.25.28508.3`
* Aktualisiert die Modulbeschreibung
* Exportiert die Variable `VcManifest` zur späteren Verwendung

## 2.0.168

* Aktualisiert das Manifest für VcRedist 2019 `14.24.28127.4`
* Aktualisiert `Import-VcConfigMgrApplication` zur Unterstützung von UNC-Pfaden und zur Validierung des ConfigMgr-Moduls
* Aktualisiert `Export-VcManifest`, damit das gesamte Manifest exportiert wird. Vorbereitung auf automatische Manifestaktualisierungen für neue VcRedist-Versionen.

## 2.0.163

* Aktualisiert das Manifest für VcRedist 2019, Version `14.23.27820.0`, für Visual Studio 2019 `16.3`

## 2.0.161

* Für in die MDT-Bereitstellungsfreigabe importierte VcRedists ist die Option `Hide this application in the Deployment Wizard` nicht aktiviert
* Ergänzt den Parameter `-DontHide`, damit Anwendungen im MDT Deployment Wizard nicht ausgeblendet werden

## 2.0.158

* Ergänzt einen Standardpfad für den Parameter `-Path` in `Save-VcRedist` und `Install-VcRedist`, behebt Problem [#53](https://github.com/aaronparker/vcredist/issues/53) und stellt sicher, dass die Funktion auch ohne angegebenen Parameter funktioniert
* Ergänzt Begin-, Process- und End-Blöcke, um die Pipelineunterstützung in `Save-VcRedist`, `Install-VcRedist`, `Import-VcConfigMgrApplication`, `Import-VcMdtApplication`, `Update-VcMdtApplication` und `Update-VcMdtBundle` zu korrigieren und Problem [#53](https://github.com/aaronparker/vcredist/issues/53) zu beheben
* Ergänzt die Funktion `Uninstall-VcRedist` zur Verwaltung der Deinstallation von VcRedists
* Aktualisiert Pester-Tests für öffentliche Funktionen

## 2.0.147

* Ergänzt grundlegende Proxyunterstützung für `Save-VcRedist`
* Aktualisiert die Ausgabe von `Import-VcMdtApplication`, `New-VcMdtBundle`, `Update-VcMdtApplication` und `Update-VcMdtBundle`, sodass alle Anwendungseigenschaften exportiert werden
* Allgemeine Formatierungs- und Qualitätsverbesserungen: Verwendung vollständiger Typnamen und Cmdlet-/Funktionsparameter sowie Parameter-Splatting
* Aktualisiert ausführliche Ausgaben
* Vereinheitlicht Parameterdeklarationen öffentlicher Funktionen
* Ergänzt weitere Try/Catch-Anweisungen für eine bessere Ausnahmebehandlung
* Entfernt Begin-/Process-/End-Anweisungen aus Funktionen, die keine Unterstützung mehrerer Pipelineobjekte benötigen
* Verschiebt das Modulmanifest von `/Manifest` in den Modulordner der obersten Ebene und aktualisiert `Get-VcList` entsprechend
* Aktualisiert die AppVeyor-Integration und das Skriptlayout

## 2.0.140

* Aktualisiert die Manifeste für VcRedist `2019`, Version `14.21.27702.2`, für Visual Studio 2019 `16.1`

## 2.0.138

* Behebt Problem [#45: Leerer Dependency-Eintrag bei mit Import-VcMdtApplication importierten Apps](https://github.com/aaronparker/VcRedist/issues/45)
* Behebt ein Problem beim Import von VcRedists in ConfigMgr [#47](https://github.com/aaronparker/VcRedist/issues/47)

## 2.0.132

* Vereinfacht die Versionssemantik auf major.minor.build
* Ergänzt VcRedist `2019` im Manifest
* Konvertiert das Manifest für eine einfachere Verwaltung und einen schlankeren Code in JSON
* Aktualisiert die Funktion `Get-VcList` zur Unterstützung des JSON-Manifestformats
* Führt VcRedists in einem einzigen Manifest zusammen
* Benennt `Get-VcRedist` in `Save-VcRedist` um
* Benennt `Import-VcCmApp` in `Import-VcConfigMgrApplication` um
* Benennt die Funktion `Export-VcXml` in `Export-VcManifest` um
* Benennt `Import-VcMdtApp` in `Import-VcMdtApplication` um
* Teilt `Import-VcMdtApplication` zur Vereinfachung und für robustere Funktionen in `Import-VcMdtApplication`, `Update-VcMdtApplication`, `New-VcMdtBundle` und `Update-VcMdtBundle` auf
* Aktualisiert die HelpUri-Eigenschaft jeder Funktion
* Aktualisiert `Get-InstalledVcRedist`, damit zusätzliche Eigenschaften wie `Release` und `Architecture` exportiert werden
* Ergänzt die privaten Funktionen `New-MdtApplicationFolder` und `New-MdtDrive`
* Ergänzt den Parameter `-Export` in `Get-VcList`, mit den Optionen `All`, `Supported` und `Unsupported`
* Ermöglicht die Filterung der Ausgabe von `Get-VcList` mit `-Release` und `-Architecture`
* Korrigiert die Pipelineunterstützung von `Install-VcRedist`, `Import-VcMdtApplication` und `Import-VcConfigMgrApplication`, sodass sie die Ausgabe von `Get-VcList` akzeptieren
* Entfernt die Parameter `-Release` und `-Architecture` aus `Install-VcRedist`, `Import-VcMdtApplication` und `Import-VcConfigMgrApplication`. Verwenden Sie stattdessen `Get-VcList`, um nach Version und Architektur zu filtern.
* Aktualisiert Pester-Tests für öffentliche und private Funktionen

## 1.5.2.98

* Aktualisiert Manifeste mit den korrekten Details für VcRedist 2017 `14.16.27027.1`. v1.5.1.95 enthielt den falschen Manifest-Commit.

## 1.5.1.95

* Aktualisiert Manifeste mit VcRedist 2017 `14.16.27024.1`
* Aktualisiert das Modul, sodass der Alias `Save-VcRedist` für `Get-VcRedist` exportiert wird. In der nächsten Hauptversion wird `Get-VcRedist` in `Save-VcRedist` umbenannt.
* Ändert `-VcList` in `Import-VcCmApp` und `Import-VcMdtApp` so, dass `[PSCustomObject]` statt `[array]` verwendet wird
* Aktualisiert das Modulsymbol auf das neue Visual Studio 2019-Symbol

## 1.5.0.92

* Ergänzt die private Funktion `Import-MdtModule`, um den Code zum Laden des MDT-Moduls zu verbessern
* Aktualisiert `Import-VcMdtApp` für eine robustere Fehlerprüfung
* Aktualisiert die private Funktion `Get-ValidPath`, um Fehler bei ungültigen Pfaden zu vermeiden
* Aktualisiert das Manifest mit VcRedist 2017, Version `14.16.27024.1`

## 1.4.3.88

* Korrigiert die private Funktion `Get-Bitness`, damit sie bei Verwendung ohne Parameter oder mit `-Architecture` nur eine einzelne Ausgabe liefert

## 1.4.2.85

* Korrigiert das falsche Arbeitsverzeichnis beim Import von VcRedists in MDT durch `Import-VcMdtApp`

## 1.4.1.79

* Ergänzt die private Funktion `Invoke-Process` (von Adam Bertram)
* Aktualisiert `Install-VcRedist`, sodass `Invoke-Process` für eine bessere Behandlung von `Start-Process` verwendet wird
* Korrigiert Resolve-Path/TrimEnd in der privaten Funktion `Get-ValidPath`
* Behebt ein Problem mit relativen Pfaden in `Import-VcCmApp`; schließt Problem [#24](https://github.com/aaronparker/vcredist/issues/24)
* Das MDT-Bundle fügt Redistributables in der Reihenfolge von der ältesten bis zur neuesten Version als Abhängigkeiten hinzu
* Verwendet Argument-Splatting in `Install-VcRedist`, `Import-VcMdtApp` und `Import-VcCmApp`
* Aktualisiert die Codeformatierung
* Aktualisiert die Dokumentation

## 1.4.0.69

* Aktualisiert Manifeste für die neueste Version von `2017`, Version `14.15.26706.0`
* Aktualisiert Manifeste mit Befehlszeilenargumenten für die stille Installation
* Ergänzt den Schalter `-Silent` für `Install-VcRedist`, `Import-VcMdtApp` und `Import-VcCmApp`, um optionale Befehlszeilenargumente für die stille Installation zu unterstützen
* Ergänzt die private Funktion `Get-Bitness`, um die Prozessorarchitektur des aktuellen Betriebssystems zu ermitteln
* Aktualisiert `Install-VcRedist`, sodass 64-Bit-Redistributables nicht unter 32-Bit-Windows installiert werden
* Entfernt die Pipelineunterstützung für den Parameter `-VcRedist` in `Install-VcRedist`, `Import-VcMdtApp` und `Import-VcCmApp`. Die Übergabe der Ausgabe von `Get-VcList` an diese Befehle funktioniert nicht korrekt. Die Pipelineunterstützung kann in einer späteren Version wieder aufgenommen werden.
* Entfernt `2015` aus dem Standardwert des Parameters `-Release` für `Install-VcRedist`, `Import-VcMdtApp` und `Import-VcCmApp`, um die Installation von `2015` gefolgt von `2017` zu vermeiden, da beide dieselbe Hauptversionsnummer haben

## 1.3.7.60

* Aktualisiert Manifeste mit `2013`, Version `12.0.40664`
* Ergänzt `UninstallString` in der Ausgabe der Funktion `Get-InstalledVcRedist`
* `Get-VcList` versucht, die VcRedist-Version im Manifest mit der Eigenschaft `Product Version` einer bereits heruntergeladenen Datei abzugleichen. Wenn das Manifest eine höhere Version angibt, wird die Datei erneut heruntergeladen.
* Ergänzt die private Funktion `Get-FileMetadata`, um `Product Version` aus einer heruntergeladenen Datei abzurufen
* Aktualisiert die Logik in `Install-VcRedist` beim Abfragen installierter VcRedists

## 1.3.6.56

* Ergänzt `Get-InstalledVcRedist` unter Verwendung der privaten Funktion `Get-InstalledSoftware`. Behebt Problem [#18](https://github.com/aaronparker/vcredist/issues/18) zur Funktionsanforderung. Die Funktion `Get-InstallSoftware` stammt von [Adam Bertram](https://4sysops.com/archives/find-the-product-guid-of-installed-software-with-powershell/).
* Aktualisiert Manifeste mit den korrekten ProductCodes
* Aktualisiert die Dokumentation

## 1.3.5.48

* Aktualisiert Manifeste mit `2017`, Version `14.14`
* Ergänzt `<Version></Version>` in den Manifesten, um eine bessere Installationslogik zu ermöglichen, z. B. das Überspringen der Installation von `2015` über `2017`

## 1.3.4.45

* Korrigiert den Import von Redistributables mit der richtigen Plattformauswahl `x86` oder `x64` in der MDT-Anwendung in `Import-VcMdtApp`
* Korrigiert den Import von Redistributables in einen mit `-AppFolder` angegebenen Ordner, wenn der Ordner bereits in `Import-VcMdtApp` vorhanden ist

## 1.3.3.39

* Aktualisiert Manifeste mit der Version `2017` `14.13.26020`
* Aktualisiert die Eigenschaft `ReleaseNotes` des Moduls mit einem Link zum Änderungsprotokoll [https://vcredist.com/change-log](https://vcredist.com/change-log)
* Aktualisiert Funktionen mit explizitem `Write-Output`

## 1.3.2.35

* Aktualisiert die Codeformatierung
* Verwendet `Join-Path` zum Erstellen von Ordner- und Dateipfaden, um die Kompatibilität mit PSCore zu verbessern
* Aktualisiert Pester-Tests
* Aktualisiert die Version, um sie besser an Funktionsänderungen anzupassen

## 1.3.1.4

* Korrigiert den Import von ConfigMgr-Anwendungen

## 1.3.1.2

* Ergänzt `-Bundle` in `Import-VcMdtApp`, um ein Anwendungs-Bundle mit den Redistributables als Abhängigkeiten zu erstellen. Die Redistributables werden ausgeblendet, sodass im Bereitstellungsassistenten nur das Bundle ausgewählt werden kann.
* Aktualisiert einfache Pester-Tests und richtet die Appveyor-Integration ein
* Bereinigt die Inlinehilfe
* Generiert externe Hilfe mit platyPS

## 1.3.1.0

* Ergänzt die Funktion `Import-VcCmApp`, um Visual C++ Redistributables in ConfigMgr zu importieren

## 1.3.0.0

* Überarbeitet als PowerShell-Modul, um die Entwicklung und Veröffentlichung in der PowerShell Gallery zu vereinfachen
