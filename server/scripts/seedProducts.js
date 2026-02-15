import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';

dotenv.config();

const products = [
    {
        title: "GLACIER PUFFER v.4",
        price: 1450,
        image: "https://i.pinimg.com/originals/14/26/a2/1426a22a2018977355ee81921a1acbba.jpg",
        description: "Premium insulated puffer with arctic-grade materials",
        category: "puffer",
        stockQuantity: 15,
        sizes: ["S", "M", "L", "XL"],
        featured: true,
        rating: 4.8
    },
    {
        title: "ARCTIC NOIR ENSEMBLE",
        price: 2800,
        image: "https://i.pinimg.com/originals/23/95/e2/2395e2f1eec487115b0b80ea0825a50f.jpg",
        description: "Sophisticated all-black winter ensemble",
        category: "coat",
        stockQuantity: 8,
        sizes: ["XS", "S", "M", "L"],
        featured: true,
        rating: 4.9
    },
    {
        title: "OLIVE WOOL MAXI",
        price: 1980,
        image: "https://i.pinimg.com/originals/2d/18/2a/2d182a807581b0c26b825a603a0653e6.jpg",
        description: "Elegant wool coat with plaid details",
        category: "coat",
        stockQuantity: 12,
        sizes: ["S", "M", "L", "XL"],
        featured: false,
        rating: 4.7
    },
    {
        title: "TECH STREETWEAR BLUE",
        price: 890,
        image: "https://i.pinimg.com/originals/c8/ba/00/c8ba006916dcb8113b4cb6c13577890d.jpg",
        description: "Modern streetwear with technical fabrics",
        category: "streetwear",
        stockQuantity: 20,
        sizes: ["M", "L", "XL", "XXL"],
        featured: false,
        rating: 4.5
    },
    {
        title: "HOUNDSTOOTH TACTICAL",
        price: 1200,
        image: "https://i.pinimg.com/originals/34/0b/f8/340bf8de9ffc1ba7a36e7637de4295b9.jpg",
        description: "Classic houndstooth pattern with modern fit",
        category: "coat",
        stockQuantity: 10,
        sizes: ["S", "M", "L"],
        featured: false,
        rating: 4.6
    },
    {
        title: "MIDNIGHT PUFFER PRO",
        price: 780,
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=2000&auto=format&fit=crop",
        description: "Sleek black puffer for urban winters",
        category: "puffer",
        stockQuantity: 25,
        sizes: ["XS", "S", "M", "L", "XL"],
        featured: true,
        rating: 4.7
    },
    {
        title: "BEIGE MINIMAL LAYERS",
        price: 650,
        image: "https://i.pinimg.com/originals/1a/45/ff/1a45ff9fe2de1b82b331e00c5b33249f.jpg",
        description: "Minimalist layering system for versatile styling",
        category: "coat",
        stockQuantity: 18,
        sizes: ["S", "M", "L", "XL"],
        featured: false,
        rating: 4.4
    },
    {
        title: "ALPINE KNIT DRESS",
        price: 1650,
        image: "https://i.pinimg.com/originals/1e/3d/28/1e3d28f616c4d8ef38fb1357fddeb4de.jpg",
        description: "Cozy knit dress perfect for alpine retreats",
        category: "dress",
        stockQuantity: 14,
        sizes: ["XS", "S", "M", "L"],
        featured: false,
        rating: 4.8
    },
    {
        title: "WILD STATEMENT COAT",
        price: 2420,
        image: "https://i.pinimg.com/originals/f9/c0/c5/f9c0c52efaf44c3dbd2047a57706925e.jpg",
        description: "Bold leopard print statement piece",
        category: "coat",
        stockQuantity: 6,
        sizes: ["S", "M", "L"],
        featured: true,
        rating: 4.9
    }
];

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Insert new products
        await Product.insertMany(products);
        console.log('✅ Successfully seeded', products.length, 'products');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();
