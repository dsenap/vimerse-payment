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
import Article4 from '../../public/images/howToEditYT/how_to_edit_YT_768.jpg';
import Article1 from '../../public/images/howToEditYT/how_to_edit_YT_360.jpg';
import { LazyImage } from '../components/LazyImage';
import useScrollToTop from '../hooks/useScrollToTop';
import { arrowBackButton } from '../components/pagesComponent/articlesData/articlesSvg';
import ArticlesUpdate from '../components/pagesComponent/articlesData/ArticlesUpdate';
import { LIGHT_HOUSE } from '../utils/regulars';

const Articles3 = ({ gps }) => {
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
          defaultMessage: 'How to Edit for YouTube Videos',
          id: '01_meta_how_to_edit_YT_title_head',
        })}
        description={formatMessage({
          defaultMessage: 'How to Edit for YouTube Videos',
          id: '01_meta_how_to_edit_YT_description',
        })}
        keywords={formatMessage({
          defaultMessage: 'How to Edit for YouTube Videos',
          id: '01_meta_how_to_edit_YT_keywords',
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
                defaultMessage: 'How to Edit for YouTube Videos',
                id: 'how_to_edit_YT_title',
              })}
            </Typography>
          </div>

          <ArticlesUpdate
            author={formatMessage({
              defaultMessage: 'Hyunjae Lee',
              id: 'how_to_edit_YT_author',
            })}
            dateUpdate={formatMessage({
              defaultMessage: 'Updated Sep 17, 2021',
              id: 'how_to_edit_YT_date_update',
            })}
          />

          <div className={s.preview}>
            <div className={s.lazyImageMobile}>
              <Image src={Article1} alt="Image of how to edit for youtube videos" placeholder="blur" />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of how to edit for youtube videos"
                src="/images/howToEditYT/how_to_edit_YT_1920.jpg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of how to edit for youtube videos"
                src="/images/howToEditYT/how_to_edit_YT_1024.jpg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad once resize>
              <div className={s.lazyImageTablet}>
                <Image src={Article4} alt="Image of how to edit for youtube videos" placeholder="blur" />
              </div>
            </LazyLoad>
          </div>

          <div className={s.container}>
            <div className={s.firstBlockAfterPhoto}>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `Editing is many things. Sometimes it’s the art of hiding mistakes - like covering up the extra-loud sniffles from your actor or cutting a shot early because you sneezed while recording. Video editing is problem solving. Solving problems that occurred during scripting or during filming, and deciding just how the project can be saved or scrapped. But editing can also be the most time-consuming process of video content.`,
                  id: 'how_to_edit_YT_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `After all, it is the final step.`,
                  id: 'how_to_edit_YT_text_after_image_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `It’s where you decide just how your work will be portrayed. It’s where your vision finally comes to fruition. And believe me, no matter how great the early production is, editing can still be unquestionably challenging (or at least tedious) to do. Therefore, what you don’t want are things that make editing harder. You don’t want a Windows 98 computer that can barely render anything you shot, or a free software without the obvious features and add-ons you need to fix “just that one shot.”`,
                  id: 'how_to_edit_YT_text_after_image_3',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `While every edit is unique to the project, there are a number of tools to make you more efficient, and give you the best result possible. If you’re just starting out on YouTube, film, or any other video content medium and feel like the edit is way harder or taking longer than you think it should, read on: `,
                  id: 'how_to_edit_YT_text_after_image_4',
                })}
              </Typography>
            </div>

            <div className={s.firstBlock}>
              <Typography className={s.subtitleFirst} variant="h3" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `Invest in the Right Equipment`,
                    id: 'how_to_edit_YT_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `I get it, it doesn't feel good that the first piece of advice is to get better equipment and spend money. For many, that’s not any easy thing to do. But it’s in an effort to save your sanity, and that’s priceless.`,
                  id: 'how_to_edit_YT_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                We urge you to do your best to invest in the{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.techradar.com/news/best-video-editing-computer"
                >
                  equipment
                </MaterialLink>{' '}
                {formatMessage({
                  defaultMessage: `that will help you the most. If you’re trying to edit on an old, hand-me-down laptop that takes ten minutes to boot up - you’re going to pull your hair out waiting for renders or endless loading screens or just from losing project files.`,
                  id: 'how_to_edit_YT_first_text_part_2',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `It’s never easy to invest big money in a set-up, but editing requires a well-functioning system. If you’re shooting HD content, the computer needs to be able to handle it. Upgrade your RAM to at least 8 gb, get an SSD to improve speed, and make sure you have a solid video card and processor. Whether Mac or PC, get something that works for you and works quickly.`,
                  id: 'how_to_edit_YT_first_text_part_3',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                More than that, find an editing software with good backing like{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.adobe.com/products/aftereffects/free-trial-download.html"
                >
                  After Effects
                </MaterialLink>
                ,{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.blackmagicdesign.com/products/davinciresolve/"
                >
                  Da Vinci Resolve
                </MaterialLink>
                ,{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.adobe.com/products/premiere/free-trial-download.html?sdid=1NZGDDHD&mv=search&ef_id=CjwKCAjwm7mEBhBsEiwA_of-TAQRpNQ1lXtys_ky1U9V842DMi9Bedn4VqxeOJZxenY9FSgO1aktyhoCm9QQAvD_BwE:G:s&s_kwcid=AL!3085!3!452570597032!e!!g!!adobe%2520premiere%2520pro&gclid=CjwKCAjwm7mEBhBsEiwA_of-TAQRpNQ1lXtys_ky1U9V842DMi9Bedn4VqxeOJZxenY9FSgO1aktyhoCm9QQAvD_BwE"
                >
                  Adobe Premiere Pro
                </MaterialLink>
                ,{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://apps.apple.com/us/app/final-cut-pro/id424389933?ign-itscg=20200&ign-itsct=rv_FCP_google&mt=12&mttnagencyid=2433&mttncc=US&mttnpid=305109&mttnsiteid=141192&mttnsubad=fcp&mttnsubkw=ag-68842611496-ad-433627388349&mttnsubsite=AppleFinalCutPro"
                >
                  Final Cut Pro
                </MaterialLink>{' '}
                or{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.avid.com/media-composer?utm_source=google&utm_medium=cpc&utm_campaign=mediacomposer&utm_term=avid%2520media%2520composer&Adid=492501013383&Matchtype=e&Addisttype=g&&gclid=CjwKCAjwm7mEBhBsEiwA_of-TLw9i4NrOwiM746ITf_yABgVHaF9HcbAD8MOcggUAqndWaHJrd2aLBoCrfoQAvD_BwE"
                >
                  Avid Media Composer
                </MaterialLink>
                .{' '}
                {formatMessage({
                  defaultMessage: `Save yourself the endless headaches. Invest, and learn how to write it off on taxes when you start your business up.`,
                  id: 'how_to_edit_YT_first_text_part_4',
                })}{' '}
              </Typography>
            </div>

            <div className={s.secondBlock}>
              <Typography className={s.subtitleSecond} variant="h3" component="h2">
                <b>
                  {formatMessage({
                    defaultMessage: `Learn the Basics Through Video Tutorials or Practice`,
                    id: 'how_to_edit_YT_second_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                Your first video might not be the best thing you’ve ever seen but your second might be a little better.
                Each time you make one you’ll improve, learn something. To learn faster you’ll of course need to edit a
                lot but there are also a number of tutorial videos and websites devoted to teaching the ins and outs
                like{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.skillshare.com/browse/video-editing"
                >
                  Skillshare
                </MaterialLink>{' '}
                or{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCwfPHCZYy3CauY2rmvL9LDQ"
                >
                  Red Giant Tutorials
                </MaterialLink>
                . Where you’re lacking in knowledge, run through a full course on the subject. Where you need
                refinement, watch a couple on the topic and try for yourself. You can also check out our{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCtQYASZFsB3CRcGMcNKmRJQ"
                >
                  YouTube channel
                </MaterialLink>{' '}
                that introduces editing tips.
              </Typography>
            </div>

            <div className={s.borderContainer}>
              <ArticleBorder />
            </div>

            <div className={s.thirdBlock}>
              <Typography className={s.subtitleFourth} variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `Create Presets, Keyboard Shortcuts, and Routine`,
                    id: 'how_to_edit_YT_third_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `If you’re editing often and begin to find your style - make sure you remember it. Create color correction or transition presets that you can attach to any video and save time editing specific clips from the ground up for quality.`,
                  id: 'how_to_edit_YT_third_text_part_1',
                })}{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://photography.tutsplus.com/articles/10-top-presets-for-premiere-pro--cms-34648"
                >
                  Presets
                </MaterialLink>{' '}
                might not be perfect, but they’ll get you closer to your style than starting from scratch.
              </Typography>
              <Typography className={s.textThird} variant="body1">
                More than presets, make the process more efficient. Don’t always scroll with your mouse and click to
                rewind or fast forward or slow-mo, learn{' '}
                <MaterialLink
                  style={{ textDecoration: 'underline' }}
                  rel="nofollow"
                  target="_blank"
                  href="https://www.calebwojcik.com/blog/edit-faster-with-keyboard-shortcuts"
                >
                  keyboard shortcuts
                </MaterialLink>{' '}
                {formatMessage({
                  defaultMessage: `
                  to keys like “E & R” to go one frame forward or back (or hold shift to jump ten frames), or “J,K,L” to reverse playback, pause, and play forward; or just “Z & Shift+Z” to zoom in and out.`,
                  id: 'how_to_edit_YT_third_text_part_2',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `And finally, create a routine that works for you and structure it. Edit backwards. Maybe the best clips are at the end of each take. Edit in stages - start with A and B roll, then moving to color corrections and graphics. Whatever works fastest for you, find your routine and try not to diverge from it.`,
                  id: 'how_to_edit_YT_third_text_part_3',
                })}
              </Typography>
            </div>

            <div className={s.fourthBlock}>
              <Typography className={s.subtitleThird} variant="h3">
                <b>
                  {formatMessage({
                    defaultMessage: `Conclusion`,
                    id: 'how_to_edit_YT_four_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `There’s no shortage of things to learn when it comes to video editing and every time you do it,
                   you’re likely to learn a new trick or two. However, when you’re first starting out, the most important
                   thing to make sure is that you have the right equipment, software, basic building blocks, and you’re instructing yourself to form good habits.`,
                  id: 'how_to_edit_YT_four_text_part_1',
                })}
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `The sooner you get that all together, the less time you spend staying up until three a.m. pulling your hair out
                   to finish something that could have been in an hour if your computer didn’t keep closing the program, freezing, or sounding like a jet take-off at random intervals.`,
                  id: 'how_to_edit_YT_four_text_part_2',
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
                  id: 'how_to_edit_YT_button_text_2',
                })}
              </Button>
            </div>
          </LazyLoad>
        </div>
      </Container>
    </div>
  );
};

export default Articles3;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
