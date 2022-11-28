import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import styles from './Portfolio.module.scss';
import CardPortfolio from './CardPortfolio/CardPortfolio';
import Button from '../../Form/Button';
import { portfolioData } from './PortfolioDataContent';

const Portfolio = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  const { formatMessage } = useIntl();

  useEffect(() => {
    if (window.innerWidth > 767) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

window.onload = function() {
  document.getElementById('__next').className = 'expand';
};

  return (
    <div className={styles.wrapper} id="dv_portfolio">
      <Container className={styles.container}>
        <div className={styles.titleWrapper}>
          <Typography variant="h2" component="p">
            {formatMessage({
              defaultMessage: 'Portfolio',
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

        <Grid
          direction="row"
          justifyContent="center"
          alignItems="center"
          container
          spacing={2}
          className={styles.cardWrapper}
        >
          {portfolioData.map((item) => (
            <CardPortfolio
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
        </Grid>

        <div className={styles.buttonContainer}>
          <Button size="large" onClick={() => router.push('/portfolio')}>
            {formatMessage({
              defaultMessage: 'Show more',
              id: 'what_we_do_button_show_more',
            })}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
