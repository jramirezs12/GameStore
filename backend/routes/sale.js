const express = require('express');
const router = express.Router();
const SaleController = require('../controllers/sale');

//GET POST PUT DELETE
// http://localhost:3001/api/sale/registerSale
router.post("/registerSale", SaleController.registerSale);
// http://localhost:3001/api/sale/listRole
router.get("/listSale", SaleController.listSale);

module.exports = router;