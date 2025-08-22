const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({ path: './config.env' });

const dbConnection = require('./config/database');
dbConnection();
const categoryRoutes = require('./routes/category_routes');
const ApiError = require('./utils/api_error');
const globalErrorHandler = require('./middlewares/error_middleware');
const subCategoryRoutes = require('./routes/subcategory_routes');
const brandRoutes = require('./routes/brand_routes');
const productRoutes = require('./routes/product_route');
// Express app
const app = express();
app.use(express.json());
// Middleware
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

// Mount Routes
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/subcategories', subCategoryRoutes);
app.use('/api/v1/brands', brandRoutes);
app.use('/api/v1/products', productRoutes);

app.use((req, res, next) => {
    next(new ApiError(`Can't find this route: ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('unhandledRejection', (error) => {
    console.error(`Unhandled Rejection: ${error.message}|${error.message}`);
    server.close(() => {
        console.error('Shutting down the server due to unhandled rejection');
        process.exit(1);
    });
});