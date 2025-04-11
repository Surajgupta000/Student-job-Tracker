// src/pages/Home.jsx
import { useState } from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const triggerRefresh = () => setRefreshKey((prev) => prev + 1);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎯 Student Job Tracker</h1>
      <JobForm onJobAdded={triggerRefresh} />
      <JobList refresh={refreshKey} />
    </div>
  );
};

export default Home;
