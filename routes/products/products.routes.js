const { Router } = require('express');
const router = Router();
const getProducts = require('../../controllers/products/products.controllers');
const getProductsByName = require('../../controllers/products/productsByName.controllers');

/* A function that is called when the user makes a GET request to the /products endpoint.
*  if there is a name will call getProductsByName with the name of the product
*  if  there is no name will call getProducts with a response as an argument
*  otherwise will enter to catch and throw an error
*/ 
router.get('/products', async(req, res) =>{
    const {name} = req.query;

    try {
        if(name){
            return await getProductsByName(res, name);
        } else {
            return await getProducts(res);
        }
    } catch(err) {
        console.log({error:err})
    }
});


module.exports = router;
