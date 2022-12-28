import { User } from "../database/models";

export const createUser = async (user) => {
  return await User.create(user);
};

export const getUser = async (id) => {
  const user = await User.findOne({
    where: {
      id,
    },
  });
  return user;
};
