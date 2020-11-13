// Three libraries
const express = require('express');

const hbs = require('hbs');

// Personal libraries
require('./hbs/helpers');

// Const global app defines
const app = express();

const puerto = 8080;

// Partials defines
hbs.registerPartials(__dirname+'/views/parciales');

// Public static content HTML
app.use(express.static(__dirname+'/public'));

// Express HBS view engine
app.set('view engine','hbs');

 // Routes defines
app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'Hector'
    });
});

app.get('/about',(req,res)=>{
    res.render('about');
});

app.get('/api',(req,res)=>{
    res.send({"nombre":"hector",url: req.url});
});

// Lounch service an listen on port
app.listen(puerto,()=>{
    console.log(`Escuchando peticiones en el puerto ${puerto}`)
});