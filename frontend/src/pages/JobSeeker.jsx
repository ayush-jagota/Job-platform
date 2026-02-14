import { useEffect, useState } from "react";
import API from "../api/axios";
import "./JobSeeker.css";   // ✅ Import CSS

export default function JobSeeker() {
  const [jobs, setJobs] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const fetchJobs = async () => {
    const res = await API.get(
      `/jobs?keyword=${keyword}&location=${location}`
    );
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="jobseeker-wrapper">
      <div className="jobseeker-container">

        <h2>Job Search</h2>

        {/* Search Section */}
        <div className="search-box">
          <input
            placeholder="Search Job"
            onChange={(e) => setKeyword(e.target.value)}
          />

          <input
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />

          <button onClick={fetchJobs}>Search</button>
        </div>

        {/* Job List */}
        <div className="job-list">
          {jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
