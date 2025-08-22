
const globalErrorHandler = (error, request, response, next) => {
    const statusCode = error.statusCode || 500;
    if (process.env.NODE_ENV == 'development') {
        response.status(statusCode).json({
            status: error.status || 'error',
            isOperational: error.isOperational || false,
            statusCode,
            message: error.message || 'Internal Server Error',
            stack: error.stack
        });
    } else {
        response.status(statusCode).json({
            statusCode,
            message: error.message || 'Internal Server Error',
        });
    }
};

module.exports = globalErrorHandler;


                           