import React, { useState } from 'react';
import Balance from './Balance/Balance';
import styles from './Payment.module.scss';
import Invoices from './Invoices/Invoices';
import Settings from './Settings/Settings';
import BillingMethod from './BillingMethod/BillingMethod';
import PaymentProcessing from './PaymentProcessing/PaymentProcessing';
import PaymentSuccessful from './PaymentSuccessful/PaymentSuccessful';
import PaymentError from './PaymentError/PaymentError';
import InvoicesView from './InvoicesView/InvoicesView';

const Payment = () => {
  const [invoices, setInvoices] = useState(true);
  return (
    <section className={styles.payment}>
      <Balance />

      <div className="payment__block">
        <ul className={styles.payment__list}>
          <li className={styles.payment__item}>
            <button
              className={invoices ? styles.payment__buttonActive : styles.payment__button}
              onClick={() => {
                setInvoices(true);
              }}
            >
              Invoice
            </button>
          </li>
          <li className={styles.payment__item}>
            <button
              className={!invoices ? styles.payment__buttonActive : styles.payment__button}
              onClick={() => {
                setInvoices(false);
              }}
            >
              Payment Settings
            </button>
          </li>
        </ul>
        {invoices ? <Invoices /> : <Settings />}
        {/* <PaymentProcessing /> */}
      </div>
    </section>
    // <PaymentSuccessful />
    // <PaymentError />
    // <InvoicesView />
  );
};

export default Payment;
