import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import IMask from 'imask';

const header = document.querySelector('header');
const headerToggle = document.querySelector('.header__toggle');
const headerOverlay = document.querySelector('.header__overlay');
const headerLink = document.querySelectorAll('.navigation-list__link');
const body = document.querySelector('body');

header.classList.remove('no-js');

headerToggle.addEventListener('click', () => {
  header.classList.toggle('is-active');
  body.classList.toggle('open-menu');
});

headerOverlay.addEventListener('click', () => header.classList.remove('is-active'));

headerLink.forEach((menu) => {
  menu.addEventListener('click', () => header.classList.remove('is-active'));
});

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const tel = document.querySelectorAll('[name="user-phone"]');

  tel.forEach((elem) => {
    (() =>
      new IMask(elem, {
        mask: '+{7}(000)000-00-00',
      })
    )();
  });


  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
