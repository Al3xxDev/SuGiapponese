/* ==========================================================================
   MAIN JAVASCRIPT - Ristorante Su Liangcheng Salerno (Optimized Performance)
   ========================================================================== */

// Dish Slides Data using Optimized WebP Restaurant Photography
const DISH_SLIDES = [
  {
    code: "Cod. MU16",
    tag: "Maki Cotto",
    title: "Salmone Cotto & Avocado Roll",
    price: "€ 7,50",
    image: "assets/uramaki.webp",
    description: "Uramaki cotto con salmone al vapore, avocado cremoso, maionese morbida e guarnizione di dorata cipolla croccante.",
    features: [
      "8 Pezzi (Maki Cotto)",
      "Pesce cotto di primissima scelta",
      "Cipolla fritta croccante"
    ]
  },
  {
    code: "Cod. P6",
    tag: "Specialità Gourmet",
    title: "Sake Maki alla Fiamma & Combo",
    price: "€ 8,00",
    image: "assets/uraehoso.webp",
    description: "Uramaki con salmone scottato alla fiamma viva e ciuffi di philadelphia, servito insieme a tradizionali hosomaki al salmone fresco.",
    features: [
      "Salmone scottato alla fiamma",
      "Inclusi hosomaki al salmone",
      "Salsa teriyaki e philadelphia"
    ]
  },
  {
    code: "Cod. P7",
    tag: "Croccante Fritto",
    title: "Futomaki Indorato Fritto",
    price: "€ 8,00",
    image: "assets/hosofritti.webp",
    description: "Roll fritto all'esterno croccante con granchio, avocado, salmone e speciale salsa maionese dello chef.",
    features: [
      "Esterno croccante dorato",
      "Ricca maionese dello chef",
      "Servito caldo d'asporto o al tavolo"
    ]
  },
  {
    code: "Cod. A10",
    tag: "Tradizione Cinese",
    title: "Bao Zi al Vapore Artigianali",
    price: "€ 2,50",
    image: "assets/aozi.webp",
    description: "Sofficissimi panini orientali lavorati a mano e cotti al vapore con delizioso ripieno di carne di maiale speziata.",
    features: [
      "Lavorati interamente a mano",
      "Soffice impasto al vapore",
      "Ripieno di maiale speziato"
    ]
  },
  {
    code: "Cod. A6B",
    tag: "Dim Sum Fatto in Casa",
    title: "Ravioli di Maiale al Vapore",
    price: "€ 3,00",
    image: "assets/ravioli.webp",
    description: "Delicati ravioli tradizionali orientali con ripieno di carne di maiale selezionata e verdure fresche croccanti.",
    features: [
      "4 Pezzi abbondanti",
      "Pasta sottile fatta in casa",
      "Cottura al vapore al momento"
    ]
  },
  {
    code: "Cod. 10",
    tag: "Primi Cinesi",
    title: "Udon Saltati al Wok",
    price: "€ 6,00",
    image: "assets/udon.webp",
    description: "Spessi e morbidi tagliolini di grano tenero saltati al wok ad altissima temperatura con uova e verdure fresche di stagione.",
    features: [
      "Tagliolini di grano tenero Udon",
      "Saltati a fiamma viva nel wok",
      "Ricchi di verdure e uova"
    ]
  },
  {
    code: "Gran Mix",
    tag: "Sashimi & Nigiri",
    title: "Gran Mix Sashimi & Nigiri",
    price: "Selezione",
    image: "assets/mixsushi.webp",
    description: "Fette di sashimi di salmone freschissimo tagliate al momento, nigiri fatti a mano e maki ricoperti di croccante tempura kataifi.",
    features: [
      "Salmone di prima scelta super fresco",
      "Nigiri modellati a mano",
      "Speciale guarnizione kataifi"
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initOpeningStatus();
  initHeroParticles();
  initDishCarousel();
  initLazyMap();
  initWhatsAppModal();
});

/* ==========================================================================
   1. NAVBAR (ZERO FORCED REFLOW)
   ========================================================================== */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.pageYOffset > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.className = navMenu.classList.contains('active') 
          ? 'ri-close-line' 
          : 'ri-menu-3-line';
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      if (mobileToggle) {
        const icon = mobileToggle.querySelector('i');
        if (icon) icon.className = 'ri-menu-3-line';
      }
    });
  });
}

/* ==========================================================================
   2. REAL-TIME OPENING STATUS WIDGET (UPDATES BOTH HERO & INFO CARDS)
   ========================================================================== */
