const Todo = require('../models/todo');
const express = require('express');
const app = express();

module.exports.home = function(req,res){
    Todo.find({},function(err,task){
        if(err){
            console.log('Error in loading from db');
        }
        res.render('home',{
            tasks:task
        })
    })
}

