const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product');

//GET POST PUT DELETE
// http://localhost:3001/api/product/registerProduct
router.post("/registerProduct", ProductController.registerProduct);
// http://localhost:3001/api/product/listProduct
router.get("/listProduct", ProductController.listProduct);

module.exports = router;