const { default: mongoose } = require("mongoose");
require ("dotenv").config

const DBconnect = async ()=> {
    try {
        await mongoose.connect("mongodb+srv://jaydipgadhiya0369:chamcham2@cluster0.hbvwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("okay.......!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = DBconnect