const { DataTypes } = require('sequelize');
const { Sequelize, sequelize } = require('../config/db.postgresql');

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},{
    tableName: 'users',
    underscored: true,
    timestamps: true
})

module.exports = User;