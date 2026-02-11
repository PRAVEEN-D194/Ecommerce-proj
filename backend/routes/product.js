const express = require ("express");
const { getProducts, getSingleProduct } = require("../controllers/productcontrollers");
const router = express.Router();//router is used for creating routes in express

router.route('/products').get(getProducts);//router.route => route is a method of router which is used for creating routes. .get => get is a method of route which is used for get request. getProducts => getProducts is a controller function which is used for handling the get request.
router.route('/products/:id').get(getSingleProduct);

module.exports = router;