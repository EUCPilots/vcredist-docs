# Redistributables-Bundle in MDT aktualisieren

::: warning
Die MDT-Befehle in VcRedist 5 sind veraltet und können in einer künftigen Hauptversion entfernt werden. Die Unterstützung erfolgt nach bestem Bemühen.
:::

Wenn das Visual C++ Redistributables-Bundle in einer MDT-Bereitstellung für die derzeit in der Freigabe vorhandenen Visual C++ Redistributable-Anwendungen aktualisiert werden muss, durchsucht `Update-VcMdtBundle` die Bereitstellungsfreigabe und ersetzt alle Abhängigkeiten des bestehenden Bundles durch die aktuellen Visual C++ Redistributable-Anwendungen.

Die Eigenschaft Version des Bundles wird auf das aktuelle Datum aktualisiert. So lässt sich leicht erkennen, wann das Bundle zuletzt aktualisiert wurde.

## Parameter

### Erforderliche Parameter

* `MdtPath` – Der lokale oder Netzwerkpfad zur MDT-Bereitstellungsfreigabe

### Optionale Parameter

* `AppFolder` – Aktualisiert das Visual C++ Redistributables-Bundle in einem Unterordner. Standard ist `VcRedists`.
* `MdtDrive` – Der Laufwerksbuchstabe, der der MDT-Bereitstellungsfreigabe zugeordnet wird. Optional; Standard ist `DS001`.
* `Publisher` – Der Herausgeber des Visual C++ Redistributables-Bundles. Optional; Standard ist `Microsoft`.
* `BundleName` – Der Kurzname des Visual C++ Redistributables-Bundles. Optional; Standard ist `Visual C++ Redistributables`.
* `Language` – Standard ist `en-US`.

## Beispiele

Führen Sie `Update-VcMdtBundle` aus, um das Bundle in der Zielbereitstellungsfreigabe zu erstellen. Die Funktion durchsucht den standardmäßigen Anwendungsordner (VcRedists) nach Visual C++ Redistributables und aktualisiert das vorhandene Bundle so, dass jede Redistributable-Anwendung in der Reihenfolge von der ältesten bis zur neuesten Version als Abhängigkeit enthalten ist.

```powershell
Update-VcMdtBundle -MdtPath \\server\deployment
```
