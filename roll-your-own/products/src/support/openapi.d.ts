/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/bff": {
    /**
     * Get products for UI format
     * @description Products with all fields included
     */
    get: operations["getBFF"];
  };
  "/products": {
    /**
     * Get products
     * @description Products were obtained
     */
    get: operations["getProducts"];
  };
  "/categories": {
    /**
     * Get categories
     * @description Get categories
     */
    get: operations["getCategories"];
  };
  "/discounts": {
    /**
     * Get discounts
     * @description List discounts, organized into instantRebates and taxCredits
     */
    get: operations["getDiscounts"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Product: {
      id?: number;
      name?: string;
      price?: number;
      image?: string;
    };
    Category: {
      id?: number;
      name?: string;
      description?: string;
    };
    UpfrontRebate: {
      id?: number;
      categoryId?: number;
      name?: string;
      amount?: number;
      categories?: components["schemas"]["Category"][];
    };
    TaxCredit: {
      id?: number;
      categoryId?: number;
      name?: string;
      percentage?: number;
      categories?: components["schemas"]["Category"][];
    };
    UIProduct: components["schemas"]["Product"] & {
      rebates?: components["schemas"]["UpfrontRebate"][];
      credits?: components["schemas"]["TaxCredit"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /**
   * Get products for UI format
   * @description Products with all fields included
   */
  getBFF: {
    responses: {
      /** @description Products were obtained */
      200: {
        content: {
          "application/json": components["schemas"]["UIProduct"][];
        };
      };
    };
  };
  /**
   * Get products
   * @description Products were obtained
   */
  getProducts: {
    responses: {
      /** @description Products were obtained */
      200: {
        content: {
          "application/json": components["schemas"]["Product"][];
        };
      };
    };
  };
  /**
   * Get categories
   * @description Get categories
   */
  getCategories: {
    responses: {
      /** @description Categories were obtained */
      200: {
        content: {
          "application/json": components["schemas"]["Category"][];
        };
      };
    };
  };
  /**
   * Get discounts
   * @description List discounts, organized into instantRebates and taxCredits
   */
  getDiscounts: {
    responses: {
      /** @description Discounts were obtained */
      200: {
        content: {
          "application/json": {
            upfrontRebates?: components["schemas"]["UpfrontRebate"][];
            taxCredits?: components["schemas"]["TaxCredit"][];
          };
        };
      };
    };
  };
}
