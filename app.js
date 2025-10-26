const menuOpenButton = document.getElementById('menu-open-button');
const menuCloseButton = document.getElementById('menu-close-button');


menuOpenButton.addEventListener('click', () => {
    // Toggle Mobile Menu Visibility
  document.body.classList.toggle('show-mobile-menu');
});

// Closing menu when clicking the button
menuCloseButton.addEventListener('click', () => menuOpenButton.click());

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true,
  spaceBetween: 20,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    0 : {
      slidesPerView: 1
    },
     768: {
      slidesPerView: 2
    },
     1024: {
      slidesPerView: 3
    }
  }
});