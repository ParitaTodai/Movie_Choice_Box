const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');

const api=require('./routes/api.js');

const port = 3000;

const app=express();

// const cors = require('cors');


// app.use(cors());


app.use(express.static(path.join(__dirname,'../src')));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use('/api',api);

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../src/index.html'));
});

app.listen(port,function(){
    console.log("port running on http://localhost:" +port);
});