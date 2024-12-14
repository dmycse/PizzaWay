import axios from "axios";

let requestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // timeout: 3000
};

export const axiosInstance = axios.create(requestConfig);