const mongoose  =  require("mongoose");
// mongodb connection

const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://bathigirish:girish@cluster0.dsjownr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("db connected sucessfully")
    }
    catch (err) {
        console.log("DB ERROR" + err)
    }
}


module.exports = dbConnection
