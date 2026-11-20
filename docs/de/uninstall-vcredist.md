# Redistributables deinstallieren

Verwenden Sie `Uninstall-VcRedist`, um die Visual C++ Redistributables auf dem lokalen Computer zu deinstallieren. Diese Funktion akzeptiert die Version und Architektur der Visual C++ Redistributables und versucht, die angegebenen Visual C++ Redistributables still zu deinstallieren.

`Uninstall-VcRedist` erfordert eine erhöhte PowerShell-Sitzung unter Windows. Die Funktion verwendet das PowerShell-Bestätigungsverhalten für Vorgänge mit weitreichender Wirkung. Verwenden Sie `-Confirm`, um ausdrücklich eine Bestätigung anzufordern, oder `-Confirm:$false`, um die Aufforderung zu unterdrücken.

## Parameter

### Erforderliche Parameter

Keine. Ohne Filter wählt der Befehl installierte Redistributables aus allen Versionen (einschließlich `2022`) sowie für die Architekturen x86 und x64 aus. ARM64 ist mit `-Architecture ARM64` verfügbar, wird jedoch nicht standardmäßig ausgewählt. Vor der Deinstallation wird standardmäßig eine Bestätigung angefordert.

### Optionale Parameter

* `Confirm` – Steuert die PowerShell-Bestätigungsaufforderung. `-Confirm:$false` unterdrückt sie.
* `Release` – Gibt die Version der zu deinstallierenden Redistributables an (z. B. `14`, `2019`, `2012` usw.).
* `Architecture` – Gibt die zu deinstallierende Architektur an: `x86`, `x64` oder `ARM64`. Standardmäßig werden x86 und x64 ausgewählt.
* `VcList` – Akzeptiert Einträge aus `Get-VcList` oder `Get-InstalledVcRedist` über die Pipeline, um bestimmte Redistributables auszuwählen.

## Beispiele

Der folgende Befehl deinstalliert alle aktuell auf dem lokalen System installierten Visual C++ Redistributables.

```powershell
Uninstall-VcRedist -Confirm
```

Mit diesem Befehl werden alle installierten Visual C++ Redistributables der Version `2008` deinstalliert.

```powershell
Uninstall-VcRedist -Release 2008
```

Ausgewählte installierte Einträge aus dem Bestand deinstallieren:

```powershell
Get-InstalledVcRedist | Where-Object Release -eq "14" | Uninstall-VcRedist
```

Der Befehl gibt für jedes ausgewählte Element ein Statusobjekt zurück. `State` ist `Uninstalled`, wenn die Deinstallation erfolgreich ist, `Not installed`, wenn das Produkt bereits nicht vorhanden war, und `Failed`, wenn das Deinstallationsprogramm nicht ausgeführt werden kann oder einen unerwarteten Exitcode zurückgibt. Wenn im manuellen Modus sowohl `-Release` als auch `-Architecture` explizit angegeben werden, werden auch fehlende Kombinationen mit `Not installed` zurückgegeben.
