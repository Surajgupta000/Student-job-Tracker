// src/components/JobList.jsx
import { useEffect, useState } from "react";
import { getJobs, deleteJob, updateJobStatus } from "../api/Job";
import toast from "react-hot-toast";

const JobList = ({ refresh }) => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState("All");

  const fetchJobs = async () => {
    try {
      const { data } = await getJobs();
      setJobs(data);
    } catch {
      toast.error("Failed to load jobs.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [refresh]);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this job?");
    if (!confirm) return;

    try {
      await deleteJob(id);
      toast.success("Job deleted.");
      fetchJobs();
    } catch {
      toast.error("Failed to delete.");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateJobStatus(id, status);
      toast.success("Status updated.");
      fetchJobs();
    } catch {
      toast.error("Failed to update status.");
    }
  };

  const filteredJobs = filter === "All" ? jobs : jobs.filter((j) => j.status === filter);

  return (
    <div className="p-6">
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="input w-auto">
          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </div>

      {filteredJobs.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          <p>No job applications found.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {filteredJobs.map((job) => (
            <div key={job._id} className="border rounded p-4 shadow flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold">{job.role} @ {job.company}</h3>
                <p>
                  Status:{" "}
                  <span className={`px-2 py-1 rounded text-white ${getStatusColor(job.status)}`}>
                    {job.status}
                  </span>
                </p>
                <p>Date: {job.appliedDate}</p>
                {job.link && (
                  <a href={job.link} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                    Link
                  </a>
                )}
              </div>
              <div className="flex flex-col space-y-2">
                <select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job._id, e.target.value)}
                  className="input"
                >
                  <option>Applied</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Applied":
      return "bg-blue-500";
    case "Interview":
      return "bg-yellow-500";
    case "Offer":
      return "bg-green-600";
    case "Rejected":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

export default JobList;
