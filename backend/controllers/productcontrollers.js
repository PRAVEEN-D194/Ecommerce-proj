const ProductModel = require("../models/productModel");

//get Products API -/api/v1/products
exports.getProducts = async (req, res, next) =>{

    const product = await ProductModel.find({});
    res.json({
        sucess:true,
        product
    })
};

//get single product API -/api/v1/product/:id
exports.getSingleProduct = async (req, res, nesxt) =>{

    try{
        const product = await ProductModel.findById(req.params.id);
    res.json({
        sucess: true,
        product
    })
    }catch(error){
        res.status(404).json({
            success: false,
            message: 'unable to find the product'
        })
    }
    
}