import express from "express";
import {
  createJob,
  getJobs,
  updateJob,
  deleteJob,
} from "../controller/jobController.js";

import { protect } from "../middleware/auth.js";

const router = express.Router();

/* Recruiter */
router.post("/", protect, createJob);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

/* Job Seeker */
router.get("/", getJobs);

export default router;
