# Современный Frontend-Тулинг: Vite, npm-пакеты и Web Storage

**🌐 Язык:** [English](./README.md) · [Українська](./README.ua.md) · **Русский**
· [Español](./README.es.md) · [العربية](./README.ar.md)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![SimpleLightbox](https://img.shields.io/badge/SimpleLightbox-2.x-blue?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Web_Storage-LocalStorage-orange?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> Практическая демонстрация **современного front-end тулинга**: развёртывание
> проекта на Vite, интеграция сторонних пакетов через npm, работа с ES-модулями
> и сохранение пользовательских данных через Web Storage API.

🔗 **Живая демо-версия:**
[mrkorzun.github.io/vite-storage-gallery-lab](https://mrkorzun.github.io/vite-storage-gallery-lab/)

---

## 🎯 Что демонстрирует этот проект

Этот репозиторий выходит за рамки простых HTML/JS-файлов и показывает уверенную
работу с **профессиональным front-end процессом** — тем же инструментарием, что
используется в production-проектах: build-пайплайн на Vite, управление
зависимостями через npm, модульный код на ES Modules и полноценные фичи с
состоянием.

| #   | Мини-приложение                        | Демонстрируемый навык                                                                              |
| --- | -------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1   | Lightbox-галерея изображений           | Интеграция npm-пакета, конфигурация сторонней библиотеки                                           |
| 2   | Автосохраняющаяся форма обратной связи | Персистентность через LocalStorage, управление состоянием в реальном времени, жизненный цикл формы |

---

## 💡 Навыки и компетенции

### 🔹 Build-тулинг — Vite

- Проект развёрнут на **Vite** как dev-сервере и сборщике.
- Hot Module Replacement (HMR) для быстрой итерации.
- Кастомный `vite.config.js` для путей сборки и резолвинга ассетов.
- Production-сборка оптимизирована и задеплоена на **GitHub Pages**.

### 🔹 npm и управление зависимостями

- **npm** используется для установки и управления сторонними пакетами.
- `package.json` и `package-lock.json` закоммичены для воспроизводимости
  установки.
- Чёткое разделение `dependencies` (runtime) и `devDependencies` (тулинг).

### 🔹 ES Modules (ESM)

- Модульная структура import/export: каждое задание — отдельный JS-модуль.
- Импорт CSS и JS напрямую из npm-пакетов
  (`import 'simplelightbox/dist/simple-lightbox.min.css'`).
- Чистые entry-points для каждой HTML-страницы.

### 🔹 Сторонние UI-библиотеки

- **SimpleLightbox** интегрирована как движок модалок/lightbox для галереи.
- Библиотека настроена с кастомными опциями (задержка подписи, плавные
  переходы).
- Заменяет ручные манипуляции с DOM на проверенный пакет.

### 🔹 Web Storage API (LocalStorage)

- Сохранение состояния формы в реальном времени под неймспейсным ключом
  (`feedback-form-state`).
- Стратегия записи на событии `input`.
- Гидратация формы при загрузке страницы — значения переживают перезагрузку.
- Очистка при сабмите: хранилище освобождается после успешной отправки.
- Защитный парсинг от отсутствующих или повреждённых записей.

### 🔹 Паттерны работы с формами

- Собственная валидация без опоры на нативный атрибут `required`.
- Обработчик submit с `event.preventDefault()`.
- Структурный сбор данных через `form.elements`.
- `form.reset()` в паре с явной очисткой хранилища.

### 🔹 Качество кода и рабочий процесс

- **Prettier** для единого форматирования кода.
- **EditorConfig** для кросс-IDE-консистентности (отступы, кодировка, переносы).
- **Git** с описательными, атомарными коммитами.
- **GitHub Pages** для непрерывного деплоя production-сборки.

---

## 🧩 Разбор функциональности

### 1. Lightbox-галерея изображений

Галерея, отрефакторенная с ручной модальной логики на чистую реализацию через
пакет. Вместо того чтобы писать делегирование событий, модальную разметку и
клавиатурную навигацию вручную, проект использует **SimpleLightbox** —
установленный как npm-зависимость и импортированный через ES Modules.

**Что это демонстрирует:**

- Умение читать документацию библиотеки и правильно применять её API.
- Импорт как JS, так и CSS из пакета через сборщик.
- Конфигурацию сторонних компонентов (кастомная задержка подписи 250 мс).
- Доверие к проверенным библиотекам вместо переизобретения UI-примитивов.

```js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
```

---

### 2. Автосохраняющаяся форма обратной связи

Форма обратной связи, которая **никогда не теряет ввод пользователя**. Пока
пользователь печатает, каждое нажатие клавиши сохраняется в LocalStorage; когда
он возвращается на страницу — даже после полной перезагрузки — его черновик
восстанавливается точно с того места, где он остановился.

**Что это демонстрирует:**

- Реальный UX-паттерн (сохранение черновиков — стандарт в Gmail, Notion и т.п.).
- Работу с Web Storage API: `getItem`, `setItem`, `removeItem`,
  JSON-сериализация.
- Двустороннюю синхронизацию между состоянием DOM и персистентным хранилищем.
- Дисциплину очистки: хранилище освобождается при успешном сабмите, чтобы
  следующий посетитель начинал с чистой формы.

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

## 🚀 Локальный запуск

Проект использует Vite — нужен dev-сервер на Node.js.

```bash
git clone https://github.com/mrkorzun/vite-storage-gallery-lab.git
cd vite-storage-gallery-lab
npm install
npm run dev
```

Dev-сервер выведет локальный адрес (обычно `http://localhost:5173`).

### Production-сборка

```bash
npm run build       # собирает в ./dist
npm run preview     # поднимает production-сборку локально
```

---

## 📁 Структура проекта

```
vite-storage-gallery-lab/
├── .github/workflows/      # CI/CD для деплоя на GitHub Pages
├── src/
│   ├── css/                # Стили по заданиям
│   ├── img/                # Статические изображения
│   ├── js/
│   │   ├── 1-gallery.js    # Логика lightbox-галереи
│   │   └── 2-form.js       # Логика формы с LocalStorage
│   ├── 1-gallery.html      # Страница галереи
│   ├── 2-form.html         # Страница формы
│   └── index.html          # Хаб навигации
├── .editorconfig
├── .prettierrc.json
├── package.json
├── vite.config.js          # Конфигурация Vite
└── README.md
```

---

## 👤 Автор

**Romario Korzun** — Front-End Developer

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- Живая страница: [mrkorzun.github.io](https://mrkorzun.github.io)

---

<sub>Изначально создано как практическое упражнение в рамках курса **GoIT
JavaScript** для закрепления опыта работы с build-тулингом, npm-зависимостями и
Web Storage API.</sub>
