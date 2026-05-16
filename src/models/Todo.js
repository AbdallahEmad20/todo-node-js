const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
   title: {
       type: String, 
       required: true
   },

   completed: {
       type: Boolean, 
       default: false
   },

   description: {
       type: String, 
   }
}, { timestamps: true }); 

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;