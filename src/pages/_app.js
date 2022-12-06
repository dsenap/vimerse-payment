import React, { useEffect, useMemo, useState } from 'react';
import '../styles/globals.scss';
import { useRouter } from 'next/router';

import { IntlProvider } from 'react-intl';
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withUserAgent, useUserAgent } from 'next-useragent';
import { SnackbarProvider } from 'notistack';
import ReactGA from 'react-ga';
import ReactGA4 from 'react-ga4';
import Script from 'next/script';
import English from '../../content/locales/en.json';
import Layout from '../components/Layout';
import theme from '../theme/theme';
import MyContext from '../utils/context';
import { LIGHT_HOUSE } from '../utils/regulars';
import { SnackBarProvider } from '../contexts/SnackBarContext';
import { AuthProvider } from '../contexts/AuthContext';

ReactGA.initialize('UA-203116616-1');
ReactGA4.initialize('G-7M9RFN404S');
// if (typeof window !== 'undefined') {
// axios.defaults.headers.common = {
//   "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,

// };
// }

function MyApp(props) {
  const { Component, pageProps, ua } = props;
  const { locale } = useRouter();
  const router = useRouter();
  const [isGoogleSpeedTest, setGoogleSpeedTest] = useState(true);

  const nameProject = 'Vimerse';

  const [shortLocale] = locale ? locale.split('-') : ['en'];
  const getLayout = Component.getLayout ?? ((page) => page);
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    // addJWTInterceptor(localStorage.getItem("accessToken"))
  }, []);

  useEffect(() => {
    setGoogleSpeedTest(/Speed/.test(ua.source) || /Lighthouse/.test(ua.source));
  }, [ua]);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      // REACTGA
      // Send pageview with a custom path
      ReactGA.pageview(url);
      ReactGA4.send('pageview');

      console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
    };

    router?.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router?.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const messages = useMemo(() => {
    switch (shortLocale) {
      case 'en':
        return English;
      default:
        return English;
    }
  }, [shortLocale]);

  const handleError = useMemo(() => {
    // eslint-disable-next-line no-unused-expressions
    () => null;
  }, []);
  const { hasLocalLayout } = Component;
  return (
    <>
      <title>{nameProject}</title>
      <Script src="//code.tidio.co/1pwxgmdaxsag99nwmzmmx1qzkz7zk5ao.js" strategy="lazyOnload" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />

      <IntlProvider locale={shortLocale} messages={messages} onError={handleError}>
        <MuiThemeProvider theme={theme}>
          <MyContext.Provider value={{ isGoogleSpeedTest }}>
            <SnackBarProvider>
              <SnackbarProvider autoHideDuration={3000}>
                <AuthProvider>
                  {hasLocalLayout ? (
                    getLayout(
                      <>
                        <CssBaseline />
                        <Component {...pageProps} />
                      </>
                    )
                  ) : (
                    <Layout isGps={pageProps.gps}>
                      <CssBaseline />
                      <Component {...pageProps} />
                    </Layout>
                  )}
                </AuthProvider>
              </SnackbarProvider>
            </SnackBarProvider>
          </MyContext.Provider>
        </MuiThemeProvider>
      </IntlProvider>
    </>
  );
}

export function getServerSideProps(context) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ua = useUserAgent(context.req.headers['user-agent']);

  return {
    props: { ua, useragent: ua.source, gps: context?.req?.headers['user-agent'].match(LIGHT_HOUSE) },
  };
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withUserAgent(MyApp);
