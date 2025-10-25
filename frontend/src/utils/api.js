// File: frontend/src/utils/api.js
import axios from "axios";

const BASE = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

const api = axios.create({
  baseURL: BASE,
  withCredentials: true,
});

export default api;
