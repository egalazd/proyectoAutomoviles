const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');


/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Endpoints de autenticación y perfil
 */

/**
 * @swagger
 * /api/user/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - correo
 *               - password
 *             properties:
 *               nombre:
 *                 type: string
 *               correo:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Error de validación
 */
router.post('/register', UserController.register);


/**
 * @swagger
 * /api/user/login:
 *   post:
 *     summary: Inicia sesión y obtiene token JWT
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - correo
 *               - password
 *             properties:
 *               correo:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve token
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', UserController.login);


//requiere pasar el token generado en login

/**
 * @swagger
 * /api/user/profile:
 *   get:
 *     summary: Obtiene perfil del usuario autenticado (Requiere TOKEN de usuario)
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil del usuario
 *       401:
 *         description: No autorizado
 */
router.get('/profile', auth, UserController.profile);


/**
 * @swagger
 * /api/user/all:
 *   get:
 *     summary: Lista todos los usuarios
 *     tags: [Usuarios]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
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
 *                   nombre:
 *                     type: string
 *                     example: Enrique Galaz
 *                   correo_electronico:
 *                     type: string
 *                     example: enrique@example.com
 *       401:
 *         description: No autorizado
 */
router.get('/all', auth, UserController.getAllUsers);


module.exports = router;

