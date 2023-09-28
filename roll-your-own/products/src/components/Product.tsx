import React from "react";

import { components } from "../support/openapi";

import styles from "./Product.module.css";

export type Product = components["schemas"]["UIProduct"];

const priceWithRebate = (product: UIProduct) => {
  if (product.rebates.length) {
    return Math.max(product.price - product.rebates[0].amount, 0);
  }
  return product.price;
};

const format = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

const ProductPrice = ({ product }: { product: UIProduct }) => (
  <div className={styles.productPrice}>
    <s>{format(product.price)}</s>{" "}
    <span className={styles.priceCut}>{format(priceWithRebate(product))}</span>
  </div>
);

export const Product = ({ product }: { product: UIProduct }) => (
  <div className={styles.product} title={`Learn more about ${product.name}`}>
    <div className={styles.productDetails}>
      {product.image && <img src={product.image} alt={product.name} />}
      <div className={styles.productTitle}>{product.name}</div>
    </div>
    <ProductPrice product={product} />
  </div>
);

export default Product;
