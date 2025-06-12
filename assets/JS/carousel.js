const swiper = new Swiper('#image-carousel', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 0.3,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
    },
    speed: 900,
    grabCursor: false,
  });