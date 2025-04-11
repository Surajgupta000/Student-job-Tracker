// src/components/JobForm.jsx
import { useState } from "react";
import { addJob } from "../api/Job";
import toast from "react-hot-toast";

const JobForm = ({ onJobAdded }) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addJob(form);
      toast.success("Job added successfully!");
      onJobAdded(); // Refresh job list
      setForm({ company: "", role: "", status: "Applied", appliedDate: "", link: "" });
    } catch (error) {
      toast.error("Failed to add job.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4 max-w-md mx-auto"
    >
      <input name="company" placeholder="Company" className="input" value={form.company} onChange={handleChange} required />
      <input name="role" placeholder="Role" className="input" value={form.role} onChange={handleChange} required />
      <select name="status" className="input" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="appliedDate" className="input" value={form.appliedDate} onChange={handleChange} required />
      <input name="link" placeholder="Application Link" className="input" value={form.link} onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Job</button>
    </form>
  );
};

export default JobForm;
