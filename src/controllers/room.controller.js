import { getRooms, createRoom, searchRoom } from "../services/room.services";

export class roomControllers {
  async getAllRoom(req, res) {
    try {
      let rooms;
      const { q } = req.query;
      if (q) {
        rooms = await searchRoom(q);
      } else {
        rooms = await getRooms();
      }
      res.status(200).json({
        rooms,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error while getting rooms",
        error: err,
      });
    }
  }

  async createRoom(req, res) {
    try {
      const profile = req.results;
      const { name } = req.body;
      var room_id = Math.floor(10000000 + Math.random() * 90000000);
      const room = {
        name: name,
        room_id: room_id,
        profile: profile.secure_url,
      };
      const newRoom = await createRoom(room);
      return res.status(201).json({
        message: "Room created successfully",
        room: newRoom,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while creating room",
        error: err.message,
      });
    }
  }
}

const roomController = new roomControllers();
export default roomController;
