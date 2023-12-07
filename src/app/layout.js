"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const inter = Inter({ subsets: ["latin"] });

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
