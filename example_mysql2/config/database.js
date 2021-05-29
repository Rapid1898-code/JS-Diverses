const mysql = require('mysql2/promise');
require('dotenv').config({ path: './config/.env' });

module.exports.connect = async () => {
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        module.exports.connection = conn;
    } catch (err) {
        console.log('Error connecting to database');
        console.log(err);
        process.exit(1);
    }
};
