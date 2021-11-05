import axios from "axios";

export const requests = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080",
});
