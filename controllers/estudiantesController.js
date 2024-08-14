class EstudiantesController{
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta estudiantes desde clase'
        });
    }

    consultarDetalle(req, res){
        res.json({
            msg: 'Consulta detalle de estudiante desde clase'
        });
    }

    ingresar(req, res){
        res.json({
            msg: 'Ingresa estudiante desde clase'
        });
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