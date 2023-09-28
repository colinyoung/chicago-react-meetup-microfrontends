import React, { StrictMode } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { createRoot } from "react-dom/client";
import { Root as ProductsExperienceRoot } from "./Root";
import { ProductsExperienceProps } from "./types";

// ProductsExperience will NOT automatically be rendered!
// You must call ProductsExperience.install(div) to render it.
export const ProductsExperience = {
  hydrate: (node: HTMLElement, hydrateFromProps: ProductsExperienceProps) => {
    const root = createRoot(node);
    root.render(
      <StrictMode>
        <ErrorBoundary
          fallback={
            <p>
              ProductsExperience: Something went wrong (did you start the
              backend?)
            </p>
          }
        >
          <ProductsExperienceRoot {...hydrateFromProps} />
        </ErrorBoundary>
      </StrictMode>
    );
  },
};

export default ProductsExperience;
