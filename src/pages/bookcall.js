import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { InlineWidget } from 'react-calendly';
import style from '../styles/bookcall.module.scss';
import SocialHead from '../components/SocialHead';
import useScrollToTop from '../hooks/useScrollToTop';
import withOutAuth from 'src/HOC/withOutAuth';
// const useStyles = makeStyles({
//   bannerTextContentBig: {
//     color: 'white',

//   },
//   bannerTextContentSmall: {
//     color: 'white',

//   },
// });

const BookCall = () => {
  useScrollToTop();

  const { formatMessage } = useIntl();

  return (
    <>
      <SocialHead title={formatMessage({ defaultMessage: 'Book A Call', id: '' })} />
      <div className={style.bannerRect}>
        <Grid
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          container
          spacing={0}
          className={style.bannerText}
        >
          <Grid item xs={12} sm={10} md={8} lg={8}>
            <span className={style.bannerTextBig}>Let's have a chat.</span>
          </Grid>

          <Grid item xs={12} sm={10} md={8} lg={8}>
            <span className={style.bannerTextSmall}>
              We'll have a free 15-min video call to discuss your video editing requirements. Tell us what you need and
              we will optimize our solutions for you.
            </span>
          </Grid>
        </Grid>
      </div>

      <Container>
        <div className={style.container}>
          <InlineWidget
            url="https://calendly.com/hyunjae-lee/15min"
            pageSettings={{
              backgroundColor: '#fff',
              overflow: 'hidden',
              minHeight: 1000,
            }}
            styles={{
              height: '1000px',
            }}
          />
        </div>
      </Container>
    </>
  );
};
export default BookCall;

export const getServerSideProps = async () => ({
  props: {},
});
