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
import Article7Image from '../../public/images/EffectiveIntroYoutube/effective_intro_for_youtube.jpg';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';

const Articles7 = ({ gps }) => {
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
          defaultMessage: 'How to make an effective intro for YouTube',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        description={formatMessage({
          defaultMessage: 'How to make an effective intro for YouTube',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        keywords={formatMessage({
          defaultMessage: 'How to make an effective intro for YouTube',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        gps={gps}
        preloadMobileImgSrc="/images/EffectiveIntroYoutube/effective_intro_for_youtube_360.jpg"
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
                defaultMessage: 'How to make an effective intro for YouTube',
                id: 'make_an_effective_intro_for_YouTube',
              })}
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'best_online_video_YT_author',
            })}
            dateUpdate={formatMessage({
              defaultMessage: 'Updated April 15, 2022',
              id: 'best_online_video_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="/images/EffectiveIntroYoutube/effective_intro_for_youtube_360.jpg"
                alt="Image of the best online video editor"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of the best online video editor"
                src="/images/EffectiveIntroYoutube/effective_intro_for_youtube.jpg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of the best online video editor"
                src="/images/EffectiveIntroYoutube/effective_intro_for_youtube.jpg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article7Image} alt="Image of the best online video editor" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `Ask anyone interested in creating YouTube videos and you will quickly realize that the topic of intros is way more polarizing than it should be. So polarizing, in fact, that a quick Google search on the topic will reveal a plethora of credible articles taking firm stances for or against their inclusion.`,
                  id: 'best_online_video_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `While such an active debate might be intimidating for beginner content creators, the good news is that lively discussion can actually be a positive sign. With the community so divided on intros, you can rest easy knowing that your decision on the matter will likely be met with similar approval and disapproval—either boosting subs through common-ground or engagement through controversy. It’s a win-win!`,
                  id: 'best_online_video_text_after_image_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `That being said, it’s still important to understand the debate, and how to go about making an intro if you choose to use one for your channel.`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                {/* <strong>The Big Debate</strong>{' '}
                {formatMessage({
                  defaultMessage: `to help you decide which one is best for you to get started:`,
                  id: 'best_online_video_text_after_image_3_2',
                })} */}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `The Big Debate`,
                    id: 'best_online_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Having a repeating intro that begins every video on your channel can have a few different benefits. The biggest, and probably most obvious, is`,
                  id: 'best_online_video_first_text_part_1',
                })}{' '}
                <strong>brand recognition.</strong>{' '}
                {formatMessage({
                  defaultMessage: `When every video you create has the same opening, a viewer has a general idea of what to expect.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `They can anticipate quality, tone, and even theme, the kind of knowledge that keeps an already hooked viewer from skipping away or scrolling past your content.`,
                  id: 'best_online_video_first_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Intros can also help to provide a bit of information about your channel. While it is best to keep things short, a quick rundown of your upload schedule or other social media accounts can help viewers find all your content and synchronize your various platforms. A proper intro can also set the stage for your video, helping to introduce a tone or letting the viewer know exactly what your channel is about.`,
                  id: 'best_online_video_first_text_part_3',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `That all sounds great so far—so, what are some of the downsides? Well, there’s a few. Most of them stem from the simple fact that they take up time during the most important part of your video`,
                  id: 'best_online_video_first_text_part_4',
                })}{' '}
                <strong>the first 5 to 30 seconds.</strong>{' '}
                {formatMessage({
                  defaultMessage: `The time where viewers are either hooked immediately or already ready to move on.`,
                  id: 'best_online_video_text_after_image_4_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `By adding an intro, you are providing a potential barrier between the viewer and the main body of your video. There is some evidence that viewers are more likely to skip away from a video that has an intro. For this reason, it is best regardless to keep things short. Some recommend limiting intros to five seconds, while others recommend up to fifteen.`,
                  id: 'best_online_video_first_text_part_5',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `In this debate, people can’t even agree on how short is too short.`,
                  id: 'best_online_video_first_text_part_5',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Looking at the Greats`,
                    id: 'best_online_video_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `When it comes to content creation for YouTube, a key to success is always studying and understanding trends. Following trends is a key part of that. People enjoy new, but they are also comfortable with what is expected. With this in mind, we took a look at a few of the most popular content creators to see if they use intros.`,
                  id: 'best_online_video_second_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `What we found was that most popular YouTubers don’t seem to make use of intros. Taking a look at Pewdiepie, Mr Beast, Dude Perfect and Markiplier, you notice pretty quickly that none feature a reoccurring introduction in their videos. Generally, they either use this time to show brief highlights or offer a short introduction, both of which are unique to the video. These introductions can be as short as three words, and often take very little time to get through.`,
                  id: 'best_online_video_second_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `These creators land on the side of the debate that a generic intro is superfluous, rather than one targeted and individualized. In their view, it might be best to skip recurring intros and focus on offering highlight videos and unique introductions. This allows you to jump right into the content and offer context, while keeping the experience fresh each time. It’s also possible to just skip the introduction entirely and jump right into things, but where’s the fun in that?`,
                  id: 'best_online_video_second_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Structure & Advice`,
                    id: 'best_online_video_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `If you’ve made your choice, and sided with the #intros4ever, then there are a few things you should know. On the whole, video intros are mostly done on a case-by-case basis, so each introduction should be tailor-made for the content of the proceeding video.`,
                  id: 'best_online_video_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `That means the key here is relevancy. Know your content and keep to the theme. If you are reviewing a science fiction book or movie, use related effects and references in your intro. If you are making a funny video, try to inject some humor into the introduction.`,
                  id: 'best_online_video_third_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Equally important should be brevity. While we have mentioned it before, it really is important to hammer home. You don’t want viewers getting bored in the first few seconds of your video. Sure, an introduction is nice, but only as a primer for the primary content.`,
                  id: 'best_online_video_third_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `If you spend too much time drawing things out, your viewer may get bored and switch off.`,
                  id: 'best_online_video_third_text_part_4',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Of course, it also helps to limit how much you reveal about the video. You want your introduction to be a hook, something to generate interest and entice people to keep watching. If you spend too long in the introduction or give too much away, your hook sinks before having the chance to swim.`,
                  id: 'best_online_video_third_text_part_4',
                })}
              </Typography>
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `From Brand to Demand`,
                    id: 'best_online_video_fourth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `If you are insistent on branding for you video, we don’t blame you. A short intro clip or graphic that starts every video can really stick with your viewers, and build a brand consciousness. Though it’s still best to keep these animations short, and there are some really great guides out there on how to do it.`,
                  id: 'best_online_video_fourth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Another option is to aim for the best of both worlds. Try integrating your branding into your tailor-made introductions. This can be as simple as a logo features in some shots, or as subtle as integrating brand colors into your edits and overlays.`,
                  id: 'best_online_video_fourth_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Either way, this is a good way to push your brand without dominating the introduction with it.`,
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
                    defaultMessage: `Tools for the Job`,
                    id: 'best_online_video_fifth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `With all this advice, a logical next step is to ask how exactly all this can be done. As with any other form of video creation and editing, you need the proper software. Luckily, there are a ton of products available nowadays, and almost all of them have the features necessary to get you started on most basic editing tasks—intro or otherwise.`,
                  id: 'best_online_video_fifth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `We’ve recommended Adobe Spark before, and will continue to do so until the end of time (or until the updated version comes out—whichever comes first.) However, another great option is  WeVideo—a fantastic video editor with a focus on in-depth tools and expansive options for personal customization.`,
                  id: 'best_online_video_fifth_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Whatever form your Youtube intro takes, with the help of professional software, alongside a bit of wit, brevity, and branding—it’s bound to be high quality. The kind of high quality that sticks with your viewers and keeps them coming back for many uploads to come. We look forward to seeing it!`,
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

export default Articles7;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
