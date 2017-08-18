var app = require('../server');
// Modelos para las secciones,entradas y comentarios
var Seccion = app.get('models').seccion;
var Entrada = app.get('models').entrada;
var Comentario = app.get('models').comentario;

exports.loadSeccion = function (req, res){
	var seccion;
	var entradasSeccion;
	Seccion.findAll(
		{where: {id_seccion: req.params.id_seccion}})
	.then(function(seccion) {
    	seccion=seccion; 
	});
	Entrada.findAll(
		{where: {id_seccion: req.params.id_seccion}})
	.then(function(todasLasEntradas) {
    	var entradasSeccion=todasLasEntradas;
	});
}