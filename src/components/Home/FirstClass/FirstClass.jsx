import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { useIntl } from 'react-intl';
import styles from './FirstClass.module.scss';
import { FirstClassData, messagesFirstClass } from './FirstClassContentData';

const FirstClass = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.wrapper} itemType="https://schema.org/Article">
      <Container>
        <div className={styles.titleWrapper}>
          <Typography variant="h2">First-class video editing service</Typography>
        </div>

        <div className={styles.cardWrapper}>
          {FirstClassData.map((item) => (
            <div className={item.classname}>
              <div className={styles.cardTextPart}>
                <div className={item.classnameTitle}>
                  <Typography variant="h4">{formatMessage(messagesFirstClass[item.title])}</Typography>
                </div>
                <div className={styles.cardText}>
                  <meta itemProp="name" content="vimerse" />
                  <Typography itemProp="description" variant="body1">
                    {formatMessage(messagesFirstClass[item.text])}
                  </Typography>
                </div>
              </div>
              <div className={item.classnameSvg}>{item.image}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FirstClass;
