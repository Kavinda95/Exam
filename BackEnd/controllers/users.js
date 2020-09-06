const task = require('../models/users');
const TaskSchema = require('../models/users');


const createUser = (req, res) => {

const user =  TaskSchema({ 
    
    empFirstName: req.body.empFirstName,
    empLastName: req.body.empLastName,
    empEmail: req.body.empEmail,
    empPhoto: req.body.empPhoto,
    branchName: req.body.branchName,
    bankName: req.body.bankName
 });

user.save().then(() => {
    console.log('user created');
    res.status(200).json( {message: 'User Created'} );
}).catch((error) => {
    res.status(500).json( {message: 'error'} );
});

};
//get all users
const getAllUser = (req, res) => {
    TaskSchema.find({}, (error, results) => {
        if(error) {
            console.log(error);
            res.status(500).json( {message: 'error'} );
        } else {
            res.status(200).json(results);
        }
    } );
};


//get user
const getUser = (req, res) => {
    TaskSchema.find({ _id: req.params.id }, (error, results) => {
        if(error) {
            console.log(error);
            res.status(500).json( {message: 'error'} );
        } else {
            res.status(200).json({results});
        }
    } );
};

const updateUser = async (req, res) => {
   const userUpdate = await TaskSchema.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            empFirstName: req.body.empFirstName,
            empLastName: req.body.empLastName,
            empEmail: req.body.empEmail,
            empPhoto: req.body.empPhoto,
            branchName: req.body.branchName,
            bankName: req.body.bankName,
        },
    },  {new: true});

    if (userUpdate) {
        res.status(200).json( { message: 'sucssfully updated' } );
    } else {
        res.status(500).json( { message: 'could not updated' } );
    }
};

const deleteUser = async (req, res) => {
    const userDelete = await TaskSchema.findByIdAndDelete( {_id: req.params.id } );
    if (userDelete) {
        res.status(200).json( { message: 'sucssfully Deleted' } );
    } else {
        res.status(500).json( { message: 'could not Deleted' } );
    }
    
};

module.exports = { createUser, getUser, updateUser, deleteUser,getAllUser };