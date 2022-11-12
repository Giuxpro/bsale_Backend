const { Router } = require('express');
const routes = Router();
const getCategories = require('../../controllers/categories/categories.controllers');

/* A simple GET request to the server. 
*  it will call getCategories with a response as an argument
    and return the categories
*/
routes.get('/categories', async (req, res) => {

    try {
        return await getCategories(res);
    } catch (err) {
       console.log({ error: err});
    }
});

module.exports = routes;

