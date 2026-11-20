# Redistributable-URIs testen

`Test-VcRedistUri` validiert die Download-URIs der Visual C++ Redistributables, indem eine HEAD-Anforderung an jede URI gesendet wird. Verwenden Sie diese Funktion, um zu prüfen, ob Downloadlinks erreichbar sind, bevor Sie mit `Save-VcRedist` einen Download starten.

Es werden nur HTTPS-URLs auf den zulässigen Microsoft-Downloadhosts getestet. Andere URLs werden abgelehnt.

## Parameter

### Erforderliche Parameter

* `VcList` – Ein Array mit Details der Visual C++ Redistributables aus `Get-VcList`

### Optionale Parameter

* `Proxy` – Gibt einen Proxyserver für die Anforderung an
* `ProxyCredential` – Gibt Anmeldeinformationen für den Proxyserver an
* `ShowProgress` – Zeigt den Downloadfortschritt an. Der Fortschritt wird standardmäßig ausgeblendet.

## Beispiele

Alle unterstützten Download-URIs der Redistributables testen:

```powershell
Get-VcList | Test-VcRedistUri
```

Beispielausgabe:

```powershell
Result       : True
Release      : 14
Architecture : x64
Version      : 14.52.37029.0
URI          : https://aka.ms/vc14/vc_redist.x64.exe
```

URIs für eine bestimmte Version und Architektur testen:

```powershell
Get-VcList -Release 2019 -Architecture x64 | Test-VcRedistUri
```

Alle URIs der Redistributables einschließlich nicht unterstützter Versionen testen:

```powershell
Get-VcList -Export All | Test-VcRedistUri
```

URIs über einen Proxyserver testen:

```powershell
Get-VcList | Test-VcRedistUri -Proxy "http://proxy.domain.local"
```
