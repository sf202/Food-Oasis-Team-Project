


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Wilcome88111710348',
    database: 'garden_management_system'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

const result = connection.query('SELECT * FROM user', (err, rows) => {
    if (err) throw err;
    console.log("Rows: ");
    console.log(rows[0]);
});

/*(setTimeout(() => {
    connection.end();
    console.log('Connection closed!');
  }, 2000);*/

console.log(result.rows);

/*const user = {
    Username: 'JohnDoe',
    AcceptedPolicies: true,
    Email: 'johndoe@example.com',
    RegistrationDate: new Date(),
    GPSAccess: true
};

connection.query('INSERT INTO Users SET ?', user, (err, res) => {
    if (err) throw err;
    console.log('User added!');
});

const userId = 1;
const newUsername = 'JaneDoe';

connection.query('UPDATE Users SET Username = ? WHERE UserID = ?', [newUsername, userId], (err, res) => {
    if (err) throw err;
    console.log('User updated!');
});

const userId = 1;

connection.query('DELETE FROM Users WHERE UserID = ?', userId, (err, res) => {
    if (err) throw err;
    console.log('User deleted!');
});*/

//User
//This my code:
// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static('public'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create routes
app.get('/users', (req, res) => {
  /*connection.query('SELECT * FROM user', (error, results) => {
    if (error) throw error;
    res.send(results);
  });*/

  res.sendFile('index.html', { root: '.' });
});
//1users
// CREATE operation for Users
app.post('/users', (req, res) => {
  const { UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess } = req.body;
  const sql = 'INSERT INTO Users (UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(sql, [UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess], (err, result) => {
    if (err) throw err;
    res.send('User added successfully');
  });
});

// Retrieve all users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update user details
app.put('/users/:id', (req, res) => {
  const UserID = req.params.id;
  const { Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess } = req.body;
  const sql = 'UPDATE Users SET Username=?, AcceptedPolicies=?, Email=?, RegistrationDate=?, GPSAccess=? WHERE UserID=?';
  connection.query(sql, [Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess, UserID], (err, result) => {
    if (err) throw err;
    res.send('User updated successfully');
  });
});

// Delete a user
app.delete('/users/:id', (req, res) => {
  const UserID = req.params.id;
  const sql = 'DELETE FROM Users WHERE UserID=?';
  connection.query(sql, [UserID], (err, result) => {
    if (err) throw err;
    res.send('User deleted successfully');
  });
});


