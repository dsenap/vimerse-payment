import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import styles from './WhyVimerse.module.scss';
import { cards, messagesWhyVimerse } from './whyVimerseContentCard';

const WhyVimerse = () => {
  const { formatMessage } = useIntl();
  return (
    <div className={styles.wrapper} id="why-vimerse" itemScope itemType="https://schema.org/Article">
      <Container>
        <div className={styles.titleWrapper}>
          <Typography itemProp="publisher" variant="h2" component="p">
            {' '}
            {formatMessage({
              defaultMessage: 'Why Vimerse?',
              id: 'why_Vimerse_title',
            })}
          </Typography>
        </div>
        <meta itemProp="name" content="vimerse" />
        <meta itemProp="author" content="Person" />
        <meta itemProp="name" content="vimerse" />
        <meta itemProp="publisher" content="Organization" />
        <meta itemProp="datePublished" content="2021-08-09" />
        <meta itemProp="headline" content="vimerse" />
        <div className={styles.cardWrapper}>
          {cards.map((item) => (
            <div className={styles.card}>
              <div itemProp="image" className={styles.cardImage}>
                {item.image}
              </div>
              <Typography variant="h4" component="p" className={styles.cardTitle}>
                {formatMessage(messagesWhyVimerse[item.title])}
              </Typography>
              <Typography variant="body1" className={styles.cardText}>
                {formatMessage(messagesWhyVimerse[item.text])}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhyVimerse;
