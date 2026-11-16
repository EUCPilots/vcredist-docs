---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VcRedist"
  text: "Gestion du cycle de vie des redistribuables Visual C++"
  tagline: Un module PowerShell permettant de gérer les redistribuables Microsoft Visual C++ sous Windows, Intune, Configuration Manager et d'autres environnements.
  image:
    src: '/img/vcredist.png'
    alt: 'VcRedist'
  actions:
    - theme: brand
      text: Redistribuables pris en charge
      link: /versions
    - theme: alt
      text: Bien démarrer
      link: /install
    - theme: alt
      text: GitHub
      link: https://github.com/aaronparker/vcredist

features:
  - title: Images de référence
    details: Installez les redistribuables Microsoft Visual C++ dans vos pipelines de création d'images de référence.
    icon:
      src: /icons/ic_fluent_ribbon_32_color.svg
  - title: Gestion des appareils
    details: Importez les redistribuables Microsoft Visual C++ dans Intune, Configuration Manager, MDT et d'autres solutions.
    icon:
      src: /icons/ic_fluent_apps_32_color.svg
  - title: Installations locales
    details: Gérez les redistribuables Visual C++ sur toute version de Windows prenant en charge PowerShell.
    icon:
      src: /icons/ic_fluent_laptop_32_color.svg
  - title: Audit
    details: Auditez et validez une image Windows ou des PC Windows pour vérifier les versions de VcRedist installées.
    icon:
      src: /icons/ic_fluent_book_open_lightbulb_32_color.svg
---
