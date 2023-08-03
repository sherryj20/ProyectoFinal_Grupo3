const conexion = require('../database/db');
//GUARDAR un CAPACITACION
exports.guardarcaparecibida = (req, res)=>{
    const idcapa = req.body.idcapa;
    const ci = req.body.ci;
    const idtitulo = req.body.idtitulo;
    const idtipocapa = req.body.idtipocapa;
    const finicio = req.body.finicio;
    const ffin = req.body.ffin;
    const idnomcentro = req.body.idnomcentro;
    const id_facultad = req.body.id_facultad;
    const tomo = req.body.tomo;
    const folio = req.body.folio;
    const estado = req.body.estado;

    conexion.query('INSERT INTO caparecibida SET ?',{idcapa:idcapa, ci:ci, idtitulo:idtitulo, idtipocapa:idtipocapa, finicio:finicio, ffin:ffin, idnomcentro:idnomcentro, id_facultad:id_facultad,tomo:tomo, folio:folio, estado:estado}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);   
            res.redirect('/caparecibida');         
        }
});
};

//ACTUALIZAR un capacitacion
exports.actualizarcaparecibida= (req, res)=>{
    const idcapa = req.body.idcapa;
    const ci = req.body.ci;
    const idtitulo = req.body.idtitulo;
    const idtipocapa = req.body.idtipocapa;
    const finicio = req.body.finicio;
    const ffin = req.body.ffin;
    const idnomcentro = req.body.idnomcentro;
    const id_facultad = req.body.id_facultad;
    const tomo = req.body.tomo;
    const folio = req.body.folio;
    const estado = req.body.estado; 
  
    conexion.query('UPDATE caparecibida SET ? WHERE idcapa =?', [{ci:ci, idtitulo:idtitulo, idtipocapa:idtipocapa, finicio:finicio, ffin:ffin, idnomcentro:idnomcentro, id_facultad:id_facultad,tomo:tomo, folio:folio, estado:estado},idcapa ], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/caparecibida');         
        }
});
};