import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styles from './PaymentProcessing.module.scss';

const PaymentProcessing = () => (
  <div className={styles.paymentprocessing}>
    <RotatingLines strokeColor="#FE7A39" strokeWidth="3" animationDuration="0.75" width="50" visible />
    <p className={styles.paymentprocessingTitle}>Processing</p>
  </div>
);

export default PaymentProcessing;
