import express from 'express';
<<<<<<< HEAD
import { shortenUrl, getAllUrls, redirectUrl, verifyPassword, toggleUrlStatus, resetPasswordAttempts } from '../controllers/urlController.js';
=======
import { shortenUrl, getAllUrls, redirectUrl } from '../controllers/urlController.js';
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/shorten', authenticate, shortenUrl);
router.get('/urls', authenticate, getAllUrls);
<<<<<<< HEAD
router.post('/verify-password', verifyPassword);
router.put('/toggle/:urlId', authenticate, toggleUrlStatus);
router.put('/reset-attempts/:urlId', authenticate, resetPasswordAttempts);
=======
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
router.get('/:shortUrl', redirectUrl);

export default router; 