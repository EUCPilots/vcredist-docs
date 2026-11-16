# Redistributables-Bundle in MDT erstellen

::: warning
Die MDT-Befehle in VcRedist 5 sind veraltet und können in einer künftigen Hauptversion entfernt werden. Die Unterstützung erfolgt nach bestem Bemühen.
:::

Nachdem die Visual C++ Redistributables in eine MDT-Bereitstellungsfreigabe importiert wurden, stehen sie als einzelne Anwendungen zur Verfügung, die einer Tasksequenz hinzugefügt werden können. Um die Auswahl der Redistributables zu vereinfachen, können sie zu einem Anwendungs-Bundle zusammengefasst werden. Ein Bundle ist eine Anwendung in der MDT-Freigabe, die selbst keine Anwendungen installiert, sondern andere Anwendungen als Abhängigkeiten enthält. So kann ein Bundle eine Gruppe von Anwendungen in einer bestimmten Reihenfolge mit einer einzelnen Aktion in einer Tasksequenz installieren.

Die Eigenschaft Version des Bundles wird mit dem aktuellen Datum versehen. So lässt sich leicht erkennen, wann das Bundle erstellt oder zuletzt aktualisiert wurde.

## Parameter

### Erforderliche Parameter

* `MdtPath` – Der lokale oder Netzwerkpfad zur MDT-Bereitstellungsfreigabe

### Optionale Parameter

* `AppFolder` – Importiert die Visual C++ Redistributables in einen Unterordner. Standard ist `VcRedists`.
* `MdtDrive` – Der Laufwerksbuchstabe, der der MDT-Bereitstellungsfreigabe zugeordnet wird. Optional; Standard ist `DS001`.
* `Publisher` – Der Herausgeber des Visual C++ Redistributables-Bundles. Optional; Standard ist `Microsoft`.
* `BundleName` – Der Kurzname des Visual C++ Redistributables-Bundles. Optional; Standard ist `Visual C++ Redistributables`.
* `Language` – Standard ist `en-US`.

## Beispiele

Führen Sie `New-VcMdtBundle` aus, um das Bundle in der Zielbereitstellungsfreigabe zu erstellen. Die Funktion durchsucht den standardmäßigen Anwendungsordner (VcRedists) nach Visual C++ Redistributables und erstellt ein Bundle, dessen Abhängigkeiten jede Redistributable-Anwendung in der Reihenfolge von der ältesten bis zur neuesten Version enthalten.

```powershell
New-VcMdtBundle -MdtPath \\server\deployment
```
