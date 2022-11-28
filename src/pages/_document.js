import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" as="image" href="/favicon-32x32.png" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                "@font-face{font-family: 'Inter'; src: local('Inter Regular'), local('Inter-Regular'), url('/font/inter-v3-latin-regular.woff2') format('woff2'), url('/font/inter-v3-latin-regular.woff') format('woff'), url('/font/inter-v3-latin-regular.ttf') format('truetype'); font-weight: normal; font-style: normal; font-display: swap;}@font-face{font-family: 'Inter'; src: local('Inter Light BETA'), local('Inter-LightBETA'), url('/font/inter-v3-latin-300.woff2') format('woff2'), url('/font/inter-v3-latin-300.woff') format('woff'), url('/font/inter-v3-latin-300.ttf') format('truetype'); font-weight: 300; font-style: normal; font-display: swap;}@font-face{font-family: 'Inter'; src: local('Inter Semi Bold'), local('Inter-SemiBold'), url('/font/inter-v3-latin-600.woff2') format('woff2'), url('/font/inter-v3-latin-600.woff') format('woff'), url('/font/inter-v3-latin-600.ttf') format('truetype'); font-weight: 600; font-style: normal; font-display: swap;}@font-face{font-family: 'Inter'; src: local('Inter Bold'), local('Inter-Bold'), url('/font/inter-v3-latin-700.woff2') format('woff2'), url('/font/inter-v3-latin-700.woff') format('woff'), url('/font/inter-v3-latin-700.ttf') format('truetype'); font-weight: bold; font-style: normal; font-display: swap;}@font-face{font-family: 'Inter'; src: local('Inter Medium'), local('Inter-Medium'), url('/font/inter-v3-latin-500.woff2') format('woff2'), url('/font/inter-v3-latin-500.woff') format('woff'), url('/font/inter-v3-latin-500.ttf') format('truetype'); font-weight: 500; font-style: normal; font-display: swap;}",
            }}
          />

<script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHRCQH5');`}}></script>
        </Head>
        <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NHRCQH5"
height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
