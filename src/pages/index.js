import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { useIntl } from 'react-intl';
import withOutAuth from 'src/HOC/withOutAuth';
import Banner from '../components/Home/Banner/Banner';
import {
  Exclusive,
  HowItWork,
  StartCreating,
  Pricing,
  Reviews,
  FirstClass,
  Portfolio,
} from '../components/pagesComponent/imports/homePageImports';
import ScrollDown from '../components/ScrollDown';
import WhyVimerse from '../components/Home/WhyVimerse/WhyVimerse';
import SocialHead from '../components/SocialHead';
import {
  BenefitsPlaceholder,
  HowItWorksPlaceholder,
  PricingPlaceholder,
  ReviewsPlaceholder,
} from '../components/pagesComponent/placeholders/homePagePlaceholders';
import { LIGHT_HOUSE } from '../utils/regulars';

function Home({ gps }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const { formatMessage } = useIntl();

  return (
    <>
      <SocialHead
        title={formatMessage({
          defaultMessage: 'Professional Video Editing Service',
          id: '01_meta_main_title_head',
        })}
        description={formatMessage({
          defaultMessage:
            'We offer professional video editing services to content creators. Submit your instructions and we will take care of it - storyline, music and effects. 2-day turnaround & 100% money-back guarantee. Get one free trial',
          id: '01_meta_description',
        })}
        gps={gps}
      />
      <Banner to={['#start-creating']} isGps={gps} />
      <ScrollDown to={['#why-vimerse']} />
      <WhyVimerse />
      <LazyLoad once placeholder={<BenefitsPlaceholder />}>
        <Exclusive />
      </LazyLoad>
      <LazyLoad once placeholder={<HowItWorksPlaceholder />}>
        <HowItWork />
      </LazyLoad>
      <LazyLoad once placeholder={<PricingPlaceholder />}>
        <Pricing setActiveIndex={setActiveIndex} />
      </LazyLoad>

      <LazyLoad once placeholder={<portfolioPlaceholder />}>
        <Portfolio />
      </LazyLoad>

      {/* <LazyLoad once placeholder={<WhatWeDoPlaceholder />}>
        <WhatWeDo />
      </LazyLoad> */}
      <LazyLoad once>
        <FirstClass />
      </LazyLoad>
      <LazyLoad once placeholder={<ReviewsPlaceholder />}>
        <Reviews />
      </LazyLoad>
      <StartCreating activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  );
}

export default withOutAuth(Home);
export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
