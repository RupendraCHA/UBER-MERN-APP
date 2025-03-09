const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const connectToDB = require("./db/db.js")
const userRoutes = require("./routes/user.routes.js")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectToDB()


app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/users", userRoutes)


module.exports = app