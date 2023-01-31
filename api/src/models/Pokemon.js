const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    life:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    attack:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://vader.news/__export/1588965166057/sites/gadgets/img/2020/05/08/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png_423682103.png",
  
    },
    create:{
      type:DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue:true}
    
  },
  {timestamps: false},);

}