const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movie.controller');
const auth = require('../middlewares/auth');


/**
 * @swagger
 * tags:
 *   name: Películas
 *   description: Endpoints para gestionar películas (requiere Token)
 */

/**
 * @swagger
 * /api/movies:
 *   post:
 *     summary: Agrega una nueva película
 *     tags: [Películas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - gender
 *             properties:
 *               name:
 *                 type: string
 *                 example: El Padrino
 *               gender:
 *                 type: string
 *                 example: Drama
 *               release_date:
 *                 type: string
 *                 format: date
 *                 example: 1972-03-24
 *               director:
 *                 type: string
 *                 example: Francis Ford Coppola
 *     responses:
 *       201:
 *         description: Película creada exitosamente
 *       400:
 *         description: Datos inválidos
 *       401:
 *         description: No autorizado (token inválido o ausente)
 *       500:
 *         description: Error del servidor
 */
router.post('/', auth, MovieController.createMovie);

/**
 * @swagger
 * /api/movies:
 *   get:
 *     summary: Lista todas las películas
 *     tags: [Películas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: El Padrino
 *                   gender:
 *                     type: string
 *                     example: Drama
 *                   release_date:
 *                     type: string
 *                     format: date
 *                     example: 1972-03-24
 *                   director:
 *                     type: string
 *                     example: Francis Ford Coppola
 *       401:
 *         description: No autorizado (token inválido o ausente)
 *       500:
 *         description: Error del servidor
 */
router.get('/', auth, MovieController.getAllMovies);


/**
 * @swagger
 * /api/movies/{id}:
 *   put:
 *     summary: Actualiza una película por ID
 *     tags: [Películas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la película a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               gender:
 *                 type: string
 *               release_date:
 *                 type: string
 *                 format: date
 *               director:
 *                 type: string
 *     responses:
 *       200:
 *         description: Película actualizada exitosamente
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', auth, MovieController.updateMovie);

/**
 * @swagger
 * /api/movies/{id}:
 *   delete:
 *     summary: Elimina una película por ID
 *     tags: [Películas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la película a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Película eliminada exitosamente
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', auth, MovieController.deleteMovie);



module.exports = router;


