const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")

const app = express()

// Middleware 
app.use(express.json())

app.use(cors())

//Use the routes we created
app.use(taskRoutes)

const PORT = process.env.PORT || 5000

// Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server running on Port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()
