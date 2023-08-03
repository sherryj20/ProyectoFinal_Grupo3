const express = require('express');
const router = express.Router();
const conexion = require('./database/db');



////   ACCESO AL SISTEMA/////
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', session : req.session });
  });
  

  router.post('/login', function(request, response, next){
  
      var correo = request.body.correo;
  
      var clave = request.body.clave;
  
      if(correo && clave)
      {
          query = `
          SELECT * FROM cuentausuario WHERE correo = "${correo}"  `;
  
          conexion.query(query, function(error, data){
  
              if(data.length > 0)
              {
                  for(var count = 0; count < data.length; count++)
                  {
                      if(data[count].clave == clave)
                      {
                          request.session.id = data[count].id;
  
                          response.redirect("/home");
                      }
                      else
                      {
                          response.send('Clave Incorrecta');
                      }
                  }
              }
              else
              {
                  response.send('Correo Incorrecto');
              }
              response.end();
          });
      }
      else
      {
          response.send('Por Favor Digite el Correo y la');
          response.end();
      }
  
  });
  


  router.get('/logout', function(request, response, next){
  
      request.session.destroy();
  
      response.redirect("/");
  
  });


router.get('/home', (req, res)=>{     
    res.render('home.ejs');               
})

///EMPLEADOS///

router.get('/empleados', (req, res)=>{     
    conexion.query('SELECT e.ci, e.cipadre, e.nom1, e.nom2, e.ape1, e.ape2, e.sexo, e.direccion, e.lugarnac, e.teldomicilio, e.email, e.etnia, e.estcivil, e.colorpelo, e.estatura, e.peso, n.nombrenivel AS nivel_educativo, e.cargo, e.contrato, e.departamento, e.ubicacion, e.estadofoto, e.clave FROM empleados e LEFT JOIN niveledu n ON e.idniveledu = n.idniveledu;',(error, results)=>{
        if(error){
            throw error;
        } else {                       
            res.render('../views/empleados/empleados.ejs', {results:results});
          
        }   
    })    

})

router.get('/crearempleados', (req, res)=>{     
    conexion.query('SELECT ci, nom1, nom2, ape1, ape2, cargo FROM empleados ORDER BY ci desc',(error, data)=>{
        if(error){
            throw error;
        } else {                       
            res.render('../views/empleados/crearempleados', {data:data});              
        }   
    })          
})

router.get('/editarempleados/:ci', (req,res)=>{    
    const ci = req.params.ci;
    conexion.query('SELECT e.ci, e.cipadre, e.nom1, e.nom2, e.ape1, e.ape2, e.sexo, e.direccion, e.lugarnac, e.teldomicilio, e.email, e.etnia, e.estcivil, e.colorpelo, e.estatura, e.peso, n.nombrenivel AS nivel_educativo, e.cargo, e.contrato, e.departamento, e.ubicacion, e.estadofoto, e.clave FROM empleados e LEFT JOIN niveledu n ON e.idniveledu = n.idniveledu; where ci=?',[ci] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('../views/empleados/editarempleados', {departamentos:results[0]});            
        }        
    });
});

router.get('/deleteempleados/:ci', (req, res) => {
    const ci = req.params.ci;
    conexion.query('DELETE FROM empleados WHERE ci = ?',[ci], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/empleados');         
        }
    })
});

router.get('/get_empleados', function(request, response, next){

    var buscar_query = request.query.buscar_query;

    var query = `
    SELECT nom1 FROM empleados 
    WHERE nom1 LIKE '%${buscar_query}%' 
    LIMIT 2 `;

    conexion.query(query, function(error, data){

        response.json(data);

    });

});

const empleados = require('./controller/empleados');
    router.post('/guardarempleados', empleados.guardarempleados);
    router.post('/actualizarempleados', empleados.actualizarempleados);


    ///CAPARECIBIDA///

module.exports = router;