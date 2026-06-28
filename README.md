<div align="center">

# 🌟 Venu Gopal — Developer Portfolio

A fast, accessible, fully-typed portfolio built with **React 18 + TypeScript**, featuring a clean DTO-driven data layer, live GitHub project sync, and a dark/light themed UI.

[![Live Demo](https://img.shields.io/badge/Live_Demo-000000?style=for-the-badge&logo=firefoxbrowser&logoColor=white)](https://venupagadala.github.io/my-website/)
[![GitHub](https://img.shields.io/badge/Source-121011?style=for-the-badge&logo=github&logoColor=white)](https://github.com/venupagadala/my-website)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/venu-pagadala-77ab3a251/)
[![License: MIT](https://img.shields.io/badge/License-MIT-5000ca?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Highlights

- **Strictly typed** — end-to-end TypeScript with a DTO → mapper → model data layer, runtime type guards at every API boundary
- **Performance first** — code-splitting, lazy routes, WebP imagery (676 KB → 97 KB), explicit dimensions for zero CLS
- **Accessible** — WCAG-minded contrast, 44×44 touch targets, ARIA roles, skip links, reduced-motion support
- **Live GitHub feed** — projects auto-pull from the GitHub API, validated and normalized before render
- **Theming** — cohesive dark/light mode across every section

## 🛠️ Tech Stack

| Layer | Tools |
|-------|-------|
| **UI** | ![React](https://img.shields.io/badge/React_18-20232a?logo=react&logoColor=61DAFB) ![TS](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white) ![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white) ![Framer](https://img.shields.io/badge/Framer_Motion-000?logo=framer) |
| **Backend** | ![Node](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-404d59?logo=express) ![Render](https://img.shields.io/badge/Render-46E3B7?logo=render&logoColor=white) |
| **Tooling** | ![CRA](https://img.shields.io/badge/CRA-09D3AC?logo=createreactapp&logoColor=white) ![gh-pages](https://img.shields.io/badge/gh--pages-222?logo=github) ![Copilot](https://img.shields.io/badge/GitHub_Copilot-000?logo=githubcopilot) |

## 🧱 Architecture

A layered, dependency-down design — UI never touches raw API shapes.

```mermaid
flowchart TD
    UI["🖥️ Components<br/>Project · Contact · Timeline"]
    HK["🪝 Hooks<br/>useProjects · useContactForm"]
    SV["⚙️ Services<br/>github · contact"]
    MP["🔁 Mappers<br/>DTO → Model"]
    GD["🛡️ Guards<br/>runtime validation"]
    DT["📦 DTOs / Models"]

    UI --> HK --> SV
    SV --> GD --> MP --> DT
    UI -. consumes .-> DT
```

**Request flow:** `fetch → guard-validate → map → domain model → hook → component`. Each step is isolated, testable, and typed.

## 📁 Structure

```
src/
├── api/dto/        # Raw API contracts
├── api/guards/     # Runtime type validation
├── types/          # UI domain models
├── mappers/        # DTO → model transforms
├── services/       # fetch + validate + map
├── hooks/          # React lifecycle only
├── components/     # Presentation
└── assets/styles/  # SCSS + theming
```

## � Getting Started

```bash
git clone https://github.com/venupagadala/my-website.git
cd my-website && npm install
npm start        # dev server at localhost:3000
npm run build    # production bundle
npm run deploy   # publish to GitHub Pages
```

## � Deployment

Frontend ships to **GitHub Pages** via `gh-pages`; the contact API runs on **Render**. Merge to `main`, then `npm run deploy`.

## 📄 License

MIT © Venu Gopal
