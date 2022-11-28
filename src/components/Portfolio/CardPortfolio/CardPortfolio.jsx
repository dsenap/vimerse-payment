import React from 'react';
import { Grid } from '@material-ui/core';
import cn from 'classnames';
import YouTube from '@u-wave/react-youtube';
import style from './CardPortfolio.module.scss';

export default function CardWhatWeDo({ title, classes, videoId, id }) {
  // const data = [
  //   {
  //     li: liComponent1,
  //     svg: svgComponent1,
  //   },
  //   {
  //     li: liComponent2,
  //     svg: svgComponent2,
  //   },
  //   {
  //     li: liComponent3,
  //     svg: svgComponent3,
  //   },
  // ];
  // const { formatMessage } = useIntl();

  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <div className={cn(style.cardWrapper, classes)} itemScope itemType="https://schema.org/Article">
        <div className={style.card}>
          <div className={style.top}>
            <div className={style.desktopImage}>
              <YouTube className={style.video} width="100%" video={videoId} autoplay={false} playsInline id={id} />
            </div>
          </div>
          <div className={style.main}>
            <div className={style.info}>
              <div className={[style.chip, style.pd10].join(' ')}>
                <span className={style.chipText}>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
