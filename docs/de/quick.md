# Schnellinstallation

Das VcRedist-Modul wird hauptsächlich bei der unternehmensweiten Betriebssystembereitstellung für Hunderte oder Tausende Windows-PCs eingesetzt. Es kann jedoch auch verwendet werden, um die unterstützten Visual C++ Redistributables schnell auf dem aktuellen System zu installieren.

## Visual C++ Redistributables installieren

1. Stellen Sie zunächst sicher, dass Sie PowerShell als Administrator ausführen. Suchen Sie im Startmenü nach PowerShell, klicken Sie mit der rechten Maustaste auf die Verknüpfung und wählen Sie `Run as Administrator`.
2. Installieren Sie das Modul mit PowerShell.

::: tip
Überprüfen Sie [https://vcredist.com/install.ps1](https://vcredist.com/install.ps1), bevor Sie den folgenden Befehl ausführen, um die Sicherheit zu gewährleisten. Wir wissen bereits, dass das Skript sicher ist, aber Sie sollten die Sicherheit und den Inhalt jedes Skripts aus dem Internet prüfen, mit dem Sie nicht vertraut sind. Der folgende Befehl lädt ein PowerShell-Skript aus dem Internet herunter und führt es auf Ihrem Computer aus.
:::

Kopieren Sie nun den folgenden Befehl:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://vcredist.com/install.ps1'))
```

3. Fügen Sie den Code in die PowerShell-Eingabeaufforderung ein, die Sie als Administrator gestartet haben.
4. Warten Sie einige Sekunden, bis der Befehl ausgeführt wurde. Wenn das Skript keine Fehler ausgibt, sollten die neuesten Visual C++ Redistributables installiert sein.

Die Ausgabe sollte etwa wie folgt aussehen:

```powershell
Checking whether module is installed: VcRedist.
Installing module: VcRedist 5.0.6-rc2.
Saving VcRedists to path: C:\Users\Aaron\AppData\Local\Temp\VcRedist.
Downloading and installing supported Microsoft Visual C++ Redistributables.
Installed Visual C++ Redistributables:

Name                                                 Release Architecture Version
----                                                 ------- ------------ -------
Visual C++ v14 Redistributable (x86)                 14      x86          14.52.37029.0
Visual C++ v14 Redistributable (x64)                 14      x64          14.52.37029.0
Visual C++ v14 Redistributable (Arm64)               14      ARM64        14.52.37029.0
```

Nach Abschluss des Befehls sollten die Visual C++ Redistributables auf Ihrem lokalen System installiert sein. Die Anzeige sollte etwa so aussehen:

![Auf dem lokalen PC installierte Microsoft Visual C++ Redistributables](/images/installed2022.png)