function initOpeningStatus() {
  const statusElement = document.getElementById('opening-status');
  const heroStatusElement = document.getElementById('hero-opening-status');

  function checkStatus() {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const timeInMinutes = hours * 60 + minutes;

    let isOpen = false;
    let textInfo = '';
    let heroText = '';

    if (day === 1) { // Lunedì
      isOpen = false;
      textInfo = '<span class="status-dot"></span> CHIUSO OGGI (Lunedì) • Riapriamo Martedì alle 12:00';
      heroText = 'CHIUSO OGGI (Lunedì)';
    } else {
      const lunchStart = 12 * 60;   // 12:00
      const lunchEnd = 15 * 60;     // 15:00
      const dinnerStart = 18 * 60;  // 18:00
      const dinnerEnd = 23 * 60 + 30; // 23:30

      const isLunchOpen = timeInMinutes >= lunchStart && timeInMinutes < lunchEnd;
      const isDinnerOpen = timeInMinutes >= dinnerStart && timeInMinutes < dinnerEnd;

      if (isLunchOpen || isDinnerOpen) {
        isOpen = true;
        textInfo = '<span class="status-dot"></span> APERTO ORA • Vi aspettiamo!';
        heroText = 'APERTO ORA • Cucina Pronta';
      } else {
        isOpen = false;
        let nextTime = 'dalle 18:00';
        if (timeInMinutes < lunchStart) {
          nextTime = 'oggi alle 12:00';
        } else if (timeInMinutes >= lunchEnd && timeInMinutes < dinnerStart) {
          nextTime = 'stasera alle 18:00';
        } else {
          nextTime = 'domani alle 12:00';
        }
        textInfo = `<span class="status-dot"></span> MOMENTANEAMENTE CHIUSO • Riapriamo ${nextTime}`;
        heroText = `MOMENTANEAMENTE CHIUSO • Riapriamo ${nextTime}`;
      }
    }

    if (statusElement) {
      statusElement.className = `status-pill ${isOpen ? 'open' : 'closed'}`;
      statusElement.innerHTML = textInfo;
    }

    if (heroStatusElement) {
      heroStatusElement.className = `hero-status-box ${isOpen ? 'open' : 'closed'}`;
      heroStatusElement.innerHTML = `<span class="status-dot"></span> <span class="status-text">${heroText}</span>`;
    }
  }

  checkStatus();
  setInterval(checkStatus, 60000);
}

/* ==========================================================================
   3. HERO CANVAS PARTICLES (DISBALED ON MOBILE FOR 0 CPU OVERHEAD)
   ========================================================================== */
function initHeroParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  if (window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.speedY = Math.random() * -0.4 - 0.1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.4 + 0.2;
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      if (this.y < 0 || this.x < 0 || this.x > width) {
        this.reset();
        this.y = height + 10;
      }
    }
    draw() {
      ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  for (let i = 0; i < 20; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   4. ANIMATED DISH CAROUSEL (GPU-ACCELERATED TRANSFORMS, 0 FORCED REFLOWS)
   ========================================================================== */
function initDishCarousel() {
  const carouselImage = document.getElementById('carousel-image');
  const slideCounter = document.getElementById('slide-counter');
  const progressFill = document.getElementById('progress-fill');
  const textBox = document.getElementById('carousel-text-box');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const dotsContainer = document.getElementById('carousel-dots');
  const orderCtaBtn = document.getElementById('carousel-order-btn');

  if (!carouselImage || !textBox) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  const AUTOPLAY_DURATION = 5500;

  dotsContainer.innerHTML = '';
  DISH_SLIDES.forEach((_, idx) => {
    const dot = document.createElement('button');
    dot.className = `dot-btn ${idx === 0 ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Diapositiva ${idx + 1}`);
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  function updateSlideContent(index) {
    const slide = DISH_SLIDES[index];
    textBox.classList.add('changing');

    setTimeout(() => {
      carouselImage.style.opacity = '0.3';

      setTimeout(() => {
        carouselImage.src = slide.image;
        carouselImage.alt = slide.title;
        carouselImage.style.opacity = '1';
      }, 120);

      document.getElementById('slide-tag').textContent = slide.tag;
      document.getElementById('slide-code').textContent = slide.code;
      document.getElementById('slide-title').textContent = slide.title;
      document.getElementById('slide-price').textContent = slide.price;
      document.getElementById('slide-description').textContent = slide.description;

      const featuresUl = document.getElementById('slide-features');
      featuresUl.innerHTML = '';
      slide.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerHTML = `<i class="ri-checkbox-circle-fill"></i> ${feat}`;
        featuresUl.appendChild(li);
      });

      orderCtaBtn.setAttribute('data-dish', `${slide.title} (${slide.code} - ${slide.price})`);
      slideCounter.textContent = `${index + 1} / ${DISH_SLIDES.length}`;

      const dots = dotsContainer.querySelectorAll('.dot-btn');
      dots.forEach((d, i) => d.classList.toggle('active', i === index));

      textBox.classList.remove('changing');
    }, 180);
  }

  function startProgressAnim() {
    progressFill.classList.remove('animating');
    void progressFill.offsetWidth;
    progressFill.classList.add('animating');
  }

  function goToSlide(index) {
    currentIndex = (index + DISH_SLIDES.length) % DISH_SLIDES.length;
    updateSlideContent(currentIndex);
    resetAutoplay();
  }

  function nextSlide() { goToSlide(currentIndex + 1); }
  function prevSlide() { goToSlide(currentIndex - 1); }

  function startAutoplay() {
    stopAutoplay();
    startProgressAnim();
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DURATION);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    progressFill.classList.remove('animating');
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  const carouselWrapper = document.querySelector('.carousel-wrapper');
  if (carouselWrapper) {
    carouselWrapper.addEventListener('mouseenter', stopAutoplay);
    carouselWrapper.addEventListener('mouseleave', startAutoplay);
  }

  let touchStartX = 0;
  let touchEndX = 0;

  carouselWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40) nextSlide();
    if (touchEndX - touchStartX > 40) prevSlide();
  }, { passive: true });

  updateSlideContent(0);
  startAutoplay();
}

