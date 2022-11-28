import React from 'react';
import Youtube from '../../../static/svg/mobile-menu-icon/youtube.svg';
import Twitter from '../../../static/svg/mobile-menu-icon/twitter.svg';
import Instagram from '../../../static/svg/mobile-menu-icon/instagram.svg';
import Tiktok from '../../../static/svg/mobile-menu-icon/tiktok.svg';
import Storyblocks from '../../../static/svg/storyblocks.svg';
import FrameIo from '../../../static/svg/frameIo.svg';
import Adobe from '../../../static/svg/adobe.svg';
import Finalcut from '../../../static/svg/finalcut-f1.svg';
import Artlist from '../../../static/svg/artlist-f1.svg';

export const firstBlockLinks = [
  {
    href: '/#how-it-works',
    text: { defaultMessage: 'How It Works', id: 'footer_how_it_work' },
    target: '#how-it-works',
  },
  {
    href: '/#pricing',
    text: { defaultMessage: 'Pricing', id: 'footer_pricing' },
    target: '#pricing',
  },
  {
    href: '/portfolio',
    text: { defaultMessage: 'Portfolio', id: 'footer_what_we_do' },
    target: 'portfolio',
  },
  {
    href: '/bookcall',
    text: { defaultMessage: 'Book a Call', id: 'footer_what_we_do' },
    target: 'bookcall',
  },
  {
    href: '/about-us',
    text: { defaultMessage: 'About Us', id: 'footer_about_us' },
    target: '',
  },
];

export const secondBlockLinks = [
  {
    href: '/articles',
    text: {
      defaultMessage: 'Articles',
      id: 'footer_articles',
    },
  },
  {
    href: '/faq',
    text: {
      defaultMessage: 'FAQ',
      id: 'footer_faq',
    },
  },
  {
    href: '/terms-and-conditions',
    text: {
      defaultMessage: 'Terms of use',
      id: 'footer_terms',
    },
  },
  {
    href: '/privacy-policy',
    text: {
      defaultMessage: 'Privacy policy',
      id: 'footer_privacy',
    },
  },
];

export const socialNetworkLinks = [
  {
    href: 'https://www.youtube.com/channel/UCtQYASZFsB3CRcGMcNKmRJQ',
    socialImage: <Youtube />,
    socialText: {
      defaultMessage: 'Youtube',
      id: 'footer_link_youtube',
    },
  },
  {
    href: 'https://twitter.com/vimerse_media',
    socialImage: <Twitter />,
    socialText: {
      defaultMessage: 'Twitter',
      id: 'footer_link_twitter',
    },
  },
  {
    href: 'https://www.instagram.com/vimerse_media/',
    socialImage: <Instagram />,
    socialText: {
      defaultMessage: 'Instagram',
      id: 'footer_link_instagram',
    },
  },
  // {
  //   href: 'https://www.facebook.com/Vimerse-107293818225081',
  //   socialImage: <Facebook />,
  //   socialText: {
  //     defaultMessage: 'Facebook',
  //     id: 'footer_link_facebook',
  //   },
  // },
  {
    href: 'https://www.tiktok.com/@vimerse_media',
    socialImage: <Tiktok />,
    socialText: {
      defaultMessage: 'Tiktok',
      id: 'footer_link_tiktok',
    },
  },
];

export const technologiesLinks = [
  {
    href: 'https://www.storyblocks.com/',
    technologiesImage: <Storyblocks />,
  },
  {
    href: 'https://www.frame.io/',
    technologiesImage: <FrameIo />,
  },
  {
    href: 'https://www.adobe.com/products/premiere.html',
    technologiesImage: <Adobe />,
  },
  {
    href: 'https://www.apple.com/final-cut-pro/',
    technologiesImage: <Finalcut />,
  },
  {
    href: 'https://artlist.io/',
    technologiesImage: <Artlist />,
  },
];
