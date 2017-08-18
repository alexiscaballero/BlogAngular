var app = require('../server');
// Modelos para las secciones,entradas y comentarios
var Seccion = app.get('models').seccion;
var Entrada = app.get('models').entrada;
var Comentario = app.get('models').comentario;

////////////////ALTA BAJA MODIFICACION LISTADO SECCIONES////////////////////////////////////////////////

// Obtiene todos las secciones
exports.getSecciones = function (req, res){
	Seccion.findAll({}).then(function(todasLasSecciones) {
    	res.json(todasLasSecciones); 
	});
}

// Guardar una Seccion
exports.newSeccion = function(req, res) {
	Seccion.create({
    		titulo_seccion: req.body.titulo_seccion,
    		subtitulo_seccion: req.body.subtitulo_seccion
  		}).then(function(seccion) {
    		Seccion.findAll({}).then(function(todasLasSecciones) {
    			res.json(todasLasSecciones); 
			});
  		});
}

// Modificamos una Seccion
exports.updateSeccion = function(req, res){
	Seccion.find({
    	where: {
      		id_seccion: req.params.id_seccion
    	}
  	}).then(function(seccion) {
    	if(seccion){
      		seccion.updateAttributes({
        		titulo_seccion: req.body.titulo_seccion,
    			subtitulo_seccion: req.body.subtitulo_seccion
      		}).then(function(seccion) {
        		//res.send(seccion);
        		Seccion.findAll({}).then(function(todasLasSecciones) {
    				res.json(todasLasSecciones); 
				});
      		});
    	}
  	});
}

// Elimino una Seccion
exports.removeSeccion = function(req, res) {
	Seccion.destroy({
    	where: {
      		id_seccion: req.params.id_seccion
    	}
  	}).then(function(seccion) {
    	//res.json(seccion);
    	Seccion.findAll({}).then(function(todasLasSecciones) {
    			res.json(todasLasSecciones); 
		});
  	});
}

////////////////ALTA BAJA MODIFICACION LISTADO ENTRADAS////////////////////////////////////////////////

// Obtiene todos las entradas de todas las secciones
exports.getTodasLasEntradas = function (req, res){
  Entrada.findAll({})
  .then(function(todasLasEntradas) {
      res.json(todasLasEntradas); 
  });
}

// Obtiene todos las entradas de una seccion
exports.getEntradas = function (req, res){
	Entrada.findAll(
		{where: {id_seccion: req.params.id_seccion}})
	.then(function(todasLasEntradas) {
    	res.json(todasLasEntradas); 
	});
}

// Guardar una nueva entrada de una seccion
exports.newEntrada = function(req,res) {
	Entrada.create({
    		titulo_entrada: req.body.titulo_entrada,
    		contenido: req.body.contenido,
    		id_seccion: req.body.id_seccion
  		}).then(function(entrada) {
    		//res.json(entrada);
    		Entrada.findAll({})
				.then(function(todasLasEntradas) {
    				res.json(todasLasEntradas); 
			});
  		});
}

// Modificamos una entrada de una seccion
exports.updateEntrada = function(req, res){
	Entrada.find({
    	where: {
      		id_entrada: req.params.id_entrada
    	}
  	}).then(function(entrada) {
    	if(entrada){
      		entrada.updateAttributes({
        		titulo_entrada: req.body.titulo_entrada,
    			contenido: req.body.contenido,
    			id_seccion: req.body.id_seccion
      		}).then(function(entrada) {
        		//res.send(entrada);
    			Entrada.findAll({})
					.then(function(todasLasEntradas) {
    					res.json(todasLasEntradas); 
					});
      			});
    	}
  	});
}

// Elimino una entrada de una seccion
exports.removeEntrada = function(req, res) {
	Entrada.destroy({
    	where: {
      		id_entrada: req.params.id_entrada
    	}
  	}).then(function(entrada) {
    	//res.json(entrada);
    	Entrada.findAll(
			{where: {id_seccion: entrada.id_seccion}})
			.then(function(todasLasEntradas) {
    			res.json(todasLasEntradas); 
		});
  	});
}

////////////////ALTA BAJA LISTADO COMENTARIOS////////////////////////////////////////////////

// Obtiene todos los comentarios de todas las entradas
exports.getTodosLosComentarios = function (req, res){
  Comentario.findAll({})
  .then(function(todosLosComentarios) {
      res.json(todosLosComentarios); 
  });
}

// Obtiene todos los comentarios de una entrada
exports.getComentarios = function (req, res){
	Comentario.findAll(
		{where: {id_entrada: req.params.id_entrada}})
		.then(function(todosLosComentarios) {
    		res.json(todosLosComentarios); 
		});
}

// Guardar un nuevo comentario de una entrada
exports.newComentario = function(req,res) {
	Comentario.create({
    		autor: req.body.autor,
    		texto: req.body.texto,
    		id_entrada: req.body.id_entrada
  		}).then(function(comentario) {
    		//res.json(comentario);
			Comentario.findAll({})
				.then(function(todosLosComentarios) {
    				res.json(todosLosComentarios); 
				});
  		});
}

// Modificamos un comentario de una entrada
exports.updateComentario = function(req, res){
	Comentario.find({
    	where: {
      		id_comentario: req.params.id_comentario
    	}
  	}).then(function(comentario) {
    	if(comentario){
      		comentario.updateAttributes({
        		autor: req.body.autor,
    			texto: req.body.texto,
    			id_entrada: req.body.id_entrada
      		}).then(function(comentario) {
        		//res.send(comentario);
        			Comentario.findAll({})
						.then(function(todosLosComentarios) {
    						res.json(todosLosComentarios); 
					});
      		});
    	}
  	});
}

// Elimino un comentario de una entrada
exports.removeComentario = function(req, res) {
	Comentario.destroy({
    	where: {
      		id_comentario: req.params.id_comentario
    	}
  	}).then(function(comentario) {
    	//res.json(comentario);
    		Comentario.findAll({})
				.then(function(todosLosComentarios) {
    				res.json(todosLosComentarios); 
			});
  	});
}