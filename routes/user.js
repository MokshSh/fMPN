const express=require('express');
const Router=express.Router();

const userControllerQries=require('../controllers/userControllers')
// To Post data (Though constant for a while) 
Router.post('/',userControllerQries.postQry)

// To get all data in the table : testingtoconnecttonode
Router.get('/', userControllerQries.getQry)
// To update all data in the table : testingtoconnecttonode
Router.patch('/user/:id/:upd', userControllerQries.patchQry)

// TO delete everything in the table : testingtoconnecttonode
Router.delete('/deleteAll',userControllerQries.delAllQry)
module.exports=Router;