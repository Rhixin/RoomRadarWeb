import axios from "axios";

// Create an Axios instance
const ApiClient = axios.create({
  baseURL: "http://localhost:5123/", // Update with your API base URL
  withCredentials: true, // Enable credentials (cookies, etc.)
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiClient;
