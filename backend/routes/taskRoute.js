const express = require("express")
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../controllers/taskController")
const router = express.Router()

//Create a Task
router.post("/api/tasks", createTask)

// Get Tasks
router.get("/api/tasks", getTasks)

// Get single Task
router.get("/api/tasks/:id", getTask)

// Get single Task
router.delete("/api/tasks/:id", deleteTask)

// Update Task
router.put("/api/tasks/:id", updateTask) //update with put --> specify every field --> "name" and "completed"

module.exports = router