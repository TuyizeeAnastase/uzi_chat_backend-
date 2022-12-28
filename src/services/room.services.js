import { Room } from "../database/models";
import { Op } from "sequelize";

export const getRooms = () => {
  return Room.findAll({});
};

export const createRoom = async (room) => {
  return await Room.create(room);
};

export const searchRoom = async (q) => {
  const room = await Room.findAll({
    where: {
      room_id: {
        [Op.like]: `%${q}%`,
      },
    },
  });
  return room;
};

export const getRoomByRoomId = async (id) => {
  const room = await Room.findOne({
    where: {
      room_id: id,
    },
  });
  return room;
};
