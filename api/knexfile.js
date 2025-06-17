require('dotenv').config();


module.exports = {
  development: {
    client: 'pg',
    connection: process.env.POSTGRES_URI,
    migrations: {
      directory: './migrations' 
    }
  }
};
