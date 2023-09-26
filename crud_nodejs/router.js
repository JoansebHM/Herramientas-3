const express = require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM usuario', (err, rows) =>{
        if (err){
            throw err;
        }
        res.render('index', {rows: rows})
    })
})

router.get('/create', (req, res) => {
    res.render('create');
})

router.get('/edit/:IdUsuario', (req, res)=>{
    const IdUsuario = req.params.IdUsuario;
    conexion.query('SELECT * FROM usuario WHERE IdUsuario=?', [IdUsuario], (err, rows) =>{
        if (err){
            throw err;
        }
        res.render('edit', {rows: rows[0]})
    })
})

router.get('/delete/:IdUsuario', (req, res)=>{
    const IdUsuario = req.params.IdUsuario
    conexion.query('DELETE FROM usuario WHERE IdUsuario = ?', [IdUsuario], (err, rows)=>{
        if (err){
            throw err;
        }
        res.redirect('/')
    })
})
const crud = require('./controllers/crud')
router.post('/save', crud.save)
router.post('/edit', crud.update)

module.exports = router;