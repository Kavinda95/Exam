const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }});

    var users = mongoose.model('auth', userSchema);


async function doLogin(req,res){
try{
    var user=req.body
    users.find(user, (error, results) => {
        if(error)
        {
            res.status(500).json( {message: 'SERV-ERR-L002'} );
        } 
        else if (results.length===0) {
            console.log(results)
            res.status(401).json( {message: 'Login fail !!'} );
        } 
         else {
            var token = jwt.sign(user, 'secretKey');
            res.cookie('jwt', token, { httpOnly: true, secure: false });
            res.status(200).json( user.username);
        }
    } );
}
catch(e){
    console.log('error on login method'+e)
    res.status(500).json( {message: 'Server probleme L-001'} );

}

}
module.exports.doLogin=doLogin;