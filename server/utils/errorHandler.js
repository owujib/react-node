const AppError = require('./appError');

const JWTError = (err, res) => {
  return res.status(401).json({
    status: 'fail',
    message: 'Invalid token please login again',
  });
};

const productionErrors = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('Error :', err);
    return res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'errors';
  if (process.env.NODE_ENV === 'development') {
    console.log(err);
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'JsonWebTokenError') {
      error = JWTError(err, res);
      console.log(error);
      return error;
    }
    return productionErrors(err, res);
  }
};
