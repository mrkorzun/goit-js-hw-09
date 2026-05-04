# Modern Frontend Tooling: Vite, npm Packages & Web Storage

**🌐 Language:** **English** · [Українська](./README.ua.md) ·
[Русский](./README.ru.md) · [Español](./README.es.md) ·
[العربية](./README.ar.md)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![SimpleLightbox](https://img.shields.io/badge/SimpleLightbox-2.x-blue?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Web_Storage-LocalStorage-orange?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> A practical demonstration of **modern front-end tooling**: project scaffolding
> with Vite, integrating third-party packages via npm, working with ES Modules,
> and persisting user data through the Web Storage API.

🔗 **Live demo:**
[mrkorzun.github.io/vite-storage-gallery-lab](https://mrkorzun.github.io/vite-storage-gallery-lab/)

---

## 🎯 What This Project Demonstrates

This repository moves beyond plain HTML/JS files and shows competence with the
**professional front-end workflow** — the same toolchain used in production
projects: a Vite-powered build pipeline, npm dependency management, modular ES
code, and stateful user-facing features.

| #   | Mini-App                  | Skill Demonstrated                                                   |
| --- | ------------------------- | -------------------------------------------------------------------- |
| 1   | Lightbox Image Gallery    | npm package integration, third-party library configuration           |
| 2   | Auto-Saving Feedback Form | LocalStorage persistence, real-time state management, form lifecycle |

---

## 💡 Skills & Competencies

### 🔹 Build Tooling — Vite

- Project scaffolded with **Vite** as a dev server and bundler.
- Hot Module Replacement (HMR) for rapid iteration.
- Custom `vite.config.js` for build paths and asset resolution.
- Production build optimized and deployed via **GitHub Pages**.

### 🔹 npm & Dependency Management

- **npm** used to install and manage third-party packages.
- `package.json` and `package-lock.json` committed for reproducible installs.
- Clear separation between `dependencies` (runtime) and `devDependencies`
  (tooling).

### 🔹 ES Modules (ESM)

- Modular import/export structure: each task lives in its own JS module.
- Importing CSS and JS directly from npm packages
  (`import 'simplelightbox/dist/simple-lightbox.min.css'`).
- Clean entry points per HTML page.

### 🔹 Third-Party UI Libraries

- **SimpleLightbox** integrated as the modal/lightbox engine for the gallery.
- Library configured with custom options (caption delay, smooth transitions).
- Replaces hand-rolled DOM manipulation with a battle-tested package.

### 🔹 Web Storage API (LocalStorage)

- Real-time form state persistence under a namespaced key
  (`feedback-form-state`).
- Throttled-style write strategy on the `input` event.
- Hydration of the form on page load — values survive page reloads.
- Cleanup on submit: storage cleared after successful submission.
- Defensive parsing against missing or malformed entries.

### 🔹 Form Handling Patterns

- Manual validation without relying on native `required`.
- Submit handler with `event.preventDefault()`.
- Structured payload assembly via `form.elements`.
- `form.reset()` paired with explicit storage cleanup.

### 🔹 Code Quality & Workflow

- **Prettier** for consistent formatting across the codebase.
- **EditorConfig** for cross-IDE consistency (indentation, charset, line
  endings).
- **Git** with descriptive, atomic commits.
- **GitHub Pages** for continuous deployment of the production build.

---

## 🧩 Feature Walkthrough

### 1. Lightbox Image Gallery

A gallery refactored from manual modal logic to a clean, package-driven
implementation. Instead of writing event delegation, modal markup, and keyboard
navigation by hand, the project leverages **SimpleLightbox** — installed as an
npm dependency and imported via ES Modules.

**What this demonstrates:**

- Reading library documentation and applying its API correctly.
- Importing both JS and CSS from a package via the bundler.
- Configuring third-party components (custom caption delay of 250ms).
- Trusting well-tested libraries instead of reinventing UI primitives.

```js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
```

---

### 2. Auto-Saving Feedback Form

A feedback form that **never loses user input**. As the user types, every
keystroke is persisted to LocalStorage; when they return to the page — even
after a full reload — their draft is restored exactly where they left off.

**What this demonstrates:**

- Real-world UX pattern (draft persistence is standard in tools like Gmail,
  Notion, etc.).
- Working with the Web Storage API: `getItem`, `setItem`, `removeItem`, JSON
  serialization.
- Two-way binding between DOM state and persistent storage.
- Cleanup discipline: storage is cleared on successful submit so the next
  visitor starts fresh.

```js
const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {};
});
```

---

## 🚀 Running Locally

This project uses Vite — a Node.js-based dev server is required.

```bash
git clone https://github.com/mrkorzun/vite-storage-gallery-lab.git
cd vite-storage-gallery-lab
npm install
npm run dev
```

The dev server will print a local URL (usually `http://localhost:5173`).

### Production build

```bash
npm run build       # builds into ./dist
npm run preview     # serves the production build locally
```

---

## 📁 Project Structure

```
vite-storage-gallery-lab/
├── .github/workflows/      # CI/CD for GitHub Pages deployment
├── src/
│   ├── css/                # Per-task styles
│   ├── img/                # Static images
│   ├── js/
│   │   ├── 1-gallery.js    # Lightbox gallery logic
│   │   └── 2-form.js       # LocalStorage form logic
│   ├── 1-gallery.html      # Gallery page
│   ├── 2-form.html         # Form page
│   └── index.html          # Navigation hub
├── .editorconfig
├── .prettierrc.json
├── package.json
├── vite.config.js          # Vite configuration
└── README.md
```

---

## 👤 Author

**Romario Korzun** — Front-End Developer

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- Portfolio: [mrkorzun.github.io](https://mrkorzun.github.io)

---

<sub>Originally built as a practical exercise within the **GoIT JavaScript**
curriculum to consolidate experience with build tooling, npm-based dependency
management, and the Web Storage API.</sub>
