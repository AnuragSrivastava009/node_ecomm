const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.MONGO_URI);
const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Connected");
    }).catch((error) => {
        console.log(error);
    });
}
module.exports = connectDatabase