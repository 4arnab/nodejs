const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// CONTROLLERS
exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(401).json({
      status: 'fail',
      message: 'invalid ID',
    });
  }

  next();
};

exports.checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: 'fail',
      message: 'no body data where found',
    });
  }
  next();
};

exports.getTour = function (req, res) {
  const id = req.params.id * 1;
  const tour = tours.find((item) => item.id == id);

  if (tours.length < id) {
    return res.status(404).json({ message: 'not found' });
  }

  res.status(200).json({
    status: 'success',
    tour,
  });
};

exports.getAllTours = function (req, res) {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    tours,
  });
};

exports.createTour = function (req, res) {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          newTour,
        },
      });
    }
  );
};

exports.updateTour = function (req, res) {
  res.status(200).json({
    status: 'success',
    tour: 'updated tour',
  });
};
const deleteTour = function () {};
