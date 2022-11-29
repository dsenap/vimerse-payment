import { React, useState } from 'react';
import styles from './Invoices.module.scss';

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
      }
      return num;
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
      <table>
        <thead className={styles.invoices__type}>
          <tr>
            <th className={styles.invoices__typeItem}>Selected</th>
            <th className={styles.invoices__typeItem}>BILLING DATE</th>
            <th className={styles.invoices__typeItem}>INVOICE number</th>
            <th className={styles.invoices__typeItem}>project name</th>
            <th className={styles.invoices__typeItem}>Status</th>
            <th className={styles.invoices__typeItem}>TOTAL FEE</th>
            <th className={styles.invoices__typeItem}>balance</th>
            <th className={styles.invoices__typeItem}>Open View</th>
          </tr>
        </thead>
        <tbody className={styles.invoices__list}>
          {testData.map((num) => (
            <tr key={`invoice_item_${num.id}`}>
              <td className={styles.invoices__itemSelected}>
                <button
                  type="button"
                  className={styles.invoices__itemSelect}
                  onClick={() => {
                    ChangeSeleced(num.id);
                  }}
                >
                  <div
                    style={{ display: num.Selected ? 'block' : 'none' }}
                    className={styles.invoices__itemSelectOrange}
                  />
                </button>
              </td>
              <td className={styles.invoices__itemDate}>{num.Date}</td>
              <td className={styles.invoices__itemNumber}>{num.Number}</td>
              <td className={styles.invoices__itemName}>{num.Name}</td>
              <td style={{ color: colorSwitch(num.Status) }} className={styles.invoices__itemStatus}>
                {num.Status}
              </td>
              <td className={styles.invoices__itemTotal}>{num.Total}</td>
              <td className={styles.invoices__itemBalance}>{num.Balance}</td>
              <td>
                <button type="button" className={styles.invouse__itemView}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.invoices__navigation}>
        <button type="button" className={styles.invoices__navigationPrev}>
          <img style={{ width: '5px', height: '9px' }} src="./images/arrow-payment.svg" />
        </button>
        <ul className={styles.invoices__navigationList}>
          <li className={styles.nvoices__navigationItem}>
            <button type="button" className={styles.invoices__navigationItemButton}>
              1
            </button>
          </li>
        </ul>
        <button type="button" className={styles.invoices__navigationNext}>
          <img style={{ transform: 'rotate(180deg)', width: '5px', height: '9px' }} src="./images/arrow-payment.svg" />
        </button>
      </div>
    </div>
  );
};

export default Invoices;
