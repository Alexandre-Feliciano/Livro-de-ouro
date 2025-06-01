const swiper = new Swiper('#image-carousel', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 8000,
    grabCursor: true,
  });