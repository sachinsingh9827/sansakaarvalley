const express = require('express');
const router = express.Router();
const {
    register,
    login,
    logout,
    updatePassword,
    getAllUsers,
    searchUser,
    deleteUser,
    verifyOtpController
} = require('../controllers/userController'); // Import controller methods
const authMiddleware = require('../middlewares/auth-middleware'); // Import middleware (if needed)

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updatePassword", updatePassword);
router.get("/users", getAllUsers);
router.post("/searchUser", searchUser);
router.delete("/deleteUser", deleteUser);
router.post("/verify-otp", verifyOtpController);

module.exports = router;
