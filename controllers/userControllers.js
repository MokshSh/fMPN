let con=require('../db/conn')
// for Post Query
exports.postQry= (req,res)=>{
    let insQry=`INSERT INTO testingtoconnecttonode (name,phone) VALUES ('kk',${9999999999})`;
    con.query(insQry,(err)=>{if(err){res.send("couldn't push.")}
  res.send('pushed successfully')})}

exports.getQry= (req,res)=>{let selAllQry="SELECT * FROM testingtoconnecttonode"
  con.query(selAllQry,(err,data)=>{if(err){res.send('couldnot fetch data')}
  res.send(data )})}

exports.patchQry= (req,res)=>{let updQry='UPDATE testingtoconnecttonode SET name = ? WHERE name = ?'
con.query(updQry,[req.params.upd,req.params.id],(err)=>{if(err){res.send(`Couldn't update ${req.params.upd} to ${req.params.id}`)}
res.send("updated Successfully")})} 

exports.delAllQry= (req,res)=>{let delAllQry="DELETE FROM testingtoconnecttonode"
con.query(delAllQry,(err)=>{if(err){res.send("Couldn't delete records")} res.send('Deleted Everything !')}
)}