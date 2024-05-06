exports.errorHandler = (message, status, statusCode) => {
  const error = new Error();
  error.status = status;
  error.statusCode = statusCode;
  error.message = message;

  return error;
};

exports.globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
