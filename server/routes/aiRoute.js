import express from "express";
const router = express.Router();
import { generateImage, testRoute, generateJokes,generateImage2 } from "../controllers/ai.controller.js";

router.route("/").get(testRoute);
router.route("/").post(generateImage);
router.route("/cat").get(generateImage2);
router.route("/jokes").post(generateJokes);

export default router;
