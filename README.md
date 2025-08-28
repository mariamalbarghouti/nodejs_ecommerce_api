# 🛒 E-Commerce API

This project is a **Node.js E-Commerce API** built with **Express.js** and **Mongoose**.  
It follows **Clean Code principles** and provides essential e-commerce features like product management, filtering, pagination, search, and nested navigation.

---

## 🚀 Features
- ✅ **CRUD Operations** (Create, Read, Update, Delete)  
- ✅ **Filtering** (e.g., price range, categories, etc.)  
- ✅ **Pagination** for large datasets  
- ✅ **Search** by title & description (case-insensitive)  
- ✅ **Nested Navigation** (e.g., products by category)  
- ✅ **Clean Code Architecture** for maintainability  

---

## 🛠️ Tech Stack
- [Node.js](https://nodejs.org/)  
- [Express.js](https://expressjs.com/)  
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)  
- [dotenv](https://www.npmjs.com/package/dotenv) – environment variables  
- [morgan](https://www.npmjs.com/package/morgan) – HTTP request logger  
- [colors](https://www.npmjs.com/package/colors) – console log colors  
- [slugify](https://www.npmjs.com/package/slugify) – URL-friendly slugs  
- [express-validator](https://express-validator.github.io/) – input validation  
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) – error handling  

---


# 🛒 E-commerce API

This project is a **Node.js** based e-commerce backend built with **Express** and **MongoDB (Mongoose)**.  
The project follows **Clean Code principles** and implements essential features for scalable applications.

---
# Multer Image Upload Middleware

This module provides middleware for handling image uploads using **Multer**.
---

## 🚀 Features

- ✅ **CRUD Operations** – Create, Read, Update, Delete for resources  
- 🔍 **Filtering** – Query products with conditions (gte, lte, etc.)  
- 📄 **Pagination** – Handle large datasets efficiently  
- 📝 **Search** – Find products easily by keywords  
- 🌲 **Nested Navigation** – Manage related data with nested routes
- Uses **memory storage** (files stored in memory as Buffer).
- Accepts only image files (`jpeg`, `png`, `gif`, etc.).
- Provides two main functions:
  - **`uploadSingleImage(fieldName)`** → Upload a single image.
  - **`uploadMixOfImages(arrayOfFields)`** → Upload multiple images with different field names.
- Authentication
- Authorization
- 

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org/)  
- [Express](https://expressjs.com/) (v5.1.0)  
- [MongoDB + Mongoose](https://mongoosejs.com/) (v8.17.1)  
- [dotenv](https://www.npmjs.com/package/dotenv) (v17.2.1) – Environment variables  
- [morgan](https://www.npmjs.com/package/morgan) (v1.10.1) – Logging HTTP requests  
- [slugify](https://www.npmjs.com/package/slugify) (v1.6.6) – URL-friendly slugs  
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) (v1.2.0) – Async error handling  
- [express-validator](https://express-validator.github.io/) (v7.2.1) – Validation  
- [colors](https://www.npmjs.com/package/colors) (v1.4.0) – Console log styling  

---

## 📂 Project Structure

```bash
.
├── config/           # Database & environment configs
├── controllers/      # Business logic (users, products, auth, etc.)
├── models/           # Mongoose models
├── routes/           # API routes
├── middlewares/      # Multer, auth, error handling
├── utils/            # Helper functions (e.g., ApiError, sendEmail)
├── uploads/          # Uploaded images (processed with sharp)
├── server.js         # Entry point
└── README.md         # Documentation

