const db = require('../../db.js');

/**
 * It's a function that gets all the categories from the database and returns them as a JSON object.
 * @param res - the response object
 */
const getCategories = async(res) => {
    try {
        await db.query('SELECT * FROM category', (err, rows) => {
            if(err) throw err;
            res.json(rows);
        });
    } catch (err){
        console.log({error: err});
    }
}

module.exports = getCategories;