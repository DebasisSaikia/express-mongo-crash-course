const express = require("express");
const app = express();

const PORT = process.env.port || 3100;

// db connection
const MongoClient = require("mongodb").MongoClient;

let db;

MongoClient.connect("mongodb://localhost:27017/", function (err, client) {
  if (err) throw err;

   db = client.db("ecom");
});


app.get("/", (req, res) => {

  db.collection("products")
    .find()
    .toArray(function (err, result) {
      if (err) throw err;

      console.log(result);
    });
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
