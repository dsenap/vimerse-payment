import React, { useCallback } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import s from '../components/pagesComponent/articlesData/how-to-choose.module.scss';
import Button from '../components/Form/Button';
import SocialHead from '../components/SocialHead';
import Article6Image from '../../public/images/howMakeViralVideo/how_to_make_a_viral_video_1920.webp';
import { LazyImage } from '../components/LazyImage';
import useScrollToTop from '../hooks/useScrollToTop';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';

const Articles6 = ({ gps }) => {
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
          defaultMessage: 'How to Make a Viral Video',
          id: 'how_make_viral_main_title',
        })}
        description={formatMessage({
          defaultMessage: 'How to Make a Viral Video',
          id: 'how_make_viral_main_title',
        })}
        keywords={formatMessage({
          defaultMessage: 'How to Make a Viral Video',
          id: 'how_make_viral_main_title',
        })}
        gps={gps}
        preloadMobileImgSrc="/images/howMakeViralVideo/how_to_make_a_viral_video_360.webp"
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
                id: 'how_make_viral_button_text_1',
              })}
            </Button>
          </div>
          <div className={s.title}>
            <Typography variant="h1">
              {formatMessage({
                defaultMessage: 'How to Make a Viral Video',
                id: 'how_make_viral_main_title',
              })}
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'how_make_viral_YT_author',
            })}
            dateUpdate={formatMessage({
              defaultMessage: 'Updated Oct 20, 2021',
              id: 'how_make_viral_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="/images/howMakeViralVideo/how_to_make_a_viral_video_360.webp"
                alt="Image of how to make a viral video"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of how to make a viral video"
                src="/images/howMakeViralVideo/how_to_make_a_viral_video_1920.webp"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of how to make a viral video"
                src="/images/howMakeViralVideo/how_to_make_a_viral_video_1024.webp"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article6Image} alt="Image of how to make a viral video" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `Making content for media platforms like YouTube, Instagram, and TikTok may start off all fun and games, but once you’ve had a taste of your first viral video, you may start to realize a new opportunity on the horizon that you didn’t expect.`,
                  id: 'how_make_viral_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `Gaining followers and views can open doors that lead to cash faster than you might expect - and, with enough of each, offers for ads and sponsors might just come pouring in. From there, you can take things to the next level, advertising products that lead to sales which you might just get a cut of. You could even pivot to starting your own brand, using your newfound internet fame as a launching point.`,
                  id: 'how_make_viral_text_after_image_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `However, those are all the possibilities that open up after a viral video. The question is, even if you’ve already caught the viral fever, how do you replicate that success? Clearly viral videos can equal opportunity, even income, but what is the trick to making them?`,
                  id: 'how_make_viral_text_after_image_3',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `While there is no guaranteed method, there are a few steps you should keep in mind:`,
                  id: 'how_make_viral_text_after_image_4',
                })}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `1. Emotions Matter, Less So the Specifics`,
                    id: 'how_make_viral_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `One of the key ideas for your video, that should be there from inception, is a clearly understandable emotional tone that you want to take with your audience. Viewers need to feel something, a strong emotion that keeps them watching, but also cements something tangible in their brains. Viral videos are like their namesake, infectious, and it is strong emotions that achieve that end.`,
                  id: 'how_make_viral_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The emotion itself isn’t super important, as long as it is consistent with the theme of your video. That being said, relatable humor or adorable subjects are some of the most popular. Anger or frustration can also work, though such videos may be polarizing (viral through controversy).`,
                  id: 'how_make_viral_first_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Generally, we recommend you aim for emotions that stem from relatable situations and scenarios. A strong emotional reaction is key to a successful video, but so is its relatability. If a person feels a strong emotion and also relates to the reason why, then you’ve struck gold.`,
                  id: 'how_make_viral_first_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `2. Brevity is the Soul of Wit (And TikTok)`,
                    id: 'how_make_viral_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `It wouldn’t be a viral video if it wasn’t short and sweet. With the exception of YouTube (which is really a different beast entirely) most viewers are going to encounter your video through their feed, probably while they lazily scroll in bed, on a bus, or during a muted Zoom call. This means you’ll have their attention, but not much of their time.`,
                  id: 'how_make_viral_second_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `So how do you make the seconds count? If you can get a reaction out of them in 10 to 20 seconds, then they will be quicker to share your video. Once shared, their friends will be more willing to watch if they only need to invest that brief time commitment.`,
                  id: 'how_make_viral_second_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `On top of these benefits, TikTok looks at the average length of watch time compared to length of the video to determine quality and boost content. This means that short videos not only play to the algorithm, but also to people’s arguably modern short attention spans. Bring the funny fast!`,
                  id: 'how_make_viral_second_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `3. Keep the Camera Rolling`,
                    id: 'how_make_viral_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `This one is incredibly important. I can’t tell you how many times something funny has happened with me or my friends, that will forever be lost to history because nobody pulled out their phone to record it. Now, I’m not saying it is possible to record at all times, that would just be ridiculous, but it is good to learn the signs of when to start filming.`,
                  id: 'how_make_viral_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Is your cat getting ready to pounce at your TV and knock over half a shelf in the process? That’s when it’s time to start recording. Friend about to make a poor life choice? Better hit record. Traveling or engaging in some more extreme sports? Better get the Go-Pro.`,
                  id: 'how_make_viral_third_text_part_2',
                })}
              </Typography>

              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The key is to always be ready, and keep in mind what situations might lead to something memorable. If your videos are more akin to streaming content or comes from gameplay videos, have an idea of when you should start recording, and what programs allow you to save clips retroactively. Gone are the days when legendary multiplayer victories are lost to the cosmos because you never started the recording.`,
                  id: 'how_make_viral_third_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `4. Stay on Top of Trends:`,
                    id: 'how_make_viral_fourth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Everyone wants to be a trend-setter, but most influencers aren’t going to revolutionize the game with something new. Everyone starts somewhere, and knowing where the current trends are will help you to take advantage of the moment, and guide you towards what comes next.`,
                  id: 'how_make_viral_fourth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Music can be a huge aspect of modern trends. Often a single song or artist will become popular, and the new wave of content will revolve around that hit. With that, it’s a good idea to incorporate songs like this into your content. From there, you can look at other trends to incorporate and put your own spin on things, pushing the trend further while drawing from an already engaged audience.`,
                  id: 'how_make_viral_fourth_text_part_2',
                })}
              </Typography>

              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Hashtags can be another great way to get viewers, depending on the platform you are using. This isn’t necessarily for viewer searches, but can let the algorithm know what your video is about. If you are looking for more data driven methods to track social media trends, there are a few platforms available; Google Trends, TweetDeck, Hootsuite, etc. Not to mention, YouTube offers a Culture & Trends section to follow, which can be incredibly helpful regardless of your preferred platform.`,
                  id: 'how_make_viral_fourth_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.fifthBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `5. Filters & Fame`,
                    id: 'how_make_viral_fifth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Editing is another great way to compliment and perfect the work you have already put into your video. It can help to set the emotional tone you’re looking for through filters and transitions, cut down on run time through simple cuts, and increase the quality of existing footage through music, sound effects, text, and a plethora of other editing techniques.`,
                  id: 'how_make_viral_fifth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `While you shouldn’t rely on editing to completely revolutionize or change the content you already have, quality edits can turn what would be a popular video into a viral one.`,
                  id: 'how_make_viral_fifth_text_part_2',
                })}
              </Typography>
            </div>

            <div className={s.borderContainer}>
              <ArticleBorder />
            </div>

            <div className={s.sixthBlock}>
              <Typography className={s.subtitleFourth} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Through Persistence & Joy`,
                    id: 'how_make_viral_sixth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `While we have offered a lot of advice here on how to create a viral video, it’s also important to keep in mind that your first big idea still might not hit it big. Successfully making a popular video takes effort, work, and persistence. The most important thing is to keep at it, making new videos and coming up with new ideas, even when encountering low viewer counts.`,
                  id: 'how_make_viral_sixth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The key to success is learning from mistakes and continuing to publish content. By that time, even when you hit a viral video, you’ll have the tools necessary to make another.`,
                  id: 'how_make_viral_sixth_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Further, if you put in the work, or are really lucky (and we mean absolutely, incredibly lucky), then you might reach the ultimate level of cashing in on your viral video: selling your most viral video as an NFT. While this isn’t the ultimate business plan anyone should have, it has happened.`,
                  id: 'how_make_viral_sixth_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Nathan Apodaca, famous for drinking Ocean Spray while listening to “Dreams” by Fleetwood Mac on his longboard, is currently auctioning off the video as an NFT for a minimum $500,000.`,
                  id: 'how_make_viral_sixth_text_part_4',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `That being said, always make sure you are doing what excites you. While there is opportunity for profits and even fame, the key to success is to have joy in the process. If you love what you are doing, then your viewers will love it too. Fun is infectious, and it will shine through with each video you make. Make enough, and you might just go viral.`,
                  id: 'how_make_viral_sixth_text_part_5',
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
                  id: 'how_make_viral_button_text_2',
                })}
              </Button>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export default Articles6;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
