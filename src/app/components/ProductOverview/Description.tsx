import React from "react";
import * as PropTypes from "prop-types";

export default function Description({ product }) {
  return (
    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
      {/* Description and details */}
      <div>
        <h3 className="sr-only">Description</h3>

        <div className="space-y-6">
          <p className="text-base text-gray-900">{product.description}</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

        <div className="mt-4">
          <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
            {product.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-400">
                <span className="text-gray-600">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-medium text-gray-900">Details</h2>

        <div className="mt-4 space-y-6">
          <p className="text-sm text-gray-600">{product.details}</p>
        </div>
      </div>
    </div>
  );
}

Description.propTypes = { callbackfn: PropTypes.func };
