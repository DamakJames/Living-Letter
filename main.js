/**
 * LIVING LETTERS — CORE INTERACTIVE JAVASCRIPT
 * Powers WordPress-style hero photo slider, mobile drawer, audio player,
 * video modal/preview, and form notifications.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSlider();
  initNavigation();
  initAudioPlayer();
  initFilterTabs();
  initAccordions();
  initSearchFilters();
  initFormHandlers();
  highlightActiveNavLink();
});

/* --------------------------------------------------------------------------
   1. HERO MOVEABLE PHOTO SLIDER (USER REQUESTED)
   -------------------------------------------------------------------------- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dots = document.querySelectorAll('.slider-dot');

  if (slides.length <= 1) return;

  let currentIndex = 0;
  let slideInterval = null;

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove('active'));
    dots.forEach((d) => d.classList.remove('active'));

    currentIndex = (index + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    if (dots[currentIndex]) dots[currentIndex].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlide, 7000);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      startAutoPlay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      startAutoPlay();
    });
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      showSlide(idx);
      startAutoPlay();
    });
  });

  const sliderWrapper = document.querySelector('.hero-slider-section');
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', stopAutoPlay);
    sliderWrapper.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

/* --------------------------------------------------------------------------
   2. NAVIGATION & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const overlay = document.querySelector('.drawer-overlay');
  const closeBtn = document.querySelector('.drawer-close');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function highlightActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .drawer-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop().split('#')[0];
    
    if (linkPath === currentPath || (currentPath === '' && linkPath === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   3. AUDIO & SERMON BROADCAST
   -------------------------------------------------------------------------- */
function initAudioPlayer() {
  const playBtns = document.querySelectorAll('.player-btn-play');

  playBtns.forEach((playBtn) => {
    let isPlaying = false;
    const playIcon = playBtn.querySelector('.icon-play');
    const pauseIcon = playBtn.querySelector('.icon-pause');

    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        if (playIcon) playIcon.style.display = 'none';
        if (pauseIcon) pauseIcon.style.display = 'block';
        showToast('Now Playing: "It Shall End in Praise" by Pastor Solomon Amao');
      } else {
        if (playIcon) playIcon.style.display = 'block';
        if (pauseIcon) pauseIcon.style.display = 'none';
        showToast('Playback Paused');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. CONTENT CATEGORY FILTER TABS
   -------------------------------------------------------------------------- */
function initFilterTabs() {
  const tabContainers = document.querySelectorAll('.filter-tabs');

  tabContainers.forEach((container) => {
    const tabs = container.querySelectorAll('.filter-tab');
    const targetGridId = container.getAttribute('data-target-grid');
    const targetGrid = targetGridId ? document.getElementById(targetGridId) : document.querySelector('.filterable-grid');

    if (!targetGrid) return;
    const items = targetGrid.querySelectorAll('[data-category]');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        const selectedCategory = tab.getAttribute('data-category');

        items.forEach((item) => {
          const itemCategories = item.getAttribute('data-category').split(' ');
          if (selectedCategory === 'all' || itemCategories.includes(selectedCategory)) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. ACCORDIONS (Q&A & FAQ)
   -------------------------------------------------------------------------- */
function initAccordions() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      const container = item.closest('.accordion');
      if (container && container.getAttribute('data-single') === 'true') {
        container.querySelectorAll('.accordion-item').forEach((sibling) => {
          sibling.classList.remove('active');
          const siblingBtn = sibling.querySelector('.accordion-header');
          if (siblingBtn) siblingBtn.setAttribute('aria-expanded', 'false');
        });
      }

      if (!isOpen) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      } else {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. REAL-TIME SEARCH
   -------------------------------------------------------------------------- */
function initSearchFilters() {
  const searchInputs = document.querySelectorAll('.search-input');

  searchInputs.forEach((input) => {
    const targetContainerId = input.getAttribute('data-search-target');
    const container = targetContainerId ? document.getElementById(targetContainerId) : document.querySelector('.searchable-list');
    if (!container) return;

    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const searchableItems = container.querySelectorAll('.searchable-item');

      searchableItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? '' : 'none';
      });
    });
  });
}

/* --------------------------------------------------------------------------
   7. FORM SUBMISSIONS & TOAST FEEDBACK
   -------------------------------------------------------------------------- */
function initFormHandlers() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast(`Grace and peace! You are subscribed as ${input.value}.`);
        input.value = '';
      }
    });
  });

  const questionForm = document.getElementById('question-submission-form');
  if (questionForm) {
    questionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Your question was submitted for Heart’s Questions. Pastor Solomon will review it for upcoming video broadcasts!');
      questionForm.reset();
    });
  }
}

function showToast(message, duration = 4000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    container.style.cssText = 'position: fixed; bottom: 2rem; right: 2rem; z-index: 3000; display: flex; flex-direction: column; gap: 0.5rem;';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.style.cssText = 'background: #132238; color: #ffffff; padding: 1rem 1.5rem; border-radius: 6px; border-left: 4px solid #b45309; box-shadow: 0 10px 25px rgba(0,0,0,0.3); font-size: 0.95rem; font-weight: 500; transition: all 0.3s ease;';
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => {
      if (toast.parentElement) toast.remove();
    }, 300);
  }, duration);
}
