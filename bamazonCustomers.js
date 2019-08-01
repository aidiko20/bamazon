var mysql = require("mysql");
require("console.table");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Sladkiy2216",
  database: "bamazon_db"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  inventory();
});
function inventory() {
  connection.query("SELECT * FROM products", function (err, res) {
    console.log("\r\n\r\n\r\n*********  WELCOME TO BAMAZON  *********\r\n\r\n");
    if (err) throw err;
    console.table(res);


    buyPrompt(res);
  });
}
function buyPrompt() {
  inquirer.prompt([
    {
      type: "input",
      message: "Which Item ID you would like to buy?\r\n",
      name: "ID",
      validate: function (value) {
        if (value!== "" && isNaN(value) == false && value < 11) {
          return true;
        } else {
          return ("\r\nSorry no item under that id\r\n");
        }
      }
    },
    {
      type: "input",
      message: "How many items you would like to buy?\r\n",
      name: "Quantity",
      validate: function (value) {
        if (value!== "" && isNaN(value) == false) {
          return true;
        } else {
          return ("\r\nPlease enter a number\r\n");
        }
      }
    }
  ]).then(function (inputs) {
    var query = "SELECT ID, PRODUCT_NAME, DEPARTMENT_NAME, PRICE, QUANTITY FROM products WHERE id = ?";
    connection.query(query, [inputs.ID], function (err, res){
      for (var i = 0; i<res.length; i++) {
        console.log("\r\nYour choice is: " + (res[i].PRODUCT_NAME) + " " + ("in the quantity of ") + (inputs.Quantity));
        if (res[i].QUANTITY < inputs.Quantity) {
          console.log("\r\nSorry we don't have enough stock\r\n");
          buyPrompt();
        }
        else {
          console.log("\r\n~~~~~ Your order was made successfully! ~~~~~\r\n");
          var totalCost = res[i].PRICE * inputs.Quantity;
          console.log("\r\nYour total cost for " + res[i].PRODUCT_NAME + " is " + totalCost);
          console.log("\r\n+++++ Thank you for shopping on Bamazon. Have a good day! +++++\r\n");
          var updateQuantity = res[i].QUANTITY - inputs.Quantity;
          console.log("\r\nQuantity of " + res[i].PRODUCT_NAME + " has been updated to " + updateQuantity);
          connection.query("UPDATE products SET QUANTITY = " + updateQuantity + " WHERE ID = " + res[i].ID, function(err, res){
          checkOut();
          });
        }
      }
    })
  })
}
function checkOut(){
  inquirer.prompt([
    {
      name: "buyMore",
      type: "list",
      message: "\r\nDo you want to buy more products?\r\n",
      choices:["Yes", "NO"]
    }
  ]).then (function(res) {
    if (res.buyMore == "Yes") {
      console.log("\r\nLet's shop more!\r\n");
      inventory();
      buyPrompt();
      
    } else {
      console.log("\r\n>>>>> Thank you for your business with Bamazon <<<<<\r\n");
      connection.end();
    }
  }) 
}