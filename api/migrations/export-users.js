const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: __dirname + '/../src/.env' });

const User = require('../src/models/user');
const { sequelize } = require('../src/config/db.postgresql');


(async () => {
  try {
    await sequelize.authenticate();
    const users = await User.findAll({ raw: true });
    const outputPath = path.join(__dirname, 'seeds', 'data', 'users.json');
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(users, null, 2));
    console.log(`Exportado: ${outputPath}`);
  } catch (err) {
    console.error('Error exportando usuarios:', err);
  } finally {
    await sequelize.close();
  }
})();
