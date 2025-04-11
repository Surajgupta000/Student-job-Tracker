const Job = require("../models/job");

// Create a new job
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all jobs (optional filtering)
exports.getJobs = async (req, res) => {
  try {
    const { status, sort } = req.query;
    let query = {};
    if (status) query.status = status;

    let jobs = await Job.find(query);
    if (sort === "latest") {
      jobs = jobs.sort((a, b) => new Date(b.appliedDate) - new Date(a.appliedDate));
    }

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update job status
exports.updateJobStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
