const { DataTypes } = require('sequelize');
const { Sequelize, sequelize } = require('../config/db.postgresql');

const Movies = sequelize.define('Movies',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'nombre_pelicula'
    },
    gender: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'genero'
    },
    release_date: {
        type: DataTypes.DATE,
        field: 'fecha'
    },
    director: {
        type: DataTypes.STRING(200),
        field: 'director'
    },
},{
    tableName: 'movies',
    underscored: true,
    timestamps: true
})

module.exports = Movies;