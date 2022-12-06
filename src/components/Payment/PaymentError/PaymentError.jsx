import React from 'react';
import styles from './PaymentError.module.scss';

const PaymentError = () => (
  <section className={styles.PaymentError}>
    <div className={styles.PaymentErrorBlock}>
      <img className="" src="./images/error-payment.svg" />
      <h2 className={styles.PaymentErrorTitle}>Payment Successful!</h2>
      <p className={styles.PaymentErrorDesc}>
        We aren’t able to process your payment. Please try again Error Code: 0550
      </p>
      <button className={styles.PaymentErrorButton}>Try again</button>
    </div>
  </section>
);
export default PaymentError;
