import React, { useCallback } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import s from '../components/pagesComponent/articlesData/how-to-choose.module.scss';
import Button from '../components/Form/Button';
import SocialHead from '../components/SocialHead';
import { LazyImage } from '../components/LazyImage';
import useScrollToTop from '../hooks/useScrollToTop';
import Article8Image from '../../public/images/moneyonYoutube/make_money_on_youtube.jpg';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';

const Articles8 = ({ gps }) => {
  useScrollToTop();

  const router = useRouter();
  const { formatMessage } = useIntl();

  const handleClick = useCallback(() => {
    router.push('/articles');
  }, [router]);

  return (
    <div>
      <SocialHead
        title={'How to Successfully Automate a YouTube Channel'}
        description={'How to Successfully Automate a YouTube Channel'}
        keywords={'How to Successfully Automate a YouTube Channel'}
        gps={gps}
        preloadMobileImgSrc="/images/moneyonYoutube/make_money_on_youtube_360.jpg"
      />
      <Container>
        <div className={s.wrapper}>
          <div className={s.buttonTop}>
            <Button
              variant="text"
              disableRipper
              disableFocusRipple
              startIcon={arrowBackButton}
              className="backBtn"
              onClick={handleClick}
            >
              {formatMessage({
                defaultMessage: 'Go back',
                id: 'best_online_video_button_text_1',
              })}
            </Button>
          </div>
          <div className={s.title}>
            <Typography variant="h1">
              How to Successfully Automate a YouTube Channel — 3 Simple Steps from a Team of Professional Video Editors
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'best_online_video_YT_author',
            })}
            dateUpdate={'Updated Oct 3, 2022'}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="https://miro.medium.com/max/750/1*_kGucyZIa_2tq5YWd5ZqXw.jpeg"
                alt="Image of the best online video editor"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of the best online video editor"
                src="https://miro.medium.com/max/1400/1*_kGucyZIa_2tq5YWd5ZqXw.jpeg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of the best online video editor"
                src="https://miro.medium.com/max/1400/1*_kGucyZIa_2tq5YWd5ZqXw.jpeg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article8Image} alt="Image of the best online video editor" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div>
              <Typography className={s.textFirst} variant="body1">
                You might have heard about home automation or email marketing automation.
                <b> These days, we hear a lot about YouTube automation.</b> But is this really automation? Let’s walk
                through what it really needs to “automate” your YouTube channel. As a team of professional editors, we
                have worked on some of these channels. Because we also work with large established creators, we can tell
                you what it takes to build a successful channel, whether it is automated or not.
              </Typography>

              <p>
                <Typography className={s.textFirst} variant="body1">
                  <b>First, you need to find the right niche topic.</b> The topic will meet two conditions; interesting
                  to a wide audience and friendly to advertisers. And these two conditions are somewhat contradictory.
                  If something appeals to a wide audience, it instantly means that your audiences are spread out. Then,
                  your channel is not appealing to advertisers who are looking for a targeted audience for the highest
                  return on investment. Also, you will have to do some research about the topic to make a quality video.
                </Typography>
              </p>
              <p>
                <Typography className={s.textFirst} variant="body1">
                  This is where it gets interesting. Large established content creators that we work with are really
                  experts in their topics. A fashion YouTuber can talk about this season’s fashion trend for 30 minutes
                  non-stop. A basketball YouTuber delivers a thorough analysis of a player with over 100 clips to back
                  up the analysis. Yes, there are some lifestyle vloggers too but it took them years to build their
                  audience. Hence, you either need to spend hours researching the topic or find an expert on the topic
                  to write a script for you.
                </Typography>
              </p>
              <p>
                <Typography className={s.textFirst} variant="body1">
                  <b>Second, you need to find great video editors and thumbnail designers.</b> While our team will be
                  more than willing to help you, here are some tips to find great video editors and thumbnail designers.
                  Ask them to send you the most complex work or most successful YouTube videos they worked on. And make
                  sure to test them with sample projects.
                  <b> Many freelancers send you sample videos/images that are not actually done by them!</b> We even had
                  an incident where someone else took our portfolio and presented it to our client as if he/she has done
                  it.
                </Typography>
              </p>
              <p>
                <Typography className={s.textFirst} variant="body1">
                  <b>Working with a team of editors is certainly better than working with a freelancer.</b> You can
                  explore different editing styles in the early stage to see what works best for your channel. It can be
                  even better than a full-time editor because there is little downtime. Once the team gets your style,
                  you can really enhance your productivity. And if the team offers other services such as scripting or
                  clip collection, it will save you so much time.
                </Typography>
              </p>

              <p>
                <Typography className={s.textFirst} variant="body1">
                  <b> Third, you need some capital!</b> And this is not sufficiently emphasized by the YouTube
                  automation consultants. Established content creators built their channels over the course of 5–10
                  years. Although monetization could be achieved relatively soon, the amount of ad revenue will be
                  modest in the beginning. In order for you to stay in the game, you need enough capital. Each video
                  will require $100–200 to produce. You will have to upload at least once a week. If it would take 3
                  years for the channel to take off, the initial investment would be $15,000–30,000.
                </Typography>
              </p>

              <p>
                <Typography className={s.textFirst} variant="body1">
                  While the amount of investment may throw you off, YouTube automation could work beautifully. If you
                  selected an attractive category with high revenue per mile, you can easily recoup the investment in
                  three years. For instance, a finance channel with average views of 50,000 can make $500 per video at
                  $10 Revenue Per Mile (RPM). It means that you can make $40,000 of profit ( = $50,000 ad revenue —
                  $10,000 production cost) with 100 videos. Besides, when each video becomes even slightly profitable,
                  any additional video will increase your profit.
                  <b>
                    When you are starting a business, it is important to choose one that has unlimited upside. And
                    YouTube automation can certainly be the one.
                  </b>
                </Typography>
              </p>
              <p>
                <Typography className={s.textFirst} variant="body1">
                  Hopefully, you can choose a topic that you are passionate about. Even if the process can be
                  “automated”, it does not mean that your content should be generic. It has to be an outcome of
                  creativity and expertise. Because it could take a while for the YouTube algorithm to pick up your
                  video, it is better if you choose the topics that you would make videos on regardless of the amount of
                  profit. It requires a team for automation to work. So the ability to collaborate with others will be
                  critical. And the joy of working with others might keep you going even with little profit in the
                  beginning.
                </Typography>
              </p>
              {/* <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `That being said, it’s still important to understand the debate, and how to go about making an intro if you choose to use one for your channel.`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <strong>The Big Debate</strong>{' '}
                {formatMessage({
                  defaultMessage: `to help you decide which one is best for you to get started:`,
                  id: 'best_online_video_text_after_image_3_2',
                })} 
              </Typography> */}
            </div>
          </div>
          <LazyLoad once>
            <div className={s.buttonBottom}>
              <Button
                onClick={handleClick}
                disableRipper
                disableFocusRipple
                variant="text"
                startIcon={arrowBackButton}
                className="backBtn"
              >
                {' '}
                {formatMessage({
                  defaultMessage: 'Go back',
                  id: 'best_online_video_button_text_2',
                })}
              </Button>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export default Articles8;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
