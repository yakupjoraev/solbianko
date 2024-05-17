// Custom scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.menu__item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });

  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()

function heroNav() {
  const container = document.querySelector('.hero__nav-container');
  if (!container) {
    return null
  }

  const menu = document.querySelector('.hero__nav');
  const burger = document.querySelector('.hero-nav-burger');
  const body = document.querySelector('body')

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  //снять классы при клике на элементы меню
  const menuItems = document.querySelectorAll('.hero__nav-item')

  menuItems.forEach(item => {
    item.addEventListener('click', function () {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    })
  });
}
heroNav();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav')

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 1
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav')
  } else {
    nav.classList.remove('fixed__nav')
  }
}
window.addEventListener('scroll', fixedNav)


function productSlider() {
  const container = document.querySelector('.products-slider');

  if (!container) {
    return null
  }

  var swiper = new Swiper(".products-slider__slider", {
    slidesPerView: 2,
    // centeredSlides: true,
    // loop: true,
    spaceBetween: 20,
    // pagination: {
    //   el: ".products-slider__slider-pagination",
    //   clickable: true,
    // },


    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      767: {
        slidesPerView: 3,
        // spaceBetween: 30
      },
      // when window width is >= 640px
      991: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 70
      }
    }
  });
}

productSlider();

// function slider() {
//   const container = document.querySelector('.slider__container');

//   if (!container) {
//     return null
//   }

//   var swiper = new Swiper(".slider", {
//     slidesPerView: 1,
//     centeredSlides: true,
//     loop: true,
//     // spaceBetween: 40,
//     pagination: {
//       el: ".slider__pagination",
//       clickable: true,
//     },

//     breakpoints: {
//       // when window width is >= 320px
//       320: {
//         slidesPerView: 1,
//         // spaceBetween: 20
//       },
//       // when window width is >= 480px
//       480: {
//         // spaceBetween: 30
//       },
//       // when window width is >= 640px
//       767: {
//         slidesPerView: 3,
//         // spaceBetween: 40
//       },

//       991: {
//         slidesPerView: 4,
//         // spaceBetween: 40
//       },

//       1200: {
//         slidesPerView: 5,
//         // spaceBetween: 40
//       }
//     }
//   });
// }

// slider();

// function sliderTwo() {
//   const container = document.querySelector('.slider__container');

//   if (!container) {
//     return null
//   }

//   var swiper = new Swiper(".slider-2", {
//     slidesPerView: 1,
//     centeredSlides: true,
//     loop: true,
//     // spaceBetween: 40,
//     pagination: {
//       el: ".slider__pagination",
//       clickable: true,
//     },
//   });
// }

// sliderTwo();

function slider() {
  const container = document.querySelector('.slider__container');

  if (!container) {
    return null;
  }

  const swiper1 = new Swiper(".slider", {
    slidesPerView: 1,
    centeredSlides: true,
    // loop: true,
    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      767: { slidesPerView: 3 },
      991: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    }
  });

  const swiper2 = new Swiper(".slider-2", {
    slidesPerView: 1,
    centeredSlides: true,
    // loop: true,
    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },
  });

  swiper1.on('slideChange', function () {
    if (swiper2) {
      swiper2.slideTo(this.activeIndex);
    }
  });

  swiper2.on('slideChange', function () {
    if (swiper1) {
      swiper1.slideTo(this.activeIndex);
    }
  });
}

slider();



function productTabs() {
  const container = document.querySelector('.product');

  if (!container) {
    return null;
  }

  const tabButtons = document.querySelectorAll('.product__btn');
  const tabContents = document.querySelectorAll('.product__content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Удаляем класс active у всех кнопок и контентов
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем класс active только той кнопке, на которую кликнули, и соответствующему контенту
      button.classList.add('active');
      const tabContentId = button.getAttribute('data-product-btn');
      const activeTabContent = document.querySelector(`[data-product-content="${tabContentId}"]`);
      activeTabContent.classList.add('active');
    });
  });
}

productTabs();

document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.filters');

  if (!container) {
    return null;
  }
  // Select all buttons within the filters
  const buttons = document.querySelectorAll('.filters__item-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove the 'active' class from all filters__item elements
      document.querySelectorAll('.filters__item').forEach(item => item.classList.remove('active'));

      // Add the 'active' class to the parent element of the clicked button
      this.closest('.filters__item').classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.sorts');

  if (!container) {
    return null;
  }

  // Select all sort buttons
  const sortButtons = document.querySelectorAll('.sorts__item');

  sortButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove the 'active' class from all sorts__item elements
      document.querySelectorAll('.sorts__item').forEach(item => item.classList.remove('active'));

      // Add the 'active' class to the parent element of the clicked button
      this.closest('.sorts__item').classList.add('active');
    });
  });
});



// if (window.matchMedia("(min-width: 768px)").matches) {
//   slider();
// }
