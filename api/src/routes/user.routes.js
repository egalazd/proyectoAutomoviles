const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');

router.post('/register', UserController.register);
router.post('/login', UserController.login);

//requiere pasar el token generado en login
router.get('/profile', auth, UserController.profile);

module.exports = router;

