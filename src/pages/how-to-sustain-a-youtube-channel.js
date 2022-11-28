import React, { useCallback } from 'react';
import { Container, Link as MaterialLink, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import s from '../components/pagesComponent/articlesData/how-to-choose.module.scss';
import Button from '../components/Form/Button';
import SocialHead from '../components/SocialHead';
import Article4 from '../../public/images/howToSustain/how_to_sustain_a_youtube_channel_1920.webp';
import { LazyImage } from '../components/LazyImage';
import useScrollToTop from '../hooks/useScrollToTop';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';

const Articles4 = ({ gps }) => {
  useScrollToTop();

  const router = useRouter();
  const { formatMessage } = useIntl();

  const handleClick = useCallback(() => {
    router.push('/articles');
  }, [router]);

  return (
    <div>
      <SocialHead
        title={formatMessage({
          defaultMessage: 'How to Sustain a YouTube Channel',
          id: 'how_to_sustain_main_title',
        })}
        description={formatMessage({
          defaultMessage: 'How to Sustain a YouTube Channel',
          id: 'how_to_sustain_main_title',
        })}
        keywords={formatMessage({
          defaultMessage: 'How to Sustain a YouTube Channel',
          id: 'how_to_sustain_main_title',
        })}
        gps={gps}
        preloadMobileImgSrc="/images/howToSustain/how_to_sustain_a_youtube_channel_360.webp"
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
                id: 'how_to_sustain_button_text_1',
              })}
            </Button>
          </div>
          <div className={s.title}>
            <Typography variant="h1">
              {formatMessage({
                defaultMessage: 'How to Sustain a YouTube Channel',
                id: 'how_to_sustain_main_title',
              })}
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'how_to_sustain_YT_author',
            })}
            dateUpdate={formatMessage({
              defaultMessage: 'Updated Oct 20, 2021',
              id: 'how_to_sustain_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="/images/howToSustain/how_to_sustain_a_youtube_channel_360.webp"
                alt="Image of how to Sustain a YouTube Channel"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of how to Sustain a YouTube Channel"
                src="/images/howToSustain/how_to_sustain_a_youtube_channel_1920.webp"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of how to Sustain a YouTube Channel"
                src="/images/howToSustain/how_to_sustain_a_youtube_channel_1024.webp"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article4} alt="Image of how to Sustain a YouTube Channel" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `The light bulb goes off in your head: “I’m going to start a Youtube channel.” You know you have something special to offer the world. There’s some skill or insight you possess that really brings a fresh take; something that educates, enthralls, humors, maybe disgusts, or perhaps simply entertains.`,
                  id: 'how_to_sustain_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `Let’s say you make that first video on YouTube. You write, record, and edit it to the best of your possible ability and you’re proud of what you made. The next step, you realize, is to upload.`,
                  id: 'how_to_sustain_text_after_image_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `But before we get into what happens when you do, we do have to acknowledge something about the Youtube landscape: it isn’t 2008 anymore. It’s still a playground for creators, sure. But back then, it felt like anybody with a half-decent camera could make YouTube gold because their cat yawned in a funny way or their friend could jump around with a lightsaber.`,
                  id: 'how_to_sustain_text_after_image_3',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `These days, it takes real persistent effort to break into the algorithm. You don’t just need a good idea; you need an understanding of what it takes to create a Youtube channel, one that can be sustained past a few decent video ideas. To do that, you’re going to have to keep in mind a few things:`,
                  id: 'how_to_sustain_text_after_image_4',
                })}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `1. Be Yourself, Yet Understand What Culture You Represent`,
                    id: 'how_to_sustain_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `This sounds simple enough, but it is paramount for`,
                  id: 'how_to_sustain_first_text_part_1',
                })}{' '}
                <strong>
                  {formatMessage({
                    defaultMessage: `creating a Youtube Channel`,
                    id: 'how_to_sustain_first_text_part_1_1',
                  })}{' '}
                </strong>
                {formatMessage({
                  defaultMessage: `Plenty of people set out to play a character, to create a channel based around a perceived personality they think will be likable and get views. But the culture of Youtube is defined by unique voices. If your character is a copy of a popular personality, it isn’t unique. It’s just a copy.`,
                  id: 'how_to_sustain_first_text_part_1_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Why would viewers gravitate toward a copy when the original is available?`,
                  id: 'how_to_sustain_first_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Further, understanding the culture of Youtube means finding the niche that lacks representation. Are you the health-conscious millennial with three dogs that invests in Bitcoin to retire early? Where do you fit in this culture? And what do you hope to achieve by adding your voice to the conversation?`,
                  id: 'how_to_sustain_first_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The only way to understand exactly where you fit is to do research where you’re interested, and find the airways in the airwaves that need a new voice to echo through them.`,
                  id: 'how_to_sustain_first_text_part_4',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: `2. Engage with Your Audience`,
                    id: 'how_to_sustain_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `While digital mediums may feel like a one-way street, serial channels like those on YouTube thrive on consistent user engagement. YouTube isn’t just a theater people shuffle in and out of, or a streaming service people browse through and close. It’s a public forum.`,
                  id: 'how_to_sustain_second_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Every time you post a video, dive into the comments section. Get conversations going, ask questions and expand your reach by funnelling your channel through social media avenues and vice versa.`,
                  id: 'how_to_sustain_second_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The more you engage with your community, the more they come to understand you and grow with you as you grow your brand.`,
                  id: 'how_to_sustain_second_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `3. Don’t Hesitate to Reinvest`,
                    id: 'how_to_sustain_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Have you ever gotten really into an established YouTube channel's content, one that has been around for years, and then gone back to their earliest videos and things suddenly feel amateur? Clean cuts and transitions have been replaced with awkward animations and jarring resolution, and the host's typically sultry voice is suddenly nasally and grating to the ears? Yeah, that’s what poor equipment will do.`,
                  id: 'how_to_sustain_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `As you gain a following, one of your priorities should be reinvesting in your channel so your production quality becomes as professional as possible. The difference between an occasional uploader and a serious channel is how professionally your videos come together. And don’t be fooled by outward appearances, some popular YouTubers may lean into a disarrayed aesthetic, but guaranteed every sloppy edit and jump cut has been expertly timed and crafted with intention.`,
                  id: 'how_to_sustain_third_text_part_2',
                })}
              </Typography>

              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Moving forward, we suggest you start with a good`,
                  id: 'how_to_sustain_third_text_part_3_1',
                })}{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.ign.com/articles/the-best-microphone-for-streaming-and-podcasting"
                >
                  {formatMessage({
                    defaultMessage: `microphone`,
                    id: 'how_to_sustain_third_text_part_3_2',
                  })}
                </MaterialLink>{' '}
                {formatMessage({
                  defaultMessage: `YouTube is half audio, and having a crisp, clean voice is a simple way to really increase viewership.
                Another easy improvement is editing`,
                  id: 'how_to_sustain_third_text_part_3_3',
                })}{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.fotor.com/blog/best-video-editing-softwares-for-youtube-beginners/"
                >
                  {formatMessage({
                    defaultMessage: `software`,
                    id: 'how_to_sustain_third_text_part_3_4',
                  })}
                </MaterialLink>
                {'. '}
                {formatMessage({
                  defaultMessage: `The more efficient you are at polishing content, the less belabored you will be producing it. And finally, if the big bucks start rolling in, getting a whole new computer`,
                  id: 'how_to_sustain_third_text_part_3_5',
                })}{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.creativebloq.com/features/best-computer-for-video-editing"
                >
                  {formatMessage({
                    defaultMessage: `rig`,
                    id: 'how_to_sustain_third_text_part_3_6',
                  })}
                </MaterialLink>{' '}
                {formatMessage({
                  defaultMessage: `devoted to your creations can serve as a final payoff. Not only does it make everything easier, but it’s also a nice centerpiece to your growing success.`,
                  id: 'how_to_sustain_third_text_part_3_7',
                })}
              </Typography>
            </div>

            <div className={s.borderContainer}>
              <ArticleBorder />
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleFourth} variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `Conclusion`,
                    id: 'how_to_sustain_conclusion_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `As mentioned in the beginning, you’ve got a video put together that you’re proud of. You’re ready to finally hit the button and upload. The first time you do, you imagine one of two things - it will go viral, or it will flop. But there is a third possibility: people could see potential in your content or you could see potential in yourself. The question is, what will you do next? Viral, flop, or middling - will you create another video? And another after that?`,
                  id: 'how_to_sustain_conclusion_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage:
                    'Before anything else, that’s the key to sustainability on Youtube: creating content.',
                  id: 'how_to_sustain_conclusion_text_part_2',
                })}
              </Typography>
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
                  id: 'how_to_sustain_button_text_2',
                })}
              </Button>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export default Articles4;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
