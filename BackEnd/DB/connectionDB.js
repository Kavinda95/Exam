const mongoose = require('mongoose');

const URI= 
    "mongodb+srv://kavinda:vTCFQrdKfdVKi6HF@final.yczgq.mongodb.net/examdata?retryWrites=true&w=majority";

  

const connectDB = async () => {
    try{
     await mongoose.connect(URI, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true
        });
     console.log('db connected..!!');
    }
    catch (e){
        console.log('db connection fail!!'+e);
    }
};

module.exports = connectDB;