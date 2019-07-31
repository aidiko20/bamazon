var mysql = require("mysql");
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
});
var inventory = function () {
  var query = "SELECT * FROM products";
  connection.query(query, function (err, res) {
    if (err) throw err;
    var showTable = new Table({
      head: ("Product ID", "Product Name", "Category", "Price per item", "Quantity"),
      colWidth: [15, 30, 30, 15, 20]
    });

    for (var i = 0; i < res.length; i++) {
      showTable.push(
        [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].quantity]
      );
    }
      console.log(showTable.toString());
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
    },
  ]).then (function (inputs){
    var quantityBought = answers.Quantity;
    var IDbought = anwers.ID;
    orderBuy(IDrequest, quantityRequest);
  });
};