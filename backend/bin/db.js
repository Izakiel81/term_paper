import mysql from 'mysql2';
import init_tables from './db_init_queries.js';

const connection = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    user: "root",
    password: "123",
    port: 3306,
    database: "term_paper_db"
})
const connect = () => {connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to database!")

    connection.query(init_tables, (err, result) => {
        if (err) throw err;
        console.log("Database initialized!")
    });
});}

export default connect;