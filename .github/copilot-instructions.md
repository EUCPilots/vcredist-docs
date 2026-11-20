# Copilot instructions

This repo is the documentation site (https://vcredist.com) for the [VcRedist PowerShell module](https://github.com/eucpilots/vcredist). It is a VitePress site; there is no application code or test suite.

## Commands

- `npm ci` – install dependencies
- `npm run docs:dev` – local dev server
- `npm run docs:build` – production build (output `.vitepress/dist`); this is the CI validation (`validate.yml`) and surfaces dead links
- `npm run docs:preview` – serve the built site
- Markdown lint (CI: `lint.yml`, `markdownlint-cli2` over `docs/**/*.md`): `npx markdownlint-cli2 "docs/**/*.md"`; single file: `npx markdownlint-cli2 docs/get-vclist.md`

## Architecture

- `docs/` is the VitePress `srcDir`; each `.md` is a page (`cleanUrls: true`, so `/get-vclist` not `.html`).
- Navigation is **not** auto-generated: `.vitepress/config.mts` holds the hand-written `nav` and `sidebar`. A new page must be added to the sidebar there, and links use the page name without extension (e.g. `/install-vcredist`).
- Pages are mostly one per VcRedist cmdlet, named in lowercase after the cmdlet (`Get-VcList` → `docs/get-vclist.md`), grouped in the sidebar by target: Getting started, Windows, Intune, ConfigMgr, MDT, Other.
- Static assets live in `docs/public/` (served from site root, e.g. `/images/...`, `/img/vcredist.png`). `docs/public/install.ps1` is the quick-install script published at the site root.
- `docs/changelog.md` tracks module releases. Deploy to GitHub Pages happens on push to `main` (`deploy.yml`, Node 22).

## Conventions

- Markdown lint config (`.markdownlint-cli2.jsonc`): line-length (MD013) and ordered-list-prefix (MD029) rules are off; the only inline HTML element allowed is `<Badge>`.
- Command examples use fenced ```` ```powershell ```` blocks, with `PS C:\>` prompts and sample output shown for cmdlet pages.
- Docs describe the module's behaviour (e.g. `Get-VcList` returns only supported, `14` release by default); verify claims against the module repo rather than inventing parameters.
