# Redistributables in MDT aktualisieren

::: warning
Die MDT-Befehle in VcRedist 5 sind veraltet und können in einer künftigen Hauptversion entfernt werden. Die Unterstützung erfolgt nach bestem Bemühen.
:::

Verwenden Sie `Update-VcMdtApplication`, um Visual C++ Redistributables zu aktualisieren, die zuvor mit `Import-VcMdtApplication` in das Microsoft Deployment Toolkit importiert wurden. Wenn Aktualisierungen für Visual C++ Redistributables veröffentlicht werden (üblicherweise für vorhandene Versionen), müssen möglicherweise die bestehenden Anwendungen aktualisiert werden. `Import-VcMdtApplication` unterstützt zwar den Parameter `-Force`, löscht dabei jedoch zuerst die vorhandene Anwendung und importiert sie erneut. `Update-VcMdtApplication` aktualisiert die Eigenschaften der vorhandenen Anwendung und behält dabei die Anwendungs-GUID bei.

Visual C++ Redistributables können vor der Übergabe an `Save-VcRedist` und `Import-VcMdtApplication` mit `Get-VcList` nach Version und Prozessorarchitektur gefiltert werden. Die Ausgabe von `Save-VcRedist` ist erforderlich, da sie die Eigenschaft `Path` enthält, die mit dem Pfad zu jedem Installationsprogramm gefüllt ist.

## Parameter

### Erforderliche Parameter

* `VcList` – Ein Array mit Details der Visual C++ Redistributables aus `Save-VcRedist`
* `MdtPath` – Der lokale oder Netzwerkpfad zur MDT-Bereitstellungsfreigabe

### Optionale Parameter

* `Silent` – Legt den Installationsbefehl der MDT-Anwendung so fest, dass er vollständig still ausgeführt wird, anstelle der standardmäßigen passiven Installationsbefehlszeile
* `Force` – Erzwingt das Überschreiben einer vorhandenen Visual C++ Redistributable-Anwendung
* `AppFolder` – Importiert die Visual C++ Redistributables in einen Unterordner. Standard ist `VcRedists`.
* `MdtDrive` – Der Laufwerksbuchstabe, der der MDT-Bereitstellungsfreigabe zugeordnet wird. Optional; Standard ist `DS001`.
* `Publisher` – Der Herausgeber des Visual C++ Redistributables-Bundles. Optional; Standard ist „Microsoft“.
* `Language` – Die Sprache des Visual C++ Redistributables-Bundles. Standard ist `en-US`.

## Beispiele

Aktualisieren Sie die Redistributables der Versionen `2012`, `2013` und `14` in einer MDT-Bereitstellungsfreigabe mit der vollständig stillen Installationsbefehlszeile:

```powershell
$VcList = Get-VcList | Save-VcRedist -Path C:\Temp\VcRedist
Update-VcMdtApplication -VcList $VcList -MdtPath \\server\deployment -Silent
```
