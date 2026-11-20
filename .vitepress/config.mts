import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
const localizedThemeConfig = {
      fr: {
        nav: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Pour commencer', link: '/fr/intro' },
          { text: 'PowerShell Gallery', link: 'https://www.powershellgallery.com/packages/VcRedist/' },
          { text: 'Journal des modifications', link: '/fr/changelog' }
        ],
        sidebar: [
          {
            text: 'Pour commencer',
            collapsed: false,
            items: [
              { text: 'Introduction', link: '/fr/intro' },
              { text: 'Redistribuables inclus', link: '/fr/versions' },
              { text: 'Plateformes prises en charge', link: '/fr/supported' },
              { text: 'Installation rapide', link: '/fr/quick' },
              { text: 'Installer VcRedist', link: '/fr/install' },
              { text: 'Obtenir la liste VcRedist', link: '/fr/get-vclist' },
              { text: 'Télécharger les redistribuables', link: '/fr/save-vcredist' },
              { text: 'Exporter le manifeste', link: '/fr/export-vcmanifest' },
              { text: 'Problèmes connus', link: '/fr/issues' },
              { text: 'Gestion des versions de VcRedist', link: '/fr/versioning' }
            ]
          },
          {
            text: 'Windows',
            collapsed: false,
            items: [
              { text: 'Installer les redistribuables', link: '/fr/install-vcredist' },
              { text: 'Obtenir les redistribuables installés', link: '/fr/get-installedvcredist' },
              { text: 'Désinstaller les redistribuables', link: '/fr/uninstall-vcredist' }
            ]
          },
          {
            text: 'Intune',
            collapsed: false,
            items: [
              { text: 'S’authentifier auprès d’Intune', link: '/fr/intune-setup' },
              { text: 'Importer les redistribuables dans Intune', link: '/fr/import-vcintuneapplication' },
              { text: 'Rechercher des redistribuables dans Intune', link: '/fr/get-vcintuneapplication' },
              { text: 'Supprimer les redistribuables d’Intune', link: '/fr/remove-vcintuneapplication' }
            ]
          },
          {
            text: 'ConfigMgr',
            collapsed: false,
            items: [
              { text: 'Importer les redistribuables dans ConfigMgr', link: '/fr/import-vcconfigmgrapplication' }
            ]
          },
          {
            text: 'Microsoft Deployment Toolkit',
            collapsed: false,
            items: [
              { text: 'Importer les redistribuables dans MDT', link: '/fr/import-vcmdtapplication' },
              { text: 'Créer un ensemble de redistribuables dans MDT', link: '/fr/new-vcmdtbundle' },
              { text: 'Mettre à jour les redistribuables dans MDT', link: '/fr/update-vcmdtapplication' },
              { text: 'Mettre à jour l’ensemble de redistribuables dans MDT', link: '/fr/update-vcmdtbundle' }
            ]
          },
          {
            text: 'Autre',
            collapsed: false,
            items: [
              { text: 'Tester les URI des redistribuables', link: '/fr/test-vcredisturi' }
            ]
          }
        ]
      },
      de: {
        nav: [
          { text: 'Startseite', link: '/de/' },
          { text: 'Erste Schritte', link: '/de/intro' },
          { text: 'PowerShell Gallery', link: 'https://www.powershellgallery.com/packages/VcRedist/' },
          { text: 'Änderungsprotokoll', link: '/de/changelog' }
        ],
        sidebar: [
          {
            text: 'Erste Schritte',
            collapsed: false,
            items: [
              { text: 'Einführung', link: '/de/intro' },
              { text: 'Enthaltene Redistributables', link: '/de/versions' },
              { text: 'Unterstützte Plattformen', link: '/de/supported' },
              { text: 'Schnellinstallation', link: '/de/quick' },
              { text: 'VcRedist installieren', link: '/de/install' },
              { text: 'VcRedist-Liste abrufen', link: '/de/get-vclist' },
              { text: 'Redistributables herunterladen', link: '/de/save-vcredist' },
              { text: 'Manifest exportieren', link: '/de/export-vcmanifest' },
              { text: 'Bekannte Probleme', link: '/de/issues' },
              { text: 'VcRedist-Versionierung', link: '/de/versioning' }
            ]
          },
          {
            text: 'Windows',
            collapsed: false,
            items: [
              { text: 'Redistributables installieren', link: '/de/install-vcredist' },
              { text: 'Installierte Redistributables abrufen', link: '/de/get-installedvcredist' },
              { text: 'Redistributables deinstallieren', link: '/de/uninstall-vcredist' }
            ]
          },
          {
            text: 'Intune',
            collapsed: false,
            items: [
              { text: 'Bei Intune authentifizieren', link: '/de/intune-setup' },
              { text: 'Redistributables in Intune importieren', link: '/de/import-vcintuneapplication' },
              { text: 'Intune nach Redistributables abfragen', link: '/de/get-vcintuneapplication' },
              { text: 'Redistributables aus Intune entfernen', link: '/de/remove-vcintuneapplication' }
            ]
          },
          {
            text: 'ConfigMgr',
            collapsed: false,
            items: [
              { text: 'Redistributables in ConfigMgr importieren', link: '/de/import-vcconfigmgrapplication' }
            ]
          },
          {
            text: 'Microsoft Deployment Toolkit',
            collapsed: false,
            items: [
              { text: 'Redistributables in MDT importieren', link: '/de/import-vcmdtapplication' },
              { text: 'Redistributables-Paket in MDT erstellen', link: '/de/new-vcmdtbundle' },
              { text: 'Redistributables in MDT aktualisieren', link: '/de/update-vcmdtapplication' },
              { text: 'Redistributables-Paket in MDT aktualisieren', link: '/de/update-vcmdtbundle' }
            ]
          },
          {
            text: 'Weitere Themen',
            collapsed: false,
            items: [
              { text: 'Redistributable-URIs testen', link: '/de/test-vcredisturi' }
            ]
          }
        ]
      },
      es: {
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Primeros pasos', link: '/es/intro' },
          { text: 'PowerShell Gallery', link: 'https://www.powershellgallery.com/packages/VcRedist/' },
          { text: 'Registro de cambios', link: '/es/changelog' }
        ],
        sidebar: [
          {
            text: 'Primeros pasos',
            collapsed: false,
            items: [
              { text: 'Introducción', link: '/es/intro' },
              { text: 'Redistribuibles incluidos', link: '/es/versions' },
              { text: 'Plataformas compatibles', link: '/es/supported' },
              { text: 'Instalación rápida', link: '/es/quick' },
              { text: 'Instalar VcRedist', link: '/es/install' },
              { text: 'Obtener la lista de VcRedist', link: '/es/get-vclist' },
              { text: 'Descargar los redistribuibles', link: '/es/save-vcredist' },
              { text: 'Exportar el manifiesto', link: '/es/export-vcmanifest' },
              { text: 'Problemas conocidos', link: '/es/issues' },
              { text: 'Versionado de VcRedist', link: '/es/versioning' }
            ]
          },
          {
            text: 'Windows',
            collapsed: false,
            items: [
              { text: 'Instalar los redistribuibles', link: '/es/install-vcredist' },
              { text: 'Obtener los redistribuibles instalados', link: '/es/get-installedvcredist' },
              { text: 'Desinstalar los redistribuibles', link: '/es/uninstall-vcredist' }
            ]
          },
          {
            text: 'Intune',
            collapsed: false,
            items: [
              { text: 'Autenticarse en Intune', link: '/es/intune-setup' },
              { text: 'Importar redistribuibles en Intune', link: '/es/import-vcintuneapplication' },
              { text: 'Consultar redistribuibles en Intune', link: '/es/get-vcintuneapplication' },
              { text: 'Quitar redistribuibles de Intune', link: '/es/remove-vcintuneapplication' }
            ]
          },
          {
            text: 'ConfigMgr',
            collapsed: false,
            items: [
              { text: 'Importar redistribuibles en ConfigMgr', link: '/es/import-vcconfigmgrapplication' }
            ]
          },
          {
            text: 'Microsoft Deployment Toolkit',
            collapsed: false,
            items: [
              { text: 'Importar redistribuibles en MDT', link: '/es/import-vcmdtapplication' },
              { text: 'Crear un paquete de redistribuibles en MDT', link: '/es/new-vcmdtbundle' },
              { text: 'Actualizar redistribuibles en MDT', link: '/es/update-vcmdtapplication' },
              { text: 'Actualizar el paquete de redistribuibles en MDT', link: '/es/update-vcmdtbundle' }
            ]
          },
          {
            text: 'Otros',
            collapsed: false,
            items: [
              { text: 'Probar URI de redistribuibles', link: '/es/test-vcredisturi' }
            ]
          }
        ]
      },
      ja: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'はじめに', link: '/ja/intro' },
          { text: 'PowerShell Gallery', link: 'https://www.powershellgallery.com/packages/VcRedist/' },
          { text: '変更履歴', link: '/ja/changelog' }
        ],
        sidebar: [
          {
            text: 'はじめに',
            collapsed: false,
            items: [
              { text: '概要', link: '/ja/intro' },
              { text: '含まれる再頒布可能パッケージ', link: '/ja/versions' },
              { text: 'サポート対象プラットフォーム', link: '/ja/supported' },
              { text: 'クイック インストール', link: '/ja/quick' },
              { text: 'VcRedist のインストール', link: '/ja/install' },
              { text: 'VcRedist の一覧を取得', link: '/ja/get-vclist' },
              { text: '再頒布可能パッケージをダウンロード', link: '/ja/save-vcredist' },
              { text: 'マニフェストをエクスポート', link: '/ja/export-vcmanifest' },
              { text: '既知の問題', link: '/ja/issues' },
              { text: 'VcRedist のバージョン管理', link: '/ja/versioning' }
            ]
          },
          {
            text: 'Windows',
            collapsed: false,
            items: [
              { text: '再頒布可能パッケージをインストール', link: '/ja/install-vcredist' },
              { text: 'インストール済みパッケージを取得', link: '/ja/get-installedvcredist' },
              { text: '再頒布可能パッケージをアンインストール', link: '/ja/uninstall-vcredist' }
            ]
          },
          {
            text: 'Intune',
            collapsed: false,
            items: [
              { text: 'Intune への認証', link: '/ja/intune-setup' },
              { text: '再頒布可能パッケージを Intune にインポート', link: '/ja/import-vcintuneapplication' },
              { text: 'Intune のパッケージを照会', link: '/ja/get-vcintuneapplication' },
              { text: '再頒布可能パッケージを Intune から削除', link: '/ja/remove-vcintuneapplication' }
            ]
          },
          {
            text: 'ConfigMgr',
            collapsed: false,
            items: [
              { text: '再頒布可能パッケージを ConfigMgr にインポート', link: '/ja/import-vcconfigmgrapplication' }
            ]
          },
          {
            text: 'Microsoft Deployment Toolkit',
            collapsed: false,
            items: [
              { text: '再頒布可能パッケージを MDT にインポート', link: '/ja/import-vcmdtapplication' },
              { text: 'MDT でパッケージ バンドルを作成', link: '/ja/new-vcmdtbundle' },
              { text: 'MDT のパッケージを更新', link: '/ja/update-vcmdtapplication' },
              { text: 'MDT のパッケージ バンドルを更新', link: '/ja/update-vcmdtbundle' }
            ]
          },
          {
            text: 'その他',
            collapsed: false,
            items: [
              { text: '再頒布可能パッケージの URI をテスト', link: '/ja/test-vcredisturi' }
            ]
          }
        ]
      }
    }

