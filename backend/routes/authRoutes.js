import express from 'express';
<<<<<<< HEAD
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router; 
=======
import { register, login, forgotPassword } from '../controllers/authController.js';
const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
export default router;
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
