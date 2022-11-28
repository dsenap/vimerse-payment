import { Container } from '@material-ui/core';
import React from 'react';
import styles from './Balance.module.scss';

const Balance = () => {
  return (
    <section className={styles.balance}>
      <div className="balance__total">
        <h2 className={styles.balance__totalTitle}>Balance</h2>
        <p className={styles.balance__totalDesc}>Total Balance: $400</p>
      </div>
      <div className="balance__pay">
        <button className={styles.balance__payButton}>PAY NOW</button>
      </div>
    </section>
  );
};
export default Balance;
