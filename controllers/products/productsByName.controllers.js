const db = require('../../db');

/**
 * It's a function that receives a response and a name, and it returns a list of products that match
 * the name.
 * </code>
 * @param res - is the response object
 * @param name - The name of the product you want to search for.
 * @returns the result of the query.
 */
const getProductsByName = async (res, name) => {

    try {
        await db.query(`SELECT * FROM product WHERE name LIKE '%${name}%'`, (err, rows, fields) => {
            if(rows.length === 0) {
                return res.status(404).json({error:`Lo sentimos de momento no tenemos el producto con el nombre ${name}`});
            } else {
                res.send(rows);
            }
        })
    } catch(error){
        return res.status(404).json({error: error});
    }
}

module.exports =  getProductsByName;
