CREATE DATABASE if not exists fo_database_02;
USE fo_database_02;

CREATE TABLE if not exists Suppliers (
    SupplierID INT PRIMARY KEY, -- Control Number
    SupplierName VARCHAR(255), 
    SupplierAddress VARCHAR(255),
    SupplierCityState VARCHAR(255),
    SupplierZip VARCHAR(255),
    RegistrationDate DATE,
    Username VARCHAR(255),
    Password VARCHAR(255),
);

CREATE TABLE if not exists SupplierContact (
    SupplierID INT PRIMARY KEY, -- Control Number
    PhoneNumber VARCHAR(255),
    Email VARCHAR(255),
    FOREIGN KEY (SupplierID) 
    REFERENCES Suppliers(SupplierID)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO categories (category_name) VALUES
    ('Grains'),
    ('Milk/milk products'),
    ('Fruit/fruit products'),
    ('Eggs'),
    ('Meat and poultry'),
    ('Fish and shellfish'),
    ('Vegetables'),
    ('Fats and oils'),
    ('Legumes/nuts/seeds'),
    ('Sugar/sugar products'),
    ('Non-alcoholic beverages');


    


-- CREATE TABLE if not exists SupplierLocation (

--     SupplierID INT PRIMARY KEY, -- Control Number
--     SupplierLat VARCHAR(255),
--     SupplierLong VARCHAR(255),
--     FOREIGN KEY (SupplierID) 
--     REFERENCES Suppliers(SupplierID)
--     ON DELETE CASCADE
--     ON UPDATE CASCADE
-- );

-- ADD CONSTRAINT `supplierLocation`
--   FOREIGN KEY (`SupplierID`)
--   REFERENCES `fo_database_02`.`suppliers` (`SupplierID`)
--   ON DELETE CASCADE
--   ON UPDATE CASCADE;

-- CREATE TABLE if not exists Users (
--     UserID INT PRIMARY KEY,
--     Username VARCHAR(255),
--     AcceptedPolicies BOOLEAN,
--     Email VARCHAR(255),
--     RegistrationDate DATE,
--     GPSAccess BOOLEAN
-- );


-- CREATE TABLE if not exists FoodItems (
--     UPC VARCHAR(255) PRIMARY KEY,
--     FoodName VARCHAR(255),
--     FoodDescription TEXT
-- );




-- CREATE TABLE if not exists FoodSources (
--     SourceID INT PRIMARY KEY,
--     SupplierID INT,
--     FoodSourceName VARCHAR(255),
--     GPSLocation VARCHAR(255),
--     FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
-- );



-- CREATE TABLE if not exists UserFavorites (
--     UserID INT,
--     SourceID INT,
--     PRIMARY KEY (UserID, SourceID),
--     FOREIGN KEY (UserID) REFERENCES Users(UserID),
--     FOREIGN KEY (SourceID) REFERENCES FoodSources(SourceID)
-- );
-- CREATE TABLE if not exists SourceInventory (
--     SourceID INT,
--     UPC VARCHAR(255),
--     AvailabilitySchedule VARCHAR(255),
--     PRIMARY KEY (SourceID, UPC),
--     FOREIGN KEY (SourceID) REFERENCES FoodSources(SourceID),
--     FOREIGN KEY (UPC) REFERENCES FoodItems(UPC)
-- );
-- CREATE TABLE Sessions (
--     SessionID INT PRIMARY KEY,
--     UserID INT,
--     ExpiryTimestamp TIMESTAMP,
--     GPSAccess BOOLEAN,
--     FOREIGN KEY (UserID) REFERENCES Users(UserID)
-- );

