import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import ThemeProvider from '@src/theme/ThemeProvider';
import GlobalStyle from '@src/theme/GlobalStyle';
import { AppProps } from 'next/app';
import DarkModeProvider from '@src/infra/DarkModeSwitcher/DarkModeProvider';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import createEmotionCache from '../src/createEmotionCache';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <DarkModeProvider />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <MaterialThemeProvider theme={theme}>
          <ThemeProvider>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </MaterialThemeProvider>
      </CacheProvider>
    </>
  )
}
