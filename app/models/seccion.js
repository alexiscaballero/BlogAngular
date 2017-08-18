module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Seccione", {
    id_seccion: {
    	type: DataTypes.INTEGER,
    	primaryKey: true
    },
    titulo_seccion: DataTypes.TEXT,
	subtitulo_seccion: DataTypes.TEXT
  })
}