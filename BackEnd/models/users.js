const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema ({
    
    empFirstName:{
        type: String,
        required: true
    },
    empLastName:{
        type: String,
        required: true
    },

    empEmail:{
        type: String,
        required: true
    },

    empPhoto:{
        type: String,
        required: true
    },
    branchName:{
        type: String,
        required: true
    },
    bankName:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model( 'User' ,TaskSchema);