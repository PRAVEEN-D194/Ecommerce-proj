const ProductModel = require("../models/productModel");

//get Products API -/api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,//
            $options: 'i'//case insensitive
        }
    } : {};
    const product = await ProductModel.find(query);
    res.json({
        sucess: true,
        product
    })
};

//get single product API -/api/v1/product/:id
exports.getSingleProduct = async (req, res, nesxt) => {

    try {
        const product = await ProductModel.findById(req.params.id);
        res.json({
            sucess: true,
            product
        })
    } catch (error) {
        res.status(404).json({
            success: false,
            message: 'unable to find the product'
        })
    }

}