import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../db.json');

const getDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Get all products
router.get('/', (req, res) => {
    try {
        const db = getDB();
        let products = db.products;
        const { category, sort } = req.query;

        if (category) {
            products = products.filter(p => p.category === category);
        }

        if (sort === 'price-asc') products.sort((a, b) => a.price - b.price);
        if (sort === 'price-desc') products.sort((a, b) => b.price - a.price);

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get single product
router.get('/:id', (req, res) => {
    try {
        const db = getDB();
        const product = db.products.find(p => p.id === req.params.id);
        if (!product) return res.status(404).json({ error: 'Product not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
