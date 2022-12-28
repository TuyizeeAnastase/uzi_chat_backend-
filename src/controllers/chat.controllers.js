import { getChats, createChat } from "../services/chat.service";

export class chatControllers {
  async getAllChats(req, res) {
    try {
      const { roomId } = req.query;
      const chats = await getChats(roomId);
      res.status(200).json({
        chats,
      });
    } catch (err) {
      res.status(500).json({
        message: "Error while gettings chats",
        error: err,
      });
    }
  }
  async createChat(req, res) {
    try {
      const loggedUser = req.logged_user;
      const { message, roomId } = req.body;
      const messageBody = {
        roomId: roomId,
        message: message,
        userId: loggedUser.id,
      };
      const newMessage = await createChat(messageBody);
      return res.status(201).json({
        message: "Message Sent",
        message: newMessage,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while sending message",
        error: err.message,
      });
    }
  }
}

const chatController = new chatControllers();
export default chatController;
