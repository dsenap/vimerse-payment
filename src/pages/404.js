import React, { useCallback } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useIntl } from 'react-intl';
import styles from '../components/pagesComponent/component404/404.module.scss';
import Button from '../components/Form/Button/Button';
import { ErrorSvg } from '../components/pagesComponent/component404/data404';

const Banner404 = () => {
  const router = useRouter();
  const { formatMessage } = useIntl();

  const homePage = '/';
  const scrollToX = 0;
  const scrollToY = 0;

  const homeRedirectAndScroll = useCallback(() => {
    router.push(homePage).then(() => window.scrollTo(scrollToX, scrollToY));
  }, [router]);
  return (
    <>
      <Head>
        <title>
          {formatMessage({
            defaultMessage: '404 - page not found',
            id: '404_title_tag',
          })}
        </title>
        <meta
          name="title"
          content={formatMessage({
            defaultMessage: '404 - page not found',
            id: '404_title_meta',
          })}
        />
        <meta
          name="description"
          content={formatMessage({
            defaultMessage: '404 - page not found',
            id: '404_title_description',
          })}
        />
      </Head>
      <Container>
        <div>
          <div className={styles.errorWrapper}>
            {ErrorSvg}
            <Typography variant="h3">
              <b>
                {formatMessage({
                  defaultMessage: 'Looks like you’re lost',
                  id: '404_title_string',
                })}
              </b>
            </Typography>
            <Typography className={styles.textComponent} variant="body1">
              {formatMessage({
                defaultMessage: 'The page you are looking for is not available',
                id: '404_subtitle_string',
              })}
            </Typography>
            <div className={styles.buttonWrapper}>
              <Button variant="contained" size="large" onClick={homeRedirectAndScroll}>
                {formatMessage({
                  defaultMessage: 'Go to homepage',
                  id: '404_button_text_string',
                })}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Banner404;
