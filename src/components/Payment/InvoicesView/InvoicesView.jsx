import React from 'react';
import styles from './InvoicesView.module.scss';

const InvoicesView = () => (
  <section className={styles.InvoicesView}>
    <div className={styles.InvoicesViewBlock}>
      <ul className={styles.InvoicesViewList}>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Invoice number:</h2>
          <p className={styles.InvoicesViewDesc}>#014983209</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>From:</h2>
          <p className={styles.InvoicesViewDesc}>
            Vimerse LLC, 675 VFW PKWY #267, CHESTNUT HILL, MA 02467, United States
          </p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Bill to:</h2>
          <p className={styles.InvoicesViewDesc}>Client name & address</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Billing Date:</h2>
          <p className={styles.InvoicesViewDesc}>June 1, 2022</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Due Date:</h2>
          <p className={styles.InvoicesViewDesc}>June 11, 2022</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Project name:</h2>
          <p className={styles.InvoicesViewDesc}>Vivaia Shoes Unboxing VIdeo</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Hours:</h2>
          <p className={styles.InvoicesViewDesc}>12.6</p>
        </li>

        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Transfer Fee:</h2>
          <p className={styles.InvoicesViewDesc}>$265.00</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Total Fee:</h2>
          <p className={styles.InvoicesViewDesc}>$400.00</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Payment</h2>
          <p className={styles.InvoicesViewDesc}>Paypal</p>
        </li>
        <li className={styles.InvoicesViewItem}>
          <h2 className={styles.InvoicesViewTitle}>Current amount due :</h2>
          <p className={styles.InvoicesViewDesc}>$265.00</p>
        </li>
      </ul>
      <div className={styles.InvoicesViewButtons}>
        <a className={styles.InvoicesViewLink}>Back to invoices</a>
        <button className={styles.InvoicesViewPrint}>Print</button>
      </div>
    </div>
  </section>
);

export default InvoicesView;
