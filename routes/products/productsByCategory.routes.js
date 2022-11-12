const { Router } = require('express');
const router = Router();
const getProductsByCategory = require('../../controllers/products/productsByCategory.controllers.js');

/* This is a route handler. It is a function that is called when a request is made to the specified
route. */
router.get('/products/:category', async (req, res) => {
   
    const category = req.params.category;

    try {
        return await getProductsByCategory(res, category);
    } catch (err) {
        return res.status(404).json({error: err})
    }

});

module.exports = router;