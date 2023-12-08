CREATE TABLE if not exists Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(255),
    AcceptedPolicies BOOLEAN,
    Email VARCHAR(255),
    RegistrationDate DATE,
    GPSAccess BOOLEAN
);


CREATE TABLE if not exists FoodItems (
    UPC VARCHAR(255) PRIMARY KEY,
    FoodName VARCHAR(255),
    FoodDescription TEXT
);



CREATE TABLE if not exists Suppliers (
    SupplierID INT PRIMARY KEY,
    SupplierName VARCHAR(255),
    Location VARCHAR(255),
    ContactInformation VARCHAR(255),
    RegistrationDate DATE
);

CREATE TABLE if not exists FoodSources (
    SourceID INT PRIMARY KEY,
    SupplierID INT,
    FoodSourceName VARCHAR(255),
    GPSLocation VARCHAR(255),
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);



CREATE TABLE if not exists UserFavorites (
    UserID INT,
    SourceID INT,
    PRIMARY KEY (UserID, SourceID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    FOREIGN KEY (SourceID) REFERENCES FoodSources(SourceID)
);
CREATE TABLE if not exists SourceInventory (
    SourceID INT,
    UPC VARCHAR(255),
    AvailabilitySchedule VARCHAR(255),
    PRIMARY KEY (SourceID, UPC),
    FOREIGN KEY (SourceID) REFERENCES FoodSources(SourceID),
    FOREIGN KEY (UPC) REFERENCES FoodItems(UPC)
);
CREATE TABLE Sessions (
    SessionID INT PRIMARY KEY,
    UserID INT,
    ExpiryTimestamp TIMESTAMP,
    GPSAccess BOOLEAN,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

