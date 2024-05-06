const app = require('./app');

// Handling UNCAUGHT EXCEPTION
process.on('uncaughtException', (err) => {
  console.log('uncaughtException'.toUpperCase(), 'Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

// STARTING APPLICATION
const PORT = 3000;
const server = app.listen(PORT, () =>
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`)
);

// Handling unhandled REJECTION
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION, SHUTTING DOWN...');

  server.close(() => {
    process.exit(1);
  });
});

// Handling Uncaught exceptions
process.on('uncaughtExceptionMonitor', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
