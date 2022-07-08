import React from 'react';

type ColorSchemes = 'light' | 'dark' | '';
export function useColorScheme() {
  const [colorScheme, setColorScheme] = React.useState<ColorSchemes>('');

  function storeColorScheme() {
    const colorScheme = localStorage.getItem('COLOR_SCHEME_KEY') as ColorSchemes;
    setColorScheme(colorScheme);
  }

  React.useEffect(() => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkQuery.addEventListener('change', storeColorScheme);
    return () => darkQuery.removeEventListener('change', storeColorScheme);
  }, []);

  React.useEffect(() => {
    const activeColorScheme = globalThis.localStorage?.getItem('COLOR_SCHEME_KEY') as ColorSchemes;
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
            preferredTheme = localStorage.getItem('COLOR_SCHEME_KEY');
          } catch (err) { }

          window.__setPreferredTheme = function(newTheme) {
            setTheme(newTheme);
            try {
              localStorage.setItem('COLOR_SCHEME_KEY', newTheme);
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
