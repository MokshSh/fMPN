const express=require('express');
const Router=express.Router();
let con=require('../db/conn')
// To Post data (Though constant for a while) 
Router.post('/',(req,res)=>{
    let insQry=`INSERT INTO testingtoconnecttonode (name,phone) VALUES ('Moks',${9999999999})`;
    con.query(insQry,(err)=>{if(err){res.send("couldn't push.")}
  res.send('pushed successfully')})})

// To get all data in the table : testingtoconnecttonode
Router.get('/',(req,res)=>{let selAllQry="SELECT * FROM testingtoconnecttonode"
con.query(selAllQry,(err,data)=>{if(err){res.send('couldnot fetch data')}
res.send(data )})})

// TO delete everything in the table : testingtoconnecttonode
Router.delete('/deleteAll',(req,res)=>{let delAllQry="DELETE FROM testingtoconnecttonode"
con.query(delAllQry,(err)=>{if(err){res.send("Couldn't delete records")} res.send('Deleted Everything !')}
)})
module.exports=Router;