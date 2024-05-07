const jwt = require('jsonwebtoken');

exports.generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });

  return token;
};

// AUTH PROTECT MIDDLEWARE
/**
 *GETTING TOKEN FROM THE CLIENT
 *TOKEN VERIFICATION
 *CHECKING USER EXISTENCE
 *CHECK IF THE USER CHANGES THE PASSWORD AFTER THE TOKEN WAS ISSUED
 */
