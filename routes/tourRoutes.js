const express = require('express');
const router = express.Router();
const tourController = require('../controllers/toursController');

router.param('id', tourController.checkID);

// Router, multiple middlewares,
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour);

module.exports = router;
