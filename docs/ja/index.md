---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "VcRedist"
  text: "Visual C++ 再頒布可能パッケージのライフサイクル管理"
  tagline: Windows、Intune、Configuration Manager などで Microsoft Visual C++ 再頒布可能パッケージを管理する PowerShell モジュールです。
  image:
    src: '/img/vcredist.png'
    alt: 'VcRedist'
  actions:
    - theme: brand
      text: サポート対象の再頒布可能パッケージ
      link: /versions
    - theme: alt
      text: はじめに
      link: /install
    - theme: alt
      text: GitHub
      link: https://github.com/aaronparker/vcredist

features:
  - title: ゴールド イメージ
    details: ゴールド イメージのパイプラインに Microsoft Visual C++ 再頒布可能パッケージをインストールします。
    icon:
      src: /icons/ic_fluent_ribbon_32_color.svg
  - title: デバイス管理
    details: Microsoft Visual C++ 再頒布可能パッケージを Intune、Configuration Manager、MDT などにインポートします。
    icon:
      src: /icons/ic_fluent_apps_32_color.svg
  - title: ローカル インストール
    details: PowerShell をサポートする任意のバージョンの Windows で Visual C++ 再頒布可能パッケージを管理します。
    icon:
      src: /icons/ic_fluent_laptop_32_color.svg
  - title: 監査
    details: Windows イメージまたは Windows PC にインストールされている VcRedist のバージョンを監査、検証します。
    icon:
      src: /icons/ic_fluent_book_open_lightbulb_32_color.svg
---
