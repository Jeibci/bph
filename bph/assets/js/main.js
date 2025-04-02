/**
 * Wait for document to load
 */
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky Header
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Initialize Swiper sliders
   */
  function initSliders() {
    // Clients Slider
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      slidesPerView: 5,
      spaceBetween: 30,
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 30
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 30
        }
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    // Testimonials Slider
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 1,
      spaceBetween: 30,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  /**
   * Initialize AOS
   */
  function initAOS() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }

  /**
   * Initialize when document is ready
   */
  initSliders();
  initAOS();

  /**
   * Mobile nav toggle
   */
  document.addEventListener('DOMContentLoaded', function() {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('.navbar');

    if (mobileNavToggle) {
      mobileNavToggle.addEventListener('click', function(e) {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        this.classList.toggle('bi-list');
        this.classList.toggle('bi-x');
        navbar.classList.toggle('navbar-mobile');
      });

      // Close mobile nav when links are clicked
      document.querySelectorAll('.navbar a').forEach(function(navLink) {
        navLink.addEventListener('click', function() {
          if (document.querySelector('.mobile-nav-active')) {
            document.querySelector('body').classList.remove('mobile-nav-active');
            navbar.classList.remove('navbar-mobile');
            mobileNavToggle.classList.add('bi-list');
            mobileNavToggle.classList.remove('bi-x');
          }
        });
      });
    }
  });

  /**
   * FAQ toggle
   */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach(item => {
    item.addEventListener('click', () => {
      const parent = item.closest('.faq-item');
      parent.classList.toggle('faq-active');
    });
  });

  /**
   * Skills animation
   */
  function initSkillsAnimation() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(progressBar => {
      const value = progressBar.getAttribute('aria-valuenow');
      progressBar.style.width = value + '%';
    });
  }

  // Initialize skills animation when section is visible
  const skillsSection = document.querySelector('.skills');
  if (skillsSection) {
    const waypoint = new Waypoint({
      element: skillsSection,
      offset: '80%',
      handler: function() {
        initSkillsAnimation();
      }
    });
  }
});