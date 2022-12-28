import { Chart, User, Room } from "../database/models";

export const createChat = async (chat) => {
  return Chart.create(chat);
};

export const getChats = async (roomId) => {
  return await Chart.findAll({
    where: {
      roomId,
    },
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: Room,
        as: "room",
      },
    ],
  });
};
