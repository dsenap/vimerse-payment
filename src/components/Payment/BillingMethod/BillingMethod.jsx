import React, { useState } from 'react';
import Image from 'next/image';
import paypal from '../../../static/svg/paypal.png';
import paypalButton from '../../../static/svg/paypalbutton.png';
import styles from './BillingMethod.module.scss';

const BillingMethod = ({ openBillingActive }) => {
  const [bankActive, setBankActive] = useState(false);
  const [cardActive, setCardActive] = useState(false);
  const [paypalActive, setPaypalActive] = useState(false);
  const activePayment = (pay) => {
    if (pay === 'bank') {
      setBankActive(!bankActive);
      setCardActive(false);
      setPaypalActive(false);
    } else if (pay === 'card') {
      setCardActive(!cardActive);
      setBankActive(false);
      setPaypalActive(false);
    } else if (pay === 'paypal') {
      setPaypalActive(!paypalActive);
      setBankActive(false);
      setCardActive(false);
    }
  };
  return (
    <section className={styles.billingmethod}>
      <div className={styles.billingmethod__controle}>
        <p className={styles.billingmethod__controleTitle}>Add a Billing Methods</p>
        <button
          onClick={() => {
            openBillingActive();
          }}
          className={styles.billingmethod__controleButton}
        >
          Cancel
        </button>
      </div>
      <button
        onClick={() => {
          activePayment('bank');
        }}
        className={styles.billingmethod__bank}
        style={{
          background: bankActive ? 'rgba(244, 165, 128, 0.05)' : null,
          borderTop: bankActive ? '1px solid #FE7A39' : null,
          borderBottom: bankActive ? '1px solid #FE7A39' : null,
        }}
      >
        <div className={styles.billingmethod__backContent}>
          <div className={styles.billingmethod__backContentSwitch}>
            <div
              className={
                bankActive
                  ? styles.billingmethod__backContentSwitchCirculActive
                  : styles.billingmethod__backContentSwitchCircul
              }
            ></div>
          </div>

          <h2 className={styles.billingmethod__bankContentTitle}>Bank Account</h2>
        </div>
      </button>
      <button
        onClick={() => {
          activePayment('card');
        }}
        className={styles.billingmethod__card}
        style={{
          background: cardActive ? 'rgba(244, 165, 128, 0.05)' : null,
          borderTop: cardActive ? '1px solid #FE7A39' : null,
          borderBottom: cardActive ? '1px solid #FE7A39' : null,
        }}
      >
        <div className={styles.billingmethod__cardContent}>
          <div className={styles.billingmethod__backContentSwitch}>
            <div
              className={
                cardActive
                  ? styles.billingmethod__backContentSwitchCirculActive
                  : styles.billingmethod__backContentSwitchCircul
              }
            ></div>
          </div>
          <h2 className={styles.billingmethod__cardContentTitle}>
            Payment card, Visa, Mastercard, American Express, Discover, Diners
          </h2>
        </div>
      </button>
      <div style={{ display: cardActive ? 'block' : 'none' }} className={styles.cardsubmit}>
        <form className={styles.cardsubmitForm}>
          <div className={styles.cardsubmitNumber}>
            <div className={styles.cardsubmitNumberBlock}>
              <h2 className={styles.cardsubmitNumberTitle}>Card Number</h2>
              <div className={styles.cardsubmitNumberImages}></div>
            </div>
            <label className={styles.cardsubmitNumberLabel}>
              <input type="text" className={styles.cardsubmitNumberInput} />
            </label>
          </div>
          <div className={styles.cardsubmitName}>
            <label className={styles.cardsubmitNameFirstLabel}>
              <p className={styles.cardsubmitNameFirstText}>First Name</p>
              <input type="text" className={styles.cardsubmitNameFirstInput} placeholder="Hyunjae" />
            </label>
            <label className={styles.cardsubmitNameLastLabel}>
              <p className={styles.cardsubmitNameLastText}>Last Name</p>
              <input type="text" className={styles.cardsubmitNameLastInput} placeholder="Lee" />
            </label>
          </div>
          <div className={styles.cardsubmitFlex}>
            <div className={styles.cardsubmitExpires}>
              <div className={styles.cardsubmitExpiresLabel}>
                <p className={styles.cardsubmitExpiresTitle}>Expires On</p>
                <div className={styles.cardsubmitExpiresThoomb}>
                  <input className={styles.cardsubmitExpiresInput} type="text" placeholder="MM" />
                  <input className={styles.cardsubmitExpiresInput} type="text" placeholder="YY" />
                </div>
              </div>
            </div>
            <div className={styles.cardsubmitSecurity}>
              <div className={styles.cardsubmitSecurityInfo}>
                <p className={styles.cardsubmitSecurityTitle}>Security Code</p>
                <div className={styles.cardsubmitSecurityBecause}></div>
              </div>
              <input type="text" className={styles.cardsubmitSecurityInput} />
            </div>
          </div>
          <h2 className={styles.cardsubmitTitle}>Billing Address</h2>
          <div className={styles.cardsubmitCountry}>
            <p className={styles.cardsubmitCountryTitle}>Country</p>
            <select className={styles.cardsubmitCountrySelect}>
              <option selected>United States</option>
            </select>
          </div>
          <div className={styles.cardsubmitAddress}>
            <p className={styles.cardsubmitAddressTitle}>Address</p>
            <div className={styles.cardsubmitAddressThoomb}>
              <input type="text" className={styles.cardsubmitAddressInput} placeholder="609 Canton Street" />

              <input type="text" className={styles.cardsubmitAddressInput} />
            </div>
          </div>
          <div className={styles.cardsubmitFlex}>
            <div className={styles.cardsubmitCity}>
              <p className={styles.cardsubmitCityTitle}>City</p>
              <input type="text" className={styles.cardsubmitCityInput} />
            </div>
            <div className={styles.cardsubmitState}>
              <p className={styles.cardsubmitStateTitle}>State</p>
              <input type="text" className={styles.cardsubmitStateInput} />
            </div>
          </div>
        </form>
      </div>
      <button
        onClick={() => {
          activePayment('paypal');
        }}
        className={styles.billingmethod__paypal}
        style={{
          background: paypalActive ? 'rgba(244, 165, 128, 0.05)' : null,
          borderTop: paypalActive ? '1px solid #FE7A39' : null,
          borderBottom: paypalActive ? '1px solid #FE7A39' : null,
        }}
      >
        <div className={styles.billingmethod__paypalContent}>
          <div className={styles.billingmethod__backContentSwitch}>
            <div
              className={
                paypalActive
                  ? styles.billingmethod__backContentSwitchCirculActive
                  : styles.billingmethod__backContentSwitchCircul
              }
            ></div>
          </div>
          <Image src={paypal} />
        </div>
      </button>
      <div style={{ display: paypalActive ? 'block' : 'none' }} className={styles.paypalsubmit}>
        <p className={styles.paypalsubmitDesc}>You will be re-directed to PayPal</p>
        <button className={styles.paypalsubmitButton}>
          <Image src={paypalButton} />
        </button>
      </div>
    </section>
  );
};

export default BillingMethod;
