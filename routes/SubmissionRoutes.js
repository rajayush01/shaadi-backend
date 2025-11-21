import express from "express";
import upload from "../middleware/upload.js";
import { createSubmission } from "../controllers/submissionController.js";

const router = express.Router();

// POST /api/submissions/upload
router.post("/upload", upload.single("photo"), createSubmission);

export default router;