class EstudiantesController{
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta de estudiantes'
        });
    }

    consultarDetalle(req, res){

    }

    ingresar(req, res){

    }

    actualizar(req, res){

    }

    borrar(req, res){

    }
}

module.exports = new EstudiantesController();