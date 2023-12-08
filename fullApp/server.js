import express from 'express';
import { authenticateUser } from './src/frontJS/auth.js'
//Imports the .env file information
import dotenv from 'dotenv'; 
dotenv.config();

//Allows the use of ES modules 
//(import export statements instead of common ESmodules) 
import path from 'path';
import { fileURLToPath } from 'url';

//imports mysql functions
import {createSupplier, getSuppliers, createSupplierContact} from './database/database.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 // NOTE: The .env file was not correctly located by the dotenv.config() function without explicitly
// specifying a path in dotenv.config
// Load environment variables from .env file
// dotenv.config({ path: path.join(__dirname, '/.env')});

// console.log("pass: " + process.env.DB_PASSWORD);
// console.log("dir: " + path.join(__dirname, '/.env'));

//default port
const port=process.env.PORT || 3000

//Our app (instance of express)
const app = express();


//API Middleware (allows us to read request objects)
app.use(
    express.urlencoded({ //parsers incoming requests 
        extended: true   //with urlencoded payloads 
    })
);
//To statically serve the files in the src directory
app.use("/src", express.static(__dirname + "/src"));
//app.use("/database", express.static(__dirname + "/src"));

//lets express know will be expecting json
app.use(express.json());
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);
    res.status(500).json({
        message: 'Something went wrong'
    });
});


//app is listening on the port 
app.listen(port, () => 
    console.log(`Server started on port: ${port}`));

    console.log("Remember to check (with code; this could be a try catch statement to check if connection works or throws an exception) if connection to database is working once server starts");

    

//API Routes


//App is on the / route receive a GET request
//send back a response
//Used to load the rform.html file (will be switched
//with index.html once all the code is working)
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/src/pages/terms.html")
});
 // CRUD for suppliers
app.get('/supplierAddress', async (req, res) => {
    const supplierAddresses = await getSuppliers()
    if (!supplierAddresses) {
        return res.status(204).send({status: 'No available supplier data'})
    }
    else {
        console.log("GotSupplierAddress")
        console.log(supplierAddresses)
        return res.status(200).json(supplierAddresses)
    }
})
//CRUD for suppliers
app.post('/sellerData', async (req, res) => {
    const{supplierID, supplierName, supplierAddress,
        supplierCityState, supplierZip, 
        registrationDate, username, password, 
        FoodCategories, PhoneNumber, Email} = req.body

    const result = await createSupplier(supplierID,  
        supplierName, supplierAddress, 
        supplierCityState, supplierZip, 
        registrationDate, username, password, FoodCategories)

    const resultContact = await createSupplierContact(supplierID, PhoneNumber, Email)

    res.status(201).send({status:'success', result, resultContact})

})


// CRUD for suppliers by category
// app.get('/suppliersByCategory', async (req, res) => {
//     const category = req.query.category; // Retrieve category from request query parameters
  
//     try {
//       const suppliers = await getSuppliersByCategoryFromDB(category);
//     try {
//       const suppliers = await getSuppliersByCategoryFromDB(category);
  
//       if (suppliers.length === 0) {
//         return res.status(404).json({ status: 'failed', message: 'No suppliers found for the given category.' });
//       }
//       if (suppliers.length === 0) {
//         return res.status(404).json({ status: 'failed', message: 'No suppliers found for the given category.' });
//       }
  
//       res.status(200).json(suppliers);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'failed', message: 'Error fetching suppliers by category.' });
//     }
//   });
//       res.status(200).json(suppliers);
//      catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'failed', message: 'Error fetching suppliers by category.' });
//     }
//   })

// Add this route to handle authentication
app.post('/authenticated', async (req, res) => {
    const { username, password } = req.body;
  
    // You can implement the logic here to check if the provided username and password
    // match a user in your database.
    // Assuming you have a function to query your database and check the credentials.
  
    // For example, if you have a function named 'authenticateUser' that checks the credentials:
    const isAuthenticated = await authenticateUser(username, password);
  
    if (isAuthenticated) {
      // Authentication successful
      res.status(200).json({ status: 'success', message: 'Authentication successful' });
    } else {
      // Authentication failed
      res.status(401).json({ status: 'failed', message: 'Authentication failed' });
    }
  });

//       res.status(200).json(suppliers);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ status: 'failed', message: 'Error fetching suppliers by category.' });
//     }
//   });
// >>>>>>> 2cf1049cd975b13d87e4c63a9f62e9e733185ce5
  
  
// // Handdling requests for different food categories. 
// // Function to fetch suppliers by category from the database
// async function getSuppliersByCategoryFromDB(category) {
//     try {
//       // Perform your database query here using your preferred database library
//       // Replace this with your actual query logic
//       const suppliers = await YourDatabaseLibrary.query('SELECT * FROM suppliers WHERE category = ?', [category]);
//       return suppliers; // Return fetched suppliers
//     } catch (error) {
//       throw error; // Throw any database query errors
//     }
//   }
  
// // Handdling requests for different food categories. 
// app.get('/foods', (req, res) => {
//     const category = req.query.category;
//     // Perform CRUD operations or fetch data based on the 'category' or
//     // Query the database or perform operations based on the category received
//     app.get('/sourceinventory', (req, res) => {
//         connection.query('SELECT * FROM SourceInventory', (err, results) => {
//           if (err) throw err;
//           res.json(results);
//         });
//       });
//     // Return the corresponding data for the requested food category
//     res.send(/* Data for the requested food category */);
// });
































/*
app.post('/form', (req, res) => {
    console.log(req.body.name)
    res.send('Hello'+ req.body.name)
})


//This is used to listen on the port
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    res.send('Full Name is: '))*/


