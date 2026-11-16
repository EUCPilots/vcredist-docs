# Redistributables herunterladen

Um Visual C++ Redistributables herunterzuladen, leiten Sie Einträge von `Get-VcList` an `Save-VcRedist` weiter. Der Zielordner wird bei Bedarf erstellt. Installationsprogramme werden unter `Release\Version\Architecture` gespeichert; bereits vorhandene gültige Installationsprogramme werden wiederverwendet.

Downloads müssen HTTPS verwenden und von einem zulässigen Microsoft-Downloadhost stammen. Standardmäßig muss jedes Installationsprogramm – auch ein bereits vorhandenes – über eine gültige Microsoft-Authenticode-Signatur verfügen. Der Befehl gibt jeden Eintrag mit dem Installationsprogrammpfad `Path` zurück, der mit `Install-VcRedist` oder einer Importfunktion für die Bereitstellung verwendet werden kann.

::: info
Ein vorhandenes Installationsprogramm wird wiederverwendet, wenn seine Dateiversion mindestens so aktuell wie die Manifestversion ist. Die Signatur wird dennoch überprüft.
:::

## Parameter

### Erforderliche Parameter

* `VcList` – Einträge aus `Get-VcList`

### Optionale Parameter

* `Path` – Zielordner; standardmäßig das aktuelle Verzeichnis
* `Proxy` – Gibt einen für den Download der Visual C++ Redistributables zu verwendenden Proxyserver an
* `ProxyCredential` – Wenn der Proxyserver eine Authentifizierung erfordert, können Anmeldeinformationen als PSCredential-Objekt angegeben werden
* `ShowProgress` – Zeigt den Downloadfortschritt an
* `UserAgent` – Legt den User-Agent der Anforderung fest
* `SkipAuthenticodeValidation` – Überspringt Signaturprüfungen. Verwenden Sie dies nur, wenn es einen ausdrücklichen Grund gibt, die Validierung zu umgehen.
* `WhatIf` – Zeigt eine Vorschau der Ordnererstellung und Downloads an, ohne Änderungen vorzunehmen.

## Beispiele

Verwenden Sie folgenden Befehl, um die Standardliste der Redistributables nach `C:\Temp\VcRedist` herunterzuladen:

```powershell
Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
```

Die Redistributables werden in den Zielordner heruntergeladen:

![Ordner mit Microsoft Visual C++ Redistributables](/images/vcredist-folder.png)

Übergeben Sie die Liste der unterstützten Visual C++ Redistributables der Versionen `2013` und `2019` für x86 an Save-VcRedist, um die Redistributables nach C:\Redist herunterzuladen.

```powershell
$VcList = Get-VcList -Release 2013, 2019 -Architecture x86
Save-VcRedist -VcList $VcList -Path C:\Redist
```

Laden Sie die Visual C++ Redistributables der Versionen `2012`, `2013` und `2019` nach C:\Redist herunter.

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist
```

Laden Sie die Visual C++ Redistributables der Versionen `2012`, `2013` und `2019` über den Proxyserver „proxy.domain.local“ nach C:\Redist herunter.

```powershell
Save-VcRedist -VcList (Get-VcList -Release 2012, 2013, 2019) -Path C:\Redist -Proxy proxy.domain.local
```
