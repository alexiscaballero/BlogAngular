module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Entrada", {
    id_entrada: {
    	type: DataTypes.INTEGER,
    	primaryKey: true
    },
    titulo_entrada: DataTypes.TEXT,
	contenido: DataTypes.TEXT,
	id_seccion: DataTypes.INTEGER
  })
}