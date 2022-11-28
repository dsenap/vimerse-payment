import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { ArrowForwardIos } from '@material-ui/icons';
import { useRouter } from 'next/router';
import styles from './Banner.module.scss';
import Button from '../../Form/Button';
import dynamic from 'next/dynamic'
const VideoSection = dynamic(() => import('./VideoSection'))
const Banner = ({ to, isGps }) => {
  const [isTimeoutForSpeedLoadVideo, setIsTimeoutForSpeedLoadVideo] = useState(false);
  const [_email, setEmail] = useState('Email Address');
  const [emailRequired, setEmailRequired] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsTimeoutForSpeedLoadVideo(true);
    }, 650);
  }, []);

  const { formatMessage } = useIntl();

  // const handleClick = () => {
  //   const elements = to.map((item) => document.querySelector(item)).filter((item) => Boolean(item));

  //   if (elements[0]) {
  //     ReactScroll.animateScroll.scrollTo(elements[0].offsetTop, {
  //       duration: 2600,
  //       smooth: true,
  //     });
  //   }
  // };

  const handleSignup = (e) => {
    e.preventDefault()
    const isValid = _email.toString().toLowerCase().match(/\S+@\S+\.\S+/)
    if (!!isValid) {
      router.push({
        pathname: '/signup',
        query: { email: _email }
      });

    } else {
      setEmailRequired(true);
    }
  }

  return (
    <div className={styles.wrapper} itemScope itemType="https://schema.org/Article">
      <div className={styles.blur} />
      <div className={styles.videoWrapper}>
        {isTimeoutForSpeedLoadVideo && (
          <VideoSection/>
        )}
      </div>
      <div className={styles.preview}>
        {/* <div className={styles.lazyImageMobile}>
          <Image itemProp="image" src={Banner1} alt="Banner image" placeholder="blur" />
        </div>
        <LazyLoad once resize>
          <div className={styles.lazyImageTablet}>
            <Image itemProp="image" src={Banner2} alt="Banner image" placeholder="blur" />
          </div>
        </LazyLoad> */}
      </div>
      <Container className={styles.mainContainer}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <Typography itemProp="publisher" variant="h1">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Fast video editing <br /> at a price you'll love
            </Typography>
            <meta itemProp="name" content="vimerse" />
            <meta itemProp="author" content="vimerse.com" />
            <meta itemProp="datePublished" content="2021-08-09" />
            <meta itemProp="headline" content="vimerse" />
            <Typography variant="h5" component="p" itemProp="description">
              {formatMessage({
                defaultMessage: `Our team of professional video editors will take care of it. So you have more time to immerse yourself in
              creativity`,
                id: 'main_subtitle_banner',
              })}
            </Typography>
          </div>

          <div className={styles.buttonWrapper}>
            <form onSubmit={(e) => handleSignup(e)} autoComplete="off">
              <div>
                <input
                  type="text"
                  value={_email}
                  className={styles.getStartedTextFld}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailRequired)
                      setEmailRequired(false);
                  }}
                  onFocus={() => {
                    if (_email == 'Email Address')
                      setEmail('');
                    if (emailRequired)
                      setEmailRequired(false);
                  }}
                  style={{ border: emailRequired ? '1px solid red' : 'none' }}
                />

                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  size="large"
                  onClick={(e) => handleSignup(e)}
                  className={styles.getStartedBtn}
                >
                  Get Started
                  <ArrowForwardIos className={styles.getStartedBtnArrow} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
