import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
<<<<<<< HEAD
import path from 'path';
import { fileURLToPath } from 'url';
=======
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
import connectDB from './config/database.js';
import urlRoutes from './routes/urlRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { errorHandler, notFound } from './middlewares/errorHandler.js';

dotenv.config();

<<<<<<< HEAD
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

=======
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

<<<<<<< HEAD
// Static file serving for password prompt page
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL] 
    : ['http://localhost:3000', 'http://localhost:5173'], // Common dev ports
  credentials: true, // If you need to send cookies
  optionsSuccessStatus: 200,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE']
}));
=======

// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' 
//     ? ['https://yourfrontend.com'] 
//     : ['http://localhost:3000', 'http://localhost:5173'], // Common dev ports
//   credentials: true, // If you need to send cookies
//   optionsSuccessStatus: 200
// }));
app.use(cors());
// whats happening now ??
// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
//   credentials: false
// }));
>>>>>>> 1a3d51950d71267b8229518fd13f95e1980e06d7
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', urlRoutes);
app.use('/', urlRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 