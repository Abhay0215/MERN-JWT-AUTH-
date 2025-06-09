const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ error: "Invalid creds" });

        console.log("User found:", user.email);
        
        console.log("Password stored (hashed):", user.password);

        const isMatch = await bcrypt.compare(password, user.password);

        console.log("Password match result:", isMatch);

        if (!isMatch) return res.status(400).json({ error: "Invalid creds" });

        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        console.log("Login successful");
        res.json({ token });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Server error" });
    }
};
