import React from 'react';
import styles from './Invoices.module.scss';
import { useState } from 'react';

const Invoices = () => {
  const [testData, setTestDate] = useState([
    {
      id: 1,
      Selected: false,
      Date: 'Sep 29, 2022',
      Number: 10.0,
      Name: 'Travel Video',
      Status: 'DUE',
      Total: '$124.00',
      Balance: '$124.00',
      Url: 'tut',
    },
    {
      id: 2,
      Selected: false,
      Date: 'Sep 29, 2022',
      Number: 10.0,
      Name: 'Travel Video',
      Status: 'PAST DUE',
      Total: '$124.00',
      Balance: '$124.00',
      Url: 'tut',
    },
    {
      id: 3,
      Selected: false,
      Date: 'Sep 29, 2022',
      Number: 10.0,
      Name: 'Travel Video',
      Status: 'PAID',
      Total: '$124.00',
      Balance: '$124.00',
      Url: 'tut',
    },
    {
      id: 4,
      Selected: false,
      Date: 'Sep 29, 2022',
      Number: 10.0,
      Name: 'Travel Video',
      Status: 'DUE',
      Total: '$124.00',
      Balance: '$124.00',
      Url: 'tut',
    },
  ]);
  const ChangeSeleced = (id) => {
    const newData = testData.map((num) => {
      if (id === num.id) {
        return { ...num, Selected: !num.Selected };
      } else {
        return num;
      }
    });
    setTestDate(newData);
  };
  const colorSwitch = (status) => {
    let color = '';
    switch (status) {
      case 'DUE':
        color = '#04A9F4';
        break;
      case 'PAID':
        color = '#35C973';
        break;
      case 'PAST DUE':
        color = '#E50000';
        break;
      default:
        break;
    }
    return color;
  };
  return (
    <div className={styles.invoices}>
      <ul className={styles.invoices__type}>
        <li className={styles.invoices__typeItem}>Selected</li>
        <li className={styles.invoices__typeItem}>BILLING DATE</li>
        <li className={styles.invoices__typeItem}>INVOICE number</li>
        <li className={styles.invoices__typeItem}>project name</li>
        <li className={styles.invoices__typeItem}>Status</li>
        <li className={styles.invoices__typeItem}>TOTAL FEE</li>
        <li className={styles.invoices__typeItem}>balance</li>
        <li className={styles.invoices__typeItem}>Open View</li>
      </ul>
      <ul className={styles.invoices__list}>
        {testData.map((num) => (
          <li className={styles.invoices__item}>
            <button
              className={styles.invoise__itemSelect}
              onClick={() => {
                ChangeSeleced(num.id);
              }}
            >
              <div
                style={{ display: num.Selected ? 'block' : 'none' }}
                className={styles.invoise__itemSelectOrange}
              ></div>
            </button>
            <p className={styles.invoise__itemDate}>{num.Date}</p>
            <p className={styles.invoise__itemNumber}>{num.Number}</p>
            <p className={styles.invoise__itemName}>{num.Name}</p>
            <p style={{ color: colorSwitch(num.Status) }} className={styles.invoise__itemStatus}>
              {num.Status}
            </p>
            <p className={styles.invoise__itemTotal}>{num.Total}</p>
            <p className={styles.invoise__itemBalance}>{num.Balance}</p>
            <button className={styles.invouse__itemView}>View</button>
          </li>
        ))}
      </ul>

      <div className={styles.invoices__navigation}>
        <button className={styles.invoices__navigationPrev}>
          <img style={{ width: '5px', height: '9px' }} src="./images/arrow-payment.svg" />
        </button>
        <ul className={styles.invoices__navigationList}>
          <li className={styles.nvoices__navigationItem}>
            <button className={styles.invoices__navigationItemButton}>1</button>
          </li>
        </ul>
        <button className={styles.invoices__navigationNext}>
          <img style={{ transform: 'rotate(180deg)', width: '5px', height: '9px' }} src="./images/arrow-payment.svg" />
        </button>
      </div>
    </div>
  );
};

export default Invoices;
