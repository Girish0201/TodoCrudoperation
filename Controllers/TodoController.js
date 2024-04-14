const Todo = require("../Model/TodoModal.js")


module.exports.getTodo = async(req,res) => {
    //will retrieve all documents from the Todo collection.
    const todo = await Todo.find()
    res.send(todo)
}

module.exports.addTodo = async(req,res) => {
     // Destructuring  text from the request body
    const {text} = req.body

    try {
        // Check if the text already exists in the database
        const existingTodo = await Todo.findOne({ text });

        if (existingTodo) {
            console.log("Error: Text already exists in the todo list");
            return res.status(400).send("Text already exists in the todo list");
        }

        // If the text doesn't exist, create a new todo item
        const newTodo = await Todo.create({ text });

        console.log("Text is added to the todo list");
        return res.status(200).send("Added to the list successfully");
    }catch (err) {
        console.log("Error:", err);
        return res.status(500).send("Internal server error");
    }


}

module.exports.updateTodo = async(req,res) => {
    // Destructuring id and text from the request body
   const {id} = req.params;
    const { text } = req.body;
    console.log(id)

    try {
        //  const updatedodoItem = await Todo.findById({_id:id})
        // console.log("updatedodoItem",updatedodoItem )
         //updating the database
        const updatedTodoItem = await Todo.findByIdAndUpdate(id, { text });
        console.log("updatedTodoItem",updatedTodoItem)



        if (updatedTodoItem) {
            res.status(200).json({ message: "Todo updated successfully", updatedTodoItem });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (error) {
        console.error("Error updating todo:", error);
        res.status(500).json({ message: "Error updating todo", error });
    }
};



module.exports.deleteTodo = async (req, res) => {
     // Destructuring id  from the request body
    const {id } = req.params;
    try {
        //deleting the database
        const deletedTodoItem = await Todo.findByIdAndDelete({_id:id});
        if (deletedTodoItem) {
            res.status(200).json({ message: "Todo deleted successfully" });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Error deleting todo", error });
    }
};
