// Inicialización
var express  = require('express');
var app = module.exports = express();
//var app = express();
var port = 8888;

app.set('models', require('./app/models'));

app.configure(function() {
	app.use(express.static(__dirname + '/angular'));
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Cargamos los endpoints
require('./app/rutas.js')(app);

// Cogemos el puerto para escuchar
app.listen(port);
console.log("Blog Corriendo En El Puerto " + port);