const { generateToken } = require('../auth/auth');
const { errorHandler } = require('../utils/appError');
const bcrypt = require('bcryptjs');
const { prisma } = require('../utils/prismaClient');

exports.getAllUsers = async (req, res, next) => {
  const users = await prisma.user.findMany({
    select: {
      Email: true,
      userName: true,
      Role: true,
    },
  });

  res.status(200).json({
    users,
    status: 'Success',
  });
};
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

exports.createUser = async (req, res, next) => {
  const { userName, email } = req.body;
  if (!userName || !email) {
    return next(errorHandler('Please provide valid data', 'fail', 400));
  }

  const newUser = await prisma.user.create({
    data: {
      Email: email,
      userName,
    },
    select: {
      Email: true,
      userName: true,
    },
  });
  const token = generateToken(newUser.Id);

  res.status(200).json({
    newUser,
    token,
  });

  // const salt = await bcrypt.genSalt(12);
  // const hashedPassword = await bcrypt.hash(newUser.password, salt);

  // newUser.password = hashedPassword;
  // users.push(newUser);
};

exports.updateUser = () => {};
exports.deleteUser = () => {};
