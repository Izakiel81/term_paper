const init_tables = `
CREATE TABLE IF NOT EXISTS Property (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Address VARCHAR(100),
    Type VARCHAR(50),
    Price DECIMAL(10,2),
    Status VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS Client (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Phone VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS Agent (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100),
    Phone VARCHAR(20)
);
CREATE TABLE IF NOT EXISTS TransactionTable (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    PropertyId INT,
    ClientId INT,
    AgentId INT,
    TransactionDate DATE,
    Amount DECIMAL(10,2),
    FOREIGN KEY (PropertyId) REFERENCES Property(Id),
    FOREIGN KEY (ClientId) REFERENCES Client(Id),
    FOREIGN KEY (AgentId) REFERENCES Agent(Id)
);
CREATE TABLE IF NOT EXISTS PropertyFeature (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    FeatureName VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS Property_PropertyFeature (
    PropertyId INT,
    FeatureId INT,
    FOREIGN KEY (PropertyId) REFERENCES Property(Id),
    FOREIGN KEY (FeatureId) REFERENCES PropertyFeature(Id)
);
CREATE TABLE IF NOT EXISTS PropertyImage (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    PropertyId INT,
    ImageURL VARCHAR(255),
    FOREIGN KEY (PropertyId) REFERENCES Property(Id)
);
CREATE TABLE IF NOT EXISTS PropertyReview (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    PropertyId INT,
    ClientId INT,
    Rating INT,
    ReviewText TEXT,
    FOREIGN KEY (PropertyId) REFERENCES Property(Id),
    FOREIGN KEY (ClientId) REFERENCES Client(Id)
);

CREATE TABLE IF NOT EXISTS AgentCommission (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    AgentId INT,
    TransactionId INT,
    CommissionAmount DECIMAL(10,2),
    FOREIGN KEY (AgentId) REFERENCES Agent(Id),
    FOREIGN KEY (TransactionId) REFERENCES TransactionTable(Id)
);
`;

export default init_tables;
