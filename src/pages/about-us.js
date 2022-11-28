import React from 'react';
import { Container, Typography } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import { useIntl } from 'react-intl';
import Image from 'next/image';
import s from '../components/pagesComponent/aboutUsData/aboutUs.module.scss';
import SocialHead from '../components/SocialHead';
import useScrollToTop from '../hooks/useScrollToTop';
import Article4 from '../../public/images/aboutUs/dekstop_about_us.png';
import Articlerow1 from '../../public/images/aboutUs/About_usrow1.jpg';
import Articlerow2 from '../../public/images/aboutUs/About_usrow2.jpg';
import { LIGHT_HOUSE } from '../utils/regulars';
import withOutAuth from 'src/HOC/withOutAuth';
const AboutUs = ({ gps }) => {
  useScrollToTop();

  const { formatMessage } = useIntl();
  return (
    <div>
      <SocialHead
        title={formatMessage({
          defaultMessage: 'About us',
          id: '01_meta_about_us_title_head',
        })}
        description={formatMessage({
          defaultMessage: 'About our team',
          id: '01_meta_adout_us_description',
        })}
        gps={gps}
      />
      <Container>
        <div className={s.wrapper}>
          <div className={s.titleAbout}>
            <Typography variant="h1">
              {formatMessage({
                defaultMessage: 'About us',
                id: 'about_us_title',
              })}
            </Typography>
          </div>

          <div className={s.preview}>
            <div className={s.ImageDesktop}>
              <LazyLoad once resize>
                <div className={s.fulleimg}>
                  <Image src={Article4} alt="About us image" placeholder="blur" />
                </div>
              </LazyLoad>
            </div>

            <div className={s.ImageMobile}>
              <LazyLoad once resize>
                <div className={s.fulleimg}>
                  <Image src={Articlerow1} alt="About us image" placeholder="blur" />
                </div>
              </LazyLoad>

              <LazyLoad once resize>
                <div className={s.fulleimg}>
                  <Image src={Articlerow2} alt="About us image" placeholder="blur" />
                </div>
              </LazyLoad>
            </div>
            {/* <div className={s.lazyImageMobile}>
              <Image src={Article4} alt="About us image" placeholder="blur" />
            </div>  */}

            {/* <LazyLoad
              style={{ backgroundImage: 'url(/images/image-placeholder.svg)' }}
              className={s.lazyFull}
              once
              resize
            >
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                src="/images/aboutUs/about_us_orig.jpeg"
                alt="About us image"
                placeholder
              />
            </LazyLoad> */}
            {/* <LazyLoad
              style={{ backgroundImage: 'url(/images/image-placeholder.svg)' }}
              className={s.lazyDesk}
              once
              resize
            >
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                src="/images/aboutUs/about_us_orig.jpeg"
                alt="About us image"
                placeholder
              />
            </LazyLoad> */}
          </div>

          {/* <div className={s.firstBlock}>
            <Typography className={s.subtitleFirst} variant="h3" component="p">
              <b>
                {formatMessage({
                  defaultMessage: `Our portfolio`,
                  id: 'about_us_our_portfolio',
                })}
              </b>
            </Typography>
          </div>
          {!isGoogleSpeedTest ? (
            <div className={s.top}>
              <div className={s.desktopImage}>
                <YouTube className={s.video} width="100%" video="XoXnSY1w8GM" autoplay={false} playsInline />
              </div>
            </div>
          ) : (
            <div className={s.backForPS} />
          )}
           */}

          <div className={s.container}>
            <div className={s.secondBlock}>
              <Typography className={s.subtitleThird} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: `An idea was born...`,
                    id: 'about_us_how_it_started',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `With more than 15 years of global investing experience, Hyunjae Lee was ready to embark on an adventure of his own and hoped to create a brand dedicated to solving problems faced by everyday creators and small businesses. Throughout the pandemic, he found himself picking up new hobbies, from cooking to home improvement, always with the aid of YouTube.`,
                  id: 'about_us_how_it_started_text',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Intrigued by the power and versatility of video, Hyunjae began speaking to content creators to learn about their process and where they continually fall short, eventually discovering the bottleneck of the video industry – editing. Most creators outsource or spend hours of their own time attempting to master the skill without much luck. And so Hyunjae began Vimerse, an all-in-one editing platform to solve the needs of the creators he learned so much from. `,
                  id: 'about_us_how_it_started_text_2',
                })}
              </Typography>
            </div>

            <LazyLoad once>
              <div className={s.thirdBlock}>
                <Typography className={s.subtitleSecond} variant="h3">
                  <b>
                    {formatMessage({
                      defaultMessage: `Our mission`,
                      id: 'about_us_our_mission',
                    })}
                  </b>
                </Typography>
                <Typography className={s.textSecond} variant="body1">
                  {formatMessage({
                    defaultMessage: `Vimerse serves as the primary partner for content creators by providing high-quality editing that is affordable and on time. Our services reduce stress, save valuable time for creators, and increase views and watch time by their audience. Vimerse is here to help you create captivating content through exceptional storytelling, graphics, enhanced audio and visual, and effective delivery of emotions.`,
                    id: 'about_us_our_mission_text',
                  })}
                </Typography>
              </div>

              <div className={s.fourthBlock}>
                <Typography className={s.subtitleSecond} variant="h3">
                  <b>
                    {formatMessage({
                      defaultMessage: `Our approach`,
                      id: 'about_us_our_approach',
                    })}
                  </b>
                </Typography>
                <Typography className={s.textSecond} variant="body1">
                  {formatMessage({
                    defaultMessage: `Our unique approach to video editing lies in our network of editors globally. Our extensive team of Managing Editors recruits the best-in-class editors from their area, allowing us to hire highly talented editors from everywhere. `,
                    id: 'about_us_our_approach_text_1',
                  })}
                </Typography>
              </div>

              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Through this setup, we are able to offer extremely competitive pricing while keeping our operations running 24 hours a day, 7 days a week. `,
                  id: 'about_us_our_approach_text_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `All editors in our network meet a minimum standard of quality and experience level and undergo Vimerse in-house training. Each editor has shown the ability to increase watch time, increase views, and tell the story in a more engaging manner. `,
                  id: 'about_us_our_approach_text_3',
                })}
              </Typography>

              <div className={s.fourthBlock}>
                <Typography className={s.subtitleSecond} variant="h3">
                  <b>
                    {formatMessage({
                      defaultMessage: `Our differentiations`,
                      id: 'about_us_our_differentiations',
                    })}
                  </b>
                </Typography>
                <Typography className={s.textSecond} variant="body1">
                  {formatMessage({
                    defaultMessage: `If you were to approach video editing on your own or through an outsourced resource, you would likely be up against higher costs and longer turnarounds, as well as a lower quality product. If you go it alone, you could be looking at five months or longer to master video editing software. To outsource, you would need at least a week to find a freelancer and may battle consistency or communication issues. `,
                    id: 'about_us_our_differentiations_text_1',
                  })}
                </Typography>

                <Typography className={s.textFourth} variant="body1">
                  {formatMessage({
                    defaultMessage: `With Vimerse, your order is submitted in just 5 minutes. Once your order is received, we can produce the final product in just two calendar days. And our prices are always fair and often beat freelance rates due to our extensive network. `,
                    id: 'about_us_our_differentiations_text_2',
                  })}
                </Typography>
                <Typography className={s.textFourth} variant="body1">
                  {formatMessage({
                    defaultMessage: `We have refined the ordering process so that you can submit your raw footage and instructions quickly and accurately. Our highly trained editors will apply trendy editing techniques while following your instructions. We save your time and help you stand out with your video content. `,
                    id: 'about_us_our_differentiations_text_3',
                  })}
                </Typography>
              </div>
            </LazyLoad>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default withOutAuth(AboutUs);



export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
