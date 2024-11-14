import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
