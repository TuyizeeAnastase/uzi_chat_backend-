import { decoding } from "../util/token";
import { getUser } from "../services/user.service";

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({
      message: "Please login",
    });
  }
  try {
    const decoded = await decoding(token);
    const user = await getUser(decoded.id);
    if(!user){
      res.status(404).json({
        message: "User doesn't exist",
      });
    }
    req.user = user;
    req.logged_user = user;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Please login to access",
    });
  }
};
