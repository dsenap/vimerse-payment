import React from 'react';
import { Container, Link as MaterialLink, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import s from '../components/pagesComponent/FAQData/FAQ.module.scss';
import SocialHead from '../components/SocialHead';
import useScrollToTop from '../hooks/useScrollToTop';
import { LIGHT_HOUSE } from '../utils/regulars';
import withOutAuth from 'src/HOC/withOutAuth';
const FAQ = ({ gps }) => {
  useScrollToTop();

  const { formatMessage } = useIntl();
  return (
    <>
      <SocialHead title={formatMessage({ defaultMessage: 'FAQ', id: '01_meta_faq_meta_title' })} gps={gps} />
      <Container>
        <div className={s.container}>
          <div className={s.mainHeader}>
            <Typography variant="h1">
              {formatMessage({ defaultMessage: 'Frequently asked questions', id: 'faq_top_title' })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `1. How do I try your service for freed?`,
                id: 'faq_2_block_title_1',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Please select either Gold or Diamond package from our website and submit your contact info. When you are redirected to the ordering form, you will be asked if it is your first time using our video editing service. Once you indicate that this is indeed your first time, then your submission will be free as long as raw footage does not exceed 45 minutes. If raw footage exceeds 45 minutes, there is a fee ($0.35/min) to edit additional footage unless you are a Twitch streamer. If you are a Twitch streamer, we would make a highlight for you for completely free, regardless of the stream duration. No subscription required. No watermark. No strings attached! The free trial includes one round of 30-min revision.`,
                id: 'faq_2_block_text_1',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `2. What types of videos do you edit?`,
                id: 'faq_2_block_title_2',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `We make highlights for Twitch streamers. We also make cooking, Vlog, beauty/fashion, fitness and product review videos for YouTubers, TikTokers and Instagram influencers. Please send an email to`,
                id: 'faq_2_block_text_2',
              })}{' '}
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: info@vimerse.com">
                {' '}
                info@vimerse.com
              </MaterialLink>{' '}
              if you would like to inquire about other types of videos.
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {formatMessage({
                defaultMessage: `3. What type of videos you DO NOT edit?`,
                id: 'faq_2_block_title_3',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `We are laser-focused on offering services to content creators. We do not handle wedding videos, animations, music videos or commercial videos. However, we do edit Twitch stream, cooking, Vlog, beauty/fashion, fitness, and product review videos. Please send an email to`,
                id: 'faq_2_block_text_3',
              })}{' '}
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: info@vimerse.com">
                info@vimerse.com
              </MaterialLink>{' '}
              if you would like to inquire about other types of videos.
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `4. What tools do you use?`,
                id: 'faq_2_block_title_4',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Our editors are all highly skilled with Adobe Premiere Pro and After Effects. For stock images and videos, we use Storyblocks. For the video collaboration, we use Frame.io. For music, we use Artlist.io.`,
                id: 'faq_2_block_text_4',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `5. Why do you ask all these questions in the ordering form?`,
                id: 'faq_2_block_title_5',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `While we can be very creative with your raw footage, we also want to make content that you and your audience love. The ordering form helps us to understand your stories and messages. If you are a returning customer, you would be pleasantly surprised near the end of the submission.`,
                id: 'faq_2_block_text_5',
              })}
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `6. What if I see errors in the ordering form and cannot submit?`,
                id: 'faq_2_block_title_6',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              Contact us at{' '}
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: support@vimerse.com">
                {' '}
                support@vimerse.com
              </MaterialLink>
              ,{' '}
              {formatMessage({
                defaultMessage: `preferably with a screenshot of the error message.`,
                id: 'faq_2_block_text_6',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `7. How long does it take to get the first draft?`,
                id: 'faq_2_block_title_7',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Once you submit the form, our team will check if we have everything needed to make an engaging video for you. After our review, you should receive an order confirmation. We send the first draft in two calendar days from the order confirmation. If your raw footage is over 60 minutes (over 5 hours for Twitch), we might extend the delivery days for a day or two. We will update you as soon as the estimation of the required time to edit your video is done.`,
                id: 'faq_2_block_text_7',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `8. So, I have received the first draft. What should I do now?`,
                id: 'faq_2_block_title_8',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Please follow the instructions in the email. You will be able to make comments on your video on Frame.io. After your review, please submit the revision form to start the revision process. Until you submit the revision form, we do not start making changes. You will have five days to submit the revision form. In the revision form, you can also request additional text, B-rolls and thumbnails.`,
                id: 'faq_2_block_text_8',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `9. What is the turnaround time for revision requests?`,
                id: 'faq_2_block_title_9',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `After the delivery of the first draft, you can request revisions in five days. You must submit a revision form to start the revision process. Once we receive the revision form, we make the changes in two calendar days.`,
                id: 'faq_2_block_text_9',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `10. What happens if I fail to request revisions in five days?`,
                id: 'faq_2_block_title_10',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              Just notify us (
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: support@vimerse.com">
                support@vimerse.com
              </MaterialLink>
              )
              {formatMessage({
                defaultMessage: `that there are delays in five days. We can certainly extend the days for your review. However, if we do not
                  receive any notifications or replies from you, the project will be marked completed. This means that you
                  will receive the latest draft as the final video.`,
                id: 'faq_2_block_text_10',
              })}
            </Typography>
          </div>

          {/* <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `11. How does unlimited revisions work for the Diamond package?`,
                id: 'faq_2_block_title_11',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `We offer unlimited revisions for the Diamond package. Once you receive a draft, you must submit a revision form to start the revision process. We offer unlimited revisions for 12 days from the order confirmation date. We do not offer unlimited revisions for the Gold package.`,
                id: 'faq_2_block_text_11',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `12. How many revisions can I make for the Gold package?`,
                id: 'faq_2_block_title_12',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `The Gold package includes one round of revisions, which can be completed by an editor in 30 minutes. In 30 minutes, we can typically make 1-2 major changes (music or storyline) or 5-10 small changes (text, transitions, or effects). We may need to spend more than 30 minutes making adjustments as a result of your requests. We will update you as soon as the estimate is available. Our hourly rate for additional revisions is $18/hr.`,
                id: 'faq_2_block_text_12',
              })}
            </Typography>
          </div> */}
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `11. Can you adhere to my brand/style guides?`,
                id: 'faq_2_block_title_13',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Yes, our ordering form will ask you about your logo, intro and brand guidelines.`,
                id: 'faq_2_block_text_13',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `12. Can you recreate it, or match something I’ve seen?`,
                id: 'faq_2_block_title_14',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Sure! You can include the link of your reference video in the ordering form, and we will replicate the style of the reference video.`,
                id: 'faq_2_block_text_14',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `13. Do you supply the music for the videos?`,
                id: 'faq_2_block_title_15',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Yes, we only use licensed royalty-free music. If you receive any copyright claims from social media platforms, we will help you to clear those claims.`,
                id: 'faq_2_block_text_15',
              })}
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `14. Can you upload my videos to YouTube?`,
                id: 'faq_2_block_title_16',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `No, we currently do not offer this service.`,
                id: 'faq_2_block_text_16',
              })}
            </Typography>
          </div>
          {/* <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `17. How much do additional minutes of raw footage cost?`,
                id: 'faq_2_block_title_17',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `While our Gold package covers 45 minutes of raw footage, you can submit additional minutes of raw footage. We charge $0.35 per additional minute of footage. For instance, if you submit 55 minutes long raw footage, we will charge you for additional 10 minutes ($3.5 at $0.35/min) for the Gold package. We do charge less for additional minutes of Twitch streaming if chat analytics and markers are provided. When both chat analytics and markers files are shared with us, we charge $0.12 per additional minute of footage. For instance, if you submit a 300 minutes long Twitch stream with chat analytics and markers files, we will charge you for additional 255 minutes ($30.6 at $0.12/min) for the Gold package.`,
                id: 'faq_2_block_text_17',
              })}
            </Typography>
          </div> */}
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `15. How do I upload footage?`,
                id: 'faq_2_block_title_18',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `If you want to share your cloud storage (Google Drive or Dropbox), you can choose the option from our form and share the links. If you want to upload directly, you can upload files of any format and size to`,
                id: 'faq_2_block_text_18',
              })}{' '}
              <MaterialLink style={{ textDecoration: 'underline' }} href="https://vimerse.portal.massive.app/">
                https://vimerse.portal.massive.app
              </MaterialLink>
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `16. Is there a size limit on the raw footage files?`,
                id: 'faq_2_block_title_19',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `No.`,
                id: 'faq_2_block_text_19',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `17. How will we communicate to ensure the work gets done?`,
                id: 'faq_2_block_title_20',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `You will receive an order confirmation email, first/second/third draft delivery emails and the final draft delivery email. You can always reach us by replying to these emails or send an email to`,
                id: 'faq_2_block_text_20',
              })}{' '}
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: support@vimerse.com">
                support@vimerse.com
              </MaterialLink>
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `18. What if I send you 10 video editing requests in one go?`,
                id: 'faq_2_block_title_21',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `We are a small team with about 20 video editors. We also spend a considerable amount of time training an editor. We will do our best to schedule our workflow so that we can complete all orders in a timely manner.`,
                id: 'faq_2_block_text_21',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `19. How does the payment work?`,
                id: 'faq_2_block_title_22',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `We will send you Paypal invoice. For Twitch stream highlights, we may ask for payment upfront.`,
                id: 'faq_2_block_text_22',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `20. Can you provide a refund if I’m not happy?`,
                id: 'faq_2_block_title_23',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Yes, we refund you the 100% of the package fee if you are not happy. We will do everything to follow your instructions and take proper actions to address your concerns. While we will certainly refund 100% of the package fee, we cannot refund you the charges related to revisions.`,
                id: 'faq_2_block_text_23',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `21. Can you create a thumbnail for me?`,
                id: 'faq_2_block_title_24',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Yes!`,
                id: 'faq_2_block_text_24',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `22. Can you add subtitles for my video?`,
                id: 'faq_2_block_title_25',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `We can add subtitles for key messages. We cannot add subtitles for the whole video.`,
                id: 'faq_2_block_text_25',
              })}
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `23. Can you SEO optimize my videos for YouTube?`,
                id: 'faq_2_block_title_26',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `No, we currently do not offer this service.`,
                id: 'faq_2_block_text_26',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `24. What happens after I upload my project? Will I get a progress report with the estimated timing of delivery?`,
                id: 'faq_2_block_title_27',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `You will get an order confirmation email in a few hours. Then, you will receive the first draft in two calendar days. You can always contact us`,
                id: 'faq_2_block_text_27',
              })}
              (
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: support@vimerse.com">
                support@vimerse.com
              </MaterialLink>
              ) for updates.
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `25. What will I do if I am not satisfied with your editing?`,
                id: 'faq_2_block_title_28',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Please tell us what you would like to change and why you would like to see the change.`,
                id: 'faq_2_block_text_28',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `26. Do you work with 4k?`,
                id: 'faq_2_block_title_29',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `Yes, please indicate that you need the video to be 4k. Our default resolution is HD.`,
                id: 'faq_2_block_text_29',
              })}
            </Typography>
          </div>
          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `27. I work for a video production/marketing/creative/design agency, can I sell your service?`,
                id: 'faq_2_block_title_30',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `No. We work directly with content creators. For any collaboration projects, please send an email to`,
                id: 'faq_2_block_text_30',
              })}{' '}
              <MaterialLink style={{ textDecoration: 'underline' }} href="mailto: info@vimerse.com">
                info@vimerse.com
              </MaterialLink>
              .
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `28. What format will my video files be delivered in?`,
                id: 'faq_2_block_title_31',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `During the ordering process, we ask you the social media platform that you will be sharing the video. While the first draft will be made in the format suitable for your selected social media platform (e.g. YouTube 1920x1080), you can request additional formats during the revision process. Then, you will receive the final videos in multiple formats.`,
                id: 'faq_2_block_text_31',
              })}
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `29. How long do you keep the files?`,
                id: 'faq_2_block_title_32',
              })}
            </Typography>
          </div>
          <div className={s.padding20}>
            <Typography variant="body1">
              {formatMessage({
                defaultMessage: `If no specific instruction is shared, you may remove your files in 14 days from the completion of your project. However, we may keep files longer if you have not posted your content on the channels.`,
                id: 'faq_2_block_text_32',
              })}
            </Typography>
          </div>

          <div className={s.padding54}>
            <Typography variant="h5">
              {' '}
              {formatMessage({
                defaultMessage: `Updated April 22, 2022`,
                id: 'faq_date_update',
              })}
            </Typography>
          </div>
        </div>
      </Container>
    </>
  );
};
export default FAQ;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
