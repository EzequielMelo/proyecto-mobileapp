import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
