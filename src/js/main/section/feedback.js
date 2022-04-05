const swiper = new Swiper(".feedback-swiper", {
  loop: true,
  //   spaceBetween: 15,
  slidesPerView: 3,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: "[data-role='next']",
    prevEl: "[data-role='prev']",
  },
});
