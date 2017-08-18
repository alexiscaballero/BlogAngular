var Controller = require ('./controlador');
var ControllerView = require ('./controladorVista');

module.exports = function(app) {

	//CRUD SECCIONES
	// Listar Secciones
	app.get('/api/seccion', Controller.getSecciones);
	// Crear una nueva seccion
	app.post('/api/seccion', Controller.newSeccion);
	// Modificar una seccion
	app.put('/api/seccion/:id_seccion', Controller.updateSeccion);
	// Borrar una seccion
	app.delete('/api/seccion/:id_seccion', Controller.removeSeccion);
	//CRUD ENTRADAS
	// Listar todas las entradas de todas las secciones
	app.get('/api/entrada', Controller.getTodasLasEntradas);
	// Listar Entradas de una Seccion
	app.get('/api/entrada/:id_seccion', Controller.getEntradas);
	// Crear una nueva Entrada en una Seccion
	app.post('/api/entrada', Controller.newEntrada);
	// Modificar una Entrada
	app.put('/api/entrada/:id_entrada', Controller.updateEntrada);
	// Borrar una Entrada
	app.delete('/api/entrada/:id_entrada', Controller.removeEntrada);
	//CRUD COMENTARIOS
	// Listar todas los comentarios de todas las entradas
	app.get('/api/comentario', Controller.getTodosLosComentarios);
	// Listar Comentarios de una Entrada
	app.get('/api/comentario/:id_entrada', Controller.getComentarios);
	// Crear un Nuevo Comentario en una Entrada
	app.post('/api/comentario', Controller.newComentario);
	// Modificar un Comentario
	app.put('/api/comentario/:id_comentario', Controller.updateComentario);
	// Borrar un Comentario
	app.delete('/api/comentario/:id_comentario', Controller.removeComentario);

	//Cargar una vista de una seccion
	app.get('/view/seccion/:id_seccion', ControllerView.loadSeccion);
	//Cargar una vista de una entrada

	//Panel de Control
		//Secciones
		//app.get('/api/controlPanel',
		//	function(req, res) {
		//		res.sendfile('./angular/controlPanel/indexSecciones.html');
		//	}
		//);
		//Entradas
		//Comentarios

	// application 
	//app.get('*', function(req, res) {
	//	res.sendfile('./angular/index.html'); // Carga única de la vista
	//});
};