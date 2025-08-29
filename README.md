# 🛒 E-Commerce API

This project is a **Node.js E-Commerce API** built with **Express.js** and **Mongoose**.  
It follows **Clean Code principles** and provides essential e-commerce features like product management, filtering, pagination, search, and nested navigation.

---
# Multer Image Upload Middleware

This module provides middleware for handling image uploads using **Multer**.
---

## 🚀 Features
- ✅ **CRUD Operations** (Create, Read, Update, Delete)  
- ✅ **Filtering** (e.g., price range, categories, etc.)  
- ✅ **Pagination** for large datasets  
- ✅ **Search** by title & description (case-insensitive)  
- ✅ **Nested Navigation** (e.g., products by category)  
- ✅ **Clean Code Architecture** for maintainability
- ✅ Uses **memory storage** (files stored in memory as Buffer).
     - Accepts only image files (`jpeg`, `png`, `gif`, etc.).
- ✅ Provides two main functions:
  - **`uploadSingleImage(fieldName)`** → Upload a single image.
  - **`uploadMixOfImages(arrayOfFields)`** → Upload multiple images with different field names.
- ✅ Provides three roles:
  - **`admin`** → full access to the system (manage users, data, and permissions).
  - **`user`** → limited access, can only interact with their own data and perform standard actions.
  - **`manager`** → extended privileges over user, can oversee and manage groups of users or resources but with fewer rights than admin.
- ✅ Authentication
   - CURD operations
   - Password confirmation
   - Encrypt password
   - Sign up
   - Create token
   - Login
   - Forget password
 
- ✅ Authorization
    - deactivation
    - Change password
  
  


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

