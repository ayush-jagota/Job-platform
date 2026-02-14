import { useEffect, useState } from "react";
import API from "../api/axios";
import "./Recruiter.css";   // ✅ Import CSS

export default function Recruiter() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({});

  /* Load Jobs */
  const fetchJobs = async () => {
    const res = await API.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  /* Create Job */
  const submit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", form);
    setForm({});
    fetchJobs();
  };

  /* Delete Job */
  const remove = async (id) => {
    await API.delete(`/jobs/${id}`);
    fetchJobs();
  };

  return (
    <div className="recruiter-wrapper">
      <div className="recruiter-container">

        <h2>Recruiter Dashboard</h2>

        {/* Create Job */}
        <form className="job-form" onSubmit={submit}>
          <input
            placeholder="Title"
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <input
            placeholder="Company"
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
          />

          <input
            placeholder="Location"
            onChange={(e) =>
              setForm({ ...form, location: e.target.value })
            }
          />

          <input
            placeholder="Salary"
            onChange={(e) =>
              setForm({ ...form, salary: e.target.value })
            }
          />

          <textarea
            placeholder="Description"
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <button type="submit">Add Job</button>
        </form>

        {/* Job List */}
        <div className="recruiter-job-list">
          {jobs.map((job) => (
            <div className="recruiter-job-card" key={job._id}>
              <div>
                <h4>{job.title}</h4>
                <p>{job.company}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => remove(job._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
