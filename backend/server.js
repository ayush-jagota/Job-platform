import "./config/env.js";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";


const app = express();
const PORT = process.env.PORT;

connectDB();

// ✅ CORS configuration
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // allow cookies
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
