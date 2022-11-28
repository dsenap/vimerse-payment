import React from 'react';
import Head from 'next/head';
import { useIntl } from 'react-intl';

const SocialHead = ({ title, description, keywords, gps = null, preloadMobileImgSrc }) => {
  const siteUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  const [isLoadGTM, setIsLoadGTM] = React.useState(false);

  const { formatMessage } = useIntl();

  React.useEffect(() => {
    let timeout = null;

    if (!isLoadGTM) {
      timeout = window.setTimeout(() => setIsLoadGTM(true), 500);
    }

    return () => window.clearTimeout(timeout);
  }, []);

  const seoTitle = formatMessage({
    defaultMessage: `Professional Video Editing Service | Video Editor Online  - Vimerse`,
    id: '01_meta_title',
  });
  const mainTitle = `${title} | Online Video Editor - Vimerse `;

  return (
    <Head>
      <title>{mainTitle}</title>
      <meta name="og:title" content={seoTitle} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content="/images/social-network.png" />
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="Vimerse" />
      <meta name="twitter:site" content={siteUrl} />
      <meta name="twitter:domain" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/social-network.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="application-name" content={seoTitle} />
      <meta
        name="keywords"
        content={
          keywords ||
          formatMessage({
            defaultMessage: `Video editing, video editing service, video editor, Video editing online, video editing service online, video editor online, Vimerse`,
            id: '01_meta_keywords',
          })
        }
      />

      {process.env.NEXT_PUBLIC_SERVER === 'prod' && !gps && isLoadGTM && (
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-${process.env.NEXT_PUBLIC_GTM}');`,
          }}
        />
      )}

      {!gps && (
        <>
          <link
            rel="preload"
            href="/font/inter-v3-latin-regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/font/inter-v3-latin-500.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/font/inter-v3-latin-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/font/inter-v3-latin-700.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </>
      )}

      {gps && <link rel="preload" as="image" href={preloadMobileImgSrc} />}

      <style>{`${gps ? '* {font-family: sans-serif !important}' : ''}`}</style>
    </Head>
  );
};

export default SocialHead;
