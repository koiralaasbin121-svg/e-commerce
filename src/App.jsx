import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Search, Filter, Menu, X, Check } from 'lucide-react';
import axios from 'axios';

const API_URL = '/api';

const SnowParticles = () => {
    return (
        <div className="snow-container">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="snow-particle"
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: -20,
                        opacity: Math.random() * 0.5 + 0.1
                    }}
                    animate={{
                        y: '100vh',
                        x: `calc(${Math.random() * 200 - 100}px + ${Math.random() * 100}%)`,
                    }}
                    transition={{
                        duration: Math.random() * 15 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 20
                    }}
                    style={{
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 3 + 1 + 'px',
                    }}
                />
            ))}
        </div>
    );
};

const ProductCard = ({ product, onAddToCart, inCart }) => (
    <motion.div
        className="product-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
        <div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="product-badge">NEW</div>
        </div>
        <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <div className="product-footer">
                <span className="product-price">${product.price.toLocaleString()}</span>
                <motion.button
                    className={`add-to-cart-btn ${inCart ? 'in-cart' : ''}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onAddToCart(product)}
                >
                    {inCart ? <Check size={16} /> : <ShoppingCart size={16} />}
                    <span className="btn-text">{inCart ? 'Added' : 'Add to Cart'}</span>
                </motion.button>
            </div>
        </div>
    </motion.div>
);

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({ items: [], total: 0 });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [sortBy, setSortBy] = useState('featured');
    const [notification, setNotification] = useState(null);
    const [loading, setLoading] = useState(true);

    const sessionId = "session_99"; // Hardcoded for demo

    // Fetch Products from API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${API_URL}/products?sort=${sortBy}`);
                setProducts(response.data);
            } catch (err) {
                console.error("Fetch failed", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [sortBy]);

    // Fetch Cart from API
    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await axios.get(`${API_URL}/cart/${sessionId}`);
                setCart(response.data);
            } catch (err) {
                console.error("Cart fetch failed", err);
            }
        };
        fetchCart();
    }, []);

    const addToCart = async (product) => {
        try {
            const response = await axios.post(`${API_URL}/cart/${sessionId}/items`, {
                productId: product.id,
                title: product.title,
                price: product.price,
                image: product.image
            });
            setCart(response.data);
            setNotification(`${product.title} added to cart!`);
            setTimeout(() => setNotification(null), 3000);
        } catch (err) {
            console.error("Add failed", err);
        }
    };

    const cartCount = cart.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

    return (
        <div className="app">
            <AnimatePresence>
                <SnowParticles />
            </AnimatePresence>

            <AnimatePresence>
                {notification && (
                    <motion.div
                        className="notification"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 20 }}
                        exit={{ opacity: 0, y: -50 }}
                    >
                        <Check size={18} />
                        {notification}
                    </motion.div>
                )}
            </AnimatePresence>

            <nav className="navbar">
                <motion.div className="logo" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    POLAR WEARS
                </motion.div>

                <div className="search-bar">
                    <Search size={18} />
                    <input type="text" placeholder="Search winter collection..." />
                </div>

                <div className="nav-right">
                    <div className="mobile-search-icon"><Search size={20} /></div>
                    <motion.div className="cart-icon" whileHover={{ scale: 1.1 }}>
                        <ShoppingCart size={20} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </motion.div>
                    <div className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                    >
                        <div className="mobile-menu-item">All Products</div>
                        <div className="mobile-menu-item">New Arrivals</div>
                        <div className="mobile-menu-item">Sale</div>
                        <div className="mobile-menu-item">About</div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="hero-banner">
                <div className="banner-content">
                    <h1>Winter Collection 2026</h1>
                    <p>Premium cold weather fashion for the Arctic explorer</p>
                    <button className="shop-now-btn">Shop Now</button>
                </div>
            </section>

            <section className="products-section">
                <div className="section-header">
                    <h2>Our Collection {loading && '(Loading...)'}</h2>
                    <div className="filter-controls">
                        <button className="filter-btn"><Filter size={16} /> Filter</button>
                        <select className="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="featured">Sort by: Featured</option>
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {products.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                            onAddToCart={addToCart}
                            inCart={cart.items?.some(cartItem => cartItem.productId === item.id)}
                        />
                    ))}
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>POLAR WEARS</h3>
                        <p>Premium cold weather apparel since 2026</p>
                        <div className="cart-summary-tag">
                            <ShoppingCart size={12} />
                            {cartCount} items | ${cart.total?.toLocaleString() || '0'}
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Shop</h4>
                        <a>All Products</a><a>New Arrivals</a><a>Sale</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 Polar Wears. (Connected to Backend)</span>
                </div>
            </footer>
        </div>
    );
}

export default App;
