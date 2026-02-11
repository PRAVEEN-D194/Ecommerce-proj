const express = require("express");
const app = express();
const dotenv = require("dotenv");//thims for enviroment variable
const path = require('path');  // already avilablie in node js
const connectDatabase = require("./config/connectDatabase");//this for connecting to the database
const cors = require("cors");// this for cross origin resource sharing
dotenv.config({ path: path.join(__dirname, "config", "config.env") });


const products = require('./routes/product');//importing the product route from routes folder
const orders = require('./routes/order');

connectDatabase();//this for connecting to the database

app.use(express.json());//this for changing json
app.use(cors());// this for cross origin resource sharing
app.use('/api/v1/',products);//this for bofore porducts we have to write api/v1/ because we have to write in postman api/v1/products
app.use('/api/v1/',orders);

app.listen(process.env.PORT, () => {// this is for runing the server.  process.env.PORT is for geting the port number from enviroment variable
    console.log(`server listerning to port ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})