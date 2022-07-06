import ThemeProvider from '@src/theme/ThemeProvider';
import GlobalStyle from '@src/theme/GlobalStyle';
import Script from 'next/script';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Dark Mode Approach */}
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: /*js*/`
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
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
