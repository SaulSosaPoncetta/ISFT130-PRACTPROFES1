//invoco a servidor de express, debe estar instalado el modulo express
const express = require('express');
const app = express();

// invoco al motor de plantillas ejs, similar a html
app.set('view engine', 'ejs');

// invoco al enrutador  externo
app.use('/', require('./router'));

// ejecuto la salida por el localhost en el navegador de internet.
app.listen(5000,() =>{
    console.log('SERVER EN http://localhost:5000');
});
