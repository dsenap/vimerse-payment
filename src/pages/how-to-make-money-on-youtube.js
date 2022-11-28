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
        title={formatMessage({
          defaultMessage: '3 Income Sources for YouTubers',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        description={formatMessage({
          defaultMessage: '3 Income Sources for YouTubers',
          id: 'make_an_effective_intro_for_YouTube',
        })}
        keywords={formatMessage({
          defaultMessage: '3 Income Sources for YouTubers',
          id: 'make_an_effective_intro_for_YouTube',
        })}
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
              {formatMessage({
                defaultMessage: '3 Income Sources for YouTubers',
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
                src="/images/moneyonYoutube/make_money_on_youtube_360.jpg"
                alt="Image of the best online video editor"
                placeholder
              />
            </div>
            <LazyLoad className={s.lazyFull} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktopFull}
                alt="Image of the best online video editor"
                src="/images/moneyonYoutube/make_money_on_youtube.jpg"
                placeholder
              />
            </LazyLoad>
            <LazyLoad className={s.lazyDesk} once resize>
              <LazyImage
                wrapperClass={s.lazyImageDesktop}
                alt="Image of the best online video editor"
                src="/images/moneyonYoutube/make_money_on_youtube.jpg"
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
                  defaultMessage: `YouTube is one of the best platforms out there for content creators and people looking to get ahead in today’s digital world. With over 2 billion users per month, YouTube really has a market for every kind of video content which makes it an ideal way to share your talents and make money. Since you’re reading this, I’m sure you know that, and you might have even started your channel already! In this post I’ll outline some of the most important strategies for converting your YouTube following into money in the bank.`,
                  id: 'best_online_video_text_after_image_1',
                })}
              </Typography>
              <Typography className={s.textFirst} variant="body1">
                {formatMessage({
                  defaultMessage: `If you’re unsure of whether you can actually be successful as a creator on YouTube, take a look at some of the people who have already reached the goals you’re striving for! From video gamers like PewDiePie and DanTDM to vloggers like Jake and Logan Paul to even 9-year-old Ryan Kaji from Ryan’s World, there are many people making literally millions of dollars just doing what they love and creating videos about it to share with the world.`,
                  id: 'best_online_video_text_after_image_2',
                })}
              </Typography>
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

            <div>
              <Typography className={s.subtitleSecond} variant="h4" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `1. Join the Youtube Partner Program`,
                    id: 'best_online_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `The most popular way to make money on YouTube is through advertisements and YouTube’s monetization program. To do this, you’ll have to apply and be accepted into the YouTube Partner Program. To be accepted into the program, your channel needs 4,000 public watch hours in the last 12 months, and at least 1000 subscribers, produce content in line with YouTube’s policies and guidelines, and sign up for a Google AdSense account to be paid! Once you’ve been accepted, you’ll have access to YouTube’s large range of monetization options, including advertising revenue, channel memberships, the merch shelf, and YouTube Premium revenue. The most common and easiest option is advertising revenue. To receive advertising revenue all you have to do is opt-in to YouTube’s video monetization package and then ads will be shown to viewers before your videos and you’ll be paid!`,
                  id: 'best_online_video_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `the most important factors affecting your potential for income on YouTube is your niche. From cars and video games, to makeup tutorials and comedy, there are many different niches on YouTube but they aren’t all created equal. This is especially true if you’re monetizing through the YouTube Partner Program, as you will be paid different rates for advertisements based on the niche your content is in. Some of the most profitable niches on YouTube include makeup, health, finance/business and technology. These niches pay more in “CPM”, or cost per thousand impressions, than any others. This means if your videos are in one of these niches you can get paid up to $22 for every thousand views! While that might not sound like a lot, when considering that there are many YouTube videos with hundreds of millions of views the money can really add up. Your niche doesn’t have to make or break your channel however! If there’s a subject you’re passionate and knowledgeable about then choose that as your niche! In the end your viewers will respect and support you more for making content that is true to yourself and your interests.`,
                  id: 'best_online_video_first_text_part_2',
                })}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleSecond} variant="h4" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `2. Sponsorship & Affiliate marketing`,
                    id: 'best_online_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `Many YouTubers choose to make money solely through the YouTube partner program and advertisements, but there’s a phenomenal amount of money to be made in other ways as well. One of the best ways to monetize your YouTube channel once you start gaining subscribers is through a sponsorship deal. The advantage of sponsorship deals is that since you’re dealing directly with the business wanting to advertise, YouTube doesn’t take their cut of the profits like they do when you use YouTube ads. As your channel grows, sponsors will eventually start to reach out to you, but in the beginning, you’ll need to take initiative to find sponsors who will pay you to talk about their products on your channel. This is made easy thanks to platforms like FameBit, GrapeVine and ContentBLVD that connect content creators with sponsors for a win-win situation all around.`,
                  id: 'best_online_video_first_text_part_1',
                })}
              </Typography>
              <Typography className={s.textThird} variant="body1">
                {formatMessage({
                  defaultMessage: `Another big source of income for many YouTubers is through affiliate marketing. Affiliate marketing is simple, and many of the YouTubers you watch probably do it without you even knowing! By signing up for an affiliate marketing program through Amazon or another company, you can include product links in the description of your videos and receive some of the money every time one of your viewers buys a product through your personal link. This is a great method because it doesn’t cost the viewers any more than it would normally and you can choose to only advertise products you already use and love. This is a good way to help your viewers out by recommending quality products to them, and it's a very genuine form of marketing.`,
                  id: 'best_online_video_first_text_part_2',
                })}
              </Typography>
            </div>

            <div>
              <Typography className={s.subtitleSecond} variant="h4" component="p">
                <b className={s.paddingLeft}>
                  {formatMessage({
                    defaultMessage: `3. NFT`,
                    id: 'best_online_video_first_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `A new, unexpected method of making money on YouTube has been trending for the last few weeks. One of the oldest and most viewed videos on YouTube, “Charlie Bit Me” was sold at an auction as a non-fungible token, or NFT, for over $700,000. As an NFT, the video is certified to be the original file, and due to the video’s huge success on YouTube this makes it quite the digital asset. To do this you need to produce a video that gains millions of views and hundreds of thousands of likes, but if you continue to work on producing content it might be a goal to reach for in the future!`,
                  id: 'best_online_video_first_text_part_1',
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
                    defaultMessage: `Conclusion`,
                    id: 'best_online_video_fifth_subtitle',
                  })}
                </b>
              </Typography>
              <Typography className={s.textSecond} variant="body1">
                {formatMessage({
                  defaultMessage: `As you continue to work on building up your following, remember that the key to success on YouTube is and always will be content creation. Good monetization strategies are important to convert views and likes into money, but without those views and likes it all means nothing. One final tip is to always reinvest the money you earn into making your channel better. A nicer camera or microphone can go a long way towards making your videos look more professional. Keep working, keep creating and keep recording! Success is sure to follow if you continue to work hard.`,
                  id: 'best_online_video_fifth_text_part_1',
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

export default Articles8;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
