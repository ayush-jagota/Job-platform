import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // change if needed
  withCredentials: true, // IMPORTANT for cookies
});

export default API;
