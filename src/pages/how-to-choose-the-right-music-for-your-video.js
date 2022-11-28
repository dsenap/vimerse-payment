import React, { useCallback } from 'react';
import { Container, Link as MaterialLink, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import s from '../components/pagesComponent/articlesData/how-to-choose.module.scss';
import Button from '../components/Form/Button';
import ArticleBorder from '../components/ArticleBorder/ArticleBorder';
import SocialHead from '../components/SocialHead';
import Article4 from '../../public/images/howToChoose/how-to-choose-1920-min.jpeg';
import { LazyImage } from '../components/LazyImage';
import useScrollToTop from '../hooks/useScrollToTop';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';

const Articles1 = ({ gps }) => {
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
          defaultMessage: 'How to choose the right music for your video',
          id: '01_meta_how_to_choose_title_head',
        })}
        description={formatMessage({
          defaultMessage:
            'How to choose the right music for your video? The top 3 tips as a professional video editor for you to choose the perfect song for your next project',
          id: '01_meta_how_to_choose_description',
        })}
        keywords={formatMessage({
          defaultMessage: 'How to choose the right music for your video, How to choose the music for video',
          id: '01_meta_how_to_choose_keywords',
        })}
        gps={gps}
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
                id: 'how_to_choose_button_text_1',
              })}
            </Button>
          </div>
          <div className={s.title}>
            <Typography variant="h1">
              {formatMessage({
                defaultMessage: 'How to choose the right music for your video',
                id: 'how_to_choose_title',
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
              id: 'how_to_choose_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <LazyImage
                wrapperClass={s.lazyImageMobile}
                src="/images/howToChoose/how-to-choose-360-new-min.jpg"
                alt="Image of how to choose the right music for your video"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of how to choose the right music for your video"
                src="/images/howToChoose/how-to-choose-1920-min.jpeg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of how to choose the right music for your video"
                src="/images/howToChoose/how-to-choose-1024-min.jpeg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article4} alt="Image of how to choose the right music for your video" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div className={s.firstBlockAfterPhoto}>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `We all know music plays a big role in any successful video, because you can make people feel a wide
                spectrum of emotions with the right song. In the same way, having the wrong music can easily ruin your
                video, so I want to give you the top 3 tips as a professional video editor for you to choose the perfect
                song for your next project.`,
                  id: 'how_to_choose_text_after_image',
                })}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleFirst} variant="h3" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `1. Watch the footage first`,
                    id: 'how_to_choose_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `My first tip for you is to make sure you watch all the raw footage before you even start searching for a
                song to go with it. When starting a new video, the first thing I always do is open all my raw footage in
                my video timeline, and watch it beginning to end silently without any music. I go through all the
                footage and take notes, and I identify the theme and mood of the video so I know what I want people to
                feel when watching that video. I also take notes of the parts of the video where I want the music to
                build up and be exciting, and the parts of the video where I want it to be a little bit more relaxed.`,
                  id: 'how_to_choose_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `For example, if I have a nice and calm sunrise that happens in my video, just by watching the footage I
                know that I’m definitely not going to search for punk rock songs to use. In the same way, if my video is
                a motivational and exciting story or message, I’m probably not going to pair it with a song that is slow
                and relaxed. I then search and pick about 3 to 5 songs that I think fit the theme of my video and listen
                to each of them individually with the raw footage to see which one matches the best with the footage and
                the theme I want it to have. This helps me make sure the music for my videos is always on-theme with the
                content of the videos themselves!`,
                  id: 'how_to_choose_first_text_part_2',
                })}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: `2. Where to find good music for video`,
                    id: 'how_to_choose_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                After you have watched the footage and picked the theme you want, it is time to search for a
                royalty-free song that you can use without copyright. I have a few different websites I use to find free
                music; I’ll include links to all of them for you. The first one is{' '}
                <MaterialLink className={s.links} rel="nofollow" target="_blank" href="https://www.bensound.com/">
                  bensound.com
                </MaterialLink>
                . There are not many songs here but the quality is excellent, so definitely take a look and see if
                there’s anything that works for you. The second website is{' '}
                <MaterialLink
                  className={s.links}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.freemusicarchive.org/"
                >
                  freemusicarchive.org
                </MaterialLink>
                . Free music archive is a huge library of songs with many different categories to choose from, so I use
                this when I have a video that might need a unique song. Another site is{' '}
                <MaterialLink className={s.links} rel="nofollow" target="_blank" href="https://www.filmmusic.io/">
                  filmmusic.io
                </MaterialLink>
                . This has lots of songs that sound like film scores, and can be a great option if you want to add some
                dramatic flair to your videos. Overall, my favorite website is{' '}
                <MaterialLink className={s.links} rel="nofollow" target="_blank" href="https://www.soundstripe.com/">
                  soundstripe.com
                </MaterialLink>
                . The website has plenty of high-quality music that you can use to make your videos really stand out
                from the crowd and get people coming back to your channel time and time again.
              </Typography>
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleSecond} variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `3. Watch the waveform`,
                    id: 'how_to_choose_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `My second tip is to watch the sound waveform. You may be asking “what is a waveform?” Simply put, a
                waveform is how you can visualize a song. It looks like a wave, hence the name, and shows you the rise
                and fall of the intensity of the song. The waveform also shows how loud or soft a song is at any given
                point, so you can make sure that the quiet parts of the song line up with times you’ll be speaking
                during the video.`,
                  id: 'how_to_choose_third_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `When I’m searching for songs, I always check to see what the waveform looks like. It’s easy to find a
                good song but if it has the same beat and intensity for the entire song, it can easily become a little
                repetitive for your viewers. I always watch the waveform to see if the song has built ups and different
                beats, so that when I’m editing, I can make the b-rolls more impactful, and better influence the way
                that my viewers feel when watching the video. By doing that you will ensure that you don’t have a
                repetitive song which will make your videos much more pleasant to watch.`,
                  id: 'how_to_choose_third_text_part_2',
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
                    defaultMessage: `Bonus tip: Search for songs by mood`,
                    id: 'how_to_choose_bonus_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `And one last tip for you is to search for music based on the mood you want to convey. If you followed
                tip number one, you probably already know what mood you want to give to your video, so you can search
                for songs based on moods like fun, relaxing, or inspirational. Some of the sites I linked in tip number
                three have categories for different moods, to make it easy to choose a song that fits. A video can be
                quickly ruined by a song that doesn’t fit the mood of the footage, so make sure that the mood of the
                songs helps push the message you’re sending with your video. This will help you continue to inspire,
                inform and entertain your viewers through your content.`,
                  id: 'how_to_choose_bonus_text',
                })}
              </Typography>
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleSecond} variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `Conclusion`,
                    id: 'how_to_choose_conclusion_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `By following these tips, you’ll be able to create captivating and powerful videos with music that helps
                your viewers feel what you want them to feel. Remember that the most important thing is to keep creating
                quality videos and choosing music that matches the feel of the videos you create.`,
                  id: 'how_to_choose_conclusion_text',
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
                  id: 'how_to_choose_button_text_2',
                })}
              </Button>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export default Articles1;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
