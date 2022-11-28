import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import styles from './HowItWork.module.scss';
import { howItWorkContent, messagesHowItWork } from './howItWorkContentContainer';

const HowItWork = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.wrapper} id="how-it-works" itemType="https://schema.org/Article">
      <Container>
        <div className={styles.titleWrapper}>
          <Typography variant="h2" component="p">
            How It Works
          </Typography>
        </div>

        <div className={styles.cardWrapper}>
          {howItWorkContent.map((item) => (
            <div className={styles.card}>
              <div className={item.imageStyle}>{item.image}</div>
              <div className={styles.cardTitleWrapper}>
                <Typography variant="h4" className={styles.cardTitle}>
                  {formatMessage(messagesHowItWork[item.title])}
                </Typography>
              </div>
              <meta itemProp="name" content="vimerse" />
              <Typography itemProp="description" variant="body1" className={item.textStyle}>
                {formatMessage(messagesHowItWork[item.text])}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HowItWork;
