import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './docs',
  title: "VcRedist",
  description: "A PowerShell module for lifecycle management of the Microsoft Visual C++ Redistributables.",
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
      { text: 'Introduction', link: '/intro' },
      { text: 'Getting started', link: '/install' },
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
