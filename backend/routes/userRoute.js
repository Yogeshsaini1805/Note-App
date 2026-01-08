import express from "express"
import { registerUser, verification, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/verify", verification)
router.post("/login", loginUser)
router.post("/logout", logoutUser)
export default router;