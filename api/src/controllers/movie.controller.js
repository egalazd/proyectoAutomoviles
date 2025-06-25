const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Movie = require('../models/movie');

exports.createMovie = async (req, res) => {
  try {
    const { name, gender, release_date, director } = req.body;

    const movie = await Movie.create({
      name,
      gender,
      release_date,
      director
    });

    res.status(201).json({ message: 'Película creada', movie });
  } catch (error) {
    console.error('Error al crear película:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.json(movies);
  } catch (error) {
    console.error('Error al obtener películas:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};


// Actualizar una película
exports.updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, release_date, director } = req.body;

    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }

    await movie.update({ name, gender, release_date, director });

    res.json({ message: 'Película actualizada', movie });
  } catch (error) {
    console.error('Error al actualizar película:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Eliminar una película
exports.deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByPk(id);
    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada' });
    }

    await movie.destroy();

    res.json({ message: 'Película eliminada' });
  } catch (error) {
    console.error('Error al eliminar película:', error);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