// Create a new food source
app.post('/food-sources', (req, res) => {
  const { SourceID, SupplierID, FoodSourceName, GPSLocation } = req.body;
  const sql = 'INSERT INTO FoodSources (SourceID, SupplierID, FoodSourceName, GPSLocation) VALUES (?, ?, ?, ?)';
  connection.query(sql, [SourceID, SupplierID, FoodSourceName, GPSLocation], (err, result) => {
    if (err) throw err;
    res.send('Food source added successfully');
  });
});
//2food-sources
// Retrieve all food sources
app.get('/food-sources', (req, res) => {
  connection.query('SELECT * FROM FoodSources', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update food source details
app.put('/food-sources/:id', (req, res) => {
  const SourceID = req.params.id;
  const { SupplierID, FoodSourceName, GPSLocation } = req.body;
  const sql = 'UPDATE FoodSources SET SupplierID=?, FoodSourceName=?, GPSLocation=? WHERE SourceID=?';
  connection.query(sql, [SupplierID, FoodSourceName, GPSLocation, SourceID], (err, result) => {
    if (err) throw err;
    res.send('Food source updated successfully');
  });
});

// Delete a food source
app.delete('/food-sources/:id', (req, res) => {
  const SourceID = req.params.id;
  const sql = 'DELETE FROM FoodSources WHERE SourceID=?';
  connection.query(sql, [SourceID], (err, result) => {
    if (err) throw err;
    res.send('Food source deleted successfully');
  });
});

//3foodItems
// CRUD operations for FoodItems
app.post('/foodItems', (req, res) => {
  const { UPC, FoodName, FoodDescription } = req.body;
  const sql = 'INSERT INTO FoodItems (UPC, FoodName, FoodDescription) VALUES (?, ?, ?)';
  connection.query(sql, [UPC, FoodName, FoodDescription], (err, result) => {
    if (err) throw err;
    res.send('Food item added successfully');
  });
});

// Retrieve all food items
app.get('/foodItems', (req, res) => {
  connection.query('SELECT * FROM FoodItems', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update food item details
app.put('/foodItems/:upc', (req, res) => {
  const UPC = req.params.upc;
  const { FoodName, FoodDescription } = req.body;
  const sql = 'UPDATE FoodItems SET FoodName=?, FoodDescription=? WHERE UPC=?';
  connection.query(sql, [FoodName, FoodDescription, UPC], (err, result) => {
    if (err) throw err;
    res.send('Food item updated successfully');
  });
});

// Delete a food item
app.delete('/foodItems/:upc', (req, res) => {
  const UPC = req.params.upc;
  const sql = 'DELETE FROM FoodItems WHERE UPC=?';
  connection.query(sql, [UPC], (err, result) => {
    if (err) throw err;
    res.send('Food item deleted successfully');
  });
});

//4suppliers
// CRUD operations for Suppliers
app.post('/suppliers', (req, res) => {
  const { SupplierID, SupplierName, SupplierAddress, SupplierCityState, SupplierZip, RegistrationDate } = req.body;
  const sql = 'INSERT INTO Suppliers (SupplierID, SupplierName, SupplierAddress, SupplierCityState, SupplierZip, RegistrationDate) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(sql, [SupplierID, SupplierName, SupplierAddress, SupplierCityState, SupplierZip, RegistrationDate], (err, result) => {
    if (err) throw err;
    res.send('Supplier added successfully');
  });
});

// Retrieve all suppliers
app.get('/suppliers', (req, res) => {
  connection.query('SELECT * FROM Suppliers', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update supplier details
app.put('/suppliers/:id', (req, res) => {
  const SupplierID = req.params.id;
  const { SupplierName, SupplierAddress, SupplierCityState, SupplierZip, RegistrationDate } = req.body;
  const sql = 'UPDATE Suppliers SET SupplierName=?, SupplierAddress=?, SupplierCityState=?, SupplierZip=?, RegistrationDate=? WHERE SupplierID=?';
  connection.query(sql, [SupplierName, SupplierAddress, SupplierCityState, SupplierZip, RegistrationDate, SupplierID], (err, result) => {
    if (err) throw err;
    res.send('Supplier updated successfully');
  });
});

// Delete a supplier
app.delete('/suppliers/:id', (req, res) => {
  const SupplierID = req.params.id;
  const sql = 'DELETE FROM Suppliers WHERE SupplierID=?';
  connection.query(sql, [SupplierID], (err, result) => {
    if (err) throw err;
    res.send('Supplier deleted successfully');
  });
});

//5userFavorites
/// CREATE a UserFavorite relationship
app.post('/userFavorites', (req, res) => {
  const { UserID, SourceID } = req.body;
  const sql = 'INSERT INTO UserFavorites (UserID, SourceID) VALUES (?, ?)';
  connection.query(sql, [UserID, SourceID], (err, result) => {
    if (err) throw err;
    res.send('UserFavorite relationship added successfully');
  });
});

// Retrieve all UserFavorites
app.get('/userFavorites', (req, res) => {
  connection.query('SELECT * FROM UserFavorites', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update UserFavorite details (Not typically done for relationship tables)
app.put('/userFavorites/:id', (req, res) => {
  res.status(405).send('Update operation not supported for UserFavorites');
});

// Delete a UserFavorite relationship
app.delete('/userFavorites/:userID/:sourceID', (req, res) => {
  const { userID, sourceID } = req.params;
  const sql = 'DELETE FROM UserFavorites WHERE UserID=? AND SourceID=?';
  connection.query(sql, [userID, sourceID], (err, result) => {
    if (err) throw err;
    res.send('UserFavorite relationship deleted successfully');
  });
});

//6sessions 
// Create a session
app.post('/sessions', (req, res) => {
  const { SessionID, UserID, ExpiryTimestamp, GPSAccess } = req.body;
  const sql = 'INSERT INTO Sessions (SessionID, UserID, ExpiryTimestamp, GPSAccess) VALUES (?, ?, ?, ?)';
  connection.query(sql, [SessionID, UserID, ExpiryTimestamp, GPSAccess], (err, result) => {
    if (err) throw err;
    res.send('Session added successfully');
  });
});

// Retrieve all sessions
app.get('/sessions', (req, res) => {
  connection.query('SELECT * FROM Sessions', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update session details
app.put('/sessions/:id', (req, res) => {
  const SessionID = req.params.id;
  const { UserID, ExpiryTimestamp, GPSAccess } = req.body;
  const sql = 'UPDATE Sessions SET UserID=?, ExpiryTimestamp=?, GPSAccess=? WHERE SessionID=?';
  connection.query(sql, [UserID, ExpiryTimestamp, GPSAccess, SessionID], (err, result) => {
    if (err) throw err;
    res.send('Session updated successfully');
  });
});

// Delete a session
app.delete('/sessions/:id', (req, res) => {
  const SessionID = req.params.id;
  const sql = 'DELETE FROM Sessions WHERE SessionID=?';
  connection.query(sql, [SessionID], (err, result) => {
    if (err) throw err;
    res.send('Session deleted successfully');
  });
});
//7suppliercontacts
// CREATE (POST) operation for Supplier Contacts
app.post('/suppliercontacts', (req, res) => {
  const { SupplierID, PhoneNumber, Email } = req.body;
  const sql = 'INSERT INTO SupplierContact (SupplierID, PhoneNumber, Email) VALUES (?, ?, ?)';
  connection.query(sql, [SupplierID, PhoneNumber, Email], (err, result) => {
    if (err) throw err;
    res.send('Supplier contact added successfully');
  });
});

// READ (GET) operation for all Supplier Contacts
app.get('/suppliercontacts', (req, res) => {
  connection.query('SELECT * FROM SupplierContact', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// UPDATE operation for Supplier Contact details
app.put('/suppliercontacts/:id', (req, res) => {
  const SupplierID = req.params.id;
  const { PhoneNumber, Email } = req.body;
  const sql = 'UPDATE SupplierContact SET PhoneNumber=?, Email=? WHERE SupplierID=?';
  connection.query(sql, [PhoneNumber, Email, SupplierID], (err, result) => {
    if (err) throw err;
    res.send('Supplier contact updated successfully');
  });
});


// DELETE operation for a Supplier Contact
app.delete('/suppliercontacts/:id', (req, res) => {
  const SupplierID = req.params.id;
  const sql = 'DELETE FROM SupplierContact WHERE SupplierID=?';
  connection.query(sql, [SupplierID], (err, result) => {
    if (err) throw err;
    res.send('Supplier contact deleted successfully');
  });
});

//8sourceinventory
// Create operation for SourceInventory
app.post('/sourceinventory', (req, res) => {
  const { SourceID, UPC, AvailabilitySchedule } = req.body;
  const sql = 'INSERT INTO SourceInventory (SourceID, UPC, AvailabilitySchedule) VALUES (?, ?, ?)';
  connection.query(sql, [SourceID, UPC, AvailabilitySchedule], (err, result) => {
    if (err) throw err;
    res.send('Source inventory added successfully');
  });
});

// Retrieve all source inventory items
app.get('/sourceinventory', (req, res) => {
  connection.query('SELECT * FROM SourceInventory', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update source inventory details
app.put('/sourceinventory/:id', (req, res) => {
  const SourceID = req.params.id;
  const { UPC, AvailabilitySchedule } = req.body;
  const sql = 'UPDATE SourceInventory SET UPC=?, AvailabilitySchedule=? WHERE SourceID=?';
  connection.query(sql, [UPC, AvailabilitySchedule, SourceID], (err, result) => {
    if (err) throw err;
    res.send('Source inventory updated successfully');
  });
});

// Delete a source inventory item
app.delete('/sourceinventory/:id', (req, res) => {
  const SourceID = req.params.id;
  const sql = 'DELETE FROM SourceInventory WHERE SourceID=?';
  connection.query(sql, [SourceID], (err, result) => {
    if (err) throw err;
    res.send('Source inventory deleted successfully');
  });
});



// Start the server
/*const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});*/

// Create routes
/*app.get('/users', (req, res) => {
  connection.query('SELECT * FROM Users', (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      return res.status(500).send("Internal Server Error");
    }
    res.send(results);
  });
});*/

// Handle errors, validate input data, and implement security measures
app.post('/users', (req, res) => {
  const { UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess } = req.body;
  if (!UserID || !Username || !Email || !RegistrationDate) {
    return res.status(400).send("Required fields are missing.");
  }

  // Implement your own validation and security measures here

  connection.query('INSERT INTO Users (UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess) VALUES (?, ?, ?, ?, ?, ?)', [UserID, Username, AcceptedPolicies, Email, RegistrationDate, GPSAccess], (error, results) => {
    if (error) {
      console.error("Error executing MySQL query:", error);
      return res.status(500).send("Internal Server Error");
    }
    res.send('User added to the database.');
  });
});

// Similar error handling, input validation, and security measures for other routes

// ...

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
