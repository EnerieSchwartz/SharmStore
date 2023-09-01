const topSwiper = new Swiper(".top__slider", {
  //Arrows
  navigation: {
    nextEl: ".top__slider__arrow-left",
    prevEl: ".top__slider__arrow-right",
  },

  pagination: {
    el: ".top__slider__pagination",
    // Буллеты
    clickable: true,
    // Динамические буллеты
    // dynamicBullets: true,
    // verticalClass: true,
  },

  simulateTouch: true,
  touchRatio: 1, //speed of slides movent when dragging with cursor
  touchAngle: 45,
  grabCursor: true,
  autoHeight: true,

  slidesPerView: 1,
  watchOverflow: true,
  spaceBetween: 0,

  speed: 800,

  // Fade
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

/*CLIENTS SLIDER*/
const clientSwiper = new Swiper(".our__clients__slider__boxes__container", {
  pagination: {
    el: ".our__clients__pagination",
    // Буллеты
    clickable: true,
    // Динамические буллеты
    // dynamicBullets: true,
  },

  simulateTouch: true,
  touchRatio: 1, //speed of slides movent when dragging with cursor
  touchAngle: 45,
  grabCursor: true,
  autoHeight: true,

  slidesPerView: 4,
  // watchOverflow: true,
  // spaceBetween: 0,

  speed: 800,

  // Fade
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// --------------------------------------------------
// Best Sellers Spoiler

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function bestSellersSpoilerFunc() {
  let spoilerContent = document.getElementById("best__sellers__spoiler");
  spoilerContent.classList.toggle("best__sellers__spoiler__content__show");
  // spoilerContent.style.boxShadow = "6px 12px 30px rgba(0, 0, 0, 0.4)";

  let chevron = document.getElementById("chevron__down");
  chevron.classList.remove("fa-chevron-down");
  chevron.classList.add("fa-chevron-up");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".best__sellers__spoiler__btn")) {
    let dropdowns = document.getElementsByClassName(
      "best__sellers__spoiler__content"
    );
    let chevron = document.getElementById("chevron__down");
    chevron.classList.remove("fa-chevron-up");
    chevron.classList.add("fa-chevron-down");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (
        openDropdown.classList.contains("best__sellers__spoiler__content__show")
      ) {
        openDropdown.classList.remove("best__sellers__spoiler__content__show");
      }
    }
  }
};

// -------------------------------------------------------------------------------
let popupBg = document.querySelector(".header__menu__popup__bg"); // Фон попап окна
let popup = document.querySelector(".header__menu__popup"); // Само окно
let openPopupButtons = document.querySelectorAll(".header__menu_bars__365"); // Кнопки для показа окна
let closePopupButton = document.querySelector(".header__menu__close__popup"); // Кнопка для скрытия окна

openPopupButtons.forEach((button) => {
  // Перебираем все кнопки
  button.addEventListener("click", (e) => {
    // Для каждой вешаем обработчик событий на клик
    e.preventDefault(); // Предотвращаем дефолтное поведение браузера
    popupBg.classList.add("active"); // Добавляем класс 'active' для фона
    popup.classList.add("active"); // И для самого окна
  });
});

closePopupButton.addEventListener("click", () => {
  // Вешаем обработчик на крестик
  popupBg.classList.remove("active"); // Убираем активный класс с фона
  popup.classList.remove("active"); // И с окна
});
document.addEventListener("click", (e) => {
  // Вешаем обработчик на весь документ
  if (e.target === popupBg) {
    // Если цель клика - фот, то:
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
  }
});
