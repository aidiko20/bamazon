DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR (100) NULL,
  department_name VARCHAR (100) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("MacBook", "Computers", 1000, 50), ("T-Shirt", "Clothing", 20, 100), ("Dining Chair", "Furniture", 300, 5), 
("Banana", "Produce", 0.45, 500), ("Paper Towels", "Cleaning Supplies", 12.95, 200), ("A4 paper", "Back to school", 3.45, 300),
("Sandals", "Shoes", 45, 20), ("Wall Art", "Decor", 15, 10), ("Bed Sheets", "Textile", 50, 10), ("Cofee cup", "Household", 5, 20)
