
const express = require("express")
const app = express()
const dbConnection = require("./Database/db.js")
const routes = require("./Routes/TodoRouter.js")
const dotenv = require("dotenv")
const bodyParser = require('body-parser');

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

//Db connection
dbConnection()

//env connection
dotenv.config()

//routes
app.use("/v1",routes)

//PORT Connection
const PORT = process.env.PORT || 5000

//Listening to the port
app.listen(PORT,() => {
    console.log("Sever is connect at the Port on ",PORT)
})

