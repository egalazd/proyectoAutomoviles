const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: __dirname + '/../src/.env' });

const Movie = require('../src/models/movie');
const { sequelize } = require('../src/config/db.postgresql');


(async () => {
  try {
    await sequelize.authenticate();
    const movies = await Movie.findAll({ raw: true });
    const outputPath = path.join(__dirname, 'seeds', 'data', 'movies.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(movies, null, 2));
    console.log(`Exportado: ${outputPath}`);
  } catch (err) {
    console.error('Error exportando películas:', err);
  } finally {
    await sequelize.close();
  }
})();
