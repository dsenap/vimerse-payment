const isProd = process.env.NODE_ENV === 'dev';

module.exports = {
  images: {
    domains: ['miro.medium.com'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  assetPrefix: isProd ? '' : '',
};
