# PayPal

Quick Links:

- [Customize Messages](https://developer.paypal.com/docs/checkout/pay-later/us/integrate/customize-messages/)
- [Messages - Storybook](https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalmessages--default)

## Follow these instructions to obtain your App Credentials for Sandbox and Live

https://developer.paypal.com/api/rest/

### App Credentials

#### Sandbox

Client ID: `AS51PVUTmjqjizlEsX07M2YmlNJog-U53xUeOIUui0LTo8kw4eijbdTmA3H8wvyVKLoxCqRtVb8SwB3r`

## Add the react-paypal-js library

To get started, install react-paypal-js with npm.

```
npm install @paypal/react-paypal-js
```

https://paypal.github.io/react-paypal-js/?path=/docs/getting-started--page

## Buttons and Messaging Integration

1. Add the `PayPalScriptProvider` into `layout.js` along with these options:

```
const options = {
  "client-id":
    "AS51PVUTmjqjizlEsX07M2YmlNJog-U53xUeOIUui0LTo8kw4eijbdTmA3H8wvyVKLoxCqRtVb8SwB3r",
  currency: "USD",
  intent: "capture",
  components: "buttons,messages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PayPalScriptProvider options={options}>
          {children}
        </PayPalScriptProvider>
      </body>
    </html>
  );
}
```

2. Create a `PayPalMessage.tsx` class

Note: For PayPal Messaging Best Practices, place the messaging underneath the price.

```
import React from "react";
import { PayPalMessages } from "@paypal/react-paypal-js";

export const PayPalMessage = ({ amount }) => {
  const layout: "text" | "horizontal" = "text";

  const style = {
    countryCode: "US",
    placement: "product",
    layout,
    textColor: "black",
    textSize: "12",
    textAlign: "left",
    logoType: "primary",
    logoPosition: "left",
  };

  return <PayPalMessages style={style} amount={amount} />;
};
```

3. Create a `PayPalButton.tsx` class

Note: For PayPal Button Best Practices, place the buttons below the Call to Action button.

```
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
```
