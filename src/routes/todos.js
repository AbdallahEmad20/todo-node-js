
const express =  require("express");
const Todo = require("../models/Todo");
const { getTodos, getTodoById,createTodo, updateTodo, DeleteTodo } = require("../controllers/Todo");
const validateTodo = require("../Middelware/ValidationTodo");

const  router =  express.Router()


router.get("/"  ,  getTodos)
router.get("/:id" ,    getTodoById,)
router.post("/",   validateTodo, createTodo);
router.put("/:id",   validateTodo,  updateTodo);
router.delete("/:id",  DeleteTodo)






module.exports = router;

