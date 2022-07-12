import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* NextJS With Flutter */}
        <style>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }
        body {
          display: flex;
          width: 100%;
          font: 14px sans-serif;
          color: initial !important;
        }
        .nextjs-active {
          user-select: initial !important;
          touch-action: initial !important;
        }
        .nextjs-active #__next {
          opacity: 1;
          pointer-events: all;
          visibility: initial;
        }

        #__next {
          position: relative;
          flex: 1;
          z-index: 1;
          background-color: #FFFFFF;
          opacity: 0;
          visibility: hidden;
        }
        `}</style>
        <script dangerouslySetInnerHTML={{
          __html: `
            setInterval(function () {
              document.body.classList.toggle('nextjs-active')
            }, 5000);
          `
        }} />
        {/* ./NextJS With Flutter */}
        {/* Flutter Stuff */}
        <base href="/" />
        <script src="./flutter.js" defer></script>
        <script dangerouslySetInnerHTML={{
          __html: `
          var serviceWorkerVersion = '2081245927';

            window.addEventListener("load", function(ev) {
              // Download main.dart.js
              _flutter.loader.loadEntrypoint({
                serviceWorker: {
                  serviceWorkerVersion: serviceWorkerVersion,
                }
              }).then(function(engineInitializer) {
                return engineInitializer.initializeEngine();
              }).then(function(appRunner) {
                return appRunner.runApp();
              });
            });
        `}} />
        {/* ./Flutter Stuff */}
      </Head>
      <body className="nextjs-active">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
