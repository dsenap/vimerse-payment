import React, { useCallback } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import s from '../components/pagesComponent/articlesData/how-to-choose.module.scss';
import Button from '../components/Form/Button';
import { LazyImage } from '../components/LazyImage';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';
import SocialHead from '../components/SocialHead';
import Article4 from '../../public/images/addYoutubeScripts/youtube-script-768-new-min.jpg';
import useScrollToTop from '../hooks/useScrollToTop';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';

const Articles2 = ({ gps }) => {
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
          defaultMessage: 'How to Easily Write a YouTube Video Script',
          id: '01_meta_how_to_edit_video_title_head',
        })}
        description={formatMessage({
          defaultMessage:
            'Are you having difficulty staying on topic while attempting to create a YouTube video? Learn more how to easily write a YouTube video script',
          id: '01_meta_how_to_edit_video_description',
        })}
        keywords={formatMessage({
          defaultMessage: 'How to easily write a YouTube video script, write a YouTube video script',
          id: '01_meta_how_to_edit_video_keywords',
        })}
        gps={gps}
      />
      <Container>
        <div className={s.wrapper}>
          <div className={s.buttonTop}>
            <Button onClick={handleClick} variant="text" startIcon={arrowBackButton} className="backBtn">
              {formatMessage({
                defaultMessage: 'Go back',
                id: 'how_to_edit_video_button_text_1',
              })}
            </Button>
          </div>
          <div className={s.title}>
            <Typography variant="h1">
              {formatMessage({
                defaultMessage: 'How to Easily Write a YouTube Video Script',
                id: 'how_to_edit_video_title',
              })}
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'how_to_edit_YT_author',
            })}
            dateUpdate={formatMessage({
              defaultMessage: 'Updated Sep 15, 2021',
              id: 'how_to_easy_write_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="/images/addYoutubeScripts/youtube-script-360-new-min.jpg"
                alt="Image of how to Easily Write a YouTube Video Script"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of how to Easily Write a YouTube Video Script"
                src="/images/addYoutubeScripts/youtube-script-1920-min.jpeg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of how to Easily Write a YouTube Video Script"
                src="/images/addYoutubeScripts/yourube-script-1024-min.jpeg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article4} alt="Image of how to Easily Write a YouTube Video Script" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `Are you having difficulty staying on topic while attempting to create a YouTube video? Perhaps you\`re
                having difficulty coming across as genuine, despite the fact that creating content for a video requires
                preparation. If you have difficulty capturing the creative ideas you have in a video, it may be a sign
                that you need a new method of content preparation. A script is an excellent place to start, which may
                seem obvious and possibly even something you don\`t want to do, but there is a lot of value in writing a
                video script, even if you don\`t use it during the recording process!`,
                  id: 'how_to_edit_video_text_after_image',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: 'It’s Not A Play',
                    id: 'how_to_edit_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `When you hear the word 'script', you probably envision line-by-line words for you to recite, as if you
                were an actor in a play. Though that approach may work for some people, it is not a good strategy for
                most content creators. Most likely, if you are currently creating videos using a rigid script and are
                having difficulty appearing genuine on camera, the blame falls with you and your script. We need to look
                at video scripts from a different perspective in order to fully appreciate their benefits.`,
                  id: 'how_to_edit_video_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Think of your video script as a reminder of the ideas you're most excited about or a way to think
                through your video ideas – not as the final version of the words you'll use in your video. When you have
                a new YouTube video idea, writing out how you want it to play out can be a really effective way to get
                your head around it. Some people may be ready to walk away from their notepad and begin filming with no
                notes in sight, whereas others will need to create some cues for themselves. Take the high-level points
                from your script and bullet them out on an easel or visual you can keep nearby if you need a reminder of
                what you plan to do next in your video.`,
                  id: 'how_to_edit_video_first_text_part_2',
                })}
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="p">
                <b>
                  {formatMessage({
                    defaultMessage: 'Determine Your Setting & Character',
                    id: 'how_to_edit_video_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Before you start writing, imagine yourself in a comfortable environment. Although a video script is not
                the same as a play, the setting is equally important. You could be casually discussing a new store
                you've visited with friends. You might be trying to explain a difficult concept to your younger sibling.
                You could also give a public speech in which you express your unique point of view. While the audience
                is essential, you must also find long-term ways to remain creative. As a result, try out various
                settings to see what works best for you.`,
                  id: 'how_to_edit_video_second_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Another advantage of choosing a setting is that it helps in the development of your character. After
                all, viewers return to your channel because they enjoy your personality. Ryan's World would not be a
                success without big smiles. Who would watch Good Mythical Morning if Rhett and Link weren't funny and
                weird? And we all know that the most popular gaming YouTubers are not the best gamers, but rather the
                most entertaining people. As a result, it is important to find a setting in which you can show off your
                best qualities.`,
                  id: 'how_to_edit_video_second_text_part_2',
                })}
              </Typography>
            </div>

            <div className={s.borderContainer}>
              <ArticleBorder />
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleFourth} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: 'Creating Your Script',
                    id: 'how_to_edit_video_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Though much of your script is you putting your thoughts on paper, which appears to be quite
                free-flowing, there are a few things you should keep in mind as you write the script for your latest
                content idea. It is important that each video you post quickly engages and adds value to your target
                audience. Build your script around those two points, and you'll be sure to get people to watch your
                video. Let's dive deeper into the components of a effective YouTube video script.`,
                  id: 'how_to_edit_video_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                <b>Making a great hook: </b>
                {formatMessage({
                  defaultMessage: `You only have a few seconds to capture your audience's attention; use those
                seconds wisely, or nothing else in your video will matter. Give your audience exactly what they want
                right away, and that is to see your face! You should be in the frame at the beginning of your video
                because people want to form a personal connection with you when they see it. Your connection will
                generate views, likes, and subscriptions. Your hook should also attract your audience to watch the
                entire video. Begin your video with a tease of why you want your audience to watch until the end – the
                point of your video.`,
                  id: 'how_to_edit_video_third_text_part_2',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                <b>Quick introduction: </b>
                {formatMessage({
                  defaultMessage: `After your hook, you want to build into your script a very brief introduction
                – emphasis on the brief. Your viewer probably does't care very much about your introduction, especially
                if you got them sucked into the video with a great hook. Give a brief introduction yourself or your
                brand before diving into the main video.`,
                  id: 'how_to_edit_video_third_text_part_3',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                <b>Adding value with your content: </b>
                {formatMessage({
                  defaultMessage: `When you've sufficiently drawn a viewer into your video, you'll
                want to keep them watching until the end. That means you must provide them with valuable content while
                also strategically planning how you will distribute it. You may begin by highlighting an issue that your
                target audience experiences in a relatable way, and then, towards the end of your video, you can solve
                that problem. This method not only creates connection with your audience by relating to them, but it
                also keeps you as someone they want to follow or subscribe to. As a final touch, you'll sign out on your
                video with a summary of all you\`ve provided, emphasizing the value.`,
                  id: 'how_to_edit_video_third_text_part_4',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                <b>Learn video editing: </b>
                {formatMessage({
                  defaultMessage: `You can make a better script if you understand what editing can do. Do you
                want to use slow motion to emphasize a scene? Do you prefer to use sound effects or music to convey your
                emotions? Do you want to contract two different scenes or include B-roll? If you are unable to make
                these modifications, your script may become less interesting and plain. You can always ask us to do it
                for you if you're having difficulty editing your videos. After a few cycles, you will get to know our
                capabilities and will be able to incorporate many features into your scripts and videos.`,
                  id: 'how_to_edit_video_third_text_part_5',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Whether you intend to use your YouTube video scripts word-for-word, as a guide for visual cues, or just
                as inspiration, writing a screenplay is important for creating high-performing content on a consistent
                basis. Using the template shared today, you will definitely start to see the growth you want on your
                channel!`,
                  id: 'how_to_edit_video_third_text_part_6',
                })}
              </Typography>
            </div>
          </div>
          <LazyLoad once>
            <div className={s.buttonBottom}>
              <Button onClick={handleClick} variant="text" startIcon={arrowBackButton} className="backBtn">
                {formatMessage({
                  defaultMessage: 'Go back',
                  id: 'how_to_edit_video_button_text_2',
                })}
              </Button>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export default Articles2;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
