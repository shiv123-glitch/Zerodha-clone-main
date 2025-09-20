const User = require("./models/UserModel");
const { createSecretToken } = require("./SecretToken");
const bcrypt = require("bcrypt");

const SignupAuth = async (req, res) => {
  try {
    const { username, name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      // secure: true, // Only enable in production over HTTPS
    });

    res.status(201).json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

const LoginAuth = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const isMatch = await bcrypt.compare(password, validUser.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect email or password" });
    }

    const token = createSecretToken(validUser._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      // secure: true, // Only enable in production
    });

    res.status(200).json({
      message: "User logged in successfully",
      success: true,
      user: validUser,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = { SignupAuth, LoginAuth };
