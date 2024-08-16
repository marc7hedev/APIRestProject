const db = require('../database/conexion.js')


class EstudiantesController{
    constructor(){

    }

    consultar(req, res){
        try{
            db.query(`
                SELECT * FROM estudiantes;`,
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
            });
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    consultarDetalle(req, res){
        const { id } = req.params;
        try{
            db.query(`
                SELECT * FROM estudiantes WHERE id = ?`, 
                [id],
                (err, rows) => {
                    if(err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
            });
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    ingresar(req, res){
        try{
            const { dni, nombre, apellido, email } = req.body;
            db.query(`
                    INSERT INTO estudiantes
                        (id, dni, nombre, apellido, email)
                        VALUES (NULL, ?, ?, ?, ?);`,
                    [dni, nombre, apellido, email], (err, rows) => {
                        if(err){
                            res.status(400).send(err);
                        }
                        res.status(201).json({ id: rows.insertId });
                });
        } catch(err) {
            res.status(500).send(err.message);
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