export default defineConfig({
  srcDir: './docs',
  title: "VcRedist",
  description: "A PowerShell module for lifecycle management of the Microsoft Visual C++ Redistributables.",
  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Un module PowerShell pour gérer le cycle de vie des redistribuables Microsoft Visual C++.',
      themeConfig: localizedThemeConfig.fr
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      description: 'Ein PowerShell-Modul zur Verwaltung des Lebenszyklus der Microsoft Visual C++ Redistributables.',
      themeConfig: localizedThemeConfig.de
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      description: 'Un módulo de PowerShell para gestionar el ciclo de vida de los redistribuibles de Microsoft Visual C++.',
      themeConfig: localizedThemeConfig.es
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      description: 'Microsoft Visual C++ 再頒布可能パッケージのライフサイクルを管理する PowerShell モジュールです。',
      themeConfig: localizedThemeConfig.ja
    }
  },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  lastUpdated: true,
  sitemap: {
    hostname: 'https://vcredist.com/'
  },
  cleanUrls: true,
  // ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/intro' },
      { text: 'PowerShell Gallery', link: 'https://www.powershellgallery.com/packages/VcRedist/' },
      { text: 'Change log', link: '/changelog' }
    ],

    logo: '/img/vcredist.png',
    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/intro' },
          { text: 'Included Redistributables', link: '/versions' },
          { text: 'Supported platforms', link: '/supported' },
          { text: 'Quick install', link: '/quick' },
          { text: 'Installing VcRedist', link: '/install' },
          { text: 'Get the VcRedist list', link: '/get-vclist' },
          { text: 'Download the Redistributables', link: '/save-vcredist' },
          { text: 'Export the Manifest', link: '/export-vcmanifest' },
          { text: 'Known issues', link: '/issues' },
          { text: 'VcRedist versioning', link: '/versioning' }
        ]
      },
      {
        text: 'Windows',
        collapsed: false,
        items: [
          { text: 'Install the Redistributables', link: '/install-vcredist' },
          { text: 'Get the Installed Redistributables', link: '/get-installedvcredist' },
          { text: 'Uninstall the Redistributables', link: '/uninstall-vcredist' }
        ]
      },
      {
        text: 'Intune',
        collapsed: false,
        items: [
          { text: 'Authenticating to Intune', link: '/intune-setup' },
          { text: 'Import Redistributables into Intune', link: '/import-vcintuneapplication' },
          { text: 'Query Intune for Redistributables', link: '/get-vcintuneapplication' },
          { text: 'Remove Redistributables from Intune', link: '/remove-vcintuneapplication' }
        ]
      },
      {
        text: 'ConfigMgr',
        collapsed: false,
        items: [
          { text: 'Import Redistributables into ConfigMgr', link: '/import-vcconfigmgrapplication' }
        ]
      },
      {
        text: 'Microsoft Deployment Toolkit',
        collapsed: false,
        items: [
          { text: 'Import Redistributables into MDT', link: '/import-vcmdtapplication' },
          { text: 'Create a Redistributables bundle in MDT', link: '/new-vcmdtbundle' },
          { text: 'Update Redistributables in MDT', link: '/update-vcmdtapplication' },
          { text: 'Update the Redistributables bundle in MDT', link: '/update-vcmdtbundle' }
        ]
      },
      {
        text: 'Other',
        collapsed: false,
        items: [
          { text: 'Test Redistributable URIs', link: '/test-vcredisturi' }
        ]
      }
    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/eucpilots/vcredist' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/stealthpuppy.com' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/aaronedwardparker/' },
    ],

    footer: {
      message: 'A stealthpuppy project.',
      copyright: 'Copyright &copy; 2026 Aaron Parker.'
    },

    editLink: {
      pattern: 'https://github.com/EUCPilots/vcredist-docs/edit/main/docs/:path'
    }
  }
})
