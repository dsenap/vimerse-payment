import React from 'react';
import { Typography } from '@material-ui/core';
import cn from 'classnames';
import YouTube from '@u-wave/react-youtube';
import { useIntl } from 'react-intl';
import s from './CardWhatWeDo.module.scss';
import Button from '../../../Form/Button';
import { messagesWhatWeDo, whatWeDoListComponents } from '../whatWeDoDataContent';

export default function CardWhatWeDo({
  title,
  subtitle,
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
              {formatMessage(messagesWhatWeDo[title])}
            </Typography>
            <meta itemProp="name" content="vimerse" />
            <Typography itemProp="description" className={s.subtitle} variant="body1">
              {subtitle}
            </Typography>

            <div className={s.ulWrapper}>
              {data.map((item) => (
                <div className={s.ulComponentWrapper}>
                  <div className={s.svgWrapper}>{item.svg} </div>
                  <Typography variant="body1" className={s.ulComponentText}>
                    {formatMessage(whatWeDoListComponents[item.li])}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className={s.buttonWrapper}>
            <Button
              disableRipper
              disableFocusRipple
              onClick={() => document.getElementById('start-creating').scrollIntoView({ behavior: 'smooth' })}
              variant="contained"
              className={s.button}
              size="large"
            >
              Start creating
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
