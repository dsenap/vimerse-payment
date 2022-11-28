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
import Article5Image from '../../public/images/bestOnlineVideoEditor/the_best_online_video_editor_reviews_1920.webp';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';

const Articles5 = ({ gps }) => {
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
          defaultMessage: 'The Best Online Video Editor',
          id: 'best_online_video_main_title',
        })}
        description={formatMessage({
          defaultMessage: 'The Best Online Video Editor',
          id: 'best_online_video_main_title',
        })}
        keywords={formatMessage({
          defaultMessage: 'The Best Online Video Editor',
          id: 'best_online_video_main_title',
        })}
        gps={gps}
        preloadMobileImgSrc="/images/bestOnlineVideoEditor/the_best_online_video_editor_reviews_360.webp"
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
              {formatMessage({
                defaultMessage: 'The Best Online Video Editor',
                id: 'best_online_video_main_title',
              })}
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'best_online_video_YT_author',
            })}
            dateUpdate={formatMessage({
              defaultMessage: 'Updated Oct 20, 2021',
              id: 'best_online_video_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="/images/bestOnlineVideoEditor/the_best_online_video_editor_reviews_360.webp"
                alt="Image of the best online video editor"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of the best online video editor"
                src="/images/bestOnlineVideoEditor/the_best_online_video_editor_reviews_1920.webp"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of the best online video editor"
                src="/images/bestOnlineVideoEditor/the_best_online_video_editor_reviews_1024.webp"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article5Image} alt="Image of the best online video editor" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `If you’ve spent any amount of time on popular media platforms like YouTube, Instagram, TikTok, or even Twitter, then you probably realized pretty quickly that just about anybody with a phone or a laptop and stable internet connection can make a video. That may be disappointing for the quality of content found on social media platforms, but it’s great news for you! Because even if anyone can make a video, the key to setting your content apart is knowing how to edit one.`,
                  id: 'best_online_video_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `There are tons of online video editors out there now, offering all the features you need as a beginner, without necessitating software downloads. The right video editor can be the difference between just another person posting online, and a real professional product.`,
                  id: 'best_online_video_text_after_image_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `In that respect, we’ve taken the time to review four of the most popular`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <strong>online video editors</strong>{' '}
                {formatMessage({
                  defaultMessage: `to help you decide which one is best for you to get started:`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `Adobe Spark`,
                    id: 'best_online_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Based on the name alone, you’re probably aware this is an app with some industry clout. Made by the same people who make Photoshop and Adobe Premiere, you can rightly assume from the beginning that Adobe Spark is a pretty well-supported application. You may also assume it’s more geared towards professionals and experienced users, but luckily that’s not the case.`,
                  id: 'best_online_video_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Adobe Spark has a single philosophy in mind: ease-of-use. The app features an incredible number of templates for users to choose from, and provides an impressive number of icons and images. It also integrates well with third party platforms, allowing you to easily upload your own materials from sources like Google Drive or Dropbox. Not to mention a massive music library to choose from, though uploading your own music is similarly seamless. As a bonus, social media integration is at the heart of Adobe Spark, so if you’re an influencer or content creator, this app is calling to you.`,
                  id: 'best_online_video_first_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `While this may sound like all praise, Adobe Spark does suffer from its more generalist focus. Advanced features, and even some basic ones, are completely absent from the free plan. The app also lacks a multi-track timeline feature, which may feel limiting for some users. A lot of features are locked behind a paid subscription, but the monthly plan isn’t too steep for the amount of content and features you gain access to.`,
                  id: 'best_online_video_first_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `WeVideo`,
                    id: 'best_online_video_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `WeVideo is another editing software that takes ease-of-use and a beginner user mindset into account. Designed with modern influencers and creators in mind, the app's features are familiar for social media users, but surprisingly unique when compared to other online video editors.`,
                  id: 'best_online_video_second_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Not only does WeVideo offer a wide variety of templates and stock media, it also allows you to apply Instagram-like filter effects to video clips. Sepia-tone everything.`,
                  id: 'best_online_video_second_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `It also lets you record your screen and webcam at the same time, so if you want to look like a Twitch-streamer, this is finally your chance. Oh, and you can upload in 4k. So, if you have some great gameplay clips from your RTX 3080 they are just guaranteed to look great. Plus, there are lots of actual editing features that are easy to use like transitions, overlays, graphics, and the basics of trimming and clipping.`,
                  id: 'best_online_video_second_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `While WeVideo has a lot of great features, there is a potential downside, a lot is locked behind their Unlimited Plan. 4K, stock media, voiceover, and more are all unavailable for free users. There is also one little thing we have to mention, the watermark. Unless you’re willing to pay, your videos will be forever branded, like a begrudging oath of loyalty. Ugh.`,
                  id: 'best_online_video_second_text_part_4',
                })}
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Magisto`,
                    id: 'best_online_video_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `This is one of those video editors that dials in on its target audience: beginners. New users will encounter an easy-to-understand tutorial that introduces them to the basics of the app and its features. This is complimented by an attractive format and simplified user interface. The app makes extensive use of templates, and is filled with tons of animations and effects. Videos are also easy to orient between landscape and portrait, an important feature depending on its end destination.`,
                  id: 'best_online_video_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `As a service for beginners, there is some hand-holding in the program, which might be awesome for some users and others will be like, “let go, I’m trying to edit here.” A little like the Microsoft Word Paperclip companion from back in the day.`,
                  id: 'best_online_video_third_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Music selection features a smart function to prevent users from using certain music libraries they may have, a preventative measure to stop copywritten music from being used. “No Stairway, denied!” There is also a smart-function that autotunes the music to end song flow naturally at the end of the video.`,
                  id: 'best_online_video_third_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `However, Magisto’s strength is also its greatest flaw. More experienced editors will find the app lacking advanced features, and may also be frustrated by a lack of keyframing. There are also limitations on ease of access, such as a lack of dedicated effects panel to add certain effects. Not to mention, some features are locked behind a subscription fee, something users will notice quickly as they are subjected to in-app promotions.`,
                  id: 'best_online_video_third_text_part_4',
                })}
              </Typography>
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Kapwing`,
                    id: 'best_online_video_fourth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Kapwing is what you get when a video editor focuses on accessibility and ease-of-use for the beginner to moderate user, rather than fixating on cramming every feature into one super-ultra-master’s package. There are templates an editor can make use of, but the strength of the app is in manual editing. Moving things around and adjusting footage is smooth, responsive, and intuitive. It is also easy to create, save, and organize all of your projects in one space. Screen-casting is equally easy to use, but lacks the ability to record audio and can suffer from poor FPS.`,
                  id: 'best_online_video_fourth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Photo editing is some of the best around. It’s incredibly easy to create eye-catching thumbnails, with an impressive amount of flexibility in controlling the image.  It also has an excellent seamless crop feature, something that is rare for similar apps. Beginner editors will get the hang of things quickly, while those with experience will enjoy mastering the process.`,
                  id: 'best_online_video_fourth_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The app does suffer from some shortcomings. It is lacking some fairly significant edits features, and some features that it does have are integrated poorly into the generally modern design. Export is also limited to 1080p, and there is a lack of options for color correction and changing color grade. A final issue is the lack of shortcut keys. New users may not notice at first, but needing to complete all tasks manually with the mouse will inevitably slow the work of experienced users.`,
                  id: 'best_online_video_fourth_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.borderContainer}>
              <ArticleBorder />
            </div>

            <div className={s.fifthBlock}>
              <Typography className={s.subtitleFourth} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: `So which online video editor is better?`,
                    id: 'best_online_video_fifth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `While you may be hoping for us to narrow down our choices and provide you with one perfect online video editor, we sadly can’t limit ourselves like that. Every video editor is different, designed for different needs, so it wouldn’t feel right to recommend just one. However, we can recommend two! While there was stiff competition, Adobe Spark and WeVideo are definitely our picks.`,
                  id: 'best_online_video_fifth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Maximizing features and usability, both offer great options for beginner to advanced video editors. While Adobe Spark represents a “jack of all trades” platform with significant integration with third party apps and an affordable price point, WeVideo differs by offering depth rather than breadth.`,
                  id: 'best_online_video_fifth_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Though you may have to pay for many of WeVideo’s features, you are getting some of the best on the market. Depending on your financial constraints and project needs, either WeVideo and/or Adobe Spark are guaranteed to help separate your videos from the slough of badly edited content on social media. Or you can simply ask us for help!`,
                  id: 'best_online_video_fifth_text_part_3',
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

export default Articles5;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
