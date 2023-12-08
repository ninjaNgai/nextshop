# Agenda

## Overview

1. Playstation console at GameStop
   1. https://www.gamestop.com/consoles-hardware/playstation-5/consoles/products/sony-playstation-5-console/225169.html
   2. Have you seen this before? How does a merchant add it? Why would they want to add it? How we make sure it’s dynamic in nature? Curious about performance/load time on merchant site?
2. In rest of session, we’ll answer these questions in a demo

## Adding messaging, a dynamic component

1. First, lets go through how a merchant would add it using a NextJS shop
   1. https://nextshop-ninjangai.vercel.app/
2. Add Messaging
   1. Client id - https://www.paypal.com/signin
   2. Add PayPal React JS Library
   3. PayPalScriptProvider with `options`
   4. Messaging Component
   5. Params - amount, what we do in code, here’s how it corresponds to the Quantity in NextJS shop app

## Edge Caching

1. Gamestop - Performance via Inspect/Timing tab
2. Medium article
   1. https://medium.com/paypal-tech/caching-dynamic-content-at-the-edge-c25d28bf03e8
