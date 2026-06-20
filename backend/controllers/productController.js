const db = require("../db");

exports.getProducts = (req, res) => {

  db.query(
    "SELECT * FROM products",
    (err, results) => {

      if (err)
        return res.status(500).json(err);

      res.json(results);

    }
  );

};

exports.addProduct = (req, res) => {

  const { name, price, description } = req.body;

  db.query(

    "INSERT INTO products(name,price,description) VALUES(?,?,?)",

    [name, price, description],

    (err, result) => {

      if (err)
        return res.status(500).json(err);

      res.json({

        message: "Product added"

      });

    }

  );

};

exports.deleteProduct = (req, res) => {

  const id = req.params.id;

  db.query(

    "DELETE FROM products WHERE id=?",

    [id],

    (err, result) => {

      if (err)
        return res.status(500).json(err);

      res.json({

        message: "Deleted"

      });

    }

  );

};