# 🚀 Polar Wears - Quick Start Guide

## ✅ What's Already Done

1. ✅ Backend dependencies installed (137 packages)
2. ✅ PowerShell execution policy fixed
3. 🔄 MongoDB installing...

## 📋 Next Steps

### 1. Start MongoDB (after installation completes)

MongoDB will be installed automatically. After it completes, it should start as a Windows service.

To verify MongoDB is running:

```powershell
mongod --version
```

### 2. Seed the Database

```powershell
cd c:\Users\user\Desktop\Ecommerce\server
npm run seed
```

### 3. Start the Backend Server

```powershell
npm run dev
```

Backend will run on: **<http://localhost:5000>**

### 4. Start the Frontend (separate terminal)

```powershell
cd c:\Users\user\Desktop\Ecommerce
npm run dev
```

Frontend will run on: **<http://localhost:5174>**

## 🧪 Test the API

Once both are running, test the backend:

- **GET** <http://localhost:5000/api/products>
- **GET** <http://localhost:5000/api/cart/session123>
- **POST** <http://localhost:5000/api/users/register>

## 📁 Project Structure

```
Ecommerce/
├── src/                    # Frontend (React + Vite)
│   ├── App.jsx
│   └── index.css
└── server/                 # Backend (Node + Express)
    ├── models/            # MongoDB models
    ├── routes/            # API endpoints
    ├── scripts/           # DB seeding
    └── server.js          # Main server file
```

## 🛠️ Troubleshooting

**MongoDB not starting?**

```powershell
net start MongoDB
```

**Port already in use?**

- Change PORT in `server/.env`

**Can't connect to database?**

- Check MongoDB is running
- Verify MONGODB_URI in `server/.env`

## 🎉 You're Ready

Your full-stack Polar Wears ecommerce is set up!
