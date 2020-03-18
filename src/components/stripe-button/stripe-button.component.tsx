/** @format */

// node_modules
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

// Styles + Types + Interfaces
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
      <CustomButton>pay now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
