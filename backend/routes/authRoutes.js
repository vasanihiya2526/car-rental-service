const express = require("express");
const router = express.Router();
const {
    registerUser,
    loginUser,
} = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/authMiddleware");
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get(
    "/profile", protect, (req, res) => {
        res.status(200).json({
            success: true,
            user: req.user,
        });
    }
);
router.post("/cars", protect, adminOnly, (req, res) => {
    res.json({
        success: true,
        message: "Welcome Admin",
    });
});
module.exports = router;