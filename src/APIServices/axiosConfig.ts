import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    api_key: process.env.API_KEY
  }
});

instance.interceptors.request.use((req) => {
  const token = process.env.REACT_APP_TOKEN;
  req.headers["Authorization"] = token;
  return req;
});

instance.interceptors.response.use((res) => {
  try {
    if (res.status === 200 || res.status === 201 || res.status === 204) {
      return res;
    }
    else {
    }
  } catch (err) {
  }
  return res;
});

export default instance;
