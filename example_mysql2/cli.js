const mysql = require('mysql2/promise');
require('dotenv').config({ path: './config/.env' });

async function main() {
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    try {
        const [rows] = await conn.execute('select count(*) as count from items');
        console.log('Row count:', rows[0].count);
    } finally {
        await conn.end();
    }
}

main().catch(console.error);
