const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todo = require('./models/todo');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded());
app.use('/', require('./routes/index'));












app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${error}`);
    }

    console.log(`Server is up and running at port ${port}`);
});