const mongoose = require("mongoose")


const connectToDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database.")
        
    } catch (error) {
        console.log("Error while connecting", error)
    }
}

module.exports = connectToDB