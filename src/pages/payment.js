import { Container } from '@material-ui/core';
import React from 'react';
import Header from 'src/components/DashboardLayout/Header';
import Payment from 'src/components/Payment/Payment';

const PaymentPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Payment />
      </Container>
    </>
  );
};

export default PaymentPage;
