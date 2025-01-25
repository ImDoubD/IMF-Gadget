import express, { Request, Response } from 'express';
import gadgetRoutes from './routes/gadgetRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', gadgetRoutes);

app.get("/api", (req: Request, res: Response) => {
    res.send("Server is running...");
  });

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running...");
  });

export default app;