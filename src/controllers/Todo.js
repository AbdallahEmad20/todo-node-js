const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({ message: "Todos fetched successfully", todos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        
        if (!todo) {
            return res.status(404).json({ message: "هذه الـ Todo غير موجودة" });
        }

        res.status(200).json({ message: "Todo fetched successfully", todo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTodo = async (req, res) => {
    const { title, description, completed } = req.body;
    try {
        const newTodo = await Todo.create({ title, description, completed });
        res.status(201).json({ message: "Todo created successfully", newTodo });
    } catch (error) { 
        res.status(500).json({ message: error.message });
    }
};


const updateTodo = async (req, res) => {
    const { title, description, completed } = req.body;
    const { id } = req.params;
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            id, 
            { title, description, completed }, 
            { new: true, runValidators: true } 
        );
        
        if (!updatedTodo) {
            return res.status(404).json({ message: "فشل التعديل، الـ Todo غير موجودة" });
        }

        res.status(200).json({ message: "Todo updated successfully", updatedTodo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



const DeleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const DeleteTodo = await Todo.findByIdAndDelete(id);
        
        if (!DeleteTodo) {
            return res.status(404).json({ message: "فشل الحذف، الـ Todo غير موجودة" });
        }

        res.status(200).json({ message: "Todo deleted successfully", DeleteTodo });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getTodos, 
    getTodoById,
    createTodo, 
    updateTodo,
    DeleteTodo
};
        


