import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobSeeker from "./pages/JobSeeker";
import Recruiter from "./pages/Recruiter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/jobseeker" element={<JobSeeker />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
