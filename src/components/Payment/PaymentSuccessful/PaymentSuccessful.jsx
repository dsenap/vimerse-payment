import React from 'react';
import styles from './PaymentSuccessful.module.scss';

const PaymentSuccessful = () => (
  <section className={styles.PaymentSuccessful}>
    <div className={styles.PaymentSuccessfulBlock}>
      <img className="" src="./images/success.svg" />
      <h2 className={styles.PaymentSuccessfulTitle}>Payment Successful!</h2>
      <p className={styles.PaymentSuccessfulDesc}>
        The payment of $102.99 has successfully been sent to ABC Shop from your wallet.
      </p>
      <button className={styles.PaymentSuccessfulButton}>Complete</button>
      <a className={styles.PaymentSuccessfulDownload}>Download receipt</a>
    </div>
  </section>
);
export default PaymentSuccessful;
