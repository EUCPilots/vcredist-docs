# Instalación rápida

El uso principal del módulo VcRedist es la implementación empresarial de sistemas operativos en cientos o miles de equipos Windows; sin embargo, también puede usarse para instalar rápidamente los Redistributables de Visual C++ compatibles en el sistema actual.

## Instalar los Redistributables de Visual C++

1. Primero, asegúrese de usar PowerShell como administrador. Busque PowerShell en el menú Inicio, haga clic con el botón derecho en el acceso directo y elija `Run as Administrator`.
2. Instale el módulo con PowerShell.

::: tip
Revise [https://vcredist.com/install.ps1](https://vcredist.com/install.ps1) antes de ejecutar el siguiente comando para asegurarse de que sea seguro. Sabemos que el script es seguro, pero debe verificar la seguridad y el contenido de cualquier script de Internet que no conozca. El siguiente comando descarga un script remoto de PowerShell y lo ejecuta en el equipo.
:::

Copie el siguiente comando:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://vcredist.com/install.ps1'))
```

3. Pegue el código en la ventana de PowerShell que abrió como administrador.
4. Espere unos segundos a que se ejecute el comando. Si el script no produce errores, deberían estar instalados los Redistributables de Visual C++ más recientes.

Debería ver un resultado similar al siguiente:

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

Cuando finalice el comando, los Redistributables de Visual C++ deberían estar instalados en el sistema local, como se muestra aquí:

![Redistributables de Microsoft Visual C++ instalados en el equipo local](/images/installed2022.png)
