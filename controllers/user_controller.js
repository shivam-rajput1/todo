const Todo = require('../models/todo');
const db = require('../config/mongoose');

const express = require('express');
const app = express();



app.use(express.urlencoded());
module.exports.addtask = function(req,res){
    Todo.create({
        task: req.body.task,
        category: req.body.category,
        deadline:req.body.deadline
    },function(err, newTask){
        if(err){
            console.log('Error in adding in db');
            return;
        }
        
        console.log('****', newTask);
        return res.redirect('/');
    })
}
