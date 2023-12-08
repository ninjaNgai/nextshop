import React from "react";
import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

const shippingOptions = [
  {
    name: "Same Day Delivery",
    description: "Enter Address",
    underline: true,
  },
  {
    name: "Ship to Me",
    description: "Get it by Dec 14th with free standard shipping",
    underline: false,
  },
];

export default function ShippingSelection() {
  const [selected, setSelected] = useState(shippingOptions[2]);

  return (
    <div className="w-full">
      <div className="w-full max-w-md">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {shippingOptions.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`inline font-medium  ${
                              checked ? "text-white" : "text-gray-900"
                            }`}
                          >
                            {plan.name}{" "}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline text-xs ${
                              checked ? "text-sky-100" : "text-gray-500"
                            } ${plan.underline ? "underline" : ""}`}
                          >
                            <span>{plan.description}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
