const conexion = require('../database/db');
//GUARDAR un empleados

exports.guardarempleados = (req, res)=>{

    const ci = req.body.ci;
    const cipadre = req.body.cipadre;
    const nom1 = req.body.nom1;
    const nom2 = req.body.nom2;
    const ape1 = req.body.ape1;
    const ape2 = req.body.ape2;
    const sexo = req.body.sexo;
    const direccion = req.body.direccion;
    const lugarnac = req.body.lugarnac;
    const teldomicilio = req.body.teldomicilio;
    const email = req.body.email;
    const etnia = req.body.etnia;
    const estcivil = req.body.estcivil;
    const colorpelo = req.body.colorpelo;
    const estatura = req.body.estatura;
    const peso = req.body.peso;
    const idniveledu = req.body.idniveledu;
    const cargo = req.body.cargo;
    const contrato = req.body.contrato;
    const departamento = req.body.departamento;
    const ubicacion = req.body.ubicacion;
    const estadofoto = req.body.estadofoto;
    const clave = req.body.clave;



    conexion.query('INSERT INTO empleados SET ?',{ci:ci, cipadre:cipadre, nom1:nom1, nom2:nom2, ape1:ape1, ape2:ape2, sexo:sexo, direccion:direccion, lugarnac:lugarnac, teldomicilio:teldomicilio, email:email,etnia:etnia,estcivil:estcivil, colorpelo:colorpelo, estatura:estatura, peso:peso, idniveledu:idniveledu, cargo:cargo, contrato:contrato, departamento:departamento, ubicacion:ubicacion, estadofoto:estadofoto, clave:clave}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            console.log(results);   
            res.redirect('/empleados');         
        }
});
};

//ACTUALIZAR un REGISTRO
exports.actualizarcempleados= (req, res)=>{
    const ci = req.body.ci;
    const cipadre = req.body.cipadre;
    const nom1 = req.body.nom1;
    const nom2 = req.body.nom2;
    const ape1 = req.body.ape1;
    const ape2 = req.body.ape2;
    const sexo = req.body.sexo;
    const direccion = req.body.direccion;
    const lugarnac = req.body.lugarnac;
    const teldomicilio = req.body.teldomicilio;
    const email = req.body.email;
    const etnia = req.body.etnia;
    const estcivil = req.body.estcivil;
    const colorpelo = req.body.colorpelo;
    const estatura = req.body.estatura;
    const peso = req.body.peso;
    const idniveledu = req.body.idniveledu;
    const cargo = req.body.cargo;
    const contrato = req.body.contrato;
    const departamento = req.body.departamento;
    const ubicacion = req.body.ubicacion;
    const estadofoto = req.body.estadofoto;
    const clave = req.body.clave;
  
    conexion.query('UPDATE empleados SET ? WHERE ci =?', [{ cipadre:cipadre, nom1:nom1, nom2:nom2, ape1:ape1, ape2:ape2, sexo:sexo, direccion:direccion, lugarnac:lugarnac, teldomicilio:teldomicilio, email:email,etnia:etnia,estcivil:estcivil, colorpelo:colorpelo, estatura:estatura, peso:peso, idniveledu:idniveledu, cargo:cargo, contrato:contrato, departamento:departamento, ubicacion:ubicacion, estadofoto:estadofoto, clave:clave},ci ], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/empleados');         
        }
});
};