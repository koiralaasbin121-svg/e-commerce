import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, '../db.json');

const getDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const saveDB = (db) => fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

// Get cart
router.get('/:sessionId', (req, res) => {
    const { sessionId } = req.params;
    const db = getDB();
    const cart = db.carts[sessionId] || { items: [], total: 0 };
    res.json(cart);
});

// Add item to cart
router.post('/:sessionId/items', (req, res) => {
    const { sessionId } = req.params;
    const { productId, title, price, image, quantity = 1 } = req.body;

    const db = getDB();
    if (!db.carts[sessionId]) {
        db.carts[sessionId] = { items: [], total: 0 };
    }

    const cart = db.carts[sessionId];
    const existingItem = cart.items.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({ productId, title, price, image, quantity });
    }

    // Recalculate total
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    saveDB(db);
    res.json(cart);
});

export default router;
