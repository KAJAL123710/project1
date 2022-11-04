const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.port || 3030 //this is use for server port
const authRoute = require('./routes/auth-route');
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/forever',(err)=>{
    if(err){
        console.log("Database is Not Connected !");
    }else{
        console.log("DB is connected...");
    }
});

//parse application 
app.use(bodyParser.urlencoded({extended: false}))

//parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use('/auth',authRoute);
app.get('/', (req,res) =>{
    res.send("Welcome to Forever server")
})

app.listen(port, ()=>{
    console.log("Node server is connected",port)
})