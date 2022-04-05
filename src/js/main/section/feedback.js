const swiper = new Swiper(".feedback-swiper", {
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 7000,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: "[data-role='next']",
    prevEl: "[data-role='prev']",
  },
});
