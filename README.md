# 🍔 Food Delivery App

A full-stack food delivery web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). The project is split into three parts: a customer-facing **frontend**, an **admin** panel for managing food items and orders, and a **backend** API server.

---

## 📁 Project Structure

```
Food-Delivery-App/
├── backend/       # Express.js REST API
├── frontend/      # React customer app (Vite)
└── admin/         # React admin panel (Vite)
```

---

## ✨ Features

- Browse and filter food items by category
- Add / remove items from cart
- User authentication (Register / Login with JWT)
- Place orders with Stripe payment integration
- Admin panel to add, list, and remove food items
- Order management in admin panel

---

## 🛠️ Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) **or** a [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A [Stripe](https://stripe.com) account (for payment processing)

---

## ⚙️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/DevanshDeep-5/Food-Delivery-App.git
cd Food-Delivery-App
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory (copy from `.env.example`):

```bash
cp .env.example .env
```

Then open `.env` and fill in your values:

```env
JWT_SECRET="your_strong_jwt_secret"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
MONGODB_URI="mongodb://127.0.0.1:27017/Food-Del"
FRONTEND_URL="http://localhost:5173"
```

> **Note:**
> - `STRIPE_SECRET_KEY` must be your Stripe **secret** key (starts with `sk_test_` or `sk_live_`). Get it from your [Stripe Dashboard](https://dashboard.stripe.com/apikeys).
> - `MONGODB_URI` can be a local MongoDB URL or a MongoDB Atlas connection string (e.g., `mongodb+srv://<user>:<password>@cluster.mongodb.net/Food-Del`).

Start the backend server:

```bash
npm run server
```

The backend will run at **http://localhost:4000**

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run at **http://localhost:5173**

---

### 4. Admin Panel Setup

```bash
cd ../admin
npm install
npm run dev
```

The admin panel will run at **http://localhost:5174** (or the next available port)

---

## 🚀 Running the Full Application

Open **three terminal windows** and run each part:

| Terminal | Directory  | Command          | URL                       |
|----------|------------|------------------|---------------------------|
| 1        | `backend/` | `npm run server` | http://localhost:4000     |
| 2        | `frontend/`| `npm run dev`    | http://localhost:5173     |
| 3        | `admin/`   | `npm run dev`    | http://localhost:5174     |

---

## 🔑 Environment Variables Reference

| Variable           | Description                                      | Example                                   |
|--------------------|--------------------------------------------------|-------------------------------------------|
| `JWT_SECRET`       | Secret key for signing JWT tokens                | `my_super_secret_key`                     |
| `STRIPE_SECRET_KEY`| Stripe secret API key for payment processing     | `sk_test_51...`                           |
| `MONGODB_URI`      | MongoDB connection string                        | `mongodb://127.0.0.1:27017/Food-Del`      |
| `FRONTEND_URL`     | Base URL of the frontend app (for Stripe redirect) | `http://localhost:5173`                 |

---

## 📦 Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | React 18, React Router v6, Axios, Vite |
| Admin    | React 18, React Router v7, Axios, React Toastify, Vite |
| Backend  | Node.js, Express.js, MongoDB, Mongoose |
| Auth     | JWT (jsonwebtoken), bcrypt        |
| Payments | Stripe Checkout                   |
| File Upload | Multer                         |

---

## 📝 License

This project is open-source and available under the [ISC License](LICENSE).
