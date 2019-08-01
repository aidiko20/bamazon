# Bamazon
Contributor: Aida Yrysbekova
------------------
Created on: 07/29/2019
------------------
Technologies used: Github, MySQL, Node.js, Javascript, Node Packages (MySQL, Inquirer, Console.table)
-----------------------------
#Video here ()
-----------------------------
#How to use the app
1. Open terminal
2. Navigate to file named bamazonCustomers.js
3. Install all packages (MySQL, Inquirer, console.table)
4. In terminal type "node bamazonCustomers.js
5. Content with inventory will display
6. You will be asked to input ID number of product you want to buy
  1. If you enter ID number different from the inventory, you will be asked to input ID number again. 
7. You will also be asked to input quantity of product you want to buy
  1. If you input more then actual quantity of product message "Sorry we don't have enough stock" will be displayed
     1. You will be asked to put ID number of product again
8. Congratulations you made your purchase.
9. Your total cost will be displayed
10. MySQL will update on quantity of the product that was purchased
11. You will be asked if you want to buy more products
  1. Choose 'Yes' to buy more
    1. You will be asked to input ID number again.
  2. Choose 'No' to stop.


#Instruction for building the app
1. Create a MySQL Database called `bamazon`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bamazonCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

