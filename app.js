const express = require('express');
const path = require('path');
// const fs = require('fs');
const { options } = require('nodemon/lib/config');
const app = express();
const port = 8000;

//Express Spicific Stuff
// app.use(express.static('static',options))
app.use('/static',express.static('static'))//For serving static files
app.use(express.urlencoded())

//Pug Spicific Stuff
app.set('view engine','pug')//Set the template engine as pug: ya engin kay liay 
app.set('views',path.join(__dirname,'views'))//Set the views diectory matlab ko si directory say read karna chatay hain apni pug files ko ais liay banaya hay

//ENDPOINTS
app.get('/',(req,res)=>{
    const con = "This is the best content";
    const prams = {}
    
    res.status(200).render('home.pug',prams);
});

// ya contact kay liay endpoint bana lia 
app.get('/contact',(req,res)=>{
    const con = "This is the best content";
    const prams = {}
    
    res.status(200).render('contact.pug',prams);
});

//Start the server
app.listen(port, ()=>{
    console.log(`The application is started successfully on port ${port}`); 
    });
    

