const fs = require('fs');
const path = require('path');
const knex = require('knex')(require('../../knexfile').development); 


function cleanTimestamps(data) {
  return data.map(obj => {
    const { createdAt, updatedAt, ...rest } = obj;

    return {
      ...rest,
      created_at: createdAt,
      updated_at: updatedAt
    };
  });
}


function mapUserFields(users) {
   // renombrar columna en la tabla se llama correo_electronico y nombre_usuario
  return users.map(user => {
    const { email,name, ...rest } = user;
    return {
      ...rest,
      correo_electronico: email,
      nombre_usuario: name      
    };
  });
}

function mapMovieFields(movies) {
  //renombrar caso todas las columnas de movie
  return movies.map(movie => {
    const {
      name,
      gender,
      release_date,
      director,
      ...rest
    } = movie;

    return {
      ...rest,
      nombre_pelicula: name,
      genero: gender,
      fecha: release_date,
      director: director, // mismo nombre, pero lo dejo explícito por claridad
    };
  });
}




async function loadJSON(filename) {
  const filePath = path.join(__dirname, '..', 'seeds/data/', filename);
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}

async function seedUsers() {
  let users = await loadJSON('users.json');
  users = cleanTimestamps(users);
  users = mapUserFields(users);

  if (users.length === 0) return;

  await knex('user').del();
  await knex('user').insert(users);
  console.log(`Insertados ${users.length} usuarios`);
}

async function seedMovies() {
  let movies = await loadJSON('movies.json');
  movies = cleanTimestamps(movies);
  movies = mapMovieFields(movies);
  
  if (movies.length === 0) return;

  await knex('movie').del();
  await knex('movie').insert(movies);
  console.log(`Insertadas ${movies.length} películas`);
}

module.exports = async function runSeeds() {
  try {
    await seedUsers();
    await seedMovies();
  } catch (error) {
    console.error('Error durante la carga de datos:', error);
    throw error;
  } finally {
    await knex.destroy();
  }
};
