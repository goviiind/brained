const express = require("express")
require("dotenv").config()
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 5000
const connectDB = require("./config/db")
const authRoutes = require("./routes/auth")
const profileRoutes =require("./routes/profile")

//DB Connection

connectDB()

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())


//Routes
app.use("/api/user",authRoutes)
app.use("/api/profile",profileRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`);
})