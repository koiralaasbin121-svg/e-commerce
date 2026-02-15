# ❄️ Polar Wears - Luxury Winter Ecommerce

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

![Polar Wears](https://images.unsplash.com/photo-1510936111840-65e151ad71bb?q=80&w=2000&auto=format&fit=crop)

A full-stack, responsive ecommerce platform for luxury winter streetwear. Built with a modern React frontend and a robust Node.js/Express backend.

## 🚀 Features

- **Storefront:**
  - Modern, responsive UI with animations (Framer Motion)
  - Interactive product grid with filtering and sorting
  - "Add to Cart" functionality with real-time notifications
  - Persistent shopping cart (session-based)
  - Mobile-first design with hamburger menu

- **Backend API:**
  - RESTful API endpoints for Products and Cart management
  - **Lite Mode:** Uses a local JSON database (no MongoDB required for quick setup)
  - **Scalable:** Easy to switch to MongoDB for production (Models included)

## 🛠️ Tech Stack

- **Frontend:** **React.js (v18)**, Vite, Framer Motion, Lucide React, Axios
- **Backend:** Node.js, Express.js
- **Database:** Local JSON (Development) / MongoDB (Production ready)
- **Styling:** CSS3, Responsive Design variables

## 📦 Installation

Clone the repository and install dependencies for both frontend and backend.

### 1. Backend Setup

```bash
cd server
npm install
npm run dev
```

*Runs on <http://localhost:5000>*

### 2. Frontend Setup

Open a new terminal:

```bash
npm install
npm run dev
```

*Runs on <http://localhost:5173>*

## 🔌 API Endpoints

- `GET /api/products` - List all products (supports `?sort=price-asc` etc.)
- `GET /api/products/:id` - Get product details
- `GET /api/cart/:sessionId` - Get cart for a session
- `POST /api/cart/:sessionId/items` - Add item to cart

## 📂 Project Structure

```
Ecommerce/
├── src/               # React Frontend
│   ├── App.jsx        # Main Logic
│   └── index.css      # Global Styles
├── server/            # Node.js Backend
│   ├── db.json        # Local Database
│   ├── routes/        # API Routes
│   └── server.js      # Express App Entry
└── ...
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
