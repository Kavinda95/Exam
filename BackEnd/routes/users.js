const express = require('express');
const { Router } = require('express');
const usersController = require('../controllers/users'); 
const auth = require('../controllers/authentification'); 
const verif= require('../middlewares/verifyToken');

// router
const router = express.Router();

//create
router.post('/createUser', usersController.createUser );

//get 
router.get('/getUser/:id', usersController.getUser);
router.get('/getAllUser', usersController.getAllUser);
router.get('/getAllUserIfLoggedIn',verif.verify, usersController.getAllUser);
//
router.patch('/updateUser/:id' , usersController.updateUser);
 
//
router.delete('/deleteUser/:id' , usersController.deleteUser);

//Login a user

router.post('/login',auth.doLogin);
router.get('/logout',(req,res)=>{
    res.cookie('jwt','').status(200).send()
});


 

module.exports = router;