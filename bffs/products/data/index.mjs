import { products } from './products.mjs';
export { products } from './products.mjs';

import { categories } from './categories.mjs';
import { taxCredits, upfrontRebates } from './discounts.mjs';
export { categories } from './categories.mjs';

export { upfrontRebates, taxCredits } from './discounts.mjs';

export const productsWithCategories = products.map(product => {
    const productCategories = product.categories.map(categoryId => {
        return categories.find(category => category.id === categoryId);
    });
    return { ...product, categories: productCategories };
});

export const fullyLoadedProducts = products.map(product => {
    const productCategories = product.categories.map(categoryId => {
        return categories.find(category => category.id === categoryId);
    });
    const rebates = product.categories.map(categoryId => {
        return upfrontRebates.find(category => category.id === categoryId);
    }).filter(rebate => Boolean(rebate));
    const credits = product.categories.map(categoryId => {
        return taxCredits.find(category => category.id === categoryId);
    }).filter(category => Boolean(category));
    return { ...product, categories: productCategories, rebates, credits };
});
