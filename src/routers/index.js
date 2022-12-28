import express from "express";
import roomRouters from "./room.router";
import userRouters from "./user.router";
import chatRouters from "./chat.router";

const routes = express();

routes.get("/", (req, res) => {
  res.status(200).json({
    message: "This uzi_chat backend",
  });
});

routes.use("/api/v1/rooms", roomRouters);
routes.use("/api/v1/users", userRouters);
routes.use("/api/v1/chat", chatRouters);

routes.get("*", (req, res) => {
  res.status(404).json({
    message: "Page not found",
  });
});

export default routes;
