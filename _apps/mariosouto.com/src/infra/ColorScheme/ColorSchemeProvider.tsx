import React from 'react';

type ColorSchemes = 'light' | 'dark' | '';
export function useColorScheme() {
  const [colorScheme, setColorScheme] = React.useState<ColorSchemes>('');

  function storeColorScheme() {
    console.log('Must store new value in localStorage');
    const colorScheme = localStorage.getItem('theme') as ColorSchemes;
    console.log(`New ColorScheme ${colorScheme}`)
    setColorScheme(colorScheme);
  }

  React.useEffect(() => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addEventListener('change', storeColorScheme);
    return () => darkQuery.removeEventListener('change', storeColorScheme);
  }, []);

  React.useEffect(() => {
    const activeColorScheme = globalThis.localStorage?.getItem('theme') as ColorSchemes;
    setColorScheme(activeColorScheme);
  }, [setColorScheme]);

  React.useEffect(() => {
    if(colorScheme) globalThis.__setPreferredTheme(colorScheme);
  }, [colorScheme]);

  return {
    colorScheme,
    setColorScheme,
  };
}

export function ColorSchemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          window.__onThemeChange = function() {};
          function setTheme(newTheme) {
            window.__theme = newTheme;
            preferredTheme = newTheme;
            document.body.className = newTheme;
            window.__onThemeChange(newTheme);
          }

          var preferredTheme;
          try {
            preferredTheme = localStorage.getItem('theme');
          } catch (err) { }

          window.__setPreferredTheme = function(newTheme) {
            setTheme(newTheme);
            try {
              localStorage.setItem('theme', newTheme);
            } catch (err) {}
          }

          var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
          darkQuery.addEventListener('change', function(e) {
            window.__setPreferredTheme(e.matches ? 'dark' : 'light')
          });
          setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
        })();
      `
      }} />
  )
}
