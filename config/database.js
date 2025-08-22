const mongoose = require('mongoose');

const dbConnetion = () => {
    mongoose.connect("mongodb://localhost:27017/ecommerce").then((connect) => {
        console.log(`MongoDB connected successfully: ${connect.connection.host}`);
    });
}
module.exports = dbConnetion;
