module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Comentario", {
    id_comentario: {
    	type: DataTypes.INTEGER,
    	primaryKey: true
    },
    autor: DataTypes.TEXT,
    texto: DataTypes.TEXT,
	id_entrada: DataTypes.INTEGER
  })
}