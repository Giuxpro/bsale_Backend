const { Router } = require('express');
const products = require('./products/products.routes');
const categories = require('./categories/categories.routes');
const productsByCategory = require('./products/productsByCategory.routes');
const router = Router();



/* Importing the routes from the categories and products folder and using them in the index.js file. */
router.use('/', products);
router.use('/', categories);
router.use('/', productsByCategory);


module.exports = router;
