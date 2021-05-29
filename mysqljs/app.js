// https://www.sitepoint.com/using-node-mysql-javascript-client/

require('dotenv').config({path: './config/.env'})

const mysql = require('mysql2');
const con = mysql.createConnection({
  // host: 'localhost',
  // user: 'root',
  // password: 'I65faue#MB7#',
  // database: 'levermann'  

  host: 'nl1-ss18.a2hosting.com',
  user: 'rapidtec_Rapid1898',  
  password: process.env.DBPW_A2HOSTED,  
  database: 'rapidtec_levermann'  
});
con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  }); 
    
// // SELECT Logic
// con.query(
//     'SELECT * FROM scores',
//     (err,rows) => {
//         if(err) throw err;  
//         // console.log('Data received from Db:');
//         // console.log(rows);
//         rows.forEach( (row) => {
//             console.log(`${row.ticker} ${row.indexName} ${row.scoreFull}`);
//         });
//     });

// // SELECT Logic with WHERE statement
// con.query(
//     'SELECT * FROM scores WHERE ticker = ?', 
//     // ["0005.HK"],
//     ["AAPL"],
//     (err,rows) => {
//         if(err) throw err;  
//         // console.log('Data received from Db:');
//         // console.log(rows);
//         rows.forEach( (row) => {
//             console.log(`${row.ticker} ${row.indexName} ${row.scoreFull} ${row.lastEarnings}`);
//             if (row.lastEarnings) {
//               console.log("Not Null!")
//             } else {
//               console.log("Null!")
//             }
//         });
//     });

// // SELECT Logic with WHERE statement 2
// con.query(
//   `SELECT ticker FROM workingqueue WHERE ticker = ?`,
//   // ["0005.HK"],
//   ["FB"],
//   (err,rows) => {
//       if(err) throw err;  
//       console.log(rows.length)
//       if (rows.length > 0) {
//         console.log(rows[0].ticker)
//         console.log(typeof(rows[0].ticker))
//       }
//   });

// // INSERT Logic 1
// const data = { ticker: 'XYZ', calcDate: '2021-03-31', scoreFull: 95 };
// con.query('INSERT INTO scores SET ?',
//     data,
//     (err, res) => {
//         if(err) throw err;
//         console.log('Last insert ID:', res.insertId);
//     });

// // INSERT Logic 2#
// tmpTicker = "zhg"
// const actDate = new Date().toISOString().split('T')[0]
// const data = {ticker: tmpTicker.toUpperCase(), requestDate: actDate}
// con.query('INSERT INTO workingqueue SET ?',
//     data,
//     (err, res) => {
//         if(err) throw err;
//         console.log(`Inserted row for ${tmpTicker.toUpperCase()}`)
//     });

// // UPDATE Logic 
// con.query(
//     'UPDATE scores SET scoreFull = ?, scoreLight = ? WHERE ticker = ? AND calcDate = ?',
//     [93, 95, "AAPL", "2021-04-12"],
//     (err, result) => {
//       if (err) throw err;
//       console.log(`Changed ${result.changedRows} row(s)`);
//     }
// );

// // DELETE Logic
// con.query(
//     'DELETE FROM scores WHERE ticker = ?',
//     ["XYZ"],
//     (err, result) => {
//         if (err) throw err;
//         console.log(`Deleted ${result.affectedRows} row(s)`);
//     }
//   );

con.end((err) => {
// The connection is terminated gracefully
// Ensures all remaining queries are executed
// Then sends a quit packet to the MySQL server.
});