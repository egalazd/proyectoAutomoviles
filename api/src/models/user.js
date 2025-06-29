const { DataTypes } = require('sequelize');
const { Sequelize, sequelize } = require('../config/db.postgresql');

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false,
        field: 'nombre_usuario'
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        field: 'correo_electronico' 
    }
},{
    tableName: 'user',
    underscored: true,
    timestamps: true
})

module.exports = User;