import express from "express"
import { registerUser, verification, loginUser, logoutUser, forgotPassword, verifyOTP } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/verify", verification)
router.post("/login", loginUser)
router.post("/logout",isAuthenticated, logoutUser) // path or controller ke bich me aata h voh h middleware 
router.post("/forgot-password", forgotPassword)
router.post("/verify-otp/:email", verifyOTP)

export default router;