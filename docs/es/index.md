---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VcRedist"
  text: "Administración del ciclo de vida de los Redistributables de Visual C++"
  tagline: Módulo de PowerShell para administrar los Redistributables de Microsoft Visual C++ en Windows, Intune, Configuration Manager y otros entornos.
  image:
    src: '/img/vcredist.png'
    alt: 'VcRedist'
  actions:
    - theme: brand
      text: Redistributables compatibles
      link: /versions
    - theme: alt
      text: Primeros pasos
      link: /install
    - theme: alt
      text: GitHub
      link: https://github.com/aaronparker/vcredist

features:
  - title: Imágenes maestras
    details: Instale los Redistributables de Microsoft Visual C++ en los procesos de creación de imágenes maestras.
    icon:
      src: /icons/ic_fluent_ribbon_32_color.svg
  - title: Administración de dispositivos
    details: Importe los Redistributables de Microsoft Visual C++ en Intune, Configuration Manager, MDT y otros entornos.
    icon:
      src: /icons/ic_fluent_apps_32_color.svg
  - title: Instalaciones locales
    details: Administre los Redistributables de Visual C++ en cualquier versión de Windows compatible con PowerShell.
    icon:
      src: /icons/ic_fluent_laptop_32_color.svg
  - title: Auditoría
    details: Audite y valide una imagen de Windows o equipos Windows para comprobar las versiones instaladas de VcRedist.
    icon:
      src: /icons/ic_fluent_book_open_lightbulb_32_color.svg
---
