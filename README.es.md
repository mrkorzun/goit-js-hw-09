# Tooling Front-End Moderno: Vite, Paquetes npm y Web Storage

**🌐 Idioma:** [English](./README.md) · [Українська](./README.ua.md) ·
[Русский](./README.ru.md) · **Español** · [العربية](./README.ar.md)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![SimpleLightbox](https://img.shields.io/badge/SimpleLightbox-2.x-blue?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Web_Storage-LocalStorage-orange?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> Una demostración práctica del **tooling front-end moderno**: configuración del
> proyecto con Vite, integración de paquetes de terceros vía npm, trabajo con
> módulos ES y persistencia de datos del usuario mediante la Web Storage API.

🔗 **Demo en vivo:**
[mrkorzun.github.io/vite-storage-gallery-lab](https://mrkorzun.github.io/vite-storage-gallery-lab/)

---

## 🎯 Qué demuestra este proyecto

Este repositorio va más allá de archivos HTML/JS sueltos y muestra dominio del
**flujo de trabajo profesional de front-end** — el mismo conjunto de
herramientas usado en proyectos productivos: pipeline de build con Vite, gestión
de dependencias con npm, código modular en ES Modules, y funcionalidades con
estado de cara al usuario.

| #   | Mini-aplicación                  | Habilidad demostrada                                                                          |
| --- | -------------------------------- | --------------------------------------------------------------------------------------------- |
| 1   | Galería de imágenes con Lightbox | Integración de paquetes npm, configuración de librerías de terceros                           |
| 2   | Formulario con auto-guardado     | Persistencia con LocalStorage, gestión de estado en tiempo real, ciclo de vida del formulario |

---

## 💡 Habilidades y competencias

### 🔹 Build Tooling — Vite

- Proyecto configurado con **Vite** como dev server y bundler.
- Hot Module Replacement (HMR) para iteración rápida.
- `vite.config.js` personalizado para rutas de build y resolución de assets.
- Build de producción optimizado y desplegado mediante **GitHub Pages**.

### 🔹 npm y gestión de dependencias

- **npm** para instalar y gestionar paquetes de terceros.
- `package.json` y `package-lock.json` versionados para instalaciones
  reproducibles.
- Separación clara entre `dependencies` (runtime) y `devDependencies` (tooling).

### 🔹 ES Modules (ESM)

- Estructura modular import/export: cada tarea reside en su propio módulo JS.
- Importación directa de CSS y JS desde paquetes npm
  (`import 'simplelightbox/dist/simple-lightbox.min.css'`).
- Entry-points limpios por cada página HTML.

### 🔹 Librerías UI de terceros

- **SimpleLightbox** integrada como motor de modales/lightbox para la galería.
- Librería configurada con opciones personalizadas (delay del caption,
  transiciones suaves).
- Reemplaza la manipulación manual del DOM con un paquete probado en producción.

### 🔹 Web Storage API (LocalStorage)

- Persistencia del estado del formulario en tiempo real bajo una clave con
  namespace (`feedback-form-state`).
- Estrategia de escritura sobre el evento `input`.
- Hidratación del formulario al cargar la página — los valores sobreviven a
  recargas.
- Limpieza al enviar: el storage se vacía tras un envío exitoso.
- Parsing defensivo contra entradas ausentes o malformadas.

### 🔹 Patrones de manejo de formularios

- Validación manual sin depender del atributo nativo `required`.
- Handler de submit con `event.preventDefault()`.
- Construcción estructurada del payload mediante `form.elements`.
- `form.reset()` combinado con limpieza explícita del storage.

### 🔹 Calidad de código y flujo de trabajo

- **Prettier** para un formato consistente en todo el código.
- **EditorConfig** para coherencia entre IDEs (indentación, charset, fin de
  línea).
- **Git** con commits descriptivos y atómicos.
- **GitHub Pages** para despliegue continuo del build de producción.

---

## 🧩 Recorrido por las funcionalidades

### 1. Galería de imágenes con Lightbox

Una galería refactorizada desde una lógica modal manual hacia una implementación
limpia basada en paquete. En lugar de escribir delegación de eventos, markup
modal y navegación por teclado a mano, el proyecto utiliza **SimpleLightbox** —
instalada como dependencia npm e importada vía ES Modules.

**Qué demuestra esto:**

- Capacidad de leer documentación de librerías y aplicar correctamente su API.
- Importación tanto de JS como de CSS desde un paquete a través del bundler.
- Configuración de componentes de terceros (delay de caption personalizado de
  250ms).
- Confianza en librerías probadas en lugar de reinventar primitivas de UI.

```js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
```

---

### 2. Formulario con auto-guardado

Un formulario de feedback que **nunca pierde la entrada del usuario**. Mientras
el usuario escribe, cada pulsación se persiste en LocalStorage; cuando regresa a
la página — incluso después de una recarga completa — su borrador se restaura
exactamente donde lo dejó.

**Qué demuestra esto:**

- Patrón UX del mundo real (persistir borradores es estándar en herramientas
  como Gmail, Notion, etc.).
- Trabajo con la Web Storage API: `getItem`, `setItem`, `removeItem`,
  serialización JSON.
- Sincronización bidireccional entre el estado del DOM y el almacenamiento
  persistente.
- Disciplina de limpieza: el storage se vacía tras un envío exitoso para que el
  siguiente visitante empiece con un formulario limpio.

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

## 🚀 Ejecución local

El proyecto usa Vite — se requiere un dev server basado en Node.js.

```bash
git clone https://github.com/mrkorzun/vite-storage-gallery-lab.git
cd vite-storage-gallery-lab
npm install
npm run dev
```

El dev server imprimirá una URL local (normalmente `http://localhost:5173`).

### Build de producción

```bash
npm run build       # genera ./dist
npm run preview     # sirve el build de producción localmente
```

---

## 📁 Estructura del proyecto

```
vite-storage-gallery-lab/
├── .github/workflows/      # CI/CD para despliegue en GitHub Pages
├── src/
│   ├── css/                # Estilos por tarea
│   ├── img/                # Imágenes estáticas
│   ├── js/
│   │   ├── 1-gallery.js    # Lógica de la galería con lightbox
│   │   └── 2-form.js       # Lógica del formulario con LocalStorage
│   ├── 1-gallery.html      # Página de la galería
│   ├── 2-form.html         # Página del formulario
│   └── index.html          # Hub de navegación
├── .editorconfig
├── .prettierrc.json
├── package.json
├── vite.config.js          # Configuración de Vite
└── README.md
```

---

## 👤 Autor

**Romario Korzun** — Front-End Developer

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- Página personal: [mrkorzun.github.io](https://mrkorzun.github.io)

---

<sub>Originalmente creado como ejercicio práctico dentro del curso **GoIT
JavaScript** para consolidar la experiencia con build tooling, gestión de
dependencias npm y la Web Storage API.</sub>
