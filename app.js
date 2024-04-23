const express = require('express');
const router=require('./src/routes/api');
const app=new express();
const path = require("path");
const bodyParser=require('body-parser');

//security middleware
const rateLimit=require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database
const mongoose = require('mongoose');

// Implement Security middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Body parser
app.use(bodyParser.json());

// Rate Limiter
const limiter = rateLimit({windowMs:15*60*24, max:3000});

// Database
const url="mongodb+srv://Repon:Repon7248@cluster0.nhslprh.mongodb.net/crudFood";
const option={user:"", pass:"", autoIndex:true};
mongoose.connect(url, option).then(()=>{
    console.log("connected to the database successfully ... ");
}).catch((error)=>{
    console.log(error);
});

app.use("/api/v1", router);


app.use(express.static('client/dist'));

app.get('*',function(req, res){
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
}
);

module.exports=app;
