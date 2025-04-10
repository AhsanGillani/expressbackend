
const express = require("express");
const  { createProduct, getAllProducts, getProductByID, deleteProduct} = require("../controllers/productController.js")

const router = express.Router();

router.post("/create", createProduct);
router.get("/getall", getAllProducts);
router.get('/getone/:id', getProductByID);
router.delete('/delete/:id', deleteProduct);


module.exports = router;