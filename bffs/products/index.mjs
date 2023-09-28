// write an express backend server
// that retursn a list of products
// with names like 'Daikin Heat Pump'
// and prices like 1999.99
// and a list of categories

import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

import { productsWithCategories, fullyLoadedProducts } from "./data/index.mjs";
import { upfrontRebates, taxCredits } from './data/index.mjs';
import { categories } from './data/categories.mjs';

app.use(cors());

app.get("/products", (req, res) => {
  res.json(productsWithCategories);
});

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/discounts", (req, res) => {
  res.json({ upfrontRebates, taxCredits });
});

app.get("/", (req, res) => {
  res.json({schema: { latest: "/openapi.json" }});
})

app.get("/bff", (req, res) => {
  res.json(fullyLoadedProducts);
})

app.get(["/openapi.json"], (req, res) => {
  // https://swagger.io/specification/
  res.sendFile("./openapi.json", { root: "." });
})

app.listen(port, () => {
  console.log(`Products backend listening at http://localhost:${port}`);
});
