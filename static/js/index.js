document.addEventListener('DOMContentLoaded', function () {
  var burgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  burgers.forEach(function (burger) {
    burger.addEventListener('click', function () {
      var target = burger.dataset.target;
      var menu = target ? document.getElementById(target) : document.querySelector('.navbar-menu');

      burger.classList.toggle('is-active');
      if (menu) {
        menu.classList.toggle('is-active');
      }
    });
  });
});
