// script.js
// === Настройки проекта ===
const WHATSAPP_NUMBER = '79309300684';

const SERVICES = {
  photozones: {
    title: 'Оформление фотозон и Press Wall',
    lead: 'Создаём и оформляем фотозоны, декорации, производим и сдаём в аренду press wall для мероприятий любого масштаба.',
    description: [
      'Разрабатываем уникальный дизайн фотозон и декораций, который подчеркнёт атмосферу вашего события.',
      'Предлагаем как изготовление press wall под ключ, так и аренду готовых конструкций.',
      'Обеспечиваем полный цикл работ: от концепции и производства до доставки, монтажа и демонтажа.'
    ],
    bullets: [
      'Типы: Press wall, тематические фотозоны, декорации',
      'Услуги: Изготовление, аренда, монтаж, демонтаж',
      'Подходит для: Свадеб, конференций, выставок, корпоративов'
    ],
    images: [
      'img/photozone1.jpg',
      'img/photozone2.jpg',
      'img/photozone3.jpg',
      'img/photozone4.jpg',
      'img/photozone5.jpg',
	  'img/photozone6.jpg',
	  'img/photozone7.jpg',
	  'img/photozone8.jpg',
	  'img/photozone9.jpg',
	  'img/photozone10.jpg',
	  'img/photozone11.jpg',
	  'img/photozone12.jpg',
      'img/photozone13.jpg'
    ]
  },
  signage: {
    title: 'Изготовление и ремонт вывесок',
    lead: 'Производство, ремонт и модернизация световых вывесок и конструкций. Профессиональный ремонт и замена диодов.',
    description: [
      'Изготавливаем световые вывески любой сложности: объёмные буквы, лайтбоксы, неоновые конструкции.',
      'Проводим диагностику и качественный ремонт существующих вывесок, включая полную или частичную замену диодов, блоков питания и проводки.',
      'Модернизируем устаревшие конструкции, улучшая их внешний вид и энергоэффективность.'
    ],
    bullets: [
      'Изготовление: световые короба, объёмные буквы, неон',
      'Ремонт: замена диодов, блоков питания, ремонт конструкций',
      'Материалы: акрил, ПВХ, металл, композит'
    ],
    images: [
      'img/signage1.jpg',
      'img/signage2.jpg',
      'img/signage3.jpg',
      'img/signage4.jpg',
      'img/signage5.jpg',
      'img/signage6.jpg',
      'img/signage7.jpg',
      'img/signage8.jpg',
	  'img/signage9.jpg',
	  'img/signage10.jpg',
	  'img/signage11.jpg',
	  'img/signage12.jpg',
	  'img/signage13.jpg',
	  'img/signage14.jpg',
	  'img/signage15.jpg',
    ]
  },
  film_application: {
    title: 'Монтаж плёнки',
    lead: 'Профессиональный монтаж виниловой плёнки на любые гладкие поверхности для брендирования, рекламы и декора.',
    description: [
      'Выполняем оклейку витрин, автомобилей, стен, мебели и других поверхностей.',
      'Используем только качественные плёнки от проверенных производителей, что гарантирует долговечность и отличный внешний вид.',
      'Гарантируем высокое качество монтажа без пузырей, складок и повреждений поверхности.'
    ],
    bullets: [
      'Поверхности: витрины, транспорт, стены, мебель',
      'Материалы: винил, матовые, глянцевые и прозрачные плёнки',
      'Сроки выполнения: от нескольких часов'
    ],
    images: [
      'img/film1.jpg',
      'img/film2.jpg',
      'img/film3.jpg',
	  'img/film4.jpg',
	  'img/film5.jpg',
      'img/film6.jpg'
    ]
  },
  site: {
    title: 'Создание сайтов',
    lead: 'Разрабатываем современные сайты под ключ: дизайн, верстка, наполнение и техническая поддержка.',
    description: [
      'Проектируем удобную структуру и UX, делаем адаптивный дизайн под мобильные и десктопы.',
      'Верстаем по стандартам, настраиваем формы, чаты, карты, аналитику и SEO-мета-теги.',
      'Подключаем домен/SSL, помогаем с хостингом и публикуем сайт. Обеспечиваем поддержку и развитие.'
    ],
    bullets: [
      'Типы: лендинг, корпоративный сайт, каталог',
      'Техработы: верстка, интеграции, аналитика, SEO-основа',
      'Сроки: от 5–10 рабочих дней'
    ],
    images: [
      'img/site1.png',
      'img/site2.png'
    ]
  },
  garland: {
  title: "Монтаж гирлянд на фасад",
  lead: "Праздничное оформление фасадов гирляндами и иллюминацией.",
  description: [
    "Мы профессионально украшаем фасады зданий гирляндами, создавая атмосферу праздника.",
    "Гарантируем надёжный монтаж, безопасное подключение и эффектный результат.",
    "Подходит для магазинов, ресторанов, офисов и частных домов."
  ],
  bullets: [
    "Разработка дизайн-проекта подсветки",
    "Подбор гирлянд и оборудования",
    "Монтаж на любой высоте",
    "Безопасное подключение и проверка",
    "Обслуживание и демонтаж после сезона"
  ],
  images: [
    "img/garland1.jpg",
    "img/garland2.jpg",
    "img/garland3.jpg",
    "img/garland4.jpg",
    "img/garland5.jpg",
    "img/garland6.jpg"
  ]
}
};

