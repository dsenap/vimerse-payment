import React, { useCallback } from 'react';
import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import Image from 'next/image';
import LazyLoad from 'react-lazyload';
import { useIntl } from 'react-intl';
import s from './CardComponent.module.scss';
import Button from '../Form/Button';
import { arrowButton } from './CardComponentData';
import { messagesArticles } from '../pagesComponent/articlesData/articlesData';

export default function ImgMediaCard({ item }) {
  const router = useRouter();

  const { formatMessage } = useIntl();

  const placeholderPath = '/images/image-placeholder.svg';

  const { link, img360, title, img768, subtitle } = item;

  const handleClick = useCallback(() => {
    router.push(link);
  }, [link, router]);

  return (
    <div className={s.cardWrapper}>
      <div className={s.card}>
        <div className={s.top}>
          <div className={s.mobileImage}>
            <Image src={img360} alt={title} className={s.bannerImage} blurDataURL placeholder="blur" layout="fill" />
          </div>
          <LazyLoad style={{ background: '#f2f2f2' }} className={s.desktopImage} once resize>
            <div className={s.desktopImage}>
              <Image
                src={img768}
                alt={title}
                className={s.bannerImage}
                blurDataURL={placeholderPath}
                placeholder="blur"
                layout="fill"
              />
            </div>
          </LazyLoad>
        </div>
        <div className={s.main}>
          <div className={s.info}>
            <Typography className={s.title} variant="h4">
              {formatMessage(messagesArticles[title])}
            </Typography>
            <Typography className={s.subtitle} variant="body1">
              {formatMessage(messagesArticles[subtitle])}
            </Typography>
          </div>
          <div className={s.buttonWrapper}>
            <Button
              disableRipper
              disableFocusRipple
              onClick={handleClick}
              endIcon={arrowButton}
              variant="text"
              className={s.button}
            >
              Read more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
