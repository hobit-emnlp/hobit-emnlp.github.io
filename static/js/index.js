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

  var tabGroups = Array.prototype.slice.call(document.querySelectorAll('[data-tabs]'));

  tabGroups.forEach(function (group) {
    var buttons = Array.prototype.slice.call(group.querySelectorAll('[data-tab-target]'));
    var panels = Array.prototype.slice.call(group.querySelectorAll('.tab-panel'));

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var targetId = button.dataset.tabTarget;

        buttons.forEach(function (candidate) {
          var isSelected = candidate === button;
          candidate.classList.toggle('is-active', isSelected);
          candidate.setAttribute('aria-selected', String(isSelected));
        });

        panels.forEach(function (panel) {
          var isActive = panel.id === targetId;
          panel.classList.toggle('is-active', isActive);
          panel.hidden = !isActive;
        });
      });
    });
  });
});
