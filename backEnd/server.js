const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")

const authMiddleware = require('./middleware/authMiddleware.js')
const authRoutes = require("./routes/auth");
const bcrypt = require("bcryptjs")
const User = require('./models/User.js'); 


dotenv.config();
const app =express();

app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User registered", user: savedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/api/auth", authRoutes);

app.get("/api/protected", authMiddleware, (req, res) => {
    res.json({message: "Access Granted", user: req.user});
});


mongoose.connect(process.env.MONGO_URI)
.then( () => app.listen(5000, () => console.log("Server running")))
.catch((err) => console.log(err));