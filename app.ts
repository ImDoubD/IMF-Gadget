import express from 'express';
import gadgetRoutes from './routes/gadgetRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', gadgetRoutes);

export default app;