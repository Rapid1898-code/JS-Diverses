const database = require('../config/database');

module.exports = {
    getItems: async (req, res, next) => {
        const [items] = await database.connection.execute('select * from items');
        res.json(items);
    }
}