import React from "react";
import { PayPalMessages } from "@paypal/react-paypal-js";

export const PayPalMessage = ({ amount, currency }) => {
  const layout: "text" | "horizontal" = "text";
  const style = { layout, currency };

  // price breakdown

  return <PayPalMessages style={style} amount={amount} />;
};
