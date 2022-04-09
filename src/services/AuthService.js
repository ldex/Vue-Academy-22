import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://www.mocky.io/v2/5b9149823100002a00939952`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.error("Authentication API Error, " + error);
    return Promise.reject(error);
  }
);

export default {
  Login(credentials) {
    return apiClient.post("", credentials);
  },

  SetDefaultAuthorizationHeader(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },
};
