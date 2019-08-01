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
    console.log("\r\n\r\n\r\n*********WELCOME TO BAMAZON*********\r\n\r\n\r\n");
    if (err) throw err;
    console.table(res);


    buyPrompt(res);
  });
}
function buyPrompt() {
  inquirer.prompt([
    {
      type: "input",
      message: "Please type Item ID you like to buy",
      name: "ID",
      validate: function (value) {
        if (value!== "" && isNaN(value) == false && value < 11) {
          return true;
        } else {
          return ("Sorry no item under that id");
        }
      }
    },
    {
      type: "input",
      message: "Please type how many items you would like to buy",
      name: "Quantity",
      validate: function (value) {
        if (value!== "" && isNaN(value) == false) {
          return true;
        } else {
          return ("Please enter a number");
        }
      }
    }
  ]).then(function (inputs) {
    var query = "SELECT id, product_name, price, quantity FROM products WHERE id = ?";
    connection.query(query, [inputs.ID], function (err, res){
      for (var i = 0; i<res.length; i++) {
        console.log("Your choice is: " + (res[i].product_name) + " " + ("in the qunatity of ") + (inputs.Quantity));
        if (res[i].quantity < inputs.Quantity) {
          console.log("Sorry we don't have enough stock");
        }
        else {
          console.log("Your order was made successfully ");
          var totalCost = res[i].price * inputs.Quantity;
          console.log("Your total cost for " + res[i].product_name + " is " + totalCost);
          console.log("Thank you for shopping in Bamazon. Have a good day!");
        }
      }
    });
  })
}