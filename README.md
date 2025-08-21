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

## 📂 Project Structure
ECOMERCE_API_V1/
│── controllers/ # Controllers (Business logic for CRUD operations)
│ └── subcategory_controller.js
│
│── middlewares/ # Custom middlewares (e.g., error handling, auth, filters)
│
│── models/ # Mongoose Models (Schema definitions)
│ ├── brand_model.js
│ ├── category_model.js
│ ├── product_model.js
│ └── subcategory_model.js
│
│── routes/ # Express Routes (API endpoints)
│ ├── brand_routes.js
│ ├── category_route.js
│ ├── category_routes.js
│ ├── product_route.js
│ └── subcategory_routes.js
│
│── utils/ # Utilities & helpers
│ ├── dummy_data/ # Seed or dummy data (if needed)
│ ├── validators/ # Input validation (express-validator)
│ │ ├── brand_validator.js
│ │ ├── category_validator.js
│ │ ├── product_validator.js
│ │ └── subcategory_validator.js
│ ├── api_error.js # Custom API error handler
│ └── api_features.js # Filtering, sorting, pagination, search utilities
│
│── .gitignore
│── config.env # Environment variables
│── package.json
│── package-lock.json
│── server.js # Entry point
