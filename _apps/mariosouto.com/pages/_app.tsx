import ThemeProvider from '@src/theme/ThemeProvider';
import GlobalStyle from '@src/theme/GlobalStyle';
import { AppProps } from 'next/app';
import DarkModeProvider from '@src/infra/DarkModeSwitcher/DarkModeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider />
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
