import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/pmuy')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error', err));

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});
