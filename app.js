const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const { errorHandler, globalErrorHandler } = require('./utils/appError');
// BOOSTING EXPRESS APP
const app = express();

// MIDDLEWARES
app.use(express.json()); // MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// Custom MIDDLEWARES
app.use(morgan('dev'));
app.use((req, res, next) => {
  console.log('FROM THE MIDDLEWARE');
  console.log(new Date().toISOString());

  next();
});

// app.post('/api/v1/tours', (req, res) => createTour);
// app.get('/api/v1/tours', (req, res) => getAllTours);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', (req, res) => updateTour);

app.use('/api/v1/tours/', tourRouter);
app.use('/api/v1/users/', userRouter);

app.all('*', (req, res, next) => {
  next(errorHandler('Not defined Route', 'fail', 404));
});

app.use(globalErrorHandler);
module.exports = app;
