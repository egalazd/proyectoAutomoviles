require('dotenv').config({ path: __dirname + '/../src/.env' });

const { connectPG, sequelize } = require('../src/config/db.postgresql');
const runKnexSeeds = require('./seed-knex/run-seeds');

(async () => {
  try {
    console.log('Conectando y sincronizando base de datos...');
    await connectPG();
    
    console.log('Reiniciando secuencias de ID...');
    await sequelize.query('ALTER SEQUENCE movie_id_seq RESTART WITH 100');
    await sequelize.query('ALTER SEQUENCE user_id_seq RESTART WITH 100');
    console.log('Secuencias reiniciadas con éxito');

    console.log('Cargando datos con Knex...');
    await runKnexSeeds();

    console.log('Base de datos lista y datos insertados');
  } catch (error) {
    console.error('Error en la inicialización de la base de datos:', error);
  } finally {
    await sequelize.close();
  }
})();
