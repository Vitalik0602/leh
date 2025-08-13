// script.js
// === Настройки проекта ===
// Замените на свой номер в международном формате без + и пробелов (пример: 14165551234)
const WHATSAPP_NUMBER = '79151199589';

// Данные по услугам и ассортименту галерей
const SERVICES = {
  photozones: {
    title: 'Фотозоны',
    lead: 'Аренда и монтаж фотозон: от минималистичных стендов до зеркальных и неоновых инсталляций.',
    description: [
      'Прорабатываем композицию под площадку и трафик гостей, чтобы фотозона работала как магнит.',
      'Делаем монтаж за короткие окна, аккуратно и безопасно. Возможна ночная установка.',
      'Предоставляем доставку, дежурство техников и демонтаж в согласованные сроки.'
    ],
    bullets: [
      'Материалы: хром, акрил, текстиль, живые/искусственные растения',
      'Подсветка: гибкий неон, пиксельная LED, динамические сцены',
      'Опции: брендирование, арки, постаменты, задники 2×2 / 3×2.5 м'
    ],
    images: [
      'img/img1.jpg',
      'img/img2.jpg',
      'img/img3.jpg',
      'img/img4.jpg',
      'img/photozone5.jpg',
      'img/photozone6.jpg'
    ]
  },
  signage: {
    title: 'Вывески',
    lead: 'Изготавливаем и монтируем неоновые и объёмные вывески для бизнеса и событий.',
    description: [
      'Подберём технологии под задачи: гибкий неон, световые короба, контражур.',
      'Согласуем мощность и цветовую температуру, обеспечим равномерность свечения.',
      'Производим, доставляем, монтируем и обслуживаем.'
    ],
    bullets: [
      'Материалы: ПВХ, акрил, композит, металл',
      'Свет: SMD/COB-ленты, блоки питания с запасом мощности',
      'Опции: наружные/интерьерные, диммирование, датчики'
    ],
    images: [
      'img/signage1.jpg',
      'img/signage2.jpg',
      'img/signage3.jpg',
      'img/signage4.jpg'
    ]
  },
  decor: {
    title: 'Декор',
    lead: 'Комплексное оформление пространств: витрины, сцены, залы и open‑air площадки.',
    description: [
      'Сочетаем текстуры, свет и цвет, чтобы усилить сюжет мероприятия или бренда.',
      'Предлагаем модульные решения и индивидуальное производство.',
      'Работаем под ключ с ответственностью за результат.'
    ],
    bullets: [
      'Материалы: дерево, текстиль, металл, бумага, флористика',
      'Свет: контурная подстветка, точечные акценты',
      'Опции: инсталляции, подвесы, кинетические элементы'
    ],
    images: [
      'img/decor1.jpg',
      'img/decor2.jpg',
      'img/decor3.jpg',
      'img/decor4.jpg',
      'img/decor5.jpg'
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

// === Вспомогательные: прелоадер изображений ===
function preloadImages(srcs = []) {
  return Promise.all(srcs.map(src => new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => {
      console.error(`Ошибка загрузки изображения: ${src}`);
      resolve(src); // Продолжаем, чтобы не ломать слайдер
    };
    img.src = src;
  })));
}

// === Глобальные интерактивности (обе страницы) ===
document.addEventListener('DOMContentLoaded', () => {
  // Предупреждение, если номер WhatsApp не задан корректно (не мешает работе)
  if (!/^\d{8,15}$/.test(String(WHATSAPP_NUMBER))) {
    console.warn('[Сайт Лёхе] Проверьте WHATSAPP_NUMBER в script.js: должен быть только из цифр, без + и пробелов.');
  }

  // Плавная прокрутка внутри текущей страницы
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const targetSel = a.getAttribute('href');
      if (!targetSel || targetSel === '#') return;
      const target = qs(targetSel);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Кнопки «Быстрый заказ» на главной
  qsa('[data-quick-order]').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.getAttribute('data-quick-order') || 'Запрос';
      const form = qs('#contactForm');
      if (form) {
        form.setAttribute('data-service', service);
        form.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Отправка форм в WhatsApp (общая логика)
  qsa('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      const payload = {
        service: form.getAttribute('data-service') || 'Запрос',
        name: (formData.get('name') || '').toString().trim(),
        phone: (formData.get('phone') || '').toString().trim(),
        message: (formData.get('message') || '').toString().trim()
      };
      const text = toWhatsAppText(payload);
      openWhatsApp(text);
      form.reset();
    });
  });

  // Если это страница услуги — инициализируем её
  if (qs('#serviceTitle')) {
    initServicePage();
  }
});

// === Страница услуги: подстановка данных и слайдер ===
function initServicePage() {
  const key = getParam('service') || 'photozones';
  const svc = SERVICES[key] || SERVICES.photozones;

  // Заголовки и тексты
  const titleEl = qs('#serviceTitle');
  const leadEl = qs('#serviceLead');
  const pageTitle = qs('#pageTitle');
  const descEl = qs('#serviceDescription');
  const bulletsEl = qs('#serviceBullets');
  const form = qs('#serviceForm');

  if (titleEl) titleEl.textContent = svc.title;
  if (leadEl) leadEl.textContent = svc.lead;
  if (pageTitle) pageTitle.textContent = `${svc.title} — Сайт Лёхе`;
  if (descEl) descEl.innerHTML = (svc.description || []).map(p => `<p>${p}</p>`).join('');
  if (bulletsEl) bulletsEl.innerHTML = (svc.bullets || []).map(b => `<li>${b}</li>`).join('');
  if (form) form.setAttribute('data-service', svc.title);

  // Инициализация галереи
  const gallery = qs('#gallery');
  let images = Array.isArray(svc.images) ? svc.images.slice() : [];
  if (!images.length) {
    images = ['img/fallback1.jpg', 'img/fallback2.jpg', 'img/fallback3.jpg', 'img/fallback4.jpg'];
  }

  // Заполняем слайдер с использованием <img> для путей в HTML
  gallery.innerHTML = images.map(img => `
    <div class="swiper-slide">
      <img src="${img}" alt="Изображение услуги" loading="lazy">
    </div>
  `).join('');

  // Инициализируем Swiper после прелоада
  preloadImages(images).then(() => {
    new Swiper('.swiper', {
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
      spaceBetween: 0, // Убрали spaceBetween для плотного прилегания
      centeredSlides: true,
      grabCursor: true,
    });
  });
}