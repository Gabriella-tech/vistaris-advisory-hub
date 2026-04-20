// Dropdown toggle
document.querySelectorAll('.dropdown > a').forEach(trigger => {
  trigger.addEventListener('click', function(e) {
    e.preventDefault(); // prevent link navigation
    const menu = this.nextElementSibling;

    // Close other open dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.style.display = 'none';
    });

    // Toggle this one
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
  });
});

// Close dropdown if you click outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.style.display = 'none');
  }
});

// Initialize Swiper
const heroSwiper = new Swiper('.hero-swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 800,
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }
});

// Manual trigger for next slide
document.getElementById('nextSlideBtn').addEventListener('click', () => {
  heroSwiper.slideNext();
});



document.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 800,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
});

document.getElementById('toggleServices').addEventListener('click', function() {
  const hiddenServices = document.querySelectorAll('.hidden-service');
  hiddenServices.forEach(service => {
    service.style.display = (service.style.display === 'block') ? 'none' : 'block';
  });

  // Change button text
  this.textContent = (this.textContent === 'View More Services') ? 'View Less Services' : 'View More Services';
});
