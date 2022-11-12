const db = require('../../db.js');

/**
 * It's a function that takes a response object as an argument, and then it queries the database for
 * all the products, and then it sends the response back to the client.
 * @param res - response object
 */
const getProducts = async (res) => {

    try{
        await db.query( "SELECT * FROM product", (err, rows) => {
            if(err) throw err;
            res.send(rows);    
        });
    } catch(error){
        console.log({error: error})
    }
}

module.exports = getProducts;