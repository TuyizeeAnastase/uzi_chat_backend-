import { createUser } from "../services/user.service";
import bcrypt from "bcrypt";
import { getToken } from "../util/token";

export class userControllers {
  async registerUSer(req, res) {
    try {
      const { username, password, confirm_password } = req.body;
      if (password != confirm_password) {
        return res.status(500).json({
          message: "Confirm password is different with password",
        });
      }
      const newUser = {
        username: username.toLowerCase(),
        password: await bcrypt.hash(password, 12),
      };
      const user = await createUser(newUser);
      return res.status(201).json({
        message: "Signup successfully",
        user: user,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while signup",
        error: err.message,
      });
    }
  }

  async login(req, res) {
    try {
      const { password } = req.body;
      const user = req.user;
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({
          message: "Password does not match",
        });
      }
      const token = getToken({ id: user.id, username: user.username });
      return res.status(200).json({
        token: token,
        user: {
          user_id: user.id,
          username: user.username,
        },
      });
    } catch (err) {
      res.status(500).json({
        message: "Error occured while logged in, try again",
        error: err.message,
      });
    }
  }
}

const userController = new userControllers();
export default userController;
