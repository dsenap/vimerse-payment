import React, { useState } from 'react';
import styles from './Settings.module.scss';
import Image from 'next/image';
import mastercard from '../../../static/svg/mastercard.png';
import visa from '../../../static/svg/visa.png';
import BillingMethod from '../BillingMethod/BillingMethod';

const Settings = () => {
  const [autoplayActive, setAutoplayActive] = useState(false);
  const [newBillingActive, setNewBillingActive] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  const openBillingActive = () => {
    setNewBillingActive(!newBillingActive);
  };
  return (
    <section className={styles.settings}>
      <div style={{ display: newBillingActive ? 'none' : 'block' }} className={styles.settings__manageNewBlock}>
        <div className={styles.settings__manage}>
          <div className={styles.settings__manageContent}>
            <h2 className={styles.settings__manageTitle}>Manage billing methods</h2>
            <p className={styles.settings__manageDesc}>Add,update, or remove your billing methods</p>
          </div>
          <button className={styles.settings__manageNew} onClick={openBillingActive}>
            Add a New Billing Method
          </button>
        </div>
        <div className={styles.settings__billing}>
          <h2 className={styles.settings__billingTitle}>Billing</h2>
          <div className={styles.settings__billingForm}>
            <label className={styles.settings__billingFormLabel}>
              <input className={styles.settings__billingFormInput} type="radio" name="billing" />
              Per Project
            </label>

            <label className={styles.settings__billingFormLabel}>
              <input className={styles.settings__billingFormInput} type="radio" name="billing" />
              Monthly
            </label>
            <div
              style={{
                borderBottomLeftRadius: openMonth && 0,
                borderBottomRightRadius: openMonth && 0,
                borderBottom: openMonth && 'none',
              }}
              className={styles.settings__billingFormSelect}
              onClick={() => {
                setOpenMonth(!openMonth);
              }}
            >
              <p className={styles.settings__billingFormSelectTitle}>15th</p>
              <img src="./images/arrow-payment.svg" className={styles.settings__billingFormSelectImg} />
              <div style={{ display: openMonth ? 'flex' : 'none' }} className={styles.settings__billingFormSelectBlock}>
                <ul className={styles.settings__billingFormSelectList}>
                  <li className={styles.settings__billingFormSelectItem}>
                    <p className={styles.settings__billingFormSelectTitle}>15th</p>
                  </li>
                  <li className={styles.settings__billingFormSelectItem}>
                    <p className={styles.settings__billingFormSelectTitle}>16th</p>
                  </li>
                  <li className={styles.settings__billingFormSelectItem}>
                    <p className={styles.settings__billingFormSelectTitle}>17th</p>
                  </li>
                  <li className={styles.settings__billingFormSelectItem}>
                    <p className={styles.settings__billingFormSelectTitle}>18th</p>
                  </li>
                  <li className={styles.settings__billingFormSelectItem}>
                    <p className={styles.settings__billingFormSelectTitle}>19th</p>
                  </li>
                </ul>
              </div>
            </div>
            <p className="settings__billing-text"> of each month</p>
          </div>
        </div>
        <div className={styles.settings__autoplay}>
          <div className={styles.settings__autoplayBlock}>
            <h2 className={styles.settings__autoplayTitle}>Autopay Setting</h2>
            <button
              className={!autoplayActive ? styles.settings__autoplayButton : styles.settings__autoplayButtonActive}
              onClick={() => {
                setAutoplayActive(!autoplayActive);
              }}
            >
              <div className={styles.settings__autoplaySwitch}></div>
            </button>
          </div>
          <p className={styles.settings__autoplayDesc}>
            Turning on Autopay means invoices will be automatically paid in full on their due date. If you have Paypal
            as primary billing method, you cannot turn on the autopay setting due to the Paypal's policy.
          </p>
        </div>
        <div className={styles.settings__primary}>
          <h2 className={styles.settings__primaryTitle}>Primary</h2>
          <p className={styles.settings__primaryDesc}>Your primary billing method is used for all payments</p>
          <div className={styles.settings__primaryCard}>
            <Image src={mastercard} alt="mastercard" className={styles.settings__primaryCardImg} />
            <p className={styles.settings__primaryCardNumber}>XXXX XXXX XXXX 4567</p>
            <button className={styles.settings__primaryCardEdit}>Edit</button>
          </div>
          <p className={styles.settings__primaryCardDesc}>
            You need a primary method when you have a balance due. To remove this one, set a new primary billing method
            first.
          </p>
        </div>
        <div className={styles.settings__additional}>
          <h2 className={styles.settings__additionalTitle}>Additional</h2>
          <ul className={styles.settings__additionalList}>
            <li className={styles.settings__additionalItem}>
              <Image src={mastercard} alt="mastercard" className={styles.settings__additionalItemImg} />
              <p className={styles.settings__additionalItemNumber}>XXXX XXXX XXXX 8910</p>
              <button className={styles.settings__additionalItemEdit}>Edit</button>
              <button className={styles.settings__additionalItemSetprimary}>Set As Primary</button>
              <button className={styles.settings__additionalItemRemove}>Remove</button>
            </li>
            <li className={styles.settings__additionalItem}>
              <Image src={visa} className={styles.settings__additionalItemImg} alt="mastercard" />
              <p className={styles.settings__additionalItemNumber}>XXXX XXXX XXXX 4123</p>
              <button className={styles.settings__additionalItemEdit}>Edit</button>
              <button className={styles.settings__additionalItemSetprimary}>Set As Primary</button>
              <button className={styles.settings__additionalItemRemove}>Remove</button>
            </li>
          </ul>
        </div>
      </div>
      {newBillingActive ? <BillingMethod openBillingActive={openBillingActive} /> : null}
    </section>
  );
};
export default Settings;
