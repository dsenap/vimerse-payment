import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import styles from './WhatWeDo.module.scss';
import CardWhatWeDo from './CardWhatWeDo/CardWhatWeDo';
import Button from '../../Form/Button';
import { whatWeDoData } from './whatWeDoDataContent';

const WhatWeDo = () => {
  const [active, setActive] = useState(false);

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (window.innerWidth > 767) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  return (
    <div className={styles.wrapper} id="what-we-do">
      <Container className={styles.container}>
        <div className={styles.titleWrapper}>
          <Typography variant="h2" component="p">
            {formatMessage({
              defaultMessage: ' What we do',
              id: 'what_we_do_title',
            })}
          </Typography>
        </div>

        <div className={styles.subtitleWrapper}>
          <Typography variant="h5">
            {formatMessage({
              defaultMessage:
                'We help content creators make more and better video content. Here are the major video categories we cover',
              id: 'what_we_do_subtitle',
            })}
          </Typography>
        </div>

        <div className={styles.cardWrapper}>
          {whatWeDoData.map((item) => (
            <CardWhatWeDo
              key={item.title}
              title={item.title}
              subtitle={item.text}
              liComponent1={item.listComponent1}
              liComponent2={item.listComponent2}
              liComponent3={item.listComponent3}
              svgComponent1={item.svgComponent1}
              svgComponent2={item.svgComponent2}
              svgComponent3={item.svgComponent3}
              img360={item.image360}
              img768={item.image768}
              videoId={item.videoId}
              classes={active && styles.cardVisible}
              id={item.index}
            />
          ))}
        </div>

        <div className={styles.buttonContainer}>
          {!active && (
            <Button size="medium" variant="outlined" onClick={() => setActive(true)}>
              {formatMessage({
                defaultMessage: 'Show more',
                id: 'what_we_do_button_show_more',
              })}
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default WhatWeDo;