/* ==========================================================================
   5. LAZY FACADE MAP LOADER (0 COOKIES & 0 MAIN-THREAD WORK)
   ========================================================================== */
function initLazyMap() {
  const loadBtn = document.getElementById('load-map-btn');
  const placeholder = document.getElementById('map-placeholder');
  const wrapper = document.getElementById('scenic-map-wrapper');
  if (!wrapper || !placeholder) return;

  function loadIframe() {
    if (wrapper.querySelector('iframe')) return;
    const iframe = document.createElement('iframe');
    iframe.title = "Mappa Ristorante Su Liangcheng Salerno";
    iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.653450953935!2d14.7824128!3d40.6601639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bc1b6cfbc4a0f%3A0xb366b591ad9ecaa1!2sVia%20V.%20Loria%2C%2017%2C%2084129%20Salerno%20SA!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit";
    iframe.loading = "lazy";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.style.filter = "invert(90%) hue-rotate(180deg) contrast(1.25)";

    placeholder.style.display = "none";
    wrapper.appendChild(iframe);
  }

  if (loadBtn) {
    loadBtn.addEventListener('click', loadIframe);
  }
}

/* ==========================================================================
   6. INTERACTIVE WHATSAPP MODAL
   ========================================================================== */
function initWhatsAppModal() {
  const modalOverlay = document.getElementById('whatsapp-modal');
  const modalClose = document.getElementById('modal-close');
  const modalForm = document.getElementById('whatsapp-form');
  const modalTypeSelect = document.getElementById('modal-type');
  const guestsGroup = document.getElementById('guests-group');

  if (!modalOverlay) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.trigger-whatsapp-modal');
    if (btn) {
      e.preventDefault();
      const predefinedDish = btn.getAttribute('data-dish');
      if (predefinedDish) {
        document.getElementById('modal-notes').value = `Vorrei ordinare: ${predefinedDish}`;
      }
      modalOverlay.classList.add('active');
    }
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
    });
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('active');
    }
  });

  if (modalTypeSelect) {
    modalTypeSelect.addEventListener('change', () => {
      guestsGroup.style.display = modalTypeSelect.value === 'prenotazione' ? 'block' : 'none';
    });
  }

  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('modal-type').value;
      const name = document.getElementById('modal-name').value;
      const date = document.getElementById('modal-date').value;
      const time = document.getElementById('modal-time').value;
      const guests = document.getElementById('modal-guests').value;
      const notes = document.getElementById('modal-notes').value;

      let message = `Ciao Ristorante Su! 👋\n`;
      if (type === 'prenotazione') {
        message += `Vorrei prenotare un tavolo:\n- Nome: ${name}\n- Data: ${date}\n- Ora: ${time}\n- Persone: ${guests}`;
      } else {
        message += `Vorrei effettuare un ordine d'asporto / domicilio:\n- Nome: ${name}\n- Data indicativa: ${date} ore ${time}`;
      }

      if (notes) {
        message += `\n- Dettagli/Note: ${notes}`;
      }

      const encodedMsg = encodeURIComponent(message);
      window.open(`https://wa.me/393271024489?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
      modalOverlay.classList.remove('active');
    });
  }
}
