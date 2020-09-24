/** @format */

// node_modules
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// Components
import CustomButton from '../custom-button/custom-button.component';

interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton: React.FC<StripeCheckoutButtonProps> = ({
  price,
}) => {
  const priceInCents = price * 100;
  const publichableKey = 'pk_test_kJb6XZC6KcYSyntORbBDyX8Q00DObS3HUR';

  const onToken = (token: any) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', error);
        alert(
          'There was an issue with the payment. Please, be sure you used the provided credit card.',
        );
      });
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
      <CustomButton>pay now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
