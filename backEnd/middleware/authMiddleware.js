const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    const authHeader = req.header("Authorization");

    const token = authHeader?.split(" ")[1];

    if(!token) return res.status(401).json({error: "Acess denied"});

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.userId;
        next();
    } catch {
        res.status(400).json({error: "Invalid Token"});
    }
};


module.exports = authMiddleware;