const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const POSTGRES_URI = process.env.POSTGRES_URI;

const sequelize = new Sequelize(POSTGRES_URI, {
    dialect: 'postgres',
    logging: false
})

async function connectPG(){
    try{
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log("Conectado a PG guacho!");
    } catch (error){
        console.log("Error al conectar a PG lptm", error);
        process.exit(1);
    }
    
}

module.exports = { sequelize, connectPG }