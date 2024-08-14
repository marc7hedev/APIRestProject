class ProfesoresController{
    constructor(){

    }

    consultar(req, res){
        res.json({
            msg: 'Consulta profesores desde clase'
        });
    }

    consultarDetalle(req, res){
        res.json({
            msg: 'Consulta detalle de profesor desde clase'
        });
    }

    ingresar(req, res){
        res.json({
            msg: 'Ingresa profesor desde clase'
        });
    }

    actualizar(req, res){
        res.json({
            msg: 'Actualiza de profesor desde clase'
        });
    }

    borrar(req, res){
        res.json({
            msg: 'Elimina profesor desde clase'
        });
    }
}

module.exports = new ProfesoresController();