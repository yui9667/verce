import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './src/routes/itemRoutes.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use(router);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connect to MongoDB'))
  .catch((err) => {
    console.error('Could not connect to MongoDB'), err;
  });

const PORT = 3001;
app.listen(PORT, () => {
  `Server is running on Port ${PORT}`;
});
