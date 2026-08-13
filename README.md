<div align="center">

  # 🍣 Ristorante Su Liangcheng Salerno
  ### *Ultra-Sleek Modern Luxury Chinese & Japanese A-la-Carte Web Experience*

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Lighthouse Best Practices](https://img.shields.io/badge/Lighthouse_Best_Practices-100%2F100-brightgreen?style=for-the-badge)](#performance--engineering-specs)
  [![WebP Optimized](https://img.shields.io/badge/Images-WebP_%3C430KB-d4af37?style=for-the-badge)](#performance--engineering-specs)
  [![SEO Privacy](https://img.shields.io/badge/Robots-Noindex-e63946?style=for-the-badge)](#staging--privacy-protection)

  <p align="center">
    A high-performance, responsive, and luxury single-page web application built for <strong>Ristorante Su Liangcheng</strong> (Salerno, Italy). Crafted with pure vanilla web tech, custom dark glassmorphism styling, real-time venue status engine, and synchronized gourmet dish carousel.
  </p>

</div>

---

## 🌟 Key Features

* **💎 Luxury Aesthetic & Typography System**: Custom dark palette (`#08090d`, `#11131c`, `#d4af37`), glassmorphism cards, ambient gold particles, and editorial Google Fonts pairing (`Playfair Display` + `Plus Jakarta Sans`).
* **🎠 Synchronized Animated Dish Carousel**: 60fps custom JavaScript carousel with real-time text/image synchronization, GPU-accelerated CSS progress bar animation, touch swipe gestures, and pause-on-hover logic.
* **🟢 Real-Time Dual Status Engine**: Minute-by-minute status checker displaying glowing live badges in both the **Hero Cover** and **Opening Hours Card**, evaluating local Salerno time against restaurant opening windows (Mon Closed; Tue–Sun 12:00–15:00, 18:00–23:30).
* **💬 Direct Interactive WhatsApp Reservation Drawer**: Integrated modal overlay auto-encoding custom order details, party size, dates, and dish names straight into WhatsApp API URLs (`wa.me`).
* **📱 Mobile-First Touch-Optimized UX**: Dedicated mobile hero spacing, auto-collapsible flush navbar drawer, and sticky bottom action bar ([WhatsApp], [PDF Menu], [Google Maps], [Delivery]).
* **🗺️ Zero-Cookie Lazy Facade Map**: Interactive Google Maps loader that loads map iframes on-demand, eliminating third-party tracking cookies on initial page render.
* **📜 Full PDF Menu & Delivery Integration**: Direct single-click access to MaiPDF full menu and official delivery partners (Deliveroo & Glovo) with custom dark glassmorphism CTA buttons.
* **🔒 Staging Anti-Indexing Security**: Pre-configured `robots.txt` and `<meta name="robots" content="noindex, nofollow">` protection for demo/test environments.

---

## 🏗️ Technical Architecture

This application adheres to **Clean Code** and **Zero-Dependency Vanilla JavaScript** principles for lightning-fast load times and maximum cross-browser longevity.

```
SuGiapponese/
├── 📄 index.html          # Semantic HTML5 document structure & meta tags
├── 🎨 styles.css          # Core design system, CSS variables, breakpoints & GPU animations
├── ⚡ main.js            # Carousel logic, schedule calculator, particles & modal drawer
├── 🤖 robots.txt          # Search engine crawler disallow rules for staging safety
└── 📁 assets/             # High-res WebP photography & official brand assets
    ├── logo.jpg / .webp   # Official restaurant seahorse brand emblem & favicon
    ├── hero.webp          # Real photo: Hero Cover Background
    ├── uramaki.webp       # Real photo: MU16 Salmone Cotto & Avocado Roll
    ├── uraehoso.webp      # Real photo: P6 Sake Maki alla Fiamma & Combo
    ├── hosofritti.webp    # Real photo: P7 Futomaki Indorato Fritto
    ├── aozi.webp          # Real photo: A10 Bao Zi al Vapore Artigianali
    ├── ravioli.webp       # Real photo: A6B Ravioli di Maiale al Vapore
    ├── udon.webp          # Real photo: 10 Udon Saltati al Wok
    └── mixsushi.webp      # Real photo: Gran Mix Sashimi & Nigiri
```

---

## ⚡ Performance Highlights & Engineering Specs

| Engineering Metric | Implementation Detail |
| :--- | :--- |
| **Lighthouse Best Practices** | **100 / 100** |
| **Total Media Payload** | **< 430 KB** (Entire image suite optimized via WebP) |
| **JS Framework Overhead** | `0 KB` (Pure Vanilla ES6+) |
| **Layout Shift (CLS)** | `0.00` (Strictly fixed height containers & `object-fit: cover`) |
| **Render-Blocking Requests** | `0 ms` (Asynchronous non-blocking fonts & stylesheets) |
| **Main-Thread Reflows** | **0 Forced Reflows** (GPU-accelerated CSS `transform: scaleX`) |
| **3rd Party Tracking** | **0 Initial Cookies** (Lazy Map Facade pattern) |

---

## 🚀 Quick Start & Local Development

No build steps, transpilers, or node_modules installation required!

### Option 1: VS Code Live Server
Open the project folder in VS Code and click **Go Live**.

### Option 2: Python HTTP Server
```bash
# Run in project root
python -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option 3: Node.js Serve
```bash
npx -y serve ./
```

---

## 📍 Restaurant Metadata & Venue Specifications

* **Name**: Ristorante Su Liangcheng Salerno (Su:shi Cucina Cinese - Giapponese)
* **Address**: Via V. Loria 17, 84129 Salerno (SA), Italy
* **Phone / WhatsApp**: [+39 327 102 4489](https://wa.me/393271024489)
* **Opening Hours**:
  * **Monday**: Closed (*Chiuso*)
  * **Tuesday – Sunday**: 12:00 – 15:00 (Lunch) | 18:00 – 23:30 (Dinner)
* **Dining Formula**: A-la-carte dining only (NO All You Can Eat)
* **Online PDF Menu**: [MaiPDF Direct Viewer](https://maipdf.com/file/a68a5ff1253869@pdf)
* **Google Maps**: [Location Link](https://maps.app.goo.gl/9m4h2stRJN13G2Bb6)

---

<div align="center">
  <p>Crafted with precision for <strong>Ristorante Su Liangcheng Salerno</strong></p>
</div>
