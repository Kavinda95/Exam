const express = require('express');
const connectDB = require('./DB/connectionDB');
const usersRoutes = require('./routes/users');
const cookieParser = require('cookie-parser');

const app = express();
 app.use(cookieParser());

connectDB();



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.json());
app.use('/api/users', usersRoutes);


app.listen(8000, () => { console.log('Api Running at: http://localhost:8000')}); 