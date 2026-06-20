const express = require("express");

const router = express.Router();

const productController = require("../controllers/productController");

router.get(
  "/products",
  productController.getProducts
);

router.post(
  "/products",
  productController.addProduct
);

router.delete(
  "/products/:id",
  productController.deleteProduct
);

module.exports = router;