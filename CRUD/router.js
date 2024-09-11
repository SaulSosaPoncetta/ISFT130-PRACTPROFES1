const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/contacto', (req, res) => {
    conexion.query('SELECT * FROM alumno', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
})

module.exports = router;