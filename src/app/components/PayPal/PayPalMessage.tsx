import React from "react";
import { PayPalMessages } from "@paypal/react-paypal-js";

export const PayPalMessage = ({ amount }) => {
  const layout: "text" | "horizontal" = "text";

  const style = {
    countryCode: "US",
    placement: "home",
    layout,
    textColor: "black",
    textSize: "12",
    textAlign: "left",
    logoType: "primary",
    logoPosition: "left",
  };

  // price breakdown

  return <PayPalMessages style={style} amount={amount} />;
};
