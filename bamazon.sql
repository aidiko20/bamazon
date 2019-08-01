DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  ID INT AUTO_INCREMENT NOT NULL,
  PRODUCT_NAME VARCHAR (100) NULL,
  DEPARTMENT_NAME VARCHAR (100) NULL,
  PRICE DECIMAL(10,2) NULL,
  QUANTITY INT NULL,
  PRIMARY KEY (ID)
);

INSERT INTO products (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, QUANTITY)
VALUES ("MacBook", "Computers", 1000, 50), ("T-Shirt", "Clothing", 20, 100), ("Dining Chair", "Furniture", 300, 7), 
("Banana", "Produce", 0.45, 500), ("Paper Towels", "Household", 12.95, 200), ("A4 paper", "Back to school", 3.45, 300),
("Sandals", "Shoes", 45, 20), ("Wall Art", "Decor", 15, 10), ("Bed Sheets", "Textile", 50, 10), ("Coffee cup", "Household", 5, 20)
