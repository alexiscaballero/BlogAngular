var Sequelize = require('sequelize');
//var config    = require('config').database;  // we use node-config to handle environments

// initialize database connection
//var sequelize = new Sequelize('postgres://postgres:alexis@localhost:5432/blog');
var sequelize = new Sequelize('postgres', 'usuario', 'usuario', {
  	host: 'localhost',
  	dialect: 'postgres',
  	omitNull: true
});

// load models
var models = [
  'seccion',
  'entrada',
  'comentario'
];
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
  //m.comentario.belongsTo(m.entrada);
  //m.entrada.belongsTo(m.seccion);
  //m.seccion.hasMany(m.entrada);
  //m.entrada.hasMany(m.comentario);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;