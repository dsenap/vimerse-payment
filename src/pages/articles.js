import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import ImgMediaCard from '../components/Card/CardComponent';
import s from '../components/pagesComponent/articlesData/articles.module.scss';
import SocialHead from '../components/SocialHead';
import { articlesData } from '../components/pagesComponent/articlesData/articlesData';
import useScrollToTop from '../hooks/useScrollToTop';
import { LIGHT_HOUSE } from '../utils/regulars';
import withOutAuth from 'src/HOC/withOutAuth';
const Articles = ({ gps }) => {
  useScrollToTop();

  const { formatMessage } = useIntl();
  return (
    <div>
      <SocialHead
        title={formatMessage({
          defaultMessage: 'Everything about the video editing',
          id: '01_meta_articles_title_head',
        })}
        description={formatMessage({
          defaultMessage:
            'We offer professional video editing services, specifically for content creators. Submit your instructions and we will take care of it - storyline, music and effects. 2-day turnaround & 100% money-back guarantee. Get one free trial',
          id: '01_meta_articles_description',
        })}
        gps={gps}
      />
      <Container>
        <div className={s.wrapper}>
          <Typography className={s.title} variant="h1">
            {formatMessage({
              defaultMessage: 'Articles',
              id: 'articles_title',
            })}
          </Typography>

          <div className={s.cardWrapper}>
            {articlesData.map((item) => (
              <ImgMediaCard item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Articles;

export const getServerSideProps = async (ctx) => ({
  props: {
    gps: ctx?.req?.headers['user-agent'].match(LIGHT_HOUSE),
  },
});
