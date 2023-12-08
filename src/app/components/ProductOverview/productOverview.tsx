import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Description from "./Description";
import QuantityDropdown from "./QuantityDropdown";
import ShippingSelection from "./ShippingSelection";
import { PayPalButton } from "../PayPal/PayPalButton";
import { PayPalMessage } from "../PayPal/PayPalMessage";

const product = {
  name: "4-Cup Pour Over Coffee Brewer with Stand",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Home", href: "#" },
    { id: 2, name: "Brewers", href: "#" },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    "A slow-style coffee brewing set with style to spare, it gives depth to your daily ritual with a pure, organic profile and premium materials. Featuring a brass-finished metal stand and a holder, server and brewer made of heat-resistant glass, Kinz is designed to help you relax and enjoy the passage of time with your pour-over coffee.",
  highlights: [
    "Set includes: 1 stand, 1 filter, 1 brewer, 1 server and 1 holder.",
    "Stand crafted of metal with a Brass finish. Base crafted of wood with a Walnut finish.",
    "Height of stand adjusts to fit other sized cups.",
    "Holder, brewer and server made of heat-resistant glass.",
  ],
  details: "Maximum temperature differential 248°F. 4 cup capacity.",
};
const reviews = { href: "#", average: 4, totalCount: 1217 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductOverview() {
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2">
            {/* Image gallery */}
            <div className="my-6">
              <img
                alt="..."
                src="https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202338/0081/kinto-4-cup-pour-over-coffee-brewer-with-stand-l.jpg"
              />
            </div>
            <div>
              {/* Product info */}
              <div className="container mx-auto max-w-2xl px-4 pb-16 pt-10">
                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h1 className="text-2xl font-bold tracking-tight text-left text-gray-900 sm:text-3xl">
                    {product.name}
                  </h1>
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-left text-gray-900">
                    {product.price}
                  </p>
                  {/* PayPal Messaging */}
                  <div id="messaging-container" style={{ marginTop: ".75rem" }}>
                    <PayPalMessage amount={product.price} currency={"USD"} />
                  </div>

                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="flex align-right font-bold py-2">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? "text-gray-900"
                                : "text-gray-200",
                              "h-5 w-5 flex-shrink-0"
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                      <a
                        href={reviews.href}
                        className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {reviews.totalCount} reviews
                      </a>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h3 className="flex align-right font-bold py-2">
                      Quantity
                    </h3>
                    <div className="flex items-center">
                      <QuantityDropdown />
                    </div>
                  </div>
                  <ShippingSelection />
                  <button
                    type="submit"
                    className="mt-10 flex w-3/4 items-center justify-center rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                  <div
                    id="button-container"
                    style={{ width: "75%", marginTop: ".75rem" }}
                  >
                    <PayPalButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t-4 border-stone-200"></div>
          <div className="container max-w-4xl">
            <h1 className="text-2xl pt-6 font-bold tracking-tight text-gray-900 sm:text-3xl">
              Description
            </h1>
            <Description product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
