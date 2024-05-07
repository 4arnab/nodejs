const express = require('express');
const userController = require('../controllers/usersController');

const router = express.Router();

router.route('/').get(userController.getAllUsers);
// .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.post('/login', userController.login);
router.post('/singup', userController.createUser);
module.exports = router;
