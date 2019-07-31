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
function inventory () {
  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);


      buyPrompt();
    });
}
function buyPrompt(){
  inquirer.prompt([ 
    {
      type:"input",
      message: "Please type Item ID you like to buy",
      name: "ID"
     },
    {
      type:"input",
      message: "Please type how many items you would like to buy",
      name: "Quantity"
    }
  ]).then (function (inputs){
    console.log(inputs)
    checkInventory();
  });
};
 function checkInventory(inputs){
   console.log(inputs)
 }

