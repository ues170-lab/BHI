(function () {
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  const stored = localStorage.getItem('bhi-theme');
  let theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function icon(mode) {
    return mode === 'dark'
      ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path></svg>'
      : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  }

  root.setAttribute('data-theme', theme);

  if (btn) {
    btn.innerHTML = icon(theme);
    btn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      btn.innerHTML = icon(theme);
      localStorage.setItem('bhi-theme', theme);
    });
  }
})();
