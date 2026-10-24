(() => {
  'use strict';
  const root = document.documentElement;
  const overlay = document.getElementById('site-loader');
  if (!overlay) {
    root.classList.remove('logo-loader-enabled');
    return;
  }

  let finished = false;
  let removalTimer;
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(window.logoLoaderSafetyTimer);
    overlay.classList.add('is-leaving');
    const remove = () => {
      clearTimeout(removalTimer);
      root.classList.remove('logo-loader-enabled');
      overlay.remove();
    };
    overlay.addEventListener('transitionend', event => {
      if (event.target === overlay && event.propertyName === 'opacity') remove();
    }, { once: true });
    // Works even when transitions are disabled or transitionend never fires.
    removalTimer = setTimeout(remove, 500);
  }
  window.LogoLoader = Object.freeze({ finish });

  const image = overlay.querySelector('img');
  if (image) {
    image.addEventListener('error', finish, { once: true });
    if (image.complete && !image.naturalWidth) finish();
  }
  const pageReady = document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise(resolve => window.addEventListener('load', resolve, { once: true }));

  // React signals its first committed render. The HTML overlay lives outside
  // the React root so removing it cannot cause a hydration mismatch.
  const appReady = root.dataset.appReady === 'true'
    ? Promise.resolve()
    : new Promise(resolve => window.addEventListener('codematic:ready', resolve, { once: true }));
  Promise.all([pageReady, Promise.resolve(appReady)])
    .then(finish, finish);
})();
