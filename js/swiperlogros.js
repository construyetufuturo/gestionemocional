var swiperEl = document.querySelector(".mySwiper-lograras");
    Object.assign(swiperEl, {
      grabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });
    swiperEl.initialize()