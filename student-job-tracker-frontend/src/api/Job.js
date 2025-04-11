// src/api/jobs.js
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE/api || "http://localhost:5000/api";

export const getJobs = () => axios.get(`${API_BASE}/jobs`);

export const addJob = (jobData) => axios.post(`${API_BASE}/jobs`, jobData);

export const updateJobStatus = (id, status) =>
  axios.patch(`${API_BASE}/jobs/${id}`, { status });

export const deleteJob = (id) => axios.delete(`${API_BASE}/jobs/${id}`);
