import mysql from 'mysql2'
//Imports the .env file information
import dotenv from 'dotenv'
dotenv.config();

//Creates a pool of connections for each query 
//.promise allows use of promise-based APIs
//    Allows async/await functions to be used in queries
// console.log("Important: This call to createpool does not work because at the time of its calling"+
// "the .env file has not been read yet. This is why the .env file is read at the top of the file");

// console.log("pass: " + process.env.DB_PASSWORD);

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();


//Database Functions

export async function createSupplier(supplierID,  
    supplierName, supplierAddress, 
    supplierCityState, supplierZip, registrationDate,
    username, password, FoodCategories) {

    const result = await pool.query(`
    INSERT INTO Suppliers (SupplierID,
        SupplierName, SupplierAddress, 
        SupplierCityState, SupplierZip, RegistrationDate, 
        username, password, FoodCategories)  
         VALUES (?,?,?,?,?,?,?,?,?)`, [supplierID,
        supplierName, supplierAddress, 
        supplierCityState, supplierZip, registrationDate, 
        username, password, FoodCategories])
    return result
}


export async function getSuppliers() {

    const [rows] = await pool.query("SELECT * FROM Suppliers")
    // if(err) {
    // return console.log("Error1")
    // } else 
    if(rows == null) {
        console.log("rows is null or undefined")
        return null;
    }
    else if(!rows.length) {
        console.log("getSuppliers ERR!!: rows.length = 0")
    return null;
    }else if (!rows[0]) {
        console.log("getSuppliers ERR!!: !rows[0]")
    return null;
    }
    return rows
}

createSupplierContact
export async function createSupplierContact(SupplierID, PhoneNumber, Email) {

    const result = await pool.query(`
    INSERT INTO supplierContact (SupplierID, PhoneNumber, Email)  
    VALUES (?,?,?)`, [SupplierID, PhoneNumber, Email])
    return result
}

async function fetchSuppliers(categoryName) {
  console.log("hello");
    try {
        const [suppliers] = await connection.execute('SELECT * FROM Suppliers WHERE category = ?', [FoodCategories]);
      if (response.ok) {
        const suppliers = await response.json();
        console.log(suppliers); // Handle the received suppliers data (e.g., display on the map)
      } else {
        throw new Error('Failed to fetch suppliers');
      }
    } catch (error) {
      console.error(error);
    }
    console.log("hello");
  }
  
  

// import mysql from 'mysql2'
// //Imports the .env file information
// import dotenv from 'dotenv'
// dotenv.config();

// //Creates a pool of connections for each query 
// //.promise allows use of promise-based APIs
// //    Allows async/await functions to be used in queries
// console.log("Important: This call to createpool does not work because at the time of its calling"+
// "the .env file has not been read yet. This is why the .env file is read at the top of the file");

// console.log("pass: " + process.env.DB_PASSWORD);

// setTimeout(()=>{const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// }).promise();
// const result = pool.query(`
//     SELECT * FROM Suppliers`);

// console.log(result);

// }, 1000);

// //Database Functions

// export async function createSupplier(supplierID, 
//     supplierName, supplierAddress, 
//     supplierCityState, supplierZip, registrationDate) {
//         console.log("haskdhkahkdhaj");

//         const pool = mysql.createPool({
//             host: process.env.DB_HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DB_NAME
//         }).promise();


//     const result = await pool.query(`
//     INSERT INTO Suppliers (SupplierID,
//         SupplierName, SupplierAddress, 
//         SupplierCityState, SupplierZip, RegistrationDate)  
//          VALUES (?,?,?,?,?,?)`, [supplierID,
//         supplierName, supplierAddress, 
//         supplierCityState, supplierZip, registrationDate]);
//             return result;
// }

// // const result = await createSupplier('1','Name','Address','CityState','Zip',)  

// // console.log('ID: ',result.supplierID)


// // async function getSupplier() {
// //     const [rows] = await pool.query('SELECT * FROM suppliers')
// //     return rows
// // }


