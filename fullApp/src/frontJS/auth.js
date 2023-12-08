import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

export async function authenticateUser(username, password) {
    const query = 'SELECT * FROM Suppliers WHERE username = ?';

    try {
        const [rows, fields] = await pool.query(query, [username]);

        if (rows.length === 0) {
            console.error(`User with username '${username}' not found.`);
            return false;
        }

        const supplier = rows[0];
        const storedPassword = supplier.password;

        if (password === storedPassword) {
            console.log(`User '${username}' authenticated successfully.`);
            return true;
        } else {
            console.error(`Authentication failed for user '${username}'. Incorrect password.`);
            return false;
        }
    } catch (error) {
        console.error('Error while authenticating user:', error);
        return false;
    }
}

