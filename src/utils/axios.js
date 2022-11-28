import axios from "axios";

// Next we make an 'instance' of it

const instance = axios.create({
  //localStoragebaseURL: "http://localhost:8080",
  //baseURL: window.location.origin, //"http://localhost:8080",
  baseURL: "",
  // baseURL: process.env.API_URL,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// if (localStorage)

if (typeof window !== "undefined") {
  instance.defaults.headers.common.Authorization =
    "bearer " + localStorage?.getItem("accessToken");
}
// Also add/ configure interceptors && all the other cool stuff
const isHandlerEnabled = (config = {}) =>
  !(config.hasOwnProperty("handlerEnabled") && !config.handlerEnabled);

const errorHandlerResponse = (error) => {
  if (isHandlerEnabled(error.config)) {
    if (!error.response || !error.response.status) {
      error.response = { status: "network" };
    }

  
    if (error.response.status == 401) {
      localStorage.clear()

      setTimeout(() => (window.location = "/"), 1000);
    }

    if (error.response.status == 500) {
    }
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  if (isHandlerEnabled(response.config)) {
    // Handle responses
  }
  return response;
};

instance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandlerResponse(error)
);

export default instance;