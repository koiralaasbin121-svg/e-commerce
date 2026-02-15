# Polar Wears Backend API

Express.js backend for the Polar Wears ecommerce platform.

## Features

- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose
- ✅ User authentication with JWT
- ✅ Shopping cart management
- ✅ Order processing
- ✅ Product CRUD operations

## Setup

1. **Install dependencies:**

```bash
npm install
```

1. **Install MongoDB:**

- Download and install MongoDB Community Edition
- Or use MongoDB Atlas (cloud)

1. **Configure environment:**

- Update `.env` file with your MongoDB URI

1. **Seed the database:**

```bash
npm run seed
```

1. **Start the server:**

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product

### Cart

- `GET /api/cart/:sessionId` - Get cart
- `POST /api/cart/:sessionId/items` - Add to cart
- `PUT /api/cart/:sessionId/items/:productId` - Update quantity
- `DELETE /api/cart/:sessionId/items/:productId` - Remove from cart

### Orders

- `POST /api/orders` - Create order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order details
- `PATCH /api/orders/:id/status` - Update order status

### Users

- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs for password hashing
