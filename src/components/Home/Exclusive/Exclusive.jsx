import React from 'react';
import { Container, Typography } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import { useIntl } from 'react-intl';
import styles from './Exclusive.module.scss';
import { contentItems, messagesBenefits } from './exclusiveCardContent';

const Exclusive = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.wrapper} itemType="https://schema.org/Article">
      <Container>
        <div className={styles.titleWrapper}>
          <Typography variant="h2" component="p">
            Exclusive benefits
          </Typography>
        </div>

        <LazyLoad once>
          <div className={styles.container}>
            {contentItems.map((item) => (
              <div className={styles.content}>
                <div className={styles.contentImage}>{item.image}</div>
                <div className={styles.contentTitle}>
                  <Typography variant="h4">{formatMessage(messagesBenefits[item.title])}</Typography>
                </div>
                <meta itemProp="name" content="vimerse" />
                <Typography itemProp="description" variant="body1" className={item.classNameText}>
                  {formatMessage(messagesBenefits[item.text])}
                </Typography>
              </div>
            ))}
          </div>
        </LazyLoad>
      </Container>
    </div>
  );
};
export default Exclusive;
