<div dir="rtl">

# أدوات الواجهة الأمامية الحديثة: Vite وحزم npm وWeb Storage

**🌐 اللغة:** [English](./README.md) · [Українська](./README.ua.md) ·
[Русский](./README.ru.md) · [Español](./README.es.md) · **العربية**

![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![SimpleLightbox](https://img.shields.io/badge/SimpleLightbox-2.x-blue?style=flat-square)
![LocalStorage](https://img.shields.io/badge/Web_Storage-LocalStorage-orange?style=flat-square)
![Prettier](https://img.shields.io/badge/Prettier-formatted-F7B93E?style=flat-square&logo=prettier&logoColor=black)

> عرض عملي **لأدوات الواجهة الأمامية الحديثة**: تهيئة المشروع باستخدام Vite،
> ودمج حزم خارجية عبر npm، والعمل مع وحدات ES، والاحتفاظ ببيانات المستخدم من
> خلال واجهة Web Storage API.

🔗 **العرض المباشر:**
[mrkorzun.github.io/vite-storage-gallery-lab](https://mrkorzun.github.io/vite-storage-gallery-lab/)

---

## 🎯 ما الذي يُظهره هذا المشروع

يتجاوز هذا المستودع ملفات HTML/JS البسيطة ويُظهر إتقان **سير العمل الاحترافي
للواجهة الأمامية** — نفس مجموعة الأدوات المستخدمة في مشاريع الإنتاج: خط بناء
قائم على Vite، إدارة الاعتماديات عبر npm، كود معياري بـ ES Modules، وميزات
حقيقية ذات حالة موجّهة للمستخدم.

| #   | التطبيق المصغّر         | المهارة الموضّحة                                                                     |
| --- | ----------------------- | ------------------------------------------------------------------------------------ |
| 1   | معرض صور Lightbox       | دمج حزم npm وضبط مكتبة خارجية                                                        |
| 2   | نموذج تواصل بحفظ تلقائي | الاحتفاظ بالبيانات عبر LocalStorage، إدارة الحالة في الوقت الفعلي، دورة حياة النموذج |

---

## 💡 المهارات والكفاءات

### 🔹 أدوات البناء — Vite

- تم بناء المشروع باستخدام **Vite** كخادم تطوير ومُحزّم.
- استبدال الوحدات الفوري (HMR) لتسريع التكرار.
- ملف `vite.config.js` مخصّص لمسارات البناء وحلّ الأصول.
- بناء الإنتاج مُحسَّن ومنشور عبر **GitHub Pages**.

### 🔹 npm وإدارة الاعتماديات

- استخدام **npm** لتثبيت وإدارة الحزم الخارجية.
- إدراج `package.json` و`package-lock.json` ضمن المستودع لضمان قابلية إعادة
  التثبيت.
- فصل واضح بين `dependencies` (وقت التشغيل) و`devDependencies` (الأدوات).

### 🔹 وحدات ES (ESM)

- بنية معيارية لـ import/export: كل مهمة في وحدة JS مستقلة.
- استيراد CSS وJS مباشرةً من حزم npm
  (`import 'simplelightbox/dist/simple-lightbox.min.css'`).
- نقاط دخول نظيفة لكل صفحة HTML.

### 🔹 مكتبات واجهة طرف ثالث

- دمج **SimpleLightbox** كمحرّك للنوافذ المنبثقة/Lightbox في المعرض.
- ضبط المكتبة بخيارات مخصّصة (تأخير التسمية، انتقالات سلسة).
- استبدال التعامل اليدوي مع DOM بحزمة مُختبَرة.

### 🔹 Web Storage API (LocalStorage)

- الاحتفاظ بحالة النموذج في الوقت الفعلي تحت مفتاح بمساحة أسماء
  (`feedback-form-state`).
- استراتيجية كتابة عند حدث `input`.
- استرجاع بيانات النموذج عند تحميل الصفحة — تبقى القيم بعد إعادة التحميل.
- تنظيف عند الإرسال: يُفرَّغ التخزين بعد إرسال ناجح.
- تحليل دفاعي ضد المدخلات المفقودة أو التالفة.

### 🔹 أنماط التعامل مع النماذج

- منطق تحقّق يدوي دون الاعتماد على السمة `required`.
- معالج إرسال مع `event.preventDefault()`.
- بناء حمولة بيانات مُهيكلة عبر `form.elements`.
- استخدام `form.reset()` مع تنظيف صريح للتخزين.

### 🔹 جودة الكود وسير العمل

- **Prettier** لتنسيق متّسق عبر المشروع.
- **EditorConfig** للتوافق بين بيئات التطوير المختلفة (المسافات، الترميز، نهايات
  الأسطر).
- **Git** بكوميتات وصفية وذرّية.
- **GitHub Pages** للنشر المستمر لبناء الإنتاج.

---

## 🧩 استعراض الوظائف

### 1. معرض صور Lightbox

معرض أُعيد تصميمه من منطق نوافذ منبثقة يدوي إلى تنفيذ نظيف معتمد على حزمة. بدلاً
من كتابة تفويض الأحداث وبنية النوافذ المنبثقة والتنقّل بلوحة المفاتيح يدوياً،
يستخدم المشروع **SimpleLightbox** — مُثبَّتة كاعتمادية npm ومستوردة عبر وحدات
ES.

**ما يُظهره ذلك:**

- القدرة على قراءة وثائق المكتبات وتطبيق واجهتها البرمجية بشكل صحيح.
- استيراد كل من JS وCSS من الحزمة عبر المُحزّم.
- ضبط مكوّنات خارجية (تأخير تسمية مخصّص بـ 250 مللي ثانية).
- الثقة بالمكتبات المُختبَرة بدلاً من إعادة اختراع عناصر الواجهة.

```js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
```

---

### 2. نموذج تواصل بحفظ تلقائي

نموذج تواصل **لا يفقد إدخال المستخدم أبداً**. أثناء كتابة المستخدم، يُحفَظ كل
ضغط مفتاح في LocalStorage؛ وعند عودته إلى الصفحة — حتى بعد إعادة تحميل كاملة —
تُسترجَع مسوَّدته تماماً من حيث توقّف.

**ما يُظهره ذلك:**

- نمط تجربة مستخدم واقعي (حفظ المسوّدات معيار في أدوات مثل Gmail وNotion).
- العمل مع Web Storage API: `getItem` و`setItem` و`removeItem` وتسلسل JSON.
- مزامنة ثنائية بين حالة DOM والتخزين الدائم.
- انضباط في التنظيف: يُفرَّغ التخزين بعد إرسال ناجح حتى يبدأ الزائر التالي
  بنموذج نظيف.

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

## 🚀 التشغيل محلياً

يستخدم المشروع Vite — يلزم خادم تطوير مبني على Node.js.

```bash
git clone https://github.com/mrkorzun/vite-storage-gallery-lab.git
cd vite-storage-gallery-lab
npm install
npm run dev
```

سيطبع خادم التطوير عنواناً محلياً (عادةً `http://localhost:5173`).

### بناء الإنتاج

```bash
npm run build       # يبني إلى ./dist
npm run preview     # يُشغّل بناء الإنتاج محلياً
```

---

## 📁 بنية المشروع

```
vite-storage-gallery-lab/
├── .github/workflows/      # CI/CD لنشر GitHub Pages
├── src/
│   ├── css/                # أنماط لكل مهمة
│   ├── img/                # صور ثابتة
│   ├── js/
│   │   ├── 1-gallery.js    # منطق معرض Lightbox
│   │   └── 2-form.js       # منطق النموذج مع LocalStorage
│   ├── 1-gallery.html      # صفحة المعرض
│   ├── 2-form.html         # صفحة النموذج
│   └── index.html          # مركز التنقل
├── .editorconfig
├── .prettierrc.json
├── package.json
├── vite.config.js          # إعدادات Vite
└── README.md
```

---

## 👤 المؤلف

**Romario Korzun** — مطوّر واجهات أمامية

- GitHub: [@mrkorzun](https://github.com/mrkorzun)
- الصفحة الشخصية: [mrkorzun.github.io](https://mrkorzun.github.io)

---

<sub>أُنشئ في الأصل كتمرين عملي ضمن منهج **GoIT JavaScript** لترسيخ الخبرة
بأدوات البناء وإدارة اعتماديات npm وواجهة Web Storage API.</sub>

</div>
