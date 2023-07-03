const express=require('express');
const dotenv=require('dotenv');
dotenv.config()
const port=process.env.PORT;
const userrouter=require('./routes/user')
const app=express();
app.use('/',userrouter)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.listen(port,(err)=>{if(err){console.log(err)}
console.log("listening on port",port)})