// === Базовые утилиты ===
const qs = (sel, root = document) => root.querySelector(sel);
const qsa = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const getParam = (key) => new URLSearchParams(window.location.search).get(key);

function toWhatsAppText(payload) {
  const lines = [];
  if (payload.service) lines.push(`Услуга: ${payload.service}`);
  if (payload.name) lines.push(`Имя: ${payload.name}`);
  if (payload.phone) lines.push(`Телефон: ${payload.phone}`);
  if (payload.message) lines.push(`Комментарий: ${payload.message}`);
  return lines.join('\n');
}

function openWhatsApp(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const url = `${base}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function preloadImages(srcs = []) {
  return Promise.all(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => {
      console.error(`Ошибка загрузки изображения: ${src}`);
      resolve(src);
    };
    img.src = src;
  })));
}

// === Лайтбокс (увеличение изображений c навигацией) ===
function initLightbox() {
  // Создаём оверлей
  const overlay = document.createElement('div');
  overlay.id = 'lightbox';
  Object.assign(overlay.style, {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '0',
    visibility: 'hidden',
    transition: 'opacity 0.25s ease',
    zIndex: '9999',
    touchAction: 'none'
  });

  // Кнопки навигации
  const btnPrev = document.createElement('button');
  const btnNext = document.createElement('button');
  const btnClose = document.createElement('button');

  [btnPrev, btnNext, btnClose].forEach(b => {
    Object.assign(b.style, {
      position: 'absolute',
      background: 'rgba(255,255,255,0.12)',
      border: 'none',
      color: '#fff',
      fontSize: '24px',
      padding: '12px 16px',
      borderRadius: '14px',
      cursor: 'pointer',
      backdropFilter: 'blur(4px)'
    });
    b.setAttribute('type', 'button');
  });

  btnPrev.textContent = '‹';
  btnNext.textContent = '›';
  btnClose.textContent = '✕';

  btnPrev.style.left = '16px';
  btnNext.style.right = '16px';
  btnClose.style.top = '16px';
  btnClose.style.right = '16px';

  const img = document.createElement('img');
  Object.assign(img.style, {
    maxWidth: '92%',
    maxHeight: '92%',
    borderRadius: '12px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
    userSelect: 'none'
  });

  overlay.appendChild(img);
  overlay.appendChild(btnPrev);
  overlay.appendChild(btnNext);
  overlay.appendChild(btnClose);
  document.body.appendChild(overlay);

  let group = [];
  let index = 0;
  let isOpen = false;

  // Вспомогательные
  const dedupe = (arr) => Array.from(new Set(arr.filter(Boolean)));

  const extractSrc = (el) => {
    if (!el) return null;
    if (el.tagName && el.tagName.toLowerCase() === 'img') {
      return el.currentSrc || el.src || el.getAttribute('data-src') || null;
    }
    // Если плитка/элемент с фоном
    if (el.dataset && el.dataset.full) return el.dataset.full;
    const bg = getComputedStyle(el).backgroundImage; // url("...") или none
    if (bg && bg !== 'none') {
      const m = bg.match(/url\(["']?(.*?)["']?\)/);
      if (m && m[1]) return m[1];
    }
    // Если внутри есть <img>
    const innerImg = el.querySelector && el.querySelector('img');
    if (innerImg) return innerImg.currentSrc || innerImg.src || innerImg.getAttribute('data-src');
    return null;
  };

  const collectGroup = (clickedEl) => {
    const inPortfolio = !!clickedEl.closest('#portfolio');
    const inSwiper = !!clickedEl.closest('.swiper');

    if (inPortfolio) {
      const items = [
        ...qsa('#portfolio img'),
        ...qsa('#portfolio .tile')
      ];
      const sources = dedupe(items.map(extractSrc));
      return sources;
    }

    if (inSwiper) {
      // Берём только уникальные изображения (без дубликатов loop)
      const slideImgs = qsa('.swiper .swiper-slide img');
      const sources = dedupe(slideImgs.map(extractSrc));
      return sources;
    }

    // Фоллбек: всё кликабельное на странице
    const any = dedupe([
      ...qsa('#portfolio img, #portfolio .tile, .swiper img')
    ].map(extractSrc));
    return any;
  };

  const preloadNeighbor = (idx) => {
    const nextIdx = (idx + 1 + group.length) % group.length;
    const prevIdx = (idx - 1 + group.length) % group.length;
    [nextIdx, prevIdx].forEach(i => {
      const s = group[i];
      if (s) {
        const tmp = new Image();
        tmp.src = s;
      }
    });
  };

  const showAt = (i) => {
    if (!group.length) return;
    index = (i + group.length) % group.length;
    img.src = group[index];
    preloadNeighbor(index);
  };

  const open = (clickedEl) => {
    group = collectGroup(clickedEl);
    const src = extractSrc(clickedEl);
    index = Math.max(0, group.indexOf(src));
    showAt(index);
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    document.body.style.overflow = 'hidden';
    isOpen = true;
  };

  const close = () => {
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    img.removeAttribute('src');
    document.body.style.overflow = '';
    isOpen = false;
  };

  const next = () => showAt(index + 1);
  const prev = () => showAt(index - 1);

  // Слушатели управления
  btnClose.addEventListener('click', close);
  btnNext.addEventListener('click', next);
  btnPrev.addEventListener('click', prev);

  // Клик по тёмной области НЕ по картинке — закрыть
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  // Клавиатура
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Свайпы
  let touchX = null;
  overlay.addEventListener('touchstart', (e) => {
    touchX = e.touches[0].clientX;
  }, { passive: true });

  overlay.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next(); else prev();
    }
    touchX = null;
  });

  // Делегирование кликов: портфолио и галерея
  document.addEventListener('click', (e) => {
    const target = e.target.closest('#portfolio img, #portfolio .tile, .swiper img');
    if (!target) return;
    // курсор-указатель на кликабельном
    if (target.style) target.style.cursor = 'zoom-in';
    open(target);
  });
}

// === Глобальные интерактивности ===
document.addEventListener('DOMContentLoaded', () => {
  if (!/^\d{8,15}$/.test(String(WHATSAPP_NUMBER))) {
    console.warn('[Сайт Лёхе] Проверьте WHATSAPP_NUMBER в script.js.');
  }
  
  // Ленивая загрузка + анимация появления изображений
  const lazyImages = qsa('.masonry .tile');
  if (lazyImages.length > 0) {
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const lazyImage = entry.target;
          lazyImage.classList.add('fade-in', 'visible');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(img => lazyImageObserver.observe(img));
  }

  // Анимация появления секций и элементов
  const animatedElements = qsa('.section, .card, .review, .tile, .form, .hero__content, .hero__art');
  const animationObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach(el => {
    el.classList.add('fade-in');
    animationObserver.observe(el);
  });
  
  // Бургер-меню
  const burger = qs('.burger');
  const nav = qs('.nav');
  const body = document.body;
  if (burger && nav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
    qsa('.nav a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });
  }

  // Плавная прокрутка
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetSel = a.getAttribute('href');
      if (!targetSel || targetSel === '#') return;
      const target = qs(targetSel);
      if (target) {
        e.preventDefault();
        const yOffset = -80;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // Быстрый выбор услуги в форме
  qsa('[data-quick-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-quick-order') || 'Запрос';
      const form = qs('#contactForm');
      if (form) form.setAttribute('data-service', service);
    });
  });

  // Отправка форм
  qsa('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      const formData = new FormData(form);
      const payload = {
        service: form.getAttribute('data-service') || 'Запрос',
        name: (formData.get('name') || '').toString().trim(),
        phone: (formData.get('phone') || '').toString().trim(),
        message: (formData.get('message') || '').toString().trim()
      };
      
      if (!payload.name || !payload.phone) {
        alert('Пожалуйста, заполните имя и телефон.');
        return;
      }

      const text = toWhatsAppText(payload);
      openWhatsApp(text);
      form.reset();
      
      submitBtn.textContent = 'Отправлено!';
      submitBtn.style.backgroundColor = '#28a745';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
      }, 3000);
    });
  });

  // Маска для телефона
  qsa('input[type="tel"]').forEach(input => {
    input.addEventListener('input', (e) => {
      let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
      e.target.value = !x[2] ? x[1] : `+${x[1]} (${x[2]}) ${x[3]}` + (x[4] ? `-${x[4]}` : '') + (x[5] ? `-${x[5]}` : '');
    });
  });

  // Эффект для шапки при скролле
  const header = qs('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (qs('#serviceTitle')) {
    initServicePage(); // генерирует галерею и инициализирует Swiper
  }

  // Инициализируем лайтбокс (делегирование кликов работает для всего DOM)
  initLightbox();
});

// === Страница услуги ===
function initServicePage() {
  const key = getParam('service') || 'photozones';
  const svc = SERVICES[key] || SERVICES.photozones;

  const titleEl = qs('#serviceTitle');
  const leadEl = qs('#serviceLead');
  const pageTitle = qs('#pageTitle');
  const descEl = qs('#serviceDescription');
  const bulletsEl = qs('#serviceBullets');
  const form = qs('#serviceForm');

  if (titleEl) titleEl.textContent = svc.title;
  if (leadEl) leadEl.textContent = svc.lead;
  if (pageTitle) pageTitle.textContent = `${svc.title} — KAMONT`;
  if (descEl) descEl.innerHTML = (svc.description || []).map(p => `<p>${p}</p>`).join('');
  if (bulletsEl) bulletsEl.innerHTML = (svc.bullets || []).map(b => `<li>${b}</li>`).join('');
  if (form) form.setAttribute('data-service', svc.title);

  const gallery = qs('#gallery');
  let images = Array.isArray(svc.images) ? svc.images.slice() : [];
  if (!images.length) {
    images = ['img/photozone1.jpg', 'img/photozone2.jpg', 'img/photozone3.jpg', 'img/photozone4.jpg'];
  }

  gallery.innerHTML = images.map(img => `
    <div class="swiper-slide">
      <img src="${img}" alt="Изображение услуги" loading="lazy">
    </div>
  `).join('');

  preloadImages(images).then(() => {
    // Сохраняем инстанс в window на случай, если понадобится доступ извне
    window.__serviceSwiper = new Swiper('.swiper', {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      grabCursor: true,
    });
  });
}


