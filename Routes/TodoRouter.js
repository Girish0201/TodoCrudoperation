const express = require("express")
const {getTodo,addTodo,updateTodo,deleteTodo} = require("../Controllers/TodoController")
const routes = express.Router()

// Define routes and associate them with controller functions

// GET route to fetch all todo items
routes.get("/",getTodo)

// POST route to add a new todo item
routes.post("/add",addTodo)

// PUT route to update an existing todo item by its id
routes.put("/update/:id",updateTodo)

// DELETE route to delete an existing todo item by its id
routes.delete("/delete/:id",deleteTodo)

module.exports = routes
