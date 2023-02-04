const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },

    category:{
        type:String,
        required: true
    },
    deadline:{
        type:Date,
        required: true
    }
})


//schema
const Todo = mongoose.model('Todo', taskSchema);

module.exports = Todo;