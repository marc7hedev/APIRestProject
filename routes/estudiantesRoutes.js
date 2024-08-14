const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'Consulta de estudiantes'
    });
});

router.post('/', (req, res) => {
    res.json({
        msg: 'Ingreso de estudiantes'
    });
});

router.route("/:id")
    .get((req, res) => {
        res.json({
            msg: 'Consulta de un estudiante'
        });
    })
    .put((req, res) => {
        res.json({
            msg: 'Actualización de estudiante'
        });
    })
    .delete((req, res) => {
        res.json({
            msg: 'Eliminado de estudiantes'
        });

});

module.exports = router;

