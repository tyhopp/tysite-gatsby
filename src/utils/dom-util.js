function enableGetTemplateMethod(template) {
  document.getTemplate = template => document.createRange().createContextualFragment(template).firstElementChild.content;
}

function enableDarkModeFlag() {
  const colorSchemePreference = window.matchMedia('(prefers-color-scheme: dark)');
  const html = document.querySelector('html');
  html.dataset.theme = colorSchemePreference.matches ? 'dark' : 'light';
  colorSchemePreference.addListener(e => {
    html.dataset.theme = e.matches ? 'dark' : 'light';
  });
}

function enablePushStateNavigation() {
  document.addEventListener('click', e => {
    const anchor = e.target.closest('a');
    if (anchor && anchor.target !== '_blank') {
      e.preventDefault();
      const state = anchor.state
        ? JSON.parse(anchor.state)
        : {};
      window.___navigate(anchor.href, state); // Use Gatsby's wrapper of Reach Router
    }
  });
}

export {
  enableGetTemplateMethod,
  enableDarkModeFlag,
  enablePushStateNavigation
}