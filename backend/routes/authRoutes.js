import express from "express";
import auth from "../controller/authController.js";

const router = express.Router();

router.post("/signup", auth.signUp);
router.post("/login", auth.login);
router.post("/logout", auth.logout);


export default router;