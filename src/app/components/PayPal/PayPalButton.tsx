import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

export const PayPalButton = () => {
  const layout: "vertical" | "horizontal" = "vertical";
  const style = { layout };

  function createOrder() {
    // replace this url with your server
    return fetch(
      "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // use the "body" param to optionally pass additional order information
        // like product ids and quantities
        body: JSON.stringify({
          cart: [
            {
              sku: "1blwyeo8",
              quantity: 2,
            },
          ],
        }),
      }
    )
      .then((response) => response.json())
      .then((order) => {
        // Your code here after create the order
        return order.id;
      });
  }
  function onApprove(data) {
    // replace this url with your server
    return fetch(
      "https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      }
    )
      .then((response) => response.json())
      .then((orderData) => {
        // Your code here after capture the order
      });
  }

  return (
    <PayPalButtons
      style={style}
      disabled={false}
      forceReRender={[style]}
      fundingSource={undefined}
      createOrder={createOrder}
      onApprove={onApprove}
    />
  );
};
