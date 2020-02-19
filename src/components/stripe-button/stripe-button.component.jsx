/** @format */

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import CustomButton from '../custom-button/custom-button.component';

import './stripe-button.style.css';

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publichableKey = 'pk_test_kJb6XZC6KcYSyntORbBDyX8Q00DObS3HUR';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Emall"
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/8d74a42649"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publichableKey}
    >
      <CustomButton stripe>pay now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
