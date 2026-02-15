import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// We'll use the products route we just updated. 
// Cart route also needs update to stay consistent, but for now products is most important.
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Root route
app.get('/', (req, res) => {
    res.json({
        message: 'Polar Wears API (Running in Lite Mode)',
        database: 'Local JSON File'
    });
});

app.listen(PORT, () => {
    console.log(`🚀 Lite Server running on http://localhost:${PORT}`);
});
