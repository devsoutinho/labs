import Script from 'next/script';

export default function DarkModeProvider() {
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
          darkQuery.addListener(function(e) {
            window.__setPreferredTheme(e.matches ? 'dark' : 'light')
          });

          setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
        })();
      `
      }} />
  )
}
