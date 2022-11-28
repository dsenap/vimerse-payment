import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import cn from 'classnames';
import YouTube from '@u-wave/react-youtube';
import { useIntl } from 'react-intl';
import s from './CardPortfolio.module.scss';
import { messagesPortfolio } from '../PortfolioDataContent';

export default function CardPortfolio({
  title,
  liComponent1,
  liComponent2,
  liComponent3,
  svgComponent1,
  svgComponent2,
  svgComponent3,
  classes,
  videoId,
  id,
}) {
  const data = [
    {
      li: liComponent1,
      svg: svgComponent1,
    },
    {
      li: liComponent2,
      svg: svgComponent2,
    },
    {
      li: liComponent3,
      svg: svgComponent3,
    },
  ];
  const { formatMessage } = useIntl();

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <div className={cn(s.cardWrapper, classes)} itemScope itemType="https://schema.org/Article">
        <div className={s.card}>
          <div className={s.top}>
            <div className={s.desktopImage}>
              <YouTube className={s.video} width="100%" video={videoId} autoplay={false} playsInline id={id} />
            </div>
          </div>
          <div className={s.main}>
            <div className={s.info}>
              <Typography className={s.title} variant="h4">
                {formatMessage(messagesPortfolio[title])}
              </Typography>
              <meta itemProp="name" content="vimerse" />
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
