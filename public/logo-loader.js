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
  let revealTimer;
  function finish() {
    if (finished) return;
    finished = true;
    clearTimeout(window.logoLoaderSafetyTimer);
    clearTimeout(revealTimer);
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
    removalTimer = setTimeout(remove, 600);
  }
  window.LogoLoader = Object.freeze({ finish });

  for (const image of overlay.querySelectorAll('img')) {
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
  // Show the complete requested brand reveal once per full-document entry.
  // Reduced-motion users see the static logo and bypass the cinematic delay.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealDuration = reducedMotion ? 0 : 4100;
  const startedAt = window.logoLoaderStartedAt || Date.now();
  Promise.all([pageReady, appReady]).then(() => {
    if (!finished) revealTimer = setTimeout(finish, Math.max(0, revealDuration - (Date.now() - startedAt)));
  }, finish);
})();
