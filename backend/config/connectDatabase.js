
const mongoose = require('mongoose');
const connectDatabase = ()=>{
    mongoose.connect(process.env.DB_URI).then((con)=>{//this for connecting to the database
        console.log("Database connected to the host:"+con.connection.host );
    })
};
module.exports = connectDatabase;