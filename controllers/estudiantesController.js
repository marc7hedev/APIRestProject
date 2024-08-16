const db = require('../database/conexion.js')


class EstudiantesController{
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta estudiantes desde clase'
        });
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        res.json({
            msg: `Consulta detalle estudiante desde clase con ID ${id}`
        });
    }

    ingresar(req, res){
        try{
            db.query(`
                    INSERT INTO estudiantes
                        (id, dni, nombre, apellido, email)
                        VALUES (NULL, ?, ?, ?, ?);`,
                    [dni, nombre, apellido, email], (err, rows) => {
                        if(err){
                            res.status(400).send(err);
                        }
                        res.status(201).json(row);
                    });
        } catch(err) {
            res.status(500).send(err);
        }
    }

    actualizar(req, res){
        res.json({
            msg: 'Actualiza estudiante desde clase'
        });
    }

    borrar(req, res){
        res.json({
            msg: 'Elimina estudiante desde clase'
        });
    }
}

module.exports = new EstudiantesController();