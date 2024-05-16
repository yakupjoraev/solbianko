// Custom Scripts
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
    pagination: {
      el: ".products-slider__slider-pagination",
      clickable: true,
    },


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

function slider() {
  const container = document.querySelector('.slider__container');

  if (!container) {
    return null
  }

  var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    // spaceBetween: 40,
    pagination: {
      el: ".slider__pagination",
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        // spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        // spaceBetween: 30
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 'auto',
        // spaceBetween: 40
      }
    }
  });
}

slider();
// if (window.matchMedia("(min-width: 768px)").matches) {
//   slider();
// }

