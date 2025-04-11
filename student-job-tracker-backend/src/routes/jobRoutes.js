const express = require("express");
const router = express.Router();
const {
  createJob,
  getJobs,
  updateJobStatus,
  deleteJob,
} = require("../controllers/jobController");

router.post("/jobs", createJob);
router.get("/jobs", getJobs);
router.patch("/jobs/:id", updateJobStatus);
router.delete("/jobs/:id", deleteJob);

module.exports = router;
// This code defines the routes for the job management functionality in the application.
// It uses Express.js to create a router and defines the following routes:
// - POST /jobs: Create a new job
// - GET /jobs: Get all jobs with optional filtering
// - PATCH /jobs/:id: Update the status of a job by ID
// - DELETE /jobs/:id: Delete a job by ID
// Each route is linked to a corresponding controller function that handles the request and response.
// The router is then exported for use in the main application file.
// This code is part of a larger application that tracks job applications for students.