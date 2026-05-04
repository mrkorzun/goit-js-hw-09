# Сучасний Frontend-Тулінг: Vite, npm-пакети та Web Storage

**🌐 Мова:** [English](./README.md) · **Українська** · [Русский](./README.ru.md)
· [Español](./README.es.md) · [العربية](./README.ar.md)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![SimpleLightbox](https://img.shields.io/badge/SimpleLightbox-2.x-blue?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Web_Storage-LocalStorage-orange?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> Практична демонстрація **сучасного front-end тулінгу**: розгортання проєкту з
> Vite, інтеграція сторонніх пакетів через npm, робота з ES-модулями та
> збереження даних користувача через Web Storage API.

🔗 **Жива демо-версія:**
[mrkorzun.github.io/vite-storage-gallery-lab](https://mrkorzun.github.io/vite-storage-gallery-lab/)

---

## 🎯 Що демонструє цей проєкт

Цей репозиторій виходить за межі простих HTML/JS-файлів і показує впевнену
роботу з **професійним front-end процесом** — тим самим інструментарієм, що
використовується у production-проєктах: build-пайплайн на Vite, керування
залежностями через npm, модульний код на ES Modules та повноцінні фічі зі
станом.

| #   | Міні-застосунок               | Демонстрований навик                                                                       |
| --- | ----------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | Lightbox-галерея зображень    | Інтеграція npm-пакета, конфігурація сторонньої бібліотеки                                  |
| 2   | Автозбережувана форма зв'язку | Персистентність через LocalStorage, керування станом у реальному часі, життєвий цикл форми |

---

## 💡 Навички та компетенції

### 🔹 Build-тулінг — Vite

- Проєкт розгорнуто на **Vite** як dev-сервері та збірнику.
- Hot Module Replacement (HMR) для швидкої ітерації.
- Кастомний `vite.config.js` для шляхів збірки та резолвінгу ассетів.
- Production-збірка оптимізована та задеплоєна на **GitHub Pages**.

### 🔹 npm та керування залежностями

- **npm** використовується для встановлення та керування сторонніми пакетами.
- `package.json` та `package-lock.json` закомічені для відтворюваності
  установки.
- Чітке розмежування `dependencies` (runtime) та `devDependencies` (тулінг).

### 🔹 ES Modules (ESM)

- Модульна структура import/export: кожне завдання — окремий JS-модуль.
- Імпорт CSS та JS напряму з npm-пакетів
  (`import 'simplelightbox/dist/simple-lightbox.min.css'`).
- Чисті entry-points для кожної HTML-сторінки.

### 🔹 Сторонні UI-бібліотеки

- **SimpleLightbox** інтегровано як рушій модалок/lightbox для галереї.
- Бібліотека налаштована з кастомними опціями (затримка підпису, плавні
  переходи).
- Замінює ручні маніпуляції з DOM на перевірений пакет.

### 🔹 Web Storage API (LocalStorage)

- Збереження стану форми у реальному часі під неймспейсним ключем
  (`feedback-form-state`).
- Стратегія запису на події `input`.
- Гідратація форми при завантаженні сторінки — значення переживають
  перезавантаження.
- Очищення при сабміті: сховище звільняється після успішної відправки.
- Захисний парсинг проти відсутніх або пошкоджених записів.

### 🔹 Патерни роботи з формами

- Власна валідація без опори на нативний атрибут `required`.
- Обробник submit з `event.preventDefault()`.
- Структурний збір даних через `form.elements`.
- `form.reset()` у парі з явним очищенням сховища.

### 🔹 Якість коду та робочий процес

- **Prettier** для уніфікованого форматування коду.
- **EditorConfig** для крос-IDE-консистенції (відступи, кодування, переноси).
- **Git** з описовими, атомарними комітами.
- **GitHub Pages** для безперервного деплою production-збірки.

---

## 🧩 Розбір функціональності

### 1. Lightbox-галерея зображень

Галерея, відрефакторена з ручної модальної логіки на чисту реалізацію через
пакет. Замість того щоб писати делегування подій, модальну розмітку та
клавіатурну навігацію вручну, проєкт використовує **SimpleLightbox** —
встановлений як npm-залежність та імпортований через ES Modules.

**Що це демонструє:**

- Уміння читати документацію бібліотеки та правильно застосовувати її API.
- Імпорт як JS, так і CSS з пакета через збірник.
- Конфігурація сторонніх компонентів (кастомна затримка підпису у 250 мс).
- Довіра до перевірених бібліотек замість винайдення UI-примітивів заново.

```js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
```

---

### 2. Автозбережувана форма зв'язку

Форма зворотного зв'язку, яка **ніколи не втрачає введення користувача**. Поки
користувач друкує, кожне натискання клавіші зберігається у LocalStorage; коли
він повертається на сторінку — навіть після повного перезавантаження — його
чернетка відновлюється точно з того місця, де він зупинився.

**Що це демонструє:**

- Реальний UX-патерн (збереження чернеток — стандарт у Gmail, Notion тощо).
- Робота з Web Storage API: `getItem`, `setItem`, `removeItem`,
  JSON-серіалізація.
- Двостороння синхронізація між станом DOM та персистентним сховищем.
- Дисципліна очищення: сховище звільняється при успішному сабміті, щоб наступний
  відвідувач починав з чистої форми.

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

## 🚀 Локальний запуск

Проєкт використовує Vite — потрібен dev-сервер на Node.js.

```bash
git clone https://github.com/mrkorzun/vite-storage-gallery-lab.git
cd vite-storage-gallery-lab
npm install
npm run dev
```

Dev-сервер виведе локальну адресу (зазвичай `http://localhost:5173`).

### Production-збірка

```bash
npm run build       # збирає у ./dist
npm run preview     # піднімає production-збірку локально
```

---

## 📁 Структура проєкту

```
vite-storage-gallery-lab/
├── .github/workflows/      # CI/CD для деплою на GitHub Pages
├── src/
│   ├── css/                # Стилі по завданнях
│   ├── img/                # Статичні зображення
│   ├── js/
│   │   ├── 1-gallery.js    # Логіка lightbox-галереї
│   │   └── 2-form.js       # Логіка форми з LocalStorage
│   ├── 1-gallery.html      # Сторінка галереї
│   ├── 2-form.html         # Сторінка форми
│   └── index.html          # Хаб навігації
├── .editorconfig
├── .prettierrc.json
├── package.json
├── vite.config.js          # Конфігурація Vite
└── README.md
```

---

## 👤 Автор

**Romario Korzun** — Front-End Developer

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- Жива сторінка: [mrkorzun.github.io](https://mrkorzun.github.io)

---

<sub>Початково створено як практична вправа у межах курсу **GoIT JavaScript**
для закріплення досвіду з build-тулінгом, npm-залежностями та Web Storage
API.</sub>
