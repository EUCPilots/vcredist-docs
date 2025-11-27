# Quick install

The VcRedist module's primary usage is in enterprise operating system deployment for 100's or 1,000's of Windows PCs; however, it can be used to quickly install the support Visual C++ Redistributables on your current system.

## Install the Visual C++ Redistributables

1. First, ensure that you are using a PowerShell as an administrator. Find PowerShell in the Start menu, right-click on the shortcut and choose `Run as Administrator`
2. Install with PowerShell

::: tip
Please inspect [https://vcredist.com/install.ps1](https://vcredist.com/install.ps1) prior to running the following command to ensure safety. We already know the script is safe, but you should verify the security and contents of any script from the internet you are not familiar with. The command below downloads a remote PowerShell script and executes it on your machine.
:::

Now copy the following command:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://vcredist.com/install.ps1'))
```

3. Paste the code into the PowerShell prompt that you have chosen to run as administrator
4. Wait a few seconds for the command to run. If the script does not produce any errors, then the latest Visual C++ Redistributables should be installed.

You should see output similar to the following:

```powershell
Checking whether module is installed: VcRedist.
Installing module: VcRedist 4.1.522.
Saving VcRedists to path: C:\Users\Aaron\AppData\Local\Temp\VcRedist.
Downloading and installing supported Microsoft Visual C++ Redistributables.
Installed Visual C++ Redistributables:

Name                                                               Release Architecture Version
----                                                               ------- ------------ -------
Microsoft Visual C++ 2015-2022 Redistributable (x86) - 14.44.35211 2022    x86          14.44.35211.0
Microsoft Visual C++ 2015-2022 Redistributable (x64) - 14.44.35211 2022    x64          14.44.35211.0
```

Once the command is complete, you should see the Visual C++ Redistributables installed on your local system, looking similar to this:

![Microsoft Visual C++ Redistributables installed on the local PC](/images/installed2022.png)
