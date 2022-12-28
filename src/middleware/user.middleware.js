import { User } from "../database/models";

export const checkUserExist = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({
    where: {
      username: username.toLowerCase(),
    },
  });
  if (user) {
    res.status(404).json({
      message: "User already exist",
    });
  }
  next();
};

export const checkUserLogin = async (req, res, next) => {
  const { username } = req.body;
  const user = await User.findOne({
    where: {
      username: username.toLowerCase(),
    },
  });
  if (!user) {
    return res.status(404).json({
      message: "User does not exist",
    });
  }
  req.user = user;
  next();
};
