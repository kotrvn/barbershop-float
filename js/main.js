var link = document.querySelector('.login');
var popup = document.querySelector('.modal-content');
var close = document.querySelector('.modal-content-close');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');
var storage = localStorage.getItem('login');
var mapOpen = document.querySelector('.js-open-map');
var mapPopup = document.querySelector('.modal-content-map');
var mapClose = mapPopup.querySelector('.modal-content-close');
var overlay = document.querySelector('.modal-overlay');

link.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.add('modal-content-show');
  overlay.classList.add('modal-overlay-show');

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener('click', function(e) {
  e.preventDefault();
  popup.classList.remove('modal-content-show');
  overlay.classList.remove('modal-overlay-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(e){
  if (!login.value || !password.value) {
    e.preventDefault();
    popup.classList.add('modal-error');
  } else {
    localStorage.setItem('login', login.value);
  };
});

mapOpen.addEventListener('click', function(e) {
  e.preventDefault();
  mapPopup.classList.add('modal-content-show');
  overlay.classList.add('modal-overlay-show');
});

mapClose.addEventListener('click', function(e) {
  e.preventDefault();
  mapPopup.classList.remove('modal-content-show');
  overlay.classList.remove('modal-overlay-show');
});

window.addEventListener('keydown', function(e) {
  if (event.keyCode === 27) {
    if (popup.classList.contains('modal-content-show') || mapPopup.classList.contains('modal-content-show')) {
      popup.classList.remove('modal-content-show');
      overlay.classList.remove('modal-overlay-show');
      popup.classList.remove('modal-error');
      mapPopup.classList.remove('modal-content-show');
    }
  }
});
