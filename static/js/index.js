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

        // Jump to the start of the newly activated tab section. The
        // `scroll-margin-top` CSS on `.content-tabs` keeps the sticky
        // navbar from hiding the tab bar.
        var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        group.scrollIntoView({
          behavior: reduce ? 'auto' : 'smooth',
          block: 'start'
        });
      });
    });
  });

  var lightbox = document.getElementById('image-lightbox');
  var zoomButtons = Array.prototype.slice.call(document.querySelectorAll('.image-zoom-trigger'));

  if (lightbox && zoomButtons.length) {
    var lightboxImage = lightbox.querySelector('img');
    var lightboxCaption = lightbox.querySelector('figcaption');
    var closeButtons = Array.prototype.slice.call(lightbox.querySelectorAll('button'));
    var lastFocused = null;

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove('is-lightbox-open');
      if (lightboxImage) {
        lightboxImage.removeAttribute('src');
        lightboxImage.removeAttribute('alt');
      }
      if (lastFocused) {
        lastFocused.focus();
      }
    }

    function openLightbox(trigger) {
      var source = trigger.dataset.lightboxSrc;
      var caption = trigger.dataset.lightboxCaption || '';
      var image = trigger.querySelector('img');

      if (!source || !lightboxImage) {
        return;
      }

      lastFocused = trigger;
      lightboxImage.src = source;
      lightboxImage.alt = image ? image.alt : caption;
      if (lightboxCaption) {
        lightboxCaption.textContent = caption;
      }
      lightbox.hidden = false;
      document.body.classList.add('is-lightbox-open');

      var closeButton = lightbox.querySelector('.image-lightbox__close');
      if (closeButton) {
        closeButton.focus();
      }
    }

    zoomButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        openLightbox(button);
      });
    });

    closeButtons.forEach(function (button) {
      button.addEventListener('click', closeLightbox);
    });

    document.addEventListener('keydown', function (event) {
      if (!lightbox.hidden && event.key === 'Escape') {
        closeLightbox();
      }
    });
  }
});
