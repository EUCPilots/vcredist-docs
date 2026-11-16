# Redistributables deinstallieren

Verwenden Sie `Uninstall-VcRedist`, um die Visual C++ Redistributables auf dem lokalen Computer zu deinstallieren. Diese Funktion akzeptiert die Version und Architektur der Visual C++ Redistributables und versucht, die angegebenen Visual C++ Redistributables still zu deinstallieren.

`Uninstall-VcRedist` erfordert eine erhöhte PowerShell-Sitzung unter Windows. Die Funktion verwendet das PowerShell-Bestätigungsverhalten für Vorgänge mit weitreichender Wirkung. Verwenden Sie `-Confirm`, um ausdrücklich eine Bestätigung anzufordern, oder `-Confirm:$false`, um die Aufforderung zu unterdrücken.

## Parameter

### Erforderliche Parameter

Keine. Ohne Filter wählt der Befehl installierte Redistributables aus allen Versionen sowie für die Architekturen x86 und x64 aus. Vor der Deinstallation wird standardmäßig eine Bestätigung angefordert.

### Optionale Parameter

* `Confirm` – Steuert die PowerShell-Bestätigungsaufforderung. `-Confirm:$false` unterdrückt sie.
* `Release` – Gibt die Version der zu deinstallierenden Redistributables an (z. B. `14`, `2019`, `2012` usw.).
* `Architecture` – Gibt die zu deinstallierende Architektur an: `x86`, `x64` oder `ARM64`. Standardmäßig werden x86 und x64 ausgewählt.
* `VcList` – Akzeptiert Manifesteinträge aus der Pipeline, um bestimmte Redistributables zur Deinstallation auszuwählen.

## Beispiele

Der folgende Befehl deinstalliert alle aktuell auf dem lokalen System installierten Visual C++ Redistributables.

```powershell
Uninstall-VcRedist -Confirm
```

Mit diesem Befehl werden alle installierten Visual C++ Redistributables der Version `2008` deinstalliert.

```powershell
Uninstall-VcRedist -Release 2008
```
