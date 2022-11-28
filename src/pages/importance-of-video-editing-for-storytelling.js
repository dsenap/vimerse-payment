import React, { useCallback } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import Link from 'next/link';
import s from '../components/pagesComponent/articlesData/how-to-choose.module.scss';
import Button from '../components/Form/Button';
import SocialHead from '../components/SocialHead';
import { LazyImage } from '../components/LazyImage';
import useScrollToTop from '../hooks/useScrollToTop';
import Article8Image from '../../public/images/ImportanceVideoEditing/importance_video_editing.jpg';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';

const Articles9 = ({ gps }) => {
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
          defaultMessage: 'The Importance of Video Editing for Storytelling',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        description={formatMessage({
          defaultMessage: 'The Importance of Video Editing for Storytelling',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        keywords={formatMessage({
          defaultMessage: 'The Importance of Video Editing for Storytelling',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        gps={gps}
        preloadMobileImgSrc="/images/ImportanceVideoEditing/importance_video_editing.jpg"
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
                defaultMessage: 'The Importance of Video Editing for Storytelling',
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
                src="/images/ImportanceVideoEditing/importance_video_editing_360.jpg"
                alt="Image of the best online video editor"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of the best online video editor"
                src="/images/ImportanceVideoEditing/importance_video_editing.jpg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of the best online video editor"
                src="/images/ImportanceVideoEditing/importance_video_editing.jpg"
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
                {formatMessage({
                  defaultMessage: `Everyone wants to hear a great story. We want tales about the human condition, of our triumphs or failures—something with plots and characters that inspire as much as they speak to our core desires. We want empathy or catharsis, perhaps even horror or outrage.`,
                  id: 'best_online_video_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `The question is:`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <b>how do we tell a great story?</b>{' '}
                {/* {formatMessage({
                  defaultMessage: `to help you decide which one is best for you to get started:`,
                  id: 'best_online_video_text_after_image_3_2',
                })} */}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `A well-crafted story can take a thousand different forms, but the key thing to remember is that it does need a form. Structure, consistent themes, and pacing are all important aspects of a successful story, and they are even more important in the visual medium.`,
                  id: 'best_online_video_text_after_image_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `While it's easy to assume most of the work of storytelling when making a video occurs in the scripting and shooting phase, the make-or-break moments of a story happen in the editing room. The quality of a video’s edits can exemplify the best parts of script, and hide the worst errors of shooting—and it is important to understand just how vital the editing role plays in the process of storytelling.`,
                  id: 'best_online_video_text_after_image_3_1',
                })}
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
                    defaultMessage: `Prepare the Script`,
                    id: 'best_online_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `We all know we’ll edit eventually, but that doesn’t mean an edit can save everything. To help in the edit room, the first step of storytelling is always to prepare a script. This ensures you have a strong idea of your end product, and helps to establish the core beats and themes of your story beforehand. Here are our tips on`,
                  id: 'best_online_video_first_text_part_2',
                })}{' '}
                <Link href="/how-to-easy-write-a-youtube-video">writing a script.</Link>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Pixar has a really great set of`,
                  id: 'best_online_video_first_text_part_1',
                })}{' '}
                <Link href="https://medium.com/@Brian_G_Peters/6-rules-of-great-storytelling-as-told-by-pixar-fcc6ae225f50">
                  six rules for storytelling
                </Link>{' '}
                {formatMessage({
                  defaultMessage: `that can help you do this. While all of these are great for script writing, two in particular can be enhanced through targeted editing.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>

              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The second rule of`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <Link href="https://medium.com/@Brian_G_Peters/6-rules-of-great-storytelling-as-told-by-pixar-fcc6ae225f50">
                  video editing
                </Link>{' '}
                {formatMessage({
                  defaultMessage: `states that`,
                  id: 'best_online_video_text_after_image_3_2',
                })}{' '}
                <b>great stories have structure and purpose.</b>{' '}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `This means that every scene, and every event, fits neatly into the story as a whole, fulfilling some role in achieving the eventual end and reinforcing consistent themes. Video editing can play a huge role in this, ensuring scenes are not only stitched together seamlessly, but also that their order and context reinforces the story’s objectives without deviating from its intentions.`,
                  id: 'best_online_video_first_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The sixth rule is that`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <b> great stories are simple and focused.</b>{' '}
                {/* {formatMessage({
                  defaultMessage: `to help you decide which one is best for you to get started:`,
                  id: 'best_online_video_text_after_image_3_2',
                })} */}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Great writers and even storytellers can sometimes suffer from overambition, overcomplication, or even just general story bloat. A good`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <Link href="https://medium.com/@Brian_G_Peters/6-rules-of-great-storytelling-as-told-by-pixar-fcc6ae225f50">
                  video editor
                </Link>{' '}
                {formatMessage({
                  defaultMessage: `will trim the fat, removing unnecessary and overcomplicated scenes and dialogue. They may also reorganize scenes to create a more coherent narrative structure. This process boils down a story to its most essential parts, ensuring the audience is able to enjoy the tale without any confusion whatsoever (unless there’s supposed to be).`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Finding the Story`,
                    id: 'best_online_video_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Pixar’s rules, in that way, are not only key when scripting, but when`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <b>video editing to find the story</b>{' '}
                {formatMessage({
                  defaultMessage: `with the content provided. Editing means using the available video clips, whether a surplus or a deficit, and the imagery within to find a through-line in the material.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Have you ever heard the phrase,`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <i>“it was saved in the editing room?”</i>{' '}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `A famous`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <Link href="https://www.polygon.com/2017/12/29/16829502/star-wars-wreck-editing">example</Link>{' '}
                {formatMessage({
                  defaultMessage: `of this is Star Wars: A New Hope. In its original form, the famous space battle that opened the film was constantly intercut with scenes of Luke engaging in extraneous dialogue that added little to the plot. All of these extraneous scenes were dropped in editing. This produced an opening that maintained the energy of the ship-boarding action scene, reduced the amount of information thrown at the viewer at once, and added weight to Luke’s introduction later on.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `The great thing about video editing is that knowing the story you’re trying to tell is half the battle. Once you know what kind of edits are needed, the tools to do-so are remarkably easy to come by.`,
                  id: 'best_online_video_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Editing software such as`,
                  id: 'best_online_video_text_after_image_3_1',
                })}{' '}
                <Link href="https://filmora.wondershare.com/vlogger/youtube-analytics.html">Filmora</Link>{' '}
                {formatMessage({
                  defaultMessage: `can provide the templates and tools to get started. Other services such as`,
                  id: 'best_online_video_text_after_image_3_2',
                })}{' '}
                <Link href="https://www.adobe.com/products/premiere.html">Adobe Premier Pro</Link>{' '}
                {formatMessage({
                  defaultMessage: `and `,
                  id: 'best_online_video_text_after_image_3_2',
                })}{' '}
                <Link href="https://www.apple.com/final-cut-pro/">Apple Final Cut Pro</Link>{' '}
                {formatMessage({
                  defaultMessage: `are excellent services as well for up-and-coming editors.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Video Editing Techniques`,
                    id: 'best_online_video_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `The key to quality video editing is understanding the many techniques and tools at your disposal. The key to getting started is emulating those who have come before, or`,
                  id: 'best_online_video_third_text_part_1',
                })}{' '}
                <b>understanding video templates.</b>{' '}
                {formatMessage({
                  defaultMessage: ` These represent basic templates for video editing that beginners can rely on to get professional looking results without the complexity of doing everything from scratch.`,
                  id: 'best_online_video_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Templates can be seen as the basic resources that can help you to enhance your video. They can include things like filters, overlays, texts, sound effects, transitions, and many more of the fundamentals you can use to later refine a shot. Templates are typically included in software or services that allows you to easily apply them, while also doing more basic editing like cutting the length of shots, splicing them together, or adding some music and other audio effects.`,
                  id: 'best_online_video_third_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Templates won’t cover advanced editing techniques, but they will offer much needed structure. And structure is enough at the start to connect with an audience by relaying a cohesive message.`,
                  id: 'best_online_video_third_text_part_3',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Beyond templates, there are also a ton of techniques you can use to compliment or enhance the motion of a scene.`,
                  id: 'best_online_video_third_text_part_4',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                <b>Shot pacing</b>{' '}
                {formatMessage({
                  defaultMessage: `represents one of the basics. By lingering on a shot or using quick shots, you can increase the`,
                  id: 'best_online_video_third_text_part_4',
                })}{' '}
                <Link href="https://www.youtube.com/watch?v=nKcvk-BLUwI">tension</Link>{' '}
                {formatMessage({
                  defaultMessage: `of a scene or even elevate it, depending on the shot that follows.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                <b>Color grading</b>{' '}
                {formatMessage({
                  defaultMessage: `and filters can also enhance or depress an environment, making it a cheerful or depressive backdrop.`,
                  id: 'best_online_video_third_text_part_4',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                <b>Visual effects</b>{' '}
                {formatMessage({
                  defaultMessage: `really run the gambit on what they can do for a scene, but more basic effects like the addition of on-screen text, transitions, and sound enhancements should not be ignored.`,
                  id: 'best_online_video_third_text_part_4',
                })}
              </Typography>
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: `Mastering Music`,
                    id: 'best_online_video_fourth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `More than the visuals, there is one other aspect to editing and post-production that is vital to conveying a story: music. If you have ever watched an intense action scene but failed to feel your heart pounding, or watched a dramatic shot between lingering characters and noticed an absence of tension, it is safe to assume that an improperly used soundtrack is to blame.`,
                  id: 'best_online_video_fourth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Imagine a scene from a scary movie, a woman walking alone in a decrepit house on a stormy night.`,
                  id: 'best_online_video_fourth_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `What kind of music do you picture?`,
                  id: 'best_online_video_fourth_text_part_3',
                })}{' '}
                <b>Is it ambient, moody, dark, building suspense?</b>
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Now change that soundtrack to the Star Wars theme and you have an entirely different feeling. Now change it to a happy-go-lucky kid’s T.V. show theme and again`,
                  id: 'best_online_video_fourth_text_part_3',
                })}{' '}
                <i>—everything is different.</i>
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Music has the difficult task of not only complimenting the`,
                  id: 'best_online_video_third_text_part_4',
                })}{' '}
                <Link href="https://www.epidemicsound.com/blog/the-importance-and-usage-of-music-in-post-production/">
                  mood of a story,
                </Link>{' '}
                {formatMessage({
                  defaultMessage: `but also setting it. While some scenes require a score to`,
                  id: 'best_online_video_text_after_image_3_2',
                })}{' '}
                <Link href="https://blog.mynd.com/en/music-in-video">enhance existing emotions</Link>{' '}
                {formatMessage({
                  defaultMessage: `some shots (particularly those without a human subject) require the extra context music provides for the audience to really feel the intended emotions. Music is one of the fastest ways to convey theme and also a great guideline for making cuts or pacing. As the music builds, so could the frequency of cuts, as it lingers, so too could your shots linger.`,
                  id: 'best_online_video_text_after_image_3_2',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Learning to edit in rhythm or intended contrast with music is key not only to storytelling, but helping audiences to connect with your content. Here is our approach to`,
                  id: 'best_online_video_fifth_text_part_1',
                })}{' '}
                <Link href="/how-to-choose-the-right-music-for-your-video">mastering music selection.</Link>
              </Typography>
            </div>

            <div className={s.borderContainer}>
              <ArticleBorder />
            </div>

            <div className={s.fifthBlock}>
              <Typography className={s.subtitleFourth} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: `Conclusion`,
                    id: 'best_online_video_fifth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `A good video editor holds immense power over the quality of the story you tell. Even a perfect script can fail if it isn’t translated properly into video. With so many choices and tools at your disposal, it can be easy to feel overwhelmed, or even disheartened by the importance of editing in creation.`,
                  id: 'best_online_video_fifth_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `The key is to remember those basics of storytelling.`,
                  id: 'best_online_video_fifth_text_part_2',
                })}{' '}
                <b>Keep it simple, and keep it clear.</b>
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `You are the creator and originator of your story, and it’s your task to translate the story in your head into something others can view, understand, and connect with. Be confident, but don’t be afraid of reaching out for expert help. Our professional editors understand how to tell stories and deliver emotions using our extensive experience and industry knowledge.`,
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

export default Articles9;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
