---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VcRedist"
  text: "Lifecycle management of the Visual C++ Redistributables"
  tagline: A PowerShell module to manage the Microsoft Visual C++ Redistributables across Windows, Intune, Configuration Manager, and more.
  image:
    src: '/img/vcredist.png'
    alt: 'VcRedist'
  actions:
    - theme: brand
      text: Supported Redistributables
      link: /versions
    - theme: alt
      text: Getting started
      link: /install
    - theme: alt
      text: GitHub
      link: https://github.com/aaronparker/vcredist

features:
  - title: Gold images
    details: Install the Microsoft Visual C++ Redistributables in your gold image pipelines.
    icon:
      src: /icons/ic_fluent_ribbon_32_color.svg
  - title: Device management
    details: Import the Microsoft Visual C++ Redistributables into Intune, Configuration Manager, MDT and more.
    icon:
      src: /icons/ic_fluent_apps_32_color.svg
  - title: Local installs
    details: Manage the Visual C++ Redistributables on any version of Windows that supports PowerShell.
    icon:
      src: /icons/ic_fluent_laptop_32_color.svg
  - title: Auditing
    details: Audit and validate a Windows image or Windows PCs for installed VcRedist versions.
    icon:
      src: /icons/ic_fluent_book_open_lightbulb_32_color.svg
---

