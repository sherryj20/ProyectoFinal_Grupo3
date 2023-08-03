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

module.exports = router;