const { generateToken } = require('../auth/auth');
const { errorHandler } = require('../utils/appError');
const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    name: 'ahmed',
    email: 'ahmed@gmail.com',
    password: 'ahmed',
    isAdmin: true,
  },
  {
    id: 2,
    name: 'mohamed',
    email: 'mohamed@gmail.com',
    password: 'mohamed',
    isAdmin: false,
  },
];
exports.getAllUsers = () => {};
exports.getUser = () => {};

exports.login = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(errorHandler('Please provide email and password', 'Fail', 400));
  }
  // 1) CHECK EMAIL AND PASSWORD

  //   const decodedPassword = await bcrypt.compare(
  //     newUser.password,
  //     hashedPassword
  //   );

  const user = users.find((item) => item.email === email);
  // 2) CHECK I
};

exports.createUser = async (req, res) => {
  const newUser = req.body;

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(newUser.password, salt);

  newUser.password = hashedPassword;
  users.push(newUser);

  const token = generateToken(newUser.id);
  res.status(200).json({
    newUser,
    token,
  });
};

exports.updateUser = () => {};
exports.deleteUser = () => {};
