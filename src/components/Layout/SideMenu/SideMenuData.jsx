import React from 'react';
import Articles from '../../../static/svg/mobile-menu-icon/article.svg';
import TIC from '../../../static/svg/mobile-menu-icon/terms.svg';
import Privacy from '../../../static/svg/mobile-menu-icon/privacy.svg';
import HowItWork from '../../../static/svg/mobile-menu-icon/howItWork.svg';
import AboutUs from '../../../static/svg/mobile-menu-icon/about.svg';
import Pricing from '../../../static/svg/mobile-menu-icon/Pricing.svg';
import BookaCall from '../../../static/svg/mobile-menu-icon/bookcall.svg';
import WhatWeDo from '../../../static/svg/mobile-menu-icon/whatWeDo.svg';
import Youtube from '../../../static/svg/mobile-menu-icon/youtube.svg';
import Facebook from '../../../static/svg/mobile-menu-icon/facebook.svg';
import Twitter from '../../../static/svg/mobile-menu-icon/twitter.svg';
import Instagram from '../../../static/svg/mobile-menu-icon/instagram.svg';
import Tiktok from '../../../static/svg/mobile-menu-icon/tiktok.svg';
import FAQ from '../../../static/svg/mobile-menu-icon/faq.svg';

export const sideMenuDataContainer = [
  {
    href: '/portfolio',
    pathname: '/portfolio',
    defaultMessage: 'Portfolio',
    defaultMessageId: 'side_menu_portfolio_string',
    listImage: <WhatWeDo />,
    text: {
      defaultMessage: 'Portfolio',
      id: 'side_menu_portfolio_string',
    }, 
  },
  {
    href: '/about-us',
    pathname: '/about-us',
    defaultMessage: 'About Us',
    defaultMessageId: 'side_menu_about_us_string',
    listImage: <AboutUs />,
    text: {
      defaultMessage: 'About Us',
      id: 'side_menu_about_us_string',
    },
  }, 
  
  {
    href: '/articles',
    pathname: '/articles',
    defaultMessage: 'Articles',
    defaultMessageId: 'side_menu_articles_string',
    listImage: <Articles />,
    text: {
      defaultMessage: 'Articles',
      id: 'side_menu_articles_string',
    },
  },
  {
    href: '/faq',
    pathname: '/faq',
    defaultMessage: 'FAQ',
    defaultMessageId: 'side_menu_faq_string',
    listImage: <FAQ />,
    text: {
      defaultMessage: 'FAQ',
      id: 'side_menu_faq_string',
    },
  },
  {
    href: '/terms-and-conditions',
    pathname: '/terms-and-conditions',
    defaultMessage: 'Terms of use',
    defaultMessageId: 'side_menu_terms_string',
    listImage: <TIC />,
    text: {
      defaultMessage: 'Terms of use',
      id: 'side_menu_terms_string',
    },
  },
  {
    href: '/privacy-policy',
    pathname: '/privacy-policy',
    defaultMessage: 'Privacy policy',
    defaultMessageId: 'side_menu_privacy_string',
    listImage: <Privacy />,
    text: {
      defaultMessage: 'Privacy policy',
      id: 'side_menu_privacy_string',
    },
  },
];

export const sideMenuDataLinks = [
 
  {
    
    to: 'how-it-works',
    duration: 1000,
    listLinkImage: <HowItWork />,
    textLink: {
      defaultMessage: 'How It Works',
      id: 'side_menu_how_it_work_string',
    },
    target: '#how-it-works',
  },
  {
    to: 'pricing',
    duration: 1200,
    listLinkImage: <Pricing />,
    textLink: {
      defaultMessage: 'Pricing',
      id: 'side_menu_pricing_string',
    },
    target: '#pricing',
  },
  /*{
    to: 'what-we-do',
    duration: 1400,
    listLinkImage: <WhatWeDo />,
    textLink: {
      defaultMessage: 'What we do',
      id: 'side_menu_what_we_do_string',
    },
    target: '#what-we-do',
  },*/
];

export const sideMenuSocialNetworkLinks = [
  {
    href: 'https://www.youtube.com/channel/UCtQYASZFsB3CRcGMcNKmRJQ',
    listSocialLinkImage: <Youtube />,
    textSocialLink: {
      defaultMessage: 'YouTube',
      id: 'side_menu_YouTube_string',
    },
  },
  /*{
    href: 'https://www.facebook.com/Vimerse-107293818225081',
    listSocialLinkImage: <Facebook />,
    textSocialLink: {
      defaultMessage: 'Facebook',
      id: 'side_menu_facebook_string',
    },
  },*/
  {
    href: 'https://twitter.com/vimerse_media',
    listSocialLinkImage: <Twitter />,
    textSocialLink: {
      defaultMessage: 'Twitter',
      id: 'side_menu_twitter_string',
    },
  },
  {
    href: 'https://www.instagram.com/vimerse_media/',
    listSocialLinkImage: <Instagram />,
    textSocialLink: {
      defaultMessage: 'Instagram',
      id: 'side_menu_instagram_string',
    },
  },
  {
    href: 'https://www.tiktok.com/@vimerse_media',
    listSocialLinkImage: <Tiktok />,
    textSocialLink: {
      defaultMessage: 'Tiktok',
      id: 'side_menu_instagram_string',
    },
  },
];
