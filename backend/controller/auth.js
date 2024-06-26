import users from "../Model/auth.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existinguser = await users.findOne({ email });
    if (existinguser) {
      return res.status(404).json({ message: "User already Exist." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json("Something went worng...");
  }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existinguser = await users.findOne({ email });
      if (!existinguser) {
        return res.status(404).json({ message: "User don't Exist." });
      }
      const isPasswordCrt = await bcrypt.compare(password, existinguser.password);
      if (!isPasswordCrt) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      res.status(200).json({ result: existinguser, token });
    } catch (error) {
      res.status(500).json("Something went worng...");
    }
  };
